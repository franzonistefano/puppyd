pragma solidity >=0.4.0 <0.8.0;
pragma experimental ABIEncoderV2;

contract PuppyContract {
 
    //model Animal
    enum Sex { M, F }
    enum PuppyType { Dog, Cat, Rabbit }
    struct Puppy {
        address petAddress;
        PuppyType puppyType;
        Sex sex;
        string name;
        string breed;
        string birthDate;
        string  distinguishingMarks;
        string microchipId;
        address[] children;
        Vaccine[] vaccines;
        address dad;
        address mom;
        address ownerAddress;
        bool isRegistered;
    }
    
    //model Vaccine
    struct Vaccine {
        string vaccineBatch;
        string date;
        string vaccineType;
    }
    
    //model Owner
    enum OwnerType {Private, Association}
    struct Owner {
        address ownerAddress;
        OwnerType ownerType;
        string name;
        //string surname;
        //string birthDate;
        //string homeAddress;
        string phone;
        string town;
        //string zipCode;
        //string country;
        string fiscalCode;
        address[] puppies;
        bool isRegistered;
    }
    
    //model Veterinarian
    struct Veterinarian {
        address vetAddress;
        string name;
        string surname;
        //string birthDate;
        //string homeAddress;
        string phone;
        //string town;
        //string zipCode;
        //string country;
        string fiscalCode;
        string number;
        string provincia;
        bool isRegistered;
    }
    
    //Transfer model
    struct Transfer {
        address puppyAddress;
        address fromAddress;
        address toAddress;
        uint timestamp;
    }

    //Insurance Contract model
    enum InsuranceType { HEALTH, DAMAGE }
    struct InsuranceContract {
        address insuranceCoAddress;
        address puppyAddress;
        InsuranceType insuranceType;
        //uint insuranceAmount;
        //uint maxCostCovered;
    }

    //Insurance Company model
    struct InsuranceCo {
        address companyAddress;
        uint contractNum;
    }
    
    //veterinarians, owners and puppies on the network mapped with their address
    mapping(address => Puppy) public puppies;
    mapping(address => Owner) public owners;
    mapping(address => Veterinarian) public veterinarians;
    mapping(uint => Transfer) public transfers;
    
    /***********************************************/
    /*                  Modifiers                  */
    /***********************************************/
    
    modifier onlyPuppy() {
        require(puppies[msg.sender].isRegistered);
        _;
    }

    modifier onlyOwner() {
        require(owners[msg.sender].isRegistered);
        _;
    }

    modifier onlyVeterinarian() {
        require(veterinarians[msg.sender].isRegistered);
        _;
    }
    
    modifier onlyPuppyOwner(address _puppyAddress) {
        require(puppies[_puppyAddress].ownerAddress == msg.sender);
        _;
    }
    
    /***********************************************/
    /*                Registration                 */
    /***********************************************/

    //register sender as Veterinarian
    function registerVeterinarian ( string memory _name, 
                                    string memory _surname, 
                                    //string memory _birthDate,
                                    //string memory _homeAddress,
                                    string memory _phone,
                                    //string memory _town,
                                    //string memory _zipCode,
                                    //string memory _country,
                                    string memory _fiscalCode,
                                    string memory _number,
                                    string memory _provincia) public {
                                        
      //check msg.sender not existing in veterinarians
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarians");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");
      
      Veterinarian storage v;
      v.vetAddress = msg.sender;
      v.name = _name;
      v.surname = _surname;
      //v.birthDate = _birthDate;
      //v.homeAddress = _homeAddress;
      v.phone = _phone;
      //v.town = _town;
      //v.zipCode = _zipCode;
      //v.country = _country;
      v.fiscalCode = _fiscalCode;
      v.number = _number;
      v.provincia = _provincia;
      v.isRegistered = true;
      veterinarians[msg.sender] = v;
    }
    
    //register address as Puppy
    function registerPuppy (PuppyType _type, 
                            Sex _sex, 
                            string memory _name,
                            string memory _breed,
                            string memory _birthDate,
                            string memory _distinguishingMarks,
                            string memory _microchipId,
                            address _dadAddress,
                            address _momAddress,
                            address _ownerAddress) public {
                                        
      //check msg.sender not existing in veterinarians
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarians");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");
      
      Puppy storage p;
      p.petAddress = msg.sender;
      p.puppyType = _type;
      p.sex = _sex;
      p.name = _name;
      p.breed = _breed;
      p.birthDate = _birthDate;
      p.distinguishingMarks = _distinguishingMarks;
      p.microchipId = _microchipId;
      p.children = new address[](0);
      //p.vaccines = new Vaccine[](0);
      p.dad = _dadAddress;
      p.mom = _momAddress;
      p.ownerAddress = _ownerAddress;
      p.isRegistered = true;
      puppies[msg.sender] = p;

      owners[_ownerAddress].puppies.push(msg.sender);
    }
    
    //register sender as Owner
    function registerOwner (OwnerType _ownerType,
                            string memory _name, 
                            //string memory _surname, 
                            //string memory _birthDate,
                            //string memory _homeAddress,
                            string memory _phone,
                            string memory _town,
                            //string memory _zipCode,
                            //string memory _country,
                            string memory _fiscalCode) public {
                                        
      //check msg.sender not existing in veterinarians
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarians");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");
      
      Owner storage o;
      o.ownerAddress = msg.sender;
      o.ownerType = _ownerType;
      o.name = _name;
      //o.surname = _surname;
      //o.birthDate = _birthDate;
      //o.homeAddress = _homeAddress;
      o.phone = _phone;
      o.town = _town;
      //o.zipCode = _zipCode;
      //o.country = _country;
      o.fiscalCode = _fiscalCode;
      o.isRegistered = true;
      owners[msg.sender] = o;
      
    }

    
    /***********************************************/
    /*                   Getters                   */
    /***********************************************/
    
    //get Owner Data
    function getOwnerData (address _ownerAddress) public view returns( Owner memory) {
      return owners[_ownerAddress];
    }
    
    //get Puppy Data
    function getPuppyData (address _puppyAddress) public view returns( Puppy memory) {
        return puppies[_puppyAddress];
    }
    
    //get Vaccine Data
    function getVaccineData(address _puppyAddress) public view returns (Vaccine[] memory) {
        return puppies[_puppyAddress].vaccines;
    }
    
    //get Veterinarian Data
    function getVeterinarianData (address _veterinarianAddress) public view returns( Veterinarian memory) {
      return veterinarians[_veterinarianAddress];
    }
    
    /***********************************************/
    /*                   Setters                   */
    /***********************************************/
    
    function addVaccine (address _puppyAddress, string memory _vaccineBatch, string memory _date, string memory _vaccineType) onlyVeterinarian public {
        Vaccine memory v = Vaccine(_vaccineBatch, _date, _vaccineType);
        //v.vaccineBatch = _vaccineBatch;
        //v.date = _date;
        //v.vaccineType = _vaccineType;
        
        puppies[_puppyAddress].vaccines.push(v);
        
    }
    
    function transferOwner (address _puppyAddress, address newOwner) onlyPuppyOwner(_puppyAddress) public {
        
        Transfer storage t;
        t.puppyAddress = _puppyAddress;
        t.fromAddress = msg.sender;
        t.toAddress = newOwner;
        t.timestamp = block.timestamp;
        
        transfers[t.timestamp] = t;
        puppies[_puppyAddress].ownerAddress = newOwner;
    } 

}
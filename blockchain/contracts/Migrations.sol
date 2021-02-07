// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;

import { PuppyLibrary } from "./PuppyLibrary.sol";

contract PuppyContract {

    //veterinarians, owners and puppies on the network mapped with their address
    mapping(address => PuppyLibrary.Puppy) public puppies;
    mapping(address => PuppyLibrary.Owner) public owners;
    mapping(address => PuppyLibrary.Veterinarian) public veterinarians;
    mapping(uint => PuppyLibrary.Transfer) public transfers;
    
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
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarian");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");                        
      
          PuppyLibrary.Veterinarian storage v;
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
    function registerPuppy (PuppyLibrary.PuppyType _type, 
                            PuppyLibrary.Sex _sex, 
                            string memory _name,
                            string memory _breed,
                            string memory _birthDate,
                            string memory _distinguishingMarks,
                            string memory _microchipId,
                            address _dadAddress,
                            address _momAddress,
                            address _ownerAddress) public {
                                        
      //check msg.sender not existing in veterinarians
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarian");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");
      
          PuppyLibrary.Puppy storage p;
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
    function registerOwner (PuppyLibrary.OwnerType _ownerType,
                            string memory _name, 
                            string memory _surname, 
                            //string memory _birthDate,
                            //string memory _homeAddress,
                            string memory _phone,
                            string memory _town,
                            //string memory _zipCode,
                            //string memory _country,
                            string memory _fiscalCode) public {
                                        
      //check msg.sender not existing in veterinarians
      require(!veterinarians[msg.sender].isRegistered, "Account already registered as Veterinarian");
      //check msg.sender not existing in owners
      require(!owners[msg.sender].isRegistered, "Account already registered as Owner");
      //check msg.sender not existing in puppies
      require(!puppies[msg.sender].isRegistered, "Account already registered as Puppy");
      
          PuppyLibrary.Owner storage o;
          o.ownerAddress = msg.sender;
          o.ownerType = _ownerType;
          o.name = _name;
          o.surname = _surname;
          //o.birthDate = _birthDate;
          //o.homeAddress = _homeAddress;
          o.phone = _phone;
          o.town = _town;
          //o.zipCode = _zipCode;
          //o.country = _country;
          o.fiscalCode = _fiscalCode;
          o.puppies = new address[](0);
          o.isRegistered = true;
          owners[msg.sender] = o;
      
      
    }

    
    /***********************************************/
    /*                   Getters                   */
    /***********************************************/
    
    //get Owner Data
    function getOwnerData (address _ownerAddress) public view returns( PuppyLibrary.Owner memory) {
      return owners[_ownerAddress];
    }
    
    //get Puppy Data
    function getPuppyData (address _puppyAddress) public view returns( PuppyLibrary.Puppy memory) {
        return puppies[_puppyAddress];
    }
    
    //get Vaccine Data
    function getVaccineData(address _puppyAddress) public view returns (PuppyLibrary.Vaccine[] memory) {
        return puppies[_puppyAddress].vaccines;
    }
    
    //get Veterinarian Data
    function getVeterinarianData (address _veterinarianAddress) public view returns( PuppyLibrary.Veterinarian memory) {
      return veterinarians[_veterinarianAddress];
    }
    
    /***********************************************/
    /*                   Setters                   */
    /***********************************************/
    
    function addVaccine (address _puppyAddress, string memory _vaccineBatch, string memory _date, string memory _vaccineType) onlyVeterinarian public {
        PuppyLibrary.Vaccine memory v = PuppyLibrary.Vaccine(_vaccineBatch, _date, _vaccineType);
        //v.vaccineBatch = _vaccineBatch;
        //v.date = _date;
        //v.vaccineType = _vaccineType;
        
        puppies[_puppyAddress].vaccines.push(v);
        
    }
    
    function transferOwner (address _puppyAddress, address newOwner) onlyPuppyOwner(_puppyAddress) public {
        
        PuppyLibrary.Transfer storage t;
        t.puppyAddress = _puppyAddress;
        t.fromAddress = msg.sender;
        t.toAddress = newOwner;
        t.timestamp = block.timestamp;
        
        transfers[t.timestamp] = t;
        puppies[_puppyAddress].ownerAddress = newOwner;
        
        //delete puppy from owner puppies array
        for (uint i = 0; i< owners[msg.sender].puppies.length-1; i++){
            if(owners[msg.sender].puppies[i] == _puppyAddress){
                delete owners[msg.sender].puppies[i];
            }
        }
    } 

}
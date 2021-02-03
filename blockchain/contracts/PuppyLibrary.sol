// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

library PuppyLibrary {

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
        string surname;
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

}
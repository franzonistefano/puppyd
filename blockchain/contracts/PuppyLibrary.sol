// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

library PuppyLibrary {

     //model Animal
    enum Sex { M, F }
    enum PuppyType { DOG, CAT, RABBIT, HORSE }
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
    enum OwnerType {PRIVATE, ASSOCIATION}
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

}
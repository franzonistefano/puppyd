// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract InsuranceContract {
    
    struct InsuranceCo {
        address companyAddress;
        string name;
        string comapanyCode;
        uint numContract;
    }

    enum ContractType {HEALTH, DAMAGE}
    struct Contract {
        ContractType contractType;
        address puppyAddress;
        address companyAddress;
        uint timestamp;
        uint duration;
        uint costPerYear;
        uint maxCostCoverage;
    }

     mapping(address => InsuranceCo) public companies;

}

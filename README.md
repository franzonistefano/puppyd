<p align="center">
  <img src="src/assets/img/logo.png"  height="100">
</p>

# Puppyd

[puppyd.it](https://puppyd.it)

![GitHub issues](https://img.shields.io/badge/version-beta--v1.0-green)
![GitHub issues](https://img.shields.io/badge/npm-6.4.1-green)
![GitHub issues](https://img.shields.io/badge/web3-1.2.6-green)
![GitHub issues](https://img.shields.io/badge/sass-1.30.0-green)
![GitHub issues](https://img.shields.io/badge/redux-4.0.5-green)
![GitHub issues](https://img.shields.io/badge/truffle-5.1.62-green)
![GitHub issues](https://img.shields.io/badge/typescript-4.1.2-green)


PuppYd is the first open source animal registry in the world. There are 3 smart contract deployed on Ethereum blockchain that allows Owners, Veterinarians and Insurance companies to register themself and performs several actions. 
The decentralized application, developed in React, improve the UI and UX for the interaction with the Ethereum network.

---

# **Table of Contents**

- [Methods](#methods)

---

<a name="methods"></a>
## Methods

- [Common](#common)
- [Owner](#owner)
- [Veterinarian](#vet)
 

<a name="common"></a>
### Common
```
registerVeterinarian ( string memory _name, 
                                    string memory _surname, 
                                    string memory _phone,
                                    string memory _fiscalCode,
                                    string memory _number,
                                    string memory _provincia)
```

```
registerPuppy (PuppyLibrary.PuppyType _type, 
                            PuppyLibrary.Sex _sex, 
                            string memory _name,
                            string memory _breed,
                            string memory _birthDate,
                            string memory _distinguishingMarks,
                            string memory _microchipId,
                            address _dadAddress,
                            address _momAddress,
                            address _ownerAddress)
```

```
registerOwner (PuppyLibrary.OwnerType _ownerType,
                            string memory _name, 
                            string memory _surname, 
                            string memory _phone,
                            string memory _town,
                            string memory _fiscalCode)
```

```
 getOwnerData (address _ownerAddress)
```

```
getPuppyData (address _puppyAddress)
```

```
getVaccineData(address _puppyAddress)
```

<a name="owner"></a>
### Owner
```
getVeterinarianData (address _veterinarianAddress)
```

<a name="vet"></a>
### Veterinarian
```
addVaccine (address _puppyAddress, string memory _vaccineBatch, string memory _date, string memory _vaccineType)
```



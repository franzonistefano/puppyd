# Puppyd

![GitHub issues](https://img.shields.io/badge/version-beta--v1.0-green)
![GitHub issues](https://img.shields.io/badge/npm-6.4.1-green)
![GitHub issues](https://img.shields.io/badge/web3-1.2.6-green)
![GitHub issues](https://img.shields.io/badge/sass-1.30.0-green)
![GitHub issues](https://img.shields.io/badge/redux-4.0.5-green)
![GitHub issues](https://img.shields.io/badge/truffle-5.1.62-green)
![GitHub issues](https://img.shields.io/badge/typescript-4.1.2-green)


PuppYd is the first open source animal registry in the world. There are 3 smart contract deployed over Ethereum blockchain that allows Owners, Veterinarians and Insurance companies to register themself and performs several actions. 
The decentralized Application, develped in React, improve the interaction usability with the Ethereum network.

## Methods

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

```
 getOwnerData (address _ownerAddress)
```

### Owner
```
getVeterinarianData (address _veterinarianAddress)
```

### Veterinarian
```
addVaccine (address _puppyAddress, string memory _vaccineBatch, string memory _date, string memory _vaccineType)
```



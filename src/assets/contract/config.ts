export const contractAddress = "0xd7393490bfcc345A987ce946ce35ddaB528e5B62"; //'0x14E32B2d5d44c11FAfaE48597eFF68649994044c';

export const abiContract: any = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_puppyAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_vaccineBatch",
        type: "string",
      },
      {
        internalType: "string",
        name: "_date",
        type: "string",
      },
      {
        internalType: "string",
        name: "_vaccineType",
        type: "string",
      },
    ],
    name: "addVaccine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
    ],
    name: "getOwnerData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "ownerAddress",
            type: "address",
          },
          {
            internalType: "enum PuppyLibrary.OwnerType",
            name: "ownerType",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "surname",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "town",
            type: "string",
          },
          {
            internalType: "string",
            name: "fiscalCode",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "puppies",
            type: "address[]",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
        ],
        internalType: "struct PuppyLibrary.Owner",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_puppyAddress",
        type: "address",
      },
    ],
    name: "getPuppyData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "petAddress",
            type: "address",
          },
          {
            internalType: "enum PuppyLibrary.PuppyType",
            name: "puppyType",
            type: "uint8",
          },
          {
            internalType: "enum PuppyLibrary.Sex",
            name: "sex",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "breed",
            type: "string",
          },
          {
            internalType: "string",
            name: "birthDate",
            type: "string",
          },
          {
            internalType: "string",
            name: "distinguishingMarks",
            type: "string",
          },
          {
            internalType: "string",
            name: "microchipId",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "children",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "vaccineBatch",
                type: "string",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
              {
                internalType: "string",
                name: "vaccineType",
                type: "string",
              },
            ],
            internalType: "struct PuppyLibrary.Vaccine[]",
            name: "vaccines",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "dad",
            type: "address",
          },
          {
            internalType: "address",
            name: "mom",
            type: "address",
          },
          {
            internalType: "address",
            name: "ownerAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
        ],
        internalType: "struct PuppyLibrary.Puppy",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_puppyAddress",
        type: "address",
      },
    ],
    name: "getVaccineData",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "vaccineBatch",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "string",
            name: "vaccineType",
            type: "string",
          },
        ],
        internalType: "struct PuppyLibrary.Vaccine[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_veterinarianAddress",
        type: "address",
      },
    ],
    name: "getVeterinarianData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "vetAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "surname",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "fiscalCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "number",
            type: "string",
          },
          {
            internalType: "string",
            name: "provincia",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
        ],
        internalType: "struct PuppyLibrary.Veterinarian",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "enum PuppyLibrary.OwnerType",
        name: "ownerType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "town",
        type: "string",
      },
      {
        internalType: "string",
        name: "fiscalCode",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "puppies",
    outputs: [
      {
        internalType: "address",
        name: "petAddress",
        type: "address",
      },
      {
        internalType: "enum PuppyLibrary.PuppyType",
        name: "puppyType",
        type: "uint8",
      },
      {
        internalType: "enum PuppyLibrary.Sex",
        name: "sex",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "breed",
        type: "string",
      },
      {
        internalType: "string",
        name: "birthDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "distinguishingMarks",
        type: "string",
      },
      {
        internalType: "string",
        name: "microchipId",
        type: "string",
      },
      {
        internalType: "address",
        name: "dad",
        type: "address",
      },
      {
        internalType: "address",
        name: "mom",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum PuppyLibrary.OwnerType",
        name: "_ownerType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "_town",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fiscalCode",
        type: "string",
      },
    ],
    name: "registerOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum PuppyLibrary.PuppyType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "enum PuppyLibrary.Sex",
        name: "_sex",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_breed",
        type: "string",
      },
      {
        internalType: "string",
        name: "_birthDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "_distinguishingMarks",
        type: "string",
      },
      {
        internalType: "string",
        name: "_microchipId",
        type: "string",
      },
      {
        internalType: "address",
        name: "_dadAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_momAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
    ],
    name: "registerPuppy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fiscalCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_number",
        type: "string",
      },
      {
        internalType: "string",
        name: "_provincia",
        type: "string",
      },
    ],
    name: "registerVeterinarian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_puppyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfers",
    outputs: [
      {
        internalType: "address",
        name: "puppyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "veterinarians",
    outputs: [
      {
        internalType: "address",
        name: "vetAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "surname",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "fiscalCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "number",
        type: "string",
      },
      {
        internalType: "string",
        name: "provincia",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
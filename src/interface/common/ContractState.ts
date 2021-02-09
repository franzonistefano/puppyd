export interface Puppy {
    petAddress?: string;
    type: number;
    sex: number;
    name: string;
    breed: string;
    birthDate: string;
    distinguishingMarks: string;
    microchipId: string;
    dadAddress?: string;
    momAddress?: string;
    ownerAddress: string;
    isRegistered?: boolean;
}

export interface Owner {
    ownerAddress?: string;
    ownerType: number;
    name: string;
    //surname: string;
    //birthDate: string;
    //homeAddress: string;
    phone: string;
    town: string;
    //zipCode: string;
    //country: string;
    puppies?: any[];
    fiscalCode: string;
    isRegistered?: boolean;
}

export interface Veterinarian {
    vetAddress?: string;
    name: string;
    surname: string;
    //birthDate: string;
    //homeAddress?: string;
    phone: string;
    //town?: string;
    //zipCode?: string;
    //country?: string;
    fiscalCode: string;
    number: string;
    provincia: string;
    isRegistered?: boolean;
}

export interface Vaccine {
    puppyAddress: string,
    vaccineBatch: string,
    date: string,
    vaccineType: string
}

export interface Transfer {
    puppyAddress: string,
    newOwner: string
}
export interface Puppy {
    type: number;
    sex: number;
    name: string;
    breed: string;
    birthDate: string;
    distinguishingMarks: string;
    microchipId: string;
    dadAddress: string;
    momAddress: string;
    ownerAddress: string;
}

export interface Owner {
    ownerType: number;
    name: string;
    surname: string;
    birthDate: string;
    homeAddress: string;
    phone: string;
    town: string;
    zipCode: string;
    country: string;
    fiscalCode: string;
}

export interface Veterinarian {
    vetAddress?: string;
    name: string;
    surname: string;
    birthDate: string;
    homeAddress?: string;
    phone: string;
    town?: string;
    zipCode?: string;
    country?: string;
    fiscalCode: string;
    number: string;
    provincia: string;
}

export interface Vaccine {
    puppyAddress: string,
    vaccineBatch: string,
    date: string,
    vaccineType: string
}
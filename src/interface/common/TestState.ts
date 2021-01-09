import { Owner, Puppy, Veterinarian } from "./ContractState";

export default interface TestState {
    loading: boolean,
    veterinarian: Veterinarian,
    owner: Owner,
    puppy: Puppy
}
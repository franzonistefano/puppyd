import { Owner, Puppy, Veterinarian } from "./ContractState";

export default interface TestState {
    loading: boolean,
    veterinarian: Veterinarian | null,
    owner: Owner | null,
    puppy: Puppy | null,
    getter: string | null
}
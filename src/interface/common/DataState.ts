import { Owner, Puppy, Veterinarian } from "./ContractState";

export default interface DataState {
    loading: boolean,
    veterinarian: Veterinarian | null,
    owner: Owner | null,
    puppy: Puppy | null,
    getter: string | null
}
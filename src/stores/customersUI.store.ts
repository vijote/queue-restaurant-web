import { writable } from "svelte/store";
import Customer from "../entities/Customer";

const customersUI = writable<Customer[]>([]);

export function addCustomerUI(newCustomer: Customer) {
    customersUI.update((customersUI) => [...customersUI, newCustomer]);
}

export function updateCustomersUI(newUI: Customer[]) {
    customersUI.update(() => newUI);
}


export default customersUI;
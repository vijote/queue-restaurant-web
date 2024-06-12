import { writable } from "svelte/store";
import Customer from "../entities/Customer";

const customers = writable<Customer[]>([]);

export function addCustomer(newCustomer: Customer) {
    customers.update((customers) => [...customers, newCustomer])
}

export function removeCustomer(customer: Customer) {    
    customers.update((customers) => {
        const index = customers.findIndex(cust => cust === customer)

        if(index === -1) throw new Error('customer not found!')

        return [...customers.slice(0, index), ...customers.slice(index + 1)]
    })
}


export default customers;
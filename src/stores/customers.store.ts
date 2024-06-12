import { writable } from "svelte/store";
import Customer from "../entities/Customer";

const customers = writable<Customer[]>([]);

export function addCustomer(newCustomer: Customer) {
    customers.update((customers) => [...customers, newCustomer])
}

export function updateCustomer(id: number, x: number, y: number) {
    customers.update((customers) => {
        const index = customers.findIndex(c => c.id === id);
        
        customers[index].x = x;
        customers[index].y = y;

        return customers;
    });
}


export default customers;
import type Customer from "./Customer";

class MovePoint {
    private id: string;
    private _x: number;
    private _y: number;
    private _isShelf: boolean;
    private currentCustomer: Customer | null = null;
    private customerQueue: Customer[] = []

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get isShelf() {
        return this._isShelf;
    }

    public receiveNextCustomer() {
        if(this.currentCustomer) this.currentCustomer.requestNextStep();

        if(this.customerQueue.length === 0) this.currentCustomer = null;
        
        // Find the next
        const customer = this.customerQueue.shift()

        if(!customer) return

        // Receive it
        this.currentCustomer = customer;
        customer.advanceToStep(this.id);
    }

    private constructor(id: string, x: number, y: number, isShelf?: boolean) {
        this.id = id;
        this._x = x;
        this._y = y;
        this._isShelf = isShelf ?? false;
    }

    public static new(id: string, x: number, y: number, isShelf?: boolean) {
        return new MovePoint(id, x, y, isShelf);
    }

    public addCustomerToQueue(customer: Customer) {
        // Don't add a customer that's already in
        if(this.customerQueue.includes(customer)) return;

        this.customerQueue.push(customer);
    }
}

export default MovePoint
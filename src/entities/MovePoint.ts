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

    private constructor(id: string, x: number, y: number, isShelf?: boolean) {
        this.id = id;
        this._x = x;
        this._y = y;
        this._isShelf = isShelf ?? false;
    }

    public static new(id: string, x: number, y: number, isShelf?: boolean) {
        return new MovePoint(id, x, y, isShelf);
    }

    public receiveNextCustomer() {
        // If there's already a customer
        // make it go away
        if (this.currentCustomer) {
            console.log(this.id, 'has a customer!');
            
            this.currentCustomer.requestNextStep();
            return;
        }

        // Find the next
        const customer = this.customerQueue.shift();

        if (!customer) return;

        // Receive it
        this.currentCustomer = customer;
        customer.fulfillStepRequest();
        // customer.advanceToStep(this.id);
    }

    public addCustomerToQueue(customer: Customer) {
        // Don't add a customer that's already in
        if (this.customerQueue.includes(customer)) return;

        this.customerQueue.push(customer);
    }

    public departCustomer(customer: Customer) {
        if(customer !== this.currentCustomer) throw new Error('customer is invalid!');
        
        this.currentCustomer = null;
    }
}

export default MovePoint
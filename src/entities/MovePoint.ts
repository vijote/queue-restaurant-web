import type Customer from "./Customer";

class MovePoint {
    private id: string;
    private _x: number;
    private _y: number;
    private _isShelf: boolean;
    private currentCustomer: Customer | null = null;
    private upcomingCustomer: Customer | null = null;
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

    public receiveCustomer(newCustomer: Customer) {
        if (this.currentCustomer !== null) return false;

        this.currentCustomer = newCustomer;
        return true;
    }

    public receiveNextCustomer() {
        const customer = this.customerQueue.shift()

        if(!customer) return

        this.currentCustomer = customer;
        customer.goToStep(this.id)
    }

    public departCustomer() {
        this.currentCustomer = null;
    }

    public setUpcomingCustomer(newCustomer: Customer | null) {
        this.upcomingCustomer = newCustomer;
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

    public isFree() {
        return this.currentCustomer === null;
    }

    public addCustomerToQueue(customer: Customer) {
        this.customerQueue.push(customer);
    }
}

export default MovePoint
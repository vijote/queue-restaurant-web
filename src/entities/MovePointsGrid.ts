import MovePoint from "../entities/MovePoint";
import Customer from "./Customer";
import Product from "./Product";

// Height
const POS_Y_A = 7;
const POS_Y_B = 28;
const POS_Y_C = 50;
const POS_Y_D = 72;
const POS_Y_E = 92;

// Width
const POS_X_1 = 95;
const POS_X_2 = 66;
const POS_X_3 = 32;
const POS_X_4 = 5;

class MovePointsGrid {
    private static map = new Map([
        ['A1', MovePoint.new('A1', POS_X_1, POS_Y_A)],
        ['A2', MovePoint.new('A2', POS_X_2, POS_Y_A)],
        ['A3', MovePoint.new('A3', POS_X_3, POS_Y_A)],
        ['B1', MovePoint.new('B1', POS_X_1, POS_Y_B)],
        ['B2', MovePoint.new('B2', POS_X_2, POS_Y_B)],
        ['B2_1', MovePoint.new('B2_1', POS_X_2 - 7, POS_Y_B, true)],
        ['B3', MovePoint.new('B3', POS_X_3, POS_Y_B)],
        ['B3_1', MovePoint.new('B3_1', POS_X_3 - 7, POS_Y_B, true)],
        ['C1', MovePoint.new('C1', POS_X_1, POS_Y_C)],
        ['C2', MovePoint.new('C2', POS_X_2, POS_Y_C)],
        ['C2_1', MovePoint.new('C2_1', POS_X_2 - 7, POS_Y_C, true)],
        ['C3', MovePoint.new('C3', POS_X_3, POS_Y_C)],
        ['C3_1', MovePoint.new('C3_1', POS_X_3 - 7, POS_Y_C)],
        ['D1', MovePoint.new('D1', POS_X_1, POS_Y_D)],
        ['D2', MovePoint.new('D2', POS_X_2, POS_Y_D)],
        ['D2_1', MovePoint.new('D2_1', POS_X_2 - 7, POS_Y_D, true)],
        ['D3', MovePoint.new('D3', POS_X_3, POS_Y_D)],
        ['D3_1', MovePoint.new('D3_1', POS_X_3 - 7, POS_Y_D, true)],
        ['E1', MovePoint.new('E1', POS_X_1, POS_Y_E)],
        ['E2', MovePoint.new('E2', POS_X_2, POS_Y_E)],
        ['E3', MovePoint.new('E3', POS_X_3, POS_Y_E)],
        ['E4', MovePoint.new('E4', POS_X_4, POS_Y_E)]
    ])

    private static getPoint(id: string) {
        const point = MovePointsGrid.map.get(id);
        if (point === undefined) throw new Error('point not found!')
        return point;
    }

    public static spawnPoint = MovePointsGrid.getPoint('A1');

    public static getPointsList() {
        return Array.from(MovePointsGrid.map.values())
    }

    public static isPointFree(id: string) {
        return MovePointsGrid.getPoint(id).isFree()
    }

    public static getPointPosition(id: string) {
        const point = MovePointsGrid.getPoint(id)
        return { x: point.x, y: point.y }
    }

    public static departCustomerFromPoint(id: string) {
        MovePointsGrid.getPoint(id).departCustomer()
    }

    public static receiveCustomerOnPoint(id: string, customer: Customer) {
        MovePointsGrid.getPoint(id).receiveCustomer(customer)
    }

    public static placeCustomerInQueue(id: string, customer: Customer) {
        MovePointsGrid.getPoint(id).addCustomerToQueue(customer)
    }

    public static addCustomerToPointQueue(id: string, customer: Customer) {
        MovePointsGrid.getPoint(id).addCustomerToQueue(customer)
    }

    public static spawnCustomer(onPathCompleted: (customer: Customer) => void) {
        const newCustomer = Customer.new(Product.Tomato(), onPathCompleted);

        this.placeCustomerInQueue('A1', newCustomer);

        return newCustomer;
    }
}

export default MovePointsGrid;
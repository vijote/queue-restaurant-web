import type { Path } from "../types/types"
import type Customer from "./Customer";
import MovePointsGrid from "./MovePointsGrid";

class Product {
    private path: Path

    private constructor(path: Path) {
        this.path = path;
    }

    public getStepId(index: number) {
        const foundStep = this.path.at(index);

        if(!foundStep) throw new Error('Step not found!');

        return foundStep;
    }

    public getPathLength() {
        return this.path.length;
    }

    public getStepIndex(id: string) {
        const foundIndex = this.path.findIndex(step => step === id)

        if (foundIndex === -1) throw new Error('Step not found!')

        return foundIndex
    }

    public addCustomerToPathPoints(customer: Customer) {
        this.path.forEach(point => {
            MovePointsGrid.addCustomerToPointQueue(point, customer)
        })
    }

    static Tomato() {
        return new Product([
            'A1',
            'A2',
            'B2',
            'B2_1',
            'B2',
            'C2',
            'D2',
            'E2',
            'E3',
            'E4'
        ])
    }
}

export default Product
import MovePointsGrid from "./MovePointsGrid";

class Customer {
    public x: number = MovePointsGrid.spawnPoint.x;
    public y: number = MovePointsGrid.spawnPoint.y;
    public color: string = this.generateColor();

    private onPathCompleted: (customer: Customer) => void;
    private path: string[]
    private currentStepId: string;

    private generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    private constructor(path: string[], onPathCompleted: (customer: Customer) => void) {
        this.onPathCompleted = onPathCompleted;
        this.path = path;
        const firstStepId = path.at(0);

        if (firstStepId === undefined) throw new Error('array is empty!')
        this.currentStepId = firstStepId;
    }

    public getCurrentStep() {
        return MovePointsGrid.getPointPosition(this.currentStepId)
    }

    public static new(path: string[], onPathCompleted: (customer: Customer) => void) {
        return new Customer(path, onPathCompleted)
    }

    public requestNextStep() {
        const nextStepId = this.path.shift()

        if (nextStepId === undefined) {
            this.onPathCompleted(this);
            return;
        }

        MovePointsGrid.placeCustomerInQueue(nextStepId, this);
    }

    public advanceToStep(id: string) {
        this.currentStepId = id;
    }
}

export default Customer;
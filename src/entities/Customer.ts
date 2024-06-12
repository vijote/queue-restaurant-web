import type Product from "./Product";
import MovePointsGrid from "./MovePointsGrid";

class Customer {
    public x: number = MovePointsGrid.spawnPoint.x;
    public y: number = MovePointsGrid.spawnPoint.y;
    public target: Product
    private currentStepIndex: number = 0;
    private currentStepId: string;

    private constructor(target: Product) {
        this.target = target;
        this.currentStepId = target.getStepId(0);
        this.requestPointsFromPathToAddItselfToQueue();
    }

    public getCurrentStep() {
        return MovePointsGrid.getPointPosition(this.currentStepId)
    }

    public static new(target: Product) {
        return new Customer(target)
    }

    public goToStep(id: string) {
        const foundIndex = this.target.getStepIndex(id);
        const pointPosition = MovePointsGrid.getPointPosition(id)

        this.x = pointPosition.x;
        this.y = pointPosition.y;
        this.currentStepId = id;
        this.currentStepIndex = foundIndex;
    }

    public goToNextStep() {
        if (this.currentStepIndex === this.target.getPathLength() - 1) return;

        const nextStepIndex = this.currentStepIndex + 1;
        const nextStepId = this.target.getStepId(nextStepIndex);
        
        if (!MovePointsGrid.isPointFree(nextStepId)) return;

        // const upcomingStepIndex = this.currentStepIndex + 2;
        // const upcomingStepId = this.target.getStepId(upcomingStepIndex);

        MovePointsGrid.departCustomerFromPoint(this.currentStepId);
        MovePointsGrid.receiveCustomerOnPoint(nextStepId, this);
        this.currentStepIndex = nextStepIndex;
        this.currentStepId = nextStepId;
    }

    private requestPointsFromPathToAddItselfToQueue() {
        this.target.addCustomerToPathPoints(this)
    }
}

export default Customer;
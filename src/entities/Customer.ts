import MovePointsGrid from "./MovePointsGrid";

class Customer {
    public color: string = this.generateColor();

    private onPathCompleted: (customer: Customer) => void;
    private path: string[];
    private currentStepId: string | null = null;
    private stepRequestInProgress: string | null = null;

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
    }

    public static new(path: string[], onPathCompleted: (customer: Customer) => void) {
        return new Customer(path, onPathCompleted);
    }

    public getCurrentStep() {
        if (!this.currentStepId) return undefined;

        return MovePointsGrid.getPointPosition(this.currentStepId)
    }

    public requestNextStep() {
        // Wait until the current request finishes
        if (this.stepRequestInProgress) return;

        // Check if the following step is a shelf and is occupied
        // (not the next, but one more)
        const upcomingStepId = this.path.at(1);
        if (upcomingStepId
            && MovePointsGrid.isPointAShelf(upcomingStepId)
            && MovePointsGrid.isPointOccupied(upcomingStepId)) {
            return;
        }

        const nextStepId = this.path.shift();

        // If there's a next step to go
        if (nextStepId) {
            MovePointsGrid.placeCustomerInQueue(nextStepId, this);
            this.stepRequestInProgress = nextStepId;
            return;
        }

        // If all the steps are done
        this.onPathCompleted(this);
        if (this.currentStepId) MovePointsGrid.departCustomerFromPoint(this.currentStepId, this)
    }

    public fulfillStepRequest() {
        if (this.currentStepId) MovePointsGrid.departCustomerFromPoint(this.currentStepId, this);

        this.currentStepId = this.stepRequestInProgress;
        this.stepRequestInProgress = null;
    }

    public advanceToStep(id: string) {
        this.currentStepId = id;
    }
}

export default Customer;
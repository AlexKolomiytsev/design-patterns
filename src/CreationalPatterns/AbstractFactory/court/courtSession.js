export class CourtSession {
    constructor(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }

    complainPresented(complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        }
        else {
            this.abstractFactory.getKing().makeDecision();
        }
    }
}
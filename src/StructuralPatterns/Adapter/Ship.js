export class Ship {
    SetRudderAngleTo(angle){
        console.log(`SetRudderAngleTo - ${angle}`);
    }
    SetSailConfiguration(configuration){
        console.log(`SetSailConfiguration - ${configuration}`);
    }
    SetSailAngle(sailId, sailAngle){
        console.log(`SetSailAngle - ${sailId}, ${sailAngle}`);
    }
    GetCurrentBearing() {
        const currentBearing = 8;
        console.log(`GetCurrentBearing - ${currentBearing}`);

        return currentBearing;
    }
    GetCurrentSpeedEstimate() {
        const currentSpeedEstimate = 8;
        console.log(`GetCurrentSpeedEstimate - ${currentSpeedEstimate}`);

        return currentSpeedEstimate;
    }
    ShiftCrewWeightTo(weightToShift, locationId) {
        console.log(`ShiftCrewWeightTo - ${weightToShift}, ${locationId}`);
    }
}
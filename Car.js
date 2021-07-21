class Car {
    constructor(data) {
        this.data = data;
    }
    intro() {
        console.log(`This is ${this.data.brand}.`);
    }
    doorsCount() {
        console.log(`${this.data.brand} has ${this.data.doors.length} doors`)

    }
    doorsWorking() {
        let workingDoors = 0;
        for (let i = 0; i < this.data.doors.length; i++) {
            const doors = this.data.doors[i];
            if (doors.working === true) {
                ++workingDoors;
            }
        }
        if (this.data.doors.length === workingDoors) {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, and all works`);
        }
        else {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only ${workingDoors} work`);
        }
    }

    maxDistance() {
        const maximumDistance = this.data.tankSize.maxSize / this.data.fuelComsumption * 100;
        console.log(`${this.data.brand} can travel maximum ${Math.round(maximumDistance)} km`);
    }
    canTravel(kilometers) {
        const maxDist = this.data.tankSize.currentSize / this.data.fuelComsumption * 100;
        if (maxDist >= kilometers) {
            console.log(`${this.data.brand} can travel ${kilometers} km`);
        }

        else {
            console.log(`${this.data.brand} can't travel ${kilometers} km, it has fuel only for ${Math.round(maxDist)} km.`)
        }
    }
    continueTravel(kilometers) {
        const maxDist = this.data.tankSize.currentSize / this.data.fuelComsumption * 100;
        const reikiaPiniguKurui = ((kilometers - maxDist) / 100 * this.data.fuelComsumption) * this.data.fuelCostPerLitre;

        if (kilometers <= maxDist) {
            console.log(`${this.data.brand} can travel ${kilometers} km, no extra fuel is needed`);
        }
        if (kilometers >= maxDist) {
            console.log(`${this.data.brand} can't travel ${kilometers} km, you need ${Math.round(reikiaPiniguKurui)} EUR for extra fuel`);
        }

    }
}



module.exports = Car;
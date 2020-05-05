function Flights() {

    function calculateNumberOfFlights(numPassengers, flightCap) {

        let numFlights = 0;

        if( numPassengers < 0 || !Number.isInteger(Number(numPassengers)) ) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if( flightCap < 0 || !Number.isInteger(Number(flightCap)) ) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }

        if(numPassengers % flightCap == 0) {
            numFlights = numPassengers / flightCap;
        }
        else {
            numFlights = Math.floor(numPassengers / flightCap) + 1;
        }

        return numFlights;
    }

    function checkAircraftRevision(distanceLimit, distances) {

        let totalDistance = 0;
        let returnString = '';

        distances.forEach(distance => {
            totalDistance += distance;
        });

        if(totalDistance <= distanceLimit/2) {
            returnString = "The revision needs to be done within the next 3 months";
        } else if(totalDistance <= distanceLimit*3/4) {
            returnString = "The revision needs to be done within the next 2 months";
        } else if(totalDistance <= distanceLimit) {
            returnString = "The revision needs to be done within the next month";
        } else if(totalDistance > distanceLimit) {
            throw new Error("Total distance is over the distance limit");
        }

        return returnString;
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();


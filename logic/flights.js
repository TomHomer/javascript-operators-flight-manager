function Flights() {

    function calculateNumberOfFlights(numPassengers, flightCap) {

        let numFlights = 0;

        if(numPassengers % flightCap == 0) {
            numFlights = numPassengers / flightCap;
        }
        else {
            numFlights = Math.floor(numPassengers / flightCap) + 1;
        }

        return numFlights;
    }

    return {calculateNumberOfFlights};
}

module.exports = Flights();


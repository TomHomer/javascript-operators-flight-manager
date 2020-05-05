function Passengers() {

    function checkFlightCapacity(flightCapacity, passengerNumbers) {

        let totalPassengers = 0;

        passengerNumbers.forEach(pNo => {
            totalPassengers += pNo;
        });

        if(totalPassengers > flightCapacity) {
            throw new Error("This flight is over capacity");
        } else {
            return totalPassengers;
        }
    }

    function distrubuteAllSeatsToAllPassengers(vips, regular, flights, busPerFlight, ecoPerFlight) {

        let vipBus = 0;
        let vipEco = 0;
        let regBus = 0;
        let regEco = 0;

        let totalBus = busPerFlight * flights;
        let totalEco = ecoPerFlight * flights;

        if(vipBus + vipEco < vips || vipBus + regBus < totalBus) {
            if(vips <= totalBus) {
                vipBus = vips;
            } else {
                vipBus = totalBus;
            }
        }

        if(vipBus + vipEco < vips || vipEco + regEco < totalEco) {
            if(vips - vipBus <= totalEco) {
                vipEco = vips - vipBus;
            } else {
                vipEco = totalEco;
            }
        }

        if(regBus + regEco < regular || vipBus + regBus < totalBus) {
            if(regular <= totalBus - vipBus) {
                regBus = regular;
            } else {
                regBus = totalBus - vipBus;
            }
        }

        if(regBus + regEco < regular || vipEco + regEco < totalEco) {
            if(regular - regBus <= totalEco - vipEco) {
                RegEco = regular - regBus;
            } else {
                regEco = totalEco - vipEco
            }
        }

        let seatDist = {vipBus, vipEco, regBus, regEco};
        return seatDist;
    }

    return {checkFlightCapacity, distrubuteAllSeatsToAllPassengers};
}

module.exports = Passengers();
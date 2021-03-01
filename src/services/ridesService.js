const rideRepository = require('../repository/rideRepository');

// INSERT
module.exports.insert = async (req, res) => {
    //RECEIVING PARAM
    const startLatitude = Number(req.body.start_lat);
    const startLongitude = Number(req.body.start_long);
    const endLatitude = Number(req.body.end_lat);
    const endLongitude = Number(req.body.end_long);
    const riderName = req.body.rider_name;
    const driverName = req.body.driver_name;
    const driverVehicle = req.body.driver_vehicle;

    //VALIDATING PARAM
    if (startLatitude < -90 || startLatitude > 90 || startLongitude < -180 || startLongitude > 180) {
        return res.send({
            error_code: 'VALIDATION_ERROR',
            message: 'Start latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'
        });
    }

    if (endLatitude < -90 || endLatitude > 90 || endLongitude < -180 || endLongitude > 180) {
        return res.send({
            error_code: 'VALIDATION_ERROR',
            message: 'End latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'
        });
    }

    if (typeof riderName !== 'string' || riderName.length < 1) {
        return res.send({
            error_code: 'VALIDATION_ERROR',
            message: 'Rider name must be a non empty string'
        });
    }

    if (typeof driverName !== 'string' || driverName.length < 1) {
        return res.send({
            error_code: 'VALIDATION_ERROR',
            message: 'Rider name must be a non empty string'
        });
    }

    if (typeof driverVehicle !== 'string' || driverVehicle.length < 1) {
        return res.send({
            error_code: 'VALIDATION_ERROR',
            message: 'Rider name must be a non empty string'
        });
    }

    var values = [req.body.start_lat, req.body.start_long, req.body.end_lat, req.body.end_long, req.body.rider_name, req.body.driver_name, req.body.driver_vehicle];
    
    try {
        const generatedID =  await rideRepository.insert(values);
        const row = await rideRepository.getRideById(generatedID);
        return res.send(row);
    } catch (err) {
        console.log(err)
        return res.send({
            error_code: 'SERVER_ERROR',
            message: 'Unknown error'
        });
    }
}

// GET BY ID
module.exports.getRideById = async (req, res) => {

    if (isNaN(req.params.id)) {
        return res.send({
            error_code: 'ILLEGAL_PARAMETER',
            message: 'Ride ID must be numeric'
        });
    }
    try {
        const row = await rideRepository.getRideById(req.params.id);
        return res.send(row);
    } catch (err) {
        return res.send({
            error_code: 'SERVER_ERROR',
            message: 'Unknown error'
        });
    }
}

module.exports.getRides = async (req, res) => {
    try {
        const page = req.query.page;
        const view = req.query.view;
        const count = await rideRepository.count();
        if (page == null && view == null) {
            var rows = await rideRepository.getAllRides();
        } else {
            const limit = view;
            const offset = (page - 1) * view;
            var rows = await rideRepository.getRides(limit, offset);
        }
        return res.send(rows);
    } catch (err) {
        console.log(err);
        res.send({
            error_code: 'SERVER_ERROR',
            message: 'Unknown error'
            });
    }
}




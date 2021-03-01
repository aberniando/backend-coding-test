const db = require('../../database');

module.exports.getRideById = async (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM Rides WHERE rideID = ' + id, function (err, row) {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

module.exports.count = async => {
    return new Promise((resolve, reject) => {
        db.get('SELECT COUNT(rideID) AS count FROM Rides', function (err, row) {
            if (err) {
                reject(err);
            } else {
                resolve(row.count);
            }
        });
    });
}

module.exports.getAllRides = async () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM Rides', function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports.getRides = async (limit, offset) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Rides ORDER BY rideID LIMIT ' + limit + ' OFFSET ' + offset;
        console.log(query);
        db.all(query, function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports.insert = async (values) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO Rides(startLat, startLong, endLat, endLong, riderName, driverName, driverVehicle) VALUES (?, ?, ?, ?, ?, ?, ?)', values, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

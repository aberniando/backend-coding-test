# Xendit Rides API Documentation

These APIs are services for client to add a new ride information, get all rides information and get a specific ride information.

## 1. Add a new ride information
- Path: /rides
- HTTP Method: POST
- HTTP Request:
####
    {
    "start_lat":"45",
    "start_long":"120",
    "end_lat":"-45",
    "end_long":"-119",
    "rider_name":"Gandalf",
    "driver_name":"Saruman",
    "driver_vehicle":"Honda Beat"
    }
    
Request definition:
|No.|Field|Mandatory|Remarks|Constraint|
|---|-----|---------|-------|----------|
|1|start_lat|Y|Latitude value of starting point|Must be >= -90 and <= 90|
|2|start_long|Y|Longiture value of starting point|Must be >= -180 and <= 180|
|3|end_lat|Y|Latitude value of ending point|Must be >= -90 and <= 90|
|4|end_long|Y|Longiture value of ending point|Must be >= -180 and <= 180|
|5|rider_name|Y|Rider's name|
|6|driver_name|Y|Driver's name|
|7|driver_vehicle|Y|Driver's vehicle information|
- HTTP Response:
####
    {
    "rideID": 3,
    "startLat": 45,
    "startLong": 120,
    "endLat": -45,
    "endLong": -119,
    "riderName": "Chris",
    "driverName": "Paul",
    "driverVehicle": "Honda Vario",
    "created": "2021-02-27 06:29:27"
    }
Response definition:
|No.|Field|Mandatory|Remarks|
|---|---|---|---|
|1|rideID|Y|Generated ride identifier|
|2|startLat|Y|Latitude value of starting point|
|3|startLong|Y|Longiture value of starting point|
|4|endLat|Y|Latitude value of ending point|
|5|endLong|Y|Longiture value of ending point|
|6|riderName|Y|Rider's name|
|7|driverName|Y|Driver's name|
|8|driverVehicle|Y|Driver's vehicle information|
|9|created|Y|Generated ride timestamp|

## 2. Get a specific ride information
- Path: /rides/{rideID}
- HTTP Method: GET
- URL parameter definition:

|No.|Field|Mandatory|Remarks|Constraint|
|---|-----|---------|-------|----------|
|1|rideID|Y|Given ride identifier upon adding a new ride|Integer data type|
- HTTP Response:
####
    {
    "rideID": 3,
    "startLat": 45,
    "startLong": 120,
    "endLat": -45,
    "endLong": -119,
    "riderName": "Chris",
    "driverName": "Paul",
    "driverVehicle": "Honda Vario",
    "created": "2021-02-27 06:29:27"
    }
Response definition:
|No.|Field|Mandatory|Remarks|
|---|---|---|---|
|1|rideID|Y|Generated ride identifier|
|2|startLat|Y|Latitude value of starting point|
|3|startLong|Y|Longiture value of starting point|
|4|endLat|Y|Latitude value of ending point|
|5|endLong|Y|Longiture value of ending point|
|6|riderName|Y|Rider's name|
|7|driverName|Y|Driver's name|
|8|driverVehicle|Y|Driver's vehicle information|
|9|created|Y|Generated ride timestamp|

## 3. Get rides information
- Path: /rides
- HTTP Method: GET
- Query param request definition:

|No.|Field|Mandatory|Remarks|Constraint|
|---|-----|---------|-------|----------|
|1|page|N|Pagination value|Must be numeric value. View query param must be filled|
|2|view|N|Number of data shown per page|Must be numeric value. Page query param must be filled|
- HTTP Response:
####
    [
        {
        "rideID": 3,
        "startLat": 45,
        "startLong": 120,
        "endLat": -45,
        "endLong": -119,
        "riderName": "Chris",
        "driverName": "Paul",
        "driverVehicle": "Honda Vario",
        "created": "2021-02-27 06:29:27"
        },
        {
        "rideID": 4,
        "startLat": 65,
        "startLong": 130,
        "endLat": -35,
        "endLong": -137,
        "riderName": "Samuel",
        "driverName": "Nathan",
        "driverVehicle": "Honda Beat",
        "created": "2021-02-27 06:29:30"
        }  
    ]
Response definition:
|No.|Field|Mandatory|Remarks|
|---|---|---|---|
|1|rideID|Y|Generated ride identifier|
|2|startLat|Y|Latitude value of starting point|
|3|startLong|Y|Longiture value of starting point|
|4|endLat|Y|Latitude value of ending point|
|5|endLong|Y|Longiture value of ending point|
|6|riderName|Y|Rider's name|
|7|driverName|Y|Driver's name|
|8|driverVehicle|Y|Driver's vehicle information|
|9|created|Y|Generated ride timestamp|
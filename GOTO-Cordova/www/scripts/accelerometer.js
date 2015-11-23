function captureAccelerometerData() {
    navigator.accelerometer.getCurrentAcceleration(AccelerometerSuccess, AccelerometerError);
}

function AccelerometerSuccess(acceleration) {
    output = document.getElementById("accelerometer");
    output.innerHTML = output.innerHTML + "<p>X: " + acceleration.x + " Y: " + acceleration.y + " Z: " + acceleration.z + "</p>";
    console.log(acceleration);
}

function AccelerometerError(error) {
    console.log("Error: " + error);
}
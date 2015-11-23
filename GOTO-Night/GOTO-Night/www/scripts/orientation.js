function captureDeviceOrientation() {
    navigator.compass.getCurrentHeading(compassSuccess, compassError);
}

function compassSuccess(heading) {
    output = document.getElementById("orientation");
    output.innerHTML = output.innerHTML + "<p>Heading (degrees): " + heading.magneticHeading + "</p>";
    console.log(heading);
}

function compassError(error) {
    console.log("Error: " + error);
}

/* Watchers */

function watchDeviceOrientation() {
    var options = {
        frequency: 500
    };

    navigator.compass.watchHeading(watchCompassSuccess, watchCompassError, options);
}

function watchCompassSuccess(heading) {
    var output = document.getElementById("watchOrientation");
    output.innerHTML = "<p>Heading (degrees): " + heading.magneticHeading + " | " + heading.timestamp + "</p>";
}

function watchCompassError(error) {
    console.log("Error: " + error);
}
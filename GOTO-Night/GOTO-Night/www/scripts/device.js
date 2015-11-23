function getDeviceInformation() {
    var output = document.getElementById("deviceinformation");

    output.innerHTML = output.innerHTML + "<p>" + device.manufacturer + "</p>";
    output.innerHTML = output.innerHTML + "<p>" + device.model + "</p>";
    output.innerHTML = output.innerHTML + "<p>" + device.modelName + "</p>";
    output.innerHTML = output.innerHTML + "<p>" + device.platform + "</p>";
}
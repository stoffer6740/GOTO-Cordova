// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    var msg = document.getElementById("cordovaMsg");

    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById("getImage").addEventListener("click", capturePhoto);
        document.getElementById("getAccelerometerData").addEventListener("click", captureAccelerometerData);
        document.getElementById("getDeviceOrientation").addEventListener("click", captureDeviceOrientation);
        document.getElementById("getDeviceInformation").addEventListener("click", getDeviceInformation);
        document.getElementById("watchDeviceOrientation").addEventListener("click", watchDeviceOrientation);

        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        msg.innerHTML = msg.innerHTML + "<p>Device is ready.</p>";
    };

    function onPause() {
        msg.innerHTML = msg.innerHTML + "<p>Application pausing.</p>";
        console.log("App is paused.");
    };

    function onResume() {
        msg.innerHTML = msg.innerHTML + "<p>Application resuming.</p>";
        console.log("App has been resumed.");
    };
} )();
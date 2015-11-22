

function capturePhoto() {

    var cameraOptions = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    }

    navigator.camera.getPicture(CameraSuccess, CameraError, cameraOptions);
}

function CameraSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function CameraError(error) {
    alert("Something went wrong");
    console.log(error);

}


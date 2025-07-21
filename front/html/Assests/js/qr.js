import LAN_IP from './config.js';

var btnGenerateQr = document.getElementById("btnGenerateQr");

// Add click event listener
btnGenerateQr.addEventListener("click", function() {
    generateQr();
});
generateQr();

function generateQr(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);



    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(`http://${LAN_IP}:8080/requestQr`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            var base64ImageData = JSON.parse(result).imageData;

            // Select the image element
            var imgElement = document.getElementById("qrImage");

            // Set the src attribute of the image element with the base64 image data
            imgElement.src = "data:image/jpeg;base64," + base64ImageData;
        })
        .catch((error) => console.error(error));
}
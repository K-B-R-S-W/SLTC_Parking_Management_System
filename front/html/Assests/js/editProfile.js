import LAN_IP from './config.js';

function loadProfile() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);
    myHeaders.append("Cookie", "JSESSIONID=7368D0372EB6E3A1CADE28924B5DD473");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(`http://${LAN_IP}:8080/myDetails`, requestOptions)
        .then((response) => response.text())
        .then((result) =>{
            console.log(result)
            $('#user').val(JSON.parse(result).userType)
            console.log(JSON.parse(result).userType)
            $('#name').val(JSON.parse(result).name)
            $('#email').val(JSON.parse(result).email)
            $('#uniId').val(JSON.parse(result).uniId)
            $('#password').val(JSON.parse(result).password)
            $('#vehicleNumber').val(JSON.parse(result).vehicleNumber)
            $('#vehicleBrand').val(JSON.parse(result).vehicleBrand)
            $('#vehicle-type').val(JSON.parse(result).vehicleType)
            $('#vehicleId').val(JSON.parse(result).vehicleId)

        } )
        .catch((error) => console.error(error));
}

loadProfile()

$('#btnUpdateProfile').click(e=>{
    e.preventDefault()
    updateProfile()
})

function updateProfile() {
    var name = $('#name').val();
    var email = $('#email').val();
    var uniId = $('#uniId').val();
    var password = $('#password').val();
    var vehicleNumber = $('#vehicleNumber').val();
    var vehicleBrand = $('#vehicleBrand').val();
    var vehicleType = $('#vehicle-type').val();
    var vehicleId = $('#vehicleId').val();
    var userType = $('#user').val();


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);
    myHeaders.append("Cookie", "JSESSIONID=7368D0372EB6E3A1CADE28924B5DD473");

    const raw = JSON.stringify({
        "id": "",
        "name": name,
        "uniId": uniId,
        "vehicleId": vehicleId,
        "vehicleNumber": vehicleNumber,
        "vehicleBrand": vehicleBrand,
        "email": email,
        "password": password,
        "userType": userType,
        "vehicleType": vehicleType,
        "token": null
    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/update", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

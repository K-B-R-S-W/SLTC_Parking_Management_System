import LAN_IP from './config.js';

function loadAll(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(`http://${LAN_IP}:8080/mySlot`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            var id = JSON.parse(result).id===0 ? '-------' : 'E-'+JSON.parse(result).id
            var pay_status = JSON.parse(result).id===0 ? 'Last Payment' :'Pending to Pay';
            console.log(pay_status)
            document.getElementById("payment_status").innerText = pay_status
            document.getElementById('slot_number').innerText = id
        })
        .catch((error) => console.error(error));


}

function loadPayments(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);


    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(`http://${LAN_IP}:8080/pendingPayment`, requestOptions)
        .then((response) => response.text())
        .then((result) =>{
            console.log(result)
            var value = +result===0 ? '------' : `Rs.${result}`;
            document.getElementById('payment').innerText = value
        } )
        .catch((error) => console.error(error));
}

function loadCountOfSlots(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("user")).token);
    myHeaders.append("Cookie", "JSESSIONID=7368D0372EB6E3A1CADE28924B5DD473");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(`http://${LAN_IP}:8080/slotCount`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            var val = +result;
            var fr = val===0 ? '--------------' : val

            document.getElementById('slot_count').innerText = fr
        })
        .catch((error) => {
            console.error(error)
            document.getElementById('slot_count').innerText = '---------';
        });
}

loadAll()
loadCountOfSlots()
loadPayments()



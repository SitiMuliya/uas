$(document).ready(function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        data = JSON.parse(xhttp.response);
        for (let x = 0; x < data.length; x++) {
            let row = `<tr>
                <td>${data[x]["accid"]}</td>
                <td>${data[x]["code"]}</td>
                <td>${data[x]["changepct"]}</td>
                <td>${data[x]["bid"]}</td>
                <td>${data[x]["ask"]}</td></tr>`;
            $("#hasil").append(row);
        }
    };
    xhttp.open("GET", "https://api.reku.id/v2/bidask");
    xhttp.send();
}
)
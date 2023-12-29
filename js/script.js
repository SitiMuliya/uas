// $(document).ready(function(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         data = JSON.parse(xhttp.response);
//         for (let x = 0; x < data.length; x++) {
//             let row = `<tr>
//                 <td>${data[x]["accid"]}</td>
//                 <td>${data[x]["code"]}</td>
//                 <td>${data[x]["changepct"]}</td>
//                 <td>${data[x]["bid"]}</td>
//                 <td>${data[x]["ask"]}</td></tr>`;
//             $("#hasil").append(row);
//         }
//     };
//     xhttp.open("GET", "https://api.reku.id/v2/bidask");
//     xhttp.send();
// }
// )
let originalData; // Variable to store the original data

        // Fetch data from the REST API
        fetch('https://api.reku.id/v2/bidask')
            .then(response => response.json())
            .then(data => {
                // Store the original data
                originalData = [data]; // Wrap the single data object in an array for consistency

                // Process the data and populate the table
                const tableBody = document.querySelector('#dataTable tbody');

                data.forEach(dat => {
                    const row = `<tr>
                        <td>${dat.accid}</td>
                        <td>${dat.code}</td>
                        <td>${dat.changepct}</td>
                        <td>${dat.bid}</td>
                        <td>${dat.ask}</td>
                    </tr>`;
                    tableBody.innerHTML += row;
                });
            })
            .catch(error => console.error('Error fetching data:', error));

            function searchData() {
                const input = document.getElementById('searching');
                const filter = input.value.toUpperCase();
                const table = document.getElementById('dataTable');
                const rows = table.getElementsByTagName('tr');
    
                for (let i = 0; i < rows.length; i++) {
                    const tdAccid = rows[i].getElementsByTagName('td')[0]; // Index 0 corresponds to the ID column
                    const tdCode = rows[i].getElementsByTagName('td')[1]; 
                    const tdChangepct = rows[i].getElementsByTagName('td')[2];
                    const tdBid = rows[i].getElementsByTagName('td')[3];
                    const tdAsk = rows[i].getElementsByTagName('td')[4];
                    if (tdAccid || tdCode || tdChangepct || tdBid|| tdAsk) {
                        const txtValueAccid = tdAccid.textContent || tdAccid.innerText;
                        const txtValueCode = tdCode.textContent || tdCode.innerText;
                        const txtValueChangepct = tdChangepct.textContent || tdChangepct.innerText;
                        const txtValueBid = tdBid.textContent || tdBid.innerText;
                        const txtValueAsk = tdAsk.textContent || tdAsk.innerText;
                        if (txtValueAccid.toUpperCase().indexOf(filter) > -1 || txtValueCode.toUpperCase().indexOf(filter) > -1 || txtValueChangepct.toUpperCase().indexOf(filter) > -1|| txtValueBid.toUpperCase().indexOf(filter) > -1|| txtValueAsk.toUpperCase().indexOf(filter) > -1)  {
                            rows[i].style.display = '';
                        } else {
                            rows[i].style.display = 'none';
                        }
                    }
                } 
            }
'use strict'

const date = new Date();
let currentYear = date.getFullYear();

let campos = [
    document.querySelector('#nome'),
    document.querySelector('#email'),
    document.querySelector('#ano'),
]

let tbody = document.querySelector('table tbody');

document.querySelector('#data').addEventListener('submit', function(e) {
    e.preventDefault();

    let tr = document.createElement('tr');
    
    campos.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    let tdIdade = document.createElement('td');
    tdIdade.textContent = currentYear - campos[2].value;
    tr.appendChild(tdIdade);

    tbody.appendChild(tr);
});


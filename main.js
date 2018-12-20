'use strict'

// cria objeto Date e atribui a uma variável o ano atual completo
const date = new Date();
let currentYear = date.getFullYear();

// coleta os campos dos formulários e monta uma array
let campos = [
    document.querySelector('#nome'),
    document.querySelector('#email'),
    document.querySelector('#ano'),
]

// seleciona o wrapper da tabela que iremos preencher
let tbody = document.querySelector('table tbody');

// selecionamos o formlário e atribuimos um listener de evento ao submit do botão
document.querySelector('#data').addEventListener('submit', function(e) {
    e.preventDefault();

    // criamos uma tag <tr>
    let tr = document.createElement('tr');
    
    // cria uma tag <td> preenche com o valor campo iterado e adiciona a tag <tr>
    campos.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    // cria uma <td> extra, preenche com o calculo do ano atual - idade e adiciona a <tr>
    let tdIdade = document.createElement('td');
    tdIdade.textContent = currentYear - campos[2].value;
    tr.appendChild(tdIdade);

    // adiciona a <tr> completa ao <tbody>
    tbody.appendChild(tr);

    // limpando os campos
    campos[0].value = ''; 
    campos[1].value = ''; 
    campos[2].value = '';
    
    // adicionando foco no primeiro campo
    campos[0].focus();
});


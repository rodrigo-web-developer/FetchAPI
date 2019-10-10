function processarErros(erros) {
    var mensagem = "";
    if (erros.length) {
        erros.forEach(e => {
            mensagem += e.memberNames[0] + ": " + e.errorMessage + "<br>";
        });
    } else if (erros.mensagem) {
        mensagem = erros.mensagem;
    }
    var x = document.getElementById("erros_form");
    if (x) {
        x.innerHTML = mensagem;
    }
}

function formDataToJson(form) {
    var data = new FormData(form);
    var json = {};
    for (const item of data.keys()) {
        json[item] = data.get(item);
    }
    return { string: JSON.stringify(json), object: json };
}

function getUrlApi() {
    return "http://semanati2019fetch.azurewebsites.net";
}

function getValue(obj, prop){
    var x = prop.split(".");
    var a = obj;
    for(var p of prop){
        a = a[p];
    }
    return a;
}

function addTableLines(data, columns, tableId) {
    var table = document.getElementById(tableId);
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    data.forEach(d => {
        var tr = "<tr>";
        columns.forEach(c => {
            tr += "<td>" + getValue(d, c) + "</td>"
        });
        tr += '<td><a href="#" onclick="transitionTo(event, \'/'+ tableId +'/editar/'+ d["id"] +'\')" href="/" class="btn btn-warning">Editar</a></td>';
        tr += '<td><a href="#" href="/" class="btn btn-danger">Deletar</a></td></tr>';
        tbody.innerHTML += tr;
    });
}

function updateSuperiorDireito(){
    var x = localStorage.getItem("userName");
    var element = document.getElementById("superior_direito");
    if(x){
        element.innerHTML = '<label class="text-success">Bem-vindo, '+ x +' </label><button class="btn btn-outline-warning my-2 my-sm-0" onclick="transitionTo(event, \'/logout\')" type="submit">Logout</button>';
    } else{
        element.innerHTML = '<button class="btn btn-outline-success my-2 my-sm-0" onclick="transitionTo(event, \'/login\')" type="submit">Login</button>';
    }
}
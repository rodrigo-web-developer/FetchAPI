function processarErros(erros) {
    var mensagem = "";
    if (erros.length) {
        erros.forEach(e => {
            mensagem += e.memberNames[0] + ": " + e.errorMessage + "<br>";
        });
    } else if (erros.mensagem) {
        mensagem = erros.mensagem || erros.message;
    }
    var x = document.getElementById("erros_form");
    if (x) {
        x.innerHTML = mensagem;
    }
}

function formDataToJson(form, id) {
    var data = new FormData(form);
    var json = {};
    if (id) json.id = id;
    for (const item of data.keys()) {
        json[item] = data.get(item);
    }
    return { string: JSON.stringify(json), object: json };
}

function getUrlApi() {
    return "http://semanati2019fetch.azurewebsites.net";
}

function getValue(obj, prop) {
    var x = prop.split(".");
    var a = obj;
    for (var p of x)
        a = a[p];
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
        tr += '<td><button onclick="transitionTo(event, \'/' + tableId + '/editar/' + d.id + '\')" class="btn btn-warning">Editar</button></td>';
        tr += '<td><button onclick="deletar(' + d.id + ')" class="btn btn-danger">Deletar</button></td></tr>';
        tbody.innerHTML += tr;
    });
}

function updateSuperiorDireito() {
    var x = localStorage.getItem("userName");
    var element = document.getElementById("superior_direito");
    if (x) {
        element.innerHTML = '<label class="text-success">Bem-vindo, ' + x + ' </label><button class="btn btn-outline-warning my-2 my-sm-0" onclick="transitionTo(event, \'/logout\')" type="submit">Logout</button>';
    } else {
        element.innerHTML = '<button class="btn btn-outline-success my-2 my-sm-0" onclick="transitionTo(event, \'/login\')" type="submit">Login</button>';
    }
}

function preencherDadosForm(dados, form) {
    var inputs = form.getElementsByTagName("input");
    var textareas = form.getElementsByTagName("textarea");
    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        input.value = dados[input.name]
    }
    for (let index = 0; index < textareas.length; index++) {
        const textarea = textareas[index];
        textarea.innerHTML = dados[textarea.name];
    }
    var selects = form.getElementsByTagName("select");
    for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        select.value = dados[select.name];
    }
}

function loadDropDown(dados, element, texto) {
    element.innerHTML = "";
    dados.forEach(d => {
        element.innerHTML += '<option value="' + d.id + '">' + d[texto] + '</option>';
    });
}
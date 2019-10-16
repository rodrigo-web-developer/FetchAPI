function buscarCategorias(i) {
    return fetch(getUrlApi() + "/api/categoria/" + (i || ""));
}

function salvarCategoria(body, method) {
    return fetch(getUrlApi() + "/api/categoria", {
        body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        method: method
    });
}
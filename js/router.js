function changeView() {
    var content = $("#conteudo");
    switch (window.location.pathname) {
        case "/produtos/criar":
            content.load("/src/produto/form.html");
            break;
        case "/produtos":
            content.load("/src/produto/list.html");
            break;
        case "/categorias/criar":
            content.load("/src/categoria/form.html");
            break;
        case "/categorias":
            content.load("/src/categoria/list.html");
            break;
        case "/login":
            content.load("/src/login.html");
            break;
        case "/logout":
            localStorage.clear();
            window.location = "/";
            break;
        default:
            var editar = window.location.pathname.match(/\/(\w+)\/editar\/(\d+)/);
            if (editar) {
                switch (editar[1]) {
                    case "categorias":
                        content.load("/src/categoria/form.html");
                        break;
                    case "produtos":
                        content.load("/src/produto/form.html");
                        break;
                }
            } else {
                content.html("");
            }
            break;
    }
}

function transitionTo(e, url) {
    e && e.preventDefault();
    window.history.pushState("", "", url);
    changeView();
}

$(document).ready(changeView);
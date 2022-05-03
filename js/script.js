const weak = () => {
    document.querySelector("#normal").style.display = "initial";
    document.querySelector("#week").style.display = "none";

    document.querySelector("link[href='css/style.css']").href = "css/weak.css";
    var table = document.querySelector("table");
    if(table != null) {
        table.classList.toggle("table-hover");
    }
}

const normal = () => {
    document.querySelector("#week").style.display = "initial";
    document.querySelector("#normal").style.display = "none";

    document.querySelector("link[href='css/weak.css']").href = "css/style.css";

    var table = document.querySelector("table");
    if(table != null) {
        table.classList.toggle("table-hover");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var clientRows = document.getElementsByClassName("client-row");

    for (var i = 0; i < clientRows.length; i++) {
        clientRows[i].addEventListener("click", function () {
            var clientData = this.nextElementSibling;
            clientData.style.display = clientData.style.display === "none" ? "table-row" : "none";
        });
    }
});

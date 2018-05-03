function search() {
    console.log("Search");
}

function callServerWithoutParams() {
    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displaySearch").html(JSON.stringify(response, null, 4));
        })
        .catch((ex) => {
            console.log(ex);
        })
}

window.onload = function() {
    $("#btnSearch").click(callServerWithoutParams)
};


// $(document).ready(function() { 'use strict';
// });

const errNumberConversion = "That's not a number!";

function callServerWithoutParams() {
    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
            $("#displaySearch").html(JSON.stringify(response, null, 4));
        })
        .catch((ex) => {
            console.log(ex);
        })
}

function getFeetInAMile() {
    fetch('/feetInAMile')
        .then((response) => response.json())
        .then((response) => {
            $("#displayFeetInMile").html(response["result"]);
        }).catch((ex) => {
            console.log(ex);
    })
}

function calculateFeetInMile(){
    calculate(/xFeetInXMiles/);
}

function calculateCircumference(){
    calculate(/circleCircumference/);
}

function calculate(url){
    let userInput = $("#inputCalculate").val();
    userInput = parseInt(userInput);

    if(isNaN(userInput)){
        $("#displayCalculateResult").html(errNumberConversion);
        return;
    }

    fetch(`${url}${userInput}`)
        .then((response) => response.json())
        .then((response) => {
            $("#displayCalculateResult").html(response["result"]);
        }).catch((ex) => {
        console.log(ex);
    });
}

window.onload = function() {
    $("#btnSearch").click(callServerWithoutParams);
    $("#btnGetFeetInMile").click(getFeetInAMile);
    $("#btnCalculateXFeetInXMiles").click(calculateFeetInMile);
    $("#btnCalculateCircle").click(calculateCircumference);
};

function getTriviaStr(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText)["results"];
}

// TODO this function should make new (p) with the tivia text in it
function getNewRandomTrivia() {
    var trivias = getTriviaStr("https://opentdb.com/api.php?amount=1");
    console.log(trivias[0]["question"])

    var newtrivia = document.createElement("p");
    newtrivia.innerHTML = trivias[0]["question"];
    thetivias.appendChild(newtrivia);

}

// trivias.forEach(elements => {
//     console.log(elements['question'])
// });
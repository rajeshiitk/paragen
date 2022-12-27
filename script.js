const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");


function generateWord(n) {
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word = "";
    for (let i = 0; i < n; i++) {
        const random = (Math.random() * (letter.length - 1)).toFixed(0);  // generate a random number b/w 0 to 25 values after point will be ignored because of toFixed(0)
        word += letter[random];
    }
    return word;
}


function paraGene(noOfWord2) {
    let data = "";
    for (let i = 0; i < noOfWord2; i++) {
        const randomNum = (Math.random() * 10).toFixed(0);
        data += generateWord(randomNum);
        data += " ";
    }
    return data;
}
let noOfWord2;
function generatePara  () {
    noOfWord2 = Number(input.value);   // bydefalut it's string we wrapped it into  number
    
    if(noOfWord2 == 0){
        return null;
    }
    const paragraph = document.createElement("p");

    
    paragraph.innerText = paraGene(noOfWord2);
    paragraph.setAttribute("class", "para");

    container.append(paragraph);
}


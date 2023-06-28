const colorDiv = document.getElementById("colorDiv");
const redRange = document.getElementById("redRange");
const blueRange = document.getElementById("blueRange");
const greenRange = document.getElementById("greenRange");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");

function generateRandom(){
    return Math.floor(Math.random() * 255)
}
function changeBackground(){
    const color = "rgb(" + redRange.value + ", " + greenRange.value +", " + blueRange.value + ")";
    colorDiv.style.backgroundColor = color;
    rgb.value = color;
    hex.value = "#" + rgbToHex(redRange.value) + rgbToHex(greenRange.value) + rgbToHex(blueRange.value);
}

function randomBackground(){
    redRange.value = generateRandom();
    greenRange.value = generateRandom();
    blueRange.value = generateRandom();

    changeBackground();
}

randomBackground();



function rgbToHex(value){
    //Index
    const hexIndex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let a, b, c;

    if(value % 16 == 0){
        a = value / 16;
        b = 0;
    }else{
        a = value / 16;
        let values = a.toString().split(".");
        a = Number(values[0]);
        b = Number("0." + values[1]);
        b = b * 16;
    }

    return (hexIndex[a] + hexIndex[b]);
}
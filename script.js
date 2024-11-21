const squareGreenButton = document.querySelector('#squareGreenButton')
console.log(squareGreenButton);

//cta button
squareGreenButton.addEventListener("click", function() {
    console.log("knappen fungerer");
    const squareGreenHide = document.querySelector("#squareGreenHide")
    console.log(squareGreenHide);

    squareGreenHide.classList.toggle("hidden");
});

const redSquareShowText = document.querySelector('#redSquareShowText');
const squareRedButton = document.querySelector('#squareRedButton');
console.log(redSquareShowText, squareRedButton);
const squareRedText = document.createElement("p");

//add p element with hidden class
squareRedText.textContent = "dette er litt tekst";
redSquareShowText.appendChild(squareRedText);
squareRedText.classList.add("hidden");

squareRedButton.addEventListener("click", function() {
    console.log("knapp redd funker");
    squareRedText.classList.toggle("hidden");
});

const squareBlueShowImg = document.querySelector('#squareBlueShowImg')
const squareBlueButton = document.querySelector('#squareBlueButton')
console.log(squareBlueShowImg, squareBlueButton);

const blueImg = document.createElement("img");
console.log(blueImg);

blueImg.src="hamburger.png";
blueImg.alt="bilde"
blueImg.classList.add("hidden");
blueImg.classList.add("squareImg");
squareBlueShowImg.appendChild(blueImg);

//cta button
squareBlueButton.addEventListener("click", function() {
    console.log("knappen fungerer");

    blueImg.classList.toggle("hidden");
});

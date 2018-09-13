
let BusMallImageArray = [];

let elImageRandom = document.getElementById("random-image");

let Image = function(name, filePath, id) {
    this.name = name;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClicks;
}

//instanitiating new image object

let Bag = new Image ("Bag", "./assets/bag.jpg", "bag");
let Banana = new Image ("Banana", "./assets/banana.jpg", "banana");
let Bathroom = new Image ("Bathroom", "./assets/bathroom.jpg", "bathroom");
let Boots = new Image ("Boots", "./assets/boots.jpg", "boots");
let Breakfast = new Image ("Breakfast", "./assets/breakfast.jpg", "breakfast");
let Bubblegum = new Image ("Bubblegum", "./assets/bubblegum.jpg", "bubblegum");
let Chair = new Image ("Chair", "./assets/chair.jpg", "chair");
let Cthulhu = new Image ("Cthulhu", "./assets/cthulhu.jpg", "cthulhu");
let Dragon = new Image ("Dragon", "./assets/dragon.jpg", "dragon");

BusMallImageArray.push(Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, Cthulhu, Dragon);


// let create a function that will select a random image from the array

let randomImage = function () {
    let randomIndex = Math.floor(Math.random() * BusMallImageArray.length);
    let imageIndex = BusMallImageArray[randomIndex];
    
    return imageIndex;
}

// let create an event handler to track the number of clicks

function imageClicked(e) {
    if (e.target.id === firstImage.id) {
        firstImage.clicked += 1;
    } else if (e.target.id === secondImage) {
        secondImage.clicked += 1;
    } else if (e.target.id === thirdImage) {
        thirdImage.clicked += 1;
    }

    displayImages();
    console.log("e.target", e.target);
    console.log("e", firstImage.clicked, secondImage.clicked, thirdImage.clicked);
}

let firstImage;
let secondImage;
let thirdImage;

// define function that will display random images

function displayImages() {

    elImageRandom.innerHTML = "";
    
    for(let i = 0; i < 3; i++) {
        let elImage = document.createElement("img");
        let imageObject = randomImage();
        elImageRandom.appendChild(elImage);
        elImage.setAttribute("id", imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener("click", imageClicked);
        imageObject.shown += 1;

        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            secondImage = imageObject;
        } else {
            thirdImage = imageObject;
        }
    }
}

displayImages();
console.log(elImageRandom);
console.log("images", firstImage, secondImage, thirdImage);


let image1 = document.getElementById("image1"); 
let image2 = document.getElementById("image2"); 
let image3 = document.getElementById("image3"); 

function changeImage1() {
    image1.src = "Images/third.jpg";
}

function changeImage2() {
    image2.src = "Images/second.jpg";
}

function changeImage3() {
    image3.src = "Images/first.jpg";
}

image1.addEventListener("mouseover", changeImage1);
image2.addEventListener("mouseover", changeImage2); 
image3.addEventListener("mouseover", changeImage3);

function showfirstSequence() {
    image1.src = "Images/first.jpg";
    image2.src = "Images/second.jpg";
    image3.src = "Images/third.jpg";
}

function showsecondSequence() {
    image1.src = "Images/third.jpg";
    image2.src = "Images/second.jpg";
    image3.src = "Images/first.jpg";
}


let btn2 = document.getElementById("second-sequence");
btn2.addEventListener("click", showsecondSequence);


let btn1 = document.getElementById("first-sequence");
btn1.addEventListener("click", showfirstSequence);


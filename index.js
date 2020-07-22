// Your code here

const dodger = document.getElementById("dodger")
const speed = 5;

function moveDodgerLeft() {
    let left = parseInt( dodger.style.left.replace("px", "") );
    left -= speed;

    dodger.style.left = `${left}px`;
}

function moveDodgerRight() {
    let left = parseInt( dodger.style.left.replace("px", "") );
    left += speed;

    dodger.style.left = `${left}px`;

}
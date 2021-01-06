const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray;

//constructor
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    //Method for Particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    //Method for directions
    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }
        this.draw();
        this.x += this.directionX;
        this.y += this.directionY;
    }
};
//Array for multi particles

function init() {
    particleArray = []
    for (let i=0; i<150; i++) {
        let size = Math.random() * 30;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = (Math.random() * .5) - .2;
        let directionY = (Math.random() * .2) - .2;
        let color = 'rgba(192, 192, 192, .5)';

        particleArray.push(new Particle (x, y, directionX, directionY , size, color));
    }
}
//animation
function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i=0; i<particleArray.length; i++){
        particleArray[i].update();
    }
}
window.addEventListener('resize',
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)
init();
animation();


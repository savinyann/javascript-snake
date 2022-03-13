import { Direction } from "./classes/direction.js";
import { Point } from "./classes/point.js";
import { Settings } from "./classes/settings.js";
import { Square } from "./classes/square.js";

/** @type {HTMLCanvasElement} */ const canvas = document.querySelector('canvas#canvas');
/** @type {HTMLButtonElement} */ const stopButton = document.querySelector('button#stop');

const context = canvas.getContext('2d');
const gameSettings = new Settings();
const direction = new Direction(1, 0);

const head = new Square(5, 50, 10);

document.addEventListener('keydown', event =>
{
    switch(event.key)
    {
        case 'ArrowUp': return direction.setY(-1);
        case 'ArrowDown': return direction.setY(1);
        case 'ArrowLeft': return direction.setX(-1);
        case 'ArrowRight': return direction.setX(1);
        case 'p':
        {
            if(gameSettings.loop === null)
                return play();
            return pause();
        }
        default: return;
    }
});

function play()
{
    gameSettings.loop = setInterval(() =>
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawHead(head);
        head.move(gameSettings.speed * direction.x, gameSettings.speed * direction.y);
    
        if(head.x < 0)
            head.moveXto(100);
    
        if(head.x > 100)
            head.moveXto(0);
    
        if(head.y < 0)
            head.moveYto(100);
    
        if(head.y > 100)
            head.moveYto(0);
    
    
    }, 1000/60);
}

function pause() { gameSettings.resetLoop() }
play();


stopButton.addEventListener('click', () => pause());


/**
 * 
 * @param {Point} head
 */
function drawHead(head)
{
    context.fillStyle = gameSettings.headColor;
    context.fillRect(head.x*5, head.y*5, head.size, head.size);
}
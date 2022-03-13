export class Point
{
    _x;
    _y;

    constructor(x, y)
    {
        this._x = x;
        this._y = y;
    }

    /**
     * @param {number} dx 
     * @param {number} dy 
     */
    move(dx, dy)
    {
        this._x += dx;
        this._y += dy;
    }

    moveX(dx) { this._x += dx }
    moveY(dy) { this._y += dy }
    moveXto(x) { this._x = x }
    moveYto(y) { this._y = y }

    get x() { return this._x }
    get y() { return this._y }
    get coordinates() { return { x: this._x, y: this._y}}

    toString() { return `(x: ${this._x}, y: ${this._y})`};
}
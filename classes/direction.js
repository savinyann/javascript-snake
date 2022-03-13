import { Point } from "./point.js";

export class Direction extends Point
{
    /**
     * @param {1|0|-1} x 
     * @param {1|0|-1} y 
     */
    constructor(x, y) { super(x, y) }

    /**
     * @param {1|-1} direction 
     */
    setX(direction)
    {
        if(this._x !== 0)
            return;
        this._x = direction;
        this._y = 0;
    }

    /**
     * @param {1|-1} direction 
     */
    setY(direction)
    {
        if(this._y !== 0)
            return;
        this._y = direction;
        this._x = 0;
    }

    get x() { return this._x }
    get y() { return this._y }

    toString() { return `(x: ${this._x}, y: ${this._y})`};
}
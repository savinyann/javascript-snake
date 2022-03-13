import { Point } from "./point.js";

export class Square extends Point
{
    _size = 10;

    constructor(x, y, size)
    {
        super(x, y);
        this._size = size;
    }
    
    get size() { return this._size }
}
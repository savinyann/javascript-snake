export class Settings
{
    _headColor = 'black';
    _speed = .5;
    _loop = null;
    _tickDelay = 1000/60;

    set headColor(color) { this._headColor = color }
    set speed(speed) { this._speed = speed }
    /** @param {number} loop */set loop(loop) { this._loop = loop }
    resetLoop()
    {
        if(this._loop !== null)
            clearInterval(this._loop);

        this._loop = null;
    }

    get headColor() { return this._headColor }
    get speed() { return this._speed }
    get loop() { return this._loop }
}
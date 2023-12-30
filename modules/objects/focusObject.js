export class focusObject
{
    _cameraPosition;
    _cameraDirection;
    _clickable;
    _isClickable = true;

    constructor(cameraPosition, cameraDirection, clickable)
    {
        this._cameraDirection = cameraDirection;
        this._cameraPosition = cameraPosition;
        this._clickable = clickable;
    }

    cameraPosition = () => this._cameraPosition;

    cameraDirection = () => this._cameraDirection;

    clickable = () => this._clickable;

    isClickable = () => this._isClickable;

    setClickable = (clickable) => this._isClickable = clickable;
}
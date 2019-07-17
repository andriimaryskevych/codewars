module.exports = class Node {
    constructor (value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    get left () {
        return this._left;
    }

    set left (value) {
        this._left = value;
    }

    get right () {
        return this._right;
    }

    set right (value) {
        this._right = value;
    }

    get value () {
        return this._value;
    }
}

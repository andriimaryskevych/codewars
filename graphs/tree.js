module.exports = class Graph {
    constructor (root) {
        this._root = root;
    }

    _getSubtreeHeigth (node) {
        if (!node) {
            return 0;
        }

        let left = this._getSubtreeHeigth(node.left);
        let rigth = this._getSubtreeHeigth(node.rigth);

        return (left > rigth ? left : rigth) + 1;
    }

    getHeigth () {
        return this._getSubtreeHeigth(this._root);
    }
}


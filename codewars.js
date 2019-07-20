class User {
    constructor () {
        this._progress = 0;
    }

    get progress () {
        return this._progress % 100;
    }

    get rank () {
        const rankFromZero = Math.floor(this._progress / 100);
        const normalized = rankFromZero - 8;

        return normalized >= 0 ? normalized + 1 : normalized;
    }

    _inc (amout) {
        this._progress += amout;

        if (this._progress > 1500) {
            this._progress = 1500;
        }
    }

    _incProgess (normalized) {
        const diff = normalized - Math.floor(this._progress / 100);

        if (diff === 0) {
            this._inc(3);

            return;
        }

        if (diff === -1) {
            this._inc(1);

            return;
        }

        if (diff <= -2) {
            return;
        }

        this._inc(10 * diff * diff);
    }

    incProgress (rank) {
        if (Math.abs(rank) >= 9 || rank === 0) {
            throw new Error();
        }

        this._incProgess(rank + (rank >= 1 ? 7 : 8));
    }
}
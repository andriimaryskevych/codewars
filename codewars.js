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

        return normalized >= 0 ? normalized - 2 : normalized;
    }

    _inc (amout) {
        this._progress += amout;

        if (this._progress > 1600) {
            this._progress = 1600;
        }
    }

    incProgress (rank) {
        const currentRank = this.rank;
        const diff = rank - currentRank;

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
}
class Node {
    constructor (letter = '') {
        this.letter = letter;

        this.finalWord = false;
        this.children = {};
    }

    add (word) {
        if (word === '') {
            this.finalWord = true;

            return;
        }

        const letter = word[0];
        const remaining = word.slice(1);

        if (!this.children[letter]) {
            this.children[letter] = new Node(letter);
        }

        this.children[letter].add(remaining);
    }

    getStatus (word) {
        if (word === '') {
            if (this.finalWord) {
                return 'word';
            } else {
                return 'part';
            }
        }

        const letter = word[0];

        const child = this.children[letter];

        if (child) {
            return child.getStatus(word.slice(1));
        }

        return false;
    }

    print (wordStart = '') {
        if (this.finalWord){
            console.log(`${wordStart}${this.letter}`);
        }

        Object.values(this.children).forEach(child => {
            child.print(wordStart + this.letter);
        });
    }

    getHeigth () {
        let maxHeigth = 0;

        Object.values(this.children).forEach(child => {
            const childHeigth = child.getHeigth();

            if (childHeigth > maxHeigth) {
                maxHeigth = childHeigth;
            }
        });

        return maxHeigth + 1;
    }
}

class Tree {
    constructor () {
        this.root = new Node('');
    }

    add (word) {
        this.root.add(word);
    }

    getStatus (word) {
        return this.root.getStatus(word);
    }

    printAllWords () {
        this.root.print();
    }

    getHeigth () {
        return this.root.getHeigth();
    }
}

const tree = new Tree();
VALID_WORDS.forEach(word => {
    tree.add(word);
});

const getNextWord = (sentence) => {
    const length = sentence.length;

    let i = 1;
    let foundWord;

    while (i !== length) {
        const toCheck = sentence.slice(0, i);
        let status;

        if (status = tree.getStatus(toCheck)) {
            if (status === 'word') {
                foundWord = toCheck;
            }
        } else {
            break;
        }

        i++;
    }

    if (!foundWord) {
        foundWord = sentence[0];
    }

    return foundWord;
};

function maxMatch(sentence){
    if (sentence.length === 0) {
        return [];
    }

    const foundWord = getNextWord(sentence);
    const restOfTheWord = sentence.slice(foundWord.length);

    return [foundWord].concat(maxMatch(restOfTheWord));
}

console.log(maxMatch('goodluck'))
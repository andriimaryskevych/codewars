function mousePath(str){
    const chunks = [];

    for (let i = 0, charsLength = str.length; i < charsLength; i += 2) {
        chunks.push(str.substring(i, i + 2));
    }
}

console.log(mousePath('4R2L1R5R9R4R4L3'));

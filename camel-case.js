String.prototype.camelCase = function(){
    console.log(
        this.valueOf()
            .split(' ')
            .filter(Boolean)
            .map(word => (word[0].toUpperCase() + word.substr(1)))
            .join('')
    );
};

' s   s   '.camelCase();
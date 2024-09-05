function repeatString(word,times){
    if (times <0) {
        return 'ERROR';
    }
    return word.repeat(times);
    for (let i = 0; i < times; i++);
    result += word;

    return result
}

module.exports = repeatString;

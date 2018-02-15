var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func) {
    var newArray = [];
    words.filter(function (element){
        newArray.push(func(element))
    })
    console.log(newArray)
}

map(words, function(word) {
    return word.length;
});

map(words, function(word) {
    return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
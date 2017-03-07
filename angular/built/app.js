function greeter(person, isDone) {
    var color = 'blue';
    var returnString;
    var pyramid = [1, 2, 3, 4, 5];
    var names = ['raju', 'kahu', 'steve', 'man', 'my man'];
    var pyramidStr = '';
    for (var i = 0, len = pyramid.length; i < len; i++) {
        pyramidStr += "\n        \n            " + pyramid[i] + "- " + names[i] + "\n        ";
    }
    returnString = "\n\n    " + color + " \n    Hello " + person + " are you for real " + isDone + "\n    " + pyramidStr;
    return returnString;
}
var user = "Jane User";
var isDone = false;
document.body.innerHTML = greeter(user, isDone);

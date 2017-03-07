function greeter(person, isDone) {
    var color = 'blue';
    var returnString;
    var pyramid = [1, 2, 3, 4, 5];
    var names = ['raju', 'kahu', 'steve', 'man', 'my man'];
    var pyramidStr = '';
    for (var i_1 = 0, len = pyramid.length; i_1 < len; i_1++) {
        pyramidStr += "\n        \n            " + pyramid[i_1] + "- " + names[i_1] + "\n        ";
    }
    returnString = "\n\n    " + color + " \n    Hello " + person + " are you for real " + isDone + "\n    " + pyramidStr;
    return returnString;
}
var user = "Jane User";
var isDone = false;
document.body.innerHTML = greeter(user, isDone);

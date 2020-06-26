var res = document.getElementById('result')

function getinput(input) {
    console.log(input);
    // var res = document.getElementById('result')
    res.value += input;
}

function clearRes() {

    res.value = "0";
    console.log(res.value)
}

function getRes() {
    var res = document.getElementById('result')
    console.log(res.value)
    res.value = eval(res.value)
}
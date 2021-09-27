var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var input = $$('.number')
var result = $('.result')
var sumElement = $('.input__calculation-one')
var allowed = $('.all_result')
var eraseElement = $('.erase')
var count = ''
function handleInput () {
   for (let i = 0; i < input.length; i++) {
        input[i].onclick = function (e) {
            var output = count += input[i].innerText
            result.innerText = output
        }
   }
}

function sum() {
    allowed.onclick = function () {
        result.innerText = eval(count)
        count = ''
    }
}
function erase() {
    eraseElement.onclick = function () { 
        result.innerText = 0
        count = ''
    }
}

function start () {
    handleInput()
    sum()
    erase()
}

start()
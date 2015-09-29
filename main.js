//putting elements in vars
var num1 = document.querySelector('#num_one');
var num2 = document.querySelector('#num_two');
var sum;
var button= document.querySelector('#calculateBtn');

//actual calculation
var response = function(x, y) {
  realnum1= parseInt(num1.value, 10);
  realnum2= parseInt(num2.value, 10);
  sum = realnum1+ realnum2;
  answer.textContent= sum;


}
//add event listener to button, run response
calculateBtn.addEventListener('click', response);
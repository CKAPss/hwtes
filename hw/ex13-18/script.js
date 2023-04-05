/* 1.13
1
*/

/* 1.13
1, 2, 3, 4
1, 2, 3, 4, 5
*/

/* 1.13 
0-4
0-4
*/

/* 1.13
for (let i = 2; i<= 10; i++){
	if (i % 2 == 0){
		alert(i)
	}
}
*/

/* 1.13
let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}
*/

/* 1.13
let num;
do{
	num = prompt('?', '');
} while (num <=100 && num);
*/

/* 1.13
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 
for (let j = 2; j < i; j++) {
if (i % j == 0) continue nextPrime;  }
alert( i ); // простое число
}
*/

/* 1.14
const number = +prompt(' 0 и 3', '');

switch (number) {
case 0:
alert('0');
break;
case 1:
alert('1');
break;
case 2:
case 3:
alert('2, 3');
break;
}
*/

/*1.15

function checkAge(age) {
	(age > 18) ? true : confirm('yes');
}
*/

/* 1.15
function minNumb(a, b) {
	if (a > b) {
		alert(a)
	}else{
		alert(b)
	}
}
*/

/* 1.15
function pow(x, n) {
let res = x;
for (let i = 1; i < n; i++) {
res *= x;
}
return res;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
alert(`Степень ${n} не поддерживается`);
} else {
alert( pow(x, n) );
}
*/

/* 1.17
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	'agree?'
	() => alert('yes'),
	() => alert('no')
);
*/
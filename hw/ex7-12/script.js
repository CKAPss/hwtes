/* 1.8
a = 2
b = 2
c = 2
d = 1
*/

/* 1.8
a = 4
x = 5
*/

/* 1.8
10
-1
1
2
6
9px
$45
2
nan
  -9 5
-14
1
undefined
*/

/* 1.8

let a = Number(prompt("Первое число?", '1'));
let b = Number(prompt("Второе число?", '2'));

alert(a + b);
*/

/* 1.9 
true
false
true
true
false
false
false
*/

/* 1.10
true
*/

/* 1.10
let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!');
}
*/

/* 1.10

let i = prompt('Введите число:', '');
if (i > 0) {
	alert('1');
} else if (i < 0) {
	alert('-1');
} else {
	alert('0');
}
*/

/* 1.10
let result;
result = (a + b < 4) ? 'malo' : 'mnogo';
*/

/* 1.10
let message;
message = (login == 'sotr') ? 'hello' :
	(login == 'dir') ? 'Hello, boss' :
		(login == '') ? 'noName' : '' ;
*/

/* 1.11
2
	1.11
1 , 2
	1.11
null
	1.11
1 , undfined
	1.11
*/

/* 1.11
let age = prompt('how old?', '');
if (age >= 14 && age <= 90) {
	alert('yes');
} else {
	alert('no');
}
*/

/* 1.11
let age = prompt('how old?', '');
if (!(age >= 14 && age <= 90)) {
	alert('yes');
} else {
	alert('no');
}
*/

/* 1.11
let userLogin = prompt("Кто там?", "");

if (userLogin == "Админ") {
	let adminPassword = prompt("Пароль?", "");
	if (adminPassword == "Я главный") {
		alert("Здравствуйте");
	} else if (adminPassword === "" || adminPassword === null) {
		alert("Отменено");
	} else {
		alert("Неверный пароль");
	}
} else if (userLogin === "" || userLogin === null) {
	alert("Отменено");
} else {
	alert("Я вас не знаю");
}
*/
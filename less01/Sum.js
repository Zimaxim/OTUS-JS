/*
Написать функцию sum, которая может быть исполнена
любое количество раз с не undefined аргументом.

Если она исполнена без аргументов, то возвращает
значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

 */

function sum(x) {
	var buff = 0;

	function f(x) {
		if (x) {
			buff += x;
			return f;

		} else {
			return buff;
		}
	}

	return f(x);
}

console.log(sum(1)(2)(4)(2)(4)(2)(4)());
console.log(Sum(1)(22)(4)(2)(4)(2)(4)());

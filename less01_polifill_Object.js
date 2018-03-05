/*
Написать polyfill для функции Object.create.
Согласно Mozilla.org
Object.create(proto --- прототип
[, propertiesObject] --- расширение объекта
)
 */
const newObject = function (Obj, extProp) {
	// Создадим конструктор
	const Temp = function () {};

	//  цитируем  системный функционал Object.prototype.hasOwnProperty
	var hasOwn = Object.prototype.hasOwnProperty;
	// 1. Проверяем, что первый аргумент
	if (typeof Obj !== 'object') {
		throw TypeError('Object prototype may only be an Object or null');
	}
	//console.log( Obj, typeof Obj);
	var obj = {};
	obj.proto = Obj; // Создаем новый объект на основе Obj
	//console.log( obj);
	// Обрабатываем наличие заданных расширений объекта, при их наличии
	if (extProp || 1 !== 1) {
		var Properties = Object(extProp);
		for (var prop in Properties) {
			if (hasOwn.call(Properties, prop)) {
				obj[prop] = Properties[prop];
			}
		}
	}
	return obj;
};

var tstObj = newObject({
		w : 123
	});
console.log("tstObj = %o", tstObj.proto);
console.dir(tstObj);

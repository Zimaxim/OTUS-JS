//
// Write a function promiseReduce, which takes an array of promises as 
// an arguments, and returns a promise with result of chain of given promises.
// promiseReduce([promise1, promise2]) // => promise1.then(promise2);
// 
// https://decembersoft.com/posts/promises-in-serial-with-array-reduce/
//

/*

Написать функцию promiseReduce, которая принимает массив promise-ов в качестве аргументом 
 и возвращает promise, который будет ожидать исполнение всех переданных promise-ов 
 и выполнять reduce-функцию для каждого итогового значения (по аналогии с reduce).

var promise0 = Promise.resolve(0),
    promise1 = Promise.resolve(1),
    promise2 = Promise.resolve(2);

	promiseReduce([promise0, promise1, promise2], sumFn, 0).then(res => console.log(res));
	// => 2


*/
function sumFn(aResults, pInit) {
  return aResults.reduce((prev, item) => prev + item, pInit);
}

// console.log('sumFn = %s ', sumFn([1, 2, 3, 5, 6], 100));

function promiseReduce(tasks, sumFn, nInit) {

  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(chainResults =>
      currentTask.then(currentResult => 
          [...chainResults, currentResult]
      )
    
    );
  }, Promise.resolve([])).then(
    arrayOfResults => sumFn(arrayOfResults, nInit)
  );


}

var promise0 = Promise.resolve(0),
    promise1 = Promise.resolve(1),
    promise2 = Promise.resolve(2);

  promiseReduce([promise0, promise1, promise2], sumFn, 0).then(res => console.log(res));
  

//
// Write a function promiseReduce, which takes an array of promises as 
// an arguments, and returns a promise with result of chain of given promises.
// promiseReduce([promise1, promise2]) // => promise1.then(promise2);
// 
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

/*

Написать функцию promiseReduce, которая принимает массив promise-ов в качестве аргументом и возвращает promise, который будет ожидать исполнение всех переданных promise-ов и выполнять reduce-функцию для каждого итогового значения (по аналогии с reduce).

var promise0 = Promise.resolve(0),
    	    promise1 = Promise.resolve(1),
    promise2 = Promise.resolve(2)

	promiseReduce([promise0, promise1, promise2], sumFn, 0).then(res => console.log(res))
	// => 2


*/


function promiseReduce(aPromise, sumFn, 0){
  
    


    return rFn();

    }
    

/*

// some dummy urls to resolve
const urls = ['/url1', '/url2', '/url3']

// convert each url to a function that returns an ajax call
const funcs = urls.map(url => () => $.ajax(url))

Promise.resolve()
  .then(x => funcs[0]()) // resolve func[0]
  .then(x => funcs[1]()) // resolve func[1]
  .then(x => funcs[2]()) // resolve func[2]

// start our promise off with an empty array. this becomes all.
Promise.resolve([])
  // all is the array we will append each result to.
  .then(all => {
    return funcs[0].then(result => {
      // concat the resolved promise result to all
      return all.concat(result)
    })
   })


   const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result =>
      func().then(Array.prototype.concat.bind(result))),
      Promise.resolve([]))


*/

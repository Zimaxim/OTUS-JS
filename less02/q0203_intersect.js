/*
  Написать функцию, которая определяет, пересекаются ли два элемента на странице
   intersect(node1, node2)
*/



  function intersect(node1, node2){
       var a = node1.getBoundingClientRect(),
           b = node2.getBoundingClientRect();
               
       return !( a.top > b.bottom  || a.left > b.right || a.bottom < b.top || a.right < b.left );
  }
/*
  left           right

    A11---------A12          -----top
    !            !
    !      B11---!------B12
    A21---------A22      !   -----bottom
            !            !
           B21----------B22
*/
// document.ready 
document.addEventListener("DOMContentLoaded", function (event) {
    var elem1 = document.getElementById("elem1"),
        elem2 = document.getElementById("elem2"),
        elem3 = document.getElementById("elem3");

    console.log('Intersect elem1 and elem2 :'+ ( intersect(elem1, elem2) ? "YES" : "NO" ));
    console.log('Intersect elem1 and elem3 :'+ ( intersect(elem1, elem3) ? "YES" : "NO" ));


});
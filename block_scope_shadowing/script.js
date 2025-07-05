


/**
 * block scope -> { }
 * 
 * {} -> this is a statement used to compound one or more statement
 * 
 */

if (true) /**it expects statement over here i,e, can be var x=7 or true or a block statement {} -> to compound elements*/;


/**
 * Note- local (functions) and block ({}) scope are totally different
 */

{
    // var a = 10;
    let b = 20;
    const c = 10;

}
function vari(){
    var a = 10;
    console.log(a)
}
vari()
// console.log(a)



//shadowing is redeclaring the same variable in different child scope

let m = 10
{
    let m = 20;
    console.log(m)
}
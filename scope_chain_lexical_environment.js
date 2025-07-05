/** scope and lexical environment is created during the creation phase 
 * scope is a boundary in where space a variable is accessible
 * 
*/



/**
 * global scope(has space memory poiting to null) -> only global scope
 * 
 *  -> b scope(has space memory poiting to previous sco) -> global scope + local scope of b
 * -> d scope (has space memory poiting to previous scop) -> global scope + local scope of b + local scope of d
 * these are chain of scope or scope chain
 * 
 */

/**
 * types:-
 * module
 * local
 * global
 * script
 * closure
 */
function b() {
    var x = 7;
    d()
    function d() {
        console.log(x)
    }
}



/** scope  */
// function a(){
//     console.log(x)
// }

b()
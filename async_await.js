/**
 * Async keyword is a reserve keyword in js which is used to make a function asynchorous
 * it behaves differently then normal function as it alsways returns promise
 * we can use await inside async
 * 
 * Note:-
 * js engine suspend the current execution context and move it to some where else when it encounters await
 * and return back and continue executing where it left.
 * 
 */


//they will be registered as they are in top levels // so if we use it with function it will wait 15 seconds
// let p1 = new Promise((res,rej)=>{
//  setTimeout(()=>{
//     res("After 10 seconds")
//  },10000)
// })
// let p2 = new Promise((res,rej)=>{
//  setTimeout(()=>{
//     res("After 5 seconds")
//  },5000)
// })

//it will run sequentially so takes time 15 seconds
function getP1Data(){
return new Promise((res,rej)=>{
 setTimeout(()=>{
    res("After 10 seconds")
 },10000)
})


}
function getP2Data(){
   return new Promise((res,rej)=>{
 setTimeout(()=>{
    res("After 5 seconds")
 },5000)
})

}

async function getData(){
   const v1 = await getP1Data() ;
   console.log(v1)
   const v2 = await getP2Data() ;
   console.log(v2)
    console.log("finished")
}

console.time()
await getData()
console.timeEnd()
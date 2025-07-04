


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
// During creation of each Global execution context a global object is created

/**
 * And creation of each execution context also creates this keyword
 * 
 */






import process from "node:process"

let a = process.stdin.on('data',(data)=>{
    data.toString()
    process.exit()
})
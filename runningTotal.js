function isX(num){
    let statArray = ["str","dex","int","wis","pow","me"]
    let total = 0
    for(let i = 0 ; i<=statArray.length-1;i++){
        let elemID = statArray[i]+num
        
        let value = parseInt(document.getElementById(elemID).value)
        // console.log(value)
        if(value !== NaN){ total = total+value}
       
        // console.log(total)
    }
    let totalID = 'total'+num
    
   document.getElementById(totalID).value = total
    }
function setCurrent(){
    setInterval(()=>{
    let params = new URLSearchParams(document.location.search)
    let playerNum = params.get("playerNum")
     for(let i = 1;i<=playerNum;i++){
        isX(i)
            }
    
    },20)

}

document.addEventListener("DOMContentLoaded", function() {

   setCurrent()})
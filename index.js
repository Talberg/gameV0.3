function gameName(){
    let gameName = document.getElementById('gameName').value
    if(gameName!==""){
        console.log(localStorage.getItem('GameState'))
        if(localStorage.getItem('GameList') == null){
            console.log('New Game state')
            let newGameName = JSON.stringify([gameName])
            localStorage.setItem('GameList', newGameName)
            console.log(localStorage.getItem('GameList'))
            window.location.replace(`players.html?name=${gameName}`)

        }
        else{
            console.log(localStorage.getItem('GameList'))
            let oldGameState= JSON.parse(localStorage.getItem('GameList'))
            console.log(oldGameState)
            let GameList = JSON.stringify([...oldGameState,gameName])
            localStorage.setItem('GameList', GameList)
            console.log(localStorage.getItem('GameList'))
            window.location.replace(`players.html?name=${gameName}`)   
        }
      
  

        // localStorage.setItem('GameState', gameName)
        // localStorage.getItem('GameState')
    }
}
function players(num){
    let params = new URLSearchParams(document.location.search)
    let gameName = params.get("name")
    let gameState= JSON.stringify(
    {
        name:gameName,
        players:num,
    }  )
    localStorage.setItem(gameName, gameState)
    console.log(localStorage.getItem(gameName))
    window.location.replace(`players${num}.html?name=${gameName}&playerNum=${num}`) 

}
function is250(num){
let statArray = ["str","dex","int","wis","pow","me"]
let total = 0 
for(let i = 0 ; i<statArray.length-1;i++){
    let elemID = statArray[i]+num
    let value = parseInt(document.getElementById(elemID).value)
    
    total = total+value
    console.log(total)
}
}
function playersReadyCheck(){
    let params = new URLSearchParams(document.location.search)
    let playerNum = params.get("playerNum")
     for(let i = 1;i<=playerNum;i++){
        is250(i)
    }
   
}


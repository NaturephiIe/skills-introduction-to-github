randomletterbtn=document.getElementbyId("generaterandomletter")
randomletter=document.getElementById("letterOutput")
randomltr=""
randomletterbtn.addEventListener("click", () =>  {
    let x = Math.floor(Math.random() * (90 -64)) + 65;
    randomltr=String.fromCharCode(x);
    randomletter.innerHTML=`<label> ${randomltr} </label>  ` ;
    console.log(randomltr)}) 
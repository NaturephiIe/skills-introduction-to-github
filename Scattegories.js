let randomletterbtn =document.getElementById("randomletter")
let randomletter=document.getElementById("generaterandomletter")
let randomltr =""
let inputs=document.querySelectorAll(".input input")
let inputlist= document.getElementsByTagName("td")
console.log(inputs)
let consolelogging=document.getElementById("c")
randomletterbtn.addEventListener("click", () =>  {
    let x = Math.floor(Math.random() * (90 -64)) + 65;
    randomltr=String.fromCharCode(x);
    randomletter.innerHTML=`<label> ${randomltr} </label>  ` ;
    console.log(randomltr)}) 
/* inputs.forEach((val,i) => {

    if (val.value.length == 0 ) {
        val.addEventListener("keyup", (ev) =>{
            if (ev.key !== randomltr) {
                inputlist[i].innerHTML += `<p style="color : red  ;" > First  letter doesn't match , it should start with ${randomltr} </p>  `;
                console.log(ev)
            
            } } )
    }})

*/
inputs.forEach((input, i) => {
    input.addEventListener("input", () => {
        if (input.value.length > 0 && input.value.charAt(0) !== randomltr) {
            inputlist[i].innerHTML += `<p style="color: red;">First letter doesn't match, it should start with ${randomltr}</p>`;
        } else {
            // If the input value starts with the correct letter, remove any previous error messages
            inputlist[i].innerHTML = "";
        }
    });
});

/*consolelogging.addEventListener("click" , () => {
    console.log(randomltr)
})


       
       /*  value.addEventListener("keyup", (key) => {
            if (value.length <2 ) { 
                if (key.charAt(0)!== randomltr) {
                    inputslist[i].innerHTML += `<p style="color : red  ;" > First  letter doesn't match , it should start with ${randomltr} </p>  `;
        }
    }
    })
})
randomltr=randomletter.innerText 
console.log(randomltr)



/*1st triallet inputs = document.querySelectorAll(".input input")
 let inputstext=document.querySelectorAll(".input p")
 inputlist = []

   inputs.forEach(function (inputs) {
    inputlist.push(inputs.value);

}) 
console.log(inputlist)
    console.log(randomltr)
inputlist.forEach((text, i) => {
    if (text.charAt(0) !== randomltr) {
        inputstext[i].innerHTML += `<p style="color : red  ;" > First  letter doesn't match , it should start with ${randomltr} </p>  `;
    }
})  

/* 2nd trial : const inputs = document.getElementsById("input")
const inputlist = inputs.getElementByTagName ("td")
for (let i=0 ; i<in */
/* const inputlist= document.querySelectorAll(".input input" )
inputlist.forEach(function(input) {
    input.addEventListener("keyup" , function() {
        let inputValue=input.value;
        if (inputValue.charAt(0) !== randomltr) {
            inputlist.innerHTML += `<p style="color : red  ;" > First  letter doesn't match , it should start with ${randomltr} </p>  `;

        }

    })
})
console.log(inputlist)
console.log(randomltr) */ 

document.querySelector('#yell').addEventListener('click', run)

function run(){
    const fName = document.querySelector('#firstName').value

    const fMidName = document.querySelector('#firstMiddle').value

    const lMidName = document.querySelector('#lastMiddle').value

    const lName = document.querySelector('#lastName').value

//old way

//  document.querySelector('#placeToYell').innerText =fName + '' + fMidName + '' + '' + lMidName + '' + lName`


// new way

    document.querySelector('#placeToYell').innerText =`${fName} ${fMidName} ${lMidName} ${lName}`


 const yellThis = new SpeechSynthesisUtterance(yellThis)
 window.speechSynthesis.speak(yellThis) 


}
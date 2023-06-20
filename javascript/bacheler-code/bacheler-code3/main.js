const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click',checkForRose))


function checkForRose(click){
    if(click.target.classList.contains('rose')){
        document.querySelector('#selena').classList.toggle('hidden')
    }else{
        alert('Wrong!')
    }

}
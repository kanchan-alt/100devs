//image store
const virat = document.querySelector('#virat')
const selena = document.querySelector('#selena')
const freenBacky = document.querySelector('#freenBacky')

//clicking name of charater then function call

document.querySelector('#viratC').addEventListener('click',viratClick)
document.querySelector('#selenaC').addEventListener('click',selenaClick)
document.querySelector('#freenBackyC').addEventListener('click',freenBackyClick)


function viratClick(){
    console.log('woking');
    freenBacky.classList.add('hidden')
    selena.classList.add('hidden')
    virat.classList.toggle('hidden')
}

function selenaClick(){
    console.log('woking4');
    virat.classList.add('hidden')
    freenBacky.classList.add('hidden')
    selena.classList.toggle('hidden')
}

function freenBackyClick(){
    console.log('workinh5');
    virat.classList.add('hidden')
    selena.classList.add('hidden')
    freenBacky.classList.toggle('hidden')
}
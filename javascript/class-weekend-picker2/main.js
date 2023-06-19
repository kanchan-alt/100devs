document.querySelector('#check').addEventListener('click', check)



function check(){

    const day = document.querySelector('#day').value.toUpperCase()
    console.log(day);

    if(day === 'monday'.toUpperCase() || day === 'tuesday'.toUpperCase()|| day === 'wednesday'.toUpperCase()){
        document.querySelector('#placeToSee').innerHTML = 'you have class'
        // alert('class day')
        // console.log("you have class");
    }else if(day === 'thursday'.toUpperCase()||day === 'friday'.toUpperCase()){
        document.querySelector('#placeToSee').innerHTML = 'its the weekend'
       
        // alert('Weekend')
        // console.log("its the weekend");
    }else{
        document.querySelector('#placeToSee').innerText = 'BORRINGGGGG'
        // alert('BORRINGGGGG')
        // console.log('BORRINGGGGG');
     }
}
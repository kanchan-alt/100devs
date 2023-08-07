const deleteBtn = document.querySelectorAll('.fa-trash')
//creating a varible and assigning it to a selction of all element with  a class of the trash can

const item = document.querySelectorAll('.item span')
// we created a varible  and storing  a selction of span tags inside of a parent that has name item

const itemCompleted = document.querySelectorAll('.item span.completed')

// we created a varible  and storing  a selction of span tags of name completed{span}  inside of a parent that has name item{li}



Array.from(deleteBtn).forEach((element) => {
    element.addEventListener("click", deleteItem)
})
// we put all selector(deleteBtn) in array and loop through each element of array then we add the eventlistner each element and each element are waiting for click and then call a function deleteItem

Array.from(item).forEach((element) => {//creating an array from selection and startting a loop
    element.addEventListener("click", markComplete)//add an event listner  to the current item that waits for click and then calls a function markcomplete
})//close our loop


Array.from(itemCompleted).forEach((element) => {//creating an array from selection and startting a loop
    element.addEventListener("click", markUnComplete)//adds an event listnear to ONLY completed items
})// close  our loop



async function deleteItem(){// declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText
    //looks inside of the list item to extract the text value ONLY of the specified list item
    try {
        /**
         * starting try block to do something
         * creating a response varible that waits on fetch to get data from the result of the deleteItem route
         *  
         */
        const response = await fetch('deleteItem', {
            method: 'delete',//setd CRUD method fpr the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expect which is JSON
            body: JSON.stringify({//declare the message content being passed and stringify that content
                'itemFromJS':itemText
                //setting the content of the body to inner text of the list item , and naming it 'itemFromJS,
            })
        })

        const data = await response.json()//waiting on the JSON to be convertedresponse 
        console.log(data)// log the result to the console
        location.reload()//reloads the page to update waht is displayed
        
        
    } catch(err) {// if an error occurs, pass the error into the catch block
       console.log(err); //log the error to the console
    }

}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText

    try {
        const response = await fetch('markComplete',{
            method: 'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })

            
        })
        const data = await response.json()
        console.log(data);
        location.reload()
        
    } catch (err){
        console.log(err); 
        
    }
    
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })

        })

        const data = await response.json()
        console.log(data)
        location.reload()
        
    } catch (err) {
        console.log(err); 
        
    }
}




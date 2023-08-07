const express = require("express")
const app = express()

// const cors = require("cors")
// app.use(cors())

const PORT = 8000

//creating API for Rapper

const rappers = {
    '21 savage': {
        'age': 28,
        "birthName": 'kanchanlata kujur',
        'birthLoction': 'konkal'
    },
    'chance the rapper': {
        'age': 24,
        "birthName": 'kamya kujur',
        'birthLoction':' churcha'

    },

    'unknown': {
        'age': 0,
        "birthName": 'Unknown',
        'birthLoction': 'Unknown'

    },

}

//router and bussines logic

app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/index.html')
});


app.get("/api/:name", (req, res)=> {
//    console.log(req.params.name);
//    res.json(rappers)

const rapperName = req.params.name.toLowerCase()
    
if(rappers[rapperName]){
    res.json(rappers[rapperName])
} else {
    res.json(rappers['unknown'])
}
})



app.listen(PORT, ()=> {
    console.log(`server running on port${PORT}`);
})

// start the project with the basic express js
const express = require("express")
const app = express()

// best practice to defining the port value insted of direct assignig
const PORT = 8800

const path = require("path")
app.use(express.static("public"))

// here we gona use the express's middleware - utlencoded is the middleware here
app.use(express.urlencoded({extended:true}));

// routes
app.get("/", (req,res) => {
    // res.send("I AM ROOT!")
    res.sendFile(path.join(__dirname, "index.html"))
})


// now the building of the calculator
// using the method attribute the post is work here
app.post("/", (req,res) => {
    // geting the value from the user from html file on submit
    /*
    console.log(req.body)
    console.log(req.body.number1)
    console.log(req.body.operation)
    console.log(req.body.number2)
    */
   const number1 = parseFloat(req.body.number1);
   const operation = req.body.operation;
   const number2 = parseFloat(req.body.number2)

    // logic for caluculator, here we are using the switch condition
    let result;

    switch(operation) {
        case "add":
            result = number1 + number2;
            break;

        case "sub":
            result = number1 - number2;
            break;

        case "mult":
            result = number1 * number2;
            break;

        case "div":
            result = number1 / number2;

        default:
            result= "Invalid operation"
            break;
    }
    // displying the result
    // console.log(result )
    // res.send("<h1> Result of your Calculation:" +result+ "</h1>") ;
    res.send(`
        <h1 style="
            color: #03dac6; 
            font-size: 2.5rem; 
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); 
            border: 2px solid #03dac6; 
            padding: 1rem; 
            border-radius: 10px; 
            background-color: #1e1e1e; 
            text-align: center;
            margin: 0; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
        ">
            Result of your Calculation: ${result}
        </h1>
    `);
    
})
// to listen the app
app.listen(PORT , () => {
    console.log(`server started on ${PORT}`)
})
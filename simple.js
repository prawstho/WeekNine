const express = require("express");
const app = express();

// app.post   //CREATE html
// app.get    //READ html
// app.put    //UPDATE
// app.patch  //UPDATE 
// app.delete //DELETE

app.get("/", (request, response) => {
    console.log("root route.")
    response.send("the route for the sites root /.")
})

app.listen(3000)
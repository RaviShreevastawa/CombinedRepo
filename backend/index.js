import dotenv from "dotenv";
import {app} from "./app.js"
import {connectDB} from "./src/db/index.js";

dotenv.config({
    path : './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server Running at PORT : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Connection Failed !!!!", error)
})
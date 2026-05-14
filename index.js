import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
const username = process.env.USERNAME
console.log(username);

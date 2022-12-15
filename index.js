const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!")
}) 

app.get("/", (req, res) => {
  res.send("hello world!")
})

const Discord = require("discord.js")
const client = new discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
})

const mySecret = process.env['Token']

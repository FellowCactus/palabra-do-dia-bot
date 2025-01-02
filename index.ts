import { AtpAgent } from "@atproto/api"
import { CronJob } from "cron"
const express = require("express")

import { scrapePalabra } from "./scraper.js"

// Agente de Bluesky
const agent = new AtpAgent({service: "https://bsky.social"})

// Main
async function main() {
    await agent.login({identifier: "palabradodiabot.bsky.social", password: "p4l4br4d0d14"})
    let palabradodia = await scrapePalabra()
    await agent.post({text: palabradodia})
    console.log("Post hecho!")
}

const app = express
const port = process.env.PORT || 4000

app.get("/", (req: any, res: any) => {
    main()
})

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
})
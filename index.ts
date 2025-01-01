import { AtpAgent } from "@atproto/api"
import { CronJob } from "cron"

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


const scheduleExpression = "0 0 6 * * *"
const job = new CronJob(scheduleExpression, main)

job.start()
import axios from "axios"
import { load } from "cheerio"

export async function scrapePalabra() {
    const response = await axios.get("https://portaldaspalabras.gal/lexico/")
    const html = response.data
    
    const $ = load(html)
    const palabra = $("section.palabra-do-dia p").find("a").first().text()

    return palabra
}
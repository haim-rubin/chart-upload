import fetch from 'node-fetch'
import config from '../config.json'
const baseUrl = `http:\\localhost:${config.port}`
fetch(`${baseUrl}/chart`, {
    method: 'POST',
    body: JSON.stringify(
        {
            content: 'Any Chart content'
        }
    )
})
.then(res => {
    console.log(res)
})
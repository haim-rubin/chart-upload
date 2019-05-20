import express from 'express'
import bodyParser from 'body-parser'
import postChartHandle from './postChartHandle'
import httpStatus from 'http-status'
const server = ({ port }) => {
    const app = express()
    //Here we are configuring express to use body-parser as middle-ware.
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.post('/chart', (req, res) => {
        const { body } = req
        const { content } = body
        postChartHandle({ content })
            .then(info => {
                res.json(info)
            })
            .catch(error => {
                console.error(error)
                res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ error: httpStatus[httpStatus.INTERNAL_SERVER_ERROR] })
            })
    })

    app.listen(port,function(){
        console.log(`Started on port: ${port} `);
    })
}

export default server
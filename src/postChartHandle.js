import saveChart from './saveChart'
import uuid from 'uuid'
const postChartHandle = ({ content, extension = 'txt' }) => {
    const fileName = `${uuid.v4()}.${extension}`
    return(
        saveChart({ content, fileName })
            .then(() => ({ fileName }))
    )
}

export default postChartHandle

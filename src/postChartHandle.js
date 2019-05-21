import saveChart from './saveChart'
import uuid from 'uuid'
import config from '../config.json'
const postChartHandle = ({ content }) => {
    const { extension, chartFilesPath } = config
    const fileName = `${chartFilesPath}/${uuid.v4()}.${extension}`
    return(
        saveChart({ content, fileName })
            .then(() => ({ fileName }))
    )
}

export default postChartHandle

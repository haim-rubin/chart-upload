import fs from 'fs'
import util from 'util'
const writeFile = util.promisify(fs.writeFile)
const saveChart = ({ content, fileName }) => (
    writeFile(fileName, content)
)

export default saveChart
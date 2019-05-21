import shell from 'shelljs'
const init = ({ chartFilesPath }) => {
    shell.mkdir('-p', chartFilesPath)
}

export default init
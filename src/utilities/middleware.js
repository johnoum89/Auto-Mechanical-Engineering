const requestLogger = (req,res,next) => {
    console.log('Method', req.method)
    console.log('Path', req.path)
    console.log('Body', req.body)

}

const unknowEndpoint = (req, res) => {
    res.status(404).send({
        error: 'unkwon endpoint'
    })
}



module.exports = {
    requestLogger,
    unknowEndpoint 
}
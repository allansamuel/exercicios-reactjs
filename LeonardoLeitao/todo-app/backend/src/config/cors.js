module.exports = function(req,res,next){

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methpds', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}
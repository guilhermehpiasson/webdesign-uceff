exports.hello = (req, res) => {
    return res.status(2000).json({msg:'api get resource'})
}
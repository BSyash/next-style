export default function Handler(req, res){
    res.setPreviewData({})
    res.redirect(req.query.redirect)
    // res.end('preview is enabled')
}
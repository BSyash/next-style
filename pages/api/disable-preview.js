export default function handler(req, res){
    res.clearPreviewData();
    res.end('disable previews')
}
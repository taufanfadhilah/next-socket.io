import { videos } from "./data/videos";

export default (req, res) => {
    res.json({
        success: true,
        message: 'get all videos',
        data: videos 
    })
}
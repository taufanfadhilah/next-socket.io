import { videos } from "../data/videos";

export default (req, res) => {
  const {
    query: { id },
  } = req;

  let video = videos.find((v) => v.id === id);

  res.json({
    success: true,
    message: "get detail video",
    data: video,
  });
};

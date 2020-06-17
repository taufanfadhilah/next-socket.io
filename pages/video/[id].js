import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";

const Video = ({ id }) => {
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`/api/video/${id}`)
      .then((res) => res.json())
      .then((data) => setVideo(data.data));
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col l12 s12" style={{ marginTop: 20 }}>
          <iframe
            height="400"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%" }}
          ></iframe>
          <p style={{ fontWeight: 500, fontSize: 26, margin: 0 }}>
            {video.title}
          </p>
          <p>
            Current Watching:{" "}
            <span style={{ fontWeight: 500, fontSize: 18 }}>500</span>
          </p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col m1 s3">
          <img
            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            alt=""
            className="circle"
            style={{ width: 40, height: 40 }}
          ></img>
        </div>
        <div className="col m11 s9">
          <p style={{ fontWeight: 500, margin: 0 }}>{video.channel}</p>
        </div>
      </div>
    </Layout>
  );
};

Video.getInitialProps = ({ query: { id } }) => ({
  id,
});

export default Video;

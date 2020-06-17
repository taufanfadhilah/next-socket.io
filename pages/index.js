import { useEffect, useState } from "react";
import io from "socket.io-client";
import Layout from "../components/layout";
import Card from "../components/card";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    io("/"); // for register to websocket
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data.data));
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col m12 s12">
          <h5>All Videos</h5>
          <hr />
        </div>
        {videos.map((video) => (
          <div className="col m4 s12" key={video.id}>
            <Card video={video} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

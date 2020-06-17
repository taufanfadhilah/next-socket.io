import React from "react";
import Layout from "../components/layout";

const Video = () => (
  <>
    <Layout>
      <div className="row">
        <div className="col l12 s12" style={{ marginTop: 20 }}>
          <iframe
            height="400"
            src="https://www.youtube.com/embed/hjQfYEjvJeU?autoplay=1"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ width: "100%" }}
          ></iframe>
          <p style={{ fontWeight: 500, fontSize: 26, margin: 0 }}>
            Video Title
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
            src="https://i0.wp.com/mojok.co/terminal/wp-content/uploads/2019/11/deddy.jpg?resize=800%2C540&ssl=1"
            alt=""
            className="circle"
            style={{ maxWidth: 70 }}
          ></img>
        </div>
        <div className="col m11 s9">
          <p style={{ fontWeight: 500 }}>Deddy Corbuzier</p>
        </div>
      </div>
    </Layout>
  </>
);

export default Video;

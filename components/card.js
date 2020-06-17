import React from "react";
import Link from "next/link";

const Card = ({ video }) => (
  <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} />
        </div>
        <div className="card-content">
          <div className="row">
            <div className="col m3 s3" style={{ marginTop: 10 }}>
              <img
                src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                alt=""
                className="circle responsive-img"
              ></img>
            </div>
            <div className="col m9 s9">
              <p className="truncate" style={{ fontWeight: 500, fontSize: 18 }}>
                {video.title}
              </p>
              <p className="grey-text text-lighten-1 truncate">
                {video.channel}
              </p>
            </div>
          </div>
        </div>
        <div className="card-action">
          <Link href={`/video/${video.id}`}>
            <a>Watch this</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .card:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    `}</style>
  </div>
);

export default Card;

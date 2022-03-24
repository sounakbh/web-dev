import React from "react";

const TuitListItem = ({ tuit }) => {
  return (
    <li
      className="list-group-item"
      style={{
        // border: "1px solid rgba(255,255,255,.25)",
        // backgroundColor: "black",
        borderRadius: "none",
      }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src={tuit.avatarImage}
            alt=""
            style={{
              marginTop: "10px",
              width: "150%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-11" style={{ paddingLeft: "15px" }}>
          <div>
            <span>
              <b>{tuit.postedBy.username}</b> &nbsp;
              {tuit.verified ? (
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              ) : (
                ""
              )}
            </span>{" "}
            &nbsp;
            <span className="text-muted">@{tuit.handle}</span>
            <span style={{ float: "right" }}>&#10005;</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: tuit.tuit }} />
          <div className="mt-2">
            {tuit.attachments && tuit.attachments.image ? (
              <img
                src={tuit.attachments.image}
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
                alt=""
              />
            ) : (
              ""
            )}
            {/* {post.postContent ? (
              <div
                className="pt-2"
                style={{
                  padding: "20px",
                  borderRadius: "0 0 10px 10px",
                  border: "1px solid rgba(255,255,255,.25)",
                  borderTop: "none",
                }}
              >
                {post.postContent.postHeading} <br />
                <span className="text-muted">
                  {post.postContent.postContent} <br />
                  <i className="fa fa-link" aria-hidden="true"></i>
                  &nbsp; {post.postContent.postSiteLink}
                </span>
              </div>
            ) : (
              ``
            )} */}

            <div className="p-2 d-flex justify-content-between text-muted">
              <div style={{ color: "#FAF9F6" }}>
                <i
                  className="fa fa-comment"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                {tuit.stats.comments}
              </div>
              <div style={{ color: "#FAF9F6" }}>
                <i
                  className="fa fa-retweet"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                {tuit.stats.retuits}
              </div>
              <div style={{ color: "#FAF9F6" }}>
                {tuit.liked ? (
                  <i
                    className="fa fa-heart"
                    aria-hidden="true"
                    style={{ marginRight: "5px", color: "red" }}
                  ></i>
                ) : (
                  <i
                    className="fa fa-heart"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  ></i>
                )}
                {tuit.stats.likes}
              </div>
              <div style={{ color: "#FAF9F6" }}>
                <i className="fa fa-upload" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TuitListItem;

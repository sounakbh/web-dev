import React, { useState } from "react";
import { useDispatch } from "react-redux";
const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [whatsHappening, setWhatsHappening] = useState("");
  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };
  return (
    <div className="row">
      <div className="col-2">
        <img
          src="../../../images/day5-vault.png"
          alt=""
          style={{
            marginTop: "10px",
            width: "80%",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
          placeholder="What's happening?"
          style={{
            width: "100%",
            backgroundColor: "black",
            border: "none",
            color: "white",
          }}
        ></textarea>
        <hr />
        <div>
          <i
            className="fa fa-picture-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-line-chart text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-smile-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-calendar-check-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <button
            className="btn btn-primary btn-block rounded-pill"
            style={{ float: "right" }}
            onClick={tuitClickHandler}
          >
            Tweet
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;

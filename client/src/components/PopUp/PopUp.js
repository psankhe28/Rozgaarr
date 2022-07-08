import React from "react";
import "./PopUp.css";
import FormatSizeRoundedIcon from "@mui/icons-material/FormatSizeRounded";
import TextIncreaseRoundedIcon from "@mui/icons-material/TextIncreaseRounded";
import TextDecreaseRoundedIcon from "@mui/icons-material/TextDecreaseRounded";

function PopUp(props) {
  return (
    <div>
      <div className="app"></div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="floating-container">
        <div className="floating-button">
            <div className="floating-icon">
          <FormatSizeRoundedIcon style={{ fontSize: "30" }} />
          </div>
        </div>
        <div className="element-container">
          <span className="float-element">
            <button onClick={props.sizeInc}>
              <TextIncreaseRoundedIcon style={{backgroundColor: "#fff",fontSize: "20",color:"#803bec",marginBottom:"3px"}}/>
            </button>
          </span>
          <span className="float-element">
            <button onClick={props.sizeDec}>
              <TextDecreaseRoundedIcon style={{backgroundColor: "#fff",fontSize: "20",color:"#803bec",marginBottom:"3px"}}/>
            </button>
          </span>
          {/* <span className="float-element">
            <button onClick={props.funct}>
              <i className="material-icons">mode_edit</i>
            </button>
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default PopUp;

import React from "react";
import ReactDOM from "react-dom";

export default (props) => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal-backdrop show" />
      <div
        onClick={props.onDismiss}
        className="modal show"
        style={{ display: "block" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-dialog modal-dialog-centered"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button onClick={props.onDismiss} className="close" type="button">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.content}</div>
            <div className="modal-footer">{props.actions}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

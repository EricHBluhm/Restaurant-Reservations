import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Navigate } from 'react-router-dom';
import "./SubmitMessage.css";

const SubmitMessage = props => {
    const [goToSignIn, setGoToSignIn] = React.useState(false);

    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
      }
    };

    useEffect(() => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    }, []);

    if(goToSignIn){
      return <Navigate to="/Login"/>;
    }

    return ReactDOM.createPortal(
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button onClick={() => setGoToSignIn(true)} className="button">
                OK
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById("root")
    );
  };

export default SubmitMessage;
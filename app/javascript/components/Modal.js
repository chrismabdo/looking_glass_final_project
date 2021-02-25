import React from "react"
import './modal.css';

const Modal = ({ t, handleClose, id, show, children, result }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      
      <p>{result ? result[0] : null }</p>
      <p>{result ? result[2] : null }</p>
      <p>{result ? result[3] : null }</p>
        {children}
        <button type="button" id="new-note"onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal
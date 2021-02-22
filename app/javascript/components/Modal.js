import React from "react"
import './modal.css';

const Modal = ({ handleClose, show, children, result }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(result)
  return (
    <div className={showHideClassName}>
        
      <section className="modal-main">
      <p>{result}</p> 
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal
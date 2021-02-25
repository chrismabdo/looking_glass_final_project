import React from "react"
import './modal.css';

const HomePageModal = ({ t, handleClose, id, show, children, result }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      
      <p>{result ? result.title : null }</p>
      <p>{result ? result.release_date : null }</p>
      <p>{result ? result.overview : null }</p>
        {children}
        <button type="button" id="new-note"onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default HomePageModal
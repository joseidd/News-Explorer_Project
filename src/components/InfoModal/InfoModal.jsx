import "./InfoModal.css";
function InfoModal({
  isOpen,
  onClose,
  title,
  buttonText,
  onSecondaryBtnClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container modal__content_info">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__title modal__title_info">{title}</h2>
        <button
          type="button"
          className="modal__login-btn"
          onClick={onSecondaryBtnClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoModal;

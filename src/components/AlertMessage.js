const AlertMessage = ({ boxOpen, onClose, header, message}) => {
  if (!boxOpen) {
    return
  }

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <h2>{header}</h2>
        <p>{message}</p>
        <div className="confirmation-buttons">
            <button className="small-button dark-blue" onClick={onClose}>Stäng</button>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;

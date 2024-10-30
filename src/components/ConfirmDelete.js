const ConfirmationDelete = ({ boxOpen, onClose, onConfirm }) => {
  if (!boxOpen) {
    return
  }

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <h2>Bekräfta radering</h2>
        <p>Vill du radera dokumentet?</p>
        <div className="confirmation-buttons">
            <button className="small-button red" onClick={onConfirm}>Radera</button>
            <button className="small-button gray" onClick={onClose}>Avbryt</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDelete;

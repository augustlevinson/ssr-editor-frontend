const AlertInvitation = ({ boxOpen, onClose, recipient}) => {
  if (!boxOpen) {
    return
  }

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <h2>Inbjudan skickad</h2>
        <p>En inbjudan har skickats till {recipient}.</p>
        <div className="confirmation-buttons">
            <button className="small-button dark-blue" onClick={onClose}>Stäng</button>
        </div>
      </div>
    </div>
  );
};

export default AlertInvitation;

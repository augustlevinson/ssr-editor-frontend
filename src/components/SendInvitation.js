const SendInvitation = ({ boxOpen, onClose, onInput, onConfirm }) => {
  if (!boxOpen) {
    return
  }

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-content">
        <h2>Dela dokumentet</h2>
        <div>
            <input
              className="invite-input"
              type="email"
              name="email"
              onChange={(e) => onInput(e.target.value)}
              placeholder="E-post..."
              required
            />
          </div>
        <div className="confirmation-buttons">
            <button className="small-button dark-blue" onClick={onConfirm}>Skicka inbjudan</button>
            <button className="small-button gray" onClick={onClose}>Avbryt</button>
        </div>
      </div>
    </div>
  );
};

export default SendInvitation;

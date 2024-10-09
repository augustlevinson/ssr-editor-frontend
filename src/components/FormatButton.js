const FormatButton = (props) => {
  return (
    <button
    className="format-button"
      key={props.cmd}
      type="button" // Ensure the button is not of type "submit"
      onMouseDown={(e) => {
        e.preventDefault(); // Prevents the default action
        e.stopPropagation(); // Prevents the event from propagating
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name}
    </button>
  );
};

export default FormatButton;
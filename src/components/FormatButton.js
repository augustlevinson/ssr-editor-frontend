function FormatButton(props) {
  return (
    <button
    className={`format-button dark-blue ${props.cmd}`}
      key={props.cmd}
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        document.execCommand(props.cmd, false, props.arg);
      }}
    >
      {props.name}
    </button>
  );
};

export default FormatButton;
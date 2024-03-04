function Button({ text, onClick }) {
  return (
    <button className="btn btn-ui" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

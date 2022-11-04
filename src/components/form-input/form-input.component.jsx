import "./form-input.styles.scss";

const FormInput = ({ ...props }) => {
  const { onChangeHandler, inputValue, nameText, labelText } = props;

  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onChangeHandler}
        name={nameText}
        value={inputValue}
        type="text"
        required
      />
      {labelText && (
        <label
          className={`form-input-label${inputValue.length ? " shrink" : ""}`}
          htmlFor=""
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormInput;

//import "./form-input.styles.scss";
import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

const FormInput = ({ ...props }) => {
  const { onChangeHandler, inputValue, nameText, labelText, type } = props;
  const inputElement = useRef();
  useEffect(() => {
    inputElement.current.click();
  }, []);

  return (
    <FormGroup>
      <Input
        ref={inputElement}
        className="form-input"
        onChange={onChangeHandler}
        name={nameText}
        value={inputValue}
        type={type}
        required
      />
      {labelText && (
        <Label shrink={inputValue.length} htmlFor="">
          {labelText}
        </Label>
      )}
    </FormGroup>
  );
};

export default FormInput;

//styles
const subColor = "rgb(128, 128, 128)";
const mainColor = "rgb(0,0,0)";
const shrinkLabel = () => `
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
  `;

////css block example////
// const shrinkLabelStyles = css`
//   top: -14px;
//   font-size: 12px;
//   color: ${mainColor};
//   color: red;
// `;

const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${props => (props.shrink ? () => shrinkLabel() : null)}
`;
const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${Label} {
    ${() => shrinkLabel()}
  }
`;
const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;
//     &.shrink {
//       @include shrinkLabel();
//     }
//   }

// $sub-color: grey; rgb(128, 128, 128)
// $main-color: black;

// $sub-color: grey;
// $main-color: black;
// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }
// .group {
//   position: relative;
//   margin: 45px 0;
//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;
//     &:focus {
//       outline: none;
//     }
//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }
//   input[type="password"] {
//     letter-spacing: 0.3em;
//   }
//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;
//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }

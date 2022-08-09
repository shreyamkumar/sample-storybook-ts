import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import "./InputStory.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export interface Props {
  color?: string;
  children?: React.ReactNode;
  outline?: boolean;
  size?: string;
  disabled?: boolean;
  addon?: boolean;
}
function InputStory({ children }: Props) {
  return (
    // <div className="inner-addon left-addon">
    //   <i className="bi bi-person-fill"></i>
    //   <input type="text" className="form-control" placeholder="Username" />
    // </div>

    <InputGroup className="inner-addon left-addon">
      <i className="bi bi-person-fill left"></i>
      <Input placeholder="helllo"></Input>
    </InputGroup>
    // <Input autoFocus={true} addon={true}>
    //   {children}
    // </Input>
  );
}

export default InputStory;

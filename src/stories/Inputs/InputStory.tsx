import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, InputGroup, InputGroupText } from "reactstrap";

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
    <Input autoFocus={true} addon={true}>
      {children}
    </Input>
  );
}

export default InputStory;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

export interface Props {
  color?: string;
  children: React.ReactNode;
  outline?: boolean;
  size?: string;
  disabled?: boolean;
}

function ButtonStory(props: Props) {
  const { color, children, ...rest } = props;
  return (
    <Button color={color} {...rest}>
      {children}
    </Button>
  );
}

export default ButtonStory;

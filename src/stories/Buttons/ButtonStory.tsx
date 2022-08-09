import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

export interface Props {
  color?: string;
  children: React.ReactNode;
  outline?: boolean;
  size?: string;
  disabled?: boolean;
  active?: boolean;
  state?: string;
}

function ButtonStory(props: Props) {
  const { color, state, children, ...rest } = props;

  return (
    <Button
      color={color}
      active={state === "active" ? true : false}
      disabled={state === "disabled" ? true : false}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ButtonStory;

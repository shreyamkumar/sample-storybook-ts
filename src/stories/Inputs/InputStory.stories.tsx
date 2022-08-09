import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { default as Input } from "./InputStory";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    children: { defaultValue: "Default" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// export const NormalInput = Template.bind({});
// PrimaryMedium.args = {
//   color: "primary",
// };
// PrimaryMedium.storyName =
//   "Size=medium, Type=primary, Outline=false, State=normal, Icon Only=false";

export const NormalInput = () => <Input>hello</Input>;

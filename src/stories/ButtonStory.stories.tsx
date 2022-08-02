import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonStory, { Props } from "./ButtonStory";

export default {
  title: "Example/ButtonStory",
  component: ButtonStory,
  argTypes: {
    children: { defaultValue: "Default" },
  },
} as ComponentMeta<typeof ButtonStory>;

const Template: ComponentStory<typeof ButtonStory> = (args) => (
  <ButtonStory {...args} />
);

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  color: "primary",
};
PrimaryMedium.storyName =
  "Size=medium, Type=primary, Outline=false, State=normal, Icon Only=false";

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  color: "secondary",
  size: "lg",
};
SecondaryLarge.storyName =
  "Size=large, Type=secondary, Outline=false, State=normal, Icon Only=false";

export const LinkMediumActive = Template.bind({});
LinkMediumActive.args = {
  color: "link",
};
LinkMediumActive.storyName =
  "Size=medium, Type=link, Outline=false, State=active, Icon Only=false";

export const DangerSmallDisabled = Template.bind({});
DangerSmallDisabled.args = {
  color: "danger",
  size: "sm",
  disabled: true,
};
DangerSmallDisabled.storyName =
  "Size=small, Type=danger, Outline=false, State=disabled, Icon Only=false";

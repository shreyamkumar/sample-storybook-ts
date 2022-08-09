import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { default as Button } from "./ButtonStory";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    children: { defaultValue: "Default" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  color: "primary",
};
PrimaryMedium.storyName =
  "Size=medium, Type=primary, Outline=false, State=normal, Icon Only=false";

export const PrimaryMediumActive = Template.bind({});
PrimaryMediumActive.args = {
  color: "primary",
  state: "active",
};
PrimaryMediumActive.storyName =
  "Size=medium, Type=primary, Outline=false, State=active, Icon Only=false";

export const PrimaryMediumDisbaled = Template.bind({});
PrimaryMediumDisbaled.args = {
  color: "primary",
  state: "disabled",
};
PrimaryMediumDisbaled.storyName =
  "Size=medium, Type=primary, Outline=false, State=disabled, Icon Only=false";

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  color: "primary",
  size: "lg",
};
PrimaryLarge.storyName =
  "Size=large, Type=primary, Outline=false, State=normal, Icon Only=false";

export const PrimaryLargeActive = Template.bind({});
PrimaryLargeActive.args = {
  color: "primary",
  size: "lg",
  state: "active",
};
PrimaryLargeActive.storyName =
  "Size=large, Type=primary, Outline=false, State=active, Icon Only=false";

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  color: "primary",
  size: "lg",
  state: "disabled",
};
PrimaryLargeDisabled.storyName =
  "Size=large, Type=primary, Outline=false, State=disabled, Icon Only=false";

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  color: "primary",
  size: "sm",
};
PrimarySmall.storyName =
  "Size=small, Type=primary, Outline=false, State=normal, Icon Only=false";

export const PrimarySmallActive = Template.bind({});
PrimarySmallActive.args = {
  color: "primary",
  size: "sm",
  state: "active",
};
PrimarySmallActive.storyName =
  "Size=small, Type=primary, Outline=false, State=active, Icon Only=false";

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  color: "primary",
  size: "sm",
  state: "disabled",
};
PrimarySmallDisabled.storyName =
  "Size=small, Type=primary, Outline=false, State=disabled, Icon Only=false";

// Secondary

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  color: "secondary",
};
SecondaryMedium.storyName =
  "Size=medium, Type=secondary, Outline=false, State=normal, Icon Only=false";

export const SecondaryMediumActive = Template.bind({});
SecondaryMediumActive.args = {
  color: "secondary",
  state: "active",
};
SecondaryMediumActive.storyName =
  "Size=medium, Type=secondary, Outline=false, State=active, Icon Only=false";

export const SecondaryMediumDisbaled = Template.bind({});
SecondaryMediumDisbaled.args = {
  color: "secondary",
  state: "disabled",
};
SecondaryMediumDisbaled.storyName =
  "Size=medium, Type=secondary, Outline=false, State=disabled, Icon Only=false";

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  color: "secondary",
  size: "lg",
};
SecondaryLarge.storyName =
  "Size=large, Type=secondary, Outline=false, State=normal, Icon Only=false";

export const SecondaryLargeActive = Template.bind({});
SecondaryLargeActive.args = {
  color: "secondary",
  size: "lg",
  state: "active",
};
SecondaryLargeActive.storyName =
  "Size=large, Type=secondary, Outline=false, State=active, Icon Only=false";

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  color: "secondary",
  size: "lg",
  state: "disabled",
};
SecondaryLargeDisabled.storyName =
  "Size=large, Type=secondary, Outline=false, State=disabled, Icon Only=false";

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  color: "secondary",
  size: "sm",
};
SecondarySmall.storyName =
  "Size=small, Type=secondary, Outline=false, State=normal, Icon Only=false";

export const SecondarySmallActive = Template.bind({});
SecondarySmallActive.args = {
  color: "secondary",
  size: "sm",
  state: "active",
};
SecondarySmallActive.storyName =
  "Size=small, Type=secondary, Outline=false, State=active, Icon Only=false";

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  color: "secondary",
  size: "sm",
  state: "disabled",
};
SecondarySmallDisabled.storyName =
  "Size=small, Type=secondary, Outline=false, State=disabled, Icon Only=false";

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  color: "primary",
  outline: true,
};
OutlinePrimary.storyName =
  "Size=medium, Type=primary, Outline=true, State=normal, Icon Only=false";

export const OutlinePrimaryActive = Template.bind({});
OutlinePrimaryActive.args = {
  color: "primary",
  outline: true,
  state: "active",
};
OutlinePrimaryActive.storyName =
  "Size=medium, Type=primary, Outline=true, State=active, Icon Only=false";

export const OutlinePrimaryDisabled = Template.bind({});
OutlinePrimaryDisabled.args = {
  color: "primary",
  outline: true,
  state: "disabled",
};
OutlinePrimaryDisabled.storyName =
  "Size=medium, Type=primary, Outline=true, State=disabled, Icon Only=false";

export const OutlinePrimaryLarge = Template.bind({});
OutlinePrimaryLarge.args = {
  color: "primary",
  size: "lg",
  outline: true,
};
OutlinePrimaryLarge.storyName =
  "Size=large, Type=primary, Outline=true, State=normal, Icon Only=false";

export const OutlinePrimaryLargeActive = Template.bind({});
OutlinePrimaryLargeActive.args = {
  color: "primary",
  size: "lg",
  outline: true,
  state: "active",
};
OutlinePrimaryLargeActive.storyName =
  "Size=large, Type=primary, Outline=true, State=active, Icon Only=false";

export const OutlinePrimaryLargeDisabled = Template.bind({});
OutlinePrimaryLargeDisabled.args = {
  color: "primary",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlinePrimaryLargeDisabled.storyName =
  "Size=large, Type=primary, Outline=true, State=disabled, Icon Only=false";

export const OutlinePrimarySmall = Template.bind({});
OutlinePrimarySmall.args = {
  color: "primary",
  size: "sm",
  outline: true,
};
OutlinePrimarySmall.storyName =
  "Size=small, Type=primary, Outline=true, State=normal, Icon Only=false";

export const OutlinePrimarySmallActive = Template.bind({});
OutlinePrimarySmallActive.args = {
  color: "primary",
  size: "sm",
  outline: true,
  state: "active",
};
OutlinePrimarySmallActive.storyName =
  "Size=small, Type=primary, Outline=true, State=active, Icon Only=false";

export const OutlinePrimarySmallDisabled = Template.bind({});
OutlinePrimarySmallDisabled.args = {
  color: "primary",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlinePrimarySmallDisabled.storyName =
  "Size=small, Type=primary, Outline=true, State=disabled, Icon Only=false";

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  color: "secondary",
  outline: true,
};
OutlineSecondary.storyName =
  "Size=medium, Type=secondary, Outline=true, State=normal, Icon Only=false";

export const OutlineSecondaryActive = Template.bind({});
OutlineSecondaryActive.args = {
  color: "secondary",
  outline: true,
  state: "active",
};
OutlineSecondaryActive.storyName =
  "Size=medium, Type=secondary, Outline=true, State=active, Icon Only=false";

export const OutlineSecondaryDisabled = Template.bind({});
OutlineSecondaryDisabled.args = {
  color: "secondary",
  outline: true,
  state: "disabled",
};
OutlineSecondaryDisabled.storyName =
  "Size=medium, Type=secondary, Outline=true, State=disabled, Icon Only=false";

export const OutlineSecondaryLarge = Template.bind({});
OutlineSecondaryLarge.args = {
  color: "secondary",
  size: "lg",
  outline: true,
};
OutlineSecondaryLarge.storyName =
  "Size=large, Type=secondary, Outline=true, State=normal, Icon Only=false";

export const OutlineSecondaryLargeActive = Template.bind({});
OutlineSecondaryLargeActive.args = {
  color: "secondary",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineSecondaryLargeActive.storyName =
  "Size=large, Type=secondary, Outline=true, State=active, Icon Only=false";

export const OutlineSecondaryLargeDisabled = Template.bind({});
OutlineSecondaryLargeDisabled.args = {
  color: "secondary",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineSecondaryLargeDisabled.storyName =
  "Size=large, Type=secondary, Outline=true, State=disabled, Icon Only=false";

export const OutlineSecondarySmall = Template.bind({});
OutlineSecondarySmall.args = {
  color: "secondary",
  size: "sm",
  outline: true,
};
OutlineSecondarySmall.storyName =
  "Size=small, Type=secondary, Outline=true, State=normal, Icon Only=false";

export const OutlineSecondarySmallActive = Template.bind({});
OutlineSecondarySmallActive.args = {
  color: "secondary",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineSecondarySmallActive.storyName =
  "Size=small, Type=secondary, Outline=true, State=active, Icon Only=false";

export const OutlineSecondarySmallDisabled = Template.bind({});
OutlineSecondarySmallDisabled.args = {
  color: "secondary",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineSecondarySmallDisabled.storyName =
  "Size=small, Type=secondary, Outline=true, State=disabled, Icon Only=false";

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  color: "link",
};
LinkPrimary.storyName =
  "Size=medium, Type=link, Outline=false, State=normal, Icon Only=false";

export const LinkPrimaryActive = Template.bind({});
LinkPrimaryActive.args = {
  color: "link",
  state: "active",
};
LinkPrimaryActive.storyName =
  "Size=medium, Type=link, Outline=false, State=active, Icon Only=false";

export const LinkPrimaryDisabled = Template.bind({});
LinkPrimaryDisabled.args = {
  color: "link",
  state: "disabled",
};
LinkPrimaryDisabled.storyName =
  "Size=medium, Type=link, Outline=false, State=disabled, Icon Only=false";

export const LinkPrimaryLarge = Template.bind({});
LinkPrimaryLarge.args = {
  color: "link",
  size: "lg",
};
LinkPrimaryLarge.storyName =
  "Size=large, Type=link, Outline=false, State=normal, Icon Only=false";

export const LinkPrimaryLargeActive = Template.bind({});
LinkPrimaryLargeActive.args = {
  color: "link",
  size: "lg",
  state: "active",
};
LinkPrimaryLargeActive.storyName =
  "Size=large, Type=link, Outline=false, State=active, Icon Only=false";

export const LinkPrimaryLargeDisabled = Template.bind({});
LinkPrimaryLargeDisabled.args = {
  color: "link",
  size: "lg",
  state: "disabled",
};
LinkPrimaryLargeDisabled.storyName =
  "Size=large, Type=link, Outline=false, State=disabled, Icon Only=false";

export const LinkPrimarySmall = Template.bind({});
LinkPrimarySmall.args = {
  color: "link",
  size: "sm",
};
LinkPrimarySmall.storyName =
  "Size=small, Type=link, Outline=false, State=normal, Icon Only=false";

export const LinkPrimarySmallActive = Template.bind({});
LinkPrimarySmallActive.args = {
  color: "link",
  size: "sm",
  state: "active",
};
LinkPrimarySmallActive.storyName =
  "Size=small, Type=link, Outline=false, State=active, Icon Only=false";

export const LinkPrimarySmallDisabled = Template.bind({});
LinkPrimarySmallDisabled.args = {
  color: "link",
  size: "sm",
  state: "disabled",
};
LinkPrimarySmallDisabled.storyName =
  "Size=small, Type=link, Outline=false, State=disabled, Icon Only=false";

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  color: "success",
};
SuccessMedium.storyName =
  "Size=medium, Type=success, Outline=false, State=normal, Icon Only=false";

export const SuccessMediumActive = Template.bind({});
SuccessMediumActive.args = {
  color: "success",
  state: "active",
};
SuccessMediumActive.storyName =
  "Size=medium, Type=success, Outline=false, State=active, Icon Only=false";

export const SuccessMediumDisbaled = Template.bind({});
SuccessMediumDisbaled.args = {
  color: "success",
  state: "disabled",
};
SuccessMediumDisbaled.storyName =
  "Size=medium, Type=success, Outline=false, State=disabled, Icon Only=false";

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  color: "success",
  size: "lg",
};
SuccessLarge.storyName =
  "Size=large, Type=success, Outline=false, State=normal, Icon Only=false";

export const SuccessLargeActive = Template.bind({});
SuccessLargeActive.args = {
  color: "success",
  size: "lg",
  state: "active",
};
SuccessLargeActive.storyName =
  "Size=large, Type=success, Outline=false, State=active, Icon Only=false";

export const SuccessLargeDisabled = Template.bind({});
SuccessLargeDisabled.args = {
  color: "success",
  size: "lg",
  state: "disabled",
};
SuccessLargeDisabled.storyName =
  "Size=large, Type=success, Outline=false, State=disabled, Icon Only=false";

export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  color: "success",
  size: "sm",
};
SuccessSmall.storyName =
  "Size=small, Type=success, Outline=false, State=normal, Icon Only=false";

export const SuccessSmallActive = Template.bind({});
SuccessSmallActive.args = {
  color: "success",
  size: "sm",
  state: "active",
};
SuccessSmallActive.storyName =
  "Size=small, Type=success, Outline=false, State=active, Icon Only=false";

export const SuccessSmallDisabled = Template.bind({});
SuccessSmallDisabled.args = {
  color: "success",
  size: "sm",
  state: "disabled",
};
SuccessSmallDisabled.storyName =
  "Size=small, Type=success, Outline=false, State=disabled, Icon Only=false";

export const DangerMedium = Template.bind({});
DangerMedium.args = {
  color: "danger",
};
DangerMedium.storyName =
  "Size=medium, Type=danger, Outline=false, State=normal, Icon Only=false";

export const DangerMediumActive = Template.bind({});
DangerMediumActive.args = {
  color: "danger",
  state: "active",
};
DangerMediumActive.storyName =
  "Size=medium, Type=danger, Outline=false, State=active, Icon Only=false";

export const DangerMediumDisbaled = Template.bind({});
DangerMediumDisbaled.args = {
  color: "danger",
  state: "disabled",
};
DangerMediumDisbaled.storyName =
  "Size=medium, Type=danger, Outline=false, State=disabled, Icon Only=false";

export const DangerLarge = Template.bind({});
DangerLarge.args = {
  color: "danger",
  size: "lg",
};
DangerLarge.storyName =
  "Size=large, Type=danger, Outline=false, State=normal, Icon Only=false";

export const DangerLargeActive = Template.bind({});
DangerLargeActive.args = {
  color: "danger",
  size: "lg",
  state: "active",
};
DangerLargeActive.storyName =
  "Size=large, Type=danger, Outline=false, State=active, Icon Only=false";

export const DangerLargeDisabled = Template.bind({});
DangerLargeDisabled.args = {
  color: "danger",
  size: "lg",
  state: "disabled",
};
DangerLargeDisabled.storyName =
  "Size=large, Type=danger, Outline=false, State=disabled, Icon Only=false";

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  color: "danger",
  size: "sm",
};
DangerSmall.storyName =
  "Size=small, Type=danger, Outline=false, State=normal, Icon Only=false";

export const DangerSmallActive = Template.bind({});
DangerSmallActive.args = {
  color: "danger",
  size: "sm",
  state: "active",
};
DangerSmallActive.storyName =
  "Size=small, Type=danger, Outline=false, State=active, Icon Only=false";

export const DangerSmallDisabled = Template.bind({});
DangerSmallDisabled.args = {
  color: "danger",
  size: "sm",
  state: "disabled",
};
DangerSmallDisabled.storyName =
  "Size=small, Type=danger, Outline=false, State=disabled, Icon Only=false";

export const WarningMedium = Template.bind({});
WarningMedium.args = {
  color: "warning",
};
WarningMedium.storyName =
  "Size=medium, Type=warning, Outline=false, State=normal, Icon Only=false";

export const WarningMediumActive = Template.bind({});
WarningMediumActive.args = {
  color: "warning",
  state: "active",
};
WarningMediumActive.storyName =
  "Size=medium, Type=warning, Outline=false, State=active, Icon Only=false";

export const WarningMediumDisbaled = Template.bind({});
WarningMediumDisbaled.args = {
  color: "warning",
  state: "disabled",
};
WarningMediumDisbaled.storyName =
  "Size=medium, Type=warning, Outline=false, State=disabled, Icon Only=false";

export const WarningLarge = Template.bind({});
WarningLarge.args = {
  color: "warning",
  size: "lg",
};
WarningLarge.storyName =
  "Size=large, Type=warning, Outline=false, State=normal, Icon Only=false";

export const WarningLargeActive = Template.bind({});
WarningLargeActive.args = {
  color: "warning",
  size: "lg",
  state: "active",
};
WarningLargeActive.storyName =
  "Size=large, Type=warning, Outline=false, State=active, Icon Only=false";

export const WarningLargeDisabled = Template.bind({});
WarningLargeDisabled.args = {
  color: "warning",
  size: "lg",
  state: "disabled",
};
WarningLargeDisabled.storyName =
  "Size=large, Type=warning, Outline=false, State=disabled, Icon Only=false";

export const WarningSmall = Template.bind({});
WarningSmall.args = {
  color: "warning",
  size: "sm",
};
WarningSmall.storyName =
  "Size=small, Type=warning, Outline=false, State=normal, Icon Only=false";

export const WarningSmallActive = Template.bind({});
WarningSmallActive.args = {
  color: "warning",
  size: "sm",
  state: "active",
};
WarningSmallActive.storyName =
  "Size=small, Type=warning, Outline=false, State=active, Icon Only=false";

export const WarningSmallDisabled = Template.bind({});
WarningSmallDisabled.args = {
  color: "warning",
  size: "sm",
  state: "disabled",
};
WarningSmallDisabled.storyName =
  "Size=small, Type=warning, Outline=false, State=disabled, Icon Only=false";

export const InfoMedium = Template.bind({});
InfoMedium.args = {
  color: "info",
};
InfoMedium.storyName =
  "Size=medium, Type=info, Outline=false, State=normal, Icon Only=false";

export const InfoMediumActive = Template.bind({});
InfoMediumActive.args = {
  color: "info",
  state: "active",
};
InfoMediumActive.storyName =
  "Size=medium, Type=info, Outline=false, State=active, Icon Only=false";

export const InfoMediumDisbaled = Template.bind({});
InfoMediumDisbaled.args = {
  color: "info",
  state: "disabled",
};
InfoMediumDisbaled.storyName =
  "Size=medium, Type=info, Outline=false, State=disabled, Icon Only=false";

export const InfoLarge = Template.bind({});
InfoLarge.args = {
  color: "info",
  size: "lg",
};
InfoLarge.storyName =
  "Size=large, Type=info, Outline=false, State=normal, Icon Only=false";

export const InfoLargeActive = Template.bind({});
InfoLargeActive.args = {
  color: "info",
  size: "lg",
  state: "active",
};
InfoLargeActive.storyName =
  "Size=large, Type=info, Outline=false, State=active, Icon Only=false";

export const InfoLargeDisabled = Template.bind({});
InfoLargeDisabled.args = {
  color: "info",
  size: "lg",
  state: "disabled",
};
InfoLargeDisabled.storyName =
  "Size=large, Type=info, Outline=false, State=disabled, Icon Only=false";

export const InfoSmall = Template.bind({});
InfoSmall.args = {
  color: "info",
  size: "sm",
};
InfoSmall.storyName =
  "Size=small, Type=info, Outline=false, State=normal, Icon Only=false";

export const InfoSmallActive = Template.bind({});
InfoSmallActive.args = {
  color: "info",
  size: "sm",
  state: "active",
};
InfoSmallActive.storyName =
  "Size=small, Type=info, Outline=false, State=active, Icon Only=false";

export const InfoSmallDisabled = Template.bind({});
InfoSmallDisabled.args = {
  color: "info",
  size: "sm",
  state: "disabled",
};
InfoSmallDisabled.storyName =
  "Size=small, Type=info, Outline=false, State=disabled, Icon Only=false";

export const LightMedium = Template.bind({});
LightMedium.args = {
  color: "light",
};
LightMedium.storyName =
  "Size=medium, Type=light, Outline=false, State=normal, Icon Only=false";

export const LightMediumActive = Template.bind({});
LightMediumActive.args = {
  color: "light",
  state: "active",
};
LightMediumActive.storyName =
  "Size=medium, Type=light, Outline=false, State=active, Icon Only=false";

export const LightMediumDisbaled = Template.bind({});
LightMediumDisbaled.args = {
  color: "light",
  state: "disabled",
};
LightMediumDisbaled.storyName =
  "Size=medium, Type=light, Outline=false, State=disabled, Icon Only=false";

export const LightLarge = Template.bind({});
LightLarge.args = {
  color: "light",
  size: "lg",
};
LightLarge.storyName =
  "Size=large, Type=light, Outline=false, State=normal, Icon Only=false";

export const LightLargeActive = Template.bind({});
LightLargeActive.args = {
  color: "light",
  size: "lg",
  state: "active",
};
LightLargeActive.storyName =
  "Size=large, Type=light, Outline=false, State=active, Icon Only=false";

export const LightLargeDisabled = Template.bind({});
LightLargeDisabled.args = {
  color: "light",
  size: "lg",
  state: "disabled",
};
LightLargeDisabled.storyName =
  "Size=large, Type=light, Outline=false, State=disabled, Icon Only=false";

export const LightSmall = Template.bind({});
LightSmall.args = {
  color: "light",
  size: "sm",
};
LightSmall.storyName =
  "Size=small, Type=light, Outline=false, State=normal, Icon Only=false";

export const LightSmallActive = Template.bind({});
LightSmallActive.args = {
  color: "light",
  size: "sm",
  state: "active",
};
LightSmallActive.storyName =
  "Size=small, Type=light, Outline=false, State=active, Icon Only=false";

export const LightSmallDisabled = Template.bind({});
LightSmallDisabled.args = {
  color: "light",
  size: "sm",
  state: "disabled",
};
LightSmallDisabled.storyName =
  "Size=small, Type=light, Outline=false, State=disabled, Icon Only=false";

export const DarkMedium = Template.bind({});
DarkMedium.args = {
  color: "dark",
};
DarkMedium.storyName =
  "Size=medium, Type=dark, Outline=false, State=normal, Icon Only=false";

export const DarkMediumActive = Template.bind({});
DarkMediumActive.args = {
  color: "dark",
  state: "active",
};
DarkMediumActive.storyName =
  "Size=medium, Type=dark, Outline=false, State=active, Icon Only=false";

export const DarkMediumDisbaled = Template.bind({});
DarkMediumDisbaled.args = {
  color: "dark",
  state: "disabled",
};
DarkMediumDisbaled.storyName =
  "Size=medium, Type=dark, Outline=false, State=disabled, Icon Only=false";

export const DarkLarge = Template.bind({});
DarkLarge.args = {
  color: "dark",
  size: "lg",
};
DarkLarge.storyName =
  "Size=large, Type=dark, Outline=false, State=normal, Icon Only=false";

export const DarkLargeActive = Template.bind({});
DarkLargeActive.args = {
  color: "dark",
  size: "lg",
  state: "active",
};
DarkLargeActive.storyName =
  "Size=large, Type=dark, Outline=false, State=active, Icon Only=false";

export const DarkLargeDisabled = Template.bind({});
DarkLargeDisabled.args = {
  color: "dark",
  size: "lg",
  state: "disabled",
};
DarkLargeDisabled.storyName =
  "Size=large, Type=dark, Outline=false, State=disabled, Icon Only=false";

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  color: "dark",
  size: "sm",
};
DarkSmall.storyName =
  "Size=small, Type=dark, Outline=false, State=normal, Icon Only=false";

export const DarkSmallActive = Template.bind({});
DarkSmallActive.args = {
  color: "dark",
  size: "sm",
  state: "active",
};
DarkSmallActive.storyName =
  "Size=small, Type=dark, Outline=false, State=active, Icon Only=false";

export const DarkSmallDisabled = Template.bind({});
DarkSmallDisabled.args = {
  color: "dark",
  size: "sm",
  state: "disabled",
};
DarkSmallDisabled.storyName =
  "Size=small, Type=dark, Outline=false, State=disabled, Icon Only=false";

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  color: "success",
  outline: true,
};
OutlineSuccess.storyName =
  "Size=medium, Type=success, Outline=true, State=normal, Icon Only=false";

export const OutlineSuccessActive = Template.bind({});
OutlineSuccessActive.args = {
  color: "success",
  outline: true,
  state: "active",
};
OutlineSuccessActive.storyName =
  "Size=medium, Type=success, Outline=true, State=active, Icon Only=false";

export const OutlineSuccessDisabled = Template.bind({});
OutlineSuccessDisabled.args = {
  color: "success",
  outline: true,
  state: "disabled",
};
OutlineSuccessDisabled.storyName =
  "Size=medium, Type=success, Outline=true, State=disabled, Icon Only=false";

export const OutlineSuccessLarge = Template.bind({});
OutlineSuccessLarge.args = {
  color: "success",
  size: "lg",
  outline: true,
};
OutlineSuccessLarge.storyName =
  "Size=large, Type=success, Outline=true, State=normal, Icon Only=false";

export const OutlineSuccessLargeActive = Template.bind({});
OutlineSuccessLargeActive.args = {
  color: "success",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineSuccessLargeActive.storyName =
  "Size=large, Type=success, Outline=true, State=active, Icon Only=false";

export const OutlineSuccessLargeDisabled = Template.bind({});
OutlineSuccessLargeDisabled.args = {
  color: "success",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineSuccessLargeDisabled.storyName =
  "Size=large, Type=success, Outline=true, State=disabled, Icon Only=false";

export const OutlineSuccessSmall = Template.bind({});
OutlineSuccessSmall.args = {
  color: "success",
  size: "sm",
  outline: true,
};
OutlineSuccessSmall.storyName =
  "Size=small, Type=success, Outline=true, State=normal, Icon Only=false";

export const OutlineSuccessSmallActive = Template.bind({});
OutlineSuccessSmallActive.args = {
  color: "success",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineSuccessSmallActive.storyName =
  "Size=small, Type=success, Outline=true, State=active, Icon Only=false";

export const OutlineSuccessSmallDisabled = Template.bind({});
OutlineSuccessSmallDisabled.args = {
  color: "success",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineSuccessSmallDisabled.storyName =
  "Size=small, Type=success, Outline=true, State=disabled, Icon Only=false";

export const OutlineDanger = Template.bind({});
OutlineDanger.args = {
  color: "danger",
  outline: true,
};
OutlineDanger.storyName =
  "Size=medium, Type=danger, Outline=true, State=normal, Icon Only=false";

export const OutlineDangerActive = Template.bind({});
OutlineDangerActive.args = {
  color: "danger",
  outline: true,
  state: "active",
};
OutlineDangerActive.storyName =
  "Size=medium, Type=danger, Outline=true, State=active, Icon Only=false";

export const OutlineDangerDisabled = Template.bind({});
OutlineDangerDisabled.args = {
  color: "danger",
  outline: true,
  state: "disabled",
};
OutlineDangerDisabled.storyName =
  "Size=medium, Type=danger, Outline=true, State=disabled, Icon Only=false";

export const OutlineDangerLarge = Template.bind({});
OutlineDangerLarge.args = {
  color: "danger",
  size: "lg",
  outline: true,
};
OutlineDangerLarge.storyName =
  "Size=large, Type=danger, Outline=true, State=normal, Icon Only=false";

export const OutlineDangerLargeActive = Template.bind({});
OutlineDangerLargeActive.args = {
  color: "danger",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineDangerLargeActive.storyName =
  "Size=large, Type=danger, Outline=true, State=active, Icon Only=false";

export const OutlineDangerLargeDisabled = Template.bind({});
OutlineDangerLargeDisabled.args = {
  color: "danger",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineDangerLargeDisabled.storyName =
  "Size=large, Type=danger, Outline=true, State=disabled, Icon Only=false";

export const OutlineDangerSmall = Template.bind({});
OutlineDangerSmall.args = {
  color: "danger",
  size: "sm",
  outline: true,
};
OutlineDangerSmall.storyName =
  "Size=small, Type=danger, Outline=true, State=normal, Icon Only=false";

export const OutlineDangerSmallActive = Template.bind({});
OutlineDangerSmallActive.args = {
  color: "danger",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineDangerSmallActive.storyName =
  "Size=small, Type=danger, Outline=true, State=active, Icon Only=false";

export const OutlineDangerSmallDisabled = Template.bind({});
OutlineDangerSmallDisabled.args = {
  color: "danger",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineDangerSmallDisabled.storyName =
  "Size=small, Type=danger, Outline=true, State=disabled, Icon Only=false";

export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
  color: "warning",
  outline: true,
};
OutlineWarning.storyName =
  "Size=medium, Type=warning, Outline=true, State=normal, Icon Only=false";

export const OutlineWarningActive = Template.bind({});
OutlineWarningActive.args = {
  color: "warning",
  outline: true,
  state: "active",
};
OutlineWarningActive.storyName =
  "Size=medium, Type=warning, Outline=true, State=active, Icon Only=false";

export const OutlineWarningDisabled = Template.bind({});
OutlineWarningDisabled.args = {
  color: "warning",
  outline: true,
  state: "disabled",
};
OutlineWarningDisabled.storyName =
  "Size=medium, Type=warning, Outline=true, State=disabled, Icon Only=false";

export const OutlineWarningLarge = Template.bind({});
OutlineWarningLarge.args = {
  color: "warning",
  size: "lg",
  outline: true,
};
OutlineWarningLarge.storyName =
  "Size=large, Type=warning, Outline=true, State=normal, Icon Only=false";

export const OutlineWarningLargeActive = Template.bind({});
OutlineWarningLargeActive.args = {
  color: "warning",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineWarningLargeActive.storyName =
  "Size=large, Type=warning, Outline=true, State=active, Icon Only=false";

export const OutlineWarningLargeDisabled = Template.bind({});
OutlineWarningLargeDisabled.args = {
  color: "warning",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineWarningLargeDisabled.storyName =
  "Size=large, Type=warning, Outline=true, State=disabled, Icon Only=false";

export const OutlineWarningSmall = Template.bind({});
OutlineWarningSmall.args = {
  color: "warning",
  size: "sm",
  outline: true,
};
OutlineWarningSmall.storyName =
  "Size=small, Type=warning, Outline=true, State=normal, Icon Only=false";

export const OutlineWarningSmallActive = Template.bind({});
OutlineWarningSmallActive.args = {
  color: "warning",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineWarningSmallActive.storyName =
  "Size=small, Type=warning, Outline=true, State=active, Icon Only=false";

export const OutlineWarningSmallDisabled = Template.bind({});
OutlineWarningSmallDisabled.args = {
  color: "warning",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineWarningSmallDisabled.storyName =
  "Size=small, Type=warning, Outline=true, State=disabled, Icon Only=false";

export const OutlineInfo = Template.bind({});
OutlineInfo.args = {
  color: "info",
  outline: true,
};
OutlineInfo.storyName =
  "Size=medium, Type=info, Outline=true, State=normal, Icon Only=false";

export const OutlineInfoActive = Template.bind({});
OutlineInfoActive.args = {
  color: "info",
  outline: true,
  state: "active",
};
OutlineInfoActive.storyName =
  "Size=medium, Type=info, Outline=true, State=active, Icon Only=false";

export const OutlineInfoDisabled = Template.bind({});
OutlineInfoDisabled.args = {
  color: "info",
  outline: true,
  state: "disabled",
};
OutlineInfoDisabled.storyName =
  "Size=medium, Type=info, Outline=true, State=disabled, Icon Only=false";

export const OutlineInfoLarge = Template.bind({});
OutlineInfoLarge.args = {
  color: "info",
  size: "lg",
  outline: true,
};
OutlineInfoLarge.storyName =
  "Size=large, Type=info, Outline=true, State=normal, Icon Only=false";

export const OutlineInfoLargeActive = Template.bind({});
OutlineInfoLargeActive.args = {
  color: "info",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineInfoLargeActive.storyName =
  "Size=large, Type=info, Outline=true, State=active, Icon Only=false";

export const OutlineInfoLargeDisabled = Template.bind({});
OutlineInfoLargeDisabled.args = {
  color: "info",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineInfoLargeDisabled.storyName =
  "Size=large, Type=info, Outline=true, State=disabled, Icon Only=false";

export const OutlineInfoSmall = Template.bind({});
OutlineInfoSmall.args = {
  color: "info",
  size: "sm",
  outline: true,
};
OutlineInfoSmall.storyName =
  "Size=small, Type=info, Outline=true, State=normal, Icon Only=false";

export const OutlineInfoSmallActive = Template.bind({});
OutlineInfoSmallActive.args = {
  color: "info",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineInfoSmallActive.storyName =
  "Size=small, Type=info, Outline=true, State=active, Icon Only=false";

export const OutlineInfoSmallDisabled = Template.bind({});
OutlineInfoSmallDisabled.args = {
  color: "info",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineInfoSmallDisabled.storyName =
  "Size=small, Type=info, Outline=true, State=disabled, Icon Only=false";

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  color: "light",
  outline: true,
};
OutlineLight.storyName =
  "Size=medium, Type=light, Outline=true, State=normal, Icon Only=false";

export const OutlineLightActive = Template.bind({});
OutlineLightActive.args = {
  color: "light",
  outline: true,
  state: "active",
};
OutlineLightActive.storyName =
  "Size=medium, Type=light, Outline=true, State=active, Icon Only=false";

export const OutlineLightDisabled = Template.bind({});
OutlineLightDisabled.args = {
  color: "light",
  outline: true,
  state: "disabled",
};
OutlineLightDisabled.storyName =
  "Size=medium, Type=light, Outline=true, State=disabled, Icon Only=false";

export const OutlineLightLarge = Template.bind({});
OutlineLightLarge.args = {
  color: "light",
  size: "lg",
  outline: true,
};
OutlineLightLarge.storyName =
  "Size=large, Type=light, Outline=true, State=normal, Icon Only=false";

export const OutlineLightLargeActive = Template.bind({});
OutlineLightLargeActive.args = {
  color: "light",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineLightLargeActive.storyName =
  "Size=large, Type=light, Outline=true, State=active, Icon Only=false";

export const OutlineLightLargeDisabled = Template.bind({});
OutlineLightLargeDisabled.args = {
  color: "light",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineLightLargeDisabled.storyName =
  "Size=large, Type=light, Outline=true, State=disabled, Icon Only=false";

export const OutlineLightSmall = Template.bind({});
OutlineLightSmall.args = {
  color: "light",
  size: "sm",
  outline: true,
};
OutlineLightSmall.storyName =
  "Size=small, Type=light, Outline=true, State=normal, Icon Only=false";

export const OutlineLightSmallActive = Template.bind({});
OutlineLightSmallActive.args = {
  color: "light",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineLightSmallActive.storyName =
  "Size=small, Type=light, Outline=true, State=active, Icon Only=false";

export const OutlineLightSmallDisabled = Template.bind({});
OutlineLightSmallDisabled.args = {
  color: "light",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineLightSmallDisabled.storyName =
  "Size=small, Type=light, Outline=true, State=disabled, Icon Only=false";

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  color: "dark",
  outline: true,
};
OutlineDark.storyName =
  "Size=medium, Type=dark, Outline=true, State=normal, Icon Only=false";

export const OutlineDarkActive = Template.bind({});
OutlineDarkActive.args = {
  color: "dark",
  outline: true,
  state: "active",
};
OutlineDarkActive.storyName =
  "Size=medium, Type=dark, Outline=true, State=active, Icon Only=false";

export const OutlineDarkDisabled = Template.bind({});
OutlineDarkDisabled.args = {
  color: "dark",
  outline: true,
  state: "disabled",
};
OutlineDarkDisabled.storyName =
  "Size=medium, Type=dark, Outline=true, State=disabled, Icon Only=false";

export const OutlineDarkLarge = Template.bind({});
OutlineDarkLarge.args = {
  color: "dark",
  size: "lg",
  outline: true,
};
OutlineDarkLarge.storyName =
  "Size=large, Type=dark, Outline=true, State=normal, Icon Only=false";

export const OutlineDarkLargeActive = Template.bind({});
OutlineDarkLargeActive.args = {
  color: "dark",
  size: "lg",
  outline: true,
  state: "active",
};
OutlineDarkLargeActive.storyName =
  "Size=large, Type=dark, Outline=true, State=active, Icon Only=false";

export const OutlineDarkLargeDisabled = Template.bind({});
OutlineDarkLargeDisabled.args = {
  color: "dark",
  size: "lg",
  outline: true,
  state: "disabled",
};
OutlineDarkLargeDisabled.storyName =
  "Size=large, Type=dark, Outline=true, State=disabled, Icon Only=false";

export const OutlineDarkSmall = Template.bind({});
OutlineDarkSmall.args = {
  color: "dark",
  size: "sm",
  outline: true,
};
OutlineDarkSmall.storyName =
  "Size=small, Type=dark, Outline=true, State=normal, Icon Only=false";

export const OutlineDarkSmallActive = Template.bind({});
OutlineDarkSmallActive.args = {
  color: "dark",
  size: "sm",
  outline: true,
  state: "active",
};
OutlineDarkSmallActive.storyName =
  "Size=small, Type=dark, Outline=true, State=active, Icon Only=false";

export const OutlineDarkSmallDisabled = Template.bind({});
OutlineDarkSmallDisabled.args = {
  color: "dark",
  size: "sm",
  outline: true,
  state: "disabled",
};
OutlineDarkSmallDisabled.storyName =
  "Size=small, Type=dark, Outline=true, State=disabled, Icon Only=false";

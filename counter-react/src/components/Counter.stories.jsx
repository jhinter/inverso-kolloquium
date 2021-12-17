import React from "react";
import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
  initialValue: 0,
  title: "Hello world",
};

export const WithTitleAndColor = Template.bind({});
WithTitleAndColor.args = {
  title: "Hello world",
  initialValue: 0,
  color: "red",
};

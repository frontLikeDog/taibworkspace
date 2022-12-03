import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Row } from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/Columns",
  component: Row,
} as ComponentMeta<typeof Row>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>
    <div className="bg-red-400 text-center">
      <p>First column</p>
    </div>
    <div className="bg-blue-400 text-center">
      <p>Second column</p>
    </div>
    <div className="bg-yellow-400 text-center">
      <p>Thrid column</p>
    </div>
    <div className="bg-gray-400 text-center">
      <p>Fourth column</p>
    </div>
    <div className="bg-success text-center">
      <p>Other column</p>
    </div>
    <div className="bg-dark text-center">
      <p className="text-white">Other column</p>
    </div>
    <div className="bg-primary-400 text-center">
      <p>Other column</p>
    </div>
    <div className="bg-warning text-center">
      <p>Other column</p>
    </div>
    <div className="bg-link text-center">
      <p>Other column</p>
    </div>
    <div className="bg-primary-400 text-center">
      <p>Other column</p>
    </div>
  </Row>
);

//A simple way to build responsive columns
export const Base = Template.bind({});

//Define the size of each column individually
export const Size = () => (
  <React.Fragment>
    <Row >
      <div className="bg-yellow-400 text-center col-span-12">
        <p>col-span-12</p>
      </div>
    </Row>
    <Row gaps="gap-2">
      <div className="bg-info text-center col-span-3">
        <p>col-span-3</p>
      </div>
      <div className="bg-primary-400 text-center">
        <p>4</p>
      </div>
      <div className="bg-primary-400 text-center">
        <p>5</p>
      </div>
      <div className="bg-primary-400 text-center">
        <p>6</p>
      </div>
      <div className="bg-primary-400 text-center"><p>7</p></div>
      <div className="bg-primary-400 text-center"><p>8</p></div>
      <div className="bg-primary-400 text-center"><p>9</p></div>
      <div className="bg-primary-400 text-center"><p>10</p></div>
      <div className="bg-primary-400 text-center"><p>11</p></div>
      <div className="bg-primary-400 text-center"><p>12</p></div>
    </Row>
    <Row gaps="gap-0" className="grid-cols-6">
      <div className="bg-primary-400 text-center col-span-2">
        <p>col-span-2</p>
      </div>
      <div className="bg-blue-400 text-center col-auto">
        <p>column</p>
      </div>

      <div className="bg-green-400 text-center col-auto">
        <p>column</p>
      </div>
      <div className="bg-primary-400 text-center col-auto">
        <p>column</p>
      </div>
    </Row>
  </React.Fragment>
);

//Customize the gap between the columns
export const Gap = Template.bind({});
Gap.args = {
  gaps: "gap-6",
};

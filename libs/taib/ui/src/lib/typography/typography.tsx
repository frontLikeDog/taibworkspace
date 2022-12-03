import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TypographyStyles from "./typography.module.css";

import Title from "./Title";
import Text from "./Text";
import Link from "./Link";

const Typography = ({ children, className, tag = "div", style }: any) => {
  const classes = [
    TypographyStyles["taibui-typography"],
    TypographyStyles["taibui-typography-container"],
  ];
  if (className) {
    classes.push(className);
  }
  const CustomTag: any = `${tag}`;
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  );
};

Typography.Title = Title;
Typography.Text = Text;
Typography.Link = Link;

export default Typography;

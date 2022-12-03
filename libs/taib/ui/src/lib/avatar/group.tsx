import * as React from "react";
import Avatar from "./avatar";


export interface GroupProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  maxCount: number;
  size: any;
}

export const { isValidElement } = React;

export function isFragment(child: any): boolean {
  return child && isValidElement(child) && child.type === React.Fragment;
}

type AnyObject = Record<PropertyKey, any>;

type RenderProps = AnyObject | ((originProps: AnyObject) => AnyObject | void);

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props?: RenderProps
): React.ReactNode {
  if (!isValidElement(element)) {
    return replacement;
  }
  return React.cloneElement(
    element,
    typeof props === "function" ? props(element.props || {}) : props
  );
}

export function cloneElement(
  element: React.ReactNode,
  props?: RenderProps
): React.ReactElement {
  return replaceElement(element, element, props) as React.ReactElement;
}

const Group: React.FC<GroupProps> = ({
  className = "flex -space-x-2",
  children,
  style,
  maxCount,
  ...props
}: GroupProps) => {
  const cls = `cursor-pointer`;
  const ChildrenWithProps = React.Children.map(children, (child) => {
    return cloneElement(child as React.ReactElement, {
      className: cls,
    });
  });
  const numOfChild = React.Children.count(ChildrenWithProps);
  console.log(ChildrenWithProps);
  let childrenShow: any;
  if (maxCount && maxCount < numOfChild) {
    childrenShow = ChildrenWithProps && ChildrenWithProps.slice(0, maxCount);
    const childrenHidden = ChildrenWithProps && ChildrenWithProps.slice(maxCount, numOfChild);
  }
  return (
    <div className={className} style={style}>
      {childrenShow}
      <Avatar type="Text" text={'+'+(numOfChild - maxCount)} />
    </div>
  );
  //   return (
  //     <div className={className} style={style} {...props}>
  //       {ChildrenWithProps}
  //     </div>
  //   );
};

export { Group };

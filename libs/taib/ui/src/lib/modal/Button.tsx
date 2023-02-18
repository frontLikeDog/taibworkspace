import { useFocusRing } from "@react-aria/focus";
import React from "react";
import { useButton } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";

import type { AriaButtonProps } from "@react-aria/button";

interface ButtonProps extends AriaButtonProps {
  variant?: "default" | "cta" | "destructive";
  style?: React.CSSProperties;
  className?: string;
}

export function Button(props: ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  let bg = "";
  if (props.variant === "destructive") {
    bg = isPressed ? "bg-red-600 text-white" : "bg-red-500 text-white";
  } else if (props.variant === "cta") {
    bg = isPressed ? "bg-blue-600 text-white" : "bg-blue-500 text-white";
  } else {
    bg = isPressed ? "bg-gray-300 text-gray-800" : "bg-gray-200 text-gray-800";
  }

  const focus = isFocusVisible ? "ring ring-offset-2 ring-blue-400" : "";

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`${focus} text-sm font-semibold py-2 px-4 rounded cursor-default focus:outline-none transition ${bg}`}
    >
      {props.children}
    </button>
  );
}

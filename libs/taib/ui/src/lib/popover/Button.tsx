import { useButton } from "@react-aria/button";


function Button(props:any) {
    const ref = props.buttonRef;
    const { buttonProps } = useButton(props, ref);
    return (
      <button {...buttonProps} ref={ref} style={props.style}>
        {props.children}
      </button>
    );
  }

  export { Button };
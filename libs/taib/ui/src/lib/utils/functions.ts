export const callAllHandler = <T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) => {
  return (event: any): any => {
    fns.some((fn) => {
      fn?.(event);

      return event?.defaultPrevented;
    });
  };
};

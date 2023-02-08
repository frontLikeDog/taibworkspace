/* eslint-disable-next-line */
export interface ProgressProps {
  pwitdh: number;
  label?: string;
  style?: React.CSSProperties;
}

export function Progress(props: ProgressProps) {
  const ChildRender = () =>
    props.label === undefined ? (
      <div
        className="bg-blue-600 h-3"
        style={{
          width: `${Number(props.pwitdh)}%`,
          ...props.style,
        }}
      ></div>
    ) : (
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
        style={{
          width: `${Number(props.pwitdh)}%`,
          ...props.style,
        }}
      >
        {props.label}
      </div>
    );
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <ChildRender />
    </div>
  );
}

export default Progress;

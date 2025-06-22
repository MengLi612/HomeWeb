import type BlankSpaceProps from "../Interface/BlankSpaceProps";

export default function LeaveBlankSpace({
  height = 0,
  width = 0,
  children,
  style = {},
}: BlankSpaceProps) {
  return (
    <>
      <div className="blank-space" style={{ height: height, width: width, ...style }}>
        {children}
      </div>
    </>
  );
}

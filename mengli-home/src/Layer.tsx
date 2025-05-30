export function Layer({
  children,
  zIndex,
  style,
}: {
  children?: React.ReactNode;
  zIndex?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="layer"
      style={{
        zIndex: zIndex,
        display: "absolute",
        height: "100%",
        width: "100%",
        position: "absolute",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

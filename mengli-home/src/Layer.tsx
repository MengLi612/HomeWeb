export function Layer({
  children,
  zIndex,
  id,
  style,
}: {
  children?: React.ReactNode;
  zIndex?: number;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="layer"
      id={id}
      style={{
        zIndex: zIndex,
        height: "100%",
        width: "100%",
        position: "absolute",
        pointerEvents: "auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

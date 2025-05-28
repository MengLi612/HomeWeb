export function Layer({
  children,
  zIndex,
}: {
  children?: React.ReactNode;
  zIndex?: number;
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
      }}
    >
      {children}
    </div>
  );
}

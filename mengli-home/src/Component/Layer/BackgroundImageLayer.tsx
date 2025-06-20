export function BackgroundImageLayer({ imgURL }: { imgURL?: string }) {
  return (
    <img
      src={imgURL}
      alt="Background"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}

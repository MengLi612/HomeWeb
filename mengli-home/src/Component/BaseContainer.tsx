interface BaseContainerProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
}

export default function BaseContainer({
  className,
  id,
  style,
  children,
}: BaseContainerProps) {
  return (
    <div className={className} id={id} style={style}>
      {children}
    </div>
  );
}
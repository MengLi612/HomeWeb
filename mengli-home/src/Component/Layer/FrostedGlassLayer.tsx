const FrostedGlassLayer: React.FC = () => {
  const glassStyle: React.CSSProperties = {
    margin: "10px", // 居中显示
    width: "calc(100% - 20px)", // 可根据需要调整尺寸
    height: "calc(100% - 20px)", // 可根据需要调整尺寸
    background: "rgba(255, 255, 255, 0.08)", // 半透明效果
    backdropFilter: "blur(2px)", // 模糊效果
    WebkitBackdropFilter: "blur(2px)", // Safari 兼容写法
    borderRadius: "16px", // 圆角矩形
    border: "1px solid rgba(255, 255, 255, 0.3)", // 边缘细边线增强玻璃质感
  };

  return <div style={glassStyle} />;
};

export default FrostedGlassLayer;

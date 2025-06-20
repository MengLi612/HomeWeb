interface RainBackgroundLayerProps {
  // 默认雨滴数量为 100，可以通过属性调节
  numDrops?: number;
}

export const RainBackgroundLayer: React.FC<RainBackgroundLayerProps> = ({
  numDrops = 100,
}) => {
  // 生成指定数量的雨滴
  const drops = Array.from({ length: numDrops }, (_, i) => {
    // 随机左偏移（百分比）
    const left = Math.random() * 100;
    // 随机动画时长（落雨速度，单位秒）
    const duration = (Math.random() * 1 + 1).toFixed(2);
    // 随机延时（避免所有雨滴同时开始动画）
    const delay = (Math.random() * 5).toFixed(2);

    const dropStyle: React.CSSProperties = {
      position: "absolute",
      left: `${left}%`,
      width: "2px",
      height: "15px",
      // 雨滴使用半透明白色表现
      background: "rgba(255, 255, 255, 0.7)",
      // 应用 CSS 动画
      animation: `rainfall ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
    };

    return <div key={i} style={dropStyle} />;
  });

  return (
    <>
      {/* 内嵌样式定义 keyframes 动画 */}
      <style>
        {`
          @keyframes rainfall {
            0% {
              top: -10%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              top: 110%;
              opacity: 1;
            }
          }
        `}
      </style>
      {/* 绝对定位的容器覆盖全屏 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // 不阻碍底层交互
          overflow: "hidden",
        }}
      >
        {drops}
      </div>
    </>
  );
};
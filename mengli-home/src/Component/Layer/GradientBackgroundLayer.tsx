import { useState } from "react";

// 生成随机的16进制颜色，例如 "#A1B2C3"
function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 根据随机颜色和角度生成线性渐变字符串
function generateGradient(): string {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

export const GradientBackgroundLayer: React.FC = () => {
  // 初始背景使用随机渐变
  const [background, setBackground] = useState<string>(generateGradient());

  // 点击按钮时更新背景颜色
  const changeBackground = () => {
    setBackground(generateGradient());
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: background,
        transition: "background 0.5s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={changeBackground}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        生成新渐变背景
      </button>
    </div>
  );
};

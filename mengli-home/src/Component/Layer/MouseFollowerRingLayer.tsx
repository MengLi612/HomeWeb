import { useState, useEffect } from "react";

// 根据当前的 cursor 样式映射对应颜色
function getRingColor(cursor: string): string {
  if (cursor === "auto" || cursor === "default") {
    return "#ffffff"; // 默认白色
  }
  switch (cursor) {
    case "pointer":
      return "#3498db"; // 蓝色
    case "text":
      return "#2ecc71"; // 绿色
    case "wait":
      return "#e74c3c"; // 红色
    case "crosshair":
      return "#9b59b6"; // 紫色
    case "move":
      return "#f1c40f"; // 黄色
    default:
      return "#ffffff";
  }
}

const MouseFollowerRingLayer: React.FC = () => {
  // 保存鼠标坐标状态
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 当前圆环边框颜色，默认为白色
  const [ringColor, setRingColor] = useState<string>("#ffffff");
  // 保存鼠标是否按下的状态
  const [isPressed, setIsPressed] = useState<boolean>(false);

  // 监听鼠标移动来更新坐标和对应下方元素的 cursor 样式
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });

      // 获取鼠标下方的元素计算样式中的 cursor 属性
      const elementUnderMouse = document.elementFromPoint(clientX, clientY);
      let cursorStyle = "default";
      if (elementUnderMouse) {
        const computedStyle = window.getComputedStyle(elementUnderMouse);
        cursorStyle = computedStyle.cursor;
      }
      // 根据 cursor 样式设置圆环颜色
      const newColor = getRingColor(cursorStyle);
      setRingColor(newColor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 添加鼠标按下和松开的事件监听器，更新 isPressed 状态
  useEffect(() => {
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // 样式中使用 transform 进行 translate 与 scale 组合，scale 根据 isPressed 状态变化
  const ringStyle: React.CSSProperties = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "50px",
    height: "50px",
    border: `2px solid ${ringColor}`,
    borderRadius: "50%",
    transform: `translate(-50%, -50%) scale(${isPressed ? 0.5 : 1})`,
    pointerEvents: "none", // 保持不干扰鼠标事件
    transition: "border-color 0.2s ease, transform 0.2s ease",
  };

  return <div style={ringStyle} />;
};

export default MouseFollowerRingLayer;


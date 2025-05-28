export function generateRandomColors(
  count: number,
  randomAlpha: boolean = false
): string[] {
  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    // 生成随机的 RGB 分量（0-255）
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // 根据参数决定 alpha 值
    const a = randomAlpha ? Math.random().toFixed(2) : 1;

    // 构建 CSS 颜色字符串
    const color = randomAlpha
      ? `rgba(${r}, ${g}, ${b}, ${a})`
      : `rgb(${r}, ${g}, ${b})`;

    colors.push(color);
  }

  return colors;
}
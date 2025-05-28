type Vector2 = { x: number; y: number };

export function generateRandomVector2sInArea(
  width: number,
  height: number,
  origin: Vector2,
  count: number
): Vector2[] {
  if (count <= 0) return [];
  const minGapX = width / (2 * count);
  const minGapY = height / (2 * count);
  const vectors: Vector2[] = [];

  let attempts = 0;
  while (vectors.length < count && attempts < 1000) {
    const candidate: Vector2 = {
      x: Math.floor(Math.random() * width) - origin.x,
      y: Math.floor(Math.random() * height) - origin.y,
    };
    if (
      vectors.every(
        (v) =>
          Math.abs(v.x - candidate.x) >= minGapX &&
          Math.abs(v.y - candidate.y) >= minGapY
      )
    ) {
      vectors.push(candidate);
    }
    attempts++;
  }

  // Fallback to evenly spaced if not enough unique vectors found
  if (vectors.length < count) {
    const stepX = width / (count - 1 || 1);
    const stepY = height / (count - 1 || 1);
    for (let i = 0; i < count; i++) {
      vectors[i] = {
        x: origin.x + Math.round(i * stepX),
        y: origin.y + Math.round(i * stepY),
      };
    }
  }

  return vectors;
}

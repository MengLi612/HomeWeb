export function generateRandomNumbersInRange(
  min: number,
  max: number,
  count: number
): number[] {
  if (count <= 0) return [];
  const minGap = (max - min) / (2 * count);
  const numbers: number[] = [];

  let attempts = 0;
  while (numbers.length < count && attempts < 1000) {
    const candidate = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numbers.every((n) => Math.abs(n - candidate) >= minGap)) {
      numbers.push(candidate);
    }
    attempts++;
  }

  // If not enough unique numbers found, fallback to evenly spaced
  if (numbers.length < count) {
    const step = (max - min) / (count - 1 || 1);
    for (let i = 0; i < count; i++) {
      numbers[i] = Math.round(min + i * step);
    }
  }

  return numbers;
}

// Relative offsets for one PQRST beat, derived from the original static
// ecg-wave.svg path: T-wave ripple, baseline, P-wave bump, QRS spike.
const BEAT_PATTERN = [
  { dx: 0, value: 0 },
  { dx: 3.5, value: 5.2 },
  { dx: 7.1, value: -5.2 },
  { dx: 10.6, value: 0 },
  { dx: 35.3, value: 0 },
  { dx: 40.6, value: 2.6 },
  { dx: 44.1, value: 26 },
  { dx: 49.4, value: -26 },
];
const BEAT_WIDTH = 54.7;

export function buildEcgWaveform({ beats = 6, amplitude = 1 } = {}) {
  const points = [];
  for (let b = 0; b < beats; b++) {
    for (const { dx, value } of BEAT_PATTERN) {
      points.push({ x: b * BEAT_WIDTH + dx, value: value * amplitude });
    }
  }
  points.push({ x: beats * BEAT_WIDTH, value: 0 });
  return points;
}

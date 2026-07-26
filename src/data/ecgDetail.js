export const ecgDetail = {
  title: "心電圖(ECG)",
  filterDefault: "最近 14 天",
  lastReading: "最近一筆：1 天前",
  legend: [
    { label: "良好", color: "#80cb92" },
    { label: "警告", color: "#ffb84c" },
    { label: "危險", color: "#ff7970" },
  ],
  symptomStats: [
    { label: "竇性心律", value: 9 },
    { label: "心房顫動", value: 0 },
    { label: "低心率", value: 0 },
    { label: "高心率", value: 0 },
  ],
  heartRateTrend: {
    series: [68, 72, 70, 75, 69, 71],
    yDomain: [0, 150],
  },
  records: [
    { rhythm: "竇性心律", timestamp: "4/1 下午6:32", avgBpm: 71, duration: "30 秒" },
    { rhythm: "竇性心律", timestamp: "4/1 下午6:32", avgBpm: 71, duration: "30 秒" },
    { rhythm: "竇性心律", timestamp: "4/1 下午6:32", avgBpm: 71, duration: "30 秒" },
  ],
};

export const ecgRecordDetail = {
  rhythm: "竇性心律",
  status: "正常",
  datetime: "2026 年 4 月 1 日 下午 6:31",
  avgBpm: 71,
};

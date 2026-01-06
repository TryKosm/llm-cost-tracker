import { UsageRecord } from "./types.js";

export function averageLatency(records: UsageRecord[]): number {
  if (!records.length) return 0;
  return records.reduce((acc, r) => acc + r.latencyMs, 0) / records.length;
}

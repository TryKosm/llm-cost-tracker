import { estimateCostUSD } from "../src/cost.js";

const value = estimateCostUSD({ model: "x", promptTokens: 1000, completionTokens: 0, latencyMs: 10 }, 0.002);
if (value !== 0.002) throw new Error("cost test failed");

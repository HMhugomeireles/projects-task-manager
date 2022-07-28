import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4444",
});

const DEFAULT_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  timeout: 60000,
};

export function resolveHeader(extraConfig: any) {
  if (typeof extraConfig === "object") {
    return {
      ...DEFAULT_HEADERS,
      ...extraConfig,
    };
  }
  return {
    ...DEFAULT_HEADERS,
  };
}

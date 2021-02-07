import { HIDE_TOAST, SHOW_TOAST } from "../type/toast";

export function showToast(data: any) {
  return {
    type: SHOW_TOAST,
    message: data.message,
    severity: data.type,
    summary: data.summary,
  };
}

export function hideToast() {
  return { type: HIDE_TOAST };
}

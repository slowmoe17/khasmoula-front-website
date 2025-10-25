import { useMutation } from "@tanstack/react-query";
import { saveDeviceId } from "../services";

export function useRegisterDevice() {
  return useMutation({
    mutationFn: (data: { deviceId: string; email?: string }) =>
      saveDeviceId(data),
  });
}

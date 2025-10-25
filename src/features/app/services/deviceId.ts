import api from "@/lib/axios";

interface SaveDeviceIdProps {
  deviceId: string;
  email?: string;
}

export const saveDeviceId = async ({ deviceId, email }: SaveDeviceIdProps) => {
  const { data } = await api.post("/device", { email, deviceId });
  return data;
};

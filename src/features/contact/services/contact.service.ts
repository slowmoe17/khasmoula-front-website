import api from "@/lib/axios";

interface SendContactProps {
  name: string;
  email: string;
  message: string;
}

export const sendContact = async (data: SendContactProps) => {
  const response = await api.post("/contact", data);
  return response.data;
};

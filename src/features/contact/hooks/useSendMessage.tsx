import { useMutation } from "@tanstack/react-query";
import { sendContact } from "../services";

function useSendMessage() {
  return useMutation({
    mutationFn: sendContact,
  });
}

export default useSendMessage;

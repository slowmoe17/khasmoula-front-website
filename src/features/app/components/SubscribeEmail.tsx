"use client";

import { Button, Input } from "@/components";
import { EmailIcon } from "@/components/icons";
import { getOrCreateDeviceId } from "@/lib/utils";
import { useCallback, useState } from "react";
import { useRegisterDevice } from "../hook";

function SubscribeEmail({ buttonText }: { buttonText: string }) {
  const { mutate: registerDevice, isPending } = useRegisterDevice();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = useCallback(() => {
    const deviceId = getOrCreateDeviceId();
    if (!deviceId) return;
    registerDevice({ deviceId, email }, { onSuccess: () => setEmail("") });
  }, [registerDevice, email]);

  return (
    <div className="flex items-center justify-center gap-4 md:flex-row flex-col-reverse max-md:px-6">
      <Button
        variant="default"
        className="bg-primary text-white h-12 rounded-[10px] w-32 max-md:w-full"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {buttonText}
      </Button>
      <div className="relative w-full md:w-auto">
        <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]" />
        <Input
          dir="ltr"
          className="pl-12 placeholder:text-[#999999] font-medium h-12 border-[#999999] rounded-[10px] w-full md:w-[366px]"
          placeholder="example@gmail.com"
          type="email"
          disabled={isPending}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
    </div>
  );
}

export default SubscribeEmail;

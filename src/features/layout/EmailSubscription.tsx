"use client";

import { Button } from "@/components";
import EmailIcon from "@/components/icons/EmailIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocalization } from "@/hooks";
import { getOrCreateDeviceId } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRegisterDevice } from "../app";

function EmailSubscription() {
  const { t: tMailSubscription } = useLocalization({
    namespace: "components.mailSubscription",
  });

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string>("");

  const hasOpenedOnce = useRef(false);

  const { mutate: registerDevice, isPending } = useRegisterDevice();

  useEffect(() => {
    const storedEmail = localStorage?.getItem?.("email") || "";
    if (!storedEmail) {
      setOpen(true);
    } else {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (email) localStorage.setItem("email", email);
    setOpen(false);
  }, [email]);

  useEffect(() => {
    if (open) {
      hasOpenedOnce.current = true;
      return;
    }

    if (!hasOpenedOnce.current) return;

    const deviceId = getOrCreateDeviceId();
    const savedEmail = localStorage?.getItem?.("email") || "";

    if (!deviceId) return;

    const payload: { deviceId: string; email?: string } = { deviceId };
    if (savedEmail) payload.email = savedEmail;

    registerDevice(payload);
  }, [open, registerDevice]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:min-w-[560px]" showCloseButton={false}>
        <DialogHeader className="sm:space-y-5">
          <div className="flex items-center justify-center mx-auto w-[60px] h-[60px] rounded-[15px] bg-primary-light-hover">
            <EmailIcon className="size-8 text-primary" />
          </div>

          <DialogTitle className="sm:text-[28px] text-xl font-semibold text-center">
            {tMailSubscription("title")}
          </DialogTitle>
          <DialogDescription className="text-[#606060] sm:text-xl text-base text-center max-w-[367px] mx-auto">
            {tMailSubscription("description")}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5">
          <Label
            htmlFor="email"
            className="text-[#6B7280] sm:text-lg text-base mb-2"
          >
            {tMailSubscription("field.email")}
          </Label>
          <Input
            id="email"
            placeholder={tMailSubscription("field.placeholder")}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
          />
        </div>

        <DialogFooter className="space-y-7 sm:mt-8 mt-3 flex flex-col!">
          <Button
            disabled={isPending}
            variant="default"
            className="w-full sm:h-14.5 h-12 rounded-[10px] sm:text-2xl text-lg"
            onClick={handleSubmit}
          >
            {tMailSubscription("button.subscribe")}
          </Button>
          <p className="sm:text-lg text-base text-center text-[#606060]">
            {tMailSubscription("footer.description")}
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EmailSubscription;

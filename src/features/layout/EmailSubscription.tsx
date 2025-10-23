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

function EmailSubscription() {
  return (
    <Dialog open={false}>
      <DialogContent className="min-w-[560px]" showCloseButton={false}>
        <DialogHeader className="space-y-5">
          <div className="flex items-center justify-center mx-auto w-[60px] h-[60px] rounded-[15px] bg-primary-light-hover">
            <EmailIcon className="size-8 text-primary" />
          </div>

          <DialogTitle className="text-[28px] font-semibold text-center">
            خلّك أول من يعرف بالعروض!
          </DialogTitle>
          <DialogDescription className="text-[#606060] text-xl text-center max-w-[367px] mx-auto">
            سجّل إيميلك واستقبل أحدث أكواد الخصم والعروض الحصرية على بريدك.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5">
          <Label htmlFor="email" className="text-[#6B7280] text-lg mb-2">
            البريد الاكلتروني
          </Label>
          <Input
            id="email"
            className="placeholder:text-[#9CA3AF] h-14 border-[#D1D5DB] rounded-[10px] text-xl"
            placeholder="ادخل بريدك الالكتروني "
          />
        </div>

        <DialogFooter className="space-y-7 mt-8 flex flex-col!">
          <Button
            variant="default"
            className="w-full h-14.5 rounded-[10px] text-2xl"
          >
            اشترك الان
          </Button>
          <p className="text-lg text-center text-[#606060]">
            ما نرسل سبام 🚫 — بس العروض اللي تهمّك.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EmailSubscription;

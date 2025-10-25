"use client";

import { Button, Input } from "@/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendMessage } from "../hooks";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب أن يكون على الأقل 2 حروف.",
  }),

  email: z.email({
    message: "البريد الإلكتروني غير صالح.",
  }),

  message: z.string().min(10, {
    message: "الرسالة يجب أن يكون على الأقل 10 حروف.",
  }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate: sendMessage, isPending } = useSendMessage();

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMessage(values);
  }

  return (
    <div className="shadow-[0px_0px_4px_0px_#00000040] rounded-[10px] lg:p-12 p-6 bg-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5.5">
          <div className="flex items-center justify-between gap-7 flex-wrap lg:flex-nowrap">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="m-0">الاسم بالكامل</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل اسمك بالكامل" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="m-0">البريد الاكلتروني</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ادخل بريدك الالكتروني"
                      {...field}
                      type="email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="m-0">رسالتك</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="تفضل اكتب ما تريده"
                    {...field}
                    className="min-h-60 max-h-80"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="lg:mt-12 md:mt-8 mt-4 lg:h-14 h-12  lg:text-2xl text-lg w-full"
            disabled={isPending}
          >
            إرسال
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;

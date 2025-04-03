"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useOTPTimer } from "../hooks/useOTPTimer";

type Props = {
  onSubmit: (otp: string) => void;
  loading?: boolean;
  userEmail: string;
};

const formSchema = z.object({
  otp: z.string().min(6, "Enter complete code"),
});

const OTPVerification = ({ onSubmit, loading, userEmail }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data.otp);
  };

  const { formattedTime, restart, OTPResentResponse } = useOTPTimer(120);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  {...field}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-customRed text-base font-bold py-5"
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>
        <div className="flex flex-row items-center justify-center space-x-6">
          <p className="font-normal text-base text-[#1D0101]">
            Resend another code after{" "}
            <span className="text-customRed font-semibold">
              {formattedTime}
            </span>
          </p>
          <button
            className={`font-bold text-base text-gray-600 underline ${formattedTime === "0:00" ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
            onClick={() => restart(userEmail)}
            disabled={formattedTime !== "0:00"}
            type="submit"
          >
            Resend
          </button>
        </div>
          {OTPResentResponse && (
            <p className="text-gray-900">{OTPResentResponse}</p>
          )}
      </form>
    </Form>
  );
};

export default OTPVerification;

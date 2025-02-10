"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { HiOutlineUser } from "react-icons/hi2";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSignUp } from "../utils/signUp";
import ErrorAlert from "./ErrorAlert";
import Success from "./SuccessAlert";

// type Props = {}

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z
    .string()
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    )
    .min(8, "Password must be at least 8 characters long"),
  rememberMe: z.boolean(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  role: z.string().min(1, "Select a role"),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      firstName: "",
      lastName: "",
      role: "",
    },
  });

  const { signUpNewUser, setError, loading, success, error, errorMessage} =
    useSignUp();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailAddress: values.email,
      password: values.password,
      role: values.role,
    };
    signUpNewUser(newUser);
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleDismiss = () => {
    setError(false);
  };

  return (
    <div>
       <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col lg:flex-row justify-between">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <HiOutlineUser
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Bulaba"
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <HiOutlineUser
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Lunaa"
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        {...field}
                        type="email"
                        placeholder="youremail@gmail.com"
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pr-10 pl-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Register as: </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value || ""}
                      className="flex flex-row"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="admin" id="r1" />
                        <Label htmlFor="r1">Admin</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="seller" id="r2" />
                        <Label htmlFor="r2">Seller</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="buyer" id="r3" />
                        <Label htmlFor="r3">Buyer</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-4">
              {error && (
                <ErrorAlert
                  errorMessage={errorMessage}
                  onDismiss={handleDismiss}
                />
              )}
              {success && (
                <Success />
              )}
              <Button
                type="submit"
                className="w-full bg-customRed text-base font-bold py-5"
              >
                {loading ? "Signing you up..." : "Sign Up"}
              </Button>

              <div className="relative">
                <Image
                  src={"/logos/google_logo.png"}
                  width={20}
                  height={20}
                  alt={"google"}
                  className="absolute left-4 lg:left-36 top-1/2 -translate-y-1/2"
                ></Image>
                <Button className="w-full bg-white text-black py-5 border-[3px] border-gray-400 hover:border-none">
                  Sign up with Google
                </Button>
              </div>
            </div>
          </form>
        </Form>
    </div>
  );
};

export default SignUpForm;

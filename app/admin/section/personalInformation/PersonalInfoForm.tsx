/* eslint-disable @typescript-eslint/no-unused-vars */
import ErrorAlert from "@/app/signup/components/ErrorAlert";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ProfilePictureEdit from "./ProfilePictureEdit";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BiUserPin } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  optionalPhoneNumber?: string;
  userType: string;
  gender: string;
  active: boolean;
};

type Props = {
  personalInfo: PersonalInfo;
  error: boolean;
  loading: boolean;
  handleDismiss: () => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const formSchema = z.object({
  firstName: z.string().min(2, "Enter a valid email address"),
  lastName: z.string(),
  emailAddress: z.string(),
  phoneNumber: z.string(),
  optionalPhoneNumber: z.string(),
  userType: z.string(),
  gender: z.string(),
});

const PersonalInfoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      optionalPhoneNumber: "",
      userType: "",
      gender: "",
    },
  });

  // const handleDismiss = () => {
  //   setError(false);
  // };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const userCredentails = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailAddress: values.emailAddress,
      phoneNumber: values.phoneNumber,
      optionalPhoneNumber: values.optionalPhoneNumber,
      userType: values.userType,
      gender: values.gender,
    };

    console.log(userCredentails);
  }

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const handleDismiss = () => {
    console.log("Dismiss");
  };
  return (
    <div>
      <ProfilePictureEdit />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-8">
          {/* First name and Last name  */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IoMdContact
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Love"
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IoMdContact
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          type={"text"}
                          placeholder="Enter your password"
                          className="pr-10 pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Email  */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MdOutlineMail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <Input
                      type={"text"}
                      placeholder="Enter your password"
                      className="pr-10 pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone number and opotional phone number  */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiPhone
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          {...field}
                          type="text"
                          placeholder="1234567890"
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="md:w-1/2">
              {" "}
              <FormField
                control={form.control}
                name="optionalPhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiPhone
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          type={"text"}
                          placeholder="1234567890"
                          className="pr-10 pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* User type and gender  */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Type</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <BiUserPin
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          {...field}
                          type="text"
                          placeholder="User Type"
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <BsPeople
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <Input
                          type={"text"}
                          placeholder="Gender"
                          className="pr-10 pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {error && (
              <ErrorAlert
                errorMessage={"Invalid Credentials"}
                onDismiss={handleDismiss}
              />
            )}
            <Button
              type="submit"
              className="md:w-1/4 bg-customRed text-base text-center font-bold py-5 mt-6"
            >
              {loading ? "Updating..." : "Update Now"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;

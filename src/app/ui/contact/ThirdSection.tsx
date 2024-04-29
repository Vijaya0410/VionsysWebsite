/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from 'react-hot-toast';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { headers } from "next/headers";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.string().length(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  email: z.string().email("Invalid email!!"),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const ThirdSection = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      setIsPending(true);
      const response: AxiosResponse<any> = await axios.post(
        "/api/email", // Replace with your API endpoint
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsPending(false);
      toast.success("Message sent successfully!");
      console.log("Response:", response.data);
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error:", err.response?.data || err.message);
      setIsPending(false);
      toast.error(err.message);
    }

    form.reset();
  }

  return (
    <div>
      <div className="flex justify-around mt-0 bg-white">
        <img
          src="https://img.freepik.com/free-vector/white-background-with-wavy-lines_23-2149124446.jpg?t=st=1713935414~exp=1713939014~hmac=4e4633f5a4e31b12fea0cdee7b3b4ffaa6423369fd539fcac49f589fc5675c5a&w=900"
          className="bg-object-cover lg:w-full lg:h-screen md:block hidden md:w-full lg:mt-0"
        ></img>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:mt-10 shadow-md shadow-blue-500 rounded-[22px] md:w-1/2 w-full p-8 m-4 bg-slate-100 md:absolute lg:p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <h1 className="pb-4 tracking-wide md:text-2xl text-md text-center font-medium underline underline-offset-4 decoration-blue-800">
                    {" "}
                    Send A Message{" "}
                  </h1>
                  <FormLabel>Enter Your name</FormLabel>
                  <FormControl>
                    <Input placeholder=" Enter your name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact number" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Email id</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    {...field} // Pass the field props to TextArea
                    placeholder="Type your message here."
                    id="message-2"
                  />
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {
              !isPending ? (<Button type="submit" className="flex justify-center">
                Submit
              </Button>) : (
                <Button type="submit" className="flex justify-center">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                  Submit
                </Button>
              )
            }
          </form>
        </Form>
      </div>


      <div className="Location Area">
        <div className="flex flex-col h-full md:w-full md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6818.152391642604!2d73.93858737762325!3d18.546651353587574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf282419d50d%3A0x2cc71f615579ab3a!2sVionsys%20IT%20Solutions%20India%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1713765708125!5m2!1sen!2sin"
            width="screen"
            height="500"
            loading="eager"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center bg-gray-300 w-screen h-[50vh]">
        <img
          src="https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg?t=st=1714111992~exp=1714115592~hmac=038c18ae50be3d00e4092aefb8280812b6146931b746f313f723bebaa18bf4d6&w=900"
          alt=""
          className="object-cover w-full"
        ></img>
        <div
          data-aos="fade right"
          className=" absolute pt-20 lg:text-4xl md:text-3xl sm:text-2xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r animate-pulse from-red-500 to-blue-700"
        >
          <h1 className="inline">
            Stay Updated With Our{" "}
            <span className="flex">Social Media Channels</span>
          </h1>
          <div className="  text-black">
            <ul>
              <li>
                <div className="flex justify-center md:justify-start mt-7 md:pl-28">
                  <BsFacebook
                    size={40}
                    className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                    color="blue"
                  />
                  <BsInstagram
                    size={40}
                    className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                    color="#e1306c"
                  />
                  <RxLinkedinLogo
                    size={40}
                    className=" mr-3transform hover:scale-125 transition duration-300 ease-in-out"
                    color="#0077B5"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;

"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const images = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
  "/assets/image4.jpg",
  "/assets/image5.jpg",
  "/assets/image6.jpg",
  "/assets/image7.jpg",
  "/assets/image8.jpg",
  "/assets/image9.jpg",
];
const logo = "/globe.svg";
const google = "/assets/google_logo.svg";

const Login = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center relative">
      <div className="columns-3 gap-3 mb-20">
        {images.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Image
              src={src}
              alt="images"
              width={50}
              height={50}
              className="w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      <Card className="absolute bottom-0 left-0  right-0 w-[100%]  mx-auto rounded-t-[300px] rounded-b-none border-none h-[500px] columns-1 flex flex-col items-center">
        <CardHeader className="mt-10 mb-5">
          <CardTitle className="w-full flex justify-center items-center gap-x-2 mb-5">
            <Image src={logo} alt="Vibesnap" width={50} height={50} />
            <p className="text-[40px]">Vibesnap</p>
          </CardTitle>
          <CardDescription className="text-[24px] text-black">
            Moments That Matter, Shared Forever.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <Link
            href="/feed"
            className={cn(
              buttonVariants({
                size: "lg",
                className:
                  "text-lg 2xl:text-lg xl:text-[15px] rounded-[50px] h-14 w-[25%]  bg-black dark:text-white hover:dark:text-black",
              })
            )}
          >
            <Image src={google} alt="google logo" width={30} height={30} />
            Continue with Google
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;

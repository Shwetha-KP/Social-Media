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

      <Card className="absolute bottom-0 left-0  right-0 w-[100%]  mx-auto xl:rounded-t-[300px] sm:rounded-t-[200px] xs:rounded-t-[80px] rounded-b-none border-none xl:h-[500px] lg:h-[400px] sm:h-[300px] xs:h-[250px] columns-1 flex flex-col items-center">
        <CardHeader className="lg:mt-10 sm:mt-5 sm:mb-5 ">
          <CardTitle className="w-full flex justify-center items-center gap-x-2 lg:mb-5 sm:mb-3">
            <Image src={logo} alt="Vibesnap" width={50} height={50} className="xs:w-[30px]"/>
            <p className="sm:text-[40px] xs:text-[24px]">Vibesnap</p>
          </CardTitle>
          <CardDescription className="md:text-[24px] s:text-[14px] text-black">
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
                  "text-lg 2xl:text-lg xl:text-[15px] rounded-[50px] h-14 lg:w-[25%] sm:w-[50%]  bg-black dark:text-white hover:dark:text-black",
              })
            )}
          >
            <Image src={google} alt="google logo" width={30} height={30} />
            <p className="xs:text-sm">Continue with Google</p>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;

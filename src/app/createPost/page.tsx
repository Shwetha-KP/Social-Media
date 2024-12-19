"use client";
import React, { useState, useRef } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { FaFolderOpen } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { RiVideoDownloadFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Image from "next/image";


type Photo = {
  preview: string;
  [key: string]: any; 
};

const CreatePost = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]); 
  const [video, setVideo] = useState<Photo | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleGoBack = () => {
    router.back();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const previewPhotos: Photo[] = files.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setPhotos((prev) => [...prev, ...previewPhotos]);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(Object.assign(file, { preview: URL.createObjectURL(file) }));
    }
  };

  const openCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      setCameraError("Unable to access the camera.");
      setIsCameraOpen(false);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) {
      console.error("Video or canvas element not available.");
      return;
    }

    const context = canvasRef.current.getContext("2d");
    if (!context) {
      console.error("Failed to get canvas context.");
      return;
    }

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;

    try {
      context.drawImage(videoRef.current, 0, 0);
      const imageURL = canvasRef.current.toDataURL("image/png");

      setPhotos((prev) => [...prev, { preview: imageURL }]);
      closeCamera();
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  const handleCreatePost = () => {
    const postData = {
      text,
      photos,
      video,
    };
    console.log("Post Created:", postData);
  };

  return (
    <section className="w-full flex flex-col items-center mt-5">
      <div className="w-[90%] grid item-center">
        <div className="w-full flex items-center gap-x-2 h-20 ">
          <HiArrowSmLeft
            onClick={handleGoBack}
            className="text-[40px] cursor-pointer"
          />
          <p className="sm:text-2xl text-lg font-bold">New Post</p>
        </div>
        <div className="w-full flex flex-col gap-y-3 sm:text-lg text-base">
          <textarea
            placeholder="What’s on your mind?"
            className="border bg-[#D9D9D99C] focus:outline-none focus:border-black w-full h-48 p-4 rounded-xl align-top"
            value={text}
            onChange={handleTextChange}
          ></textarea>

          {text && (
            <p className="mt-2 p-3 bg-gray-100 border rounded-lg">{text}</p>
          )}

          <div className="w-full flex flex-col gap-y-2">
            <label className="w-full flex items-center gap-x-2 lg:flex cursor-pointer xs:hidden sm:hidden">
              <FaFolderOpen className="text-red-600" />
              <span>Choose Files</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
            <label className="w-full flex items-center gap-x-2 lg:hidden cursor-pointer">
              <IoMdPhotos className="text-green-600" />
              <span>Photos</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
            <label className="w-full flex items-center gap-x-2 lg:hidden cursor-pointer">
              <RiVideoDownloadFill className="text-red-600" />
              <span>Video</span>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
            </label>
            <div
              className="w-full flex items-center gap-x-2 cursor-pointer"
              onClick={openCamera}
            >
              <IoCamera className="text-blue-600" />
              <span>Camera</span>
            </div>
          </div>

          {photos.length > 0 && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {photos.map((photo, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={photo.preview}
                    alt={`Preview ${index}`}
                    width={200}
                    height={200}
                    className="w-full aspect-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {video && (
            <div className="mt-3">
              <video
                src={video.preview}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
      <Button
        className="w-[90%] rounded-lg bottom-4 mt-4"
        onClick={handleCreatePost}
      >
        CREATE
      </Button>

      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg relative">
            <video ref={videoRef} className="w-full" />
            <canvas ref={canvasRef} className="hidden" />
            <div className="flex gap-x-4 mt-4 justify-center">
              <Button onClick={capturePhoto}>Capture</Button>
              <Button onClick={closeCamera} variant="outline">
                Close
              </Button>
            </div>
            {cameraError && (
              <p className="text-red-500 text-sm mt-2">{cameraError}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CreatePost;

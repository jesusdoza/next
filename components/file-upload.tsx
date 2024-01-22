"use client";

import React from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return (
    <div>
      <UploadDropzone
        onUploadError={(error: Error) => {
          console.log("error uploading file", error);
        }}
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}></UploadDropzone>
    </div>
  );
};

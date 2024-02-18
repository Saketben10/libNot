"use client";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { unspash } from "@/lib/unsplash";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { defaultImages } from "../../../constants/images";
 

interface FormpickerProps {
  errors?: Record<string, string[] | undefined>;
  id: string;
}

export const Formpicker = ({ id, errors }: FormpickerProps) => {
  const [images, setImage] = useState<Array<Record<string, any>>>(defaultImages);
  const [Loading, setLoading] = useState<Boolean>(true);
  const [selectedImageid, setSlelectedImageid] = useState(null);
  const { pending } = useFormStatus();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        
        const result = await unspash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (!result) {
          return console.log("failed to fetch images");
        }
        if (result.response) {
          const newImage = result.response as Array<Record<string, any>>;
          setImage(newImage);
        }
      } catch (error) {
        console.log(error);
        setImage(defaultImages);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);
  if (Loading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="grid grid-cols-3 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
              pending && "opacity-50 hover:opacity-50 cursor-auto"
            )}
            onClick={() => {
              if (pending) return;
              setSlelectedImageid(image.id);
            }}
          >
            <Image
              alt="unsplsh"
              src={image.urls.thumb}
              fill
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

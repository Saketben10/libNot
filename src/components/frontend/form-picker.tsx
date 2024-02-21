"use client";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Check, Loader2 } from "lucide-react";
import { unspash } from "@/lib/unsplash";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { defaultImages } from "../../../constants/images";
import Link from "next/link";

interface FormpickerProps {
  errors?: Record<string, string[] | undefined>;
  id: string;
}

export const Formpicker = ({ id, errors }: FormpickerProps) => {
  const [images, setImage] =
    useState<Array<Record<string, any>>>(defaultImages);
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
      <div className="grid grid-cols-3 mb-2 mt-4">
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
            <input type="radio"  className="hidden" id={id} name={id}   checked={selectedImageid === image.id} disabled={pending} value={`${image.id}| ${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`} />
            <Image
              alt="unsplsh"
              src={image.urls.thumb}
              fill
              className="object-cover rounded-sm"
            />
            <div className=" mr-5">
              {selectedImageid === image.id && (
                <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
              <Link
                href={image.links.html}
                target="_blank"
                className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50   "
              >
                {image.user.name}
              </Link>
              {/* todo : fix name alignment */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

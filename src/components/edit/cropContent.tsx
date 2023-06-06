import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import useCrop from "../../hooks/useCrop";
import { useParams } from "react-router-dom";

export default function CropContent({ url }: { url: string }) {
  const cropMutation = useCrop();
  const { key } = useParams();
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [crop, setCrop] = useState<Crop>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop</CardTitle>
        <CardDescription>Crop your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ReactCrop
          crop={crop}
          onChange={(crop, percentageCrop) => setCrop(percentageCrop)}
          className=" w-full relative"
        >
          <img ref={imgRef} src={url} className=" w-full relative" />
        </ReactCrop>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            if (
              crop &&
              key &&
              imgRef.current?.naturalHeight &&
              imgRef.current?.naturalWidth
            ) {
              cropMutation.mutate({
                key,
                crop,
                naturalHeight: imgRef.current?.naturalHeight,
                naturalWidth: imgRef.current?.naturalWidth,
              });
            }
          }}
        >
          Crop
        </Button>
      </CardFooter>
    </Card>
  );
}

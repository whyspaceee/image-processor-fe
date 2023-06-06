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
import { format } from "sharp";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function CropContent() {
  const [crop, setCrop] = useState<Crop>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop</CardTitle>
        <CardDescription>Crop your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
          <img src="https://images.unsplash.com/photo-1550321989-65d089904d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
        </ReactCrop>


      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            console.log(crop);
          }}
        >
          Crop
        </Button>
      </CardFooter>
    </Card>
  );
}

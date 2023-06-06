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

const formats = [
  "heif",
  "jpeg",
  "jpg",
  "jp2",
  "jxl",
  "pdf",
  "png",
  "tiff",
  "tif",
  "webp",
];

export default function CompressContent() {
  const [format, setFormat] = useState("jpeg");
  const [sliderValue, setSliderValue] = useState([80]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compress</CardTitle>
        <CardDescription>Compress your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className=" space-y-2">
          <Label htmlFor="slider">Quality: {sliderValue[0]}</Label>
          <Slider
            onValueChange={(value) => setSliderValue(value)}
            id="slider"
            className=""
            min={0}
            max={100}
            defaultValue={sliderValue}
          />
        </div>
        <div className=" space-y-2">
          <Label>Format</Label>
          <Select
            onValueChange={(value) => setFormat(value)}
            defaultValue={format}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a format" />
            </SelectTrigger>
            <SelectContent>
              <ScrollArea className="max-h-[240px] ">
                <SelectGroup>
                  <SelectLabel>Format</SelectLabel>
                  {formats.map((format: string) => (
                    <SelectItem value={format} key={format}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            console.log(format);
          }}
        >
          Compress
        </Button>
      </CardFooter>
    </Card>
  );
}

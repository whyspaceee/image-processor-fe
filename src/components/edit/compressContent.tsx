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
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import useConvert from "../../hooks/useConvert";
import Spinner from "../ui/spinner";
import { useParams } from "react-router-dom";
import useCompress from "../../hooks/useCompress";

const formats = [
  "heif",
  "jpeg",
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
  const {key} = useParams();
  const { mutate, isLoading } = useCompress();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compress</CardTitle>
        <CardDescription>Compress your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className=" space-y-2">
              <Label htmlFor="slider">Quality: {sliderValue[0]}</Label>
              <Slider
                onValueChange={(value) => setSliderValue(value)}
                id="slider"
                className=""
                min={1}
                max={100}
                defaultValue={sliderValue}
              />
            </div>
            <div className=" space-y-2">
              <Label>Format</Label>
              <Select
                onValueChange={(value) => setFormat(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a format (opt.)" />
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
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            if(!key) return;
            mutate({
              key,
              quality: sliderValue[0],
              format,
            });
          }}
        >
          Compress
        </Button>
      </CardFooter>
    </Card>
  );
}

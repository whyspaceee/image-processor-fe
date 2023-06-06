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

export default function ConvertContent() {
  const [format, setFormat] = useState("jpeg");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert</CardTitle>
        <CardDescription>Convert your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Label>Format</Label>
        <Select onValueChange={(value) => setFormat(value)} defaultValue={format}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a format" />
          </SelectTrigger>
          <SelectContent >
            <ScrollArea className="max-h-[240px] ">
              <SelectGroup>
                <SelectLabel>Format</SelectLabel>
                {formats.map((format: string) => (
                  <SelectItem value={format} key={format}>{format}</SelectItem>
                ))}
              </SelectGroup>
            </ScrollArea>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button onClick={
            () => {
                console.log(format)
            }
        }>Convert</Button>
      </CardFooter>
    </Card>
  );
}

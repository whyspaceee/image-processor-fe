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
import useConvert from "../../hooks/useConvert";
import Spinner from "../ui/spinner";
import { useParams } from "react-router-dom";

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
  const { mutate, isLoading } = useConvert();
  const { key } = useParams();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert</CardTitle>
        <CardDescription>Convert your image</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            if (!key) return;
            mutate({ format, key });
          }}
        >
          Convert
        </Button>
      </CardFooter>
    </Card>
  );
}

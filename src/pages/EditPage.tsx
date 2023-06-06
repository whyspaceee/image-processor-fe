import {  useLoaderData, useParams } from "react-router-dom";
import CompressContent from "../components/edit/compressContent";
import ConvertContent from "../components/edit/convertContent";
import CropContent from "../components/edit/cropContent";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useEffect } from "react";

export default function EditPage() {
  const data = useLoaderData() as {url: string};

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className=" flex flex-col min-h-screen px-6 py-16 gap-4 items-center">
      <img
        src={data.url}
        className=" h-64"
      />
      <Tabs defaultValue="crop" className=" min-w-[320px] max-w-2xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="crop">Crop</TabsTrigger>
          <TabsTrigger value="convert">Convert</TabsTrigger>
          <TabsTrigger value="compress">Compress</TabsTrigger>
        </TabsList>
        <TabsContent value="crop">
          <CropContent url={data.url}/>
        </TabsContent>
        <TabsContent value="convert">
            <ConvertContent/>
        </TabsContent>
        <TabsContent value="compress">
            <CompressContent/>
        </TabsContent>
      </Tabs>
    </div>
  );
}

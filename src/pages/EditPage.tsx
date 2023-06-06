import CompressContent from "../components/edit/compressContent";
import ConvertContent from "../components/edit/convertContent";
import CropContent from "../components/edit/cropContent";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function EditPage() {
  return (
    <div className=" flex flex-col min-h-screen px-6 py-16 gap-4 items-center">
      <img
        src="https://images.unsplash.com/photo-1550321989-65d089904d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        className="  h-64"
      />
      <Tabs defaultValue="account" className=" min-w-[400px] max-w-2xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="crop">Crop</TabsTrigger>
          <TabsTrigger value="convert">Convert</TabsTrigger>
          <TabsTrigger value="compress">Compress</TabsTrigger>
        </TabsList>
        <TabsContent value="crop">
          <CropContent/>
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

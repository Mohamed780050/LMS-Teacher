import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Unsplash from "./Unsplash";

function ImageTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Upload</TabsTrigger>
        <TabsTrigger value="password">Unsplash</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full flex justify-center items-center border min-h-60 bg-white">
          <Button variant="ghost">
            <Upload size={30} />
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Unsplash />
      </TabsContent>
    </Tabs>
  );
}
export default ImageTabs;

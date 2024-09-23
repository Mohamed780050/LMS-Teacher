import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Unsplash from "./Unsplash";
import ImageUploader from "./ImageUploader";

function ImageTabs({ setEdit }: { setEdit: (v: boolean) => void }) {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Upload</TabsTrigger>
        <TabsTrigger value="password">Unsplash</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full flex justify-center items-center border min-h-60 bg-white">
          <ImageUploader setEdit={setEdit}/>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Unsplash setEdit={setEdit} />
      </TabsContent>
    </Tabs>
  );
}
export default ImageTabs;

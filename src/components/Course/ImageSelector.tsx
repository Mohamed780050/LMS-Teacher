import ImageTabs from "../ImageTabs";
function ImageSelector() {
  return (
    <div className="boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Image</h2>
      </div>
      <ImageTabs />
    </div>
  );
}
export default ImageSelector;

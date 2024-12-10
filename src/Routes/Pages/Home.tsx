import DataCard from "@/components/Course/DataCard";

function Home() {
  return (
    <div className="p-6">
      <div className="grid grid-col-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard/>
      </div>
    </div>
  );
}
export default Home;
import Charts from "@/components/Charts";
import DataCard from "@/components/Course/DataCard";

function Home() {
  return (
    <div className="p-6">
      <div className="grid grid-col-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Revenue" value={500} shouldFormat />
        <DataCard label="Total sales" value={50} />
      </div>
      <Charts
        data={[
          { name: "python", total: 50 },
          { name: "testing", total: 20 },
          { name: "photos", total: 30 },
          { name: "graphic", total: 25 },
        ]}
      />
    </div>
  );
}
export default Home;

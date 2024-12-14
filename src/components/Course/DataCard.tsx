import { DataCardProps } from "@/interfaces/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function DataCard({ label, value, shouldFormat }: DataCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center justify-between space-y-0 md:flex-row">
        <CardTitle className="text-sm font-medium text-center">
          {label}
        </CardTitle>
        <CardContent className="p-0">
          <div className="text-2xl font-bold text-center">
            {shouldFormat ? `${value}$` : `${value}`}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
export default DataCard;

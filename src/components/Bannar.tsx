import { AlertTriangle, CheckCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "border text-center p-4 text-sm flex items-center w-full",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200/80 border-yellow-30 text-primary",
        success: "bg-emerald-700 border-emerald-800 text-secondary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);
const IconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
};
interface BannarProps extends VariantProps<typeof bannerVariants> {
  lable: string;
}

function Bannar({ lable, variant }: BannarProps) {
  const Icon = IconMap[variant || "warning"];
  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="w-4 h-4 mr-2" />
      {lable}
    </div>
  );
}
export default Bannar;

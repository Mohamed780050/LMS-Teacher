import { Progress } from "@/components/ui/progress";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

export default function PasswordStrengthMeter() {
  const password = useSelector(
    (state: RootState) => state.passwordLength.value
  );
  const calculateStrength = (password: string) => {
    let strength = 0;
    if (password.length > 6) strength += 1;
    if (password.length > 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const strength = calculateStrength(password);
  const percentage = (strength / 5) * 100;

  const getColor = () => {
    if (percentage <= 20) return "bg-red-500";
    if (percentage <= 30) return "bg-orange-500";
    if (percentage <= 40) return "bg-yellow-500";
    if (percentage <= 50) return "bg-lime-500";
    return "bg-sky-600";
  };

  const getLabel = () => {
    if (percentage <= 20) return "Very Weak";
    if (percentage <= 30) return "Weak";
    if (percentage <= 40) return "Medium";
    if (percentage <= 50) return "Strong";
    return "Very Strong";
  };

  return (
    <div className="w-full max-w-80 mx-auto space-y-4 mt-2">
      <div className="space-y-2">
        <Progress
          bgColor={getColor()}
          value={percentage}
          className={`w-full h-2 bg-primary`}
        />
        <p className="text-sm font-medium text-gray-600">
          Password strength:{" "}
          <span className={`font-bold ${getColor().replace("bg-", "text-")}`}>
            {getLabel()}
          </span>
        </p>
      </div>
    </div>
  );
}

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import data from "@/data/data";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import validate from "@/validation/validate";
import z from "zod";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof validate.loginvalidation>>({
    resolver: zodResolver(validate.loginvalidation),
  });
  async function SubmitIt(values: z.infer<typeof validate.loginvalidation>) {
    console.log(values);
  }
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <form
        className="border p-5 space-y-3 min-w-72 sm:min-w-96"
        onSubmit={handleSubmit(SubmitIt)}
      >
        <div className="font-bold text-xl text-sky-800 flex flex-col items-center">
          <Logo />
          Login
        </div>
        {data.LoginInputs.map((input) => (
          <div>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name)}
            />
            {errors[input.name] ? (
              <span className="text-red-700 ml-2 mt-2">
                {errors[input.name]?.message}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
        <div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "loading" : "login"}
          </Button>
        </div>
        <p>
          have no account{" "}
          <Link to="/Authentaction/signup" className="text-sky-800 font-medium">
            Sign Up ?
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;

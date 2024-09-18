import updateCourseInfo from "@/config/UpdateCourseInfo";
import { RootState } from "@/Redux/store";
import validate from "@/validation/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import z from "zod";
import { Button } from "../ui/button";
import { Pencil, X } from "lucide-react";
import { Input } from "../ui/input";

function PriceForm() {
  const { id } = useParams();
  const { price } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<{ newPrice: number }>({
    resolver: zodResolver(validate.PriceUpdate),
  });
  const [edit, setEdit] = useState(false);
  function updateIt(values: z.infer<typeof validate.PriceUpdate>) {
    updateCourseInfo({ id: `${id}`, values: values });
    setEdit(false);
  }
  return (
    <div className="md:mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course price</h2>
        {edit ? (
          <Button
            disabled={isSubmitting}
            variant="ghost"
            className="cursor-default"
          >
            <X
              className="cursor-pointer duration-200 hover:text-red-700"
              onClick={() => setEdit(false)}
            >
              Cancel
            </X>
          </Button>
        ) : (
          <Button variant="ghost" className="cursor-default">
            <Pencil
              className="hover:text-sky-600 cursor-pointer"
              onClick={() => setEdit(true)}
            />
          </Button>
        )}
      </div>
      {edit ? (
        <form className="space-y-2" onSubmit={handleSubmit(updateIt)}>
          <Input
            type="number"
            {...register("newPrice", {
              setValueAs: (v) => (v === "" ? 0 : +v),
            })}
            className="bg-white"
          />
          {errors.newPrice && <p>{errors.newPrice.message}</p>}
          <div className="space-x-2">
            <Button disabled={isSubmitting} type="submit">
              save
            </Button>
            <Button
              disabled={isSubmitting}
              variant="destructive"
              type="button"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <p className={`font-medium ${price ? "text-lg" : "text-sm"}`}>
          {price ? (
            `${price}$`
          ) : (
            <span className="text-slate-500 italic font-normal">No price</span>
          )}
        </p>
      )}
    </div>
  );
}
export default PriceForm;

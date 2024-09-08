import z from "zod";
const loginvalidation = z.object({
  identfire: z
    .string()
    .min(1, { message: "Field is empty" })
    .or(z.string().email().min(1, { message: "Field is empty" })),
  password: z
    .string()
    .min(1, { message: "Field is empty" })
    .min(8, { message: "Paaword can't be less than 8 chars" }),
});
const signupValidation = z
  .object({
    email: z.string().min(1, { message: "Field is empty" }).email(),
    username: z.string().min(1, { message: "Field is empty" }),
    password: z
      .string()
      .min(1, { message: "Field is empty" })
      .min(8, { message: "Paaword can't be less than 8 chars" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Field is empty" })
      .min(8, { message: "Paaword can't be less than 8 chars" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
export default { loginvalidation, signupValidation };

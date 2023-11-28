"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import publicAxiosClient from "@/configs/publicAxiosClient";
import { sessionStatus, setSessionTrue } from "@/utils/session";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

type LoginFromValues = z.infer<typeof formSchema>;

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFromValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFromValues) => {
    try {
      const res = await publicAxiosClient.post("/Account/Login", data);

      localStorage.setItem("accessToken", res.data.acccessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setSessionTrue();
      router.refresh();
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          className="block font-semibold text-gray-700 mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-semibold text-gray-700 mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
      </div>
      <div className="mb-6 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

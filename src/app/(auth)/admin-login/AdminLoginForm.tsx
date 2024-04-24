"use client";

import LinkBehaviour from "@/components/LinkBehaviour";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Link, Box, Alert, AlertTitle, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const schema = z.object({
  username: z.string({
    required_error: "Nhập đầy đủ thông tin.",
  }),
  password: z
    .string({
      required_error: "Nhập đầy đủ thông tin.",
    })
    .min(5, "Mật khẩu tối thiểu 5 ký tự.")
    .max(50),
});

type Schema = z.infer<typeof schema>;

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const searchParams = useSearchParams();

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseEvents = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = async (data: Schema) => {
    const loadingId = toast.loading("Loading ... ");
    try {
      const employeeRes = await signIn("credentials", {
        redirect: false,
        ...data
      });

      if (!employeeRes?.error) {
        router.push("/dashboard");
      } else {
        setError("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.");
      }
    } catch (error) {
      setError("An unexpected error happened");
    }
    toast.dismiss(loadingId);
  };

  return (
    <Box
      className="my-auto"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: "500px", margin: "auto", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "white" }}
    >
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      <FormControl fullWidth variant="outlined" error={!!errors.username}>
        <label className="font-semibold" htmlFor="email">Email</label>
        <OutlinedInput
          size="medium"
          label="Email"
          type="text"
          placeholder="Nhập email"

          {...register("username", {
            setValueAs: v => (v === "" ? undefined : v),
          })}
        />
        <FormHelperText className="my-2 px-2">{errors.username?.message}</FormHelperText>
      </FormControl>


      <FormControl fullWidth variant="outlined" error={!!errors.password} >
        <label className="font-semibold" htmlFor="password">Password</label>
        <OutlinedInput
          size="medium"
          label="Password"
          placeholder="Nhập mật khẩu "

          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            setValueAs: v => (v === "" ? undefined : v),
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseEvents}
                onMouseUp={handleMouseEvents}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText className="my-2 px-2">{errors.password?.message}</FormHelperText>
      </FormControl>

      <Button type="submit" variant="contained" fullWidth className="mt-2 bg-green-800 text-white shadow-lg p-2 hover:opacity-80" >
        Đăng nhập
      </Button>
    </Box>
  );
}
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
	Box,
	Alert,
	AlertTitle,
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
	Button,
	InputLabel,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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

	const handleClickShowPassword = () => {
		setShowPassword(show => !show);
	};

	const handleMouseEvents = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const onSubmit = async (data: Schema) => {
		try {
			toast.promise(
				signIn("credentials", {
					redirect: false,
					username: data.username,
					password: data.password,
				}),
				{
					success(data) {
						router.push("/dashboard");
						return "Đăng nhập thành công.";
					},
					loading: "Đang đăng nhập ...",
					error: "Username or password không chính xác. Vui lòng kiểm tra lại!",
				}
			);
		} catch (error) {
			console.log("An unexpected error happened");
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				maxWidth: "500px",
				margin: "auto",
				padding: "20px",
				borderRadius: "8px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
				backgroundColor: "white",
			}}>
			{error && (
				<Alert
					severity="error"
					className="mb-4">
					<AlertTitle>Error</AlertTitle>
					{error}
				</Alert>
			)}

			<FormControl
				fullWidth
				variant="outlined"
				error={!!errors.username}>
				<InputLabel htmlFor="username">Username</InputLabel>
				<OutlinedInput
					size="medium"
					label="Username"
					type="text"
					placeholder="Nhập username"
					{...register("username", {
						setValueAs: v => (v === "" ? undefined : v),
					})}
				/>
				<FormHelperText className="p-2">
					{errors.username?.message}
				</FormHelperText>
			</FormControl>

			<FormControl
				fullWidth
				variant="outlined"
				error={!!errors.password}>
				<InputLabel htmlFor="password">Password</InputLabel>
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
								edge="end">
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<FormHelperText className="p-2">
					{errors.password?.message}
				</FormHelperText>
			</FormControl>

			<Button
				type="submit"
				variant="contained"
				color="success"
				fullWidth>
				Đăng nhập
			</Button>
		</Box>
	);
}

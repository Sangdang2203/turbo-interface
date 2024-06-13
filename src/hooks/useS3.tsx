import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

const useS3 = () => {
	const [preview, setPreview] = React.useState(null);
	const handleFileUpload = async () => {
		if (preview) {
			// @ts-ignore
			const formData = new FormData();
			formData.append("file", preview);

			try {
				const response = await fetch("/api/aws-s3", {
					method: "POST",
					body: formData,
				});

				if (response.ok) {
					const data = await response.json();
					return data.fileLink;
				} else {
					console.error("Lỗi upload ảnh:", response.statusText);
					return null;
				}
			} catch (error) {
				console.error("Lỗi upload ảnh:", error);
			}
		}
	};

	const ButtonUpload = () => {
		return (
			<Button
				component="label"
				fullWidth
				variant="contained"
				tabIndex={-1}
				startIcon={<CloudUploadIcon />}>
				Tải ảnh đại diện
				<VisuallyHiddenInput
					type="file"
					onChange={e => {
						// @ts-ignore
						setPreview(e.target.files[0] || null);
					}}
				/>
			</Button>
		);
	};
	return { handleFileUpload, ButtonUpload, preview };
};
export default useS3;

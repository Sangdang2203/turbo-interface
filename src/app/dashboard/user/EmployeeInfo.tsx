"use client";


import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import React from "react";

import Image from "next/image";
import { CloseOutlined, Send } from "@mui/icons-material";
import {
	Dialog,
	Tooltip,
	DialogTitle,
	DialogContent,
	Button,
	Avatar,
	InputLabel,
	Typography,
	Box,
	Paper,
} from "@mui/material";
import Loading from "@/components/Loading";
import useS3 from "hooks/useS3";
import { Employee, ApiResponse } from "types/interfaces";

export default function EmployeeInfoPage() {
	const [employee, setEmployee] = React.useState<Employee>();
	const [loading, setLoading] = React.useState(false);
	const [openDialogUpdatedResquest, setOpenDialogUpdatedResquest] =
		React.useState(false);

	const { handleFileUpload, ButtonUpload, preview } = useS3();

	const previewUrl = React.useMemo(() => {
		if (preview) {
			return URL.createObjectURL(preview);
		}
	}, [preview]);

	const { data: session } = useSession();
	// const {
	// 	register: updatedRegister,
	// 	handleSubmit: handleUpdatedSubmit,
	// 	formState: { errors: updatedErrors },
	// 	setValue,
	// 	watch,
	// } = useForm<UpdateInfoRequest>();

	// handle send updated  request
	// async function SendUpdatedRequest(data: UpdateInfoRequest) {
	// 	const loadingId = toast.loading("Loading ...");
	// 	try {
	// 		const response = await fetch(
	// 			`/api/employees/${session?.user.employeeCode}/sendUpdatedRequest`,
	// 			{
	// 				method: "PUT",
	// 				body: JSON.stringify({ ...data, avatar: await handleFileUpload() }),
	// 			}
	// 		);

	// 		const payload = (await response.json()) as ApiResponse;

	// 		if (payload.ok) {
	// 			setOpenDialogUpdatedResquest(false);
	// 			toast.success(payload.message);
	// 		} else {
	// 			toast.error(payload.message);
	// 		}
	// 	} catch (error) {
	// 		console.log("error send updated requset: ", error);
	// 	}

	// 	toast.dismiss(loadingId);
	// }

	// React.useEffect(() => {
	// 	const provinceId = provinces.find(p => p.locationName === province)?.id;

	// 	if (!provinceId) {
	// 		setDistricts([]);
	// 	} else {
	// 		getChildrenLocationsByParentId(provinceId).then(res => {
	// 			if (res.ok) {
	// 				if (res.data.districs) {
	// 					setDistricts(res.data.districs);
	// 				} else {
	// 					setDistricts([]);
	// 				}
	// 			} else {
	// 				setDistricts([]);
	// 			}
	// 		});
	// 	}
	// }, [province, provinces]);

	// React.useEffect(() => {
	// 	const fetchData = () => {
	// 		Promise.all([
	// 			fetch(`/api/employees/${session?.user.employeeCode}`),
	// 			getProvinces(),
	// 			,
	// 		]).then(res => {
	// 			const [empRes, provinceRes] = res;
	// 			empRes.json().then(payload => {
	// 				if (payload.ok) {
	// 					setEmployee(payload.data);
	// 				}
	// 			});

	// 			if (provinceRes.ok) {
	// 				setProvinces(provinceRes.data);
	// 			}

	// 			setLoading(false);
	// 		});
	// 	};

	// 	fetchData();
	// }, [session?.user.employeeCode]);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="">
					<Box className="flex justify-between mx-3 my-4">
						<Box className="flex items-center">
							<Box sx={{ padding: "8px" }}>
								<InputLabel className="p-2">Code:</InputLabel>
								<InputLabel className="p-2">Full name:</InputLabel>
								<InputLabel className="p-2">Gender:</InputLabel>
								<InputLabel className="p-2">Email:</InputLabel>
								<InputLabel className="p-2">Phone:</InputLabel>
								<InputLabel className="p-2">Address:</InputLabel>
								<InputLabel className="p-2">Role:</InputLabel>
							</Box>
							<Box sx={{ padding: "8px" }}>
								<Typography className="p-2"> {employee?.code} </Typography>
								<Typography className="p-2"> {employee?.fullname} </Typography>
								<Typography className="p-2"> {(employee?.gender === true) ? "Nam" : ""} </Typography>
								<Typography className="p-2"> {employee?.email} </Typography>
								<Typography className="p-2"> {employee?.phone} </Typography>
								<Typography className="p-2"> {employee?.address} </Typography>
								<Typography className="p-2"> {employee?.roleName} </Typography>
							</Box>
						</Box>
					</Box>

					{/* <div className="">
						<Button
							className="mx-3"
							variant="contained"
							color="secondary"
							onClick={() => setOpenDialogUpdatedResquest(true)}
						>
							Update Information
						</Button>
					</div> */}
				</div>
			)}
		</>
	);
}

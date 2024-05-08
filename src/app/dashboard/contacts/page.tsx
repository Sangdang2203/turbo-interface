"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import {
	Box,
	IconButton,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
	Chip,
} from "@mui/material";
import { CloseOutlined, Visibility } from "@mui/icons-material";
import { fetchContacts } from "app/methods/method";
import { CustomerMessage } from "types/interfaces";

export default function CategoryManagement() {
	const [loading, setLoading] = React.useState(true);
	const [contact, setContact] = React.useState<CustomerMessage>();
	const [contacts, setContacts] = React.useState<CustomerMessage[]>([]);
	const [openDialog, setOpenDialog] = React.useState(false);

	const { data: session } = useSession();

	// fetch data
	React.useEffect(() => {
		if (session) {
			Promise.all([fetchContacts(session.user.id_token)]).then(data => {
				const [resContact] = data;

				if (resContact.ok) {
					setContacts(resContact.data.reverse());
				}

				setLoading(false);
			});
		}
	}, [session]);

	return (
		<Box>
			{loading ? (
				<Loading />
			) : (
				<Box>
					<Paper
						elevation={6}
						sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								className="flex justify-between items-center p-3"></Grid>
						</Grid>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								className="flex justify-between items-center p-3"></Grid>
						</Grid>
					</Paper>
					{/* display all categories */}
					<Paper
						elevation={6}
						sx={{ my: 3, borderRadius: "10px", boxSizing: "border-box" }}>
						<TableContainer sx={{ width: "100%", overflow: "hidden" }}>
							<Table
								className="mt-3"
								sx={{ minWidth: 650 }}
								size="small">
								<TableHead className="bg-slate-300">
									<TableRow>
										<TableCell>Khách hàng</TableCell>
										<TableCell>Số điện thoại</TableCell>
										<TableCell>Email</TableCell>
										<TableCell>Ghi chú</TableCell>
										<TableCell>Thao tác</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{contacts && contacts.length > 0 ? (
										contacts.map(item => (
											<TableRow
												key={item.id}
												className="hover:bg-slate-100 cursor-pointer"
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}>
												<TableCell> {item.name} </TableCell>
												<TableCell> {item.email} </TableCell>
												<TableCell> {item.phone} </TableCell>
												<TableCell> {item.message} </TableCell>
												<TableCell>
													<Tooltip
														title="See detail"
														placement="right-start">
														<IconButton
															color="inherit"
															onClick={() => {
																setContact(item);
																setOpenDialog(true);
															}}>
															<Visibility fontSize="medium" />
														</IconButton>
													</Tooltip>
												</TableCell>
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell
												colSpan={6}
												align="center">
												No Data
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</Box>
			)}

			{/* Update Category */}
			{contact && (
				<Dialog
					open={openDialog}
					onClose={() => setOpenDialog(false)}
					className="max-w-[500px] mx-auto">
					<Tooltip title="Close">
						<CloseOutlined
							onClick={() => setOpenDialog(false)}
							color="error"
							className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
						/>
					</Tooltip>

					<DialogTitle className="text-center mt-2">
						Thông tin khách hàng
					</DialogTitle>

					<DialogContent>
						<Box>
							<Typography>
								Khách hàng cá nhân | Doanh nghiệp: {contact.name}
							</Typography>
							<Typography>Email: {contact.email}</Typography>
							<Typography>Số điện thoại: {contact.phone}</Typography>
							<Typography>
								{"Dịch vụ đang cần tư vấn:"}
								{contact.services.map(sv => {
									return (
										<Chip
											key={sv}
											label={sv}
											color="secondary"
											size="small"
										/>
									);
								})}
							</Typography>
							<Typography>Ghi chú: {contact.message}</Typography>
						</Box>
					</DialogContent>
				</Dialog>
			)}
		</Box>
	);
}

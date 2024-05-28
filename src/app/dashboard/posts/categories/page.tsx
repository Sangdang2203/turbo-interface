"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import {
	Box,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { fetchCategories } from "app/methods/method";
import { Category } from "types/interfaces";
import AddCategoryForm from "./createForm";

export default function CategoryManagement() {
	const [loading, setLoading] = React.useState(true);
	const [categories, setCategories] = React.useState<Category[]>([]);

	const { data: session } = useSession();

	// fetch data
	React.useEffect(() => {
		if (session) {
			Promise.all([fetchCategories(session.user.id_token)]).then(data => {
				const [resCate] = data;

				if (resCate.ok) {
					setCategories(resCate.data.reverse());
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
								className="flex justify-between items-center p-3">
								<AddCategoryForm />
							</Grid>
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
										<TableCell>#</TableCell>
										<TableCell>Thể loại bài viết</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{categories && categories.length > 0 ? (
										categories.map((cate, index) => (
											<TableRow
												key={cate.id}
												className="hover:bg-slate-100 cursor-pointer"
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}>
												<TableCell className="font-semibold">
													{index + 1}
												</TableCell>
												<TableCell> {cate.name} </TableCell>
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell
												colSpan={6}
												align="center">
												Không tìm thấy dữ liệu
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</Box>
			)}
		</Box>
	);
}

import { Box, CircularProgress } from "@mui/material";
import * as React from "react";

export default function Loading() {
	return (
		<Box sx={{ display: "flex", direction: "revert-layer", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
			<div className="dot-spinner">
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
			</div>
		</Box>
	);
}

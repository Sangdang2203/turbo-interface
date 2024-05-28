"use client";

import * as React from "react";
import { Typography, Box, Rating } from "@mui/material";

function getRandomRating() {
	const randomValue = Math.random() * (5 - 3.5) + 3.5;
	return randomValue.toFixed(2);
}

function getRandomVote() {
	const randomValue = Math.random() * (100 - 5) + 5;
	return randomValue.toFixed(0);
}

export default function CustomRating() {
	const [ratingValue, setRatingValue] = React.useState(0);
	const [voteCount, setVoteCount] = React.useState(0);

	React.useEffect(() => {
		const newRating = Number(getRandomRating());
		const newVoteCount = Number(getRandomVote());

		setRatingValue(newRating);
		setVoteCount(newVoteCount);
	}, []);

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Rating
				name="half-rating-read"
				value={ratingValue}
				precision={0.5}
				readOnly
			/>
			<Typography className="px-2 font-semibold">
				{voteCount} Bình chọn
			</Typography>
		</Box>
	);
}

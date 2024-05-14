import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
	AccountBoxRounded,
	EmailRounded,
	MessageRounded,
	PhoneCallbackRounded,
} from "@mui/icons-material";

const actions = [
	{
		icon: <AccountBoxRounded />,
		name: "Zalo",
		path: "https://zalo.me/0769999967",
	},
	{ icon: <PhoneCallbackRounded />, name: "Hotline", path: "tel:0769999967" },
	{ icon: <EmailRounded />, name: "Email", path: "mailto:info@turbo.vn" },
	{
		icon: <MessageRounded />,
		name: "Messenger",
		path: "https://www.facebook.com/ecocloud.vn",
	},
];

export default function BasicSpeedDial() {
	return (
		<Box
			sx={{
				height: 10,
				transform: "translateZ(0px)",
				flexGrow: 1,
				position: "fixed",
				right: 5,
				bottom: 5,
				zIndex: 99,
			}}>
			<SpeedDial
				ariaLabel="SpeedDial basic example"
				sx={{ position: "absolute", bottom: 8, right: 16 }}
				icon={<SpeedDialIcon color="info" />}>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						href={action.path}></SpeedDialAction>
				))}
			</SpeedDial>
		</Box>
	);
}

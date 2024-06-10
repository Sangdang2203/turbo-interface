"use client";

import { CustomerMessage, Post } from "@/types/interfaces";
import { useSession } from "next-auth/react";
import React from "react";
import {
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
} from "recharts";

import { fetchContacts, fetchPosts } from "../methods/method";
import Loading from "@/components/Loading";
import SettingsIcon from "@mui/icons-material/Settings";

const Dashboard = () => {
	const { data: session } = useSession();
	const [loading, setLoading] = React.useState(false);
	const [contacts, setContacts] = React.useState<CustomerMessage[]>([]);
	const [posts, setPosts] = React.useState<Post[]>([]);

	const countPosts = posts.reduce(
		(counts, post) => {
			// Assuming createdDate is a string
			const dateString = post.createdDate;

			// Parse the string into a Date object (avoid repeated parsing)
			const postDate = new Date(dateString);

			// Check if parsing was successful (avoid potential errors)
			if (postDate instanceof Date && !isNaN(postDate.getTime())) {
				const postMonth = postDate.getMonth();

				// Increment count for the corresponding month (single switch statement)
				switch (postMonth) {
					case 0:
						counts.january++;
						break;
					case 1:
						counts.february++;
						break;
					case 2:
						counts.march++;
						break;
					case 3:
						counts.april++;
						break;
					case 4:
						counts.may++;
						break;
					case 5:
						counts.june++;
						break;
					case 6:
						counts.july++;
						break;
					case 7:
						counts.august++;
						break;
					case 8:
						counts.september++;
						break;
					case 9:
						counts.october++;
						break;
					case 10:
						counts.november++;
						break;
					case 11:
						counts.december++;
						break;
					default:
					// Optional: Handle unexpected month values
				}
			}

			return counts;
		},
		{
			// Initial count object with month properties
			january: 0,
			february: 0,
			march: 0,
			april: 0,
			may: 0,
			june: 0,
			july: 0,
			august: 0,
			september: 0,
			october: 0,
			november: 0,
			december: 0,
		}
	);

	const postsEachMonth = [
		{ month: "Jan", Amount: countPosts.january },
		{ month: "Feb", Amount: countPosts.february },
		{ month: "Mar", Amount: countPosts.march },
		{ month: "Apr", Amount: countPosts.april },
		{ month: "May", Amount: countPosts.may },
		{ month: "Jun", Amount: countPosts.june },
		{ month: "July", Amount: countPosts.july },
		{ month: "Aug", Amount: countPosts.august },
		{ month: "Sep", Amount: countPosts.september },
		{ month: "Oct", Amount: countPosts.october },
		{ month: "Nov", Amount: countPosts.november },
		{ month: "Dec", Amount: countPosts.december },
	];

	const countContacts = contacts.reduce(
		(counts, contact) => {
			// Assuming createdDate is a string
			const dateString = contact.createdDate;

			// Parse the string into a Date object (avoid repeated parsing)
			const contactDate = new Date(dateString);

			// Check if parsing was successful (avoid potential errors)
			if (contactDate instanceof Date && !isNaN(contactDate.getTime())) {
				const contactMonth = contactDate.getMonth();

				// Increment count for the corresponding month (single switch statement)
				switch (contactMonth) {
					case 0:
						counts.Jan++;
						break;
					case 1:
						counts.Feb++;
						break;
					case 2:
						counts.Mar++;
						break;
					case 3:
						counts.Apr++;
						break;
					case 4:
						counts.May++;
						break;
					case 5:
						counts.Jun++;
						break;
					case 6:
						counts.Jul++;
						break;
					case 7:
						counts.Aug++;
						break;
					case 8:
						counts.Sep++;
						break;
					case 9:
						counts.Oct++;
						break;
					case 10:
						counts.Nov++;
						break;
					case 11:
						counts.Dec++;
						break;
					default:
					// Optional: Handle unexpected month values
				}
			}

			return counts;
		},
		{
			// Initial count object with month properties
			Jan: 0,
			Feb: 0,
			Mar: 0,
			Apr: 0,
			May: 0,
			Jun: 0,
			Jul: 0,
			Aug: 0,
			Sep: 0,
			Oct: 0,
			Nov: 0,
			Dec: 0,
		}
	);

	const contactsEachMonth = [
		{ month: "Jan", Customer: countContacts.Jan },
		{ month: "Feb", Customer: countContacts.Feb },
		{ month: "Mar", Customer: countContacts.Mar },
		{ month: "Apr", Customer: countContacts.Apr },
		{ month: "May", Customer: countContacts.May },
		{ month: "Jun", Customer: countContacts.Jun },
		{ month: "July", Customer: countContacts.Jul },
		{ month: "Aug", Customer: countContacts.Aug },
		{ month: "Sep", Customer: countContacts.Sep },
		{ month: "Oct", Customer: countContacts.Oct },
		{ month: "Nov", Customer: countContacts.Nov },
		{ month: "Dec", Customer: countContacts.Dec },
	];

	// FETCH DATA
	React.useEffect(() => {
		if (session) {
			Promise.all([fetchContacts(), fetchPosts()]).then(data => {
				const [resContact, resPosts] = data;

				if (resContact.ok) {
					setContacts(resContact.data);
				}

				if (resPosts.ok) {
					setPosts(resPosts.data);
				}
				setLoading(false);
			});
		}
	}, [session]);

	return (
		<React.Fragment>
			{loading ? (
				<Loading />
			) : (
				<>
					{/* Linechart show the number of customers who registered contact */}
					<div className="my-10">
						<div className=" post_card max-h-[500px] shadow-sm my-3">
							<div className=" flex justify-between px-4">
								<div>
									<p className="text-[2rem] font-semibold">{contacts.length}</p>
									<p className="-mt-8">Khách hàng phát sinh</p>
								</div>
								<div className="pt-4">
									<SettingsIcon />
								</div>
							</div>
							<ResponsiveContainer
								width="100%"
								height={300}
								className="mt-5">
								<LineChart data={contactsEachMonth}>
									<XAxis dataKey="month" />
									<YAxis />
									<Line
										dataKey="Customer"
										fill="#8884d8"
										strokeWidth={2}
										className="cursor-pointer"
									/>
									<Tooltip />
								</LineChart>
							</ResponsiveContainer>
						</div>

						{/* Barchart show the amount of posts. */}
						<div className="post_card max-h-[500px] shadow-sm my-3">
							<div className=" flex justify-between px-4">
								<div>
									<p className="text-[2rem] font-semibold">{posts.length}</p>
									<p className="-mt-8">Số lượng bài viết</p>
								</div>
								<div className="pt-4">
									<SettingsIcon />
								</div>
							</div>
							<ResponsiveContainer
								width="100%"
								height={300}
								className="mt-5">
								<LineChart
									data={postsEachMonth}
									barSize={30}
									barGap={10}>
									<XAxis dataKey="month" />
									<YAxis />
									<Line
										dataKey="Amount"
										fill="#006769"
										strokeWidth={2}
										className="cursor-pointer"
									/>
									<Tooltip />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				</>
			)}
		</React.Fragment>
	);
};

export default Dashboard;

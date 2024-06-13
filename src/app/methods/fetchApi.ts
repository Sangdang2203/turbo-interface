export const fetchPosts = async () => {
	const response = await fetch((environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/posts", {
		method: "GET",
		cache: "no-cache",
	});

	if (response.ok) {
		return response.json();
	}

	return [];
};

export const fetchPost = async (postId: string) => {
	const response = await fetch(
		(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/posts/" + postId,
		{
			method: "GET",
			cache: "no-cache",
		}
	);

	if (response.ok) {
		return response.json();
	}

	return null;
};

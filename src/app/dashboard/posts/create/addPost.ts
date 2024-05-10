import { Session } from "next-auth";
import { toast } from "sonner";
import { ApiResponse, CreatePostRequest, POSTSCHEMA } from "types/interfaces";

export default function AddNewPost(session: Session | null) {
	return async (data: POSTSCHEMA) => {
		if (session) {
			const message = toast.loading("Đang tạo bài viết mới");

			const post: CreatePostRequest = {
				title: data.title,
				categories: data.categories.map(item => ({ id: item })),
				user: {
					id: data.userId,
				},
				urlImage: data.urlImage,
				description: data.description,
				content: data.content,
				status: "ACTIVE",
			};

			console.log(post.urlImage);

			try {
				const res = await fetch("/api/posts", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(post),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
			} catch (error) {
				toast.error("Loi");
				console.log(error);
			}
			toast.dismiss(message);
		}
	};
}

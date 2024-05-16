import useS3 from "@/hooks/useS3";
import { Session } from "next-auth";
import { toast } from "sonner";
import { ApiResponse, CreatePostRequest, POSTSCHEMA } from "types/interfaces";

export default function AddNewPost(session: Session | null) {
	const { handleFileUpload, ButtonUpload, preview } = useS3();
	return async (data: POSTSCHEMA) => {
		if (session) {
			const message = toast.loading("Đang tạo bài viết mới");

			const urlImage = await handleFileUpload();

			// Xử lý lỗi nếu urlImage null
			if (!urlImage) {
				return;
			}

			const post: CreatePostRequest = {
				title: data.title,
				categories: data.categories.map(item => ({ id: item })),
				user: {
					id: data.userId,
				},
				description: data.description,
				content: data.content,
				status: "ACTIVE",
			};

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
				toast.error("Error: Lỗi khi tạo bài viết mới.");
				console.log(error);
			}
			toast.dismiss(message);
		}
	};
}

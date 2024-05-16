import disasterRecoveryMap from "@/app/images/disasterRecovery/disasterDecovery_01.png";
import disasterRecoverySolution from "@/app/images/CloudBackupRecovery.png";
import remoteBackupServices from "@/app/images/disasterRecovery/remoteBackupServices.webp";
import disasterRecovery_02 from "@/app/images/disasterRecovery/disasterDecovery_02.png";
import disasterRecovery_03 from "@/app/images/disasterRecovery/disasterDecovery_03.png";
import disasterRecovery_04 from "@/app/images/disasterRecovery/disasterDecovery_04.png";
import Hyper_V from "@/app/images/disasterRecovery/icon_01.webp";
import Vmware from "@/app/images/disasterRecovery/icon_02.webp";
import SapHana from "@/app/images/disasterRecovery/icon_03.webp";
import ActiveDirectory from "@/app/images/disasterRecovery/icon_05.webp";
import SQLServer from "@/app/images/disasterRecovery/icon_06.webp";
import Oracle from "@/app/images/disasterRecovery/icon_07.webp";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ContactPopup from "@/components/ContactPopup";

export default function DisasterRecovery() {
	return (
		<Container>
			<Grid
				container
				className="pb-5 rounded-2xl py-20">
				<Grid
					item
					xs={12}
					md={6}
					className="flex flex-col items-center justify-center">
					<Image
						src={disasterRecoveryMap}
						className="w-full h-auto"
						alt="disasterRecoveryMap"
					/>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					className=" text-sky-900">
					<Box pl={2}>
						<Typography className="text-[2rem] font-semibold">
							Giải pháp Disaster Recovery, dự phòng và phục hồi thảm họa của
							EcoCloud.
						</Typography>
						<Typography className="w-3/4 text-justify py-10">
							EcoCloud DRaaS là giải pháp sao lưu dự phòng và phục hồi thảm họa
							(Disaster Recovery), chuyển đổi một phần hoặc toàn bộ hệ thống máy
							chủ lên hạ tầng điện toán đám mây.
						</Typography>
						<Box my={3}>
							<ContactPopup />
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Box className="flex justify-between items-center py-10">
				<Image
					src={Hyper_V}
					alt="Hyper_V"
					className="hidden lg:block"
				/>
				<Image
					src={Vmware}
					alt="Vmware"
					className="hidden lg:block"
				/>
				<Image
					src={SapHana}
					alt="SapHana"
					className="hidden lg:block"
				/>
				<Image
					src={ActiveDirectory}
					alt="ActiveDirectory"
					className="hidden lg:block"
				/>
				<Image
					src={SQLServer}
					alt="SQLServer"
					className="hidden lg:block"
				/>
				<Image
					src={Oracle}
					alt="Oracle"
					className="hidden lg:block"
				/>
			</Box>

			<Box
				textAlign="center"
				pb={10}>
				<Typography className="text-[2.5rem] font-semibold text-sky-900">
					4 bước xác lập kế hoạch dự phòng phục hồi thảm họa
				</Typography>
			</Box>

			<Grid
				container
				className="pb-5 rounded-2xl my-10">
				<Grid
					item
					xs={12}
					md={6}
					className="flex flex-col items-center justify-center">
					<Image
						src={disasterRecoverySolution}
						className="w-full h-auto"
						alt="remoteBackupServices"
					/>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					className=" text-sky-900">
					<Grid pl={8}>
						<Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
							<Typography className="text-[3rem] font-semibold">1.</Typography>
							<Box>
								<Typography className="w-3/4 text-justify pl-3">
									Xác định các yêu cầu mục tiêu để dự phòng và khôi phục (RTO và
									RPO).
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
							<Typography className="text-[3rem] font-semibold">2.</Typography>
							<Box>
								<Typography className="w-3/4 text-justify pl-3">
									Thiếp lập các định nghĩa và thủ tục cùng với các hành động ứng
									phó đối với sự cố.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
							<Typography className="text-[3rem] font-semibold">3.</Typography>
							<Box>
								<Typography className="w-3/4 text-justify pl-3">
									Thực hiện giả lập sự cố và kiểm tra, xác thực tính đáp ứng ở
									hạ tầng phụ.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
							<Typography className="text-[3rem] font-semibold">4.</Typography>
							<Box>
								<Typography className="w-3/4 text-justify pl-3">
									Thực hiện khôi phục và xác nhận dự phòng cho hạ tầng chính.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>

			<Box
				textAlign="center"
				py={10}>
				<Typography className="text-[2.5rem] font-semibold text-sky-900">
					Giải pháp Disaster Recovery <br /> dự phòng và khôi phục trên Cloud
				</Typography>
				<Typography>
					Dễ dàng sao lưu và đồng bộ máy chủ vật lý và máy ảo (VMware | Hyper-V)
					mà không cần xây dựng và duy trì hạ tầng phụ phức tạp.
				</Typography>
			</Box>

			<Grid
				container
				className="pb-5 rounded-2xl my-10">
				<Grid
					item
					xs={12}
					md={6}
					className=" text-sky-900">
					<Grid pl={8}>
						<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
							<Box>
								<Typography className="text-[1.3rem] font-semibold pt-5">
									Sao lưu với hạ tầng phụ trên Cloud
								</Typography>
								<Typography className="w-3/4 text-justify">
									Sao lưu các máy chủ vật lý và máy chủ ảo vào kho lưu trữ đám
									mây của EcoCloud thông qua kết nối bảo mật mà không cần đầu tư
									thêm bản quyền phần mềm Veeam.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
							<Box>
								<Typography className="text-[1.3rem] font-semibold">
									Mã hóa dữ liệu đầu cuối
								</Typography>
								<Typography className="w-3/4 text-justify">
									Dễ dàng mã hóa dữ liệu tại nguồn (trước khi chuyển khỏi hạ
									tầng của doanh nghiệp); Mã hóa dữ liệu trong quá trình sao lưu
									chuyển tiếp, song hành cùng với tác vụ nén và tính năng tăng
									tốc mạng WAN giúp dữ liệu an toàn tại đích.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					className="flex flex-col items-center justify-center">
					<Image
						src={disasterRecovery_02}
						className="w-[80%] h-auto"
						alt="disasterRecovery_02"
					/>
				</Grid>
			</Grid>

			<Grid
				container
				className="pb-5 rounded-2xl my-10">
				<Grid
					item
					xs={12}
					md={6}
					className="flex flex-col items-center justify-center">
					<Image
						src={remoteBackupServices}
						className="w-[60%] h-auto"
						alt="remoteBackupServices"
					/>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					className=" text-sky-900">
					<Grid pl={8}>
						<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
							<Box>
								<Typography className="text-[1.3rem] font-semibold pt-5">
									Khôi phục nhanh chóng và linh hoạt
								</Typography>
								<Typography className="w-3/4 text-justify">
									Dễ dàng khôi phục toàn bộ hoặc một phần hệ thống CNTT đến
									Disaster Recovery Site trên nền tảng điện toán đám mây
									(EcoCloud IaaS hoặc Azure) chỉ với một vài click thông qua
									trình duyệt bảo mật.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
							<Box>
								<Typography className="text-[1.3rem] font-semibold">
									Quản lý lưu trữ một cách minh bạch
								</Typography>
								<Typography className="w-3/4 text-justify">
									Truy cập, quản lý và khôi phục dữ liệu trong kho lưu trữ được
									thực hiện trực tiếp từ bảng điều khiển; theo dõi mức sử dụng
									dung lượng lưu trữ đám mây và nhận các thông báo về việc gia
									hạn dịch vụ.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>

			<Box className="container grid sm:grid-cols-2 gap-x-28 gap-y-6 pb-10">
				<Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
					<Box className="flex flex-col justify-center items-center p-3">
						<Typography className="text-[1.5rem] font-bold">
							Disaster Recovery với EcoCloud
						</Typography>
						<Image
							src={disasterRecovery_03}
							className="w-52 h-auto my-5"
							alt="Disaster Recovery với EcoCloud"
						/>
						<Typography className="text-center w-3/4 px-3">
							Giảm chi phí triển khai, duy trì Disaster Recovery Site với Trung
							Tâm Dữ Liệu Ảo của EcoCloud. Chỉ chi trả cho tài nguyên tối thiểu
							để khôi phục các ứng dụng.
						</Typography>
					</Box>
				</Card>

				<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
					<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
						<Typography className="text-[1.5rem] font-bold">
							Disaster Recovery với Cloud Azure
						</Typography>

						<Image
							src={disasterRecovery_04}
							className="w-52 h-auto my-5"
							alt="Disaster Recovery với Cloud Azure"
						/>
						<Typography className="text-center w-3/4 px-3">
							Chức năng khôi phục trực tiếp đến Disaster Recovery Site trên nền
							tảng đám mây Microsoft Azure mà không cần kết nối VPN hay MPLS
							phức tạp.
						</Typography>
					</Box>
				</Card>
			</Box>
		</Container>
	);
}

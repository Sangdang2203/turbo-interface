export const homeServices = [
	{
		id: 1,
		title: "Cloud Server",
		sub: "Hạ tầng điện toán đám mây",
		desc: "Với công nghệ siêu hội tụ (HCI) và phần mềm định hướng (SDX) mang lại hạ tầng đám mây siêu hiệu năng, siêu ổn định, là nền tảng vững chắc cho phát triển các ứng dụng.",
	},
	{
		id: 2,
		title: "Smart Cloud Camera",
		sub: "Giải pháp Cloud Camera tích hợp A.I",
		desc: "Nền tảng Cloud quản lý và lưu trữ Video Camera, tích hợp trí thông tin nhân tạo (AI) dùng nhận dạng vật thể, nhận dạng khuôn mặt, nhận dạng biển số, kiểm soát an ninh, giao thông…",
	},
	{
		id: 3,
		title: "Cloud Backup & Recovery",
		sub: "Sao lưu an toàn dữ liệu trên đám mây",
		desc: "Nền tảng sao lưu, quản lý, khôi phục dữ liệu đám mây hàng đầu cho máy chủ vật lý và máy chủ ảo (Hyper-V | VMWare); giúp nhà quản lý an tâm, thúc đẩy phát triển doanh nghiệp.",
	},
	{
		id: 4,
		title: "Unified Cloud Storage",
		sub: "Lưu trữ dữ liệu đám mây",
		desc: "Nền tảng lưu trữ đám mây hợp nhất (file-based, block và object storage), mở rộng không giới hạn. Kết nối đơn giản và nhanh chóng, dễ dàng chia sẻ với băng thông cao.",
	},
];

export const cloudGPUPrices = [
	{
		title: "GÓI GPU 01",
		price: "5.300.000 VND",
		cpu: "8 vCPU",
		ram: "16 GB RAM",
		ssd: "240 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
		rtx: "1 Dedicated RTX 2080Ti",
	},
	{
		title: "GÓI GPU 02",
		price: "7.600.000 VND",
		cpu: "12 vCPU",
		ram: "32 GB RAM",
		ssd: "480 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
		rtx: "1 Dedicated RTX 2080Ti",
	},
	{
		title: "GÓI GPU 03",
		price: "9.800.000 VND",
		cpu: "16 vCPU",
		ram: "64 GB RAM",
		ssd: "480 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
		rtx: "1 Dedicated RTX 2080Ti",
	},
];

export const bonusPrices = [
	{
		title: "vCPU",
		price: "80.000 VND x 1 tháng",
		bonus: "Thêm 1 vCPU",
	},
	{
		title: "RAM",
		price: "80.000 VND x 1 tháng",
		bonus: "Thêm 1 GB RAM",
	},
	{
		title: "SSD Storage",
		price: "60.000 VND x 1 tháng",
		bonus: "Thêm 10 GB SSD Storage",
	},
	{
		title: "Attached Storage",
		price: "150.000 VND x 1 tháng",
		bonus: "Thêm 100 GB Attached Storage",
	},
	{
		title: "Địa chỉ IPv4",
		price: "100.000 VND x 1 tháng",
		bonus: "Thêm 1 địa chỉ IPv4 public",
	},
	{
		title: "Network (trong nước)",
		price: "1.100.000 VND x 1 tháng",
		bonus: "Thêm 100 Mbps Network",
	},
];

export const cloudGPUQuestions = [
	{
		id: 1,
		question: "Tôi muốn dùng thử dịch vụ Cloud GPU Server?",
		answer:
			"EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất. Hãy liên hệ với chúng tôi qua hotline 076 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ.",
	},
	{
		id: 2,
		question: "Khác biệt giữa GPU GTX 1080TI và RTX 2080TI là gì?",
		answer:
			"Ngoài khác biệt về cấu trúc GPU cũng như giá thành, dòng GPU 2080TI đạt hiệu năng cao hơn hẳn so với 1080TI trong xử lý các Deep Learning và Machine Learning.",
	},
	{
		id: 3,
		question: "Cloud GPU Server có thể sử dụng cho những framework nào?",
		answer:
			"Khi khởi tạo Cloud GPU Server, bạn có thể cài đặt thêm các framework TensorFlow, MXNET, Pytorch, Caffe2… theo nhu cầu xử lý thuật toán. Bạn cũng có thể cài đặt thêm FFMpeg để xử lý luồng stream từ Camera, Mobile…",
	},
	{
		id: 4,
		question: "Tôi có thể cài đặt HĐH riêng cho Cloud GPU Server?",
		answer:
			"EcoCloud hiện cung cấp hai HĐH cho Cloud GPU Server là Windows và Ubuntu. Nếu có gặp khó khăn trong quá trình cài đặt thư viện, hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.",
	},
	{
		id: 5,
		question: "Cloud GPU Server của EcoCloud có hỗ trợ Windows Server?",
		answer:
			"Trong các phiên bản Windows Cloud GPU, hiện EcoCloud có cung cấp GPU hoạt động trên Windows Server các phiên bản 2012, 2016, 2019 và cả Windows 10.",
	},
	{
		id: 6,
		question: "Cloud GPU Server có thể dùng trong những trường hợp nào?",
		answer:
			"Có rất nhiều trường hợp để sử dụng Cloud GPU Server. Bạn có thể sử dụng cho Machine Learning và AI, bạn cũng có thể sử dụng cho mục đích xử lý hình ảnh, video và thị giác máy tính. Hoặc dùng cho Big Data với Hadoop, Apache Spark…",
	},
];

export const cloudServerPrices = [
	{
		id: 1,
		title: "GÓI GPU 01",
		price: "260.000 VND",
		cpu: "2 vCPU",
		ram: "1 GB RAM",
		ssd: "20 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
	},
	{
		id: 2,
		title: "GÓI GPU 02",
		price: "470.000 VND",
		cpu: "3 vCPU",
		ram: "2 GB RAM",
		ssd: "40 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
	},
	{
		id: 3,
		title: "GÓI GPU 03",
		price: "780.000 VND",
		cpu: "4 vCPU",
		ram: "3 GB RAM",
		ssd: "60 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
	},
	{
		id: 4,
		title: "GÓI GPU 04",
		price: "1.090.000 VND",
		cpu: "5 vCPU",
		ram: "4 GB RAM",
		ssd: "80 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
	},
	{
		id: 5,
		title: "GÓI GPU 05",
		price: "1.350.000 VND",
		cpu: "6 vCPU",
		ram: "5 GB RAM",
		ssd: "100 GB SSD",
		ipv4: "1 IPv4",
		network: "200 Mbps Network",
	},
];

export const cloudServerQuestions = [
	{
		id: 1,
		question: "Tôi muốn dùng thử Cloud Server trước khi sử dụng chính thức ?",
		answer:
			"EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất. Hãy liên hệ với chúng tôi qua hotline +84 76 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ khởi tạo tài khoản.",
	},
	{
		id: 2,
		question: "Khác biệt giữa VPS với Cloud Server là gì ?",
		answer:
			"Nói đơn giản, cả hai đều là máy chủ ảo hóa. Với Cloud Server là máy chủ ảo nằm trong cụm hệ thống được cấu thành từ nhiều máy chủ và storage, network mở rộng không giới hạn; so với VPS là những máy chủ đơn lẻ hạn chế tài nguyên.",
	},
	{
		id: 3,
		question: "Có hỗ trợ migrate sang dịch vụ của EcoCloud ?",
		answer:
			"Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ Cloud Server của EcoCloud. Chúng tôi có thể giúp quý khách hàng chuyển đổi từ Dedicated Server sang Cloud Server; chuyển từ ảo hóa VMWare hoặc Hyper-V dễ dàng và không gây downtime.",
	},
	{
		id: 4,
		question: "Tôi có thể tự cài đặt HĐH riêng cho Cloud Server của tôi ?",
		answer:
			"Khách hàng hoàn toàn có thể cài đặt HĐH riêng nếu nó không nằm trong hàng trăm templates trên giao diện quản lý. Nếu có gặp khó khăn trong quá trình cài đặt, hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.",
	},
	{
		id: 5,
		question: "Cloud Server của EcoCloud có hỗ trợ Windows Server ?",
		answer:
			"EcoCloud có hàng trăm templates hệ điều hành được chuẩn bị sẵn, và trong đó có nhiều mẫu Windows Server như Win Server 2012, 2016, 2019 với nhiều phiên bản từ Standard đến DataCenter, giúp quý khách nhanh chóng triển khai.",
	},
	{
		id: 6,
		question: "Nhà cung cấp cũ không hợp tác chuyển đổi máy chủ ?",
		answer:
			"Chúng tôi rất lấy làm tiếc vì sự không hợp tác từ nhà cung cấp cũ. Chúng tôi có những công nghệ khác biệt, giúp khách hàng chuyển đổi hệ thống mà không cần thao tác từ tầng vật lý. Hãy liên hệ với chúng tôi để được tư vấn hỗ trợ.",
	},
];

export const cloudBackupPackage = [
	{
		id: 1,
		title: "Starter tiết kiệm 20%",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "300 GB dung lượng lưu trữ cloud",
		server: "01 máy chủ ảo được sao lưu",
		limit: "Không giới hạn bản sao lưu",
	},
	{
		id: 2,
		title: "Pro tiết kiệm 35%",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "600 GB dung lượng lưu trữ cloud",
		server: "03 máy chủ ảo được sao lưu",
		limit: "Không giới hạn bản sao lưu",
	},
	{
		id: 3,
		title: "Enterise tiết kiệm 45%",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "1500 GB dung lượng lưu trữ cloud",
		server: "06 máy chủ ảo được sao lưu",
		limit: "Không giới hạn bản sao lưu",
	},
];

export const cloudBackupPrices = [
	{
		id: 1,
		title: "BUSINESS STARTER",
		price: "500.000 VND",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "300 GB dung lượng lưu trữ Cloud",
		server: "1 máy chủ ảo được sao lưu",
		limit: "Không giới hạn số bản sao lưu",
	},
	{
		id: 2,
		title: "BUSINESS STANDARD",
		price: "980.000 VND",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "300 GB dung lượng lưu trữ Cloud",
		server: "1 máy chủ ảo được sao lưu",
		limit: "Không giới hạn số bản sao lưu",
	},
	{
		id: 3,
		title: "BUSINESS PLUS",
		price: "2.015.000 VND",
		hyperv: "Hỗ trợ ảo hóa VMware/Hyper-V",
		ram: "300 GB dung lượng lưu trữ Cloud",
		server: "1 máy chủ ảo được sao lưu",
		limit: "Không giới hạn số bản sao lưu",
	},
];

export const cloudBackupBonus = [
	{
		id: 1,
		title: "Bản quyền máy chủ vật lý",
		price: "15 USD x 1 tháng",
		bonus: "Tặng 100 GB dung lượng sao lưu",
	},
	{
		id: 2,
		title: "Bản quyền cho máy chủ ảo",
		price: "12 USD x 1 tháng",
		bonus: "Tặng 100 GB dung lượng sao lưu ",
	},
	{
		id: 3,
		title: "Bản quyền PC/Laptop/Workstation",
		price: "6 USD x 1 tháng",
		bonus: "Tặng 100 GB dung lượng sao lưu ",
	},
	{
		id: 4,
		title: "WAN Acceleration - Unlimited VM's",
		price: "70 USD x 1 tháng",
		bonus: "Thêm 100 GB Attached Storage",
	},
];

export const cloudBackupQuestions = [
	{
		id: 1,
		question: "Tôi có thể hủy bất cứ lúc nào không ?",
		answer:
			"Bạn có thể hủy dịch vụ Cloud Backup bất cứ lúc nào. Không có câu hỏi nào được hỏi khi bạn hủy nhưng chúng tôi sẽ đánh giá cao nếu bạn cung cấp cho chúng tôi một số phản hồi.",
	},
	{
		id: 2,
		question: "Gói dịch vụ dùng thử ?",
		answer:
			"Chắc chắn có. Hãy dùng thử dịch vụ Cloud Backup miễn phí 30 ngày để trải nghiệm hiệu quả và sự đơn giản ngay từ đầu. Trong vòng vài phút sau khi đăng ký, bạn sẽ có thể sử dụng dịch vụ của mình.",
	},
	{
		id: 3,
		question: "Có tính phí truyền dữ liệu hàng tháng không ?",
		answer:
			"Bạn sẽ không phải chịu bất kỳ khoản phí truyền dữ liệu nào đến hệ thống sao lưu lưu trữ đám mây của chúng tôi. Bạn có thể sao lưu và khôi phục bao nhiêu phiên bản tùy ý.",
	},
	{
		id: 4,
		question: "Cách tính chi phí sao lưu như thế nào ?",
		answer:
			"Bạn chỉ phải trả một khoản phí thấp cho mỗi máy chủ cần sao lưu và dung lượng lưu trữ, không có thêm gì khác. Chiết khấu cao khi bạn cam kết sử dụng lâu dài.",
	},
];

export const cloudflarePackage = [
	{
		id: 1,
		title: "CDN",
		desc: "Phân phối nội dung tĩnh và động cực nhanh qua mạng toàn cầu, giảm chi phí băng thông, bảo vệ DDoS không giới hạn.",
	},
	{
		id: 2,
		title: "WAF",
		desc: "Bảo vệ, hiển thị và kiểm soát thông minh ở mọi quy mô hoặc kỹ thuật phức tạp, giữ tài sản Internet an toàn và nhanh chóng.",
	},
	{
		id: 3,
		title: "IPFS",
		desc: "Người dùng dễ dàng truy cập và phân phối nội dung IPFS thông qua các miền tùy chỉnh tại hơn 100 quốc gia, tính bảo mật cao.",
	},
	{
		id: 4,
		title: "Ethereum Gateway",
		desc: "Người dùng dễ dàng truy cập Ethereum qua HTTP tên miền cá nhân, không cần triển khai và giám sát E để thực hiện Dapps với Ethereum.",
	},
];

export const cloudflarePerformance = [
	{
		id: 1,
		title: "WAF",
		desc: "Tường lửa cho tầng ứng dụng, kiểm tra dựa vào header của request. Bao gồm các bộ lệnh OWASP top 10 luôn được cập nhật tự động và các bộ lệnh cho phép khách hàng customize.",
	},
	{
		id: 2,
		title: "Chống DDoS",
		desc: "Sử dụng công nghệ AI và máy học để phát hiện DDoS ở tầng ứng dụng và tự động giảm thiểu. Unlimited lượng giảm thiểu DDoS.",
	},
	{
		id: 3,
		title: "CDN",
		desc: "CDN giúp doanh nghiệp lưu trữ thông tin tĩnh trên máy chủ của nhà cung cấp CDN. Giúp tăng tốc độ tải trang và giúp chịu tải khi có nhiều người dùng truy cập vào web/ứng dụng trong cùng 1 thời điểm.",
	},
	{
		id: 4,
		title: "Giấu địa chỉ IP",
		desc: "Khi kiểm tra domain sẽ chỉ ra địa chỉ IP của vendor cung cấp giải pháp reverse proxy mà sẽ không ra địa chỉ IP chính của khách hàng.",
	},
	{ id: 5, title: "Bảo vệ DNS", desc: "Bảo vệ chống tấn công DNS, phising." },
	{ id: 6, title: "SSL", desc: "SSL giúp mã hóa thông tin." },
	{
		id: 7,
		title: "Bảo vệ chống tấn công API",
		desc: "Chống tấn công API vào các đầu end point.",
	},
	{
		id: 8,
		title: "PCI DSS 3.2",
		desc: "Chứng chỉ bảo mật chứng minh mức độ tuân thủ bảo mật của doanh nghiệp.",
	},
];

export const cloudflareWAF = [
	{
		id: 1,
		title: "Quy tắc tùy chỉnh",
		desc: "Tạo quy tắc tùy chỉnh của riêng bạn để bảo vệ trang web và các API khỏi lưu lượng truy cập độc hại",
	},
	{
		id: 2,
		title: "Kiểm tra thông tin đăng nhập bị lộ",
		desc: "Giám sát và chặn việc sử dụng thông tin đăng nhập bị đánh cắp / thông tin bị lộ để tiếp quản tài khoản.",
	},
	{
		id: 3,
		title: "Bộ quy tắc được quản lý WAF",
		desc: "Các bộ quy tắc được cập nhật thường xuyên, cung cấp các biện pháp bảo vệ lỗ hổng zero-day nâng cao.",
	},
	{
		id: 4,
		title: "Quy tắc giới hạn tốc độ",
		desc: "Xác định giới hạn tốc độ cho các yêu cầu đến khớp với một biểu thức và hành động cần thực hiện khi đạt đến các giới hạn tốc độ đó.",
	},
	{
		id: 5,
		title: "Phân tích tường lửa",
		desc: "Xác định và điều tra các mối đe dọa bảo mật bằng giao diện trực quan. Điều chỉnh cấu hình bảo mật của bạn dựa trên nhật ký hoạt động.",
	},
];

export const cloudflareQuestions = [
	{
		id: 1,
		question: "Tốc độ",
		answer:
			"Nếu máy chủ gần với người sử dụng, người truy cập website sẽ truy cập chậm hơn so với những người ở xa máy chủ. Lý do là bởi Cloudflare sẽ giúp tăng tốc độ tải trang. Do đó, nếu người dùng cho website của bạn là người dùng nước ngoài, nên sử dụng dịch vụ DNS này.",
	},
	{
		id: 2,
		question: "Rocket Loader",
		answer:
			"Đây là dịch vụ DNS ưu tiên nội nội dung website được hiển thị trước, do đó sẽ trì hoãn tải tất cả JavaScript. Tuy nhiên, điều này có thể khiến mã JavaScript bị lỗi nếu như bạn không sử dụng lệnh jQuery. Do đó, nếu không thực sự cần thiết thì bạn nên tắt tính năng này.",
	},
	{
		id: 3,
		question: "Auto Minify",
		answer:
			"Giúp loại bỏ các ký tự không cần thiết ra khỏi mã nguồn mà không làm thay đổi chức năng của nó. Nổi bật chính là tự loại bỏ chú thích, khoảng trắng… nhằm giảm lượng dữ liệu chuyển đi và cải thiện được tốc độ tải trang.",
	},
	{
		id: 4,
		question: "Bảo mật",
		answer:
			"Đây là yếu tố rất quan trọng bởi nó đảm bảo website của bạn luôn an toán trước những kẻ tấn công. Cloudflare có thể phát hiện và ngăn chặn sự tấn công của các hacker đến website của bạn",
	},
];

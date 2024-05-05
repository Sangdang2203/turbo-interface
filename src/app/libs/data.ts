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

export const dedicatedServerBenefits = [
	{
		id: 1,
		title: "99.99% Uptime",
		desc: "Virtual Data Center luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.",
	},
	{
		id: 2,
		title: "Băng thông rộng, siêu tốc độ",
		desc: "Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu truy cập lớn, phục vụ người dùng đông như media, streaming, gaming…",
	},
	{
		id: 3,
		title: "Phòng chống tấn công DDOS",
		desc: "Máy chủ dùng riêng Dedicated Server luôn được bảo vệ bởi hệ thống phòng chống tấn công DDOS chuyên dụng với công nghệ AI.",
	},
	{
		id: 4,
		title: "Tùy chọn hệ điều hành",
		desc: "EcoCloud hỗ trợ cài đặt hệ điều hành đa dạng, từ Windows Server, Linux và các hệ điều hành ảo hóa như VMWARE, KVM…",
	},
];

export const decicatedServerPrices = [
	{
		id: 1,
		title: "GÓI PRIVATE 01",
		price: "7.600.000 VND",
		intel: "1 Intel Xeon Silver 4410",
		ram: "16 GB RAM",
		ssd: "480 GB SSD",
		ipv4: "1 ipv4",
		network: "100 Mbps network",
	},
	{
		id: 2,
		title: "GÓI PRIVATE 02",
		price: "8.300.000 VND",
		intel: "1 Intel Xeon Silver 4410",
		ram: "32 GB RAM",
		ssd: "960 GB SSD",
		ipv4: "1 ipv4",
		network: "400 Mbps network",
	},
	{
		id: 3,
		title: "GÓI PRIVATE 03",
		price: "9.300.000 VND",
		intel: "2 Intel Xeon Silver 4410",
		ram: "2 x 32 GB RAM",
		ssd: "1.9 TB SSD",
		ipv4: "1 ipv4",
		network: "500 Mbps network",
	},
	{
		id: 4,
		title: "GÓI PRIVATE 04",
		price: "9.999.000 VND",
		intel: "2 Intel Xeon Silver 4410",
		ram: "2 x 32 GB RAM",
		ssd: "3.8 TB SSD",
		ipv4: "1 IPv4",
		network: "500 Mbps network",
	},
];

export const dedicatedServerQuestions = [
	{
		id: 1,
		question: "Dedicated Server là gì? Lợi ích Dedicated Server",
		answer:
			"Dedicated Server là dịch vụ cho thuê máy chủ vật lý đặt tại Data Center, hoạt động kết nối Internet 24/7. Với cấu hình mạnh mẽ, Dedicated Server đáp ứng cho việc sử dụng các ứng dụng yêu cầu hiệu năng cao, đảm bảo yêu cầu bảo mật của doanh nghiệp.",
	},
	{
		id: 2,
		question: "Khác biệt giữa Dedicated Server với Cloud Server là gì?",
		answer:
			"Cloud Server là máy chủ ảo hóa trên tổng thể nhiều máy chủ vật lý được tích hợp chặt chẽ với nhau; Khác với Dedicated Server hoạt động độc lập riêng biệt, không chia sẽ tài nguyên.",
	},
	{
		id: 3,
		question: "Có hỗ trợ migrate sang dịch vụ của EcoCloud?",
		answer:
			"Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ của EcoCloud. Chúng tôi có thể giúp quý khách hàng chuyển đổi từ máy chủ ảo hóa VMWare hoặc Hyper-V sang Dedicated Server và ngược lại mà không gây gián đoạn dịch vụ.",
	},
	{
		id: 4,
		question: "Tôi muốn dùng thử dịch vụ Dedicated Server của EcoCloud ?",
		answer:
			"EcoCloud hiện chưa có chương trình dùng thử cho dịch vụ máy chủ riêng, tuy nhiên, chúng tôi có thể thực hiện Demo trực quan. Hãy liên hệ với chúng tôi qua hotline +84 76 9999 967 để được hỗ trợ.",
	},
	{
		id: 5,
		question: "Dedicated Server của EcoCloud có hỗ trợ Windows Server ?",
		answer:
			"EcoCloud hỗ trợ cài đặt nhiều hệ điều hành cho Dedicated Server, trong đó có nhiều phiên bản Windows Server như Win Server 2012, 2016, 2019…",
	},
	{
		id: 6,
		question: "Nhà cung cấp cũ không hợp tác chuyển đổi máy chủ ?",
		answer:
			"Chúng tôi rất lấy làm tiếc vì sự không hợp tác từ nhà cung cấp cũ. Chúng tôi có những công nghệ khác biệt, giúp khách hàng chuyển đổi hệ thống mà không cần thao tác từ tầng vật lý. Hãy liên hệ với chúng tôi để được tư vấn hỗ trợ.",
	},
];

export const vitualDataCenterPrices = [
	{
		id: 1,
		title: "GÓI VDC 01",
		price: "9.600.000 VND",
		cpu: "20 vCPU",
		ram: "48 GB RAM",
		ssd: "600 GB SSD",
		ipv4: "6 ipv4",
		network: "400 Mbps network",
		userGroup: "1 User Group",
		privateLAN: "16 IPv4 Private LAN",
	},
	{
		id: 2,
		title: "GÓI VDC 02",
		price: "14.400.000 VND",
		cpu: "30 vCPU",
		ram: "64 GB RAM",
		ssd: "1000 GB SSD",
		ipv4: "9 ipv4",
		network: "400 Mbps network",
		userGroup: "1 User Group",
		privateLAN: "32 IPv4 Private LAN",
	},
	{
		id: 3,
		title: "GÓI VDC 03",
		price: "21.100.000 VND",
		cpu: "40 vCPU",
		ram: "96 GB RAM",
		ssd: "1500 GB SSD",
		ipv4: "12 ipv4",
		network: "500 Mbps network",
		userGroup: "1 User Group",
		privateLAN: "48 IPv4 Private LAN",
	},
	{
		id: 4,
		title: "GÓI VDC 04",
		price: "27.800.000 VND",
		cpu: "50 vCPU",
		ram: "128 GB RAM",
		ssd: "2000 GB SSD",
		ipv4: "16 IPv4",
		network: "500 Mbps network",
		userGroup: "1 User Group",
		privateLAN: "64 IPv4 Private LAN",
	},
];

export const vitualDataCenterBenefits = [
	{
		id: 1,
		title: "99.99% Uptime",
		desc: "Virtual Data Center luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.",
	},
	{
		id: 2,
		title: "Băng thông rộng, siêu tốc độ",
		desc: "Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu truy cập lớn, phục vụ người dùng đông như media, streaming, gaming…",
	},
	{
		id: 3,
		title: "Kiểm soát, phân quyền",
		desc: "Kiểm soát, phân quyền truy cập dựa trên vai trò (RBAC) để ủy quyền quản lý tài nguyên.",
	},
	{
		id: 4,
		title: "Quản trị linh hoạt",
		desc: "Quản trị độc lập, linh hoạt với tường lửa và mạng riêng biệt, cấu hình tùy chỉnh để phù hợp với kiến trúc hạ tầng hiện hữu.",
	},
];

export const vitualDataCenterQuestions = [
	{
		id: 1,
		question: "Tôi muốn dùng thử dịch vụ Virtual Data Center?",
		answer:
			"EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất. Hãy liên hệ với chúng tôi qua hotline +84 76 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ khởi tạo tài khoản.",
	},
	{
		id: 2,
		question: "Khác biệt giữa Virtual Data Center với Private Cloud là gì ?",
		answer:
			"Với Private Cloud là cụm hệ thống máy chủ và storage, network chỉ dành riêng cho doanh nghiệp và không chia sẻ; Với Virtual Data Center là những khối tài nguyên được chuẩn bị trước và độc lập, nằm trong hệ thống Cloud IaaS.",
	},
	{
		id: 3,
		question: "Có hỗ trợ migrate sang dịch vụ của EcoCloud ?",
		answer:
			"Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ Cloud Server của EcoCloud. Chúng tôi có thể giúp quý khách hàng chuyển đổi từ Dedicated Server sang Cloud Server; chuyển từ ảo hóa VMWare hoặc Hyper-V dễ dàng và không gây downtime.",
	},
	{
		id: 4,
		question: "Tôi có thể cài đặt mạng LAN cho Virtual Data Center ?",
		answer:
			"Khách hàng hoàn toàn có thể cài đặt LAN và Firewall riêng cho Virtual Data Center trên giao diện quản lý. Nếu có gặp khó khăn trong quá trình cài đặt, hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.",
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

export const privateCloudPrices = [
	{
		id: 1,
		title: "GÓI PRIVATE 01",
		price: "7.600.000 VND",
		intel: "1 Intel Xeon Silver 4410",
		ram: "16 GB RAM",
		ssd: "480 GB SSD",
		ipv4: "1 ipv4",
		network: "100 Mbps network",
	},
	{
		id: 2,
		title: "GÓI PRIVATE 02",
		price: "8.300.000 VND",
		intel: "1 Intel Xeon Silver 4410",
		ram: "32 GB RAM",
		ssd: "960 GB SSD",
		ipv4: "1 ipv4",
		network: "100 Mbps network",
	},
	{
		id: 3,
		title: "GÓI PRIVATE 03",
		price: "9.300.000 VND",
		intel: "2 Intel Xeon Silver 4410",
		ram: "2 x 32 GB RAM",
		ssd: "1.9 TB SSD",
		ipv4: "1 ipv4",
		network: "100 Mbps network",
	},
	{
		id: 4,
		title: "GÓI PRIVATE 04",
		price: "9.999.000 VND",
		intel: "2 Intel Xeon Silver 4410",
		ram: "2 x 32 GB RAM",
		ssd: "3.8 TB SSD",
		ipv4: "1 IPv4",
		network: "100 Mbps network",
	},
];

export const privateCloudQuestions = [
	{
		id: 1,
		question: "Hình thức triển khai tại trung tâm dữ liệu ? ",
		answer:
			"Bạn có thể triển khai private cloud tại bất kì trung tâm dữ liệu nào bạn mong muốn. Tại trung tâm dữ liệu ở trụ sở chính của doanh nghiệp, hoặc tại các trung tâm dữ liệu Internet tiêu chuẩn.",
	},
	{
		id: 2,
		question: "Phương thức hỗ trợ như thế nào ?",
		answer:
			"Đây là thế mạnh của Turbo Solutions, chúng tôi sẽ song hành như một thành viên phòng CNTT của bạn trong suốt quá trình hoạt động. Chúng tôi có thể lập báo cáo, hỗ trợ tư vấn triển khai, chuyển đổi máy chủ và ứng dụng.",
	},
	{
		id: 3,
		question: "Đám mây riêng khác với đám mây công cộng như thế nào ?",
		answer:
			"Nói một cách đơn giản, public cloud bao gồm các tài nguyên được chia sẻ mà bạn thuê từ một nhà cung cấp dịch vụ và đám mây riêng gồm các tài nguyên của riêng bạn (dedicated).",
	},
	{
		id: 4,
		question:
			"Với Private Cloud, điều gì xảy ra khi 1 disk hoặc server bị lỗi ?",
		answer:
			"Trong trường hợp bất kỳ tài nguyên riêng lẻ nào bị lỗi, máy ảo (VM) của bạn sẽ tự động được chuyển đến một máy chủ đầy đủ chức năng trong đám mây.",
	},
];

import * as Minio from "minio";

const minioClient = new Minio.Client({
	endPoint: "https://s3.turbo.vn",
	port: 9000,
	useSSL: true,
	accessKey: "5DkkghniRdU1wPmNnwCP",
	secretKey: "QAN7uhjSWXl421iqklsTEcDOlUualR2BKw25aojL",
});

export default minioClient;

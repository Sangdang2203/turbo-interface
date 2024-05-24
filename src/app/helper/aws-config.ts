import { S3Client } from "@aws-sdk/client-s3";
//@ts-ignore
const s3Client = new S3Client({
	//region: process.env.AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
	},
});
export default s3Client;

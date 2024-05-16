/**
 * Create form data from files
 * @param files files to upload
 * @returns form data
 */
export default function createFormData(file: File): FormData {
	const formData = new FormData();
	formData.append("file", file);
	return formData;
}

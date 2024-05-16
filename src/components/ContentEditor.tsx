import React from "react";
import dynamic from "next/dynamic";
//@ts-ignore
const Editor = dynamic(() => import("@ckeditor/ckeditor5-react"), {
	ssr: false,
});
const ClassicEditor = dynamic(
	//@ts-ignore
	() => import("@ckeditor/ckeditor5-build-classic"),
	{ ssr: false }
);
//@ts-ignore
const CKEditorWrapper = ({ content, onChange }) => {
	return (
		<Editor
			//@ts-ignore
			editor={ClassicEditor}
			data={content}
			onReady={(editor: any) => {
				// Custom initialization logic if needed
			}}
			onChange={(event: any, editor: { getData: () => any }) => {
				const data = editor.getData();
				onChange(data);
			}}
		/>
	);
};

export default CKEditorWrapper;

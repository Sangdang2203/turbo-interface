// components/custom-editor.js

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
	toolbar: [
		"heading",
		"|",
		"bold",
		"italic",
		"underline",
		"link",
		"bulletedList",
		"numberedList",
		"|",
		"outdent",
		"indent",
		"|",
		"imageUpload",
		"blockQuote",
		"insertTable",
		"mediaEmbed",
		"undo",
		"redo",
	],
};

function CustomEditor(props: { initialData: string | null | undefined }) {
	return (
		<CKEditor
			editor={Editor}
			config={editorConfiguration}
			data={props.initialData}
			onChange={(event, editor) => {
				const data = editor.getData();
				console.log({ event, editor, data });
			}}
		/>
	);
}

export default CustomEditor;

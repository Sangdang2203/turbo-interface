import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";

const Editor = ({
  content,
  setContent
}: { content: string, setContent: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData();
        setContent(data);
      }}
    />
  );
};

export default Editor;
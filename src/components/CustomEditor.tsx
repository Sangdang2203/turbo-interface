"use client";

import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: {
    items: [
      'undo',
      'redo',
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      // 'fontColor',
      // 'fontBackgroundColor',
      'fontSize',
      'fontFamily',
      '|',
      'alignment',
      'outdent',
      'indent',
      'numberedList',
      'bulletedList',
      'pageBreak',
      'imageUpload',
      '|',
      'link',
      // 'autoImage',
      // 'imageCaption',
      // 'imageResize',
      // 'imageStyle',
      'insertTable',
      'mediaEmbed',
      // 'wordCount',
      'blockQuote',
    ]
  },
  language: 'vi',
  image: {
    // toolbar: [
    //   'imageTextAlternative',
    //   'toggleImageCaption',
    //   'imageStyle:inline',
    //   'imageStyle:center',
    //   'imageStyle:side',
    //   'linkImage'
    // ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      // 'tableCellProperties',
      // 'tableProperties'
    ]
  }
};

function CustomEditor(props: any) {
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
  )
}

export default CustomEditor;

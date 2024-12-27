// 'use client'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { ClassicEditor } from 'ckeditor5';

// const editorConfiguration = {
//     toolbar: [
//         'heading',
//         '|',
//         'bold',
//         'italic',
//         'link',
//         'bulletedList',
//         'numberedList',
//         '|',
//         'outdent',
//         'indent',
//         '|',
//         'imageUpload',
//         'blockQuote',
//         'insertTable',
//         'mediaEmbed',
//         'undo',
//         'redo'
//     ]
// };
// export default function CustomCKEditor(props: any) {
//     return (
//         <>
//               <CKEditor
//                 editor={ ClassicEditor}
//                 config={ editorConfiguration }
//                 data={ props.initialData }
//                 onChange={ (event, editor ) => {
//                     const data = editor.getData();
//                     console.log( { event, editor, data } );
//                 } }
//             />

//         </>
//     )
// }

import React, { useState } from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CustomCKEditorProps {
  value: string;
  onChange?: (data: string) => void;
  config?: object;
}

const CustomCKEditor = ({
  value,
  onChange,
  config = {},
}: CustomCKEditorProps) => {
  const [editorData, setEditorData] = useState(value);

  // Handle change in the editor content
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
    if (onChange) {
      onChange(data); // notify parent component about the change
    }
  };

  return (
    <div className="ckeditor-wrapper">
      <CKEditor
        editor={ClassicEditor} // using the classic build here
        data={editorData}
        config={config}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CustomCKEditor;

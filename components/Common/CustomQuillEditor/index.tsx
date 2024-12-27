import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface CustomQuillEditorProps {
  value: string;
  onChange?: (data: string) => void;
  config?: object;
}

const CustomQuillEditor = ({
  value,
  onChange,
  config = {},
}: CustomQuillEditorProps) => {
  const [editorData, setEditorData] = useState(value);

  const handleEditorChange = (content: string) => {
    setEditorData(content);
    if (onChange) {
      onChange(content); // notify parent component about the change
    }
  };

  return (
    <div className="quill-wrapper">
      <ReactQuill
        value={editorData}
        onChange={handleEditorChange}
        className="bg-white"
      />
    </div>
  );
};

export default CustomQuillEditor;

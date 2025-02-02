import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';

export default function TinyMCEEditor({EditorData,onEditorChange}) {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

    const handleEditorChange = (content,editor) =>{
        // console.log(content)
        setContent(content)
        EditorData(content)
    }

    const handleActivities = () => {
        // console.log(content)
        EditorData(content)
    }

  return (
    <>
      <Editor
        apiKey='atns0l1733m1a3qjexiquzsra7r0gj2aje1xk4iyz2lmbhn5'
        onInit={(evt, editor) => editorRef.current = editor}
        // initialValue={initValue}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onEditorChange}
      />

      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
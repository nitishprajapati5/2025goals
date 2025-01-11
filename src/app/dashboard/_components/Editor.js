import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';

export default function TinyMCEEditor() {
  const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
    const handleEditorChange = (content,editor) =>{
        console.log(content)
    }

    const handleActivities = () => {

    }

  return (
    <>
      <Editor
        apiKey='atns0l1733m1a3qjexiquzsra7r0gj2aje1xk4iyz2lmbhn5'
        onInit={(evt, editor) => editorRef.current = editor}
        // initialValue="<p>This is the initial content of the editor.</p>"
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
        onEditorChange={handleEditorChange}
      />
        <Button className="mt-4 w-full" onClick={handleActivities}>Submit</Button>

      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
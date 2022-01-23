import React, { useState, FC } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const SubNewStory: FC = () => {
  const [details, setDetails] = useState<string>('');

  const handleBodyChange = (e: any) => {
    setDetails(e);
  };

  return (
    <div className="container">
      <h1>New Story</h1>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={details}
        onChange={(e) => handleBodyChange(e)}
        placeholder="Write something amazing..."
      />
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
];

export default SubNewStory;

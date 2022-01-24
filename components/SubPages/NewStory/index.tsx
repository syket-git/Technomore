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
      <div className="my-16">
        <div className="mb-10">
          <input
            placeholder="Title"
            type="text"
            className="w-full focus:outline-none italic bg-transparent py-3 text-4xl font-semibold text-secondary border-b-2 border-secondary"
          />
        </div>

        <div>
          <p className="text-gray-400 mb-4 text-lg font-semibold">
            Description
          </p>
          <ReactQuill
            className="h-96"
            modules={modules}
            formats={formats}
            value={details}
            onChange={(e) => handleBodyChange(e)}
            placeholder="Write something amazing..."
          />
        </div>
        <div className="mt-20">
          <button className="w-full py-2 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all duration-150 rounded font-semibold">
            Publish
          </button>
        </div>
      </div>
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

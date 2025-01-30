"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import TopBar from "@/app/components/TopBar";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdf(file.name);
    }
  };

  return (
    <>
      <TopBar />
      <div className="flex bg-black text-white min-h-screen p-10 gap-10">
        {/* Form Section */}
        <div className="w-2/3">
          <h2 className="text-2xl font-bold">Course</h2>
          <p>
            Dashboard &gt; <span className="text-[#ec9941]">Courses</span>
          </p>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Course Title"
            className="w-full bg-[#1E1E1E] p-3 my-3 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Description Input */}
          <textarea
            placeholder="Course Description"
            className="w-full bg-[#1E1E1E] p-3 my-3 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {/* Image Upload with Drag & Drop */}
          <div
            className="border-2 border-dashed border-gray-600 bg-[#1E1E1E] p-5 flex flex-col items-center text-center"
            onDragOver={(e) => e.preventDefault()} // Allow drag-over
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) {
                setImage(URL.createObjectURL(file));
              }
            }}
          >
            {image ? (
              <img src={image} alt="Preview" className="w-32 mx-auto rounded" />
            ) : (
              <p className="text-gray-400">Drag and drop an image or</p>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageUpload"
              onChange={handleImageUpload}
            />

            <button
              className="bg-[#ec9941] text-black px-4 py-2 mt-2 rounded-xl"
              onClick={() => document.getElementById("imageUpload").click()}
            >
              Choose File
            </button>
          </div>

          {/* PDF Upload */}
          <div className="flex items-center gap-2 mt-4">
            <label className="bg-[#ec9941] text-black px-4 py-2 rounded-xl cursor-pointer">
              Attach PDF
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handlePdfUpload}
              />
            </label>

            {pdf && (
              <div className="flex items-center bg-gray-800 p-2 rounded">
                <FaFilePdf className="text-red-500 mr-2" />
                {pdf}
                <MdClose
                  className="ml-2 text-red-500 cursor-pointer"
                  onClick={() => setPdf(null)}
                />
              </div>
            )}
          </div>

          {/* Select Dropdown */}
          <select className="w-full bg-[#1E1E1E] p-3 my-3 rounded">
            <option>- Select Status -</option>
            <option>Draft</option>
            <option>Published</option>
          </select>

          {/* Submit Button */}
          <button className=" bg-[#ec9941] text-black px-4 py-3 rounded-xl">
            Add Course
          </button>
        </div>

        {/* Preview Section */}
        <div className="w-1/3 bg-black p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Preview</h3>
          <div className="border border-gray-700 bg-[#1E1E1E] p-4 rounded-lg">
            {image ? (
              <img src={image} alt="Preview" className="w-full rounded" />
            ) : (
              <div className="h-32 bg-gray-700 rounded"></div>
            )}
            <h4 className="text-lg font-bold mt-3">
              {title || "Untitled Course"}
            </h4>
            <p className="text-gray-400">
              {description || "No description provided."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

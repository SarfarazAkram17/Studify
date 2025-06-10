import React, { useState, useContext } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { userEmail } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    _id,
    title,
    description,
    creator_email,
    dueDate,
    difficulty,
    thumbnail_image,
    marks,
  } = assignment;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const submission = {
      assignmentId: _id,
      googleDocLink: form.googleDocLink.value,
      quickNote: form.quickNote.value,
      status: "pending",
      userEmail,
    };

    setSubmitting(true);

    axios
      .post("http://localhost:3000/submissions", submission)
      .then(() => {
        toast.success("Assignment submitted successfully!");
        setShowModal(false);
        setSubmitting(false);
      })
      .catch((error) => {
        toast.error(error.code);
        setSubmitting(false);
      });
  };

  return (
    <div className="my-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/assignments">
            <BsArrowLeftCircleFill size={22} />
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-12 text-center">
          Assignment Details
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 text-center space-y-4 bg-base-200 border-2 border-gray-200 rounded-xl shadow-lg">
        <div className="mb-6 flex justify-center">
          <img
            src={thumbnail_image}
            alt={title}
            className="w-[50%] h-44 rounded-lg md:h-48 lg:h-52 object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-sm font-semibold">
          <strong>Creator Email:</strong> {creator_email}
        </p>
        <p className="text-sm font-semibold">{description}</p>
        <p className="text-sm font-semibold">
          <strong>Marks:</strong> {marks}
        </p>
        <p className="text-sm font-semibold">
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p className="text-sm font-semibold">
          <strong>Due Date: </strong> {dueDate.slice(0, 10)}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="btn btn-info px-14 my-4 text-2xl rounded-full"
        >
          Take Assignment
        </button>
      </div>

      
    </div>
  );
};

export default AssignmentDetails;

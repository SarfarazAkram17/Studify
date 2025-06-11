import axios from "axios";
import React, { useContext, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Authentication/AuthContext";
import Swal from "sweetalert2";

const GiveAssignmentMark = () => {
  const { userEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const submission = useLoaderData();
  const { _id, assignment_title, googleDocLink, quickNote, assignment_marks } =
    submission;

  const handleGiveMarks = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const obtainedMarks = parseInt(form.obtained_marks.value);
    const feedback = form.feedback.value;

    if (obtainedMarks > assignment_marks) {
      return toast.error(
        "Obtained marks can not be bigger than Assignment marks"
      );
    }

    if (obtainedMarks < 0) {
      return toast.error("Obtained marks can not be negative number");
    }

    const updatedSubmission = { obtainedMarks, feedback };
    setSubmitting(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You really want to evaluate this assignment",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, evaluate it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `http://localhost:3000/submissions/${_id}?email=${userEmail}`,
            updatedSubmission
          )
          .then((res) => {
            if (res.data.modifiedCount) {
              toast.success("You Successfully evaluate this assignment");
              form.reset();
              navigate("/pendingAssignments");
              setSubmitting(false);
            } else {
              toast.error(res.data.message);
              setSubmitting(false);
            }
          })
          .catch((error) => {
            toast.error(error.code);
            setSubmitting(false);
          });
      } else {
        setSubmitting(false);
      }
    });
  };

  return (
    <div>
      <div className="my-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/pendingAssignments">
              <BsArrowLeftCircleFill size={22} />
            </Link>
          </div>

          <h1 className="text-5xl font-bold mb-12 text-center">
            Evaluate this Assignment
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 text-center space-y-4 bg-base-200 border-2 border-gray-200 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold">{assignment_title}</h1>
          <p className="text-sm">
            <strong>Assignment total Marks:</strong> {assignment_marks}
          </p>
          <p className="text-sm">
            <strong>Google Doc link:</strong>{" "}
            <a
              className="text-info font-semibold hover:underline"
              href={googleDocLink}
              target="_blank"
            >
              {googleDocLink}
            </a>
          </p>
          <p className="text-sm">
            <strong>Quick Note:</strong> {quickNote}
          </p>

          <form onSubmit={handleGiveMarks} className="space-y-4 px-8">
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Obtained Marks</label>
              <input
                type="number"
                name="obtained_marks"
                required
                className="input w-full bg-base-100 placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter obtained marks"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Feedback</label>
              <textarea
                name="feedback"
                rows="3"
                required
                className="textarea textarea-bordered w-full bg-base-100 placeholder:text-xs placeholder:font-semibold"
                placeholder="Write Feedback"
              ></textarea>
            </fieldset>
            <button
              type="submit"
              className="btn btn-info px-14 my-4 text-2xl rounded-full w-full"
              disabled={submitting}
            >
              {submitting ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiveAssignmentMark;

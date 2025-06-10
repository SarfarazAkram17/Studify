import React, { useContext, useState } from "react";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../Authentication/AuthContext";

const Assignments = () => {
  const { userEmail } = useContext(AuthContext);
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);

  const handleAssignmentDelete = (id) => {

    if(!userEmail){
     return toast.warn('Login First')
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/assignments/${id}?email=${userEmail}`)
          .then((res) => {
            if (res.data.deletedCount) {
              toast.success("You successfully deleted the assignment");
              const remainingAssignments = assignments.filter(
                (assignment) => assignment._id !== id
              );
              setAssignments(remainingAssignments);
            } else {
              toast.error(res.data.message);
            }
          })
          .catch((error) => {
            toast.error(error.code);
          });
      }
    });
  };

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      {assignments.length === 0 ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
            No Assignments Available
          </h1>
          <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
            There are currently no assignments created. Be the first to create
            an assignment and help others learn!
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
            Explore All Assignments
          </h1>
          <p className="text-center text-gray-600 text-[13px] max-w-2xl mx-auto font-semibold mb-10">
            Discover a variety of assignments created by fellow learners. Dive
            into projects like portfolio websites, chat apps, calculators, and
            more. Click “View” to explore, “Edit” to update your own, or
            “Delete” if you no longer need it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                handleAssignmentDelete={handleAssignmentDelete}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Assignments;

import React, { useState } from "react";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import { useLoaderData } from "react-router";

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);

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
            Browse the list of all available assignments submitted by users.
            Click “View” to explore an assignment in detail, “Edit” to modify
            it, or “Delete” if no longer needed. Enhance your learning
            experience by engaging with a variety of topics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
              <AssignmentCard key={assignment._id} assignment={assignment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Assignments;

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyAttemptedAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const { userEmail, uid } = useAuth();
  const [mySubmissions, setMySubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/submissions?email=${userEmail}&uid=${uid}`)
      .then((res) => {
        setMySubmissions(res.data);
        setLoading(false);
      });
  }, [userEmail, axiosSecure, uid]);

  if (loading) {
    return (
      <Lottie
        loop={true}
        animationData={lottieLoading}
        className="h-[40vh] w-auto"
      ></Lottie>
    );
  }

  return (
    <div className="my-12 px-4">
      {mySubmissions.length === 0 ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
            No Assignments Submitted Yet
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto font-semibold mb-10">
            You haven't submitted any assignments. Once you take and submit an
            assignment, it will appear here.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl mb-10 font-bold text-center text-info">
            My Submitted Assignments: {mySubmissions.length}
          </h1>

          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
            <table className="table text-center">
              <thead className="bg-base-300 font-semibold">
                <tr>
                  <th>Sl</th>
                  <th>Assignment title</th>
                  <th>Assignment status</th>
                  <th>Assignment marks</th>
                  <th>Obtained marks</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {mySubmissions.map((submission, index) => (
                  <tr key={submission._id}>
                    <th>{index + 1}</th>
                    <td>{submission.assignment_title}</td>
                    <td>
                      <span
                        className={`badge badge-soft rounded-full font-bold text-xs w-auto
      ${submission.status === "completed" ? "badge-success" : "badge-warning"}`}
                      >
                        {submission.status}
                      </span>
                    </td>
                    <td>{submission.assignment_marks}</td>
                    {submission.status === "completed" ? (
                      <>
                        <td>{submission.obtained_marks}</td>
                        <td>{submission.feedback}</td>
                      </>
                    ) : (
                      <>
                        <td>-</td>
                        <td>-</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyAttemptedAssignments;

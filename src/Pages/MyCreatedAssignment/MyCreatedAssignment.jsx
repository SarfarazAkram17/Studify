import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";
import AssignmentCard from "../../Shared/AssignmentCard/AssignmentCard";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCreatedAssignments = () => {
  const axiosSecure = useAxiosSecure()
  const { userEmail } = useAuth();
  const [myAssignments, setMyAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/assignments?email=${userEmail}`)
      .then((res) => {
        setMyAssignments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  }, [userEmail, axiosSecure]);

  if (loading) {
    return (
      <Lottie
        loop={true}
        animationData={lottieLoading}
        className="h-[40vh] w-auto"
      ></Lottie>
    );
  }

  const handleAssignmentDelete = (id) => {
    if (!userEmail) {
      return toast.warn("Login First");
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
        axiosSecure
          .delete(`/assignments/${id}?email=${userEmail}`)
          .then((res) => {
            if (res.data.deletedCount) {
              toast.success("You successfully deleted the assignment");
              const remainingAssignments = myAssignments.filter(
                (assignment) => assignment._id !== id
              );
              setMyAssignments(remainingAssignments);
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
    <div className="my-12 px-4 max-w-5xl mx-auto">
      {myAssignments.length === 0 ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-info">
            No Assignments Created Yet
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto font-semibold mb-10">
            You haven't created any assignments yet. Start by creating one so
            others can attempt and submit it.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl mb-10 font-bold text-center text-info">
            My Submitted Assignments: {myAssignments.length}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                handleAssignmentDelete={handleAssignmentDelete}
              ></AssignmentCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCreatedAssignments;

/***
 * [
  {
    "title": "Build a Portfolio Website",
    "marks": "10",
    "image": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Easy",
    "description": "Design and develop a personal portfolio website to showcase your projects, skills, and resume. Use HTML, CSS, and JavaScript to create an engaging user interface. Include sections like About, Projects, Contact, and a downloadable resume link.",
    "dueDate": "10/06/2025"
  },
  {
    "title": "React To-do App",
    "marks": "15",
    "image": "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Medium",
    "description": "Build a fully functional React-based to-do application with Create, Read, Update, and Delete (CRUD) operations. The app should support persistent storage using localStorage or a database and include filtering for completed and pending tasks.",
    "dueDate": "12/06/2025"
  },
  {
    "title": "Weather Forecast App",
    "marks": "20",
    "image": "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Hard",
    "description": "Create a weather application that fetches real-time weather data from an external API. Display weather conditions, temperature, humidity, and icons for multiple cities. Include search functionality and error handling for invalid queries.",
    "dueDate": "15/06/2025"
  },
  {
    "title": "Login & Signup System",
    "marks": "10",
    "image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Easy",
    "description": "Develop a secure authentication system that includes user registration, login, and logout functionality. Implement client-side form validation, password strength indicators, and store user data securely in a backend or localStorage.",
    "dueDate": "11/06/2025"
  },
  {
    "title": "Chat Application",
    "marks": "25",
    "image": "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Hard",
    "description": "Build a real-time chat application using socket.io or Firebase. Include features such as private messaging, user presence indicators, message timestamps, and a responsive chat UI. Ensure a smooth, real-time experience across multiple devices.",
    "dueDate": "20/06/2025"
  },
  {
    "title": "Budget Tracker",
    "marks": "15",
    "image": "https://images.pexels.com/photos/6693651/pexels-photo-6693651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Medium",
    "description": "Create a personal budgeting tool that allows users to log income and expenses, visualize spending trends using charts, and set monthly savings goals. Use modern libraries like Chart.js or Recharts for data visualization.",
    "dueDate": "17/06/2025"
  },
  {
    "title": "Markdown Blog Editor",
    "marks": "18",
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Medium",
    "description": "Develop a markdown-based blog editor that offers real-time preview and supports saving posts to local storage or a database. Allow users to style text using markdown syntax and preview HTML output instantly while typing.",
    "dueDate": "14/06/2025"
  },
  {
    "title": "Simple Calculator",
    "marks": "8",
    "image": "https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Easy",
    "description": "Build a simple calculator using HTML, CSS, and JavaScript that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Include keyboard support and responsive design.",
    "dueDate": "09/06/2025"
  },
  {
    "title": "Food Delivery UI",
    "marks": "22",
    "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Hard",
    "description": "Design a user interface for a food delivery app using Tailwind CSS. Include restaurant listings, menu previews, cart functionality, and order summary pages. Focus on a clean, mobile-first layout with responsive grid systems.",
    "dueDate": "22/06/2025"
  },
  {
    "title": "Task Manager App",
    "marks": "20",
    "image": "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
    "difficulty": "Medium",
    "description": "Create a task manager application with user authentication, task prioritization, and real-time updates using Firebase. Users should be able to create, edit, delete, and categorize tasks, as well as mark them as complete.",
    "dueDate": "13/06/2025"
  }
]
 */
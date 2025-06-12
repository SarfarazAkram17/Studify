import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/loading.json";

const MyAttemptedAssignments = () => {
  const { userEmail } = useContext(AuthContext);
  const [mySubmissions, setMySubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/submissions?email=${userEmail}`)
      .then((res) => {
        console.log(res.data);
        setMySubmissions(res.data);
        setLoading(false);
      });
  }, [userEmail]);

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
    <div>
   
    </div>
  );
};

export default MyAttemptedAssignments;

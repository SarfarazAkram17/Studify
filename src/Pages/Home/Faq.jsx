import React from "react";

const Faq = () => {
  return (
    <div className="my-12">
      <h1 className="mb-12 text-center text-4xl md:text-5xl font-bold">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What is the purpose of this platform?
        </div>
        <div className="collapse-content text-sm">
          Our platform enables users to create, submit, and evaluate assignments
          in a collaborative group study environment. Every user is considered a
          friend and can participate equally.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Who can create and submit assignments?
        </div>
        <div className="collapse-content text-sm">
          Any registered and logged-in user can create and submit assignments
          using a Google Docs link and personal notes.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I update or delete assignments?
        </div>
        <div className="collapse-content text-sm">
          Yes, but only the user who created the assignment can delete or update
          it. This ensures that ownership and security are maintained.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How are assignments graded?
        </div>
        <div className="collapse-content text-sm">
          Users can grade assignments submitted by others. Once evaluated, the
          status of the assignment changes from "pending" to "completed", and
          feedback with marks is saved.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I grade my own submitted assignments?
        </div>
        <div className="collapse-content text-sm">
          No. Users are restricted from grading their own submissions to
          maintain fairness and integrity in the evaluation process.{" "}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is the platform mobile-friendly?
        </div>
        <div className="collapse-content text-sm">
          Yes, the entire website is fully responsive and works smoothly on
          desktops, tablets, and mobile devices.{" "}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is my data secure on this platform?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. We use Firebase Authentication, JWT tokens for route
          protection, and environment variables to secure sensitive credentials
          like Firebase config and MongoDB connection.
        </div>
      </div>
    </div>
  );
};

export default Faq;

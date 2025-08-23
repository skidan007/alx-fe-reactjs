import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function formikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      await response.json();
      alert("User registered successfully!");
      resetForm();
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-3">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

import React from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// --- Validation Schema ---
const schema = Yup.object().shape({
    username: Yup.string()
        .min(5, "Username must be at least 5 characters")
        .required("Username is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

// --- Initial Values ---
const initialValues = {
    username: "",
    email: "",
    password: "",
};

// --- Submit Handler ---
function handleFormSubmit(values, { setSubmitting, resetForm }) {
    console.log("Form submitted:", values);
    // Here you’d usually call your API:
    // axios.post("/signup", values).then(...)

    setSubmitting(false);
    resetForm();
}

// --- Component ---
const SignUp = ({
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    dirty,
    isValid,
    isSubmitting,
}) => {
    return (
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="text-white flex flex-col items-center"
            >
                <LiaCartArrowDownSolid className="text-9xl" />

                <div className="flex flex-col items-center gap-3 mt-4">
                    {/* Username */}
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="border w-[250px] pl-8 pr-2 py-1 rounded"
                        />
                        <FiUser className="absolute top-2 left-2" />
                    </div>
                    {touched.username && errors.username && (
                        <div className="text-red-500 text-sm">{errors.username}</div>
                    )}

                    {/* Email */}
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border w-[250px] pl-8 pr-2 py-1 rounded"
                        />
                        <AiOutlineMail className="absolute top-2 left-2" />
                    </div>
                    {touched.email && errors.email && (
                        <div className="text-red-500 text-sm">{errors.email}</div>
                    )}

                    {/* Password */}
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="border w-[250px] pl-8 pr-2 py-1 rounded"
                        />
                        <RiLockPasswordFill className="absolute top-2 left-2" />
                    </div>
                    {touched.password && errors.password && (
                        <div className="text-red-500 text-sm">{errors.password}</div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    disabled={!(isValid && dirty) || isSubmitting}
                    type="submit"
                    className="text-blue-700 disabled:bg-gray-300 bg-white mt-6 w-full py-2 shadow shadow-black rounded text-sm font-bold hover:cursor-pointer"
                >
                    {isSubmitting ? "Signing Up..." : "SIGN UP"}
                </button>

                {/* Redirect Link */}
                <div className="my-2">
                    Have an account?{" "}
                    <Link to="/login" className="underline text-blue-300">
                        Login here
                    </Link>
                </div>
            </form>
        </div>
    );
};

// --- Wrap with Formik ---
const EnhancedSignUp = withFormik({
    validationSchema: schema,
    initialValues,
    handleSubmit: handleFormSubmit,
})(SignUp);

export default EnhancedSignUp;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignupPage = () => {
  const { signUp } = useAuth();
  const { isAuthenticate } = useSelector((state) => state.userSlice);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data);
  };

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">
                  Name is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  Email is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">
                  Password is required
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              {...register("privacy", { required: true })}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="privacy"
              className="ml-2 block text-sm text-gray-900"
            >
              I agree to the{" "}
              <a
                href="/privacy_policy"
                target="_blank"
                className="text-blue-700 underline"
              >
                privacy policy
              </a>
            </label>
          </div>
          {errors.privacy && (
            <span className="text-red-500 text-xs mt-1">
              You must agree to the privacy policy
            </span>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="text-center my-4">
          Already have an account?{" "}
          <Link to="/login" className=" text-blue-600 hover:text-blue-900">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

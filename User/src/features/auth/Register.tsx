import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "./authApiSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Register = () => {
  const [register] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      password: "",
      userName: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("This field cannot be left blank")
        .min(4, "Must be 4 characters or more"),
      userName: Yup.string()
        .required("This field cannot be left blank")
        .min(4, "Must be 4 characters or more"),
      address: Yup.string()
        .required("This field cannot be left blank")
        .min(4, "Must be 12 characters or more"),
      email: Yup.string()
        .required("This field cannot be left blank")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("This field cannot be left blank")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      phoneNumber: Yup.string()
        .required("This field cannot be left blank")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: async (values) => {
      try {
        await register({
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          address: values.address,
          userName: values.userName,
          name: values.name,
        }).unwrap();

        toast.success(
          "To finish setting up your account, please check your email to confirm the address you provided.",
          {
            duration: 5000,
          }
        );
      } catch (err: any) {
        toast.error(err.data.ErrorMessage);
      }
    },
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mb-52 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6 grid"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="px-2 text-red-700"> {formik.errors.email} </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="username"
                  placeholder="Your username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                />
                {formik.errors.userName && (
                  <p className="px-2 text-red-700">{formik.errors.userName}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <p className="px-2 text-red-700">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your phone number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phoneNumber && (
                    <p className="px-2 text-red-700">
                      {formik.errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && (
                  <p className="px-2 text-red-700"> {formik.errors.address} </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <p className="px-2 text-red-700">{formik.errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useConfirmEmailMutation } from "./authApiSlice";
import toast from "react-hot-toast";

const EmailConfirm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [confirmEmail] = useConfirmEmailMutation();
  const navigate = useNavigate();
  const confirm = async () => {
    try {
      await confirmEmail({
        userId: searchParams.get("userId"),
        token: searchParams.get("code"),
      });
    } catch (error) {
      toast.error("Something went wrong, please try again");
      navigate("/register");
    }
  };

  useEffect(() => {
    confirm();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p>
            Congratulations! Your email address has been successfully verified
            for your account. You can now enjoy the full range of features and
            services we offer.
          </p>
          <p>
            If you have any questions or need assistance, feel free to contact
            us. Thank you for using our services!
          </p>
          <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <Link to={"/"} className="text-sm font-medium">
              Home
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirm;

import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import loginImg from "../../src/assets/register.svg";
import { useForm } from "react-hook-form"
import { userApi } from "../features/api/userApi";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from "sonner";
import { FaUserPlus, FaHome, FaSignInAlt } from "react-icons/fa";

type UserRegisterFormValues = {
    name: string;
    email: string;
    password: string;
    contactPhone: string;
};

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterFormValues>();
  const [registerUser, { isLoading }] = userApi.useRegisterUserMutation()
  const navigate = useNavigate();

  const onSubmit = async (data: UserRegisterFormValues) => {
    const loadingToastId = toast.loading("Creating Account...");
    try {
      const res = await registerUser(data).unwrap()
      toast.success(res?.message, { id: loadingToastId })
      navigate('/login',{ state: { email: data.email,password:data.password }, replace: true });
      console.log(res)
    } catch (err: any) {
        const message =
        err?.data?.error ||
        err?.data?.message ||
        err?.error ||
        err?.message ||
        'Unknown error';
        
        toast.error('Failed to Register: ' + message);
        toast.dismiss(loadingToastId)
    }
  }

  return (
    <>
      <Toaster
        richColors
        position="top-right"
      />
      <Navbar />
      <div className="min-h-screen bg-base-200 flex items-center justify-center py-10">
        <div className="grid sm:grid-cols-2 gap-0 bg-base-100 rounded-3xl shadow-xl overflow-hidden w-full max-w-5xl">
          {/* Form Section */}
          <div className="flex items-center justify-center p-8">
            <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-primary mb-2">Create Account</div>
                <p className="text-base-content/60">Join us today</p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-error text-sm mt-1">Full name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-error text-sm mt-1">Email is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Phone Number</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Enter your phone number"
                  {...register("contactPhone", { required: true })}
                />
                {errors.contactPhone && <span className="text-error text-sm mt-1">Phone number is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Create a password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-error text-sm mt-1">Password is required</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <FaUserPlus />
                )}
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="divider">OR</div>

              <div className="flex flex-col sm:flex-row gap-4 text-center">
                <Link 
                  to="/" 
                  className="btn btn-outline btn-sm flex-1"
                >
                  <FaHome />
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className="btn btn-outline btn-sm flex-1"
                >
                  <FaSignInAlt />
                  Sign In
                </Link>
              </div>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="hidden sm:flex items-center justify-center bg-primary/5">
            <img src={loginImg} alt="Register" width={400} className="rounded-2xl" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
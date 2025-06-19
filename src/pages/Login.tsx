import { Link } from "react-router";
import { Footer } from "../components/Footer";
import {Navbar} from "../components/Navbar";
import loginImg from "../../src/assets/register.svg";
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { userApi } from "../features/api/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { FaSignInAlt, FaHome, FaUserPlus } from "react-icons/fa";

type UserLoginFormValues = {
  email: string;
  password: string;
}

export const Login = () => {
     const navigate = useNavigate();
      const dispatch = useDispatch();
     const { register, handleSubmit, formState: { errors } } = useForm<UserLoginFormValues>();
     const [loginUser,{isLoading}] = userApi.useLoginUserMutation()

     const onSubmit = async (data: UserLoginFormValues) => {
    const loadingToastId = toast.loading("Logging in...");
    console.log(data)
    try {
      const res = await loginUser(data).unwrap()
      console.log(res)
        dispatch(setCredentials(res))
        toast.success(res?.message, { id: loadingToastId })
        navigate("/dashboard/me")
    } catch (err: any) {
        const message =
        err?.data?.error ||
        err?.data?.message ||
        err?.error ||
        err?.message ||
        'Unknown error';

        toast.error('Failed to Login: ' + message);
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
                    {/* Image Section */}
                    <div className="hidden sm:flex items-center justify-center bg-primary/5">
                        <img src={loginImg} alt="Login" width={400} className="rounded-2xl" />
                    </div>
                    {/* Form Section */}
                    <div className="flex items-center justify-center p-8">
                        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-center mb-8">
                                <div className="text-4xl font-bold text-primary mb-2">Welcome Back</div>
                                <p className="text-base-content/60">Sign in to your account</p>
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
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    className="input input-bordered focus:input-primary w-full" 
                                    placeholder="Enter your password" 
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-error text-sm mt-1">Password is required</span>}
                            </div>

                            <div className="text-right">
                                <Link to="#" className="text-primary hover:text-primary-focus text-sm">
                                    Forgot password?
                                </Link>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    <FaSignInAlt />
                                )}
                                {isLoading ? "Signing In..." : "Sign In"}
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
                                    to="/register" 
                                    className="btn btn-outline btn-sm flex-1"
                                >
                                    <FaUserPlus />
                                    Create Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
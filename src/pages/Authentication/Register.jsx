import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";




const Register = () => {
    const { createUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log('User Created: ', result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <h1 className="text-left mb-4 text-4xl font-semibold">Register User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email?.type === "required" && (<p>Email is required!</p>)}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: "Password Requried", minLength: { value: 4, message: "Minimun 4 characters required" } })} />
                    {errors.password && (<p>{errors.password.message}</p>)}
                    <div className="justify-items-start">
                        <p className="text-lg">Already have an account?  
                            <button className="link link-primary ml-4"><Link to='/login'>Login</Link></button>
                        </p>
                    </div>
                    <button className="btn btn-primary mt-4 w-1/2">Register</button>
                </fieldset>
            </form>
        </div>
    )
}



export default Register; 
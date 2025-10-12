import { useForm } from "react-hook-form";




const Login = () => {
    const { register, handleSubmit , formState: {errors}} = useForm();
    const onsubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h1 className="text-left mb-4 text-4xl font-semibold">Login</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register('email', {required:"Email is required!"})} />
                    {errors.email && <p role="alert">{errors.email.message}</p>}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register('password', {required: "Password required!", minLength: {value: 4, message: 'Password must contain minimum 4 characters.'}})} />
                    {errors.password && <p>{errors.password.message}</p>}
                    <div className=" text-left"><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 w-1/2">Login</button>
                </fieldset>
            </form>
        </div>
    )
}


export default Login; 
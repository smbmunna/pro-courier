import { useForm } from "react-hook-form";


const Register = () => {
    const {register, handleSubmit, formState:{errors}}= useForm(); 
    const onSubmit= (data)=>{console.log(data)}
    return (
        <div>
            <h1 className="text-left mb-4 text-4xl font-semibold">Register User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", {required:true})} />
                    {errors.email?.type==="required" && (<p>Email is required!</p>)}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", {required: "Password Requried", minLength: {value: 4, message:"Minimun 4 characters required"}})} />
                    {errors.password && (<p>{errors.password.message}</p>)}                    
                    <button className="btn btn-neutral mt-4 w-1/2">Register</button>
                </fieldset>
            </form>
        </div>
    )
}



export default Register; 
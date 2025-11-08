import { useForm } from "react-hook-form";


const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = () => {
        console.log('form submitted');
    }
    return (
        <div className="mb-8">
            <h1 className="m-4 text-left text-[#03373D] text-2xl font-semibold">Add Parcel</h1>
            <hr className="w-3/4 ml-4 text-gray-400" />
            <h2 className="m-4 text-left text-[#03373D] text-xl font-semibold">Enter your parcel details: </h2>

            {/* form section */}
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="flex ml-4 mb-8">
                    <input
                        type='radio'
                        value='document'
                        className="mr-2"
                    />
                    <span className="mr-8">Document</span>

                    <input type="radio"
                        value='non-document'
                        className="mx-2"
                    />
                    <span>Non-Document</span>
                </div>
                <div className="grid grid-cols-1 justify-items-start ml-4 md:grid-cols-2 gap-8">
                    <div className="w-full">
                        {/* parcel Name */}
                        <label className="block text-left my-2">Parcel Name</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full" type='text' placeholder="Parcel Name" />
                    </div>
                    <div className="w-full">
                        {/* parcel Weight */}
                        <label className="block text-left my-2">Parcel Weight (KG)</label>
                        <input className="border border-gray-300 rounded-md p-2 w-full" type='text' placeholder="Parcel Weight" />
                    </div>
                </div>
                <input className="btn mt-8" type='submit' />
            </form>

        </div>
    )
}

export default SendParcel; 
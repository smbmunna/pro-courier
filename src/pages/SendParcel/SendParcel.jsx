import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";


const SendParcel = () => {
    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        const createdBy = user.email;
        const creationDate = new Date().toISOString();
        //Tracking ID
        const generateTrackingId = () => {
            const prefix = 'TRK';
            const timestamp = Date.now().toString(36).toUpperCase();
            const random = Math.random().toString(36).substring(2, 8).toUpperCase();
            return `${prefix}-${timestamp}-${random}`;
        };
        const trackingId = generateTrackingId();
        // Output: "TRK-LX9K3Q8-4F2A9B"

        //costing Calculation
        let totalCost = 0;
        const isDoc = data.parcelType === 'document' ? true : false;
        const isSameCenter = data.senderCenter == data.rcvCenter ? true : false;
        const wghUpto3kg = data.parcelWeight <= 3 ? true : false;
        const extraWgh = data.parcelWeight - 3;
        //If document
        if (isDoc) {
            totalCost = isSameCenter ? 60 : 80;
        }
        //if non-document
        if (!isDoc) {
            if (wghUpto3kg) {
                totalCost = isSameCenter ? 110 : 150;
            }
            if (!wghUpto3kg) {
                totalCost = isSameCenter ? 110 + (40 * extraWgh) : 150 + (40 * extraWgh) + 40;
            }
        }

        const formData = { ...data, totalCost, createdBy, creationDate, trackingId };
        console.log(formData);
    }

    //watch 
    const parcelType = watch('parcelType');
    const senderRegion = watch('senderRegion');
    const rcvRegion = watch('rcvRegion');

    //load regions
    const serviceCenters = useLoaderData();
    const uniqueRegions = [...new Set(serviceCenters.map(center => center.region))];

    //load centers
    const getCenters = (region) => {
        const filteredServiceCenters = serviceCenters.filter(center => center.region === region);
        const centers = [...new Set(filteredServiceCenters.map(center => center.district))];
        return centers;
    }

    const senderCenters = getCenters(senderRegion);
    const rcvCenters = getCenters(rcvRegion);




    return (
        <div className="mb-8">
            <h1 className="m-4 text-left text-[#03373D] text-2xl font-semibold">Add Parcel</h1>
            <hr className="w-3/4 ml-4 text-gray-400" />
            <h2 className="m-4 text-left text-[#03373D] text-xl font-semibold">Enter your parcel details: </h2>

            {/* form section */}
            <form onSubmit={handleSubmit(formSubmit)} className="mx-8">
                <div className="flex ml-4 mb-8">
                    <input
                        type='radio'
                        value='document'
                        className="mr-2"
                        {...register('parcelType', { required: "Please select a parcel type!" })}
                    />
                    <span className="mr-8">Document</span>

                    <input type="radio"
                        value='non-document'
                        className="mx-2"
                        {...register('parcelType', { required: 'Please select a parcel type!' })}
                    />
                    <span>Non-Document</span>
                    <br />
                    <div>
                        {errors.parcelType && (
                            <p className="text-red-500 text-sm text-left ml-4">{errors.parcelType.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-items-start ml-4 md:grid-cols-2 gap-8">
                    <div className="w-full">
                        {/* parcel Name */}
                        <label className="block text-left my-2">Parcel Name</label>
                        <input
                            className="border border-gray-300 rounded-md p-2 w-full"
                            type='text'
                            placeholder="Parcel Name"
                            {...register('parcelName', { required: 'Parcel name is required!' })}
                        />
                        {errors.parcelName && (
                            <p className="text-red-500 text-sm mt-2">{errors.parcelName.message}</p>
                        )}
                    </div>
                    <div className="w-full">
                        {/* parcel Weight */}
                        <label className="block text-left my-2">Parcel Weight (KG)</label>
                        <input
                            className={`border border-gray-300 rounded-md p-2 w-full ${parcelType !== 'non-document' ? 'bg-gray-100' : ''}`}
                            type='text'
                            disabled={parcelType !== 'non-document'}
                            placeholder="Parcel Weight"
                            {...register('parcelWeight', {
                                required: parcelType === 'non-document' ? 'Parcel weight is required!' : false,
                                min: parcelType === 'non-document' ? { value: 0.01, message: 'Parcel weight must be greater than 0' } : undefined
                            })}
                        />
                        {errors.parcelWeight && (
                            <p className="text-red-500 text-sm mt-2">{errors.parcelWeight.message}</p>
                        )}
                    </div>
                </div>
                {/* Horizontal Divider */}
                <hr className="border-gray-400 my-6" />
                <div className="grid grid cols-1 md:grid-cols-2 gap-8">
                    {/* Sender details */}
                    <div className="w-full">
                        <h1 className="text-left text-[#03373D] text-lg font-semibold mb-2">Sender Details</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Sender Name</label>
                                <input
                                    {...register('senderName', { required: 'Sender name is required!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Sender Name" />
                                {errors.senderName && (
                                    <p className="text-red-500 text-sm mt-2">{errors.senderName.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Sender Region</label>
                                <select
                                    {...register('senderRegion')}
                                    className="border border-gray-300 rounded-md p-2 w-full">
                                    <option>Select Region</option>
                                    {
                                        uniqueRegions.map((region, idx) => <option key={idx} value={region}>{region}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    {...register('senderAddress', { required: 'Sender Address required!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Address" />
                                {errors.senderAddress && (
                                    <p className="text-red-500 text-sm mt-2">{errors.senderAddress.message}</p>

                                )}
                            </div>
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Sender Contact No.</label>
                                <input
                                    {...register('senderContact', { required: 'Sender contact no. needed!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Sender Contact No. " />
                                {errors.senderContact && (
                                    <p className="text-red-500 text-sm mt-2">{errors.senderContact.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">Sender Service Center</label>
                            <select
                                {...register('senderCenter')}
                                className="border border-gray-300 rounded-md p-2 w-full">
                                <option>Select Service Center</option>
                                {
                                    senderCenters.map((center, idx) => <option key={idx} value={center}>{center}</option>)
                                }
                            </select>
                        </div>
                        <div className="mb-4" >
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">Pickup Instruction</label>
                            <textarea
                                {...register('senderInstruction')}
                                className="border border-gray-300 rounded-md p-2 w-full"
                                type="textarea"
                                placeholder="Pickup Instruction" />
                        </div>
                    </div>
                    {/* Receiver details */}
                    <div className="w-full">
                        <h1 className="text-left text-[#03373D] text-lg font-semibold mb-2">Receiver Details</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Receiver Name</label>
                                <input
                                    {...register('rcvName', { required: 'Receiver name required!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Receiver Name" />
                                {errors?.rcvName && (
                                    <p className="text-red-500 text-sm mt-2">{errors?.rcvName?.message}</p>

                                )}
                            </div>
                            <div>
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Receiver Region</label>
                                <select
                                    {...register('rcvRegion')}
                                    className="border border-gray-300 rounded-md p-2 w-full">
                                    <option>Select Region</option>
                                    {
                                        uniqueRegions.map((region, idx) => <option value={region} key={idx}>{region}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Receiver Address</label>
                                <input
                                    {...register('rcvAddress', { required: 'Receiver address required!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Address" />
                                {errors.rcvAddress && (
                                    <p className="text-red-500 text-sm mt-2">{errors.rcvName.message}</p>

                                )}
                            </div>
                            <div >
                                <label className="block text-left text-sm font-medium text-gray-700 mb-2">Receiver Contact No.</label>
                                <input
                                    {...register('rcvContact', { required: 'Receiver contact needed!' })}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    placeholder="Receiver Contact No. " />
                                {errors.rcvContact && (
                                    <p className="text-red-500 text-sm mt-2">{errors.rcvContact.message}</p>

                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">Receiver Service Center</label>
                            <select
                                {...register('rcvCenter')}
                                className="border border-gray-300 rounded-md p-2 w-full">
                                <option>Select Service Center</option>
                                {
                                    rcvCenters.map((center, idx) => <option value={center} key={idx}>{center}</option>)
                                }
                            </select>
                        </div>
                        <div className="mb-4" >
                            <label className="block text-left text-sm font-medium text-gray-700 mb-2">Delivery Instruction</label>
                            <textarea
                                {...register('delInstruction')}
                                className="border border-gray-300 rounded-md p-2 w-full"
                                type="textarea"
                                placeholder="Delivery Instruction" />
                        </div>
                    </div>
                </div>
                <input className="btn mt-8" type='submit' />
            </form>

        </div>
    )
}

export default SendParcel; 
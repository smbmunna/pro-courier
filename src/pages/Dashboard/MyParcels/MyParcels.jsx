import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const fetchParcels = async () => {
        const response = await axiosSecure(`getParcels?=${user.email}`);
        return response.data;
    }

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: fetchParcels
    })

    //parse date :
    const parseDate = (date) => {
        return (new Date(date).toLocaleDateString());
    }

    // Delete parcel
    const handleDelete= async (id)=>{
        const res= await axiosSecure.delete(`parcel/${id}`); 
        refetch(); 
    }




    return (
        <div>
            <h1>My Parcels</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Name</th>
                            <th>Parcel Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Cost</th>
                            <th>Creation Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((par, idx) => <tr key={par._id}>
                                <th>{idx + 1}</th>
                                <td>{par.parcelName}</td>
                                <td>{par.parcelType}</td>
                                <td>{par.senderAddress}</td>
                                <td>{par.rcvAddress}</td>
                                <td>{par.totalCost}</td>
                                <td>{parseDate(par.creationDate)}</td>
                                <td><button onClick={()=>handleDelete(par._id)} className="btn btn-soft btn-xs btn-secondary">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyParcels; 
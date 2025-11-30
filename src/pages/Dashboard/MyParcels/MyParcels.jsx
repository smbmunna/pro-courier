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

    const { data: parcels = [] } = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: fetchParcels
    })

    //parse date :
    const parseDate= (date)=>{
        return (new Date(date).toLocaleDateString()); 
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map(par => <tr>
                                <th>1</th>
                                <td>{par.parcelName}</td>
                                <td>{par.parcelType}</td>
                                <td>{par.senderAddress}</td>
                                <td>{par.rcvAddress}</td>
                                <td>{par.totalCost}</td>
                                <td>{parseDate(par.creationDate)}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyParcels; 
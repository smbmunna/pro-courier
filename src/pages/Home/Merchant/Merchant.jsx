import img1 from '../../../assets/location-merchant.png'
import img2 from '../../../assets/be-a-merchant-bg.png'; 

//<div 
//   className="bg-cover bg-center bg-no-repeat" 
//   style={{ '--bg-image': `url(${img2})`, backgroundImage: 'var(--bg-image)' }}
// >

const Merchant=()=>{
    return (
        <div className="hero bg-[#03373D] py-16 max-w-6xl rounded-xl mx-auto pl-8   bg-cover bg-center bg-no-repeat mb-16"
           style={{ '--bg-image': `url(${img2})`, backgroundImage: 'var(--bg-image)' , backgroundSize: 'auto', backgroundPosition: 'top'}}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={img1}
                className="w-[500px]"
                />
                <div >
                    <h1 className="text-[40px] font-extrabold text-left lg:mr-[-130px]">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-left w-[516px]">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4'>
                        <button className="btn btn-primary rounded-3xl bg-[#CAEB66] text-black border-[#CAEB66] hover:bg-[#03373D] hover:text-[#CAEB66] text-lg">Become a Merchant</button>
                        <button className="btn btn-primary rounded-3xl bg-[#CAEB66] text-black border-[#CAEB66] hover:bg-[#03373D] hover:text-[#CAEB66] text-lg">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchant; 
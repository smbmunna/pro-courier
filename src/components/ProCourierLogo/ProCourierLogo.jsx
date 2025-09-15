import logo from '../../assets/logo.png'

const ProCourierLogo =()=>{
    return (
        <div className='mb-4'>
            <div className='flex items-end justify-center mb-2'>
                <img src={logo} alt="pro-courier-logo" />
                <p className='font-bold text-xl'>Pro Courier</p>
            </div>
            <p className='w-3/4 mx-auto'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
    )
}

export default ProCourierLogo; 
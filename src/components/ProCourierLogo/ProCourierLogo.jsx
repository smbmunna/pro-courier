import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const ProCourierLogo = () => {
    return (
        <Link to="/">
            <div className='mb-4'>
                <div className='flex items-end mb-2'>
                    <img src={logo} alt="pro-courier-logo" />
                    <p className='font-bold text-xl'>Pro Courier</p>
                </div>

            </div>
        </Link>
    )
}

export default ProCourierLogo; 
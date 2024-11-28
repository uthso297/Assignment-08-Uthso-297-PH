import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/3737258.jpg'
import PageTittle from '../PageTittle/PageTittle';
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-6xl mx-auto my-12' >
            <PageTittle title="ErrorPage | Gadget Heaven"></PageTittle>
            <img className='md:h-[611px] h-[400px] mx-auto' src={errorImg} alt="" />
            <div className='flex justify-center items-center'>
            <button onClick={() => navigate('/')} className="bg-gray-500 rounded-3xl px-6 py-2 text-xl font-bold text-white ">Go to Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;
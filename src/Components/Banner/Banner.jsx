import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="h-[611px] w-[50vw] rounded-lg border-2 p-4" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))' }}>
            <img className='h-full w-full rounded-lg' src={bannerImg} alt="" />
        </div>

    );
};

export default Banner;
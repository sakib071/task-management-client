import bannerImg from '../../../../public/banner.png'

const Banner = () => {
    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-neutral border-0 text-white bg-red-500">Let&apos;s Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
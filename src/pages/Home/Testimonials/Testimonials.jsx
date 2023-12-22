import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://task-manager-server-tawny.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="my-20">
            <div className='flex justify-center mx-auto'>
                <h3 className='text-3xl font-bold'>People who uses our website</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="text-center w-1/2 mx-auto p-5">
                            <Rating
                                className="mx-auto m-5 text-red-600"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h3 className="text-2xl text-red-600 font-semibold mb-2"> {review.name}</h3>
                            <p>{review.description}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
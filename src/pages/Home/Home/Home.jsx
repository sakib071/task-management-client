import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import TaskSection from "../TaskSection/TaskSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Manager | Home</title>
            </Helmet>
            <Banner></Banner>
            <TaskSection></TaskSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
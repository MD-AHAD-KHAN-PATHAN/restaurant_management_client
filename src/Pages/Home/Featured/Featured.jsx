import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {

    return (

        <div className="feature-item">

            <div className="pt-10">
                <SectionTitle heading="check it out" subHeading="from our menu"></SectionTitle>
            </div>

            <div className="flex justify-center items-center text-white gap-8 px-32 pb-20">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <p className="text-lg">November 15, 2023</p>
                    <p className="uppercase font-bold">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a, ex necessitatibus impedit eius placeat quisquam iure labore molestiae minus quibusdam velit quo excepturi quia cum nulla consectetur iusto exercitationem nam reiciendis hic fugiat similique. Soluta vero quasi temporibus repudiandae, magnam rerum alias quisquam reprehenderit nemo tempore iusto facilis dolor?</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">read more</button>
                </div>
            </div>

        </div>

    );
};

export default Featured;
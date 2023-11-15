

const SectionTitle = ({heading, subHeading}) => {

    return (

        <div className="text-center md:w-3/12 mx-auto my-10">
            <p className="text-yellow-600 mb-2">--- {heading} ---</p>
            <h2 className="text-3xl uppercase border-y-4 py-4 font-semibold text-white">{subHeading}</h2>
        </div>

    );
};

export default SectionTitle;
const Expert = ({ expert }) => {
    console.log(expert);

    const { title, cover_image, profile_image, author } = expert || {};

    return (
        <div className="mx-auto cursor-pointer ">
            <div className="w-[350px] group overflow-hidden ring-2 relative rounded-md">
                <div>
                    <img className="rounded-md group-hover:scale-[1.05] transition-all z-10 relative" src={cover_image} alt="" />
                </div>
                <div>
                    <img className="rounded-full w-[100px] h-[100px] mx-auto mt-[-50px] z-20 relative" src={profile_image} alt="" />
                </div>
                <div>
                    <h1 className="text-center text-[20px] font-bold pb-10">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Expert;

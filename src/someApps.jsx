import { MdOutlineFileDownload } from "react-icons/md";
import { CiStar } from "react-icons/ci";


const SomeApps = ({singleApp}) => {
    console.log(singleApp)
    return (
        <div>
           <div className="p-4 shadow-2xl w-[340px] h-[430px] mx-auto rounded-xl">
            <img className="h-[310px] w-[310px]" src={singleApp.image} alt={singleApp.title} />
            <br />
            <h5 className="font-semibold text-xl">{singleApp.title}</h5>
            <div className="flex">
                <p className="flex items-center text-green-700 gap-1 bg-green-200 p-1 rounded-sm"><MdOutlineFileDownload /> {singleApp.downloads}</p>
                <p className="flex items-center text-green-700 gap-1 bg-amber-200 p-1 rounded-sm"><CiStar /> {singleApp.downloads}</p>
            </div>
           </div>
        </div>
    );
};

export default SomeApps;
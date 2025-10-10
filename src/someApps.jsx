import { MdOutlineFileDownload } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";


const SomeApps = ({singleApp}) => {
    
    return (
        <div>
           <Link to={`/appDetails/${singleApp.id}`}>
           <div className="p-4 shadow-2xl w-[340px] h-[430px] mx-auto rounded-xl">
            <img className="h-[310px] w-[310px]" src={singleApp.image} alt={singleApp.title} />
            <br />
            <h5 className="font-semibold text-xl">{singleApp.title}</h5>
            <div className="flex justify-between">
                <p className="flex items-center text-green-700 gap-1 bg-green-200 p-1 rounded-sm"><MdOutlineFileDownload /> {singleApp.downloads}</p>
                <p className="flex items-center text-green-700 gap-1 bg-amber-200 p-1 rounded-sm"><CiStar /> {singleApp.downloads}</p>
            </div>
           </div>
           </Link>
        </div>
    );
};

export default SomeApps;
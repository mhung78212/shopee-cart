import Image from "next/image";
import Loader from "../../assets/loader.svg";
const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <Image src={Loader} alt="" priority={true}/>
        </div>
    );
};

export default Loading;

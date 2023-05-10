import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, [backToTop]);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            className={`back-to-top ${backToTop ? "show" : ""}`}
            onClick={scrollUp}
        >
            <AiOutlineArrowUp className="icon-center text-[20px]" />
        </button>
    );
};

export default BackToTop;

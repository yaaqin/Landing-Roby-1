import { BannerIcon } from "../../../Footer/icon";

export default function Banner() {
    return (
        <div className="relative mt-[14px]">
            <img alt="banner" src="./assets/banner1.png" className="z-10 w-full h-auto"></img>
            <div className="w-full h-[400px] z-0 bg-[#fff] mt-[-400px]"></div>
            <div className="flex justify-center items-center w-[110px] h-[110px] rounded-full absolute bg-[#686D76] left-1/2 transform -translate-x-1/2 mt-[-55px] z-20">
            <BannerIcon/>
            </div>
        </div>

    )
}

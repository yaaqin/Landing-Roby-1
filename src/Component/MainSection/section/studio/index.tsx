import { TopRightIcon } from "../../../Footer/icon";

export default function Studio() {
  return (
    <div className="mt-[96px]">
      <head className="flex gap-[25px] items-center">
        <hr className="border-[3px] border-[#fff] w-[322px]"></hr>
        <h2 className="text-[40px] font-semibold">Leading Architectural Design Studio</h2>
      </head>
      <section className="flex justify-between mt-[60px]">
        <div className="w-[550px]">
            <h5 className="text-[40px] font-semibold">Studio</h5>
            <p className="text-[16px] font-medium">Ernesto Bedmar Architects is a Singapore based architectural practice established in 2015, specialising in a wide range of architectural, conservation, landscape and interior designs.<br/><br/>Since its inception, it has always maintained a compact staff of multicultural personalities, designers with a singular desire to explore the relationships of buildings to nature with a particular emphasis on quality design and execution of its diversified portfolio.<br/><br/>The directors, Mr Ernesto Bedmar and Mr Iylia Zakaria, personally liaise and direct each of the company’s projects.<br/><br/>Its portfolio includes works from all over Asia and many parts of the world.</p>
            <button className="bg-[#373A40] rounded-full flex items-center gap-[10px] px-[20px] py-[15px] mt-[39px]">
                <p className="font-semibold text-[20px]">View Detail</p>
                <TopRightIcon/>
            </button>
        </div>
        <img src="./assets/studio.png" alt="studio"></img>
      </section>
    </div>
  )
}

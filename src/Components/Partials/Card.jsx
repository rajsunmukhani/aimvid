import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="w-full flex-wrap gap-5 h-screen px-10 py-24 flex justify-center">
    <Link to={'/updatemodule'} className="card cursor-pointer border shadow-lg h-[60%] rounded-lg w-[45%] flex overflow-hidden duration-200 hover:scale-105">
        <div className="card-right h-full w-[40%] flex flex-col gap-5 items-center justify-center">
          <div className="bg-yellow-200 h-48 w-48 rounded-md"></div>
        </div>
        <div className="card-left flex flex-col gap-5 h-full p-5 w-[60%]">
          <h1 className="font-semibold text-[#0023FF] text-2xl">Heading</h1>
          <p className="text-zinc-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi, magni aperiam maiores dignissimos sequi dolorem! Animi nesciunt nobis non dignissimos ducimus ipsa, vero corrupti deleniti! Eum sit non rem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia rem voluptas, sapiente doloribus, est quidem in ipsa ad deserunt, iste quo laborum adipisci laboriosam.</p>
        </div>
    </Link>
    </div>
  )
}

export default Card
import { FC } from "react"

interface Component {
    color:string
}

const Dot:FC<Component> = ({color = "#1c1c1c"}) => {
    console.log("color", color)
  return (
    <div className="w-4 h-4 flex justify-center items-center">

        <div className={`rounded-full w-[6px] h-[6px]`} style={{background:color}}>
        </div>
    </div>
  )
}

export default Dot

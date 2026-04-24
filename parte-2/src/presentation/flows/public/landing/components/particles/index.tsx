import { Fragment } from "react";

export function Particles() {
  return(
    <Fragment>
        <div
					className="float-particle w-1 h-1 top-[80%] left-[10%] opacity-20 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "0s" }}
				/>
				<div
					className="float-particle w-2 h-2 top-[60%] left-[80%] opacity-10 blur-[2px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="float-particle w-1.5 h-1.5 top-[90%] left-[40%] opacity-15 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "5s" }}
				/>
				<div
					className="float-particle w-1 h-1 top-[30%] left-[70%] opacity-10 absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "7s" }}
				/>
				<div
					className="float-particle w-1.5 h-1.5 top-[50%] left-[15%] opacity-25 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "4s" }}
				/>
    </Fragment>
  )
}
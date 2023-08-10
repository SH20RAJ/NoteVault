import React from "react";
import Button from "./Button";
import Image from "next/image";
import iconic from "public/images/kybernetwork.svg";
import features from "@/data";
import Comment from "@/components/Comment";
// import Home from "@/app/page";

const Hero = () => {
	return (
		<main className="container px-8 gap-3 py-24 text-white flex flex-col">
			<div>

				<h1 className="text-center text-wrap-balance text-heading sm:leading-[64px] leading-9 font-poppins font-semibold">
					A Simple way to
				</h1>
				<h1 className="text-center text-wrap-balance text-heading sm:leading-[64px] leading-9 font-poppins font-semibold">
					create{" "}
					<span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
						Notes
					</span>
				</h1>
				
			</div>
			<p className="text-xs sm:text-sm md:text-base text-center tracking-wide text-text-100 font-medium">
				Capture, Create, Connect: Your Personal Note-Making Journey
			</p>
			<div className="flex justify-center">

			<div className="flex gap-4 my-4 md:my-9 justify-center">
				<Button>Make Notes</Button>
				<Button type="glory">Join Us</Button>
			</div>
			</div>
			<br></br>
			<div className="flex justify-center">

			<h1 className="font-['Poppins'] flex items-center text-7xl sm:text-9xl font-[900]">NoteVault</h1>
			</div>
			<br></br>
			<div className="flex m-[8rem]">
				<div className="font-['Poppins'] font-[600]  text-[2.16rem] ">Why <span className="text-[#E40000]">NoteVault</span>?</div>
			</div>
			<div className="flex mt-0 m-[8rem]">
				<div className="flex gap-4">
					<span className="bg-[#E40000] text-[#E40000]" w-5 h-4> .</span>
					<Image src={iconic} width={25} height={30}  alt="pichur"/> 
					
					
				</div>
			</div>
		</main>
	);
};

export default Hero;
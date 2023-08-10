import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import React from "react";
import Footer from "./Footer.jsx";

const Notes = ({ params }) => {
	return (
		<div className="font-handlee flex text-text-100 flex-col gap-8 sm:p-8 w-full">

			<div className='flex flex-row-reverse gap-4'>
				
				<Button >
					Help
				</Button>
				<Button>
					Save
				</Button>
			</div>

			<input
				type="text"
				autoFocus
				placeholder="Your Notes"
				defaultValue={
					decodeURI(params.note)
				}
				className="text-2xl border-none px =  underline md:text-4xl font-bold block w-full rounded-md px-3.5 py-2 text-text-100 sm:text-sm sm:leading-6 bg-transparent focus:ring-0 border-0 focus:border-2 focus:border-white"
				maxLength={100}
				minLength={3}
				required
			/>

			<Textarea />
			<Footer></Footer>
		</div>
	);
};

export default Notes;

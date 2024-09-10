import React, { useState } from "react";
import { platformBg } from "../../../assets";
import { Footer } from "../../../components";

const faqs = [
	{
		question: "Is VIG safe?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
	{
		question: "Who controls my wallet keys?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
	{
		question: "Can I switch from another wallet?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
	{
		question: "Can I trade crypto within the wallet?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
	{
		question: "Are there any fees associated with the wallet?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
	{
		question:
			"If Family ever stopped existing, would I lose access to my wallet?",
		answer:
			"Yes, Family is safe. Your private keys are encrypted and stored locally on your device. This means that only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
	},
];

export default function Faqs() {
	return (
		<div className="PlatformPage bg-black relative">
			{/* bg image */}
			<div
				style={{
					backgroundImage: `url(${platformBg})`,
				}}
				className="h-[500px]
				bg-no-repeat bg-center bg-cover
				absolute top-0 left-0 w-full z-0
				"
			/>

			{/* content */}
			<div className="z-10 w-full md:max-w-[750px] mx-auto max-md:px-8 pt-32">
				{/* main text */}
				<h1 className="text-5xl font-light text-white  hover:opacity-80">
					FAQs
				</h1>

				{/* cards */}
				<div className="flex flex-col mb-20 mt-12">
					{faqs?.map(({ question, answer }, index) => (
						<Card key={index} question={question} answer={answer} />
					))}
				</div>
			</div>

			{/* footer */}
			<Footer faq />
		</div>
	);
}

function Card({ question, answer }) {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div
			className="w-full 
			my-8 
            flex flex-col 
            z-10
            text-white 
			"
		>
			{/* heading */}
			<h1
				className=" text-lg !cursor-pointer"
				onClick={() => setShowAnswer(!showAnswer)}
			>
				{question}
			</h1>

			{/* button */}
			<div className="flex items-center mb-6">
				<div className="h-[1px] bg-[#FF003C] flex-1 mr-2" />
				<button
					className="hover:opacity-80 duration-300 ease-in-out"
					onClick={() => setShowAnswer(!showAnswer)}
				>
					{showAnswer ? (
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M33.0296 0L42 8.97042V42H8.96972L0 33.0303V0H33.0296Z"
								fill="#FF003C"
							/>
							<path
								d="M16.0503 16.0503L25.9498 25.9497M16.0503 25.9497L25.9498 16.0503"
								stroke="black"
								strokeLinecap="square"
							/>
						</svg>
					) : (
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M33.0296 0L42 8.97042V42H8.96972L0 33.0303V0H33.0296Z"
								fill="#141414"
							/>
							<path
								d="M21 14V28M14 21H28"
								stroke="white"
								strokeLinecap="square"
							/>
						</svg>
					)}
				</button>
			</div>

			<p
				className={`${
					showAnswer ? " h-auto opacity-75" : " h-0 opacity-0"
				} duration-300 ease-in-out overflow-hidden`}
			>
				{answer}
			</p>
		</div>
	);
}

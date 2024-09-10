import React from "react";
import {
	platformBg,
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
} from "../../assets";
import { Footer, Plus } from "../../components";

const content = [
	{
		icon: _1,
		heading: "Dynamic Leverage System",
		description:
			"Harness the power of amplified stakes. Depending on your risk appetite and market assessment, opt for a leverage multiplier that suits your strategy, from 2x up to 13x.",
	},
	{
		icon: _2,
		heading: "Real-time Liquidation Alerts",
		description:
			"Stay ahead of the game with instant notifications. Should your leveraged bet approach its liquidation point due to odds shifts, our system will alert you in real-time, ensuring you're never caught off guard.",
	},
	{
		icon: _3,
		heading: "Adaptive Premium Mechanism",
		description:
			"Depending on your risk appetite and market assessment, opt for a leverage multiplier that suits your strategy, from 2x up to 13x.",
	},
	{
		icon: _4,
		heading: "Comprehensive Odds Analysis",
		description:
			"Stay ahead of the game with instant notifications. Should your leveraged bet approach its liquidation point due to odds shifts, our system will alert you in real-time, ensuring you're never caught off guard.",
	},
	{
		icon: _5,
		heading: "User-friendly Dashboard",
		description:
			"Track your bets, monitor liquidation points, and manage your portfolio through our intuitive user interface. Designed for both novices and experts alike.",
	},
	{
		icon: _6,
		heading: "Education Hub",
		description:
			"New to leveraged sports betting? Our educational hub offers a wealth of resources from introductory guides to advanced strategies, ensuring every user can bet with confidence.",
	},
	{
		icon: _7,
		heading: "Secure and Transparent Transactions",
		description:
			"With state-of-the-art encryption and blockchain-backed transactions, trust that your investments are safe. Plus, with our public ledger, you can validate the fairness of every bet.",
	},
	{
		icon: _8,
		heading: "Instant Liquidation & Payouts",
		description:
			"In the fast-paced world of sports, waiting isn't an option. With Vig, enjoy the industry's fastest liquidation processes and payout systems, ensuring your earnings are in your hands without delay.",
	},
	{
		icon: _9,
		heading: " Community Engagement Tools",
		description:
			"Engage with fellow bettors, share strategies, and discuss game analytics in our community forums. Participate in community polls, prediction contests, and more.",
	},
	{
		icon: _10,
		heading: "24/7 Customer Support",
		description:
			"Our dedicated support team is always ready to assist you. Whether you have platform-specific queries or need insights into the betting world, we’re here to help round the clock.",
	},
];

export default function Platform() {
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
			<div className="z-10 px-8 xl:px-16 pt-32">
				{/* main text */}
				<h1 className=" text-5xl font-light text-white cursor-default hover:opacity-80">
					Platform Solutions
				</h1>

				{/* cards */}
				<div className="flex flex-wrap justify-between mb-20 mt-28">
					{content?.map(({ icon, heading, description }, index) => (
						<div
							key={index}
							className="w-full md:w-[48%] 
                            md:px-4 py-8 
                            flex flex-col 
                            z-10
                             text-white cursor-default
                            "
						>
							<img src={icon} alt={`${index}+img`} className="h-16 w-16" />

							<Plus className={"stroke-white mt-8"} />

							<h1 className="text-xl mt-2 font-light cursor-default">
								{heading}
							</h1>

							<div className="h-[1px] bg-white w-full z-50 opacity-10 mt-4 mb-8" />

							<p className="opacity-75">{description}</p>
						</div>
					))}
				</div>
			</div>
			{/* footer */}
			<Footer platform />
		</div>
	);
}

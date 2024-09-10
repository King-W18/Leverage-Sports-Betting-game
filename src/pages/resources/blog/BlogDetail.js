import React from "react";
import { platformBg, blogBg } from "../../../assets";
import { Footer } from "../../../components";
import { useNavigate } from "react-router-dom";

export default function BlogDetail() {
	const navigate = useNavigate();
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
			<div className="z-10 px-8 xl:px-16 pt-32 relative">
				{/* back btn */}
				<button
					className="lg:absolute top-0 left-0
                    lg:mx-8 xl:mx-16 lg:mt-32 max-lg:mb-10
                    "
					onClick={() => navigate("/resources/blog")}
				>
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
							d="M28 21L14 21M14 21L21 28M14 21L21 14"
							stroke="black"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* blog */}
				<div
					className="w-full lg:max-w-[790px] md:mx-auto z-10
                            flex flex-col text-white
                            "
				>
					<h1 className="text-5xl font-light">The Merge</h1>
					<h1 className="mt-1 text-[#FF003C]">{"/// 15 Sep, 2022 / News"}</h1>

					<p className="opacity-75 flex-1 mt-8 z-10">
						The Merge is finally here. While the Ethereum community celebrates
						the coming of the Merge, some people are still wondering how we got
						here, what the Merge actually is, and what it all means for the
						future of Ethereum. Let's jump right in.
					</p>

					<h1 className="mt-16 z-10 text-lg  font-light">
						How did we get here?
					</h1>
					<p className="opacity-75 mt-8 z-10">
						To understand The Merge, we first need to know a bit about how
						Ethereum works. Ethereum consists of two different layers; a
						consensus layer and an execution layer, and is made up of a
						distributed network of computers (or nodes). These nodes come to an
						agreement about the state of the blockchain, and agree on any new
						blocks that are proposed. This agreement process is known as a
						consensus mechanism, and occurs on the consensus layer. The
						execution layer is responsible for handling the state of the
						network, including transactions, contracts and balances. In short,
						the execution layer handles all of the changes that happen on the
						network, while the consensus layer handles the agreement between
						nodes about those changes.
					</p>

					<div className="w-full h-[420px] overflow-hidden mt-16">
						<img
							src={blogBg}
							alt="blog-img"
							className="w-full h-full object-cover"
						/>
					</div>

					<h1 className="mt-16 font-light text-lg">What is The Merge?</h1>
					<p className="opacity-75 mt-8 mb-20">
						The transition from PoW to PoS has been planned since Ethereum's
						launch, with preparation beginning in 2015. After much research, the
						Ethereum developers launched a PoS chain in parallel to the existing
						Ethereum chain, with its sole purpose being a PoS layer that can be
						tested and later used as part of The Merge.
					</p>
				</div>
			</div>

			{/* footer */}
			<Footer platform />
		</div>
	);
}

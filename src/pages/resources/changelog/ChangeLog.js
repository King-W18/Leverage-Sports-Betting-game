import React from "react";
import { changeBg, platformBg } from "../../../assets";
import { Footer } from "../../../components";

const changes = [
	{
		id: "change-1",
		date: "10 Aug 2023",
		name: "ConnectKit Update 1.5.1",
		type: "ConnectKit",
		version: "1.5.1",
		description:
			"This update improves how ConnectKit handles multiple injected wallets.",
	},
	{
		id: "change-2",
		date: "19 July, 2023",
		name: "ConnectKit Update 1.5.0",
		type: "ConnectKit",
		version: "1.5.0",
		description:
			"This update improves how ConnectKit handles multiple injected wallets.",
	},
];

export default function ChangeLog() {
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
				{/* top */}
				<div className="flex max-md:flex-col md:items-center justify-between w-full ">
					{/* main text */}
					<div>
						<h1 className="text-5xl font-light text-white hover:opacity-80">
							Changelog
						</h1>

						<p className="text-[#FF003C] pt-2">
							{"/// The latest updates from VIG"}
						</p>
					</div>
				</div>

				{/* changes */}
				<div className="flex flex-col my-16">
					{changes?.map(
						({ id, name, date, type, version, description }, index) => (
							<div
								key={index}
								className="w-full py-4 max-md:mb-10 mb-5 z-10
                                flex text-white 
                                "
							>
								{/* date */}
								<h1 className="max-md:hidden pb-3 md:w-[20%]">{date}</h1>

								{/* Line */}
								<div className="flex flex-col items-center">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect x="8" y="8" width="8" height="8" fill="#FF003C" />
										<rect
											x="0.5"
											y="0.5"
											width="23"
											height="23"
											stroke="#FF003C"
											strokeOpacity="0.5"
										/>
									</svg>

									<div className="h-full w-[1px] bg-[#FF003C] mt-2" />
								</div>

								{/* content */}
								<div className="flex flex-col flex-1 pl-6 md:pl-28">
									{/* date */}
									<h1 className="md:hidden pb-8">{date}</h1>

									<h1 className="text-sm text-[#FF003C] md:pb-3">
										{"/// "}
										{type}
									</h1>

									{/* img */}
									<div className="h-[430px] w-full relative">
										<img
											src={changeBg}
											alt="chnage-img"
											className="h-full w-full "
										/>

										<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
											<h1 className="text-3xl md:text-5xl pb-3 font-light">
												CHANGELOG
											</h1>
											<h1 className="md:text-xl opacity-50 font-light">
												VERSION {version}
											</h1>
										</div>
									</div>

									<h1 className="text-lg md:text-xl mt-16 font-light">
										{name}
									</h1>

									<p className="opacity-75 !normal-case mt-4">{description}</p>

									<button
										className="bg-[#FF003C] flex items-center justify-center text-black p-2 w-fit
										hover:bg-white duration-300 ease-in-out mt-4
										"
										onClick={() => {}}
									>
										More&nbsp;
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4 12H20M20 12L14 6M20 12L14 18"
												stroke="black"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						)
					)}
				</div>
			</div>
			{/* footer */}
			<Footer platform />
		</div>
	);
}

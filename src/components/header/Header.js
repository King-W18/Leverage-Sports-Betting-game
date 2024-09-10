import React, { useState } from "react";
import { ConnectWallet, ConnectedWallet, Logo, Plus } from "../index";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectWallet, hide, show } from "../../features/WalletSlice";
import { avatar } from "../../assets";

export default function Header() {
	const dispatch = useDispatch();
	const { wallet, showWallet } = useSelector(selectWallet);

	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [showNav, setShowNav] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const handleToggleWallet = () => {
		setShowNav(!showNav);
		dispatch(hide());
		setShowDropdown(false);
	};

	// handle wallet connection
	const handleWallet = () => {
		if (showWallet) {
			dispatch(hide());
			return;
		}

		dispatch(show());
	};

	// handle button click
	const handleButtonClick = (path) => {
		navigate(path);
		setShowNav(false);
		setShowDropdown(false);
	};

	// styles
	const buttonStyles =
		"max-lg:py-4 py-1.5 px-5 max-lg:text-left hover:bg-white hover:bg-opacity-30 hover:text-black duration-300 ease-in-out";
	const activeStyles = " !bg-white !text-black";
	const dividerStyles = "bg-white max-lg:h-[1px] lg:w-[1px]";

	return (
		<div
			className={`Header 
            text-white font-medium
            py-7 px-8 xl:px-16
            flex max-lg:flex-col items-center justify-between
            absolute top-0 left-0 w-full 
			${showNav ? "max-lg:!fixed max-lg:h-full max-lg:bg-black" : "max-lg:h-24"}  
            z-30 max-lg:overflow-hidden
			duration-300 ease-in-out
            `}
		>
			{/* logo & toggle */}
			<div
				className="max-lg:w-full 
                max-lg:flex max-lg:items-center max-lg:justify-between "
			>
				<Logo className="xl:w-44" onClick={() => handleButtonClick("/")} />

				<button className="lg:hidden" onClick={() => handleToggleWallet()}>
					<svg
						width="42"
						height="42"
						viewBox="0 0 42 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						{!showNav ? (
							<>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M33.0296 0L42 8.97042V42H8.96972L0 33.0303V0H33.0296Z"
									fill="#FF003C"
								/>
								<g clipPath="url(#clip0_303_6136)">
									<path
										d="M13 15H29"
										stroke="black"
										strokeLinecap="square"
										strokeLinejoin="round"
									/>
									<path
										d="M13 21H29"
										stroke="black"
										strokeLinecap="square"
										strokeLinejoin="round"
									/>
									<path
										d="M13 27H29"
										stroke="black"
										strokeLinecap="square"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_303_6136">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(9 9)"
										/>
									</clipPath>
								</defs>
							</>
						) : (
							<>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M33.0296 0L42 8.97042V42H8.96972L0 33.0303V0H33.0296Z"
									fill="#FF003C"
								/>
								<path
									d="M27 15L15 27M15 15L27 27"
									stroke="black"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</>
						)}
					</svg>
				</button>
			</div>

			{/* navbar */}
			<div
				className="flex items-center
                max-lg:w-full max-lg:mt-10
                "
			>
				<Plus className="max-lg:hidden stroke-white" />

				<div
					className="flex max-lg:flex-col
                    max-lg:w-full
                    border border-white
                    lg:mx-4
                    "
				>
					<button
						className={
							pathname === "/" ? buttonStyles + activeStyles : buttonStyles
						}
						onClick={() => handleButtonClick("/")}
					>
						Home
					</button>
					<div className={dividerStyles} />

					<button
						className={
							pathname === "/platform-solutions"
								? buttonStyles + activeStyles
								: buttonStyles
						}
						onClick={() => handleButtonClick("/platform-solutions")}
					>
						Platform Solutions
					</button>
					<div className={dividerStyles} />

					<div className="relative max-lg:w-full">
						<button
							className={
								pathname === "/resources/faq" ||
								pathname === "/resources/blog" ||
								pathname.includes("/resources/blog/") ||
								pathname === "/resources/changelog"
									? buttonStyles +
									  " w-full flex items-center stroke-black " +
									  activeStyles
									: buttonStyles +
									  " w-full flex items-center stroke-white hover:stroke-black "
							}
							onClick={() => setShowDropdown(!showDropdown)}
						>
							Resources
							<span className="ml-3">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="stroke-inherit"
										d="M4 6L8 10L12 6"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="square"
									/>
								</svg>
							</span>
						</button>
						{/* dropdown */}
						<div
							className={`bg-black w-full 
							flex flex-col items-stretch
							duration-300 ease-in-out
							overflow-hidden
							${showDropdown ? "max-lg:h-[170px] lg:h-28" : "h-0"}
							lg:absolute lg:top-full lg:left-0
							lg:bg-opacity-50							
							`}
						>
							<button
								className={
									pathname === "/resources/faq"
										? buttonStyles + activeStyles
										: buttonStyles
								}
								onClick={() => handleButtonClick("/resources/faq")}
							>
								FAQs
							</button>

							<button
								className={
									pathname === "/resources/blog"
										? buttonStyles + activeStyles
										: buttonStyles
								}
								onClick={() => handleButtonClick("/resources/blog")}
							>
								BLOG
							</button>

							<button
								className={
									pathname === "/resources/changelog"
										? buttonStyles + activeStyles
										: buttonStyles
								}
								onClick={() => handleButtonClick("/resources/changelog")}
							>
								CHANGELOG
							</button>
						</div>
					</div>

					<div className={dividerStyles} />

					<button
						className={
							pathname === "/contact"
								? buttonStyles + activeStyles
								: buttonStyles
						}
						onClick={() => handleButtonClick("/contact")}
					>
						Contact
					</button>
				</div>

				<Plus className="max-lg:hidden stroke-white" />
			</div>

			{/* wallet button */}
			{!wallet ? (
				<ConnectWallet onClick={() => handleWallet()} />
			) : (
				<ConnectedWallet
					avatar={avatar}
					wallet={wallet}
					onClick={() => handleWallet()}
				/>
			)}

			{/* social icons */}
			<div className="w-full flex items-center justify-between mt-5 lg:hidden">
				<h1 className="text-lg font-light">© 2023 VIG</h1>

				{/* fb */}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="ml-auto"
				>
					<path
						d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z"
						fill="white"
					/>
				</svg>

				{/* linkedin */}
				<svg
					className="mx-2"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
						fill="white"
					/>
				</svg>

				{/* discord */}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18.9308 5.64149C17.6561 5.05658 16.2892 4.62565 14.8599 4.37884C14.8339 4.37408 14.8079 4.38598 14.7945 4.40979C14.6187 4.72247 14.4239 5.13039 14.2876 5.45101C12.7503 5.22087 11.221 5.22087 9.71527 5.45101C9.57887 5.12326 9.37707 4.72247 9.20048 4.40979C9.18707 4.38678 9.16107 4.37487 9.13504 4.37884C7.70659 4.62487 6.33963 5.0558 5.06411 5.64149C5.05307 5.64625 5.04361 5.65419 5.03732 5.6645C2.44449 9.53813 1.73421 13.3166 2.08265 17.0481C2.08423 17.0664 2.09447 17.0839 2.10867 17.095C3.81934 18.3512 5.47642 19.1139 7.10273 19.6194C7.12876 19.6274 7.15634 19.6179 7.1729 19.5964C7.55761 19.0711 7.90054 18.5171 8.19456 17.9346C8.21192 17.9005 8.19535 17.86 8.15989 17.8465C7.61594 17.6402 7.098 17.3886 6.59977 17.1029C6.56037 17.0799 6.55721 17.0235 6.59347 16.9965C6.69831 16.918 6.80318 16.8362 6.9033 16.7537C6.92141 16.7386 6.94665 16.7354 6.96794 16.745C10.2411 18.2393 13.7846 18.2393 17.0191 16.745C17.0404 16.7346 17.0657 16.7378 17.0846 16.7529C17.1847 16.8354 17.2895 16.918 17.3952 16.9965C17.4314 17.0235 17.4291 17.0799 17.3897 17.1029C16.8914 17.3941 16.3735 17.6402 15.8288 17.8457C15.7933 17.8592 15.7775 17.9005 15.7949 17.9346C16.0952 18.5163 16.4381 19.0702 16.8157 19.5956C16.8315 19.6179 16.8599 19.6274 16.8859 19.6194C18.5201 19.1139 20.1772 18.3512 21.8879 17.095C21.9028 17.0839 21.9123 17.0672 21.9139 17.0489C22.3309 12.7348 21.2154 8.98737 18.9568 5.66529C18.9513 5.65419 18.9419 5.64625 18.9308 5.64149ZM8.68335 14.776C7.69792 14.776 6.88594 13.8713 6.88594 12.7602C6.88594 11.6491 7.68217 10.7444 8.68335 10.7444C9.69239 10.7444 10.4965 11.6571 10.4807 12.7602C10.4807 13.8713 9.68451 14.776 8.68335 14.776ZM15.329 14.776C14.3435 14.776 13.5316 13.8713 13.5316 12.7602C13.5316 11.6491 14.3278 10.7444 15.329 10.7444C16.338 10.7444 17.1421 11.6571 17.1264 12.7602C17.1264 13.8713 16.338 14.776 15.329 14.776Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
	);
}

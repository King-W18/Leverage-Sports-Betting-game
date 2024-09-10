import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWallet, hide, add, remove } from "../../features/WalletSlice";
import Plus from "../plus/Plus";
import { avatar } from "../../assets";
import Logo from "../logo/Logo";

// styles
const tabStyle =
	"text-white text-opacity-50 hover:text-opacity-100 duration-100 ease-in-out w-fit py-1 text-sm";
const activeTabStyle = " !text-opacity-100 border-b border-white";

export default function Wallet() {
	const dispatch = useDispatch();
	const { wallet, showWallet } = useSelector(selectWallet);
	const [tab, setTab] = useState("tokens");

	// handle wallet connect
	const handleConnect = () => {
		dispatch(add("0x563...4745"));
	};

	// handle wallet logout
	const handleLogout = () => {
		dispatch(remove());
	};

	// handle wallet close
	const handleClose = () => {
		dispatch(hide());
	};

	return (
		<>
			{/* backdrop */}
			<div
				className={`fixed top-0 left-0 
				h-screen w-full
				bg-black bg-opacity-20
				z-40 duration-300 ease-in-out
				${!showWallet && " !h-0 !w-0 overflow-hidden"}
				`}
			/>

			{/* wallet */}
			<div
				className={`
                fixed top-0 right-0 z-50
                h-screen max-md:w-full md:min-w-[500px] 
                flex duration-300 ease-in-out
                ${!showWallet && " !right-[-900px] overflow-hidden"}
                `}
			>
				{/* md: close button */}
				<div
					className="h-full bg-[#0C0C0CE5] pt-4 px-1
                        hover:bg-[#262626E5] cursor-pointer max-md:hidden overflow-hidden
                        "
					onClick={() => handleClose()}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 17L11 12L6 7M13 17L18 12L13 7"
							stroke="white"
							strokeLinecap="square"
						/>
					</svg>
				</div>

				{/* content */}
				<div className="flex-1 bg-black md:bg-[#1D1D1D]">
					{/* max-md:logo and close btn */}
					<div className="w-full pt-7 pb-2 px-6 flex items-center justify-between bg-[#141414] md:hidden">
						<Logo className="xl:w-44" />

						<button className="lg:hidden" onClick={() => handleClose()}>
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
									d="M27 15L15 27M15 15L27 27"
									stroke="black"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>

					<div className="py-4 px-6 md:pr-10">
						{/* close button */}
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="md:hidden mb-8 cursor-pointer hover:opacity-80"
							onClick={() => handleClose()}
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M33.0296 0L42 8.97042V42H8.96972L0 33.0303V0H33.0296Z"
								fill="#141414"
							/>
							<path
								d="M28 21L14 21M14 21L21 28M14 21L21 14"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						{!wallet ? (
							<>
								{/* heaading */}
								<h1 className="text-white text-lg font-light">
									Connect a wallet
								</h1>

								{/* btns */}
								<div
									className="flex flex-col mt-4
									w-full md:w-[400px]
									"
								>
									{/* metamask */}
									<button
										className="flex items-center 
										mb-2 bg-[#F2EFF1] 
										hover:opacity-80 duration-300 ease-in-out
										"
										onClick={() => handleConnect()}
									>
										<svg
											width="52"
											height="52"
											viewBox="0 0 52 52"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_112_12874)">
												<path d="M52 0H0V52H52V0Z" fill="#E2E2E2" />
												<path
													d="M42.494 8.6665L28.6721 18.9322L31.2281 12.8756L42.494 8.6665Z"
													fill="#E2761B"
													stroke="#E2761B"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M10.5863 8.6665L24.2971 19.0295L21.8661 12.8756L10.5863 8.6665ZM37.5216 32.4625L33.8404 38.1024L41.7169 40.2694L43.9812 32.5874L37.5216 32.4625ZM9.12769 32.5874L11.3781 40.2694L19.2546 38.1024L15.5733 32.4625L9.12769 32.5874Z"
													fill="#E4761B"
													stroke="#E4761B"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M18.8106 22.9333L16.6158 26.2534L24.4366 26.6006L24.1588 18.1964L18.8106 22.9333ZM34.2718 22.9333L28.8542 18.0991L28.6735 26.6006L36.4805 26.2534L34.2718 22.9333ZM19.2552 38.1026L23.9504 35.8106L19.8942 32.6434L19.2552 38.1026ZM29.132 35.8106L33.8411 38.1026L33.1882 32.6434L29.132 35.8106Z"
													fill="#E4761B"
													stroke="#E4761B"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M33.8411 38.1023L29.1318 35.8103L29.5069 38.8803L29.4653 40.1722L33.8411 38.1023ZM19.2551 38.1023L23.6309 40.1722L23.603 38.8803L23.9503 35.8103L19.2551 38.1023Z"
													fill="#D7C1B3"
													stroke="#D7C1B3"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M23.7015 30.6146L19.7841 29.4616L22.5485 28.1975L23.7015 30.6146ZM29.383 30.6146L30.536 28.1975L33.3143 29.4616L29.383 30.6146Z"
													fill="#233447"
													stroke="#233447"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M19.2538 38.1019L19.9207 32.462L15.5726 32.5871L19.2538 38.1019ZM33.173 32.462L33.8398 38.1019L37.521 32.5871L33.173 32.462ZM36.4792 26.2526L28.6722 26.5999L29.3946 30.6145L30.5475 28.1974L33.3258 29.4615L36.4792 26.2526ZM19.7817 29.4615L22.5599 28.1974L23.6991 30.6145L24.4353 26.5999L16.6145 26.2526L19.7817 29.4615Z"
													fill="#CD6116"
													stroke="#CD6116"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M16.6158 26.2526L19.8942 32.6426L19.783 29.4615L16.6158 26.2526ZM33.3271 29.4615L33.1882 32.6426L36.4805 26.2526L33.3271 29.4615ZM24.4366 26.5999L23.7005 30.6145L24.6172 35.3515L24.8256 29.1143L24.4366 26.5999ZM28.6735 26.5999L28.2984 29.1003L28.4652 35.3515L29.3959 30.6145L28.6735 26.5999Z"
													fill="#E4751F"
													stroke="#E4751F"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M29.3969 30.6144L28.4662 35.3513L29.133 35.8098L33.1893 32.6425L33.3281 29.4614L29.3969 30.6144ZM19.7841 29.4614L19.8952 32.6425L23.9515 35.8098L24.6182 35.3513L23.7015 30.6144L19.7841 29.4614Z"
													fill="#F6851B"
													stroke="#F6851B"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M29.4653 40.1729L29.5069 38.8811L29.1596 38.5754H23.9226L23.603 38.8811L23.6309 40.1729L19.2551 38.1031L20.7831 39.3534L23.8809 41.5065H29.2012L32.3129 39.3534L33.8411 38.1031L29.4653 40.1729Z"
													fill="#C0AD9E"
													stroke="#C0AD9E"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M29.1317 35.8104L28.4649 35.3519H24.617L23.9503 35.8104L23.6029 38.8804L23.9224 38.5748H29.1595L29.5067 38.8804L29.1317 35.8104Z"
													fill="#161616"
													stroke="#161616"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M43.0782 19.599L44.259 13.9314L42.4948 8.6665L29.1313 18.585L34.2711 22.933L41.5363 25.0583L43.1476 23.183L42.4531 22.683L43.5644 21.6688L42.7032 21.0021L43.8144 20.1547L43.0782 19.599ZM8.83594 13.9314L10.0167 19.599L9.26656 20.1547L10.3779 21.0021L9.5305 21.6688L10.6418 22.683L9.94724 23.183L11.5447 25.0583L18.81 22.933L23.9498 18.585L10.5862 8.6665L8.83594 13.9314Z"
													fill="#763D16"
													stroke="#763D16"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M41.5363 25.0589L34.2711 22.9336L36.4798 26.2536L33.1876 32.6436L37.5216 32.5881H43.9812L41.5363 25.0589ZM18.81 22.9336L11.5448 25.0589L9.12769 32.5881H15.5733L19.8935 32.6436L16.6152 26.2536L18.81 22.9336ZM28.6729 26.6009L29.1313 18.5856L31.2428 12.8762H21.8661L23.9498 18.5856L24.436 26.6009L24.6028 29.1291L24.6165 35.3525H28.4645L28.4922 29.1291L28.6729 26.6009Z"
													fill="#F6851B"
													stroke="#F6851B"
													strokeWidth="0.106857"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</g>
											<defs>
												<clipPath id="clip0_112_12874">
													<rect width="52" height="52" fill="white" />
												</clipPath>
											</defs>
										</svg>
										&nbsp;METAMASK
									</button>

									{/* uniswap */}
									<button
										className="flex items-center 
										mb-2 bg-[#F2EFF1] 
										hover:opacity-80 duration-300 ease-in-out
										"
										onClick={() => handleConnect()}
									>
										<svg
											width="52"
											height="52"
											viewBox="0 0 52 52"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<rect width="52" height="52" fill="url(#pattern0)" />
											<rect
												width="52"
												height="52"
												fill="black"
												fillOpacity="0.1"
											/>
											<defs>
												<pattern
													id="pattern0"
													patternContentUnits="objectBoundingBox"
													width="1"
													height="1"
												>
													<use
														xlinkHref="#image0_112_12906"
														transform="scale(0.00833333)"
													/>
												</pattern>
												<image
													id="image0_112_12906"
													width="120"
													height="120"
													xlinkHref="data:image/png;base64,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"
												/>
											</defs>
										</svg>
										&nbsp;Uniswap Wallet
									</button>

									{/* walletcoin */}
									<button
										className="flex items-center 
										mb-2 bg-[#F2EFF1] 
										hover:opacity-80 duration-300 ease-in-out
										"
										onClick={() => handleConnect()}
									>
										<svg
											width="52"
											height="52"
											viewBox="0 0 52 52"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_112_12856)">
												<path d="M52 0H0V52H52V0Z" fill="#3396FF" />
												<path
													d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52Z"
													fill="#3396FF"
												/>
												<path
													d="M15.9025 19.3487C21.4793 13.9104 30.5213 13.9104 36.098 19.3487L36.7692 20.0033C37.0481 20.2751 37.0481 20.7159 36.7692 20.9879L34.4733 23.2269C34.3338 23.3627 34.1078 23.3627 33.9684 23.2269L33.0447 22.3261C29.1542 18.5322 22.8463 18.5322 18.9557 22.3261L17.9665 23.2907C17.8272 23.4267 17.6011 23.4267 17.4617 23.2907L15.1658 21.0517C14.8868 20.7799 14.8868 20.3389 15.1658 20.0671L15.9025 19.3487ZM40.8464 23.9791L42.8899 25.9717C43.1687 26.2437 43.1687 26.6845 42.8899 26.9563L33.6759 35.9415C33.397 36.2135 32.9449 36.2135 32.666 35.9415L26.1265 29.5647C26.0568 29.4965 25.9438 29.4965 25.874 29.5647L19.3346 35.9415C19.0558 36.2135 18.6038 36.2135 18.3248 35.9415L9.11062 26.9562C8.83178 26.6844 8.83178 26.2435 9.11062 25.9717L11.1541 23.9789C11.4329 23.7071 11.885 23.7071 12.1638 23.9789L18.7035 30.3561C18.7732 30.4241 18.8861 30.4241 18.9558 30.3561L25.4952 23.9789C25.7741 23.707 26.2261 23.707 26.5051 23.9789L33.0446 30.3561C33.1144 30.4241 33.2274 30.4241 33.297 30.3561L39.8367 23.9791C40.1154 23.7071 40.5675 23.7071 40.8464 23.9791Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_112_12856">
													<rect width="52" height="52" fill="white" />
												</clipPath>
											</defs>
										</svg>
										&nbsp;WalletConnect
									</button>

									{/* coinbase */}
									<button
										className="flex items-center 
										mb-2 bg-[#F2EFF1] 
										hover:opacity-80 duration-300 ease-in-out
										"
										onClick={() => handleConnect()}
									>
										<svg
											width="52"
											height="52"
											viewBox="0 0 52 52"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_112_12845)">
												<mask
													id="mask0_112_12845"
													style={{ maskType: "luminance" }}
													maskUnits="userSpaceOnUse"
													x="0"
													y="0"
													width="52"
													height="52"
												>
													<path d="M52 0H0V52H52V0Z" fill="white" />
												</mask>
												<g mask="url(#mask0_112_12845)">
													<path d="M52 0H0V52H52V0Z" fill="#0052FF" />
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M25.9985 7.53271C36.1989 7.53271 44.4669 15.8007 44.4669 26.001C44.4669 36.2013 36.1989 44.4693 25.9985 44.4693C15.7982 44.4693 7.53027 36.2013 7.53027 26.001C7.53027 15.8007 15.7982 7.53271 25.9985 7.53271Z"
														fill="white"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M21.4506 20.0967H30.5465C31.2953 20.0967 31.9006 20.7498 31.9006 21.5527V30.4447C31.9006 31.2496 31.2932 31.9007 30.5465 31.9007H21.4506C20.7018 31.9007 20.0966 31.2476 20.0966 30.4447V21.5527C20.0966 20.7498 20.7039 20.0967 21.4506 20.0967Z"
														fill="#0052FF"
													/>
												</g>
											</g>
											<defs>
												<clipPath id="clip0_112_12845">
													<rect width="52" height="52" fill="white" />
												</clipPath>
											</defs>
										</svg>
										&nbsp;Coinbase Wallet
									</button>
								</div>

								{/* line */}
								<div className="flex items-center w-full md:w-[400px] mt-8">
									<div className="bg-white bg-opacity-10 h-[1px] flex-1 mr-2" />
									<Plus stroke="white" />
								</div>

								{/* paragraph */}
								<p className="text-white opacity-75  w-full md:w-[400px] text-sm mt-8">
									By connecting a wallet, you agree to Uniswap Labs'{" "}
									<span className="border-b">Terms of Service</span> and consent
									to its Privacy Policy.
								</p>
							</>
						) : (
							<>
								{/* top */}
								<div className="flex items-center h-16 w-full">
									<img
										src={avatar}
										alt="avatar-img"
										className="h-full object-contain z-30 mr-12"
									/>

									<h1 className="text-white text-lg">{wallet}</h1>

									<svg
										className="ml-auto hover:opacity-80 cursor-pointer duration-300 ease-out"
										width="42"
										height="42"
										viewBox="0 0 42 42"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										onClick={() => handleLogout()}
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M33.0294 0L42 8.9706V42H8.97282L0 33.0272V0H33.0294Z"
											fill="#FF003C"
										/>
										<path
											d="M25 26L30 21M30 21L25 16M30 21H18M18 12H16.8C15.1198 12 14.2798 12 13.638 12.327C13.0735 12.6146 12.6146 13.0735 12.327 13.638C12 14.2798 12 15.1198 12 16.8V25.2C12 26.8802 12 27.7202 12.327 28.362C12.6146 28.9265 13.0735 29.3854 13.638 29.673C14.2798 30 15.1198 30 16.8 30H18"
											stroke="black"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>

								{/* center */}
								<div className="mt-8 flex flex-col">
									{/* amount */}
									<h1 className="text-4xl text-white font-bold">$1.07</h1>
									{/* rate */}
									<div className="flex items-center mt-2">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.60051 3.20017L12.2002 12.7998M12.2002 12.7998V3.20017M12.2002 12.7998H2.60051"
												stroke="#FF0000"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>

										<h1 className="text-white opacity-50 font-light ml-4">
											$0.00 (0.28%)
										</h1>
									</div>

									{/* btns */}
									<button
										className="h-12 w-full bg-[#FF003C] mt-8
										hover:bg-white duration-300 ease-in-out
										"
										onClick={() => {}}
									>
										Wiew and sell NFTs
									</button>

									<button
										className="h-12 w-full bg-[#FF003C] mt-2
										hover:bg-white duration-300 ease-in-out
										"
										onClick={() => {}}
									>
										buy crypto
									</button>

									{/* tabs */}
									<div>
										{/* buttons */}
										<div className="flex items-center justify-between mt-8">
											{/* tokens */}
											<button
												className={
													tab === "tokens"
														? tabStyle + activeTabStyle
														: tabStyle
												}
												onClick={() => setTab("tokens")}
											>
												Tokens
											</button>

											{/* nfts */}
											<button
												className={
													tab === "nfts" ? tabStyle + activeTabStyle : tabStyle
												}
												onClick={() => setTab("nfts")}
											>
												NFTS
											</button>

											{/* polls */}
											<button
												className={
													tab === "pools" ? tabStyle + activeTabStyle : tabStyle
												}
												onClick={() => setTab("pools")}
											>
												Pools
											</button>

											{/* activity */}
											<button
												className={
													tab === "activity"
														? tabStyle + activeTabStyle
														: tabStyle
												}
												onClick={() => setTab("activity")}
											>
												Activity
											</button>
										</div>

										{/* content */}
										<div className="mt-8">
											{/* card 1 */}
											<div className="flex hover:opacity-80 ease-in-out duration-300 cursor-pointer">
												{/* ethrerium logo */}
												<svg
													width="40"
													height="40"
													viewBox="0 0 40 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect width="40" height="40" fill="white" />
													<g clipPath="url(#clip0_42_205)">
														<g opacity="0.6">
															<mask
																id="mask0_42_205"
																style={{ maskType: "luminance" }}
																maskUnits="userSpaceOnUse"
																x="10"
																y="16"
																width="20"
																height="10"
															>
																<path
																	d="M10.9995 16.0941H29.0005V25.7255H10.9995V16.0941Z"
																	fill="white"
																/>
															</mask>
															<g mask="url(#mask0_42_205)">
																<path
																	d="M20.0018 16.0941L10.9995 20.2834L20.0018 25.7255L29.0005 20.2834L20.0018 16.0941Z"
																	fill="#010101"
																/>
															</g>
														</g>
														<g opacity="0.45">
															<mask
																id="mask1_42_205"
																style={{ maskType: "luminance" }}
																maskUnits="userSpaceOnUse"
																x="10"
																y="5"
																width="11"
																height="21"
															>
																<path
																	d="M10.9993 5H20.0015V25.7255H10.9993V5Z"
																	fill="white"
																/>
															</mask>
															<g mask="url(#mask1_42_205)">
																<path
																	d="M10.9993 20.2834L20.0015 25.7255V5L10.9993 20.2834Z"
																	fill="#010101"
																/>
															</g>
														</g>
														<g opacity="0.8">
															<mask
																id="mask2_42_205"
																style={{ maskType: "luminance" }}
																maskUnits="userSpaceOnUse"
																x="20"
																y="5"
																width="10"
																height="21"
															>
																<path
																	d="M20.0018 5H29.004V25.7255H20.0018V5Z"
																	fill="white"
																/>
															</mask>
															<g mask="url(#mask2_42_205)">
																<path
																	d="M20.0018 5V25.7255L29.0005 20.2834L20.0018 5Z"
																	fill="#010101"
																/>
															</g>
														</g>
														<g opacity="0.45">
															<mask
																id="mask3_42_205"
																style={{ maskType: "luminance" }}
																maskUnits="userSpaceOnUse"
																x="10"
																y="22"
																width="11"
																height="14"
															>
																<path
																	d="M10.9995 22.0286H20.0018V35.0056H10.9995V22.0286Z"
																	fill="white"
																/>
															</mask>
															<g mask="url(#mask3_42_205)">
																<path
																	d="M10.9995 22.0286L20.0018 35.0056V27.4707L10.9995 22.0286Z"
																	fill="#010101"
																/>
															</g>
														</g>
														<g opacity="0.8">
															<mask
																id="mask4_42_205"
																style={{ maskType: "luminance" }}
																maskUnits="userSpaceOnUse"
																x="20"
																y="22"
																width="10"
																height="14"
															>
																<path
																	d="M20.0018 22.0286H29.0075V35.0056H20.0018V22.0286Z"
																	fill="white"
																/>
															</mask>
															<g mask="url(#mask4_42_205)">
																<path
																	d="M20.0018 27.4707V35.0056L29.0075 22.0286L20.0018 27.4707Z"
																	fill="#010101"
																/>
															</g>
														</g>
													</g>
													<defs>
														<clipPath id="clip0_42_205">
															<rect
																width="18"
																height="30"
																fill="white"
																transform="translate(11 5)"
															/>
														</clipPath>
													</defs>
												</svg>

												{/* text */}
												<div className="w-full flex flex-col justify-between ml-2 text-white">
													{/* heading */}
													<div className="w-full flex items-center justify-between">
														<h1 className="!normal-case text-sm">Ether</h1>
														<h1 className="!normal-case text-sm">$1.07</h1>
													</div>

													{/* sub heading */}
													<div className="w-full flex items-center justify-between">
														<p className="text-xs opacity-50">{"<0.001 ETH"}</p>
														<div className="flex items-center">
															<svg
																width="12"
																height="12"
																viewBox="0 0 14 14"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M2.60051 3.20017L12.2002 12.7998M12.2002 12.7998V3.20017M12.2002 12.7998H2.60051"
																	stroke="#FF0000"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>

															<h1 className="text-white opacity-50 text-xs ml-2">
																$0.00 (0.28%)
															</h1>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

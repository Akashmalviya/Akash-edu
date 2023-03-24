import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import testimonialArry from "../../data/Testimonial";
import { Pagination, Navigation } from "swiper";
import { ReactComponent as LeftFacedQutationMark } from "./../../Logos/svgs/leftFacedQuatation.svg";
import { ReactComponent as RightFacedQutationMark } from "./../../Logos/svgs/rightFacedQuatation.svg";
import useDeviceDetect from "./../../hooks/useDeviceDetect";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";

const Cointainer = styled.div``;

const Header = styled.div`
	margin-top: 3rem;
	padding: 1rem;

	position: relative;
`;
const HeaderbackGround = styled.div`
	position: absolute;
	text-align: center;
	font-family: "Anton", sans-serif;
	font-weight: 800;
	font-size: 12rem;
	width: 100%;
	color: rgba(11, 30, 81, 0.03);
	top: 0;
	user-select: none;
	@media (max-width: 470px) {
		font-size: 9rem;
	}
`;
const Heading = styled.div`
	padding: 2rem;
	padding-top: 4.5rem;
	text-align: center;
	color: #0b1e51;
	font-size: 4rem;
	font-family: "Great Vibes", cursive;
`;

const Body = styled.div``;

const CarouselElment = styled.div`
	position: relative;
`;
const CarouselElmentBody = styled.div`
	padding: 2rem 1rem 1rem 2rem;
	background: #ffffff;
	box-shadow: 0px 17.7537px 57.6997px rgba(11, 30, 81, 0.05);
	line-height: 2rem;
	text-align: center;
	border-radius: 20px;
	max-height: 30rem;
`;

const UserImg = styled.img`
	width: 8rem;
	height: 8rem;
	z-index: 1000;
	filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
	border-radius: 1.5rem;
`;

const CarouselElmentText = styled.div`
	padding: 1rem 1rem 0.5rem 1rem;
	line-height: 2rem;
	color: rgba(11, 30, 81, 0.8);
	font-size: 1rem;
`;
const CarouselElmentName = styled.h4`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;
const CarouselElmentDiscription = styled.p`
	margin-top: 0;
	margin-bottom: 0;
`;
const CarouselElmentFotter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #0b1e51;
`;
const EmptyDiv = styled.div`
	width: 4.2rem;
`;
const FooterBody = styled.div``;
const QuatationMarksLeft = styled.div`
	width: 4.2rem;
`;
const QuatationMarksRight = styled.div`
	width: 4.2rem;
	display: flex;
	justify-content: flex-start;
`;

const CarouselIndicator = styled.div`
	position: relative;
	width: 10rem;
	height: 0.9rem;
	background: rgba(183, 197, 213, 0.7);
	border-radius: 50px;
	margin: auto;
	margin-top: 4rem;

	&:before {
		content: "";
		position: absolute;
		background: #1cbef5;
		left: calc(80% * ${(props) => props.page});
		width: 20%;
		height: 0.8rem;
		border-radius: 50px;
		transition: left 300ms;
	}
`;
const ImgContainer = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	z-index: 1000;
	top: 2em;
`;
const Testimonials = () => {
	const [page, setPage] = useState({ currentPage: 0, totalPage: 0 });
	const [isMobile, device_width] = useDeviceDetect();

	const spaceValue = () => {
		if (isMobile && device_width > 450) return 40;
		if (device_width < 450) return 20;
		else return 100;
	};
	console.log(spaceValue());
	return (
		<Cointainer id="testimonials">
			<Header>
				<HeaderbackGround>SUCCESS STORIES</HeaderbackGround>
				<Heading>Testimonials</Heading>
			</Header>
			<Body>
				<Swiper
					spaceBetween={spaceValue()}
					centeredSlides={true}
					slidesPerView={2}
					onSlideChange={(e) => {
						setPage({ ...page, currentPage: e.realIndex });
					}}
					onSwiper={(swiper) =>
						setPage({ ...page, totalPage: swiper.slides.length - 1 })
					}
					loop={true}
					pagination={{ type: null }}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{testimonialArry.map((testimonial, i) => {
						return (
							<div key={uuidv4()}>
								<SwiperSlide>
									<CarouselElment>
										<ImgContainer>
											<UserImg
												src={require(`./../../Logos/pngs/${testimonial}`)}
											/>
										</ImgContainer>
										<CarouselElmentBody>
											<QuatationMarksRight>
												<RightFacedQutationMark
													style={{ width: "100%", height: "100%" }}
												/>
											</QuatationMarksRight>
											<CarouselElmentText>
												Enim non sit amet, feugiat ut amet, vitae. Ornare lorem
												orci amet enim purus turpis sollicitudin convallis.
												Lobortis enim massa vehicula habitant sed morbi. Feugiat
												tempor euismod viverra magna semper varius porta
												euismod. Et luctus in gravida sapien feugiat faucibus
												magna massa et.
											</CarouselElmentText>
											<CarouselElmentFotter>
												<EmptyDiv></EmptyDiv>
												<FooterBody>
													<CarouselElmentName>Tony Stark</CarouselElmentName>
													<CarouselElmentDiscription>
														Full Stack Developer
													</CarouselElmentDiscription>
												</FooterBody>
												<QuatationMarksLeft>
													<LeftFacedQutationMark
														style={{ width: "100%", height: "100%" }}
													/>
												</QuatationMarksLeft>
											</CarouselElmentFotter>
										</CarouselElmentBody>
									</CarouselElment>
								</SwiperSlide>
							</div>
						);
					})}
				</Swiper>

				<CarouselIndicator
					page={(
						Math.round((page.currentPage / page.totalPage) * 100) / 100
					).toFixed(2)}
				/>
			</Body>
		</Cointainer>
	);
};
export default Testimonials;

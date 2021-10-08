import React from "react";

import Color from "../../00_tokens/color/";

import PageHeader from "../../03_modules/page-header/";
import PageSection from "../../01_arrangements/page-section/";
import Layout from "../../01_arrangements/layout/";
import PageFooter from "../../03_modules/page-footer/";
import Card from "../../01_arrangements/card/";
import Heading from "../../01_arrangements/heading/";
import Paragraph from "../../01_arrangements/paragraph/";
import SiteFooter from "../../03_modules/site-footer/";
import List from "../../01_arrangements/list/";
import Table from "../../01_arrangements/table/";
import Link from "../../02_patterns/link/";
import Image from "../../02_patterns/image/";
import InteractiveBanner from "../../03_modules/interactive-banner/";

import bannerImage1 from "../../../assets/images/banner-1.png";
import footerIllustrationWEBP from "../../../assets/images/footer-illustration/footer-illustration.webp";
import footerIllustrationSVG from "../../../assets/images/footer-illustration/footer-illustration.svg";

const HomePage = (props) => {
	const tableData = [
		{
			title: "Title 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 5",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 6",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
		{
			title: "Title 7",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			price: "12.99",
		},
	];

	return (
		<div
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<PageHeader />
			<InteractiveBanner />
			<PageSection
				heading='This is the Section heading'
				subheading='This is the Section subheading'
			>
				<Layout grid='33_33_33' breakdown>
					<div className='column'>
						<Card heading='A card title' icon='magic-wand' href='#'>
							<Paragraph level='1' alignment='center'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</Paragraph>
						</Card>
					</div>
					<div className='column'>
						<Card
							heading='An even longer card title here with lots of text'
							icon='pencil-ruler'
							href='#'
						>
							<Paragraph level='1' alignment='center'>
								Sed cursus condimentum tempus, Ut dapibus sed
								nunc non semper.
							</Paragraph>
						</Card>
					</div>
					<div className='column'>
						<Card
							heading='A longer card title'
							icon='paint-roller'
							href='#'
						>
							<Paragraph level='1' alignment='center'>
								Integer elementum lobortis libero eget mattis.
								Sed cursus condimentum tempus, Ut dapibus sed
								nunc non semper.
							</Paragraph>
						</Card>
					</div>
				</Layout>
			</PageSection>
			<PageSection
				heading='This is the Section heading'
				subheading='This is the Section subheading'
				headingAlignment='left'
				backgroundColor={Color.brandcolor7}
			>
				<Layout>
					<div className='column'>
						<Table data={tableData} />
					</div>
				</Layout>
			</PageSection>
			<PageSection variant='full-page' backgroundImage={bannerImage1}>
				<Layout grid='50_50' breakdown>
					<div className='column'>
						<Heading level='2'>
							An even longer card title here with lots of text
						</Heading>
						<Paragraph level='1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed cursus condimentum tempus, Ut dapibus sed
							nunc non semper.
						</Paragraph>
					</div>
					<div className='column'></div>
				</Layout>
			</PageSection>
			<PageSection>
				<Layout>
					<div className='column'>
						<Image
							srcWEBP={footerIllustrationWEBP}
							srcSVG={footerIllustrationSVG}
						/>
					</div>
				</Layout>
			</PageSection>
			<PageFooter />
			<SiteFooter>
				<List level='3'>
					<li>
						<Link href='#'>List item one</Link>
					</li>
					<li>
						<Link href='#'>List item two</Link>
					</li>
					<li>
						<Link href='#'>List item three</Link>
					</li>
				</List>
			</SiteFooter>
		</div>
	);
};

export default HomePage;

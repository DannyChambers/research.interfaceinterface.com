import React from "react";

import PageSection from "../../01_arrangements/page-section/";
import Layout from "../../01_arrangements/layout/";
import Heading from "../../01_arrangements/heading/";
import Paragraph from "../../01_arrangements/paragraph/";
import SiteFooter from "../../03_modules/site-footer/";
import List from "../../01_arrangements/list/";
import Table from "../../01_arrangements/table/";
import Link from "../../02_patterns/link/";

const HomePage = (props) => {
	const tableData = [
		{
			title: "Doorway effect 1",
			hypothesis:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			Started: "17 May 1983",
			Ended: "-",
			Users: 0,
			status: "Active",
			Dashboard: "/doorway-2/",
		},
		{
			title: "Doorway effect 1",
			hypothesis:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			Started: "17 May 1983",
			Ended: "-",
			Users: 0,
			status: "Active",
			Dashboard: "/doorway-2/",
		},
		{
			title: "Doorway effect 1",
			hypothesis:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentum tempus, Ut dapibus sed nunc non semper.",
			Started: "17 May 1983",
			Ended: "-",
			Users: 0,
			status: "Active",
			Dashboard: "/doorway-2/",
		},
	];

	const sample = tableData[0];
	const headings = Object.keys(sample);

	return (
		<div
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<Heading level='1' classes='visually-hidden'>
				Online research and experiments created by Danny Clayden
				Chambers.
			</Heading>
			<PageSection
				variant='full-page'
				heading='Experiments'
				subheading='Follow links to see a dashboard.'
				headingAlignment='left'
			>
				<Layout>
					<div className='column'>
						<Table>
							<thead>
								<tr>
									{headings.map((item, index) => {
										return (
											<th key={`_${index}`}>{item}</th>
										);
									})}
								</tr>
							</thead>
							<tbody>
								{tableData.map((item, index) => {
									return (
										<tr key={`_${index}`}>
											{headings.map((property) => {
												if (property === "Dashboard") {
													return (
														<td
															key={`_${property}`}
														>
															<Link
																href={
																	item[
																		property
																	]
																}
															>
																{item[property]}
															</Link>
														</td>
													);
												} else {
													return (
														<td
															key={`_${property}`}
														>
															{item[property]}
														</td>
													);
												}
											})}
										</tr>
									);
								})}
							</tbody>
						</Table>
					</div>
				</Layout>
			</PageSection>
			<SiteFooter>
				<List level='3'>
					<li>
						<Link href='#'>interfaceinterface.com</Link>
					</li>
					<li>
						<Link href='#'>LinkedIn</Link>
					</li>
					<li>
						<Link href='#'>Github</Link>
					</li>
				</List>
			</SiteFooter>
		</div>
	);
};

export default HomePage;

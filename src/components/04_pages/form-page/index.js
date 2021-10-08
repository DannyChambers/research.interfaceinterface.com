import React from "react";

import PageHeader from "../../03_modules/page-header/";
import PageSection from "../../01_arrangements/page-section/";
import Layout from "../../01_arrangements/layout/";
import List from "../../01_arrangements/list/";
import Link from "../../02_patterns/link/";
import PageFooter from "../../03_modules/page-footer/";
import SiteFooter from "../../03_modules/site-footer/";
import ContactForm from "../../03_modules/contact-form/";

const FormPage = (props) => {
	return (
		<div
			{...props}
			data-testid='123abc'
			className={`form-page ${props.classes}`}
		>
			<PageHeader />
			<PageSection
				heading='This is the Section heading'
				subheading='This is the Section subheading'
			>
				<Layout>
					<div className='column'>
						<ContactForm />
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

export default FormPage;

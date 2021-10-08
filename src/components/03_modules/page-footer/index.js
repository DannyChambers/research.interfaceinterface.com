import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import Layout from "../../01_arrangements/layout/";
import Heading from "../../01_arrangements/heading/";
import List from "../../01_arrangements/list/";
import Link from "../../02_patterns/link/";
import Logo from "../../02_patterns/logo/";

const PageFooter = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`page-footer ${props.classes}`}
		>
			<Layout grid='50_50'>
				<div className='column'>
					<Logo size='medium' />
				</div>
				<div className='column'>
					{" "}
					<Heading level='2' appearance='4'>
						Column one
					</Heading>
					<List level='1' columns='2'>
						<li graphic='magic-wand'>
							<Link href='#'>List item one</Link>
						</li>
						<li graphic='paint-roller'>
							<Link href='#'>List item two</Link>
						</li>
						<li graphic='pencil-ruler'>
							<Link href='#'>List item three</Link>
						</li>
						<li graphic='umbrella'>
							<Link href='#'>List item four</Link>
						</li>
						<li graphic='magic-wand'>
							<Link href='#'>List item one</Link>
						</li>
						<li graphic='paint-roller'>
							<Link href='#'>List item two</Link>
						</li>
						<li graphic='pencil-ruler'>
							<Link href='#'>List item three</Link>
						</li>
						<li graphic='umbrella'>
							<Link href='#'>List item four</Link>
						</li>
					</List>
				</div>
			</Layout>
		</El>
	);
};

const El = styled.footer`
	min-height: 50vh;
	background: var(--brand-color-6);
	padding: var(--spacing-double) var(--spacing-full) var(--spacing-triple)
		var(--spacing-full);

	.heading {
		padding-bottom: var(--spacing-double);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		padding: var(--spacing-triple) var(--spacing-full)
			var(--spacing-quadruple) var(--spacing-full);
	}
`;

export default PageFooter;

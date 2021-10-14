import React, { useState, useEffect } from "react";
import {
	getAuth,
	isSignInWithEmailLink,
	signInWithEmailLink,
} from "firebase/auth";

import Layout from "../../../components/01_arrangements/layout/";
import PageSection from "../../../components/01_arrangements/page-section/";
import Heading from "../../../components/01_arrangements/heading/";
import Paragraph from "../../../components/01_arrangements/paragraph/";
import Stack from "../../../components/01_arrangements/stack/";
import ButtonGroup from "../../../components/01_arrangements/button-group/";
import Modal from "../../../components/02_patterns/modal/";
import Button from "../../../components/02_patterns/button/";

const Experiment = (props) => {
	const [name, setName] = useState(false);
	const [testStarted, setTestStarted] = useState(false);

	useEffect(() => {
		// Confirm the link is a sign-in with email link.
		const auth = getAuth();
		if (isSignInWithEmailLink(auth, window.location.href)) {
			let email = window.localStorage.getItem("iir_emailForSignIn");
			let name = window.localStorage.getItem("iir_name");
			setName(name);

			if (!email) {
				email = window.prompt(
					"Please provide your email for confirmation"
				);
			}

			signInWithEmailLink(auth, email, window.location.href)
				.then((result) => {
					window.localStorage.removeItem("iir_emailForSignIn");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("Error: ", errorCode, errorMessage);
				});
		}
	}, []);

	useEffect(() => {
		if (testStarted) {
			console.log("testStarted");
		}
	}, [testStarted]);

	return (
		<div
			{...props}
			data-testid='123abc'
			className={`experiment ${props.classes}`}
		>
			<PageSection variant='full-page'>
				<Modal active={!testStarted}>
					<Stack>
						{(() => {
							if (!name) {
								return <Heading level='2'>Hi there</Heading>;
							} else {
								return <Heading level='2'>Hi, {name}</Heading>;
							}
						})()}
						<Paragraph level='1'>
							On the following page you will see a grid containing
							the numbers 1 to 10. The numbers are in a random
							order and will be hidden from view after eight
							seconds.
						</Paragraph>
						<Paragraph level='1'>
							Once prompted, it is your goal to click on the grid
							to reveal the numbers in correct numerical order
							<em>1</em>,<em>2</em>,<em>3</em>,<em>4</em>,
							<em>5</em>,<em>6</em>,<em>7</em>,<em>8</em>,
							<em>9</em> and <em>10</em>.
						</Paragraph>
						<Paragraph level='1'>
							This is not a test of speed, but we have given five
							minutes to complete the task after which the
							experiment will finish.
						</Paragraph>
						<Paragraph level='1'>
							Thank you so much for your time.
						</Paragraph>
					</Stack>
					<ButtonGroup alignment='center'>
						<Button
							variant='secondary'
							text='Continue'
							click={() => {
								setTestStarted(true);
							}}
						/>
					</ButtonGroup>
				</Modal>
			</PageSection>
		</div>
	);
};

export default Experiment;

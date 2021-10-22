import React, { useState, useEffect } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

import Layout from "../../components/01_arrangements/layout/";
import PageSection from "../../components/01_arrangements/page-section/";
import Card from "../../components/01_arrangements/card/";
import Heading from "../../components/01_arrangements/heading/";
import Paragraph from "../../components/01_arrangements/paragraph/";
import SignInForm from "../../components/03_modules/sign-in-form/";

const Example = (props) => {
	const [submitted, setSubmitted] = useState(false);

	const submitForm = async (fields) => {
		// console.log("Called submitForm");

		const name = fields[0].value,
			email = fields[1].value;

		//Sending the access link --

		const actionCodeSettings = {
			url: "http://localhost:3000/example/experiment/",
			handleCodeInApp: true,
		};

		const auth = getAuth();
		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				window.localStorage.setItem("iir_name", name);
				window.localStorage.setItem("iir_emailForSignIn", email);
				setSubmitted(true);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Error: ", errorCode, errorMessage);
			});

		//------------
	};

	return (
		<div
			{...props}
			data-testid='123abc'
			className={`example ${props.classes}`}
		>
			<PageSection variant='full-page'>
				{(() => {
					if (!submitted) {
						return (
							<Layout grid='50_50'>
								<div className='column'>
									<Heading level='2'>
										Thank you for taking part!
									</Heading>
									<Paragraph level='1'>
										Please provide your email address and we
										will send you a unique access link.
									</Paragraph>
									<Paragraph level='1'>
										Your details will not be used for any
										other reason than to facillitate a
										unique entry to this experiment and your
										results will be anonymised.
									</Paragraph>
								</div>
								<div className='column'>
									<Card>
										<SignInForm submit={submitForm} />
									</Card>
								</div>
							</Layout>
						);
					} else {
						return (
							<Layout>
								<div className='column'>
									<Heading level='2' alignment='center'>
										Thanks.
									</Heading>
									<Paragraph level='2' alignment='center'>
										We have sent you a link to access the
										experiment.
									</Paragraph>
									<Paragraph level='2' alignment='center'>
										If you don't see it in your inbox,
										please check your spam folder.
									</Paragraph>
								</div>
							</Layout>
						);
					}
				})()}
			</PageSection>
		</div>
	);
};

export default Example;

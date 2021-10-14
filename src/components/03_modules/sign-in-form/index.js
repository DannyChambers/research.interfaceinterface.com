import React, { useState, useEffect } from "react";

import Layout from "../../../components/01_arrangements/layout/";
import ButtonGroup from "../../../components/01_arrangements/button-group/";
import Form from "../../../components/01_arrangements/form/";
import TextInput from "../../../components/02_patterns/text-input/";
import Button from "../../../components/02_patterns/button/";

const SignInForm = (props) => {
	const [formValid, setFormValid] = useState(false);

	const [fields, setFields] = useState([
		{ name: "firstName", value: "", valid: true },
		{ name: "emailAddress", value: "", valid: false },
	]);

	useEffect(() => {
		//Uncomment this to see what your fields object is recieving in the console.
		// console.log("fields: ", fields);
		validateForm();
	}, [fields]);

	const handleSubmit = () => {
		if (formValid) {
			// console.log("Called submitForm");
			console.log("props: ", props);
			props.submit(fields);
		}
	};

	const updateField = (newFieldObj) => {
		// console.log("Called updateField with newFieldObj: ", newFieldObj);

		// //Remove this field from the array
		let newFields = fields.filter((item, index) => {
			return item.name !== newFieldObj.name;
		});

		//Add the updated version of the field
		newFields.push(newFieldObj);

		setFields(newFields);
	};

	const validateForm = () => {
		console.log("Called validateForm");

		const invalidItem = fields.find((item) => {
			return item.valid === false;
		});

		if (invalidItem) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	};

	return (
		<Form data-testid='123abc' className='home'>
			<Layout>
				<div className='column'>
					<TextInput
						icon='user'
						label='First Name'
						name='firstName'
						usePlaceholder
						change={updateField}
					/>
				</div>
				<div className='column'>
					<TextInput
						icon='envelope'
						label='Email Address'
						name='emailAddress'
						required
						validPattern='email'
						usePlaceholder
						change={updateField}
					/>
				</div>

				<ButtonGroup alignment='right'>
					<Button
						text='Send me a link'
						disabled={!formValid}
						click={handleSubmit}
					/>
				</ButtonGroup>
			</Layout>
		</Form>
	);
};

export default SignInForm;

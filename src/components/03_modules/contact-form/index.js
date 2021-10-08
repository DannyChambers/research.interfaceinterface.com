import React, { useState, useEffect } from "react";

import Layout from "../../../components/01_arrangements/layout/";
import Heading from "../../../components/01_arrangements/heading/";
import Paragraph from "../../../components/01_arrangements/paragraph/";
import ButtonGroup from "../../../components/01_arrangements/button-group/";
import Form, { Fieldset } from "../../../components/01_arrangements/form/";
import Stack from "../../../components/01_arrangements/stack/";
import TextInput from "../../../components/02_patterns/text-input/";
import TextareaInput from "../../../components/02_patterns/textarea-input/";
import SelectInput from "../../../components/02_patterns/select-input/";
import CheckboxInput from "../../../components/02_patterns/checkbox-input/";
import UploadInput from "../../../components/02_patterns/upload-input/";
import Button from "../../../components/02_patterns/button/";
import Link from "../../../components/02_patterns/link/";

const ContactForm = () => {
	const [enquiryType, setEquiryType] = useState(false);
	const [formValid, setFormValid] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const [fields, setFields] = useState([
		{ name: "fullName", value: "", valid: false },
		{ name: "emailAddress", value: "", valid: false },
	]);

	useEffect(() => {
		//Uncomment this to see what your fields object is recieving in the console.
		// console.log("fields: ", fields);
		validateForm();
	}, [fields]);

	const selectForm = (enquiryType) => {
		//Update required fields in object depending on enquiry type --

		switch (
			enquiryType.value //This is where you  set the define your fields. The form must have input elements with name attributes that match these (names)
		) {
			case "form-1":
				setFields([
					{ ...fields[0] },
					{ ...fields[1] },
					{ name: "companyName", value: "", valid: false },
					{ name: "phoneNumber", value: "", valid: false },
					{ name: "addToDistributuionList", value: "", valid: false },
					{ name: "emailLatestNews", value: "", valid: true },
				]);
				break;
			case "form-2":
				setFields([
					{ ...fields[0] },
					{ ...fields[1] },
					{ name: "titleAndRole", value: "", valid: false },
					{ name: "companyName", value: "", valid: false },
					{ name: "industry", value: "", valid: false },
					{ name: "websiteURL", value: "", valid: true },
					{ name: "documentation", value: "", valid: true },
				]);
				break;
			default:
				setFields([
					{ ...fields[0] },
					{ ...fields[1] },
					{ name: "generalMessage", value: "", valid: false },
				]);
				break;
		}

		setEquiryType(enquiryType);
	};

	const submitForm = async () => {
		if (formValid) {
			console.log("Called submitForm");

			//Functional work to do here..

			setSubmitted(true);
		}
	};

	const updateField = (newFieldObj) => {
		console.log("Called updateField with newFieldObj: ", newFieldObj);

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
		<>
			{(() => {
				if (!submitted) {
					return (
						<Form data-testid='123abc' className='home'>
							<Fieldset>
								<legend>Contact us</legend>
								<Layout>
									<div className='column'>
										<TextInput
											icon='user'
											label='Full Name'
											name='fullName'
											required
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
									<div className='column'>
										<SelectInput
											label='What is the nature of your enquiry?'
											name='equiryType'
											options={[
												{
													value: "",
													label: "Please select",
												},
												{
													value: "form-1",
													label: "Option one",
												},
												{
													value: "form-2",
													label: "Option two",
												},
												{
													value: "form-3",
													label: "Option three",
												},
											]}
											change={selectForm}
										/>
									</div>

									{(() => {
										if (enquiryType.value === "form-3") {
											return (
												<div className='column'>
													<TextareaInput
														label='Message'
														name='generalMessage'
														required
														usePlaceholder
														characterLimit='400'
														change={updateField}
													/>
												</div>
											);
										}
									})()}
								</Layout>
							</Fieldset>

							{(() => {
								if (enquiryType.value === "form-1") {
									return (
										<>
											<Fieldset legend='Company details'>
												<Layout>
													<div className='column'>
														<TextInput
															icon='city'
															label='Company name'
															name='companyName'
															required
															usePlaceholder
															change={updateField}
														/>
													</div>
													<div className='column'>
														<TextInput
															icon='phone'
															label='Phone number'
															name='phoneNumber'
															required
															usePlaceholder
															change={updateField}
														/>
													</div>
													<div className='column'>
														<TextareaInput
															label='Message'
															name='generalMessage'
															required
															usePlaceholder
															characterLimit='400'
															change={updateField}
														/>
													</div>
												</Layout>
											</Fieldset>
											<Fieldset legend='Additional requirements'>
												<CheckboxInput label='Add me to the distribution list' />
												<CheckboxInput label='Email me with latest news' />
											</Fieldset>
										</>
									);
								}
							})()}

							{(() => {
								if (enquiryType.value === "form-2") {
									return (
										<>
											<Fieldset legend='Tell us about your role and company'>
												<Layout>
													<div className='column'>
														<TextInput
															label='Title and role in the project'
															name='titleAndRole'
															required
															usePlaceholder
															change={updateField}
														/>
													</div>
													<div className='column'>
														<TextInput
															label='Company name'
															name='companyName'
															required
															usePlaceholder
															change={updateField}
														/>
													</div>
													<div className='column'>
														<SelectInput
															label='Industry'
															name='industry'
															options={[
																{
																	value: "",
																	label:
																		"Please select",
																},
																{
																	value: "1",
																	label:
																		"Option 1",
																},
																{
																	value: "2",
																	label:
																		"Option 2",
																},
																{
																	value: "3",
																	label:
																		"Option 3",
																},
															]}
															change={updateField}
														/>
													</div>
													<div className='column'>
														<TextInput
															label='Website URL'
															name='websiteURL1'
															usePlaceholder
															change={updateField}
														/>
													</div>
													<div className='column'>
														<TextInput
															label='Website URL'
															name='websiteURL2'
															usePlaceholder
															change={updateField}
														/>
													</div>
												</Layout>
											</Fieldset>
										</>
									);
								}
							})()}

							{(() => {
								if (enquiryType.value) {
									return (
										<Stack depth='2'>
											<ButtonGroup alignment='right'>
												<Button
													text='Send enquiry'
													disabled={!formValid}
													click={submitForm}
												/>
											</ButtonGroup>
										</Stack>
									);
								}
							})()}
						</Form>
					);
				} else {
					return (
						<>
							<Stack depth='2'>
								<Heading level='3' appearance='4'>
									Thank you for taking the time to complete
									this form
								</Heading>
								<Paragraph level='2'>
									Consectetur adipiscing elit. Integer semper
									urna eleifend leo tempus lacinia id id nulla
								</Paragraph>
							</Stack>
						</>
					);
				}
			})()}
		</>
	);
};

export default ContactForm;

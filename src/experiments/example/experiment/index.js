import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import {
	getAuth,
	isSignInWithEmailLink,
	signInWithEmailLink,
} from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

import PageSection from "../../../components/01_arrangements/page-section/";
import Heading from "../../../components/01_arrangements/heading/";
import Paragraph from "../../../components/01_arrangements/paragraph/";
import Stack from "../../../components/01_arrangements/stack/";
import ButtonGroup from "../../../components/01_arrangements/button-group/";
import Modal from "../../../components/02_patterns/modal/";
import Button from "../../../components/02_patterns/button/";
import TimeBar from "../../../components/02_patterns/time-bar/";

const Experiment = (props) => {
	const [name, setName] = useState(null);
	const [participant, setParticipant] = useState(null);
	const [testState, setTestState] = useState(null);
	const [stage, setStage] = useState(null);
	const [grid, setGrid] = useState(null);

	const gridRef = useRef(null);

	const createUser = () => {
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

					const date = new Date();

					const theParticipant = {
						uid: result.user.uid,
						date: date.toDateString(),
						started: false,
						finished: false,
						timeCompleted: null,
						variant: null,
						name: name,
						grid: null,
						attempts: 0,
						revealed: [],
					};

					setParticipant(theParticipant);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("Error: ", errorCode, errorMessage);
				});
		}
	};

	const matchAndReveal = (index, number) => {
		if (stage === 2) {
			let attempts = participant.attempts,
				revealed = participant.revealed;

			console.log("revealed.length + 1: ", revealed.length + 1);
			console.log("number: ", number);

			if (parseInt(number) === revealed.length + 1) {
				console.log("Correct");
				revealed.push(number);
				gridRef.current.children[index].className = "valid";

				if (revealed.length === participant.grid.length) {
					setTimeout(() => {
						setTestState("finished");
					}, 600);
				}
			} else {
				console.log("Incorrect");

				gridRef.current.children[index].className = "invalid";

				setTimeout(() => {
					gridRef.current.children[index].className = "";
				}, 700);
			}

			attempts++;

			setParticipant({
				...participant,
				attempts: attempts,
				revealed: revealed,
			});
		}
	};

	//Any time we update participant, save it to the realtime database.
	useEffect(() => {
		if (participant) {
			const db = getDatabase();
			set(ref(db, "participants/" + participant.uid), participant);
		}
	}, [participant]);

	//When the Participant chooses to continue, start the test.
	useEffect(() => {
		if (testState === "started") {
			(async () => {
				let grid = [];
				//Build grids
				const buildGrid = async () => {
					let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9],
						i = nums.length,
						j = 0;

					while (i--) {
						j = Math.floor(Math.random() * (i + 1));
						grid.push(nums[j]);
						nums.splice(j, 1);
					}

					setGrid(grid);
				};
				await buildGrid();

				//Update participant

				const theParticipant = {
					...participant,
					started: Date.now(),
					grid: grid,
				};
				setParticipant(theParticipant);

				//SetTimeout to hide numbers after 10 seconds
			})().catch((err) => {
				console.error(err);
			});
		}
	}, [testState]);

	//Initialise the app by ensuring the Participant is authenticated in Firebase
	useEffect(() => {
		createUser();
	}, []);

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`experiment ${props.classes}`}
			stage={stage}
		>
			<Modal active={!testState}>
				<Stack>
					{(() => {
						if (!name) {
							return <Heading level='2'>Hi there</Heading>;
						} else {
							return <Heading level='2'>Hi, {name}</Heading>;
						}
					})()}
					<Paragraph level='1'>
						On the following page you will see a grid containing the
						numbers 1 to 9. The numbers are in a random order and
						will be hidden from view after ten seconds.
					</Paragraph>
					<Paragraph level='1'>
						Once prompted, it is your goal to click on the squares
						to reveal the numbers in correct numerical order
						<em>1</em>,<em>2</em>,<em>3</em>,<em>4</em>,<em>5</em>,
						<em>6</em>,<em>7</em>,<em>8</em>, and
						<em>9</em>.
					</Paragraph>
					<Paragraph level='1'>
						If you make a mistake the square will flash red, but
						please keep going.
					</Paragraph>
					<Paragraph level='1'>
						This is not a test of speed, but we have given five
						minutes to complete the task after which the experiment
						will finish.
					</Paragraph>
				</Stack>
				<ButtonGroup alignment='center'>
					<Button
						variant='secondary'
						text='Continue'
						click={() => {
							setTestState("started");
							setStage(1);
						}}
					/>
				</ButtonGroup>
			</Modal>

			{(() => {
				if (testState === "started") {
					return (
						<div className='wrapper'>
							<PageSection variant='full-page'>
								<TimeBar
									label={
										stage === 1
											? "Time remaining before numbers are hidden"
											: "Now click to reveal the numbers in order 1 - 9."
									}
									timeout='10'
									end={() => {
										setStage(2);
									}}
								/>

								<div className='grid' ref={gridRef}>
									{grid &&
										grid.map((item, index) => {
											return (
												<div
													key={`_${index}`}
													onClick={() => {
														matchAndReveal(
															index,
															item
														);
													}}
												>
													<span>{item}</span>
												</div>
											);
										})}
								</div>
							</PageSection>
						</div>
					);
				} else if (testState === "finished") {
					return (
						<Modal active>
							<Stack>
								{(() => {
									if (!name) {
										return (
											<Heading
												level='2'
												alignment='center'
											>
												Thanks for taking part!
											</Heading>
										);
									} else {
										return (
											<Heading
												level='2'
												alignment='center'
											>
												Thanks for taking part, {name}!
											</Heading>
										);
									}
								})()}
								<Paragraph level='1' alignment='center'>
									We're very grateful for your time.
								</Paragraph>
							</Stack>
						</Modal>
					);
				}
			})()}
		</El>
	);
};

export default Experiment;

const El = styled.div`
	.wrapper {
		max-width: var(--breakpoint-3);
		margin: 0 auto;

		.grid {
			max-height: 80vh;
			display: grid;
			gap: var(--spacing-full);
			grid-template-columns: 4fr 4fr 4fr;
			grid-auto-rows: 1fr;

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				aspect-ratio: 1 / 1;
				font-size: 100px;
				background: var(--background-color-1);
				font-family: var(--bold-font);
				cursor: not-allowed;

				span {
					opacity: 1;
					transition: opacity var(--transition-full) ease-in-out;
				}
			}

			${(props) =>
				props.stage === 2 &&
				css`
					div {
						cursor: pointer;

						span {
							opacity: 0;
						}

						&.valid {
							span {
								opacity: 1;
							}
						}

						@keyframes showInvalid {
							from {
								background-color: var(--status--error);
							}
							to {
								background: var(--background-color-1);
							}
						}

						&.invalid {
							background: var(--background-color-1);
							animation: showInvalid 0.6s ease-out forwards;
						}
					}
				`}
		}
	}
`;

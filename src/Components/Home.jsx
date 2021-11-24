import React from "react";

export default function Home() {
	return (
		<div className="h-screen ">
			<div className="grid grid-cols-2 grid-row-1 justify-items-center">
				<div className="col-span-2">
					<div className=" bg-black bg-opacity-50  absolute  w-full">
						<div className=" m-8 p-32 mt-24 mb-24 mx-16 font-bold text-5xl text-center place-content-center ">
							<p className="text-white mb-2">¡BASTA Al MALTRATO ANIMAL!</p>
							<hr />
							<p className="text-lg font-normal text-white">
								En la actualidad vivimos, de manera constante, en un clima de
								inseguridad e incertidumbre. La violencia se expresa de formas
								relacionadas entre sí. Diariamente nos vemos sacudidos por
								hechos dramáticos que nos preocupan y conmueven.
							</p>
							<button className="mb-4 bg-yellow-500   hover:text-white px-8 py-2 rounded-full text-sm">
								¡Unirse a la campaña!
							</button>
						</div>
					</div>
					<div c>
						<img src="https://www.animanaturalis.org/img/pages/full/201607/P17-75811.jpg" />
					</div>

					{/* 	<h1 className="absolute inset-x-10 bottom-0 pt-36 h-80 font-bold text-5xl bg-red-500"> */}
					{/* 		About */}
					{/* 	</h1> */}

					<div className="grid grid-cols-4 grid-rows-8 pt-6 mt-6">
						<div className="col-span-2  mx-4 text-justify">
							<h1 className="text-5xl font-semibold py-4">About</h1>
							<p className="sm">
								Los llamamos animales sin pararnos a pensar en quiénes son en
								realidad los verdaderos "animales". De todas las especies de la
								Tierra, el ser humano es la única que caza por diversión o
								"deporte", capaz de poner precio a cualquier cosa o a cualquier
								ser vivo y de experimentar con el resto de especies. El maltrato
								animal es, a la vez, un factor que predispone a la violencia
								social y, al mismo tiempo, una consecuencia de la misma. Forma
								parte de la cascada de la violencia que nos va alcanzando a
								todos como individuos y como sociedad. La violencia es “un acto
								intencional que puede ser único o recurrente y cíclico, dirigido
								a dominar, controlar, agredir o lastimar a otros. Casi siempre
								es ejercida por las personas de mayor jerarquía, es decir, las
								que tienen el poder en una relación, pero también se puede
								ejercer sobre objetos, animales o contra sí mismo”.
							</p>
						</div>
						<div className="col-span-2">
							<img src="https://forojuridico.mx/wp-content/uploads/2020/01/MaltratoAnimal.jpg" />
						</div>
						<div className="col-span-2">
							<img src="https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/videovigilancia-mataderos.jpg?itok=zqoJ0fP6" />
						</div>
						<div className="col-span-2  text-justify mx-2 py-2">
							En las familias en las que hay violencia, ésta es más
							frecuentemente dirigida hacia los más débiles, lo que incluye
							ancianos, mujeres, niños y animales de compañía. El maltrato hacia
							los animales es tolerado por aquellos que lo observan; se
							minimizan sus causas y sus efectos, y los padres, maestros y
							comunidades que no dan importancia al abuso animal en realidad
							incuban una bomba de tiempo.
							<br />
							Debe hacerse énfasis en que la detección, prevención y tratamiento
							de la violencia hacia los animales es un acto de humanidad en sí
							mismo. Los animales son criaturas que se encuentran, en relación
							al ser humano, en un nivel de inferioridad dentro de la escala
							evolutiva; esto nos hace responsables de su bienestar, ya que
							tener supremacía lleva consigo una obligación, una
							responsabilidad, que es la de cumplir como guardián de las
							especies inferiores en términos intelectuales. Si realmente
							queremos combatir la violencia, una parte de nuestra lucha
							consiste también en erradicar el maltrato a otros seres vivos.
						</div>
						<div className="col-span-4 bg-gray-300">
							<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
								<div class="w-full text-center pb-8">
									<svg
										class="mx-auto"
										width="48"
										height="42"
										viewBox="0 0 48 42"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.6153 19.154H10.1537C9.38437 19.154 8.73037 18.8849 8.19185 18.3463C7.65363 17.8078 7.38417 17.154 7.38417 16.3845V15.4619C7.38417 13.4233 8.10546 11.6831 9.54795 10.2406C10.9903 8.79859 12.7309 8.0773 14.7693 8.0773H16.6153C17.1152 8.0773 17.5477 7.89453 17.9133 7.52929C18.2786 7.16384 18.4613 6.73131 18.4613 6.23128V2.53864C18.4613 2.03872 18.2785 1.60578 17.9133 1.24034C17.5478 0.875398 17.1153 0.692322 16.6153 0.692322H14.7693C12.7691 0.692322 10.8608 1.08212 9.04327 1.86059C7.22595 2.63958 5.65404 3.69257 4.32694 5.01967C2.99994 6.34616 1.94726 7.91817 1.16837 9.7357C0.389491 11.553 0 13.4618 0 15.4618V35.769C0 37.3083 0.538216 38.6152 1.61515 39.6926C2.69219 40.7693 4.00019 41.3076 5.53856 41.3076H16.616C18.1542 41.3076 19.4618 40.7693 20.539 39.6926C21.6157 38.6152 22.1542 37.3083 22.1542 35.769V24.6926C22.1542 23.1536 21.6157 21.8466 20.5383 20.7692C19.4616 19.6925 18.1535 19.154 16.6153 19.154Z"
											fill="#FFD100"
										/>
										<path
											d="M46.3856 20.7692C45.309 19.6925 44.0013 19.154 42.4626 19.154H36.0011C35.2322 19.154 34.5776 18.8849 34.04 18.3463C33.5012 17.8078 33.2323 17.154 33.2323 16.3845V15.4619C33.2323 13.4233 33.9536 11.6831 35.3954 10.2406C36.8372 8.79859 38.5777 8.0773 40.6171 8.0773H42.4627C42.9627 8.0773 43.3955 7.89453 43.7608 7.52929C44.1258 7.16384 44.3092 6.73131 44.3092 6.23128V2.53864C44.3092 2.03872 44.1259 1.60578 43.7608 1.24034C43.3956 0.875398 42.9628 0.692322 42.4627 0.692322H40.6171C38.6158 0.692322 36.7079 1.08212 34.8899 1.86059C33.0729 2.63958 31.5015 3.69257 30.1744 5.01967C28.8473 6.34616 27.7941 7.91817 27.0155 9.7357C26.2368 11.553 25.8468 13.4618 25.8468 15.4618V35.769C25.8468 37.3083 26.3855 38.6152 27.4622 39.6926C28.5389 40.7693 29.8466 41.3076 31.3852 41.3076H42.462C44.0006 41.3076 45.3082 40.7693 46.3849 39.6926C47.4623 38.6152 47.9999 37.3083 47.9999 35.769V24.6926C48 23.1535 47.4623 21.8466 46.3856 20.7692Z"
											fill="#FFD100"
										/>
									</svg>

									<h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2 ">
										BLOG
									</h1>
									<p class="text-black font-normal text-base">
										Estas son algunas de las opiniones, de las personas que
										estan en contra del malatrato animal.
									</p>
								</div>
								<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-white rounded-lg p-6">
										<div className="flex items-center space-x-6 mb-4">
											<img
												className="h-28 w-28 object-cover object-center rounded-full"
												src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
												alt="photo"
											/>
											<div>
												<p className="text-xl text-gray-700 font-normal mb-1">
													Dany Bailey
												</p>

												<form>
													<p className="clasificacion">
														<input
															id="radio1"
															type="radio"
															name="estrellas"
															value="5"
														/>
														<label for="radio1">★</label>
														<input
															id="radio2"
															type="radio"
															name="estrellas"
															value="4"
														/>
														<label for="radio2">★</label>
														<input
															id="radio3"
															type="radio"
															name="estrellas"
															value="3"
														/>
														<label for="radio3">★</label>
														<input
															id="radio4"
															type="radio"
															name="estrellas"
															value="2"
														/>
														<label for="radio4">★</label>
														<input
															id="radio5"
															type="radio"
															name="estrellas"
															value="1"
														/>
														<label for="radio5">★</label>
													</p>
												</form>
											</div>
										</div>
										<div>
											<p className="text-gray-700 leading-loose font-normal text-base">
												El maltrato animal es un tema de mucha controversia ya
												que en ocasiones los humanos podemos ser muy
												insensibles. Mucha gente piensa que las personas que
												defienden a los animales son demasiado sentimentales, y
												por lo tanto sienten la necesidad de cuidarlos.
											</p>
										</div>
									</div>
									<div className="bg-white rounded-lg p-6">
										<div className="flex items-center space-x-6 mb-4">
											<img
												className="h-28 w-28 object-cover object-center rounded-full"
												src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
												alt="photo"
											/>
											<div>
												<p className="text-xl text-gray-700 font-normal mb-1">
													Lucy Carter
												</p>

												<form>
													<p className="clasificacion">
														<input
															id="radio1"
															type="radio"
															name="estrellas"
															value="5"
														/>
														<label for="radio1">★</label>
														<input
															id="radio2"
															type="radio"
															name="estrellas"
															value="4"
														/>
														<label for="radio2">★</label>
														<input
															id="radio3"
															type="radio"
															name="estrellas"
															value="3"
														/>
														<label for="radio3">★</label>
														<input
															id="radio4"
															type="radio"
															name="estrellas"
															value="2"
														/>
														<label for="radio4">★</label>
														<input
															id="radio5"
															type="radio"
															name="estrellas"
															value="1"
														/>
														<label for="radio5">★</label>
													</p>
												</form>
											</div>
										</div>
										<div>
											<p className="text-gray-700 leading-loose font-normal text-base">
												Es conocido por la sociedad civil, la academia y las
												autoridades que en nuestro país existen preocupantes
												problemas de maltrato animal. Gracias a las redes
												sociales y prensa en general han salido a la luz pública
												casos emblemáticos como el ocurrido en Copiapó, donde
												una hembra canina preñada fue amarrada a una camioneta y
												arrastrada kilómetros por su dueño, o el del perro
												ahorcado en un restaurant de comida China en Iquique.
											</p>{" "}
										</div>
									</div>
									<div className="bg-white rounded-lg p-6">
										<div className="flex items-center space-x-6 mb-4">
											<img
												className="h-28 w-28 object-cover object-center rounded-full"
												src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
												alt="photo"
											/>
											<div>
												<p className="text-xl text-gray-700 font-normal mb-1">
													Jade Bradley
												</p>

												<form>
													<p className="clasificacion">
														<input
															id="radio1"
															type="radio"
															name="estrellas"
															value="5"
														/>
														<label for="radio1">★</label>
														<input
															id="radio2"
															type="radio"
															name="estrellas"
															value="4"
														/>
														<label for="radio2">★</label>
														<input
															id="radio3"
															type="radio"
															name="estrellas"
															value="3"
														/>
														<label for="radio3">★</label>
														<input
															id="radio4"
															type="radio"
															name="estrellas"
															value="2"
														/>
														<label for="radio4">★</label>
														<input
															id="radio5"
															type="radio"
															name="estrellas"
															value="1"
														/>
														<label for="radio5">★</label>
													</p>
												</form>
											</div>
										</div>
										<div>
											<p className="text-gray-700 leading-loose font-normal text-base">
												Cada vez es más frecuente el maltrato a los animales.
												Este se puede manifestar de diversas maneras: peleas,
												abandonos y palizas. Mención aparte necesitarían las
												corridas de toros y algunas fiestas populares.
											</p>
										</div>
									</div>
									<div className="bg-white rounded-lg p-6">
										<div className="flex items-center space-x-6 mb-4">
											<img
												className="h-28 w-28 object-cover object-center rounded-full"
												src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
												alt="photo"
											/>
											<div>
												<p className="text-xl text-gray-700 font-normal mb-1">
													Lucas Smith Carter
												</p>

												<form>
													<p className="clasificacion">
														<input
															id="radio1"
															type="radio"
															name="estrellas"
															value="5"
														/>
														<label for="radio1">★</label>
														<input
															id="radio2"
															type="radio"
															name="estrellas"
															value="4"
														/>
														<label for="radio2">★</label>
														<input
															id="radio3"
															type="radio"
															name="estrellas"
															value="3"
														/>
														<label for="radio3">★</label>
														<input
															id="radio4"
															type="radio"
															name="estrellas"
															value="2"
														/>
														<label for="radio4">★</label>
														<input
															id="radio5"
															type="radio"
															name="estrellas"
															value="1"
														/>
														<label for="radio5">★</label>
													</p>
												</form>
											</div>
										</div>
										<div>
											<p className="text-gray-700 leading-loose font-normal text-base">
												Para prevenir el maltrato animal, sugiero que la
												promoción de una tenencia responsable de mascotas,
												programas de adopción para animales que están en
												albergues y campañas de esterilización, así como una
												cultura que cambie la idea de que el propietario de un
												animal tiene el derecho a maltratarlo, matarlo o hacer
												lo que quiera, sólo por haberlo comprado.
											</p>
										</div>
									</div>
								</div>
							</section>
						</div>{" "}
						{/* end */}
						<div className="col-span-4">
							<section className="imgcontact w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat">
								<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
									<div className="lg:w-3/6 lg:pr-0 pr-0 bg-black bg-opacity-50 p-8 ">
										<h1 className="font-extrabold text-5xl text-white">
											¡NO al maltrato animal!
										</h1>
										<p className="leading-relaxed mt-4 text-white">
											Es importante esta petición porque los animales no son
											cosas sino que son individuos que tienen conciencia, que
											sienten y tienen el derecho a ser respetados, cuidados,
											dignificados por los seres humanos. No queremos más ver a
											pobres caballos tirando carros pesados y que están
											enfermos y castigados y que sea ya normal ver tanta
											injusticia. Como ciudadanos, estamos cansados de ver
											tantos perros en situación de calle, muertos de hambre,
											reproduciéndose cada vez más, enfermos y que todo siga
											igual. Queremos una ciudad que respete a sus animales,
											porque ellos tienen derecho de pertenecer y vivir en este
											mundo.
										</p>
									</div>
									<div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
										<div className="relative mb-4">
											<label
												for="full-name"
												className="leading-7 text-sm text-gray-600"
											>
												Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
											/>
										</div>
										<div className="relative mb-4">
											<label
												for="email"
												className="leading-7 text-sm text-gray-600"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
											/>
										</div>
										<div className="relative mb-4">
											<label
												for="email"
												className="leading-7 text-sm text-gray-600"
											>
												Phone
											</label>
											<input
												type="email"
												id="phone"
												name="phone"
												className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
											/>
										</div>
										<div className="relative mb-4">
											<label
												for="email"
												className="leading-7 text-sm text-gray-600"
											>
												Message
											</label>
											<textarea
												id="message"
												name="message"
												rows="4"
												className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
											>
												{" "}
											</textarea>
										</div>
										<button className="text-white bg-green-900 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-green-800 text-lg">
											Submit
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

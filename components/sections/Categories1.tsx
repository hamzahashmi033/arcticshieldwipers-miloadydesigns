
import Link from "next/link"

export default function Categories1() {
	return (
		<>

			<section className="section-box background-body py-96">
				<div className="container">
					<div className="row align-items-end mb-40">
						<div className="col-md-8">
							<h3 className="neutral-1000 wow fadeInUp">Our Categories</h3>
							<p className="text-xl-medium neutral-500 wow fadeInUp">Find the best products from out collection</p>
						</div>
						<div className="col-md-4">
							{/* <div className="d-flex justify-content-md-end mt-md-0 mt-4">
								<Link className="btn btn-primary wow fadeInUp" href="/cars-list-1">
									View More
									<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div> */}
						</div>
					</div>
					<div className="box-list-populars">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="card-popular background-card hover-up wow fadeIn" data-wow-delay="0.1s">
									<div className="card-image">
										<Link className="card-title" href="/"><img src="/assets/imgs/categories/categories-1/banner1.jpg" alt="Carento" /></Link>
									</div>
									<div className="card-info">
										<Link className="card-title" href="/">Car Wiper Protection Cover</Link>
										<div className="card-meta">
											<div className="meta-links"><Link href="/">Arctic Shield Wipers</Link></div>
											<div className="card-button">
												<Link href="/">
													<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="card-popular background-card hover-up wow fadeIn" data-wow-delay="0.1s">
									<div className="card-image">
										<Link className="card-title" href="/"><img src="/assets/imgs/categories/categories-1/banner2.jpg" alt="Carento" /></Link>
									</div>
									<div className="card-info">
										<Link className="card-title" href="/">Winter Gloves</Link>
										<div className="card-meta">
											<div className="meta-links"><Link href="/">Arctic Shield Wipers</Link></div>
											<div className="card-button">
												<Link href="/">
													<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="card-popular background-card hover-up wow fadeIn" data-wow-delay="0.1s">
									<div className="card-image">
										<Link className="card-title" href="/"><img src="/assets/imgs/categories/categories-1/banner3.jpg" alt="Carento" /></Link>
									</div>
									<div className="card-info">
										<Link className="card-title" href="/">Winter Ice Scrapers</Link>
										<div className="card-meta">
											<div className="meta-links"><Link href="/">Arctic Shield Wipers</Link></div>
											<div className="card-button">
												<Link href="/">
													<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="card-popular background-card hover-up wow fadeIn" data-wow-delay="0.1s">
									<div className="card-image">
										<Link className="card-title" href="/"><img src="/assets/imgs/categories/categories-1/banner4.jpg" alt="Carento" /></Link>
									</div>
									<div className="card-info">
										<Link className="card-title" href="/">Merchendise</Link>
										<div className="card-meta">
											<div className="meta-links"><Link href="/">Arctic Shield Wipers</Link></div>
											<div className="card-button">
												<Link href="/">
													<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

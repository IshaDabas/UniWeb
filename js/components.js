const comp_header = `
	<header id="header" id="home">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
						<ul>
							<li><a href="#"><i class="fa fa-facebook icon-font-size-header"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter icon-font-size-header"></i></a></li>
							<li><a href="#"><i class="fa fa-youtube icon-font-size-header"></i></a></li>
						</ul>
					</div>
					<div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
						<a href="tel:01744-225803 , 225803"><span class="lnr lnr-phone-handset"></span> <span
								class="text">01744-225803 , 225803</span></a>
						<a href="mailto:registrar@skau.ac.in"><span class="lnr lnr-envelope"></span> <span
								class="text">registrar@skau.ac.in</span></a>
					</div>
				</div>
			</div>
		</div>
		<div class="container main-menu">
			<div class="row">
				<div id="logo">
					<a href="index.html"><img src="img/blog/logo.png" alt="" title="" /></a>
				</div>
				<div class="col-12">&nbsp;</div>
				<nav id="nav-menu-container">
					<ul class="nav-menu">
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="academics.html">Academics</a></li>
						<li><a href="admsn.html">Admission 2024-25</a>
							<ul>
								<li><a href="UG.html">U.G Admission</a></li>
								<li><a href="PG.html">P.G Admission</a></li>
								<li><a href="dip.html">Diploma</a></li>
								<li><a href="panchkarma.html">Panchakarma Assistant Course</a></li>
								<li><a href="dpttc.html">DPTTC</a></li>
								<li><a href="ccys.html">CCYS</a></li>
							</ul>

						</li>
						<li><a href="examination.html">Examination</a></li>
						<li class="menu-has-children"><a href="">Blog</a>
							<ul>
								<li><a href="ongoing-res.html">Ongoing Research</a></li>
								<li><a href="complete-res.html">Completed Research</a></li>
								<li><a href="research3.html">Research Laboratory</a></li>
							</ul>
						</li>
						<li class="menu-has-children"><a href="">RTI/Tendors</a>
							<ul>
								<li><a href="rti.html">RTI</a></li>
								<li><a href="tendors.html">Tendors</a></li>
							</ul>
						</li>
						<li><a href="appoinment.html">Appointments/Recruitments</a></li>
						<li><a href="leaveRule.html">Leave Rule</a></li>
					</ul>
				</nav><!-- #nav-menu-container -->
			</div>
		</div>
	</header><!-- #header -->
`;

const footer = `
	<!-- start footer Area -->
	<footer class="footer-area section-gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h4>Quick Links</h4>
						<ul>
							<li><a href="#">Final Seniority of Professor</a></li>
							<li><a href="#">Complaint</a></li>
							<li><a href="#">Introduction of Herbs</a></li>
							<li><a href="#">Past Admission</a></li>
							<li><a href="#">Daily News</a></li>
							<li><a href="#">Department of AYUSH</a></li>
							<li><a href="#">Central Council of Indian Medicine</a></li>
							<li><a href="#">Other Links</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h4>Important Links</h4>
						<ul>
							<li><a href="#">Transcript Form</a></li>
							<li><a href="#">Technical and Financial Bids separately for supply of printed Detailed marks
									card</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h4>Contact Us</h4>
						<ul>
							<li><a href="#">Link Or Text</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-bottom row align-items-center justify-content-between">
				<p class="footer-text m-0 col-lg-6 col-md-12 text-white">
					Copyright &copy;
					<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
				</p>
				<div class="col-lg-6 col-sm-12 footer-social">
					<a href="#"><i class="fa fa-facebook icon-font-size-footer"></i></a>
					<a href="#"><i class="fa fa-twitter icon-font-size-footer"></i></a>
					<a href="#"><i class="fa fa-youtube icon-font-size-footer"></i></a>
				</div>
			</div>
		</div>
	</footer>
	<!-- End footer Area -->
	<script>
		AOS.init();

		// You can also pass an optional settings object
		// below listed default settings
		AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of 'data-aos' as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		

		// Settings that can be overridden on per-element basis, by 'data-aos-*' attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

		});
	</script>
`;

const head = `
<head>
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Favicon-->
	<link rel="shortcut icon" href="img/fav.png">
	<!-- Author Meta -->
	<meta name="author" content="Digisoft">
	<!-- Meta Description -->
	<meta name="description" content="">
	<!-- Meta Keyword -->
	<meta name="keywords" content="">
	<!-- meta character set -->
	<meta charset="UTF-8">
	<!-- Site Title -->
	<title>SKA University</title>

	<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
	<link rel="stylesheet" href="css/linearicons.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="css/nice-select.css">
	<link rel="stylesheet" href="css/animate.min.css">
	<link rel="stylesheet" href="css/owl.carousel.css">
	<link rel="stylesheet" href="css/jquery-ui.css">
	<link rel="stylesheet" href="css/main.css">
	<!-- JS -->
	<script src="js/footer.js"></script>
	<!-- Animate On Scroll CSS & JS CDN -->
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
`;

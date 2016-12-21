export class appdata {
	static Data() {
		return {
			Preloader: {
				loaded: false,
				logoSrc: './images/Logo-RedLion.svg',
				arrowSrc: './images/Icon-LongArrow.svg'
			},
			Menu: {
				open: false,
				links: [
					{
						text: 'About',
						link: '#about'
					},
					{
						text: 'Work',
						link: '#work'
					},
					{
						text: 'Partners',
						link: '#partners'
					},
					{
						text: 'Jobs',
						link: '#jobs'
					},
					{
						text: 'Contact',
						link: '#contact'
					},
				]
			},
			Jobs: {
				id: 'jobs',
				endpoint: './json/Jobs.json',
				title: 'Jobs',
				arrowSrc: './images/Icon-ShortArrow.svg',
				jobs: [],		//fetched via jobs.json at compile time
				email: {
					subject: 'I\'d love to work at Red Lion',
					address: 'mailto:jobs@redlioncanada.com'
				}
			},
			Culture: {
				id: 'culture',
				showLightbox: false,
				social: {
					linkedin: {
						link: 'https://www.linkedin.com/company/red-lion/',
						normalSrc: './images/LinkedIN.jpg',
						hoverSrc: './images/LinkedIN_Rollover.jpg'
					},
					instagram: {
						link: 'https://www.instagram.com/red_lion_canada/',
						normalSrc: './images/Instagram.jpg',
						hoverSrc: './images/Instagram_Rollover.jpg'
					}
				},
				captions: {
					Art1: 'Office art by Danny Smith',
					Art2: 'Office art by Danny Smith',
					Calories: 'Calories tell you how much you need to run',
					Squareface: 'See the world in squares',
					Closetcards: 'Come out in style'
				},
				videos: {
					redlion: "nj4SXUAt80s"
				},
				copy: 'We believe in culture. Our ability to influence culture, all of us have a butterfly effect that is exponentially larger than it was even just five years ago. The marketing formula has changed. At Red Lion we believe that formula is now based on cultural influence more than media impressions. We believe advertising is no longer just about messaging, it is about influence.'
			},
			Chalkboard: {
				background: {
					src: './images/Chalkboard.jpg'
				},
				gif: {
					src: './images/Chalkboard_GIF.gif'
				},
				border: {
					src: './images/ChalkboardBorder.png',
				}
			},
			Anchor: {
				logoSrc: './images/Logo-RedLion.svg',
				arrowSrc: './images/Icon-LongArrow.svg'
			},
			Slogan: {
				brainMaskSrc: './images/Brain_mask.svg',
				brainLeftText: 'Capitalist',
				brainLeftSrc: './images/Brain-left.svg',
				brainRightText: 'Creative',
				brainRightSrc: './images/Brain-right.svg'
			},
			About: {
				id: 'about',
				title: 'About',
				text: 'We seek solutions that truly influence culture. That can be a billboard or a digital experience, a breakthrough on a social platform or a line of clothing. A television commercial or a piece of furniture, each solution is bespoke based on a desired behaviour for our client partners. Ultimately our client partners need to impact their audience and the best way to do this is by influencing culture on their behalf. That is Red Lion.',
				text2: 'A different model, with unique ingredients, solving different questions with the outcome being one of cultural impact.'
			},
			Carousel: {
				slides: [
					{
						copy: 'A real teen’s take on Snapchat’s hot new Spectacles',
						image: './images/Carousel-1.jpg',
						link: 'https://techcrunch.com/2016/11/14/a-real-teens-take-on-snapchats-hot-new-spectacles/'
					},
					{
						copy: 'YouTube VR: A whole new way to watch… and create',
						image: './images/Carousel-2.jpg',
						link: 'https://youtube.googleblog.com/2016/11/youtube-vr-whole-new-way-to-watch-and.html'
					},
					{
						copy: 'The next manufacturing revolution is here',
						image: './images/Carousel-3.jpg',
						link: 'https://www.ted.com/talks/olivier_scalabre_the_next_manufacturing_revolution_is_here?language=en'
					},
					{
						copy: '3 Drone Delivery Startups Using Flying Drones',
						image: './images/Carousel-4.jpg',
						link: 'http://www.nanalyze.com/2016/11/drone-delivery-startups/'
					},
					{
						copy: 'Barack Obama on the Future of Humanity',
						image: './images/Carousel-5.jpg',
						link: 'https://www.wired.com/2016/10/president-obama-mit-joi-ito-interview/'
					}
				]
			},
			Work: {
				id: 'work',
				title: 'Work',
				endpoint: './json/Work.json',
				arrowSrc: './images/Icon-ShortArrow.svg',
				work: [],		//fetched via work.json at compile time
				currentlySelectedWork: -1
			},
			Partners: {
				id: 'partners',
				title: 'Partners',
				arrowSrc: './images/Icon-ShortArrow.svg',
				partners: [
					{
						name: 'Havergal',
						imageSrc: './images/Logo-Havergal.svg',
						link: undefined
					},
					{
						name: 'Cadillac',
						imageSrc: './images/Logo-Cadillac.svg',
						link: undefined
					},
					{
						name: 'Dynacare',
						imageSrc: './images/Logo-Dynacare.svg',
						link: undefined
					},
					{
						name: 'Drake General Store',
						imageSrc: './images/Logo-DrakeGeneralStore.svg',
						link: undefined
					},
					{
						name: 'Jenn-Air',
						imageSrc: './images/Logo-JennAir.svg',
						link: undefined
					},
					{
						name: 'Maytag',
						imageSrc: './images/Logo-Maytag.svg',
						link: undefined
					},
					{
						name: 'Whirlpool',
						imageSrc: './images/Logo-Whirlpool.svg',
						link: undefined
					},
					{
						name: 'Royaltie',
						imageSrc: './images/Logo-Royaltie.svg',
						link: undefined
					},
					{
						name: 'KitchenAid',
						imageSrc: './images/Logo-KitchenAid.svg',
						link: undefined
					},
					{
						name: 'Toronto Silent Film Festival',
						imageSrc: './images/Logo-TSFF.svg',
						link: undefined
					},
					{
						name: 'Babsocks',
						imageSrc: './images/Logo-Babsocks.svg',
						link: undefined
					},
					{
						name: 'Italian by Night',
						imageSrc: './images/Logo-ItalianByNight.svg',
						link: undefined
					},
					{
						name: 'Shangri-La Hotel',
						imageSrc: './images/Logo-Shangri-La.svg',
						link: undefined
					},
				]
			},
			Contact: {
				id: 'contact',
				contact: {
					title: 'Contact',
					arrowSrc: './images/Icon-ShortArrow.svg'
				},
				email: {
					title: 'Email',
					text: 'info@redlioncanada.com',
					link: 'mailto:info@redlioncanada.com',
					backgroundColour: '#c2c2c2'
				},
				phone: {
					title: 'Phone',
					text: '416 603 6500 Ext. 5316',
					link: 'tel://416-603-6500',
					backgroundColour: '#85cbcd'
				},
				address: {
					title: 'Address',
					text: '111 Queen St E, Suite 400\nToronto, ON, M5C 1S2',
					link: 'https://www.google.ca/maps/place/Red+Lion+Canada/@43.6532941,-79.3763123,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb36ad0991a9:0x8feadbddc141b1ed!8m2!3d43.6532941!4d-79.3741236',
					backgroundColour: '#48bb85',
					slantVectorSrc: './images/Address-Slant.svg'
				},
				map: {
					imageSrc: './images/Map.svg',
					imagePinSrc: './images/Pin.svg',
					link: 'https://www.google.ca/maps/place/Red+Lion+Canada/@43.6532941,-79.3763123,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb36ad0991a9:0x8feadbddc141b1ed!8m2!3d43.6532941!4d-79.3741236',
				}
			}
		}
	}

	static Analytics() {
		return {

		}
	}
}
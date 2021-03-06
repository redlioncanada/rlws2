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
					address: 'mailto:info@redlioncanada.com'
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
				copyPrefix: 'INFLUENTIAL',
				copy: 'CULTURE: We believe in culture. The ability each of us has to influence the world around us has grown exponentially in just a few short years. The marketing formula has changed, too. At Red Lion, we believe that cultural influence matters more than media impressions. We believe advertising is no longer just about the message: it’s about what the message can do.'
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
				brainLeftText: 'Left Brain',
				brainLeftSrc: './images/Brain-left.svg',
				brainRightText: 'Right Brain',
				brainRightSrc: './images/Brain-right.svg'
			},
			About: {
				id: 'about',
				title: 'About',
				textPrefix: 'CULTURAL',
				text: 'INFLUENCE: We create solutions that influence culture. Whether it’s a billboard or a breakthrough on a social platform, a digital experience or a line of clothing. Each solution is bespoke based on our client partner’s desired audience behaviour. That’s what Red Lion is all about: a different model made up of unique ingredients, designed to solve any challenge via cultural influence.',
				text2: ''
			},
			Carousel: {
				title: 'Things we like',
				slides: [
					{
						copy: 'Some cultural cuisines make it big',
						image: './images/Carousel-1.jpg',
						link: 'http://www.baystbull.com/home/2017/11/1/why-some-cultural-cuisines-make-it-big-while-others-flounder'
					},
					{
						copy: 'Prepare for a voice search revolution',
						image: './images/Carousel-2.jpg',
						link: 'https://www.forbes.com/sites/jaysondemers/2018/01/09/why-you-need-to-prepare-for-a-voice-search-revolution/#d26f09834af2'
					},
					{
						copy: 'Trivia game takes over your life',
						image: './images/Carousel-3.jpg',
						link: 'https://www.popsugar.com/news/What-HQ-Trivia-44478085'
					},
					{
						copy: 'Startups that seek to disrupt',
						image: './images/Carousel-4.jpg',
						link: 'https://hbr.org/2017/11/startups-that-seek-to-disrupt-get-more-funding-than-those-that-seek-to-build'
					},
					{
						copy: 'An interactive coffee experience in Shanghai',
						image: './images/Carousel-5.jpg',
						link: 'http://www.thedrum.com/news/2017/12/05/starbucks-launches-interactive-coffee-experience-shanghai-it-boosts-presence-china'
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
						name: 'Shangri-La Hotel',
						imageSrc: './images/Logo-Shangri-La.svg',
						link: undefined
					},
					{
						name: 'The Brain Project',
						imageSrc: './images/Logo-TheBrainProject.svg',
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
					link: 'tel:416-603-6500',
					backgroundColour: '#85cbcd'
				},
				address: {
					title: 'Address',
					text: '111 Queen St E, Suite 305\nToronto, ON, M5C 1S2',
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
export class appdata {
	static Data() {
		return {
			Jobs: {
				id: 'jobs',
				endpoint: './json/Jobs.json',
				title: 'Jobs',
				arrowSrc: './images/Icon-ShortArrow.svg',
				jobs: [],		//fetched via jobs.json at run time
				email: {
					subject: 'I\'d love to work at Red Lion',
					address: 'mailto:jobs@redlioncanada.com'
				}
			},
			Culture: {
				id: 'culture'
			},
			Menu: {
				background: {
					src: './images/Chalkboard.jpg'
				},
				links: [
					{
						text: 'work',
						link: '#work'
					},
					{
						text: 'partners',
						link: '#partners'
					},
					{
						text: 'jobs',
						link: '#jobs'
					},
					{
						text: 'contact',
						link: '#contact'
					},
				],
				slideshow: {
					borderSrc: './images/ChalkboardBorder.png',
					src: [
						'./images/Chalkboard-1.jpg',
						'./images/Chalkboard-2.jpg',
						'./images/Chalkboard-3.jpg',
						'./images/Chalkboard-4.jpg',
						'./images/Chalkboard-5.jpg',
						'./images/Chalkboard-6.jpg',
						'./images/Chalkboard-7.jpg',
						'./images/Chalkboard-8.jpg',
						'./images/Chalkboard-9.jpg',
						'./images/Chalkboard-10.jpg',
						'./images/Chalkboard-11.jpg',
						'./images/Chalkboard-12.jpg'
					]
				}
			},
			Anchor: {
				logoSrc: './images/Logo-RedLion.svg',
				arrowSrc: './images/Icon-LongArrow.svg'
			},
			Slogan: {
				brainSrc: './images/Brain.svg',
				brainMaskSrc: './images/Brain_mask.svg',
				brainLeftText: 'Capitalist',
				brainRightText: 'Creative',
				text: 'Left brain and right brain thinking are no longer that distant from one another. It is our belief that today, creativity and logic are intrinsically linked and each strengthens the other.'
			},
			Work: {
				id: 'work',
				title: 'Latest work\n and news',
				endpoint: './json/Work.json',
				arrowSrc: './images/Icon-ShortArrow.svg',
				work: [],		//fetched via jobs.json at run time
				currentlySelectedWork: -1
			},
			Partners: {
				id: 'partners',
				title: 'Our\npartners',
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
					backgroundColour: '#82cbab',
					slantVectorSrc: './images/Address-Slant.svg'
				},
				map: {
					imageSrc: './images/Map.jpg',
					imagePinSrc: './images/Map-pin.png'
				}
			}
		}
	}

	static Analytics() {
		return {

		}
	}
}
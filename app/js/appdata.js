export class appdata {
	static Data() {
		return {
			Jobs: {
				endpoint: './json/Jobs.json',
				title: 'Jobs',
				arrowSrc: './images/Icon-ShortArrow.svg',
				jobs: [],		//fetched via jobs.json at run time
				email: {
					subject: 'I\'d love to work at Red Lion',
					address: 'mailto:jobs@redlioncanada.com'
				}
			},
			Menu: {
				background: {
					src: './images/Chalkboard.jpg',
					naturalWidth: 1600,
					naturalHeight: 600
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
					naturalWidth: 600,
					naturalHeight: 600,
					currentSlide: 0,
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
			}
		}
	}

	static Analytics() {
		return {

		}
	}
}
export class appdata {
	static Data() {
		return {
			Jobs: {
				title: 'Jobs',
				arrowSrc: './images/Diagonal_arrow.jpg',
				jobs: [],		//fetched via jobs.json at run time
				email: {
					subject: 'I\'d love to work at Red Lion',
					address: 'mailto:jobs@redlioncanada.com'
				}
			}
		}
	}

	static Analytics() {
		return {

		}
	}
}
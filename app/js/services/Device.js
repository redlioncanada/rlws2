class Device {
	isMobile() {
		var regex = navigator.userAgent.match(/Mobi/i)
		return !!regex && regex.length
	}

	isDesktop() {
		return !this.isMobile()
	}

	type() {
		if (isMobile()) return 'Mobile'
		else return 'Desktop'
	}
}

export let instance = new Device()
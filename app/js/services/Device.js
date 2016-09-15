class Device {
	isMobile() {
		var regex = navigator.userAgent.match(/Mobi/i)
		return !!regex && regex.length
	}

	isTablet() {
		var regex = navigator.userAgent.match(/Tablet|iPad/i)
		return !!regex && regex.length
	}

	isPhone() {
		return !this.isTablet() && this.isMobile()
	}

	isDesktop() {
		return !this.isMobile()
	}

	type() {
		if (this.isPhone()) return 'Phone'
		else if (this.isTablet()) return 'Tablet'
		else return 'Desktop'
	}
}

export let instance = new Device()
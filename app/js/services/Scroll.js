import Utils from './Utils'

class Scroll {
	constructor() {
		this.animations = {}
		this.scrollY = window.scrollY
		this.window = {
			Y1: 0,
			Y2: window.innerHeight
		}
		window.addEventListener('resize', Utils.debounce(this.__resize.bind(this), 10))
		window.addEventListener('scroll', Utils.debounce(this.__scroll.bind(this), 10))
	}

	Register(opts) {
		var id = window.btoa(opts.target.innerHTML).slice(-12)
		if (!(id in this.animations)) {
			this.animations[id] = {...opts, throttled: false}
		}
		if (!('reverse' in this.animations[id])) this.animations[id].reverse = false
		this.__update()
	}

	ForceUpdate(el) {
		var id = window.btoa(el).slice(-12)
		this.__update(id)
	}

	__resize() {
		if (this.window.Y2 !== window.innerHeight) {
			this.window.Y2 = window.innerHeight
			this.__update()
		}
	}

	__scroll() {
		if (window.scrollY !== this.scrollY) {
			this.scrollY = window.scrollY
			this.__update()
		}
	}

	__update(id) {
		var self = this
		if (typeof id !== 'undefined' && id in this.animations) {
			var state = calc(this.animations[id])
			this.animations[id] = state
		} else {
			for (var key in this.animations) {
				var state = calc(this.animations[key])
				this.animations[key] = state
			}
		}

		function calc(state) {
			var {parent, target, start, end, property, throttled, reverse} = state,
				elY1 = parent.offsetTop,
				elY2 = parent.offsetTop + parent.offsetHeight,
				windowY1 = 0,
				windowY2 = self.window.Y2,
				animationStartY = elY1 - self.window.Y2 + (elY2 - elY1)/2,
				animationEndY = (elY1 + (elY2 - elY1)/2) - self.window.Y2 / 2,
				percentAnimated = (self.scrollY - animationStartY) / (animationEndY - animationStartY),
				localThrottled = percentAnimated < 0 || percentAnimated > 1

			if (localThrottled && throttled) return {parent, target, start, end, property, throttled, reverse}
			if (percentAnimated < 0) percentAnimated = 0
			if (percentAnimated > 1) percentAnimated = 1
			if (reverse) percentAnimated = 1 - percentAnimated

			var value = (end - start) * percentAnimated,
				obj = {}
			obj[property] = value

			Velocity(target, obj, {duration: 0})

			if (localThrottled) throttled = true
			else throttled = false

			return {parent, target, start, end, property, throttled, reverse}
		}
	}
}

export let instance = new Scroll()
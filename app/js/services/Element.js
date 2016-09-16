class Element {
	constructor() {
		this.name = 'Element'
		this.subscribers = {}
		this.subscribedElements = {}
		window.addEventListener('scroll', this.handleScroll.bind(this))
	}

	IsInView(element) {
		var windowBounds = this.getWindowBounds(),
			elementBounds = this.getElementBounds(element)

		if (typeof element === 'object' && 'className' in element) {	//is a valid dom element
			return (elementBounds.Y1 <= windowBounds.Y1 && elementBounds.Y2 >= windowBounds.Y1) ||
					(elementBounds.Y1 >= windowBounds.Y1 && elementBounds.Y2 <= windowBounds.Y2) ||
					(elementBounds.Y1 < windowBounds.Y2 && elementBounds.Y2 > windowBounds.Y2)
		} else {
			console.error(`${this.name} Service: ${element} is not a valid DOM element`)
		}
	}

	handleScroll(e) {
		for (var item in this.subscribedElements) {
			var obj = this.subscribedElements[item]

			if (this.IsInView(obj.ref)) {
				if (obj.current === false) {
					this.Emit('CameIntoView', {element: obj})
				}
				obj.current = true
			} else {
				if (obj.current === true) {
					this.Emit('WentOutOfView', {element: obj})
				}
				obj.current = false
			}

			this.subscribedElements[item] = obj
		}
	}

	On(event, fn, params) {
		if (typeof event === 'string' && typeof fn === 'function') {
			if (!(event in this.subscribers)) this.subscribers[event] = []
			this.subscribers[event].push({function: fn, params: params})

			if (event === 'CameIntoView' || event === 'WentOutOfView') {
				if (!(params.element in this.subscribedElements)) {
					this.subscribedElements[params.element] = {
						ref: params.element,
						current: this.IsInView(params.element),
					}
				}
			}
		}
	}

	Emit(event) {
		if (event in this.subscribers) {
			for (var item in this.subscribers[event]) {
				var sub = this.subscribers[event][item]
				sub.function.call(this,sub.params)
			}
		}
	}

	getWindowBounds() {
		return {
			Y1: window.scrollY,
			Y2: window.scrollY + window.innerHeight,
			X1: window.scrollX,
			X2: window.scrollX + window.innerWidth
		}
	}

	getElementBounds(el) {
		return {
			Y1: el.offsetTop,
			Y2: el.offsetTop + el.offsetHeight,
			X1: el.offsetLeft,
			X2: el.offsetLeft + el.offsetWidth
		}
	}
}

export let instance = new Element()
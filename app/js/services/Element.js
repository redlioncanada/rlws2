//Emits events when an element scrolls into or out of view. Only works on elements that are a direct descendant of the scrolled element.

import Utils from './Utils'

class Element {
	constructor() {
		this.name = 'Element'
		this.subscribers = {}
		this.subscribedElements = {}
		window.addEventListener('scroll', Utils.debounce(this.handleScroll.bind(this), 1000/15))
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
			var obj = this.subscribedElements[item],
				logText = false

			if (this.IsInView(obj.ref)) {
				if (obj.current === false) {
					logText = 'came into view.'
					this.Emit('CameIntoView', {element: obj.ref})
				}
				obj.current = true
			} else {
				if (obj.current === true) {
					logText = 'went out of view.'
					this.Emit('WentOutOfView', {element: obj.ref})
				}
				obj.current = false
			}
			if (!!logText) console.log(`ElementService: ${obj.ref.nodeName.toLowerCase()}.${obj.ref.className.replace(/\s/, '.')} ${logText}`)
			this.subscribedElements[item] = obj
		}
	}

	Register(element) {
		var id = window.btoa(element.innerHTML).slice(-12)  //encode element to base64
		if (!(id in this.subscribedElements)) {
			this.subscribedElements[id] = {
				ref: element,
				current: this.IsInView(element),
			}
		}
	}

	On(event, fn, params) {
		if (typeof event === 'string' && typeof fn === 'function') {
			if (!(event in this.subscribers)) this.subscribers[event] = []
			this.subscribers[event].push({function: fn, params: params})
		}
	}

	Emit(event, params) {
		if (event in this.subscribers) {
			for (var item in this.subscribers[event]) {
				var sub = this.subscribers[event][item]
				sub.function.call(this,params)
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
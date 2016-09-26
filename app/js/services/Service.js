import {instance as Device} from './device.js'
import {instance as Element} from './element.js'
import {instance as Scroll} from './scroll.js'

export default class Service {
	static Device() {
		return Device
	}

	static Element() {
		return Element
	}

	static Scroll() {
		return Scroll
	}
}
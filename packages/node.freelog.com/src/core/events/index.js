import {throwError} from '../exceptions/throwError'
import {EXCEPTION_CODE} from '../exceptions/names'
import { toArray } from '../utils/util'

export default class EventCenter {
  constructor() {
    this._events = Object.create(null)
  }

  on(event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn)
    return this
  }

  once(event, fn) {
    const self = this
    function on () {
      self.off(event, on)
      fn.apply(self, arguments)
    }
    on.fn = fn
    self.on(event, on)
    return self
  }

  off(event, fn) {
    const self = this
    // all
    if (!arguments.length) {
      self._events = Object.create(null)
      return self
    }

    // specific event
    const cbs = self._events[event]
    if (!cbs) {
      return self
    }
    if (!fn) {
      self._events[event] = null
      return self
    }

    // specific handler
    let cb
    let i = cbs.length
    while (i--) {
      cb = cbs[i]
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1)
        break
      }
    }
    return self
  }

  emit(event) {
    let cbs = this._events[event]
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs
      const args = toArray(arguments, 1)
      const info = `event handler for "${event}"`
      cbs.forEach(handler => {
        try {
          handler(...args)
        } catch (e) {
          throwError(`${info}:${e.toString()}` ,EXCEPTION_CODE)
        }
      })
    }
    return this
  }
}

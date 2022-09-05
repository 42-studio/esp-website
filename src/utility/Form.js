import RequestErrors from './RequestErrors'
import { cloneDeep } from 'lodash'

class Form {
  /**
   *
   * Form handler
   * =================================================
   * @param input Sets default field values (optional)
   */
  constructor (input = {}) {
    this.loading = false
    this.preset = cloneDeep(input)
    this.input = input
    this._valid = false

    this.response = null
    this.success = false
    this.error = new RequestErrors()

    Object.freeze(this.preset)
  }

  /**
   * Submit Form Data
   * =================================================
   * @param {Function|Promise} callback Should return a promise (e.g Ajax)
   * @returns {Promise<object>}
   */
  async submit (callback) {
    const vm = this
    vm.loading = true
    vm.success = false
    vm.response = null

    try {
      vm.response = await callback(vm.input)
      vm.success = true
    } catch (error) {
      vm.success = false
      vm.error.set(error)
    }

    vm.loading = false

    return vm
  }

  /**
   * Overwrite Input
   * =================================================
   * Replace from input with a copy of a new payload
   * @param {object} payload
   * @param {boolean} clone If true, prevents mutation of original source object.
   */
  overwrite (payload, clone = true) {
    this.input = clone ? cloneDeep(payload) : payload
  }

  /**
   * Assign Input
   * =================================================
   * Assign a copy of new data to matching exiting params only while preserving other values.
   * @param payload
   * @param clone If true, prevents mutation of original source object.
   */
  assign (payload, clone = true) {
    const vm = this
    const data = clone ? cloneDeep(payload) : payload

    for (const key in vm.input) {
      if (key in data) {
        vm.input[key] = payload[key]
      }
    }
  }

  /**
   * Reset Input
   * =================================================
   * Return input state back to it's initial state.
   */
  reset () {
    this.input = cloneDeep(this.preset)
  }

  /**
   * Is Validated
   * =================================================
   * Returns false if request state contains errors.
   * @returns {boolean}
   */
  get validated () {
    return this.error != null && this.error.count === 0
  }

  /**
   * Set Form Valid state.
   * =================================================
   * Sets form validation state
   * @param {boolean} value
   */
  set valid (value) {
    this._valid = value
  }

  /**
   * Get Form Valid state
   * =================================================
   * Returns validation status of form validation & server validation
   * @returns {boolean}
   */
  get valid () {
    return this._valid && this.validated
  }
}

export default Form

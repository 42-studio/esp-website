class RequestErrors {
  constructor () {
    /**
     * List of field errors
     *
     * @type {{}}
     * @private
     */
    this.__data = {}

    /**
     *
     * @type {string}
     */
    this.message = ''

    /**
     *
     * @type {boolean}
     */
    this.fatal = false
  }

  get count () {
    return Object.keys(this.__data).length
  }

  has (field) {
    return this.count > 0 && field in this.__data
  }

  /**
   * Boostrap error state
   * Returns a state: null = no state, false = error state, true = success state
   * @param field
   * @returns {boolean|null}
   */
  state (field) {
    return this.count > 0 ? !(field in this.__data) : null
  }

  get (field) {
    return this.__data[field] ?? null
  }

  set (error) {
    if (error?.response) {
      if (error.response?.data) {
        this.message = error.response.data?.resource ? error.response.data.resource : ''

        if (error.response.data?.errors) {
          this.__data = error.response.data.errors
        }

        return
      }

      this.message = error.response.message
      this.fatal = false
      return
    }

    this.fatal = true
    this.message = error.message
  }

  clear () {
    this.__data = {}
    this.message = ''
  }
}

export default RequestErrors

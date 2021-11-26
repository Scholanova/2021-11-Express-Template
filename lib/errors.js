class RouteNotFoundError extends Error {
  constructor (value) {
    super(value)
  }
}

module.exports = {
  RouteNotFoundError
}

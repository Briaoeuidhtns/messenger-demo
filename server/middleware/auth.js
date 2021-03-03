const asyncHandler = require('../routes/asyncHandler')
const express = require('express')
const { verify } = require('jsonwebtoken')

/**
 * Verify and expose the token in a given cookie to a given local
 *
 * The resulting local will be the parsed jwt converted by `convert` in the
 * `data` key, or the error that occurred `error` key
 */
const jwtCookieParser = ({ cookie, name, jwtOpts, key, convert = (x) => x }) =>
  asyncHandler(async (req, res, next) => {
    const token = req.cookies[cookie]
    const parsed = {}
    if (token)
      try {
        parsed.data = await Promise.resolve(
          convert(verify(token, key, jwtOpts))
        )
      } catch (err) {
        // Not necessarily fatal, so just make available
        parsed.error = err
      }
    res.locals[name] = parsed
    next()
  })
const requireUser = (req, res, next) => {
  if (res.locals.user?.data) next()
  else
    res.status(401).send({
      error: {
        kind: 'authentication',
        cause: res.locals.user?.error?.message,
      },
    })
}

module.exports = { requireUser, jwtCookieParser }

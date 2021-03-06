const { User } = require('../schema/User')
const express = require('express')
const { sign } = require('jsonwebtoken')
const { compare } = require('bcrypt')

const addJwtCookie = ({ key, jwtOpts, cookie }) => (req, res, next) => {
  res
    .cookie(cookie, sign({ data: { _id: req.user.data._id } }, key, jwtOpts), {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    })
    .cookie('AUTHENTICATED', true, {
      httpOnly: false,
      secure: true,
      sameSite: 'Strict',
    })
  next()
}

module.exports = addJwtCookie

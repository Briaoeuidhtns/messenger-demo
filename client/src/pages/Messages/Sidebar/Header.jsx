import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { MoreHoriz as MenuIcon } from '@material-ui/icons'

import UserAvatar from './UserAvatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  name: { flexGrow: 1, marginLeft: theme.spacing(2) },
  icon: { color: '#95A7C4' },
}))

const Header = ({ user }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <UserAvatar user={user} online />
      <Typography variant="h3" noWrap className={classes.name}>
        {user.name}
      </Typography>
      <MenuIcon className={classes.icon} />
    </div>
  )
}

export default Header
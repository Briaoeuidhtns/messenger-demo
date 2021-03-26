import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Badge,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core'

import UserAvatar from './UserAvatar'

const StandaloneBadge = withStyles({
  badge: {
    transform: 'initial',
    transformOrigin: 'initial',
    position: 'initial',
  },
})(Badge)

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF',
    borderRadius: theme.spacing(1),
    '&:not(:last-child)': { marginBottom: theme.spacing(1) },
  },
  unread: { right: theme.spacing(2.5), paddingLeft: theme.spacing(4) },
}))

const Conversation = ({ user, unread = 0, lastMessage, online, onClick }) => {
  const classes = useStyles()
  return (
    <ListItem className={classes.root} button {...{ onClick }}>
      <ListItemAvatar>
        <UserAvatar {...{ user, online }} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        primaryTypographyProps={{ noWrap: true }}
        secondary={lastMessage}
        secondaryTypographyProps={{
          noWrap: true,
          color: unread ? 'textPrimary' : 'textSecondary',
        }}
      />
      <StandaloneBadge
        badgeContent={unread}
        color="primary"
        className={classes.unread}
      />
    </ListItem>
  )
}

export default Conversation
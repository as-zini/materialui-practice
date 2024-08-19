import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{bgcolor: 'red'}}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp"
        subheader="September 14. 2016"
      ></CardHeader>
      <CardMedia
        component="img"
        height="194"
        image=''
      />
      <CardContent>
        <Typography variant='body2' color="text.secondary">
          룰루랄라 안녕하세요 룰루레몬이에오 루루레몬 아니구 룰루레몬!!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite/>
        </IconButton>
        <IconButton>
          <Share> </Share>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Item
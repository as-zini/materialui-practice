import { Box } from '@mui/material'
import React from 'react'
import Item from './Item'

const CenterBody = () => {
  return (
    <Box
      flex={3} p={2}
      sx={{
        // backgroundColor:'primary.main'
      }}
    >
      <Item/>
      <Item/>
      <Item/>
      <Item/>

    </Box>
  )
}

export default CenterBody
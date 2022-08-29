import { makeStyles,Box } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
main:{
  width:"100%",
  height:'75px',
  backgroundColor:"#283142"
},
img:{
   marginTop:"7px",
   marginLeft:"20px"
}
})

export default function Topbar() {
  const classes = useStyles()
  return (
   <>
   <Box className={classes.main}>
    <img src='/images/logo.png' alt='img' className={classes.img}/>
     
   </Box>
   </>
  )
}

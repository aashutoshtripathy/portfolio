import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
      <Avatar sx={{
        width: "200px",
        height: "200px",
        objectFit: "contain",
        marginBottom: "1rem",
        border: "5px solid white",
      }}/>
      <ProfileCard/>
    </Stack>
  )
}

const ProfileCard = ({text="hello",Icon,heading="Aashutosh"}) => (
<Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
  {Icon && Icon}
  <Typography>{heading}</Typography>
  <Typography>{text}</Typography>
</Stack>
)

export default Profile
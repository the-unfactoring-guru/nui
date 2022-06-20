import React from 'react'
import { Box, Button } from '@mui/material'
import nuiLogo from '../assets/nui_logo.png'

export const TopBar = () => {
  return (
    <Box
        style={{
            position: "inherit",
            border: "1px solid black",
            backgroundColor: "#f0f0f0",
            width: 799,
            height: 116
        }}
    >
      <img
        src={nuiLogo}
        alt="NUI"
        style={{
          position: "inherit",
          top: 15,
        }}/>
      
      <Box
        style={{
          position: "inherit",
          top: 30,
          left: 300,
        }}>
        <Button
          variant="contained"
          style={{
            position: "inherit",
            width: 157,
            height: 66,
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "#d9d9d9",
            //top: 30,
            //left: 300,
          }}>
            Create<br/>Project
        </Button>

        <Button
          variant="contained"
          style={{
            position: "inherit",
            width: 157,
            height: 66,
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "#d9d9d9",
            //top: 30,
            left: 217,
          }}>
            Open<br/>Project
        </Button>
      </Box>
    </Box>
  )
}

import React from 'react'
import { Box,
  TextField,
  Button,
  List,
  ListItem,
  Divider, 
  ListItemButton, 
  ListItemText} from '@mui/material'
import { Search } from '@mui/icons-material';

export const SearchSection = () => {
  const packageList = ['phaser', 'jquery', 'mui'];
  return (
    <Box
        style={{
            position: "inherit",
            border: "1px solid black",
            backgroundColor: "#f0f0f0",
            width: 167,
            height: 482,
            top: 117,
        }}
    >
      <Box style={{
        fontFamily: "'Ubuntu', 'arial', 'sans-serif'",
        padding: 10,
      }} component="form">

        <p>
            Package Search:
        </p>

        <TextField
          label="Search Package..."
          id="search-box"
          size="small"
          InputLabelProps={{shrink: true}}
          sx={{
            paddingTop: "10px"
          }}/>
        
        <Button variant="contained" startIcon= {<Search/>} sx={{
            position: "relative",
            height: 25,
            color: "black",
            fontWeight: "bold",
            fontSize: 14,
            backgroundColor: "#d9d9d9",
            top: 10,
            textTransform: "capitalize"
          }}>
            Search
        </Button>

        <List sx={{
          overflow: "auto",
          padding: 0,
          backgroundColor: "#fff",
          marginTop: "30px",
          height: 250,
          }} dense>
          {
            packageList.map((element) => {
              return(
                <div>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={element}/>
                    </ListItemButton>
                  </ListItem>
                  <Divider/>
                </div>
              )
            })
          }
        </List>
      </Box>
    </Box>
  )
}

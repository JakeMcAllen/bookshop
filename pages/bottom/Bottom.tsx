"use client";

import * as React from 'react';
import { Grid, Paper, styled, Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Bottom() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: "95%", backgroundColor: "#1976d2", borderRadius: "9px", color: "white" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item style={{backgroundColor: "#1976d2", color: "white"}}><Typography variant='h4'>Challenge AI</Typography></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            Created by Giorgio Allena <br></br>
            allenagiorgio122@gmail.com
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button href="https://github.com/JakeMcAllen"><GitHubIcon /></Button>
              <Button href="https://www.linkedin.com/in/giorgio-allena/"><LinkedInIcon /></Button>

            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: "none"
}));
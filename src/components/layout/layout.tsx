import { Box } from '@mui/system';
import React, { ReactNode } from 'react'
import { Sidebar } from '../sidebar';

interface MovieProps{
    children: ReactNode;
}

export const Layout = () => {
  return (
    <Box sx={{
        backgroundColor: '#10141F'
    }}>


    <Sidebar/>
    </Box>
  )
}


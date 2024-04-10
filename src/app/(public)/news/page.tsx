
import { Box, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import * as React from "react";

export const metadata = () => {
  return {
    title: "News"
  }
}

const Editor = dynamic(() => {
  return import('../../../components/CustomEditor');
}, { ssr: false });

const NewsPage = () => {
  return (
    <>
      <Box>
        <Typography>NewsPage is OK</Typography>
        <Editor
          initialData='<h1>Hello from CKEditor in Next.js!</h1>'
        />
      </Box>
    </>
  )
}

export default NewsPage;
import React from 'react';
import Layout from 'components/Layout'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Home() {
  return (
  <Layout loggedIn={false} title="Home | trackportfol.io">
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Easily track your portfolio.
        </Typography>
      </Box>
    </Container>
  </Layout>
  );
}
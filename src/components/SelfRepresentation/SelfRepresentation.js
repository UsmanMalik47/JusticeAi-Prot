import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SelfRepresentation = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #ff4081 30%, #1976d2 90%)',
          padding: '20px',
          color: '#fff',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Self-Representation Resources
        </Typography>
        <Typography variant="body1" paragraph>
          Here you will find resources to help you understand basic legal principles and your rights as a self-represented litigant.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore steps for filing cases, court appearances, and access FAQs for common legal queries.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default SelfRepresentation;

import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AIReview = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1976d2 30%, #ff4081 90%)',
          padding: '20px',
          color: '#fff',
        }}
      >
        <Typography variant="h3" gutterBottom>
          AI-Powered Document Review
        </Typography>
        <Typography variant="body1" paragraph>
          Use our AI-powered system to review your legal documents. Please remember that this is for guidance only and should not be taken as legal advice.
        </Typography>
        <Typography variant="body1" paragraph>
          The AI system can identify common issues but does not replace professional legal consultation.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default AIReview;

import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const FilingCases = () => {
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
          Steps for Filing Cases
        </Typography>
        <Typography variant="body1" paragraph>
          Filing a case involves several steps that need to be followed meticulously to ensure success.
        </Typography>
        <Typography variant="body1" paragraph>
          This section provides a step-by-step guide on how to prepare and submit your case to court.
        </Typography>
        <Typography variant="body1" paragraph>
          The steps include gathering necessary documents, understanding court jurisdiction, and preparing your legal arguments.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default FilingCases;

import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const CourtProcedures = () => {
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
          Court Procedures and Etiquette
        </Typography>
        <Typography variant="body1" paragraph>
          Understanding how courts work and what is expected of you as a self-represented litigant is crucial for success.
        </Typography>
        <Typography variant="body1" paragraph>
          Learn about court protocols, behavior, and procedural guidelines to help you navigate the court process.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default CourtProcedures;

import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Calculator = () => {
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
          Legal Calculators
        </Typography>
        <Typography variant="body1" paragraph>
          Use these calculators for estimations related to legal fees, damages, or court costs. Please note that these are for informational purposes only and should not be used as a substitute for legal advice.
        </Typography>
        <Typography variant="body1" paragraph>
          Make sure to consult a legal expert for an accurate calculation related to your case.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Calculator;

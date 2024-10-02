import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const DocumentTemplates = () => {
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
          Legal Document Templates
        </Typography>
        <Typography variant="body1" paragraph>
          Access common legal documents such as petitions, notices, and agreements to help you draft your own legal paperwork.
        </Typography>
        <Typography variant="body1" paragraph>
          These templates are a starting point and should be reviewed by a legal professional before submission.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default DocumentTemplates;

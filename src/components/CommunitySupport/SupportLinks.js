import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const CommunitySupport = () => {
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
          Community Support
        </Typography>
        <Typography variant="body1" paragraph>
          Connect with legal aid and support groups to get assistance with your legal journey. Our community is here to help you find the right resources.
        </Typography>
        <Typography variant="body1" paragraph>
          Access links to legal aid organizations, support groups, and other helpful resources.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default CommunitySupport;

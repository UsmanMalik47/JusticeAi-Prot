import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, CssBaseline, Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Pages
import SelfRepresentation from './components/SelfRepresentation/SelfRepresentation';
import DocumentTemplates from './components/DocumentTemplates/TemplateList';
import CourtProcedures from './components/CourtProcedures/CourtInfo';
import Calculator from './components/LegalCalculator/Calculator';
import AIReview from './components/AIReview/AIReview';
import CommunitySupport from './components/CommunitySupport/SupportLinks';

// Theme and Global Styles
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Justice AI</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/self-representation">Self-Representation</Button>
            <Button color="inherit" component={Link} to="/document-templates">Document Templates</Button>
            <Button color="inherit" component={Link} to="/court-procedures">Court Procedures</Button>
            <Button color="inherit" component={Link} to="/calculator">Calculator</Button>
            <Button color="inherit" component={Link} to="/ai-review">AI Review</Button>
            <Button color="inherit" component={Link} to="/community-support">Community Support</Button>
          </Toolbar>
        </AppBar>

        <Container>
          {/* Route to different pages */}
          <Routes>
        <Route path="/" element={<SelfRepresentation />} />
        <Route path="/document-templates" element={<DocumentTemplates />} />
        <Route path="/court-procedures" element={<CourtProcedures />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/ai-review" element={<AIReview />} />
        <Route path="/community-support" element={<CommunitySupport />} />
      </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1976d2 30%, #ff4081 90%)',
          color: '#fff',
        }}
      >
        <Typography variant="h2">Welcome to Justice AI</Typography>
      </Box>
    </motion.div>
  );
};

export default App;

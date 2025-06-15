import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the dist directory (after Vite build)
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'WhatsApp Liquid Glass UI',
    description: 'Customizable liquid glass effects for WhatsApp components inspired by Apple\'s design language'
  });
});

// API endpoint for health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API endpoint for saving/loading configurations
app.post('/api/config', (req, res) => {
  // In a real app, you'd save this to a database
  const config = req.body;
  res.json({ 
    success: true, 
    message: 'Configuration saved successfully',
    config 
  });
});

// Catch-all route for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);  
  console.log(`📱 WhatsApp Liquid Glass UI available at http://localhost:${PORT}`);
  console.log(`🎨 Inspired by Apple's Liquid Glass design language`);
}); 
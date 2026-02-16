const environmentUrls   = new Map();
environmentUrls.set('development', '/api');
environmentUrls.set('production', 'https://book-service-1.onrender.com');

export default environmentUrls.get(window.location.hostname === 'localhost' ? 'development' : 'production');
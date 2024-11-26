const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000; // Ganti dengan port yang diinginkan

// Middleware untuk menghandle request body JSON
app.use(express.json());

// Route untuk menghandle request dari halaman web
app.post('/api/chat', async (req, res) => {
  const message = req.body.message;

  try {
    // Kirim pesan ke Gemini API
    const response = await fetch('https://api.gemini.com/v1/chat', { // Ganti dengan URL API Gemini yang benar
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY' // Ganti dengan API Key Gemini
      },
      body: JSON.stringify({
        text: message,
        // Tambahkan parameter lain sesuai kebutuhan API
      })
    });

    const data = await response.json();

    // Kirim respon dari Gemini API ke client
    res.json({ response: data.response }); // Sesuaikan dengan struktur respon API

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

// Serve static files (HTML, CSS, JS) dari folder 'public'
app.use(express.static('public'));

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

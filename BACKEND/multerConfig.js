const multer = require('multer');
const path = require('path');
const filePath = path.join(__dirname, './uploads'); // Correct the path to be relative to the backend folder

// Configure storage for the uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath); // Specify the uploads directory
  },
  filename: function (req, file, cb) {
    // Rename the file with a unique name
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Configure Multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit to 5MB (optional)
});

module.exports = upload;

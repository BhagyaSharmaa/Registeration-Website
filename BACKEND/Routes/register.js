const express = require('express');
const Router = express.Router();
const upload = require('../multerConfig');
const startUp = require('../Models/startUp');
const generateNumericId = require('../Controllers/generateID');

Router.route('/')
  .post(
    upload.fields([
      { name: 'businessRegistration' }, // Corrected field name
      { name: 'businessAddressProof' }, // Corrected field name
    ]),
    async (req, res) => {
      try {
        const { name, email } = req.body;
        const ayushID = generateNumericId();
        const newStartUp = new startUp({ name, email, ayushID });
        await newStartUp.save();
        res.status(200).json({ message: 'Files uploaded successfully', success: true , ayushID });
      } catch (err) {
        res.status(500).json({ message: 'File upload failed', success: false });
      }
    }
  );

module.exports = Router;

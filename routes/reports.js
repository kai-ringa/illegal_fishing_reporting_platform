import express from 'express';
import { Report } from '../models/report.js';

const router = express.Router();

router.route('/').get((req, res) => {
  Report.find()
    .then((reports) => res.json(reports))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const location = req.body.location;
  const description = req.body.description;
  const evidence = req.body.evidence;

  console.log('Received POST request to /api/reports/add');

  const newReport = new Report({
    location,
    description,
    evidence,
  });

  newReport
    .save()
    .then(() => res.json('Report added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

export { router };

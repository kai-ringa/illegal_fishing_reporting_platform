import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reportSchema = new Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    evidence: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Report = model('Report', reportSchema);

export { Report };

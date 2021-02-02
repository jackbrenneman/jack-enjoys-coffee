/**
 * Model for a roaster
 */
import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const roasterObject = {
  name: 'string',
  city: 'string',
  state: 'string',
  country: 'string',
  website: 'string',
};
const schema = new Schema(roasterObject);
export const Roaster = model('Roaster', schema);
// export const Roaster = model('Roaster', schema);

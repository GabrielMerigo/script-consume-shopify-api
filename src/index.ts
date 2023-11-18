import cron from 'node-cron';
import { addProductsByAllCollections } from '@utils'

const everyDayAt8amAnd12am = '0 8,00 * * *';

cron.schedule(everyDayAt8amAnd12am, () => {
  addProductsByAllCollections();
});

import cron from 'node-cron';
import { createProductsByAllCollections } from 'processes/createProductsByAllCollections';

const everyDayAt8amAnd8pm = '0 8,00 * * *';

cron.schedule(everyDayAt8amAnd8pm, () => {
  createProductsByAllCollections();
});

import cron from 'node-cron';
import { addProductsByAllCollections } from '@utils';

const everyDayAt8amNoon2pm5pmAnd9pm = '0 8,12,14,17,19,21 * * *';

cron.schedule(everyDayAt8amNoon2pm5pmAnd9pm, () => {
  addProductsByAllCollections();
});

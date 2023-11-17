import cron from 'node-cron';
// import { createProductsByAllCollections } from 'processes/createProductsByAllCollections'

// createProductsByAllCollections();

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

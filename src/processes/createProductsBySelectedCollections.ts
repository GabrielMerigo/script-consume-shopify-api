import { logger } from '@services/pino';
import { addProductsBySelectedCollections } from '@utils';

(async (): Promise<void> => {
  const args = process.argv.slice(2);
  const selectedCollections = args.find((arg) => arg.startsWith('--selected='));

  if (selectedCollections) {
    const selectedValues = selectedCollections.split('=')[1].split(',');

    await addProductsBySelectedCollections(selectedValues);
  } else {
    logger.error('No selected collections provided.');
  }
})();

const args = process.argv.slice(2);

// Parse the arguments as needed
const selectedCollections = args.find((arg) => arg.startsWith('--selected='));

if (selectedCollections) {
  const selectedValues = selectedCollections.split('=')[1].split(',');
  console.log('Selected collections:', selectedValues);
} else {
  console.log('No selected collections provided.');
}

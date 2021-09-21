process.argv.forEach((val,index) => {
  //console.log(`${index}: ${val}`)
  //console.log(`${val}`);
  if (index > 2 && val > 0 && !isNaN(val)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, val * 1000);
  }
  
});
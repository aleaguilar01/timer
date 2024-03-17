const args = process.argv.slice(2);

const timer = (times) => {
  if (times.length === 0) {
    return;
  }
  
  for (let time of times) {
    if (time > 0 && !Number.isNaN(time)) {
      time *= 1000;
      setTimeout(() => process.stdout.write('\x07'), time);
    }
  }
};

timer(args);

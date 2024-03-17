const args = process.argv.slice(2);

if (args.length === 0) {
  return;
}

for (let time of args) {
  if (time > 0 && !Number.isNaN(time)) {
    time *= 1000;
    setTimeout(() => process.stdout.write('\x07'), time);
  }
}
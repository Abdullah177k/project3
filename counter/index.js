let count = 0;

setInterval(() => {
  setTimeout(() => {
    for (count; count < 1000; count++) {
      console.log(count);
    }
  }, 100);
}, 100);

const grabData = require('./app/grab-data');

// simply calling and showing, nothing else to do in a demo repo
grabData().then((data) => {
  console.log(data);
});

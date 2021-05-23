function init() {
  fetch('https://api.jsonbin.io/v3/b/60aa0d762b1b894dbee85aec', {
    method: 'GET',
    headers: {
      'X-Master-Key': '$2b$10$NnEoGMKtn7JVbl7aHDOyJ.9Fqyg6posYqCPFOc7HYx9xtPav8ESBK'
    }
  }).then(resp => resp.json())
  .then(response => {
    console.log('response', response);
  })
}

init();

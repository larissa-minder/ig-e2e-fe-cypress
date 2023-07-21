const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg4NDczMTY3LTU3MTEtNDliYS05MzI0LTRhZTM0YjQ1NzNkOC0xNjg5OTUzMDYzMzkxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmUzZGM3NmYtOTYwYy00YjIyLWIyYjctNDFjMmVhZWY2ODg1IiwidHlwZSI6InQifQ.UAxW--bRixMJZsWGSEkXMDvQOIOLxevUgy7h71wK5Ew'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
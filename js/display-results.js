// global = window.sessionStorage

  var allAnswers = []
  for (var i in window.sessionStorage) {
      allAnswers.push(i + ' = ' + window.sessionStorage[i])
  }
  allAnswers = (allAnswers.toString()).replace(/,/g , '<br>')

  var insertAnswers = document.getElementById('insert-answers')
  insertAnswers.innerHTML = allAnswers

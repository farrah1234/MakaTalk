(function sendResults(){
  var storage = window.sessionStorage
      var clinicianEmail = storage.getItem('clinician-email')
      var emailSubject = storage.getItem('survey-type')
      var currentTime = Date()
      var answers = []

      if (emailSubject === 'pre-session') {
        var questions = ['consent', 'today', 'last-week', 'at-home', 'friends', 'school', 'play', 'next-week']
      }
      if (emailSubject === 'post-session') {
        var questions = ['consent', 'understand', 'help', 'like', 'come-again']
      }
      for (var i = 0; i < questions.length; i++) {
        var x = storage.getItem(questions[i])
        if (x) answers.push(questions[i] + ': ' + x)
        else {
          answers.push(questions[i] + ': ' + 'no answer')
        }
      }
      emailBody = answers.toString().replace(/,/g, ', ')

      var mailToClinicianURL = 'mailto:' + clinicianEmail + '?subject=' + emailSubject + currentTime + '&body=' + emailBody

      var sendResultsButton = document.getElementById('send-results-button')
      sendResultsButton.href = mailToClinicianURL
})()

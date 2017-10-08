
(function launchPad(){
  var currentPage = (window.location.pathname).split('/').pop().replace('.html','')
    switch(currentPage) {
      case 'index':
        chooseSurvey()
        break
      case 'confirm':
      case 'results':
        stateSurveyType()
        break
      case 'consent':
        giveConsent()
        break
      case 'today':
      case 'last-week':
      case 'home':
      case 'friends':
      case 'school':
      case 'play':
      case 'next-week':
        preSessionAnswer()
        break
      case 'understand':
      case 'help':
      case 'like':
      case 'come-again':
        postSessionAnswer()
        break
      case 'login':
        storeClinicianEmail()
        break
    }
})();

function chooseSurvey(){
  preSessionButton = document.getElementById('pre-session-button')
  preSessionButton.addEventListener('click', function(){
    sessionStorage.setItem('survey-type', 'pre-session')
    })
  postSessionButton = document.getElementById('post-session-button')
  postSessionButton.addEventListener('click', function(){
    sessionStorage.setItem('survey-type', 'post-session')
    })
}

function stateSurveyType(){
  var surveyType = sessionStorage.getItem('survey-type')
  document.getElementById('survey-type').innerHTML = surveyType
}

function giveConsent(){
  yesConsent = document.getElementById('yes-consent')
  yesConsent.addEventListener('click', function(){
    sessionStorage.setItem('consent', 'yes')
    firstQuestion()
  })
  noConsent = document.getElementById('no-consent')
  noConsent.addEventListener('click', function(){
    sessionStorage.setItem('consent', 'no')
  })
}

function firstQuestion(){
  var surveyType = sessionStorage.getItem('survey-type')
  var firstQuestion = document.getElementById('first-question')
  if (surveyType === 'pre-session'){
    firstQuestion.href = './today.html'
  }
  if (surveyType === 'post-session'){
    firstQuestion.href = "./understand.html"
  }
}

function preSessionAnswer(){
  var currentPage = (window.location.pathname).split('/').pop().replace('.html','')

  var veryGoodOption = document.getElementById('very-good-option')
  var goodOption = document.getElementById('good-option')
  var okOption = document.getElementById('ok-option')
  var badOption = document.getElementById('bad-option')
  var veryBadOption = document.getElementById('very-bad-option')

  veryGoodOption.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'very good')
  })
  goodOption.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'good')
  })
  okOption.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'ok')
  })
  badOption.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'bad')
  })
  veryBadOption.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'very bad')
  })
}

function postSessionAnswer(){
  var currentPage = (window.location.pathname).split('/').pop().replace('.html','')

  var yesAgree = document.getElementById('yes-agree')
  var noDisagree = document.getElementById('no-disagree')
  var maybe = document.getElementById('maybe')

  yesAgree.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'yes')
  })
  noDisagree.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'no')
  })
  maybe.addEventListener('click', function(){
    sessionStorage.setItem(currentPage, 'maybe')
  })
}

function storeClinicianEmail(){
  var submitLoginButton =  document.getElementById('submit-login-button')

  submitLoginButton.addEventListener('click', function() {
    var clinicianEmail = document.getElementById('clinician-email-input').value
      var setClinicianEmail = sessionStorage.setItem('clinician-email', clinicianEmail)
  })
}

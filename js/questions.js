// document.addEventListener('DOMContentLoaded', function() {
//   const questions = [
//     {
//       question: "Что стало основной причиной вашего ухода с сайта?",
//       answers: [
//         "Не нашли нужную услугу",
//         "Не понравился дизайн/удобство",
//         "Не подошли цены",
//         "Другая причина"
//       ]
//     },
//     {
//       question: "Как бы вы оценили удобство нашего сайта?",
//       answers: [
//         "Отлично, всё понятно",
//         "Нормально, но есть недочёты",
//         "Сложно найти информацию",
//         "Очень неудобно"
//       ]
//     },
//     {
//       question: "Хотели бы вы получать специальные предложения от нас?",
//       answers: [
//         "Да, с радостью",
//         "Только если они будут действительно выгодными",
//         "Нет, не хочу получать рассылку",
//         "Пока не знаю"
//       ]
//     }
//   ];

//   const surveyWrapper = document.querySelector('.survey-wrapper');
//   const progressBar = document.createElement('div');
//   progressBar.className = 'progress-bar';
//   const progressContainer = document.createElement('div');
//   progressContainer.className = 'survey-progress';
//   progressContainer.appendChild(progressBar);

//   let currentQuestion = 0;
//   const answers = [];

//   function showQuestion(index) {
//     surveyWrapper.innerHTML = '';
//     surveyWrapper.appendChild(progressContainer);
    
//     progressBar.style.width = `${(index / questions.length) * 100}%`;
    
//     const questionDiv = document.createElement('div');
//     questionDiv.className = 'survey-question active';
    
//     const questionTitle = document.createElement('h3');
//     questionTitle.className = 'question-title';
//     questionTitle.textContent = questions[index].question;
//     questionDiv.appendChild(questionTitle);
    
//     const optionsDiv = document.createElement('div');
//     optionsDiv.className = 'answer-options';
    
//     questions[index].answers.forEach(answer => {
//       const btn = document.createElement('button');
//       btn.className = 'answer-btn';
//       btn.textContent = answer;
//       btn.addEventListener('click', () => {
//         answers[index] = answer;
//         if (currentQuestion < questions.length - 1) {
//           currentQuestion++;
//           showQuestion(currentQuestion);
//         } else {
//           showThankYou();
//         }
//       });
//       optionsDiv.appendChild(btn);
//     });
    
//     questionDiv.appendChild(optionsDiv);
//     surveyWrapper.appendChild(questionDiv);
//   }

//   function showThankYou() {
//     surveyWrapper.innerHTML = '';
    
//     const thankyouDiv = document.createElement('div');
//     thankyouDiv.className = 'survey-thankyou active';
    
//     const icon = document.createElement('div');
//     icon.className = 'thankyou-icon';
//     icon.innerHTML = '❤️';
//     thankyouDiv.appendChild(icon);
    
//     const title = document.createElement('h2');
//     title.textContent = 'Спасибо за ваши ответы!';
//     thankyouDiv.appendChild(title);
    
//     const message = document.createElement('p');
//     message.textContent = 'Мы учтём ваше мнение, чтобы стать лучше. Хорошего дня!';
//     thankyouDiv.appendChild(message);
    
//     surveyWrapper.appendChild(thankyouDiv);
//   }

//   document.querySelector('.start-survey-btn').addEventListener('click', () => {
//     showQuestion(0);
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    {
      question: "Что стало основной причиной вашего ухода с сайта?",
      answers: [
        "Не нашли нужную услугу",
        "Не понравился дизайн/удобство",
        "Не подошли цены",
        "Другая причина"
      ]
    },
    {
      question: "Как бы вы оценили удобство нашего сайта?",
      answers: [
        "Отлично, всё понятно",
        "Нормально, но есть недочёты",
        "Сложно найти информацию",
        "Очень неудобно"
      ]
    },
    {
      question: "Хотели бы вы получать специальные предложения от нас?",
      answers: [
        "Да, с радостью",
        "Только если они будут действительно выгодными",
        "Нет, не хочу получать рассылку",
        "Пока не знаю"
      ]
    }
  ];

  const surveyWrapper = document.querySelector('.survey-wrapper');
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  const progressContainer = document.createElement('div');
  progressContainer.className = 'survey-progress';
  progressContainer.appendChild(progressBar);

  let currentQuestion = 0;
  const answers = [];

  function showQuestion(index) {
    surveyWrapper.innerHTML = '';
    surveyWrapper.appendChild(progressContainer);
    
    progressBar.style.width = `${(index / questions.length) * 100}%`;
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'survey-question active';
    
    const questionTitle = document.createElement('h3');
    questionTitle.className = 'question-title';
    questionTitle.textContent = questions[index].question;
    questionDiv.appendChild(questionTitle);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'answer-options';
    
    questions[index].answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer;
      btn.addEventListener('click', () => {
        answers[index] = {
          question: questions[index].question,
          answer: answer
        };
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          showQuestion(currentQuestion);
        } else {
          showThankYou();
        }
      });
      optionsDiv.appendChild(btn);
    });
    
    questionDiv.appendChild(optionsDiv);
    surveyWrapper.appendChild(questionDiv);
  }

  function showThankYou() {
    // Выводим ответы в консоль в формате JSON
    console.log(JSON.stringify({
      surveyResults: answers
    }, null, 2));
    
    surveyWrapper.innerHTML = '';
    
    const thankyouDiv = document.createElement('div');
    thankyouDiv.className = 'survey-thankyou active';
    
    const icon = document.createElement('div');
    icon.className = 'thankyou-icon';
    icon.innerHTML = '❤️';
    thankyouDiv.appendChild(icon);
    
    const title = document.createElement('h2');
    title.textContent = 'Спасибо за ваши ответы!';
    thankyouDiv.appendChild(title);
    
    const message = document.createElement('p');
    message.textContent = 'Мы учтём ваше мнение, чтобы стать лучше. Хорошего дня!';
    thankyouDiv.appendChild(message);
    
    surveyWrapper.appendChild(thankyouDiv);
  }

  document.querySelector('.start-survey-btn').addEventListener('click', () => {
    showQuestion(0);
  });
});
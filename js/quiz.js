// document.addEventListener('DOMContentLoaded', function() {
//     const quizData = [
//       {
//         question: "Как часто вы совершаете покупки в нашем магазине?",
//         answers: [
//           "Впервые у вас",
//           "Раз в несколько месяцев",
//           "Раз в месяц",
//           "Несколько раз в месяц"
//         ]
//       },
//       {
//         question: "Что для вас самое важное при покупке?",
//         answers: [
//           "Цена",
//           "Качество",
//           "Сервис",
//           "Быстрая доставка"
//         ]
//       },
//       {
//         question: "Как вы узнали о нашем магазине?",
//         answers: [
//           "Соцсети/реклама",
//           "Рекомендации друзей",
//           "Поиск в интернете",
//           "Уже давно знаю ваш магазин"
//         ]
//       }
//     ];
  
//     const quizWrapper = document.querySelector('.quiz-wrapper');
//     const progressBar = document.createElement('div');
//     progressBar.className = 'progress-bar';
//     const progressContainer = document.createElement('div');
//     progressContainer.className = 'quiz-progress';
//     progressContainer.appendChild(progressBar);
  
//     let currentQuestion = 0;
//     let userAnswers = [];
//     let discountTimer;
  
//     function generateDiscountCode() {
//       const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
//       let code = '';
//       for (let i = 0; i < 8; i++) {
//         code += chars.charAt(Math.floor(Math.random() * chars.length));
//       }
//       return code;
//     }
  
//     function calculateDiscount() {
//       // В реальном проекте можно сделать логику расчета скидки
//       // на основе ответов, но для примера сделаем случайную скидку
//       const discounts = [5, 7, 10, 12, 15];
//       return discounts[Math.floor(Math.random() * discounts.length)];
//     }
  
//     function showQuestion(index) {
//       quizWrapper.innerHTML = '';
//       quizWrapper.appendChild(progressContainer);
      
//       progressBar.style.width = `${((index + 1) / quizData.length) * 100}%`;
      
//       const questionDiv = document.createElement('div');
//       questionDiv.className = 'quiz-question active';
      
//       const questionTitle = document.createElement('h3');
//       questionTitle.className = 'question-title';
//       questionTitle.textContent = quizData[index].question;
//       questionDiv.appendChild(questionTitle);
      
//       const optionsDiv = document.createElement('div');
//       optionsDiv.className = 'answer-options';
      
//       quizData[index].answers.forEach(answer => {
//         const btn = document.createElement('button');
//         btn.className = 'answer-btn';
//         btn.textContent = answer;
//         btn.addEventListener('click', () => {
//           userAnswers.push({
//             question: quizData[index].question,
//             answer: answer
//           });
          
//           if (currentQuestion < quizData.length - 1) {
//             currentQuestion++;
//             showQuestion(currentQuestion);
//           } else {
//             showResult();
//           }
//         });
//         optionsDiv.appendChild(btn);
//       });
      
//       questionDiv.appendChild(optionsDiv);
//       quizWrapper.appendChild(questionDiv);
//     }
  
//     function showResult() {
//       clearInterval(discountTimer);
      
//       const discount = calculateDiscount();
//       const discountCode = generateDiscountCode();
      
//       quizWrapper.innerHTML = '';
      
//       const resultDiv = document.createElement('div');
//       resultDiv.className = 'quiz-result active';
      
//       const icon = document.createElement('div');
//       icon.className = 'result-icon';
//       icon.innerHTML = '🎁';
//       resultDiv.appendChild(icon);
      
//       const title = document.createElement('h2');
//       title.className = 'result-title';
//       title.textContent = 'Поздравляем!';
//       resultDiv.appendChild(title);
      
//       const text = document.createElement('p');
//       text.className = 'result-text';
//       text.textContent = `Вы получаете скидку ${discount}% на следующую покупку!`;
//       resultDiv.appendChild(text);
      
//       const code = document.createElement('div');
//       code.className = 'discount-code';
//       code.textContent = discountCode;
//       resultDiv.appendChild(code);
      
//       const info = document.createElement('p');
//       info.className = 'result-text';
//       info.textContent = 'Используйте этот промокод при оформлении заказа.';
//       resultDiv.appendChild(info);
      
//       const timerText = document.createElement('div');
//       timerText.className = 'timer';
//       resultDiv.appendChild(timerText);
      
//       const useBtn = document.createElement('button');
//       useBtn.className = 'use-discount-btn';
//       useBtn.textContent = 'Перейти к покупкам';
//       useBtn.addEventListener('click', () => {
//         alert(`Промокод ${discountCode} на скидку ${discount}% скопирован!`);
//         // В реальном проекте здесь может быть переход в магазин
//       });
//       resultDiv.appendChild(useBtn);
      
//       quizWrapper.appendChild(resultDiv);
      
//       // Таймер обратного отсчета (для эффекта срочности)
//       let timeLeft = 15 * 60; // 15 минут в секундах
//       updateTimer();
//       discountTimer = setInterval(() => {
//         timeLeft--;
//         updateTimer();
//         if (timeLeft <= 0) clearInterval(discountTimer);
//       }, 1000);
      
//       function updateTimer() {
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
//         timerText.textContent = `Акция действительна еще: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//       }
      
//       // Выводим результаты в консоль
//       console.log('Результаты викторины:', {
//         discount: discount + '%',
//         promoCode: discountCode,
//         answers: userAnswers
//       });
//     }
  
//     document.querySelector('.start-quiz-btn').addEventListener('click', () => {
//       showQuestion(0);
//     });
//   });


document.addEventListener('DOMContentLoaded', function() {
    // Общие данные для всех викторин
    const quizData = [
      {
        question: "Как часто вы совершаете покупки в нашем магазине?",
        answers: [
          "Впервые у вас",
          "Раз в несколько месяцев",
          "Раз в месяц",
          "Несколько раз в месяц"
        ]
      },
      {
        question: "Что для вас самое важное при покупке?",
        answers: [
          "Цена",
          "Качество",
          "Сервис",
          "Быстрая доставка"
        ]
      },
      {
        question: "Как вы узнали о нашем магазине?",
        answers: [
          "Соцсети/реклама",
          "Рекомендации друзей",
          "Поиск в интернете",
          "Уже давно знаю ваш магазин"
        ]
      }
    ];
  
    // Функция для инициализации викторины
    function initQuiz(quizId) {
      const quizWrapper = document.querySelector(`#${quizId} .quiz-wrapper`);
      const startBtn = document.querySelector(`#${quizId} .start-quiz-btn`);
      
      // Проверяем, существуют ли элементы на странице
      if (!quizWrapper || !startBtn) {
        console.error(`Элементы викторины ${quizId} не найдены на странице`);
        return;
      }
      
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      const progressContainer = document.createElement('div');
      progressContainer.className = 'quiz-progress';
      progressContainer.appendChild(progressBar);
  
      let currentQuestion = 0;
      let userAnswers = [];
      let discountTimer;
  
      function generateDiscountCode() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 8; i++) {
          code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
      }
  
      function calculateDiscount() {
        const discounts = [5, 7, 10, 12];
        return discounts[Math.floor(Math.random() * discounts.length)];
      }
  
      function showQuestion(index) {
        quizWrapper.innerHTML = '';
        quizWrapper.appendChild(progressContainer);
        
        progressBar.style.width = `${((index + 1) / quizData.length) * 100}%`;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question active';
        
        const questionTitle = document.createElement('h3');
        questionTitle.className = 'question-title';
        questionTitle.textContent = quizData[index].question;
        questionDiv.appendChild(questionTitle);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'answer-options';
        
        quizData[index].answers.forEach(answer => {
          const btn = document.createElement('button');
          btn.className = 'answer-btn';
          btn.textContent = answer;
          btn.addEventListener('click', () => {
            userAnswers.push({
              question: quizData[index].question,
              answer: answer
            });
            
            if (currentQuestion < quizData.length - 1) {
              currentQuestion++;
              showQuestion(currentQuestion);
            } else {
              showResult();
            }
          });
          optionsDiv.appendChild(btn);
        });
        
        questionDiv.appendChild(optionsDiv);
        quizWrapper.appendChild(questionDiv);
      }
  
      function showResult() {
        clearInterval(discountTimer);
        
        const discount = calculateDiscount();
        const discountCode = generateDiscountCode();
        
        quizWrapper.innerHTML = '';
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result active';
        
        const icon = document.createElement('div');
        icon.className = 'result-icon';
        icon.innerHTML = '🎁';
        resultDiv.appendChild(icon);
        
        const title = document.createElement('h2');
        title.className = 'result-title';
        title.textContent = 'Поздравляем!';
        resultDiv.appendChild(title);
        
        const text = document.createElement('p');
        text.className = 'result-text';
        text.textContent = `Вы получаете скидку ${discount}% на следующую покупку!`;
        resultDiv.appendChild(text);
        
        // const code = document.createElement('div');
        // code.className = 'discount-code';
        // code.textContent = discountCode;
        // resultDiv.appendChild(code);
        
        // const info = document.createElement('p');
        // info.className = 'result-text';
        // info.textContent = 'Используйте этот промокод при оформлении заказа.';
        // resultDiv.appendChild(info);

        // Форма вместо промокода
          const form = document.createElement('form');
          form.id = 'lead-form';
          form.innerHTML = `
            <input type="text" name="name" placeholder="Ваше имя" required>
            <input type="tel" name="phone" placeholder="Ваш телефон" required>
            <button type="submit">Отправить</button>
            <p class="form-status">вапв</p>
          `;
          resultDiv.appendChild(form);

          // Обработчик формы
          // form.addEventListener('submit', function(e) {
          //   e.preventDefault();

          //   const name = form.name.value.trim();
          //   const phone = form.phone.value.trim();
          //   const status = form.querySelector('.form-status');

          //   if (!name || !phone) {
          //     status.textContent = 'Пожалуйста, заполните оба поля.';
          //     status.style.color = 'red';
          //     return;
          //   }

          //   // Здесь будет отправка в Telegram
          //   console.log('Отправка данных:', { name, phone });

          //   status.textContent = 'Спасибо! Мы свяжемся с вами.';
          //   status.style.color = 'green';
          //   form.reset();
          // });

          form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            const status = form.querySelector('.form-status');

            if (!name || !phone) {
              status.textContent = 'Пожалуйста, заполните оба поля.';
              status.style.color = 'red';
              return;
            }

            // ✅ ОТПРАВКА В TELEGRAM
            fetch(`https://api.telegram.org/bot7944263284:AAHUvq6DupvS_z7-VEGRN9ckOlJW-4uBDiY/sendMessage`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                chat_id: '1241297240',
                text: `Новая заявка\nИмя: ${name}\nТелефон: ${phone}\nСкидка: ${discount}%`
              })
            })
            .then(response => {
              if (response.ok) {
                status.textContent = 'Спасибо! Мы свяжемся с вами.';
                status.style.color = 'green';
                form.reset();
              } else {
                status.textContent = 'Ошибка отправки. Попробуйте позже.';
                status.style.color = 'red';
              }
            })
            .catch(error => {
              status.textContent = 'Ошибка сети.';
              status.style.color = 'red';
              console.error('Telegram error:', error);
            });
          });


        
        // const timerText = document.createElement('div');
        // timerText.className = 'timer';
        // resultDiv.appendChild(timerText);
        
        // const useBtn = document.createElement('button');
        // useBtn.className = 'use-discount-btn';
        // useBtn.textContent = 'Перейти к покупкам';
        // useBtn.addEventListener('click', () => {
        //   alert(`Промокод ${discountCode} на скидку ${discount}% скопирован!`);
        // });
        // resultDiv.appendChild(useBtn);
        
        quizWrapper.appendChild(resultDiv);
        
        let timeLeft = 15 * 60;
        updateTimer();
        discountTimer = setInterval(() => {
          timeLeft--;
          updateTimer();
          if (timeLeft <= 0) clearInterval(discountTimer);
        }, 1000);
        
        function updateTimer() {
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          timerText.textContent = `Акция действительна еще: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        console.log(`Результаты викторины ${quizId}:`, {
          discount: discount + '%',
          promoCode: discountCode,
          answers: userAnswers
        });
      }
  
      startBtn.addEventListener('click', () => {
        currentQuestion = 0;
        userAnswers = [];
        showQuestion(0);
      });
    }
  
    // Инициализируем все викторины на странице
    const quizIds = ['quiz1', 'quiz2']; // Добавьте все ID викторин здесь
    quizIds.forEach(quizId => {
      initQuiz(quizId);
    });
  });
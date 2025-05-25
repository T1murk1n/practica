    let form_hero = document.querySelector('form.survey-col');

    form_hero.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = form_hero.name.value.trim();
            const phone = form_hero.phone.value.trim();
            const message = form_hero.message.value.trim()

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
                text: `Новая заявка обратной связи\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}%`
              })
            })
            .then(response => {
              if (response.ok) {

              } else {
                
              }
            })
            .catch(error => {
              console.error('Telegram error:', error);
            });
          });
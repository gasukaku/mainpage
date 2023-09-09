const questionInput = document.getElementById('question');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const question = questionInput.value;

  const payload = {
    'entry.2468101214': question
  };

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf7kBLi6T5fE79hYuBCDsxH1oy3_RoAHmKC_lZPdnpquaWJKA/formResponse';
  const options = {
    'method': 'post',
    'payload': payload
  };

  message.textContent = '送信中...';
  fetch(formUrl, options)
    .then(() => {
      message.textContent = '送信しました！';
      form.reset();
    })
    .catch(() => {
      message.textContent = '送信に失敗しました。しばらくしてから再度お試しください。';
    });
});

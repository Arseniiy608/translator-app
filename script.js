const input = document.getElementById('input');
const translateBtn = document.getElementById('translateBtn');
async function translateText() { 
    const text = input.value;
    const encodedText = encodeURIComponent(text);
     const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=uk|en`;
     const response = await fetch(url);
     const data = await response.json();
     data.responseData.translatedText
     const output = document.getElementById('output');
     output.textContent = data.responseData.translatedText;
}
btn.addEventListener('click', () => {
  gtag('event', 'order_button_clicked');
    console.log('Дані відправлено!');
});

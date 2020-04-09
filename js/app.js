(function(){
    document
    .getElementById("message-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const message = document.getElementById("message");
        const value = message.value;
       if(value === ''){
           const feedback = document.querySelector('.feedback');
           feedback.classList.add('show');
           setTimeout(function(){
               feedback.classList.remove('show')
           },2000)
       }
        document.querySelector('.message-content').textContent = value;
        message.value = '';

    });
})();
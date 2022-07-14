inputs = document.querySelectorAll('.input-notas');
labels = document.querySelectorAll('.label-notas');
submit = document.querySelector('.submit');
avaliacao = document.querySelector('.avaliacao');
agradecimento = document.querySelector('.agradecimento')
nota = document.querySelector('.nota');

inputs.forEach((element, index) => {
    element.onclick = function () {
        if (element.checked == true) {
            labels[index].classList.add('label-checked');
        }
        inputs.forEach((element, index) => {
             if (element.checked == false) {
                labels[index].classList.remove('label-checked')
             }
        })
    }
});

submit.onclick = function () {
    avaliacao.classList.add('hide');
    agradecimento.classList.remove('hide');
    inputs.forEach ((element, index) => {
        if(element.checked == true) {
            nota.textContent = index + 1;
        }
    });
}




notaUm = document.querySelector('#um');
inputs = document.querySelectorAll('.input-notas');
labels = document.querySelectorAll('.label-notas');


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

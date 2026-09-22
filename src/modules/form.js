const forms = () => {

    const forms = document.querySelectorAll('form')

    forms.forEach(form => {

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let isError = false

            const inputs = form.querySelectorAll('input')

            inputs.forEach(input => {

                if (input.type === 'text') {
                    if (!/^[а-яА-ЯёЁ -]+$/.test(input.value)) {
                        alert('В поле ввода имени и вашего сообщения можно вводить только кириллицу, пробел и дефис')
                        isError = true
                    }
                }

                if (input.type === 'email') {
                    if (!/^[a-zA-Z0-9@\-_.!~*']+$/.test(input.value)) {
                        alert('В поле ввода email можно вводить только латиницу, цифры и символы @ - _ . ! ~ * \'' )
                        isError = true
                    }
                }

                if (input.type === 'tel') {
                    if (!/^[0-9()-]+$/.test(input.value)) {
                        alert('В поле ввода телефона можно вводить только цифры, скобки и дефис')
                        isError = true
                    }
                }

            })

            if (!isError) {
                alert('Данные отправлены')
            }
        })

    })

}

export default forms
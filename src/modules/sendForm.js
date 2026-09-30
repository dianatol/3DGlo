const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div')

    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            const value = input.value.trim()

            if (input.name === 'user_name') {
                if (!/^[а-яА-ЯёЁ\s]+$/.test(value)) {
                    alert('В поле имени можно вводить только кириллицу и пробелы')
                    success = false
                }
            }

            if (input.name === 'user_phone') {
                if (!/^[0-9+()\-]+$/.test(value)) {
                    alert('В поле телефона можно вводить только цифры, +, скобки и дефис')
                    success = false
                }
            }

            if (input.name === 'user_message') {
                if (!/^[а-яА-ЯёЁ0-9\s.,!?;:()"'\-]+$/.test(value)) {
                    alert('В сообщении можно использовать кириллицу, цифры, пробелы и знаки препинания')
                    success = false
                }
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (!validate(formElements)) {
            statusBlock.textContent = ''
            return
        }

        sendData(formBody)
            .then(data => {
                console.log(data)

                statusBlock.textContent = successText

                formElements.forEach(input => {
                    input.value = ''
                })
            })
            .catch(error => {
                console.log(error)
                statusBlock.textContent = errorText
            })
    }

    try {
        if (!form) {
            throw new Error('Форма не найдена')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })

    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm


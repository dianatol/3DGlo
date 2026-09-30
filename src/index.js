import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calculate from './modules/calculate'
import tabs from './modules/tabs'
import slider from './modules/slider'
import createDots from './modules/dots'
import sendForm from './modules/sendForm'


timer('2 october 2026')
menu()
modal()
calculate()
tabs()
createDots()
slider()
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

sendForm({ 

    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})

sendForm({ 

    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})

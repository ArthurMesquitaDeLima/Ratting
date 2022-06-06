let selectedOption = 0;

const vote = {
    validate(event) {
        if (selectedOption === 0){
            event.preventDefault()
            alert('Please, selec an option!')
            return
        }

        localStorage.setItem('selectedOption', selectedOption)
    },

    changeSelectedOption(optionNumber) {
        selectedOption = optionNumber
    }
}

const app = {
    start() {
        const options = document.querySelectorAll('.options button')
        const button = document.querySelector('#submit-button')
        button.addEventListener('click', vote.validate)
    
        options.forEach(option => {
            option.addEventListener('click', () => {
                vote.changeSelectedOption(parseInt(option.textContent))
            })
        })
    }
    
}


app.start () 
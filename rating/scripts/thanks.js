function createVoteResultParagraph() {
    let selectedOption = localStorage.selectedOption
    let paragraph = document.querySelector('.result p')
    paragraph.innerText = `You selected out ${selectedOption} of 5`
}

createVoteResultParagraph()

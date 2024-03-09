function toggleAnswer(question) {

    let answer = question.nextElementSibling;
    let allAnswers = document.querySelectorAll('.answer');

    allAnswers.forEach(function(ans) {
   
        if (ans !== answer) {
            ans.classList.add("answer-hidden");
            ans.previousElementSibling.classList.remove("open-question");
            ans.previousElementSibling.classList.remove("open-faq")
        }
    });

answer.classList.toggle("answer-hidden");    
 question.classList.toggle("open-question")
 question.classList.toggle("open-faq")
}


// Select the image buttons
const imageButtons = document.querySelectorAll('.image-button');

// Select all slider cards
const sliderCards = document.querySelectorAll('.slider-card');

// Iterate through each image button and attach a click event listener
imageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        imageButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
        
        // Remove 'active' class from all slider cards
        sliderCards.forEach(card => card.classList.remove('active', 'left', 'right'));
        
        // Add 'active' class to the corresponding slider card
        sliderCards[index].classList.add('active');
        // Add 'previous' class to the previous slider card
        sliderCards[(index - 1 + sliderCards.length) % sliderCards.length].classList.add('left');
        // Add 'next' class to the next slider card
        sliderCards[(index + 1) % sliderCards.length].classList.add('right');
    });
});


//faq
function toggleAnswer(question) {

    let answer = question.nextElementSibling;
    let allAnswers = document.querySelectorAll('.answer');

    allAnswers.forEach(function (ans) {

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




//image rotator
const imageButtons = document.querySelectorAll('.image-button');
const sliderCards = document.querySelectorAll('.slider-card');


imageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        imageButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');


        sliderCards.forEach(card => card.classList.remove('active', 'left', 'right'));


        sliderCards[index].classList.add('active');
        sliderCards[(index - 1 + sliderCards.length) % sliderCards.length].classList.add('left');
        sliderCards[(index + 1) % sliderCards.length].classList.add('right');
    });
});


// tabs | links

const links = document.querySelectorAll(".link");
const arr = [
    {
        titleOne: "Goku",
        titleTwo: "Vegeta",
        image:"./images/dbz-medium.jpg"
      
    },
    {
        titleOne: "Mechamaru",
        titleTwo: "Robo",
        image:"./images/mecha-medium.jpg"
     
    },
    {
        titleOne: "Yoda",
        titleTwo: "Baby Yoda",
        image:"./images/yoda-medium.jpg"
    
    }
];

links.forEach((link, index) => {
    link.addEventListener("click", () => {
   
        const selectedContent = arr[index];
        console.log(selectedContent)
        document.querySelector('.dynamic-heading').innerText = selectedContent.titleOne;
        document.querySelector('.dynamic-heading-two').innerText = selectedContent.titleTwo;
        document.querySelector(".dynamic-image").src = selectedContent.image

        links.forEach((link)=>{
            link.classList.remove("active-link")
        })

        link.classList.add("active-link")
    });
});

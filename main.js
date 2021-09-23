new WOW().init();

let up = document.getElementsByClassName('up')
// let swithDiv = document.getElementById('switchDiv')
let switchBtn = document.getElementById('switchBtn')
let body = document.querySelector('body')
let header = document.getElementById('headerContainer')
let about = document.getElementById('aboutCovid')
let symptoms = document.getElementById('symptoms')
let protection = document.getElementById('protection')
let treatment = document.getElementById('treatment')
let faq = document.getElementById('faq')
let news = document.getElementById('news')
let dos = document.getElementById('dos')
let transmission = document.getElementById('transmission')
let steps = document.getElementById('steps')
let footer = document.getElementById('footer')

let transCardOne = document.querySelector('#transmission #transCardOne')
let transCardTwo = document.querySelector('#transmission #transCardTwo')
let transCardThree = document.querySelector('#transmission #transCardThree')

let pillsTabContent = document.getElementById('v-pills-tabContent')
let pillsBasics = document.getElementById('v-pills-basics-tab')
let pillsSpread = document.getElementById('v-pills-spread-tab')
let pillsProtect = document.getElementById('v-pills-protect-tab')
let pillsSymptoms = document.getElementById('v-pills-symptoms-tab')
let pillsOutbreak = document.getElementById('v-pills-outbreak-tab')
let pillsMyth = document.getElementById('v-pills-myth-tab')

let symptomsCardsOne = document.getElementById('symptomsCardsOne')
let symptomsCardsTwo = document.getElementById('symptomsCardsTwo')
let symptomsCardsThree = document.getElementById('symptomsCardsThree')

let stepsBox = document.getElementById('stepsBox')

let newsCardOne = document.getElementById('newsCardOne')
let newsCardTwo = document.getElementById('newsCardTwo')
let newsCardThree = document.getElementById('newsCardThree')

let logo = document.querySelector('nav .logo')




switchBtn.onclick = function() {
    body.classList.toggle('bg-dark')
    body.classList.toggle('text-light')
    header.classList.toggle('bg-dark')
    about.classList.toggle('bg-dark')
    symptoms.classList.toggle('bg-dark')
    protection.classList.toggle('bg-dark')
    treatment.classList.toggle('bg-dark')
    faq.classList.toggle('bg-dark')
    news.classList.toggle('bg-dark')
    dos.classList.toggle('bg-dark')
    transmission.classList.toggle('bg-dark')
    steps.classList.toggle('bg-dark')
    footer.classList.toggle('bg-dark')

    transCardOne.classList.toggle('text-dark')
    transCardTwo.classList.toggle('text-dark')
    transCardThree.classList.toggle('text-dark')

    symptomsCardsOne.classList.toggle('text-dark')
    symptomsCardsTwo.classList.toggle('text-dark')
    symptomsCardsThree.classList.toggle('text-dark')

    stepsBox.classList.toggle('text-dark')


    pillsTabContent.classList.toggle('text-dark')
    pillsBasics.classList.toggle('bg-light')
    pillsSpread.classList.toggle('bg-light')
    pillsProtect.classList.toggle('bg-light')
    pillsSymptoms.classList.toggle('bg-light')
    pillsOutbreak.classList.toggle('bg-light')
    pillsMyth.classList.toggle('bg-light')


    newsCardOne.classList.toggle('text-dark')
    newsCardTwo.classList.toggle('text-dark')
    newsCardThree.classList.toggle('text-dark')


    logo.classList.toggle('text-dark')
    

}






$(window).scroll(function(){
    x= $(window).scrollTop()
    console.log(x)
    if(x > 700) {
      $('.up').css('opacity', '1')
    }
    else {
        $('.up').css('opacity' , '0')
    }
})

// journal prompt generator
const prompts = [
    "What are three things you're grateful for today?",
    "Describe a happy memory from your childhood.",
    "What is a goal you want to achieve this month?",
    "Write about a challenge you faced and how you overcame it.",
    "If you could have dinner with anyone, dead or alive, who would it be?",
    "What is one thing you learned today?",
    "Write about a book or movie that inspired you.",
    "What are your dreams for the future?",
    "Describe your ideal day.",
    "What makes you feel most alive?",
    "Write about a time you stepped out of your comfort zone.",
    "What is your favorite place in the world and why?",
    "How do you define success for yourself?",
    "What do you wish you could tell your younger self?",
    "Describe a situation where you helped someone.",
    "What are some qualities you admire in others?",
    "What is a skill you would like to learn and why?",
    "Reflect on a recent accomplishment and how it made you feel.",
    "What are your favorite self-care activities?",
    "Write a letter to your future self.",
    "What is something that makes you feel calm and relaxed?",
    "What fears are holding you back from pursuing your dreams?",
    "What brings you joy in your everyday life?",
    "Describe a perfect weekend for you.",
    "What is a cause or issue you are passionate about?",
    "How do you handle stress and pressure in your life?",
    "Write about your favorite family tradition.",
    "What are some things you want to let go of?",
    "What has been a turning point in your life?",
    "What are the three most important values you hold?",
    "Describe a person who has influenced your life and how.",
    "What is one thing you wish to change about yourself?",
    "What is your happiest memory and why?"
];


const generatePromptButton = document.querySelector('.generate-button');
const promptDisplay = document.querySelector('.journaling-prompt');

generatePromptButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    promptDisplay.textContent = prompts[randomIndex];
});


//BMI & menstrual 

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const heightInCm = document.getElementById('height').value;
    const heightInM = heightInCm / 100; // Convert height from cm to m
    const bmi = (weight / (heightInM * heightInM)).toFixed(2);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else if (bmi >= 30) {
        bmiCategory = 'Obese';
    }

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}. You are classified as ${bmiCategory}.`;
}



function trackCycle() {
    const cycleLength = document.getElementById('cycleLength').value;
    const lastPeriod = new Date(document.getElementById('lastPeriod').value);
    if (!lastPeriod) {
        document.getElementById('cycleResult').innerText = 'Please enter a valid last period date.';
        return;
    }
    
    lastPeriod.setDate(lastPeriod.getDate() + parseInt(cycleLength));
    document.getElementById('cycleResult').innerText = `Your next period is expected on: ${lastPeriod.toDateString()}`;
}


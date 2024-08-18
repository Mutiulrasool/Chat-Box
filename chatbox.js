var log = console.log;
const defaultMessage = "Hello! I'm your assistant. You can ask me about my background, work experience, education, hobbies, and more. Just type your question followed by a question mark (?) and I'll do my best to answer it.";
var accessTheQuestionDiv = document.getElementById("QuestionsDiv");
var allPanelChilds = document.querySelectorAll(".panel_child");
var accessTheSentMsgContainer = document.getElementById("msg-sent-container-div");
var messageByUserDiv;
var computerResponse;
var userMsg = "";

window.addEventListener("load", function () {
    setTimeout(function () {
        var defaultResponse = document.createElement("div");
        defaultResponse.classList.add("message-container", "computer-response");
        defaultResponse.innerText = defaultMessage;
        accessTheSentMsgContainer.appendChild(defaultResponse);
        accessTheSentMsgContainer.scrollTop = accessTheSentMsgContainer.scrollHeight;
    }, 1500);
});

const allQuestions = {
    greetings: ["hye", "hello", "good morning"],
    fareWell: ["bye", "good bye", "see you later"],
    thanks: ["thanks", "thank you", "thanks bro"],
    age: ["what is your age?", "your age?", "how old are you?"],
    education: ["what is your education?", "what is your qualification?", "do you have a degree?", "have you doen matriculation or intermideiate?", "what grade did you get in your 12th class?"],
    experience: ["what is your work experience?", "do you have any work experience?", "have you done any job?"],
    location: ["where are you located?", "where are you from?", "what is your nationality?"],
    hobbies: ["what are your hobbies?", "what do you do in your free time?", "how do you spent your free time?"],
    currentJob: ["what kind of job are you doing now?", "what do you do?"],
    contactingWithMe: [ "what is your contact number?", "how can i contact you?"],
    proposals: ["are you seeking for new job role?", "do you want to start new job?", "in which field do you want to start your career?", "we have a job vacancy would you like to joing us?", "wanna start new job?"],
};

function submitMsgOnClick() {
    userMsg = document.getElementById("userInput").value;
    log(userMsg);

    messageByUserDiv = document.createElement("div");
    messageByUserDiv.classList.add("message-container", "user-message");
    messageByUserDiv.innerText = userMsg;
    accessTheSentMsgContainer.appendChild(messageByUserDiv);

    computerResponse = document.createElement("div");
    computerResponse.classList.add("message-container", "computer-response");
    accessTheSentMsgContainer.appendChild(computerResponse);

    document.getElementById("userInput").value = "";

    log(myResponseToUser(userMsg));
    setTimeout(() => {
        computerResponse.innerText = myResponseToUser(userMsg);
        accessTheSentMsgContainer.scrollTop = accessTheSentMsgContainer.scrollHeight;
    }, 1000);
}

function myResponseToUser(usermessage) {
    usermessage = userMsg.toLowerCase();
    for (category in allQuestions) {
        if (allQuestions[category].includes(usermessage)) {
            switch (category) {
                case "greetings":
                    return "hello! how can I help you";
                case "fareWell":
                    return "It was nice talking to you. See you later!";
                case "thanks":
                    return "You're welcome! Feel free to ask more about my education, experiences, or job role.";
                case "age":
                    return "I am 21 years old. My birthday is on 22 july 2003.";
                case "education":
                    return "My highest qualification is an intermediate (12th grade) in Pre-Engineering, which I completed in 2021.";
                case "experience":
                    return "I have been working as a field cashier-cum computer operator in a private company in Dubai since 9 months. I have been working on an international channel named 'English madani channel' as a preacher. I have also 4 years of private home tutoring experience.";
                case "location":
                    return "I am from Pakistan and currently working full-time in Dubai.";
                case "hobbies":
                    return "In my free time, I work on enhancing my soft skills, including reading books, learning programming, and listening to lectures to improve my interpersonal skills.";
                case "currentJob":
                    return "I am currently employed as a field cashier in a private company in Dubai.";
                case "contactingWithMe":
                    return "You can contact me via WhatsApp at +923151398606.";
                case "proposals":
                    return "I am looking for a new job in roles such as Cashier, Computer Operator, Data Entry Clerk, Receptionist, or Customer Service Representative. I am also learning front-end development and seeking remote internship opportunities. If you have any such openings, please consider me.";
            }
        }
    }
    return "Sorry, I didn't understand your question. Please make sure it is properly phrased and ends with a question mark.";
}

document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        return submitMsgOnClick();
    }
});

function showTheQuestions() {
    accessTheQuestionDiv.style.display = "block";
}
document.getElementById("all-Questions").addEventListener("click", showTheQuestions);

function showTheQuestionPanel() {
    var allPanels = document.querySelectorAll(".panel");
    // Hide all panels first
    allPanels.forEach(function (panel) {
        panel.style.display = "none";
    });

    var accessThePanelElement = this.nextElementSibling;

    log(accessThePanelElement);
    if (accessThePanelElement.style.display === "block") {
        accessThePanelElement.style.display = "none";
    }
    else {
        accessThePanelElement.style.display = "block";
    }
}

const accessTheCtgryHeading = document.querySelectorAll(".question-ctgry-heading");
accessTheCtgryHeading.forEach(function (heading) {
    heading.addEventListener("click", showTheQuestionPanel);
});

function closeTheQuestionBar() {
    accessTheQuestionDiv.style.display = "none";
}

document.getElementById("x-iconToCloseTab").addEventListener("click", closeTheQuestionBar);

function setThePanelChildAsUserMsg(event) {
    userMsg = event.target.textContent;
    document.getElementById("userInput").value = userMsg;
    submitMsgOnClick();
    closeTheQuestionBar();
}

allPanelChilds.forEach(function (child) {
    child.addEventListener("click", setThePanelChildAsUserMsg);
});

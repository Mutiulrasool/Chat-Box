var log = console.log;

function submitMsgOnClick() {
    const userMsg = document.getElementById("userInput").value;
    log(userMsg);
    var accessTheSentMsgContainer = document.getElementById("msg-sent-container-div");
    //creating a div for the user message which has some CSS styling for better appearence
    var messageByUserDiv = document.createElement("div");
    messageByUserDiv.classList.add("message-container", "user-message");
    messageByUserDiv.innerText = userMsg;
    accessTheSentMsgContainer.appendChild(messageByUserDiv);

    // if(accessTheSentMsgContainer)
    var computerResponse = document.createElement("div");
    computerResponse.classList.add("message-container", "computer-response");
    accessTheSentMsgContainer.appendChild(computerResponse);

    document.getElementById("userInput").value = "";

    const allQuestions = {
        greetings: ["hye", "hello", "Good morning", "good evening", "good afternoon"],
        fareWell: ["bye", "good bye", "see you later"],
        thanks: ["thanks", "thank you", "thanks bro",],
        age: ["what is your age?", "your age?", "how old are you?"],
        education: ["what is your education?", "what is your qualifications?", "do you have a degree?", "have you doen matriculation or intermideiate?", "what grade did you get in your 12th class?"],
        experience: ["what are your work experiences?", "do you have any work experience?", "have you done any job?"],
        location: ["where are you located?", "where are you from?", "what is yout nationality?"],
        hobbies: ["what are your hobbies?", "what do you do in your free time?", "what do you like to do in your free time"],
        currentJob: ["what kind of job are you doing now?", "what do you do?", "what do you do?"],
        contactingWithMe: ["how can I get in touch with you?", "what is your contact number", "how can i contact you?"],
        proposals: ["are you seeking for new job role?", "do you want to start new job?", "in which field do you want to start your career?", "we have a job vacancy would you like to joing us?", "wanna start new job?"],
    }

    function myResponceToUser(usermessage) {
        usermessage = userMsg.toLowerCase();
        for (category in allQuestions) {
            if (allQuestions[category].includes(userMsg)) {
                switch (category) {
                    case "greetings":
                        return "hello! how can I help you";
                    case "fareWell":
                        return "It was nice to have conversation with you. see you later";
                    case "thanks":
                        return "you are welcome. you ask me more questions regarding my education,Experiences and job role";
                    case "age":
                        return "I am 21 years old. My firthday is 22 july 2003.";
                    case "education":
                        return "My highest qualification is intermediate(12th) that I passed in 2021 in Pre-Engeenering group.";
                    case "experience":
                        return "I have been working as a field cashier-cum comnputer operator in a private company in dubai since 9 months. I have been working on an international channal named 'English madani channal' as a preecher. I have also 4 years of private home tutoring experience.";
                    case "location":
                        return "I am from palistan and currently, I am doing a full-time job in dubai.";
                    case "hobbies":
                        return "After completing my job, I spent my free time in enhancing my soft skills that includes reading books, learning programming and listning lactures to improve my interpersonal skils";
                    case "currentJob":
                        return "I am working as a field cashier in a private company in dubai.";
                    case "contactingWithMe":
                        return "You can contact me via whatsApp phone np: +923151398606";
                    case "proposals":
                        return "Yes! I am looking for a new job role on the following positions: Cashier, computer operator, Data Entry clerk, Receptionist or Customer service representive. You can consider me if you have any job vacancy related to the following positions. However,I have been learning front-end-devolpment and covered the assentials of HTML CSS. I am looking for remote internship opprotunitiy in front-end-devolpment. If you have any paid/nonpaid remote internship opprotunity, you can consider me.";
                }
            }

        }
        return "Sorry! I couldn't understand the question. Make sure you have asked the question in proper way follwed by Question mark (?)";
    }
    log(myResponceToUser(userMsg))
    setTimeout(() => {
        computerResponse.innerText = myResponceToUser(messageByUserDiv);
        accessTheSentMsgContainer.scrollTop = accessTheSentMsgContainer.scrollHeight;
    }, 1000)

}
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        return submitMsgOnClick();
    }
});
try{
    function showTheQuestions() {
        document.getElementById("QuestionsDiv").style.display = "flex";        
    }
}
catch{
    console.error(error);
    
}
document.getElementById("all-Questions").addEventListener("click", showTheQuestions);
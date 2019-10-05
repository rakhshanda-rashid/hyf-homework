//Class Email
class Email{
    constructor(subject,body){
        this.subject=subject;
        this.body=body;
      //console.log('this is spam detector');
      
    }}

// const str = "ThIs Is A Test On HOW tO counT UppeR CaSE";
//console.log(str.replace(/[^A-Z]/g, "").length);




//Class spam detector
class spamDetector{
//Uppercase Character Percentage checker
upperCasePercentageChecker(email){
    const emailSubject = email.subject;
    const emailBody = email.body;
    const subjectUpperCase = emailSubject.replace(/[^A-Z]/g, "").length;
    const bodyUpperCase = emailBody.replace(/[^A-Z]/g, "").length;
    const sumOfAllWords = email.subject.length + email.body.length;
    //console.log(sumOfAllWords);
    
    //counting uppercase
    const countingUpperCase = subjectUpperCase + bodyUpperCase;
    const percentUpperCase = (countingUpperCase / sumOfAllWords) * 100;
    const convertToInteger=parseInt(percentUpperCase,10);
    // console.log('integer',convertToInteger);
    if(convertToInteger >= 60)
    {
        return true;
    }
    else 
    {
        return false;
    }
    //console.log('percentage of uppercase letters are ',  percentUpperCase);
};

    //Check For Threaten/Fixed Words
    spamWordsDetector(email){
        const spamWords = ['viagra','offer','free','business Proposal'];
        //console.log('without split',email.subject);
        
        /*---------- Subject Part------- */
        const subjectWordsSplitter = email.subject.split(' ');
        //console.log('split', subjectWordsSplitter);
        const subjectTrimmed = trimAndIgnore(subjectWordsSplitter);
       //console.log(subjectWordsSplitter);
       

       /*---------- Body Part-----------*/
        const bodyWordsSplitter = email.body.split(' ');
        //console.log('split', bodyWordsSplitter);
        const bodyTrimmed = trimAndIgnore(bodyWordsSplitter);


        const spamSubjectWords = spamWords.filter(word => subjectTrimmed.includes(word));
        console.log('spam detected in subject', spamSubjectWords);
        const spamBodyWords = spamWords.filter(word => bodyTrimmed.includes(word));
        if (spamSubjectWords.length > 0 || spamBodyWords > 0)
            {
            return true;
        } 
        else {
            return false;
        }
    };

    //Subject only contain word 'HELLO'
    spamHelloDetector(email){
        const subjectString = email.subject.length;
        //console.log(subjectString);
        const subjectHavingHello = email.subject.toLowerCase();
        //console.log(subjectHavingHello);
        if(subjectString === 5 && subjectHavingHello === 'hello')
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    isSpam(email)
    {
        //return boolean
        //Uppercase Character
        const upperCaseChecker = this.upperCasePercentageChecker(email);
        //Spam specific Words Detector
        const specificWords  = this.spamWordsDetector(email);
        //Subject Include string Hello
        const havingOnlyHello = this.spamHelloDetector(email);
        const results = [checkPerc, checkWord, checkHello];
        const isTrue = (truee) => {
            return truee === true;
        }
        return results.some(isTrue);

    };
};

  

//   function upperCaseCalculator(emailString){
//     const upperCaseLetters=emailString.replace(/[^A-Z]/g, "").length;
//     return upperCaseLetters;
//     }
  
const newMail = new Email('VIAGRA WORLD FREE','WORld');
const newMail2 = new Email('VIAGRA SPAM','Hello guys this is spam email dare to detect me')
const stringHello = new Email('HELLO','WORLD');
const spamDetect = new spamDetector();
console.log(spamDetect.isSpam(newMail));
console.log(spamDetect.isSpam(newMail2));
 console.log(spamDetect.isSpam(stringHello));

//Trim and Ignore Function

function trimAndIgnore(unTrimmedArray) {
    const trimmedArray = [];
    for (let i = 0; i< unTrimmedArray.length; i++) {
        trimmedArray.push(unTrimmedArray[i].replace(/\W/g, '').toLowerCase());
         //console.log('trimmed array', trimmedArray);
        
    }
    return trimmedArray;
}
// class Email{
//     constructor(subject, body) {
//         this.subject = subject;
//         this.body = body;
//     }


// }

// //Class Spam Detector
// class SpamDetector{
    
// }

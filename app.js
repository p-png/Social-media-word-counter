/** 
 * SocialMedia Word Counter App
 * The App is to count how many words the user has typed based on the 
 * Social Media handle they have selected. And when they reach the limit
 * of the SM handle they receive a message You have reached your maximum word count.
 * 
 * Bellow are the word counts for each social media
 * Twitter = 280
 * Facebook = 63206
 * Instagram = 2200
 * Others = 8000. 
 * 
 * When a user selects a SocialMedia Handle, Words in the html page
 * changes from 0 to the desired number of words. E.g if twitter is selected, word changes form 0 280.centered
 * 
 * When a user begins to type in the textarea, Word Count increases while word decreases.
 * 
 * Once word decreases to 0. The user is unable to type any further characters and gets the
 * congratulatory message. 
 * 
 * NOTE
 * 1. Your code must be properly commented.
 * 2. Use Es6 syntax wherever possible.  
 */


 
//  Hold span tags to output count and word count respectively in variabels
let count=document.querySelector('#count');
let words = document.querySelector('#words');

//  Hold radio buttons,textarea and message areas respectivly in variables

let media = document.forms.media;
let text = document.querySelector('#text');
const message = document.querySelector('#message');

// create an empty variable to hold the maximum word count for each social media
let limit;


// loop through the radio buttons 
for(let i = 0;i<media.length;i++){

    // Listen for a click event on all the radio buttons
    // and assign them their maximum word count 
    // and display it to the browser
    media[i].addEventListener('click',()=>{
        if(media[0].checked){
            limit=280
            words.innerHTML=limit
            count.innerHTML=0
            text.value=""
        }else if(media[1].checked){
            limit = 63206
            words.innerHTML=limit
            count.innerHTML=0
            text.value=""
        }else if(media[2].checked){
            limit = 2200
            words.innerHTML=limit
            count.innerHTML=0
            text.value=""
        }else if(media[3].checked){
            limit = 8000
            words.innerHTML=limit
            count.innerHTML=0
            text.value=""
        }else{message.innerHTML=''}
    })
}


// Listen for a click event on the textarea to know when the user starts using the textarea
text.addEventListener('click',()=>{

    // set an interval of 1ms to output the length of the textarea's value at every interval
    setInterval(()=>{
        if(media[0].checked||media[1].checked||media[2].checked||media[3].checked){
            words.innerHTML=limit-text.value.length
        count.innerHTML=text.value.length
        }else{message.innerHTML=''}
        
        // Disable textarea and output a congratulatery message when the maximum word count is reached
        if(text.value.length === limit){
            text.setAttribute('maxLength',limit)
            message.style.color = 'green'
            message.innerHTML='Congratulation!!! you have reached  maximum word count'
        
        }
        else {message.innerHTML=''}
    },1);
})


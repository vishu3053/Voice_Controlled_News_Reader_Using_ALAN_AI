intent('What does this app do?', 'What can I do here?', 
       reply("This is a news app")
);

// // callback function gonna happen after ALAN listens for 'Start a command'
// intent('Start a command', (p) => {
//     // same as reponse 
//     p.play('Hello, I understood your command');
// });


// // Running a command
// intent('Start a command', (p) => {
//     // instead of putting string, setting up an object 
//     p.play({command : 'testCommand'});
// })

// News API key
const API_Key = '4faadf186f9041b3aaad120ee2e70fa5';


// Creating an API Endpoint for News by Source 
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}';
    
    // BBC News -> given as input
    // bbc-news -> required input for API
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    // In ALAN, we have inbuilt functionalities for making API Call
    // we can actual data using body argument of callback function
    api.request(NEWS_API_URL, (error, response, body) => {
        const {articles} = JSON.parse(body);
    })
});

intent('What does this app do?', 'What can I do here?', 
       reply("This is a news app")
);

// callback function gonna happen after ALAN listens for 'Start a command'
intent('Start a command', (p) => {
    // same as reponse 
    p.play('Hello, I understood your command');
});


var before = document.getElementById("before");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
let commandHistory = [];
let commandIndex = -1;

setTimeout(function () {
    loopLines(banner, "", 130);
  }, 100);

  // set prompt display to inline after banner is done loading 

  setPrompt = setTimeout(function () {
    document.getElementById("prompt").style.display = "inline";
  }, 1000);

   
 banner = [
  "<span class=\"heading\">---------------------------------------------</span>",
  "<span class=\"heading\">Welcome to my interactive portfolio Terminal!</span>",
  "<span class=\"heading\">---------------------------------------------</span>",
  "<span class=\"infos\">For a list of available commands, type</span> <span class=\"color1\">help</span><span class=\"color2\">.</span>",
  "<span class=\"infos\">Use <span class=\"color1\">sudo</span> only if you are an admin of this website!!</span>",
  "<span class=\"infos\">After typing in the commands, press <span class=\"color1\">Enter/Return</span></span>",
  "<span class=\"infos\">Inspiration from <a href=\"https://www.youtube.com/@fknight\" target=\"_blank\">Forrest Knight</a></span>",
  "<br>"
  ];

  const quotes = [
    "“The unexamined life is not worth living.” – Socrates",
    "“He who has a why to live can bear almost any how.” – Friedrich Nietzsche",
    "“Happiness depends upon ourselves.” – Aristotle",
    "“I think, therefore I am.” – René Descartes",
    "“The only true wisdom is in knowing you know nothing.” – Socrates",
    "“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.” – Buddha",
    "“Life must be understood backward. But it must be lived forward.” – Søren Kierkegaard",
    "“Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.” – Jean-Paul Sartre",
    "“To live is to suffer, to survive is to find some meaning in the suffering.” – Friedrich Nietzsche",
    "“It is not length of life, but depth of life.” – Ralph Waldo Emerson",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. – Marcus Aurelius",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The only thing that I know is that I know nothing. – Socrates",
    "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey",
    "One’s life has value so long as one attributes value to the life of others, by means of love, friendship, indignation, and compassion. – Simone de Beauvoir",
    "Life is a shipwreck, but we must not forget to sing in the lifeboats. – Voltaire",
    "The greatest wealth is to live content with little. – Plato",
    "Out of life’s school of war: What does not kill me makes me stronger. – Friedrich Nietzsche",
    "Happiness is not a state to arrive at, but a manner of traveling. – Margaret Lee Runbeck",
    "Think lightly of yourself and deeply of the world. – Miyamoto Musashi",
    "There is only one life and one love. Our divine duty is to give that love back to the universe. – Fyodor Dostoevsky",
    "Patience is bitter, but its fruit is sweet. – Aristotle",
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    "To be yourself is all that you can do. – Chris Cornell",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    "The mind is everything. What you think, you become. – Buddha",
    "There is nothing either good or bad, but thinking makes it so. – William Shakespeare",
    "If you want to improve, be content to be thought foolish and stupid. – Epictetus",
    "Man is nothing else but what he makes of himself. – Jean-Paul Sartre",
    "It is impossible for a man to learn what he thinks he already knows. – Epictetus",
    "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts. – Bertrand Russell",
    "Those who know do not speak. Those who speak do not know.” – Lao Tzu",
    "“The more you know, the more you realize you don't know.” – Aristotle",
  ];

    // Function to display a random quote
    function showDailyQuote() {
      randomInt = Math.floor(Math.random()*500) % quotes.length
      document.getElementById("daily-quote").textContent = quotes[randomInt];
    }
    

  window.onload = function() {
    const commandInput = document.getElementById('command-input');
    const terminal = document.getElementById('terminal');
    const prompt = document.getElementById('prompt');
    const commandLine = document.getElementsByClassName('command-line');

    showDailyQuote();



    // Function to handle user input
    function handleUserInput() {
        // Get the user input from the command input element
        const userInput = commandInput.textContent.trim();

        // Check if the user input is not empty
        if (userInput !== '') {
            // Create a new paragraph element to display the command
            const commandOutput = document.createElement('p');
            commandOutput.textContent = `${prompt.textContent} ${userInput}`;
            commandOutput.classList.add('command');

            // Process the user input
            commander(userInput, commandOutput);

            // Clear the command input after processing
            commandInput.textContent = '';
        }
    }


    // Event listener for handling Enter key press
    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleUserInput();
        }
    });

    // Set focus to the command input for user convenience
    commandInput.focus();

    // focus on the command input when the user clicks on the line with the command input 
    document.addEventListener('click', function() {
        commandInput.focus();
    });

};

function ensureCommandInputVisible() {
  setTimeout(function() {
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('command-input').focus();
  }, 100);
}


function commander(cmd, currentinput) {

  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "education":
      loopLines(education, "color2 margin", 80);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "skills":
      loopLines(skills, "color2 margin", 80);
      break;
    case "experience":
      loopLines(experience, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      commandHistory.pop();
      loopLines(commandHistory, "color2", 80);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:sr10code@gmail.com">sr10code@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "features":
      loopLines(features, "color2 margin", 80);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }

  currentinput.style.marginBottom = "10px";


  // Add the current command to the terminal
  document.getElementById('before').parentNode.insertBefore(currentinput, before);

  // Clear the command input after processing
  document.getElementById('command-input').textContent = '';

  ensureCommandInputVisible();


}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}


function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    // Scroll to the new position with a slight delay to ensure content is rendered
    setTimeout(function() {
      const inputContainer = document.getElementById('input-container');
      if (inputContainer) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
        document.getElementById('command-input').focus();
      }
    }, 10);
  }, time);
}

  function loopLines(name, style, time) {
    name.forEach(function (item, index) {
      addLine(item, style, index * time);
    });
  }


document.getElementById('command-input').addEventListener('keydown', function(e) {

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    // Prevent the default action
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
        // Prevent the cursor from moving to the start of the input
        e.preventDefault();

        // If there are no commands in the history, do nothing
        if (!commandHistory.length) return;

        // If we're not already at the oldest command in the history, go back one
        if (commandIndex > 0) commandIndex--;

        // Update the input value with the command from the history
        this.textContent = commandHistory[commandIndex];
        
   // Move the cursor to the end of the input
   let node = this.childNodes[0] ? this.childNodes[0] : this.appendChild(document.createTextNode(''));
   const range = document.createRange();
   const sel = window.getSelection();
   range.setStart(node, this.textContent.length);
   range.collapse(true);
   sel.removeAllRanges();
   sel.addRange(range);
    } else if (e.key === 'ArrowDown') {
        // Prevent the cursor from moving to the end of the input
        e.preventDefault();
        if (!commandHistory.length) return;
        if(this.textContent === '') return;

        // If we're at the newest command in the history, clear the input
        if (commandIndex === -1 || commandIndex === commandHistory.length - 1) {
            commandIndex = commandHistory.length;
            this.textContent = '';
        } else {
            // Otherwise, go forward one command in the history
            commandIndex++;
            this.textContent = commandHistory[commandIndex];

        // Move the cursor to the end of the input
        let node = this.childNodes[0] ? this.childNodes[0] : this.appendChild(document.createTextNode(''));
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(node, this.textContent.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.textContent) {
          commandHistory.push(this.textContent);
          commandIndex = commandHistory.length;
      }
  }
});

console.log(
  "%cTry to find out my 'secret' hidden inside the website!",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);





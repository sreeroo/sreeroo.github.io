var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");

setTimeout(function () {
    loopLines(banner, "", 130);
  }, 100);


  window.onload = function() {
    const commandInput = document.getElementById('command-input');
    const terminal = document.getElementById('terminal');
    const prompt = document.getElementById('prompt');

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

            // Append the command output to the terminal
            terminal.appendChild(commandOutput);

            // Clear the command input after processing
            commandInput.textContent = '';

            // Generate a new prompt
            generatePrompt();
        }
    }

    // Function to generate a new prompt
    function generatePrompt() {
        // Create a new prompt element
        const newPrompt = document.createElement('span');
        newPrompt.id = 'prompt';
        prompt.style.display = 'inline-block';
        newPrompt.textContent = '> ';


        // Append the new prompt to the terminal
        terminal.appendChild(newPrompt);

        // Set focus to the command input for user convenience
        commandInput.focus();
    }

    // Event listener for handling Enter key press
    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleUserInput();
        }
    });

    // Delay generating the prompt until after the ASCII art banners are displayed
    setTimeout(generatePrompt, 2000); // Adjust the delay as needed (in milliseconds)
};


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
  
      window.scrollTo(0, document.body.offsetHeight);
    }, time);
  }

  function loopLines(name, style, time) {
    name.forEach(function (item, index) {
      addLine(item, style, index * time);
    });
  }
 
 banner = [
    "+-+-+-+-+ +-+-+",
    "|W|E|L|C|O|M|E|",
    "+-+-+-+-+ +-+-+",
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
  ];
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");

setTimeout(function () {
    loopLines(banner, "", 130);
  }, 100);

  // set prompt display to inline after banner is done loading 

  setPrompt = setTimeout(function () {
    document.getElementById("prompt").style.display = "inline";
  }, 1000);



  window.onload = function() {
    const commandInput = document.getElementById('command-input');
    const terminal = document.getElementById('terminal');
    const prompt = document.getElementById('prompt');
    const commandLine = document.getElementsByClassName('command-line');

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

    // focus on the command input when the user clicks anywhere on the screen
    document.addEventListener('click', function() {
        commandInput.focus();
    });


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
    "<span class=\"heading\">---------------------------------------------</span>",
    "<span class=\"heading\">Welcome to my interactive portfolio Terminal!</span>",
    "<span class=\"heading\">---------------------------------------------</span>",
    "<span class=\"infos\">For a list of available commands, type</span> <span class=\"color1\">'help'</span><span class=\"color2\">.</span>",
    ];

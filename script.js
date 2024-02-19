const terminal = document.getElementById('terminal');
const commandLine = terminal.querySelector('.command');

commandLine.focus();


commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = commandLine.innerText.trim();
        const output = executeCommand(command);
        const outputElement = document.createElement('div');
        outputElement.classList.add('output');
        outputElement.textContent = output;
        terminal.appendChild(outputElement);

        const newPrompt = document.createElement('div');
        newPrompt.classList.add('prompt');
        newPrompt.textContent = '$ ';
        terminal.appendChild(newPrompt);

        const newCommandLine = document.createElement('div');
        newCommandLine.classList.add('command');
        newCommandLine.contentEditable = true;
        newCommandLine.spellcheck = false;
        terminal.appendChild(newCommandLine);

        newCommandLine.focus();

        terminal.scrollTop = terminal.scrollHeight;

        e.preventDefault();
    }
});
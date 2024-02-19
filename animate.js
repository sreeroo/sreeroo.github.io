
const asciiComputer = [
    "                        .,,uod8B8bou,,.",
    "                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.",
    "           ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||",
    "           !...:!TVBBBRPFT||||||||||!!^^\"\"'   ||||",
    "           !.......:!?|||||!!^^\"\"'            ||||",
    "           !.........||||                     ||||",
    "           !.........||||  C:/                ||||",
    "           !.........||||                     ||||",
    "           !.........||||                     ||||",
    "           !.........||||                     ||||",
    "           !.........||||                     ||||",
    "           `.........||||                    ,||||",
    "            .;.......||||               _.-!!|||||",
    "     .,uodWBBBBb.....||||       _.-!!|||||||||!:'",
    "  !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....",
    "  !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.",
    "  !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.",
    "  !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^\"`\";:::       `.",
    "  !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.",
    "  `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.",
    "    `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'",
    "      `........::::::::::::::::;iof688888888888888888888b.     `",
    "        `......:::::::::;iof688888888888888888888888888888b.",
    "          `....:::;iof688888888888888888888888888888888899fT!",
    "            `..::!8888888888888888888888888888888899fT|!^\"'",
    "              `' !!988888888888888888888888899fT|!^\"'",
    "                  `!!8888888888888888899fT|!^\"'",
    "                    `!988888888899fT|!^\"'",
    "                      `!9899fT|!^\"'",
    "                        `!^\"'"
];



const asciiName= [
    "                                                                        ,----..       ,----..       ,----..   ,-.----.    ",
    "                .--.--.   ,-.----.       ,---,.    ,---,.,-.----.     /   /   \     /   /   \     /   /   \  \    /  \   ",
    "               /  /    '. \    /  \    ,'  .' |  ,'  .' |\    /  \   /   .     :   /   .     :   /   .     : |   :    \  ",
    "              |  :  /`. / ;   :    \ ,---.'   |,---.'   |;   :    \ .   /   ;.  \ .   /   ;.  \ .   /   ;.  \|   |  .\ : ",
    "              ;  |  |--`  |   | .\ : |   |   .'|   |   .'|   | .\ :.   ;   /  ` ;.   ;   /  ` ;.   ;   /  ` ;.   :  |: | ",
    "              |  :  ;_    .   : |: | :   :  |-,:   :  |-,.   : |: |;   |  ; \ ; |;   |  ; \ ; |;   |  ; \ ; ||   |   \ : ",
    "               \  \    `. |   |  \ : :   |  ;/|:   |  ;/||   |  \ :|   :  | ; | '|   :  | ; | '|   :  | ; | '|   : .   / ",
    "                `----.   \|   : .  / |   :   .'|   :   .'|   : .  /.   |  ' ' ' :.   |  ' ' ' :.   |  ' ' ' :;   | |`-'  ",
    "                __ \  \  |;   | |  \ |   |  |-,|   |  |-,;   | |  \'   ;  \; /  |'   ;  \; /  |'   ;  \; /  ||   | ;     ",
    "               /  /`--'  /|   | ;\  \'   :  ;/|'   :  ;/||   | ;\  \\   \  ',  /  \   \  ',  /  \   \  ',  / :   ' |     ",
    "              '--'.     / :   ' | \.'|   |    \|   |    \:   ' | \.' ;   :    /    ;   :    /    ;   :    /  :   : :     ",
    "                `--'---'  :   : :-'  |   |.'    |   | ,'  |   |.'       `---`         `---`         `---`     `---'.|     ",
    "                          |   |.'    |   | ,'  |   | ,'  |   |.'                                                 `---`     ",
    "                            `---'      `----'    `----'    `---'                                                          ",
];

window.onload = function() {
    const asciiArtContainer1 = document.getElementById('ascii-art-container-1');
    const asciiArtContainer2 = document.getElementById('ascii-art-container-2');
    const delay = 100; // Delay in milliseconds

    asciiComputer.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('pre');
            lineElement.textContent = line;
            asciiArtContainer1.appendChild(lineElement);
        }, index * delay);
    });

    asciiName.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('pre');
            lineElement.textContent = line;
            asciiArtContainer2.appendChild(lineElement);
        }, index * delay);
    });
};
}

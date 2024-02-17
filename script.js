$(function() {
    $("#terminal").terminal({
      greetings: "Welcome to my portfolio!",
      promt: "> ",
      commands: {
        "about": function() {
          this.echo("Hi there, I'm a CS Student and a curious software engineer with almost 3 years of experience.)");
        },
        "projects": function() {
          this.echo("Check out some of my projects:");
          // Add your project descriptions here
        },
        "contact": function() {
          this.echo("Get in touch with me:");
          // Add your contact information here
        },
        "help": function() {
          this.echo("Available commands: about, projects, contact, help");
        }
      }
    });
  });
  
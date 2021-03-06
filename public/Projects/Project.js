export default [
  {projectName:`This Website`,
    projectLanguages:`HTML, CSS, Javascript`,
    projectDescription:`Using techniques learned in my web development course, I created this website to show off projects that I work on, 
    and to create a hub from which I can link my most recent resume as well as my github and linkedIn accounts.`,
    projectImage:"",
    projectTimeline:`March 2022`},

  {projectName:`Tuiter`,
    projectLanguages:`HTML, CSS, Javascript`,
    projectDescription:`For my web development course, I am creating a twitter-like website adding to it each week with new skills learned.
    The site is written mostly with HTML and CSS, and a few pages use JavaScript scripts to generate HTML.
    The site is hosted on netlify, from a github repository found <a href="https://github.com/Matamir/web-dev" target="_blank">here</a>.
    `,
    projectImage:"",
    projectTimeline:`January-March 2022`},

  {projectName:`Discord Bot`,
    projectLanguages:`Python`,
    projectDescription:`Using the discord.py API, I wrote a simple discord bot that could respond to messages.
    The bot had different responses based on key words or the sender of a message, as well as fully random responses.
    The bot was hosted using an always-on repl.it
    This required reading though fairly extensive documentation, as well as testing in a discord server to find a good frequency for the bot to respond.`,
    projectImage:``,
    projectTimeline:`July-August 2021`},

  {projectName:`Photo Editor`,
    projectLanguages:`Java`,
    projectDescription:`Worked with a partner to create a photo editor following the Model-View-Controller design pattern and Object-Oriented-Design principles.
    Features included: import/export functionality from various file formats, image filtering (including blur, sharpen, grayscale, sepia, and mosaic), image layering, and the ability to execute scripts.
    We also created our own image file format very similar to PPM which could be interpreted by our program and could be imported and exported.
    Finally we created a very simple GUI from which these features could be used.
    This project was done over the course of about a month.  
    Unfortunately we were asked not to make a public github repository, but a private repository is available upon request.`,
    projectImage:"./PhotoEditor.png",
    projectTimeline:`June 2021`},

  {projectName:`Solitaire`,
    projectLanguages:`Java`,
    projectDescription:`Solo class project to build a solitaire game in Java following the Model-View-Controller design pattern and Object-Oriented-Design principles.
    The game is playable from the IDE console, displayed using strings, and takes inputs from the user to make moves.
    I implemented thorough testing using JUnit, and did some play testing from the console.
    Unfortunately we were asked not to make a public github repository, but a private repository is available upon request.`,
    projectImage:"",
    projectTimeline:`May 2021`},

  {projectName:`Flood-it`,
    projectLanguages:`Java`,
    projectDescription:`Created Flood-it game in Java with a selectable board size from 1x1 to 64x64, two player functionality, and record keeping for best time and fewest clicks.
    The board randomly generates once the size is selected, coloring in each position with one of five colors (the game could take any non-zero number of colors, but the assignment called for five).
    The program also generates a goal number of clicks for the player to fill the whole board, based on the board size they chose.  If that goal is met, the user score is set as the record to beat, and the new click goal.
    This project was based on the example found <a href="https://unixpapa.com/floodit/" target="_blank">here</a>.
    Unfortunately we were asked not to make a public github repository, but a private repository is available upon request.`,
    projectImage:"./floodIt.png",
    projectTimeline:`March-April 2021`},

  {projectName:`Tetris`,
    projectLanguages:`Racket`,
    projectDescription:`Created tetris game in React.  This was done over the course of about a month and a half, including two team changes which involved consolidating code between the groups.
    The game included: randomly generating one of eight pieces, clearing full rows, score keeping for cleared rows, and gravity dropping rows above cleared rows.
    The user is also able to start the game with partially filled in rows, giving as inputs the number of rows and the probability that any given square in the row is filled.
    Unfortunately we were asked not to make a public github repository, but a private repository is available upon request.`,
    projectImage:"./Tetris.jpg",
    projectTimeline:`October-November 2020`},

  {projectName:``,
    projectLanguages:``,
    projectDescription:``,
    projectImage:"",
    projectTimeline:``},
];
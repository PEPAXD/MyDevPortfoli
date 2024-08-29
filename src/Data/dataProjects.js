const dataProjects = [
  {
    id: 1,
    tittle: "SIAMES.MP3",
    image:
      "https://raw.githubusercontent.com/PEPAXD/SiamesMP3Player/main/screenshot.jpg",
    urlDeploy: "https://pepaxd.github.io/SiamesMP3Player/",
    urlRepo: "https://github.com/PEPAXD/SiamesMP3Player",

    text: "This is an interactive music player project that allows users to play, pause, skip songs, adjust volume and much more. The music player is centered around a music group called SIAMES.",
    challengeText:
      "One of the challenges was to randomly generate 'bublekeys background' and manage the storage of songs using the client storage.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    tittle: "PetFinder Adoption",
    image:
      "https://raw.githubusercontent.com/PEPAXD/PetFinder/main/WebSiteView%20(3).png",
    urlDeploy: "https://pepaxd.github.io/PetFinder/",
    urlRepo: "https://github.com/PEPAXD/PetFinder",
    text: "PetFinder, is a pet adoption website that has the mission to find them an adoptive home.",
    challengeText:
      "I faced the challenge of creating a responsive interface with a creative design. In addition, I integrated the Typed.js library to animate the text.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 5,
    tittle: "Coffee - Landing Page",
    image:
      "https://media.licdn.com/dms/image/D4D22AQEC5s6hbMD9Hw/feedshare-shrink_800/0/1694295450906?e=1710374400&v=beta&t=Wt-zHHYy59YRB87gVIZaeht5YANQ5mrceSV5ZrZ1-JM",
    urlDeploy: "https://pepaxd.github.io/CoffeeLandingPage/",
    urlRepo: "https://github.com/PEPAXD/CoffeeLandingPage",
    text: "Elegant and responsive landing page for coffee enthusiasts. This project showcases a visually appealing website centered around a coffee bar.",
    challengeText:
      "The website is fully responsive and adapts perfectly to different screen sizes, ensuring an optimal experience.",
    techStack: ["HTML5", "CSS3"],
  },
  {
    id: 4,
    tittle: "Weather - React",
    image:
      "https://raw.githubusercontent.com/PEPAXD/Weather-React/main/screenShot.png",
    urlDeploy: "https://pepaxd.github.io/Weather-React/",
    urlRepo: "https://github.com/PEPAXD/Weather-React/tree/main/weatherApp",
    text: "Displays weather information by city using the OpenWeather API.",
    challengeText:
      "Designing the fade-in rotation animations between the home page and the main page was a challenge.",
    techStack: ["React"],
  },
  {
    id: 3,
    tittle: "Darkest Builder",
    image:
      "https://raw.githubusercontent.com/PEPAXD/Darkest-Builder-Deploy/main/Darkest%20Builder/screenshots/Wiki.jpg",
    urlDeploy: "https://pepaxd.github.io/Darkest-Builder-Deploy/",
    urlRepo: "https://github.com/PEPAXD/Darkest-Builder-Deploy",
    text: "An interactive website about Darkest Dungeon 2 game. It allows users to research and explore detailed information about different hero builds and unique equipment combinations to maximize their efficiency in the game.",
    challengeText:
      "UX/UI design was a challenge, as well as the integration of the JSON to display the information.",
    techStack: ["React"],
  },
  {
    id: 14,
    tittle: "To-Do List",
    image:
      "https://media.licdn.com/dms/image/D4D22AQG3Sd0ynsI1Pg/feedshare-shrink_2048_1536/0/1702498975550?e=1710374400&v=beta&t=1cEp6iY0LtJ7nzB03RvzqZ3D1B3ubRpgpxND14SkNVs",
    urlDeploy: "https://pepaxd.github.io/To_Do_List/",
    urlRepo: "https://github.com/PEPAXD/To_Do_List/tree/main",
    text: "Simple to-do list web application. Uses Firebase/Firestore for database management.",
    challengeText:
      "The main challenges were to link accounts through Firebase, create and authenticate users and store their information in the database.",
    techStack: ["Firebase"],
  },
  {
    id: 6,
    tittle: "Authentication System",
    image:
      "https://media.licdn.com/dms/image/D4D22AQHz6NKoyNh_4A/feedshare-shrink_2048_1536/0/1699381089101?e=1710374400&v=beta&t=KVnB9-e4oEw3nauC8uMXClBR7gGETVqT2TODppxkS84",
    urlDeploy: "https://pepaxd.github.io/authenticationUser/",
    urlRepo: "https://github.com/PEPAXD/authenticationUser",
    text: "Registration, login and secure authentication within the application, handling multiple authentication methods, including email and password or via the user's Google, Facebook and GitHub accounts",
    challengeText:
      "The challenge was to link accounts and record information in the firebase database.",
    techStack: ["Firebase"],
  },
  {
    id: 7,
    tittle: "Ensolvers TechChallenge",
    image:
      "https://raw.githubusercontent.com/PEPAXD/noteApp_MERN/main/home.png",
    urlRepo: "https://github.com/PEPAXD/noteApp_MERN",
    text: "Web application that allows users to create, view, update and delete notes. In addition, the application supports Google authentication to access the application features.",
    challengeText:
      "This was a full-stack technical evaluation project, to demonstrate my skills, I also used Bootstrap, Passport, EJS to speed up the development.",
    techStack: ["Node", "Express", "MongoDB", "Bootstrap"],
  },
  {
    id: 8,
    tittle: "Password Generator",
    image:
      "https://raw.githubusercontent.com/PEPAXD/Password-Generator/main/PasswordGenerator.jpg",
    urlRepo: "https://github.com/PEPAXD/Password-Generator",
    text: "Password generator with graphical interface using Tkinter. It allows to customize passwords with different types of characters.",
    challengeText:
      "The main challenge was to design the interface and do the key mapping.",
    techStack: ["Python"],
  },
  {
    id: 9,
    tittle: "QR PythonCode",
    image:
      "https://raw.githubusercontent.com/PEPAXD/Qr-CodeGenerator/main/QrGenerator.jpg",
    urlRepo: "https://github.com/PEPAXD/Qr-CodeGenerator/tree/main",
    text: "Generation of QR codes from a link provided by the user. The application uses the tkinter library to create the GUI and the qrcode library to generate the QR codes.",
    challengeText:
      "Note: The application saves the generated QR code as a PNG image in the same directory where the Python script is located.",
    techStack: ["Python"],
  },
  {
    id: 10,
    tittle: "YT-CodeDownload",
    image:
      "https://raw.githubusercontent.com/PEPAXD/yt_downloader/main/YTDownload.jpg",
    urlRepo: "https://github.com/PEPAXD/yt_downloader/tree/main",
    text: "Simple Python application to download YouTube videos by entering a link and selecting the video quality. It uses the tkinter, customtkinter, PIL pytube libraries.",
    challengeText:
      "The application will start downloading the video and display a success message upon completion.",
    techStack: ["Python"],
  },
  {
    id: 11,
    tittle: "JavaSnake Game",
    image:
      "https://raw.githubusercontent.com/PEPAXD/SNAKE-GAME-BY-MAURO-PEPA/main/snakeGame.jpg",
    urlRepo:
      "https://github.com/PEPAXD/SNAKE-GAME-BY-MAURO-PEPA/blob/main/snakeGame.jpg",
    text: "Classic Snake Game in Java using the Swing library for the graphical interface.",
    challengeText:
      "The program logic controls Keyboard Events, Collision Detection and Random Generation of event points.",
    techStack: ["Java"],
  },
  {
    id: 12,
    tittle: "Temp° Conversor",
    image:
      "https://raw.githubusercontent.com/PEPAXD/TempConversor_JAVA-GUI/main/TempConversor.jpg",
    urlRepo: "https://github.com/PEPAXD/TempConversor_JAVA-GUI/tree/main",
    text: "Application that converts temperatures between Celsius, Fahrenheit and Kelvin.",
    challengeText:
      "Using Netbeans IDE, I created a graphical interface with the Swing library.",
    techStack: ["Java"],
  },
  {
    id: 13,
    tittle: "ATM Machine",
    image:
      "https://raw.githubusercontent.com/PEPAXD/CAJERO_AUTOMATICO/main/ATM.jpg",
    urlRepo: "https://github.com/PEPAXD/CAJERO_AUTOMATICO/tree/main/ATM",
    text: "Application that simulates the operation of an ATM, allowing users to deposit and withdraw money.",
    challengeText:
      "Using Netbeans IDE, I created a graphical interface with the Swing library. I also implemented a database to store user and transaction information.",
    techStack: ["Java"],
  },
];

export default dataProjects;

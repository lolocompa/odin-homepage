# Odin Homepage

This project is a personal homepage that showcases the skills, projects, and contact information of Lorenzo Comparetto. It's built with HTML, CSS, and JavaScript, featuring a smooth scrolling effect and a typewriter effect for text animation.

## Features

- **Smooth Scrolling Navigation**: Clicking on the navigation buttons smoothly scrolls to the respective section on the page. This is implemented using the `scrollTo` method with a smooth behavior. [See implementation](https://github.com/lolocompa/odin-homepage/tree/main/index.js#L64L75).

- **Dynamic Typewriter Effect**: A typewriter effect that displays text one character at a time, creating an engaging visual for the introduction. This effect is achieved through the `StartWriter` and `typeWriter` functions. [See implementation](https://github.com/lolocompa/odin-homepage/tree/main/typerwritter.js#L44L55).

- **Intersection Observer API**: Utilizes the Intersection Observer API to reveal elements as they enter the viewport, adding a smooth animation to the appearance of different sections. [See implementation](https://github.com/lolocompa/odin-homepage/tree/main/index.js#L1L19).

- **Responsive Design**: The layout adjusts based on the screen size, ensuring a good user experience across devices. This includes adjustments to the scroll offsets for different sections based on screen width. [See implementation](https://github.com/lolocompa/odin-homepage/tree/main/index.js#L24L62).

## Sections

- **Home**: A brief introduction with a typewriter effect.
- **About**: Information about Lorenzo Comparetto, including skills and interests.
- **Skills**: A showcase of technical skills with icons.
- **Projects**: A gallery of projects with descriptions and links to GitHub repositories.
- **Contact**: Contact information and links to social media profiles.

## Setup

- To run this project locally, clone the repository and open `index.html` in your browser.

- git clone https://github.com/lolocompa/odin-homepage.git
- cd odin-homepage
- open index.html # This command may vary depending on your operating system.
## Contributions
- Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements.

## License
This project is open source and available under the MIT License.

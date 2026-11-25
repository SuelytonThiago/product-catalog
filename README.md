Dark Mode Development

To implement Dark Mode, I used the `querySelector` method to select the containers that required style adjustments. I created a custom button to toggle between themes and defined a CSS class called `.dark` for each component that needed visual changes.

In the `script.js` file, I added a click event listener to the button, using the `classList.toggle()` method to switch the `.dark` class on the selected elements. Consequently, clicking the button adds the class to the components—or removes it if it is already present—enabling the user to switch between light and dark modes.

Image Carousel Development

To develop the carousel, I used three images positioned side-by-side with `display: flex`. I set a fixed width of 320px for the container displaying the images and applied `overflow: hidden` to conceal any parts of the images that extend beyond the viewing area.

I also implemented two navigation buttons to control the transition between images, using JavaScript to manipulate the `transform: translateX()` property and shift the content horizontally.

Furthermore, I added logic to manage navigation boundaries: the "back" button is disabled when the first image is reached, and the "forward" button is disabled when the last image is reached. This ensures that users can navigate through the carousel without going beyond the limits of the available images.

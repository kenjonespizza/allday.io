import { addNavHeightToWrapper } from './src/utilities/helpers';

if (typeof window !== `undefined`) {

  // Calculate the height of the NavBar on resize (and on load in the NavBar Component), and then add that height to the to pf the page to account for the NavBar overlap.
  
  let last_known_scroll_position = 0;
  let ticking = false;

  window.addEventListener('resize', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        addNavHeightToWrapper();
        ticking = false;
      });

      ticking = true;
    }
  });
}
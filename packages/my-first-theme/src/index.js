import Root from "./components";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";


export default {
  name: "themes",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: false,
    },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [iframe, link],
    },
  },
};

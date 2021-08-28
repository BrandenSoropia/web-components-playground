# web-components-playground

Learning web components.

## Instructions

Open up `index.html` in Chrome/Firefox! Make sure you allow JS to run!

Avoid IE/Safari apparently as there isn't, if any, support for Web Components!

## Stuff I learned/question/thoughts dump

- Timing of importing web component JS is important! If your WC's need data attributes, you either need to import the JS after the html code, or move the data attribute logic to `connectedCallback`. https://stackoverflow.com/a/42720702

- shadow DOM existed for a while. `<video>` is an example of an element that uses it (to show buttons, control state etc). I thought React was the one who created it!

- Apparently it's tougher to use a "closed" shadow DOM (`attachShadow({ mode: "false" });`), so just use an open one instead. It seems better to use it anyways, that way we can select any open element's shadow and access it! https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af

- Not supported well, if at all, in Safari/IE

- Styling can be either external (using CSS stylesheet) or internal to component. Browsers apparently optimize fetching, loading and applying them. Though, using external may result in styles flashed in a component as the WC may be painted first before the styles are fetched. IMO, seems safer to just style internally? That way it keeps styles localized too! Ideally a base stylesheet is loaded initially that has the essential/core styles to help reduce an ugly/flashing styles???

- WC's have lifecycle methods! https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks

- Apparently not very good with SEO since scrapers can't parse through WC's since it's not actually in the DOM??? Need to read more about that! Similarly, how is accessibility impacted?

- I haven't really worked with base JS, HTML, CSS stuff... I wonder if things like Rollup, Grunt help bundle it all up nicely and with less dev involvement? Though, those are just names of things I've briefly read about/demo'd like once way back.

- I wonder how state management would be done? And how about sharing data between components? What about nested WC? Would a composition approach work?

- Seems like a cool place to kick off more complex/dynamic UI web dev. ALl you need to know is the basics: HTML, CSS and JS. Only seems to introduce lifecycles, so not a very complicated API. Definitely not as intimidating as frameworks like React, Vue, etc.

  - Compared to Svelte, WC's seems easier to pick up than that too! However, Svelte has a lot of helpful tools out of the box like state management, routing (via Sveltekit, I think), and animation simplification.
  - Also generally seems like a good intro to thinking and build dynamic UI's (if that's what it's called). What I mean is that there seems to be a lot of similar concepts in WC with React, Svelte (and the other UI frameworks), such that learning WC can help transition to these frameworks as well!

- Very simple to setup and start without any fancy requirements needed whatsoever. Just an HTML file and JS.
  - React needs npm/yarn and Node just to get started. Then you gotta deal with adding deps and stuff for any extras you need.

import { defineNuxtPlugin } from "#app"

import MarkdownIt from "markdown-it"

export default defineNuxtPlugin(() => {
  const markdown = new MarkdownIt({
    html: true,
    breaks: true,
    xhtmlOut: true,
  })
  return {
    provide: {
      markdown,
    },
  }
})

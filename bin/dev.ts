import { compile } from './build'

const server = Bun.serve({
  async fetch() {
    const code = await compile('src/inspector.ts')
    const link = `<a href="javascript: ${encodeURIComponent(
      code
    )}">Inspector</a>`

    return new Response(link, {
      headers: { 'content-type': 'text/html' }
    })
  }
})

console.log(server.url.origin)

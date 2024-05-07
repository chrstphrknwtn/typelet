import { compile } from './build'

const kbSize = (str: string): string => {
  return (Buffer.byteLength(str, 'utf-8') / 1024).toFixed(2)
}

const server = Bun.serve({
  async fetch() {
    const code = await compile('src/inspector.ts')
    const encoded = `javascript: ${encodeURIComponent(code)}`

    console.log(
      `${kbSize(code)} KB - Minified\n${kbSize(encoded)} KB - Encoded`
    )

    const link = `<a href="${encoded}">Inspector</a>`

    return new Response(link, {
      headers: { 'content-type': 'text/html' }
    })
  }
})

console.log(server.url.origin)

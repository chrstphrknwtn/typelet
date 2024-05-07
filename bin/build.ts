import { file } from 'bun'
import { build, Plugin, OnLoadArgs } from 'esbuild'
import { minify } from 'csso'

const text: Plugin = {
  name: 'text',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args: OnLoadArgs) => {
      const contents = await file(args.path).text()
      const minifiedCss = minify(contents).css
      return { contents: minifiedCss, loader: 'text' }
    })
    build.onLoad({ filter: /\.html$/ }, async (args: OnLoadArgs) => {
      const contents = await file(args.path).text()
      return { contents, loader: 'text' }
    })
  }
}

export async function compile(filePath: string) {
  const result = await build({
    entryPoints: [filePath],
    bundle: true,
    write: false,
    format: 'iife',
    minify: true,
    outfile: '',
    plugins: [text]
  })

  return result.outputFiles[0].text
}

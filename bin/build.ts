import { file } from 'bun'
import { build, Plugin, OnLoadArgs } from 'esbuild'

const css: Plugin = {
  name: 'css',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args: OnLoadArgs) => {
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
    plugins: [css]
  })

  return result.outputFiles[0].text
}

import path from 'path'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import css from 'rollup-plugin-css-only'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import sveltePreprocess from 'svelte-preprocess'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH
const projectRootDir = path.resolve(__dirname)

function serve() {
	let server

	function toExit() {
		if (server) {
			server.kill(0)
		}
	}

	return {
		writeBundle() {
			if (server) {
				return
			}

			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			})

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	};
}

function aliases () {
	const paths = [
		'assets', 'components', 'configs', 'containers', 'modules', 'stores', 'utils'
	]
	const aliasesPaths = paths.map(
		(pathItem) => ({
			find: `@${ pathItem }`,
			replacement: path.resolve(projectRootDir, `src/${ pathItem }`)
		})
	)

	return aliasesPaths
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		image(),
		svelte({
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: !production
			}
		}),
		css({ output: 'bundle.css' }),
		alias({ entries: aliases() }),
		resolve({
			browser: true,
			dedupe: [ 'svelte' ]
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),
		!production && serve(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import packageJson from './package.json';

const isDevEnv = process.env.ROLLUP_WATCH;

const productionOutputs = [
	{
		file: packageJson.module,
		format: 'esm',
	},
	{
		file: packageJson.main,
		format: 'cjs',
	},
	{
		file: packageJson.browser,
		format: 'umd',
		name: 'ReactOutlineHander',
		globals: {
			react: 'React',
		}
	},
];

export default {
	input: 'src/index.tsx',
	output: isDevEnv
		? {
			file: './demo/index.umd.js',
			format: 'umd',
			name: 'ReactOutlineHander',
			globals: {
				react: 'React',
			}
		}
		: productionOutputs,
	external: ['react'],
	plugins: [
		babel({
			babelrc: false,
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			include: 'src/**',
			plugins: [
				'@babel/plugin-proposal-class-properties',
			],
			presets: [
				'@babel/preset-env',
				'@babel/preset-react',
				'@babel/preset-typescript',
			],
		}),
		resolve(),
		commonjs(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
	],
};

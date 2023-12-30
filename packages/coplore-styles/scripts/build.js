const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const process = require('process');
const sass = require('sass');

try {
	fs.mkdirSync(path.join(__dirname, '..', 'dist'));
	console.log('💾 dist 폴더 생성합니다...');
} catch {
	console.log('💾 dist 폴더를 재생성합니다...');
}

const isDev = process.argv.includes('--dev');

/** @type {import('sass').Options<'sync'>} */
const sassCompileOption = {
	style: isDev ? 'expanded' : 'compressed',
	sourceMap: isDev
};

function run(filePath, fileName) {
	const stylePath = path.resolve(filePath);
	const result = sass.compile(stylePath, sassCompileOption);

	postcss([autoprefixer()])
		.process(result.css.toString(), { from: undefined })
		.then(value => fs.writeFileSync(path.resolve(fileName), value.toString()));
}

run('src/global.scss', 'dist/global.css');

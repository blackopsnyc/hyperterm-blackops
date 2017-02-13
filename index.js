'use strict';
const foregroundColor = '#ffffff';
const backgroundColor = '#000000';
const black = backgroundColor;
const red = '#FF2945';
const green = '#00F39E';
const yellow = '#FFD90B';
const blue = '#0D59E5';
const magenta = '#15C2EB';
const gray = '#C0C0C0';
const brightBlack = '#686868';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#16161B',
		cursorColor: '#ffffff',
		colors: [
      // regular
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
		 	brightWhite
		],
		css: `
			${config.css || ''}
      .tabs. .tabs_list .tabs_text {
        color: #FF2945;
      }
			.tab_tab:before {
				border-color: #FF2945;
        border-width: 1px;
			}`
	});
};

'use strict';
const foregroundColor = '#ffffff';
const backgroundColor = '#222222';
const black = backgroundColor;
const red = '#E16C5B';
const green = '#8DC34D';
const yellow = '#E8BF6A';
const blue = '#4DA6BD';
const magenta = '#B49CDA';
const cyan = '#3FC172';
const gray = '#404040';
const brightBlack = '#333435';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#404040',
		cursorColor: '#B49CDA',
		colors: [
      // regular
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
      .tabs. .tabs_list .tabs_text {
        color: #13C7FE;
      }
			.tab_active:before {
				border-color: #13C7FE;
			}
		`
	});
};

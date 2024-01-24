export type ColorShade =
	| '50' //
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';

export type OpacityColorShade =
	| '100' //
	| '95'
	| '90'
	| '80'
	| '70'
	| '60'
	| '50'
	| '40'
	| '30'
	| '20'
	| '10';

export type MonochromeColorPalette =
	| 'white' //
	| 'black';

export type GreyColorPalette = `grey.${ColorShade}`;

export type GreyOpacityColorPalette = `grey-opacity.${OpacityColorShade}`;

export type AchromaticColorPalette =
	| MonochromeColorPalette //
	| GreyColorPalette
	| GreyOpacityColorPalette;

export type RainbowColorPalette =
	| `red.${ColorShade}`
	| `pink.${ColorShade}`
	| `purple.${ColorShade}`
	| `deep-purple.${ColorShade}`
	| `indigo.${ColorShade}`
	| `blue.${ColorShade}`
	| `light-blue.${ColorShade}`
	| `cyan.${ColorShade}`
	| `teal.${ColorShade}`
	| `green.${ColorShade}`
	| `light-green.${ColorShade}`
	| `lime.${ColorShade}`
	| `yellow.${ColorShade}`
	| `amber.${ColorShade}`
	| `orange.${ColorShade}`
	| `deep-orange.${ColorShade}`;

export type BrandColorPalette =
	| `primary.${ColorShade}` //
	| `secondary.${ColorShade}`;

export type StatusColorPalette =
	| `info.${ColorShade}`
	| `success.${ColorShade}`
	| `warning.${ColorShade}`
	| `error.${ColorShade}`;

export type SemanticColorPalette =
	| BrandColorPalette //
	| StatusColorPalette;

export type ColorPalette =
	| AchromaticColorPalette
	| RainbowColorPalette //
	| SemanticColorPalette;

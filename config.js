var config = {

    /** Channel Name
     * The name of your channel. Can also be a list of channels.
     * Examples:
     * - channels: [ "DustinKazi" ],
     * - channels: [ "xhuntressx", "DustinKazi", "qq_cat" ],
     */
    channels: [ "DustinKazi" ],

    /** Output Image Configuration **/
    image: {

        /** File Name
         * The name of the output file. must end with ".png".
         * An output path can also be specified. use double backslashes!
         * If no path is specified, image is saved in the install directory.
         * Examples:
         * - fileName: "myimg.png",
         * - fileName: "C:\\vtuber\\overlay.png",
         * - filename: "X:\\OBS\\my resources\\newsub.png",
         */
        fileName: "out.png",

        /** Width/Height 
         * The width and height (in pixels) of the output image.
         */
        width: 512,
        height: 128,

        /** Background Color
         * Image Background Color. Can be any valid CSS color.
         * ~ For a transparent background, use "transparent". ~
         * Examples:
         * - bgColor: "#000000", // black
         * - bgColor: "rgb(255,0,0)", // red
         * - bgColor: "white"
         */
        bgColor: "transparent",

        /** Text Configuration */
        text: {
            /** Text Font
             * The size and font to use for the text. The font must be 
             * installed on your system for this to work. Multi-word fonts,
             * like Times New Roman, should be enclosed in quotes.
             * ~ Follows CSS Syntax for the "font" property, see for examples: ~
             * ~ https://www.w3schools.com/cssref/pr_font_font.asp#CSS-Syntax  ~
             * Examples:
             * - font: '50px "Times New Roman"',
             * - font: 'italic 42px Arial',
             * - font: 'bold 76px Impact'
             */
            font: '50px Arial',

            /** Font Color
             * Color of the text. Can be any valid CSS color.
             * Examples:
             * - textColor: "#000000", // black
             * - textColor: "rgb(255,0,0)", // red
             * - textColor: "white"
             */
            color: "white",

            /** Text Alignment
             * How to horizontally align the text.
             * Valid values are "left", "center", and "right"
             */
            align: "center",

            /** Text Baseline
             * How to vertically align the text.
             * See https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#textbaseline
             * for examples. Valid values are:
             * top, hanging, middle, alphabetic, ideographic, bottom
             */
            baseline: "middle"
        }
    },

    /** Key Press after image update
     * If your app requires a key press to update an image, you can set that here
     * If it does not, set this to 'false'.
     * Examples:
     * - pressKey: false  // don't press a key
     * - pressKey: { m: 'control', k: 'r' }  // ctrl+r
     * - pressKey: { m: ['control', 'alt', 'shift'], k: 'z' } // ctrl+alt+shift+z
     */
    pressKey: false

};

module.exports = config;
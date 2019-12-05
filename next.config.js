// next.config.js
const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS(withSASS({
    enableSvg: true,
    webpack(config, options) {
        return config
    }
})))
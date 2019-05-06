// configuration will be passed npm-check-updates
// check https://github.com/tjunnone/npm-check-updates for usage
module.exports = {
  dep: 'prod',
  filter: /(react[\w\d-]*)|jquery/,
  upgrade: true,
  silent: false
};

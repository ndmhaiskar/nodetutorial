// npm (Node Project Manager)
// You can use your own code in any other project.
// Use code developed by other developer
// Share ur solution with other developers.
// package dependency or module any same.
/* npm -- global command comes with node
npm --version
local dependency -- use it only in this particular project
npm i <packageName>
global dependency -- use it in any project
npm install -g <packageName>
sudo npm install -g <packageName>
package.json -- manifest file (stores important info about project/packages)
manual approach (create package.json in the root, create properties etc.)
npm init (step by step, press enter to skip)
npm init -y (everything default)
*/

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

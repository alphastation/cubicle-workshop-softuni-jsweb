const Cube = require('../models/cube');
const instancedCubcl = new Cube('defaultName', 'this is a default cubicle', 'https://www.thecubicle.com/', 1);

instancedCubcl.save();
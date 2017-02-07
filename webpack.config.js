var path = require('path');

const mod={
        entry: './vue/script/app.js',
        output: {
            path: path.resolve(__dirname, 'vue/dist'),
            filename: 'bundle.js'
        }
}
module.exports=mod;


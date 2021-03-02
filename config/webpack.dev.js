
const path= require('path')

module.exports = {
  mode: 'development',
  // 入口文件配置项
  entry: './src/main.js',
  // 输出文件配置项
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'), 
  },
  module: { 
    // 除 js 外 其他资源加载规则
    // 通过 loader 实现加载任何类型的资源
    rules: [  
      {
        test: /.vue$/,  // 匹配文件
        use: 'vue-loader' // 对应的 loader
      },
      {
        test: /.css$/,  
        // 多个 loader 从后往前执行, 先执行 css-loader
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
}
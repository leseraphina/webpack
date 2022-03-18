// path: NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   // 파일을 읽어들이기 시작하는 진입점 설정
   entry: './js/main.js',

   // 결과물(번들)을 반환하는 설정
   output: {
    //  node js 에서 전역 경로가 필요한다.
     // 주석은 기본값!, `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
     path: path.resolve(__dirname, 'dist'),
     filename: 'main.js',
     clean: true
   },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 순서 중요!
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      }
    ]
   },
   // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
        }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
          ]
        })
      ]

  }


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
/**
 * Created by Jorge on 5/18/17.
 */
import webpack from "webpack";
import path from "path";

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file', query: {
        mimetype: 'application/vnd.ms-fontobject',
        name: './public/css/semantic/themes/default/assets/fonts/icons.eot'
      }
      },
      {
        test: /\.woff2$/,
        loader: 'url?prefix=font/&limit=5000',
        query: {
          mimetype: 'application/font-woff2',
          name: './public/css/semantic/themes/default/assets/fonts/icons.woff2'
        }
      },
      {
        test: /\.woff$/,
        loader: 'url?prefix=font/&limit=5000',
        query: {mimetype: 'application/font-woff', name: './public/css/semantic/themes/default/assets/fonts/icons.woff'}
      },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
        exclude: ['node_modules']
      },
      {
        test: /.png$/,
        loader: 'url-loader',
        query: {mimetype: 'image/png', name: './public/css/semantic/themes/default/assets/images/flags.png'}
      },
      {
        test: /.ttf$/,
        loader: 'url-loader',
        query: {
          mimetype: 'application/octet-stream',
          name: './public/css/semantic/themes/default/assets/fonts/icons.ttf'
        }
      }
    ]
  }
};

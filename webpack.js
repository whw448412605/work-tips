webpack.config.js�ļ�ͨ��������Ŀ�ĸ�Ŀ¼�У�������Ҳ��һ����׼��Commonjs�淶��ģ�顣

var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './js/app.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude:     /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" },
        {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

1.entry

entry�����Ǹ��ַ�������������Ƕ���
��entry�Ǹ��ַ�����ʱ��������������ļ���

entry: './js/main.js'

��entry�Ǹ������ʱ������ͬ���������js�ļ�������һ��������������������webpack�ṩ��һ����̬��Դ��������webpack-dev-server��webpack-dev-server������Ŀ��ÿһ���ļ��ı仯��ʵʱ�Ľ��й����������Զ�ˢ��ҳ�棺

entry: [
     'webpack/hot/only-dev-server',
     './js/app.js'
]

��entry�Ǹ������ʱ�����ǿ��Խ���ͬ���ļ������ɲ�ͬ���ļ�������ʹ�ã��������ҵ�helloҳ����ֻҪ\����hello.js���ɣ�

 entry: {
     hello: './js/hello.js',
     form: './js/form.js'
 }

2.output
output�����Ǹ��������ڶ��幹������ļ�����������а���path��filename��

 output: {
     path: './build',
     filename: 'bundle.js'
 }

��������entry�ж��幹������ļ�ʱ��filename���Զ�Ӧ�ĸ���Ϊ[name].js���ڶ��岻ͬ�ļ�����������֡�

3.module
����ģ��ļ�����أ����ǾͶ�����module.loaders�С�����ͨ��������ʽȥƥ�䲻ͬ��׺���ļ�����Ȼ������Ƕ��岻ͬ�ļ�����������˵��less�ļ����崮�������������������������弶����ϵ����

module: {
    loaders: [
        { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" },
        { test: /\.less/, loader: 'style-loader!css-loader!less-loader'}
    ]
}

���⣬�����������������png��jpg������ͼƬ��Դ��С��10kʱ�Զ�����Ϊbase64ͼƬ�ļ�������

{ test: /\.(png|jpg)$/,loader: 'url-loader?limit=10000'}

��css��less����ͼƬ�����loader֮�����ǲ�����������node������require js�ļ��ˣ����ǻ�����require css��less����ͼƬ�ļ���

 require('./bootstrap.css');
 require('./myapp.less');
 var img = document.createElement('img');
 img.src = require('./glyph.png');

������Ҫ֪�����ǣ�����require�����ļ��������� js bundle�С����������Ҫ�ѱ���require��д�������css�ļ������ó���������ʹ�������ᵽ��[extract-text-webpack-plugin]�����
������ʾ�����������õĵ�һ��loaders���ǿ��Կ���һ������React-hot�ļ��������ҵ���Ŀ������ѧϰreactд��ش���ģ�����������һ��react-hot��������ͨ����������ʵ�ֶ�react��������滻�������Ѿ���entry������������webpack/hot/only-dev-server,��������ֻҪ������webpack����������ʱ�����Chot�������Ϳ���ʹ��react-hot-loader�ˡ���package.json�ļ����������壺

"scripts": {
     "start": "webpack-dev-server --hot --progress --colors",
     "build": "webpack --progress --colors"
 }

4.resolve
webpack�ڹ�������ʱ��ᰴĿ¼�Ľ����ļ��Ĳ��ң�resolve�����е�extensions�������������ó���������в�ȫ��Щ�ļ���׺��

 resolve:{
     extensions:['','.js','.json']
 }

Ȼ��������Ҫ����һ��js�ļ�ʱ��ֻҪrequire(��common��)�Ϳ��Լ���common.js�ļ��ˡ�

6.externals
������������Ŀ��requireһЩ������������API�����ֲ�������Щ����Դ�뱻����������ʱ�ļ��У�����ʵ�ʿ����к��б�Ҫ����ʱ���ǾͿ���ͨ������externals���������������⣺

 externals: {
     "jquery": "jQuery"
 }

�������ǾͿ��Է��ĵ�����Ŀ��ʹ����ЩAPI�ˣ�var jQuery = require(��jquery��);
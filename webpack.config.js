[
  {
    devServer: {
      static: { directory: path.resolve(__dirname, "public") }, //실제로 존재하는 정적 파일들의 경로
      devMiddleware: { publicPath: "/dist/" },
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
  },
];

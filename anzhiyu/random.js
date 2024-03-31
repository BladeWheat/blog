var posts=["2024/03/26/欢迎来到我的博客！！！/","2024/03/31/3DS汉化游戏（正在收录中……）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
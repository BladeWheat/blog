var posts=["2024/03/23/我的第一篇博客/","2024/03/20/hello-world/","2024/03/26/欢迎来到我的博客！！！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
<template>
  <div id="app">
    <div class="big-header">
      <div class="big-header-top">
        <img src="@/assets/logo.png" alt="">
        <span class="big-header-title">DogDog Music</span>
        <i class="iconfont icon-mine">&#xe651;</i>
      </div>
      <div id="nav">
        <router-link class="router-link" active-class="router-link-active" tag="div" to="/" exact><span>推荐</span></router-link>
        <router-link class="router-link" active-class="router-link-active" tag="div" to="/singer"><span>歌手</span></router-link>
        <router-link class="router-link" active-class="router-link-active" tag="div" to="/ranking"><span>排行</span></router-link>
        <router-link class="router-link" active-class="router-link-active" tag="div" to="/search"><span>搜索</span></router-link>
      </div>
    <router-view/>
  </div>
    </div>

</template>

<style lang="less">
body,ol,ul,li,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,dt,form,fieldset,legend,input,textarea,select{margin:0;padding:0;font-size:16px;box-sizing: border-box;} 
li{list-style:none;}
a{text-decoration: none;}
i{font-style: normal;}
b,strong{font-weight: normal;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}
img{border:0;vertical-align: top;}
html,body{width: 100%;height: 100%;font-family: PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;.bgcolor();}
.bgcolor{
  background: #222;
  width:100%;
}
.dafeult-color{
color:#FFBD7B;
}
.icon-mine{
  position: absolute; 
  font-size: 24px;
  height:44px;
  width:48px;
  line-height: 44px;
  right:0;
  top:0;
  .dafeult-color();
}
.big-header{
  height:45px;
  .big-header-top{
    text-align:center;
    &>img{
      width:32px;
      margin-top:6px;
      margin-right:9px;
    }
    .big-header-title{
      text-align: center;
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: 18px;
      .dafeult-color();
    }
  }
  #nav{
    display: flex;
    justify-content: space-around;
    font-size:14px;
    &>.router-link{
      height: 44px;
      line-height: 44px;
      span{
        color:hsla(0,0%,100%,.5);
      }
    }
    &>.router-link-active{
      height: 44px;
      line-height: 44px;
      
      span{
        .dafeult-color();
        padding-bottom:6px;
        border-bottom:2px solid #FFBD7B;
      }    
    }
  }
}

</style>

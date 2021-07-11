<template>
  <div id="app">
    <TheNav />
    <router-view />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav"

export default {
  name: "App",
  components: { TheNav },
}
</script>

<style>
#app {
  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 300;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf")
        format("truetype");
  }

  .nanumbarungothic * {
    font-family: "NanumBarunGothic", sans-serif;
  }
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

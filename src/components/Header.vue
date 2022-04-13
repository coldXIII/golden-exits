<template>
  <div class="header">
    <div class="header__left">
      <h1 class="header__left-title"><span>Golden</span> exits</h1>
      <p class="header__left-subtitle">passion for fashion</p>
    </div>
    <div class="header__right"></div>
  </div>
  <div class="header__nav">
    <Nav />
  </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
  name: 'AppHeader',
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__left {
    position: relative;
    width: 40%;
    height: 70vh;
    background: url(../assets/img/banner.jpg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: -1;
    }
    .header__left-title {
      font-size: 3rem;
      color: #fff;
      text-transform: uppercase;

      @media screen and (max-width: 1150px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 650px) {
        font-size: 1.8rem;
        text-align: center;
      }

      span {
        color: var(--golden);
      }
    }

    .header__left-subtitle {
      position: relative;
      font-size: 0.8rem;
      color: var(--lightgray);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      margin-left: 4rem;

      @media screen and (max-width: 650px) {
        text-align: center;
        margin-left: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: 40%;
        left: -40%;
        width: 4rem;
        height: 0.05rem;
        background: var(--lightgray);

        @media screen and (max-width: 650px) {
          display: none;
        }
      }
    }
  }
  .header__right {
    position: relative;
    width: 60%;
    height: 70vh;
    background: url(../assets/img/header-img.jpg) no-repeat;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 215, 0, 0.2);
    }
  }
}
@media screen and (max-width: 750px) {
  .header__nav {
    margin-bottom: 12rem;
  }
}

@media screen and (max-width: 450px) {
  .header__nav {
    margin-bottom: 0;
    margin-left: -1rem;
    width: 100%;
  }
}
</style>

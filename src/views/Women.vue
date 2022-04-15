<template>
  <div class="container">
    <div class="women__gallery--title">
      <h1>Women collections</h1>
      <p>View all products</p>
    </div>
    <div class="images">
      <div class="image-box" v-for="(image, index) in womenImages" :key="index">
        <div class="image">
          <img :src="require(`../assets/img/women-page/${image}.jpg`)" />
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>

import { useState } from '@/helpers';
import Footer from '@/components/Footer.vue';
export default {
  name: 'WomanView',
  setup() {
     const { womenImages } = useState(['womenImages']);
 
    return { womenImages };
  },
  components: { Footer },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  .women__gallery--title {
    width: 100%;
    h1 {
      font-size: 3rem;
      margin-left: 2rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-weight: 300;
      color: var(--black);

      @media screen and (max-width: 550px) {
        font-size: 2rem;
        text-align: center;
        margin-left: 0;
      }
    }
    p {
      position: relative;
      font-size: 0.8rem;
      color: var(--golden);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      margin-left: 4rem;
      width: 100%;

      @media screen and (max-width: 550px) {
        text-align: center;
        margin-left: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: 40%;
        left: 15%;
        width: 8rem;
        height: 0.1rem;
        background: var(--golden);

        @media screen and (max-width: 1150px) {
          display: none;
        }
      }
    }
    }
    .images {
      max-width: 70rem;
      margin: 1rem auto;
      columns: 4;
      column-gap: 1rem;
      padding: 2rem;
      background: #fff;

      @media (max-width: 850px) {
        max-width: 80rem;
        margin: 2rem auto;
        columns: 2;
        column-gap: 1rem;
        padding: 1rem;
      }

      @media (max-width: 570px) {
        width: 100%;
        margin: 2rem auto;
        columns: 1;
        column-gap: 1rem;
        padding: 1rem;
      }

      .image {
        max-width: 80%;
        margin: 0 0 1rem;
        overflow: hidden;
        padding: 1rem;
        border: 1px solid var(--golden);
        transition: all 0.5s ease-in-out;
      

        &:hover {
          background: var(--golden);
        }
        img {
          width: 100%;
        }
      }
    
  }
}
</style>

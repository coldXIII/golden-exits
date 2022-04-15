<template>
  <div class="container">
    <div class="men__gallery--title">
      <h1>Men collectons</h1>
      <p>View all products</p>
    </div>
    <div class="images">
      <div class="image-box" v-for="(image, index) in menImages" :key="index">
        <div class="image">
          <img :src="require(`../assets/img/men-page/${image}.jpg`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useState } from '@/utils/helpers';

export default {
  name: 'ManView',
  setup() {
    const { menImages } = useState(['menImages']);

    return { menImages };
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  .men__gallery--title {
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
    }
  }

  .images {
    max-width: 70rem;
    margin: 2rem auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-auto-rows: max-content;
    grid-auto-flow: dense;
    gap: 1rem;

    @media (max-width: 850px) {
      margin: 2rem auto;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      padding: 1rem;
    }

    @media (max-width: 450px) {
      margin: 2rem auto;
      grid-template-columns: repeat(1, minmax(100px, 1fr));
      padding: 1rem;
    }

    .image {
      width: auto;
      margin: 0 0 1rem;
      overflow: hidden;
      padding: 1rem;
      border: 1px solid var(--golden);
      transition: all 0.5s ease-in-out;

      @media (max-width: 570px) {
        margin: 1rem auto;
      }

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

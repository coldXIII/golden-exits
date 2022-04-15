<template>
  <div class="fashion">
    <div class="fashion--inner">
      <div class="title--block">
        <TextContent
          v-for="{ type, content } in values[0]"
          :key="content"
          :type="type"
          :content="content"
        />
      </div>
      <div class="image--block" v-for="(image, idx) in manJeans" :key="idx">
        <img :src="require(`../assets/img/jeans/${image}.jpg`)" />
      </div>
    </div>
    <div class="fashion--inner">
      <div class="title--block">
        <TextContent
          v-for="{ type, content } in values[1]"
          :key="content"
          :type="type"
          :content="content"
        />
      </div>
      <div class="image--block" v-for="(image, idx) in womanJeans" :key="idx">
        <img :src="require(`../assets/img/jeans/${image}.jpg`)" />
      </div>
    </div>
    <div class="women-fashion"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useState } from '@/utils/helpers';
import TextContent from '@/utils/textContent';
export default {
  name: 'JeansTab',
    components:{TextContent},
  setup() {
    const { values } = useState(['values']);
    const manJeans = ref(['mjeans1', 'mjeans2', 'mjeans3']);
    const womanJeans = ref(['wjeans1', 'wjeans2', 'wjeans3']);
    return { manJeans, womanJeans, values };
  },
};
</script>

<style scoped lang="scss">
.fashion--inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid #eee;

  @media screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title--block {
    width: 20%;
    text-align: center;
    @media screen and (max-width: 850px) {
      width: 100%;
      padding: 1rem;
    }

    h3 {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 300;
      margin-bottom: 0.5rem;

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }
    p {
      font-size: 0.9rem;
      color: var(--darkgray);
      margin-bottom: 1rem;

      @media screen and (max-width: 500px) {
        font-size: 0.7rem;
      }
    }
    button {
      padding: 0.7rem 2rem;
      background: transparent;
      color: var(--lightgray);
      border: 1px solid var(--lightgray);
      text-transform: uppercase;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        border: 1px solid var(--golden);
        background-color: var(--golden);
        color: #fff;
      }

      @media screen and (max-width: 500px) {
        padding: 0.5rem 1rem;
      }
    }
  }

  .image--block {
    width: 20%;
    @media screen and (max-width: 850px) {
      width: 100%;
      padding: 1rem;
    }

    img {
      width: 100%;
    }
  }
}
</style>

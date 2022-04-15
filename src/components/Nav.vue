<template>
  <nav class="nav">
    <ul class="nav__social">
      <li v-for="(link, index) in links" :key="index">
        <a href=""><i :class="link.icon"></i></a>
      </li>
    </ul>
    <ul class="nav__menu">
      <li
        v-for="(link, index) in links"
        :key="index"
        @click="selectLink(link.url)"
        :class="{ active: currentLink == link.url }"
      >
        <router-link :to="link.url"> {{ link.title }} </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useState } from '@/utils/helpers';
import { ref } from 'vue';
export default {
  name: 'NavMenu',
  setup() {
    const { links } = useState(['links']);
    const isActive = ref(false);
    const currentLink = ref('/');

    return { links, isActive, currentLink };
  },
  methods: {
    selectLink(selectedLink) {
      this.currentLink = selectedLink;
    },
  },
};
</script>

<style scoped lang="scss">
.active {
  background: var(--darkgray);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  margin-bottom: 2rem;

  @media screen and (max-width: 1100px) {
    height: 7vh;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    padding: 1rem;
    height: 10vh;
  }

  @media screen and (max-width: 450px) {
    height: auto;
    width: 100%;
  }

  .nav__social {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #eee;

    @media screen and (max-width: 750px) {
      width: 100%;
      justify-content: space-around;
      padding: 1rem;
      margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 450px) {
      display: none;
    }

    li {
      margin: 0 1rem;

      i {
        font-size: 1.7rem;
        color: var(--lightgray);
        transition: all 0.3s ease;
      }
      &:hover i {
        color: var(--black);
      }
    }
  }
  .nav__menu {
    width: 60%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--black);

    @media screen and (max-width: 750px) {
      width: 100%;
    }
    @media screen and (max-width: 450px) {
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
    }

    li {
      height: 100%;
      width: 100%;
      padding: 0 1rem;
      transition: all 0.3s ease;

      @media screen and (max-width: 750px) {
        height: 100%;
        width: 100%;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
        padding: 1rem;
        transition: all 0.3s ease;
      }

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--golden);
        text-transform: uppercase;
      }
      &:hover {
        background: var(--darkgray);
      }
    }
  }
}
</style>

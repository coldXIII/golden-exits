<template>
  <div class="tabs-box">
    <div class="buttons--block">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(tab)"
        :class="{ active: currentTab == tab }"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <transition
        name="fade"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
      >
        <component :is="currentTab" />
      </transition>
    </div>
  </div>
</template>

<script>
import Shoes from '../tabs/Shoes.vue';
import Accesoires from '../tabs/Accesoires.vue';
import Jeans from '../tabs/Jeans.vue';
import Shirts from '../tabs/Shirts.vue';
import { ref } from 'vue';

export default {
  components: {
    Shoes,
    Accesoires,
    Jeans,
    Shirts,
  },

  name: 'TabBox',
  setup() {
    const tabs = ref(['Shoes', 'Shirts', 'Jeans', 'Accesoires']);
    const currentTab = ref('Shoes');
    return { tabs, currentTab };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
};
</script>
<style scoped lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.buttons--block {
  padding: 0 1rem;

  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  button {
    padding: 1rem 2rem;
    background: var(--black);
    color: var(--golden);
    margin: 2rem 0.1rem;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      padding: 0.5rem 1rem;
      margin: 1rem 0.1rem;
    }
    @media screen and (max-width: 400px) {
      padding: 0.7rem 1rem;
      width: 100%;
      margin: 0.2rem;
    }

    &.active {
      background: var(--darkgray);
    }
  }
}
</style>

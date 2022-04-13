<template>
  <div>
    <div class="buttons--block">
      <button
      v-for="(tab,index) in tabs" :key="index"
        @click="selectTab(tab)"
        :class="{ active: currentTab == tab }"
      >
       {{tab}}
      </button>
     </div>
    <div v-if="currentTab == 'shoes'" class="content">
      <Shoes />
    </div>
    <div v-if="currentTab == 'shirts'" class="content">
      <Shirts />
    </div>
    <div v-if="currentTab == 'jeans'" class="content">
      <Jeans />
    </div>
    <div v-if="currentTab == 'accesoires'" class="content">
      <Accesoires />
    </div>
  </div>
</template>

<script>
import Shoes from '../tabs/Shoes.vue';
import Accesoires from '../tabs/Accesoires.vue';
import Jeans from '../tabs/Jeans.vue';
import Shirts from '../tabs/Shirts.vue';
import { useState } from '@/helpers';
import { ref } from 'vue';
export default {
  components: {
    Shoes,
    Accesoires,
    Jeans,
    Shirts,
  },
  name: 'TabBox',
  setup(){
  const { tabs } = useState(['tabs']);
  const currentTab = ref('shoes')
  return{tabs, currentTab}
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
};
</script>
<style scoped lang="scss">
button {
  padding: 1rem 2rem;
  background: var(--black);
  color: var(--golden);
  margin: 2rem 0.1rem;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
  background: var(--darkgray);
}
}


@media screen and (max-width: 850px) {
  .buttons--block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 500px) {
  .buttons--block button {
    padding: 0.5rem 1rem;
    margin: 1rem 0.1rem;
  }
}
@media screen and (max-width: 400px) {
  .buttons--block {
    flex-direction: column;
  }
  .buttons--block button {
    padding: 0.7rem 1rem;
    width: 100%;
    margin: 0.2rem;
  }
}
</style>

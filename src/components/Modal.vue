<template>
  <transition name="modal-animation" @keyup.enter="close">
    <div class="modal" v-show="modalActive">
      <transition name="modal-animation-inner">
        <div class="modal-inner" v-show="modalActive">
          <i @click.prevent="close" class="far fa-times-circle"></i>
          <slot />
          <button @click.prevent="close">Send</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: ['modalActive'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };
    return { close };
  },
};
</script>

<style scoped lang="scss">
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 1rem;

  @media (max-width: 750px) {
    width: 80vw;
  }

  .modal-inner {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 45rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--text-color);
    border-radius: 1rem;

    i {
      color: var(--golden);
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        color: var(--black);
      }
    }
    button {
      padding: 0.7rem 2.5rem;
      background: var(--golden);
      border-radius: 1rem;
      cursor: pointer;
      &:hover {
        background: var(--black);
        color: var(--golden);
      }
    }
  }
}
</style>

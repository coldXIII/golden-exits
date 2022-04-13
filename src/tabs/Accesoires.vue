<template>
  <div class="fashion">
    <div class="fashion--inner">
      <div class="title--block">
        <h3><span>men</span> fashion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic
          perferendis id unde.
        </p>
        <button>view more</button>
      </div>
      <div class="image--block">
        <img src="../assets/img/maccesoires1.jpg" alt="" />
      </div>
      <div class="image--block">
        <img src="../assets/img/maccesoires2.jpg" alt="" />
      </div>
      <div class="image--block">
        <img src="../assets/img/maccesoires3.jpg" alt="" />
      </div>
    </div>
    <div class="fashion--inner">
      <div class="title--block">
        <h3><span>women</span> fashion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic
          perferendis id unde.
        </p>
        <button>view more</button>
      </div>
      <div class="image--block">
        <img src="../assets/img/waccesoires1.jpg" alt="" />
      </div>
      <div class="image--block">
        <img src="../assets/img/waccesoires2.webp" alt="" />
      </div>
      <div class="image--block">
        <img src="../assets/img/waccesoires3.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccesoiresTab',
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

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }

      span {
        color: var(--golden);
      }
    }
    p {
      font-size: 0.9rem;
      color: var(--darkgray);

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

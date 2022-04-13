<template>
  <div class="container">
    <div class="container--left">
      <div class="title">
        <h1>contact</h1>
        <p>information</p>
      </div>
      <div class="form">
        <form action="">
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <input type="text" placeholder="Subject..." />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Message..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="container--right">
      <div id="map"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import leaflet from 'leaflet';
import { onMounted } from '@vue/runtime-core';
import Footer from '../components/Footer.vue';
export default {
  name:'ContactView',
  setup() {
    let mymap;
    onMounted(() => {
      mymap = leaflet.map('map').setView([40.712, -74.0], 13);
      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 10,
          id: 'mapbox/streets-v11',
          zoomOffset: -1,
          tileSize: 512,
          accessToken:
            'pk.eyJ1IjoiaWhvcmNvbGQiLCJhIjoiY2t4YnNpdjZsMmVkbjJybzV5dXVtaTVveCJ9.IJ3r2R1CvVLxvDqWU21mpA',
        })
        .addTo(mymap);
    });
  },
  components: { Footer },
};
</script>

<style scoped lang="scss">
#map {
  height: 80vh;
  width: 90%;
  border: 2px solid var(--golden);
  overflow: hidden;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    height: 30vh;
    width: 90vw;
  }
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }

  .container--left {
    flex: 1 1 25rem;
    padding: 1rem;

    .title {
      margin-bottom: 1rem;
      padding: 0.5rem 2rem;

      h1 {
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: 300;
        color: var(--black);

        @media screen and (max-width: 1100px) {
          font-size: 2.5rem;
          text-align: center;
        }
      }
      p {
        position: relative;
        font-size: 0.8rem;
        color: var(--golden);
        text-transform: uppercase;
        letter-spacing: 0.1rem;

        @media screen and (max-width: 1100px) {
          font-size: 1.2rem;
          text-align: center;
        }

        }
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
      margin-bottom: 2rem;

      input,
      textarea {
        padding: 0.5rem;
        margin: 0.5rem;
        width: 70%;
        background: var(--black);
        border: none;
        outline: none;
        @media screen and (max-width: 550px) {
          width: 80vw;
        }
      }
      input::placeholder,
      textarea::placeholder {
        color: var(--golden);
      }
      input:focus,
      textarea:focus {
        background: var(--golden);
        color: var(--black);
      }
      button {
        width: 73.5%;
        background: var(--golden);
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
          background: var(--black);
          color: var(--golden);
        }
      }
    }
  }
  .container--right {
    flex: 1 1 35rem;
    padding: 1rem;
  }
}
</style>

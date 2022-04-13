<template>
  <div class="contact-container">
    <div class="contact-container--left">
      <div class="contact-container-left--title">
        <h1 class="contact-left-title">contact</h1>
        <p class="contact-left-subtitle">information</p>
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
    <div class="contact-container--right">
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
}
.contact-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
}
.contact-container--left {
  flex: 1 1 25rem;
  padding: 1rem;
}
.contact-container--right {
  flex: 1 1 35rem;
  padding: 1rem;
}
.contact-container-left--title {
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
}

.contact-left-title {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 300;
  color: var(--black);
}

.contact-left-subtitle {
  position: relative;
  font-size: 0.8rem;
  color: var(--golden);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}
.contact-left-subtitle::before {
  content: '';
  position: absolute;
  top: 40%;
  left: 25%;
  width: 8rem;
  height: 0.05rem;
  background: var(--golden);
}

.form form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input,
textarea {
  padding: 0.5rem;
  margin: 0.5rem;
  width: 70%;
  background: var(--black);
  border: none;
  outline: none;
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
}
button:hover {
  background: var(--black);
  color: var(--golden);
}

@media screen and (max-width: 1100px) {
  *::before {
    display: none;
  }

  .contact-left-title {
    font-size: 2.5rem;
    text-align: center;
  }

  .contact-left-subtitle {
    font-size: 1.2rem;
    text-align: center;
  }
  .contact-container {
    flex-wrap: wrap;
  }
  .form {
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: 550px) {
  .contact-container {
    padding: 2rem;
  }
  .form form input,
  .form form textarea {
    width: 100%;
  }
  #mymap {
    height: 50vh;
  }
}
</style>

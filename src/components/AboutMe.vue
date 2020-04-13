<template>
  <div class="container white row z-depth-3 about-me-container" id="about-me">
    <div class="col s12 m4 photo-container">
      <img class="responsive-img" src="../assets/avatar.jpg" alt="my photo" />
      <a
        href="/resume/"
        class="btn-large waves-effect waves-light download-button white-text"
        target="_blank"
        ><font-awesome-icon :icon="['fas', 'file-download']" size="lg" />
        {{ content.buttonText }}</a
      >
    </div>

    <div class="col s12 m8">
      <h3 class="about-me-name">{{ content.name }}</h3>

      <h5 class="about-me-spec">Junior Python/Javascript developer</h5>

      <p class="about-me-text">
        {{ content.text }}
      </p>

      <div>
        <div class="row">
          <div class="col m2 s4 my-info-col grey-text text-darken-2">
            {{ content.contacts.age }}:
          </div>
          <div class="col m2 s8 my-info-col">26</div>
          <div class="col m2 s4 my-info-col grey-text text-darken-2">
            email:
          </div>
          <div class="col m6 s8 my-info-col">
            bass.valle@gmail.com
          </div>
        </div>

        <div class="row">
          <div class="col m2 s4 my-info-col grey-text text-darken-2">
            {{ content.contacts.city }}:
          </div>
          <div class="col m2 s8 my-info-col">
            {{ content.contacts.cityName }}
          </div>
          <div class="col m2 s4 my-info-col grey-text text-darken-2">
            {{ content.contacts.website }}:
          </div>
          <div class="col m6 s8 my-info-col">www.hireme.com</div>
        </div>

        <div class="row">
          <div class="col m3 s12 my-info-col grey-text text-darken-2">
            {{ content.contacts.socials }}:
          </div>
          <div class="col m2 s3 my-info-col">
            <a href="https://t.me/Int_Algambra"
              ><font-awesome-icon
                :icon="['fab', 'telegram-plane']"
                size="2x"
                color="#009688"
              />
            </a>
          </div>
          <!-- <div class="col m2 s3 my-info-col">
            <a href="#"
              ><font-awesome-icon
                :icon="['fab', 'linkedin-in']"
                size="2x"
                color="#009688"
              />
            </a>
          </div> -->
          <div class="col m2 s3 my-info-col">
            <a href="https://github.com/IntAlgambra"
              ><font-awesome-icon
                :icon="['fab', 'github']"
                size="2x"
                color="#009688"
              />
            </a>
          </div>
          <!-- <div class="col m2 s3 my-info-col">
            <a href="https://github.com/IntAlgambra"
              ><font-awesome-icon
                :icon="['fab', 'whatsapp']"
                size="2x"
                color="#009688"
              />
            </a>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    content: Object
  },
  data: () => ({
    resume: require("../assets/RESUME.pdf")
  })
};
</script>

<style scoped>
h3,
h5,
p {
  margin: 0px;
}

.about-me-name {
  margin-bottom: 20px;
}

.about-me-spec {
  margin-bottom: 20px;
}

.about-me-text {
  margin-bottom: 20px;
}

a {
  color: #000;
}
.about-me-container {
  padding: 20px 0px 20px 0px;
}
.download-button {
  width: 100%;
  margin-top: 20px;
  padding-left: 5px !important;
  padding-right: 5px !important;
}

.row:last-child {
  margin-bottom: 0;
}
</style>

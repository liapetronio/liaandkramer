<template>
  <div class="background fill-height">
    <v-container style="padding-top:100px">

      <v-row class="justify-center">
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="6" >
          <h1 class="text-h1">Lia and Kramer<br>are to wed</h1>
          <v-row align="center" justify="center">
            <v-col>
              <div class="mt-6 mb-6">
                <h2 class="text-overline font-weight-black">When</h2>
                <p>Saturday, August 2, 2025</p>
              </div>
            </v-col>
            <v-col>
              <div class="mb-6">
                <h2 class="text-overline font-weight-black">Where</h2>
                <p>Arsenal Yards, Watertown MA</p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2 class="text-overline font-weight-black">Play by play</h2>


  <v-timeline align="start" side="end">
    <v-timeline-item
      dot-color="pink"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">3pm</strong>
        <div>
          <strong>Arrival</strong>
          <div class="text-caption">
            Guests arrive at <a href="https://maps.app.goo.gl/HM6Tz3xHpb6Uc7KG7" target="_blank">Amphitheater</a> in Arsenal Yards
          </div>
          <div>
            <v-img src="../../amphitheater-map.png" cover style="width: 400px; height: 250px" ratio="1/1"></v-img>
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d401.87613450188223!2d-71.16195428338406!3d42.36006327464011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAmpitheater%20arsenal%20yards!5e0!3m2!1sen!2sus!4v1753904595976!5m2!1sen!2sus" width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">4-7pm</strong>
        <div>
          <strong>Food & Drinks</strong>
          <div class="text-caption mb-2">
            Walk over to <a href="https://maps.app.goo.gl/qEge4fL4AQi8vehd7" target="_blank">Mighty Squirrel Brewery</a> for food, drinks, and games
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.7322131093224!2d-71.15986488903485!3d42.36077975769653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37918ca3f5635%3A0x55851e9d20155ddf!2sMighty%20Squirrel!5e0!3m2!1sen!2sus!4v1753904760852!5m2!1sen!2sus" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="pink"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">12pm</strong>
        <div>
          <strong>Lunch break</strong>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">9-11am</strong>
        <div>
          <strong>Finish Home Screen</strong>
          <div class="text-caption">
            Web App
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>

              <!-- <v-card>
                <v-row>
                  <v-col>
                    <h1>3pm</h1>
                  </v-col>
                  <v-col>
                    <p>Guests arrive at Ampitheater in Arsenal Yards</p>
                  </v-col>
                </v-row>
              </v-card> -->
            </v-col>
          </v-row>


        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

</script>
<style scoped>

.background{
  background-image: linear-gradient(to right top, #9fa0dc, #5ac0f6, #00dbe8, #71edba, #d4f48c);
}
</style>
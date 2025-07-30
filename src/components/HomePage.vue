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
            Guests arrive at Ampitheater in Arsenal Yards
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">3-4pm</strong>
        <div>
          <strong>Design Stand Up</strong>
          <div class="text-caption mb-2">
            Hangouts
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
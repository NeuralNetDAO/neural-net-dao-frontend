<template>
  <v-container class="pa-0">
    <!-- Hero Section -->
    <v-row justify="center" class="py-16">
      <v-col cols="12" md="8" lg="6" class="text-center px-6">
        <div class="mb-16">
          <h1 class="text-h2 font-weight-bold mb-6" style="line-height: 1.2; color: #0F172A;">
            Artificial Intelligence<br>
            <span class="text-primary">For Everyone</span>
          </h1>
          <p class="text-h6 text-medium-emphasis mb-8" style="line-height: 1.6; max-width: 540px; margin: 0 auto;">
            We're building a future where AI development is transparent, ethical, and serves humanity's best interests
          </p>
          <v-btn
            color="primary"
            size="x-large"
            class="px-8"
            to="/vision"
            rounded
          >
            Discover More
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="py-16" style="background: #F8FAFC;">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-16">
            <h2 class="text-h3 font-weight-bold mb-3" style="color: #0F172A;">Our Vision</h2>
            <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 600px;">
              Creating a framework for responsible AI development through collaboration and innovation
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="5" class="pa-6">
            <div class="feature-card">
              <v-icon
                color="primary"
                size="40"
                class="mb-6"
              >mdi-bank</v-icon>
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #0F172A;">
                Transparent Governance
              </h3>
              <p class="text-body-1" style="color: #475569; line-height: 1.6;">
                Our framework ensures that AI development follows clear guidelines and serves the interests of all stakeholders, promoting fairness and accountability.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="5" class="pa-6">
            <div class="feature-card">
              <v-icon
                color="primary"
                size="40"
                class="mb-6"
              >mdi-brain</v-icon>
              <h3 class="text-h5 font-weight-bold mb-4" style="color: #0F172A;">
                Ethical Innovation
              </h3>
              <p class="text-body-1" style="color: #475569; line-height: 1.6;">
                We're advancing AI technology while maintaining a strong focus on ethical development and practical applications that benefit society.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.feature-card {
  height: 100%;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

@media (max-width: 960px) {
  .feature-card {
    margin-bottom: 1rem;
  }
}
</style>

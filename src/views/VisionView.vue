<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1 class="text-h3 font-weight-bold mb-6">Vision & Introduction</h1>
        
        <v-card class="mb-6" elevation="2">
          <v-card-text>
            <div class="text-h6 mb-4">Our Vision</div>
            <p class="text-body-1">
              NeuralNet DAO envisions a future where artificial intelligence development
              is guided by collective wisdom and democratic principles. We aim to create
              a decentralized ecosystem where AI innovation thrives through community
              participation and transparent governance.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="mb-6" elevation="2">
          <v-card-text>
            <div class="text-h6 mb-4">Key Principles</div>
            <v-list>
              <v-list-item v-for="(principle, i) in principles" :key="i">
                <v-list-item-title class="font-weight-bold">
                  {{ principle.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2">
                  {{ principle.description }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card elevation="2">
          <v-card-text>
            <div class="text-h6 mb-4">Community-First Approach</div>
            <p class="text-body-1">
              Our DAO structure ensures that every member has a voice in shaping the
              future of AI development. Through token-based governance, we enable
              direct participation in decision-making processes.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VisionView',
  data: () => ({
    principles: [
      {
        title: 'Decentralization',
        description: 'Ensuring no single entity controls the direction of AI development'
      },
      {
        title: 'Transparency',
        description: 'Open-source development and clear governance processes'
      },
      {
        title: 'Innovation',
        description: 'Fostering groundbreaking AI solutions through collective effort'
      },
      {
        title: 'Sustainability',
        description: 'Creating long-term value for all stakeholders'
      }
    ]
  })
}
</script>

<style scoped>
.v-list-item {
  padding: 16px 0;
}
</style>

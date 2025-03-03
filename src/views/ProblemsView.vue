<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1 class="text-h3 font-weight-bold mb-6">Problems to Solve</h1>

        <v-expansion-panels>
          <v-expansion-panel
            v-for="(problem, i) in problems"
            :key="i"
          >
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="12">
                  <div class="d-flex align-center">
                    <v-icon :color="problem.color" class="mr-4">
                      {{ problem.icon }}
                    </v-icon>
                    <div class="text-h6">{{ problem.title }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card flat>
                <v-card-text>
                  <p class="text-body-1 mb-4">{{ problem.description }}</p>
                  <div class="text-subtitle-1 font-weight-bold mb-2">Our Solution:</div>
                  <p class="text-body-1">{{ problem.solution }}</p>
                  
                  <v-divider class="my-4"></v-divider>
                  
                  <div class="d-flex align-center">
                    <v-icon color="info" class="mr-2">mdi-chart-timeline-variant</v-icon>
                    <div class="text-subtitle-1 font-weight-bold">Impact Metrics:</div>
                  </div>
                  <v-list density="compact">
                    <v-list-item
                      v-for="(metric, j) in problem.metrics"
                      :key="j"
                      :prepend-icon="metric.icon"
                    >
                      {{ metric.text }}
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-card class="mt-8" elevation="2">
          <v-card-title class="text-h5">
            Join Us in Solving These Challenges
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              NeuralNet DAO is committed to addressing these critical challenges in the AI industry.
              Through our decentralized approach and community-driven solutions, we're building
              a more equitable and innovative future for AI development.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block>
              Contribute to Solutions
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProblemsView',
  data: () => ({
    problems: [
      {
        title: 'Centralized AI Development',
        description: 'Current AI development is controlled by a few large corporations, leading to limited innovation and potential misalignment with public interests.',
        solution: 'Create a decentralized framework where the community collectively guides AI development through democratic processes.',
        color: 'error',
        icon: 'mdi-account-group-outline',
        metrics: [
          { icon: 'mdi-check', text: 'Increase in community-driven AI projects' },
          { icon: 'mdi-check', text: 'Growth in DAO participation' },
          { icon: 'mdi-check', text: 'Diversity of AI applications' }
        ]
      },
      {
        title: 'Lack of Transparency',
        description: 'Many AI systems operate as black boxes, with limited visibility into their decision-making processes.',
        solution: 'Implement open-source development practices and establish clear governance protocols for AI systems.',
        color: 'warning',
        icon: 'mdi-eye-outline',
        metrics: [
          { icon: 'mdi-check', text: 'Transparency score of AI projects' },
          { icon: 'mdi-check', text: 'Documentation coverage' },
          { icon: 'mdi-check', text: 'Community audit participation' }
        ]
      },
      {
        title: 'Resource Distribution',
        description: 'Access to AI development resources and benefits is currently inequitable.',
        solution: 'Create a fair token economy that rewards contributions and enables broader participation in AI development.',
        color: 'success',
        icon: 'mdi-scale-balance',
        metrics: [
          { icon: 'mdi-check', text: 'Token distribution metrics' },
          { icon: 'mdi-check', text: 'Participant diversity' },
          { icon: 'mdi-check', text: 'Resource accessibility score' }
        ]
      }
    ]
  })
}
</script>

<style scoped>
.v-expansion-panel-text__wrapper {
  padding: 0 !important;
}
</style>

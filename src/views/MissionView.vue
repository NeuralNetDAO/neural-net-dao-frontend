<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1 class="text-h3 font-weight-bold mb-6">Mission & Objectives</h1>

        <v-timeline density="comfortable" align="start">
          <v-timeline-item
            v-for="(objective, i) in objectives"
            :key="i"
            :dot-color="objective.color"
            size="small"
          >
            <v-card class="mb-4" elevation="2">
              <v-card-title class="text-h6">
                {{ objective.title }}
              </v-card-title>
              <v-card-text>
                <p class="text-body-1">{{ objective.description }}</p>
                <v-chip-group class="mt-4">
                  <v-chip
                    v-for="(tag, j) in objective.tags"
                    :key="j"
                    :color="objective.color"
                    label
                    text-color="white"
                    small
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <v-card class="mt-6" elevation="2">
          <v-card-title class="text-h5">Get Involved</v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">
              Join us in our mission to revolutionize AI governance and development.
              There are multiple ways to contribute:
            </p>
            <v-list>
              <v-list-item v-for="(way, i) in waysToContribute" :key="i">
                <v-list-item-title>{{ way.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ way.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block>Join Our Community</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MissionView',
  data: () => ({
    objectives: [
      {
        title: 'Democratize AI Governance',
        description: 'Create a transparent and inclusive framework for AI development decisions',
        color: 'primary',
        tags: ['Governance', 'Democracy', 'Transparency']
      },
      {
        title: 'Foster Innovation',
        description: 'Support and incentivize breakthrough AI research and development',
        color: 'secondary',
        tags: ['Innovation', 'Research', 'Development']
      },
      {
        title: 'Build Sustainable Economy',
        description: 'Establish a robust token economy that rewards participation and value creation',
        color: 'success',
        tags: ['Tokenomics', 'Sustainability', 'Incentives']
      },
      {
        title: 'Ensure Ethical AI',
        description: 'Promote responsible AI development with strong ethical guidelines',
        color: 'info',
        tags: ['Ethics', 'Responsibility', 'Guidelines']
      }
    ],
    waysToContribute: [
      {
        title: 'Governance Participation',
        description: 'Vote on proposals and shape the future of the DAO'
      },
      {
        title: 'Technical Contribution',
        description: 'Contribute to AI development and research'
      },
      {
        title: 'Community Building',
        description: 'Help grow and nurture our community'
      },
      {
        title: 'Token Staking',
        description: 'Participate in the DAO economy'
      }
    ]
  })
}
</script>

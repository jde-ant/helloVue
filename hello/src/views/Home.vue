<template>
  <v-container>
    <v-row>
      <v-col>
        aqui
        <TextCard></TextCard>
      </v-col>
      <v-col>ANOTHER COLUMN</v-col>
    </v-row>
  </v-container>
</template>

<script>
console.log("importing");
import TextCard from "@/components/TextCard.vue";
export default {
  components: { TextCard }
};
</script>

<style scoped>
</style>
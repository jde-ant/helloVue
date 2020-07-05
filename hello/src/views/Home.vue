<template>
  <v-container>
    <v-row justify="space-around">
      <v-col>
        <TextCard></TextCard>
      </v-col>
      <v-col>
        <v-card class="mt-12 mx-auto" width="400">
          <v-card-title>Hola &#128075; &#128075;</v-card-title>
          <v-card-subtitle>Welcome to my personal web</v-card-subtitle>
          <v-card-text>
            Jorge here, a madrileño (for those visiting from outside Spain that
            means I'm form Madrid). <br /><br />I work as Data Scientist and
            this site is one example of the things I like to do in my free time.
            <br /><br />
            Have a look here if you want to know more about me! In theory you
            should find here info related to my career and studies and free
            time. Enjoy it &#128556;<br /><br />Cheers
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
console.log("importing");
import TextCard from "@/components/TextCard.vue";
export default {
  components: { TextCard },
};
</script>

<style scoped></style>

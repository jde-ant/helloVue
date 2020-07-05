<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="teal darken-3" padless>
      <v-row justify="center" no-gutters>
        <v-col class="teal lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Jorge de Antonio</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Bio",
        url: "/bio",
      },
      {
        label: "Projects",
        url: "/projects",
      },
      {
        label: "Contact",
        url: "/contact",
      },
    ],
  }),
};
</script>

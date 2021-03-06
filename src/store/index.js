import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import barang from "./modules/barang";
import laporan from "./modules/laporan";
import rakyat from "./modules/rakyat";
import petugas from "./modules/petugas";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    barang,
    laporan,
    rakyat,
    petugas
  },
  plugins: [
    createPersistedState({
      key: "token",
      reducer: state => ({
        auth: state.auth
      })
    })
  ]
});

import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'file:///home/nucen/dev/uranium239.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///home/nucen/dev/uranium239.github.io/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { d as useRoute } from './server.mjs';
import { u as useSeoMeta } from './v3-CObkkWCu.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/h3/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/destr/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/klona/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/scule/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/ipx/dist/index.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/vue-router/vue-router.node.mjs';
import '../_/renderer.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unhead/dist/server.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/devalue/index.js';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/nucen/dev/uranium239.github.io/node_modules/unhead/dist/utils.mjs';

const _imports_0 = publicAssetsURL("/chipi-chapa.mp4");
const _imports_1 = publicAssetsURL("/heart.png");
const wedding = { "brideName": "\u0422\u0430\u0442\u044C\u044F\u043D\u0430", "groomName": "\u0418\u043B\u044C\u044F", "date": "05.09.2026", "time": "16:30", "venue": { "name": "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D \xAB\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u0430\xBB", "address": "\u0433. \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440, \u0443\u043B\u0438\u0446\u0430 \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F, 44\u0411", "mapUrl": "https://yandex.ru/maps/-/CPfriHyS" } };
const assetsData = {
  wedding
};
const guests = [{ "id": "babishka", "firstName": "\u0411\u0430\u0431\u0443\u0448\u043A\u0430", "lastName": "\u041B\u044E\u0431\u0438\u043C\u0430\u044F", "gender": "female", "tableNumber": 0 }, { "id": "krivonosova", "firstName": "\u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0438\u044F", "lastName": "\u041A\u0440\u0438\u0432\u043E\u043D\u043E\u0441\u043E\u0432\u0430", "gender": "female", "tableNumber": 0 }, { "id": "reznikovy", "firstName": "\u0415\u043B\u0435\u043D\u0430 \u0438 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440", "lastName": " ", "gender": "helicopter", "tableNumber": 0 }, { "id": "osipovy", "firstName": "\u0421\u0435\u043C\u044C\u044F \u041E\u0441\u0438\u043F\u043E\u0432\u044B\u0445", "gender": "female", "lastName": " ", "tableNumber": 0 }, { "id": "naumova-nesterova", "firstName": "\u0421\u0432\u0435\u0442\u043B\u0430\u043D\u0430, \u0415\u0432\u0433\u0435\u043D\u0438\u044F \u0438 \u0412\u0430\u043B\u0435\u0440\u0438\u044F", "lastName": " ", "gender": "family", "tableNumber": 0 }, { "id": "pasha-katia-bogdan", "firstName": "\u041F\u0430\u0432\u0435\u043B, \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0438 \u0411\u043E\u0433\u0434\u0430\u043D", "lastName": " ", "gender": "family", "tableNumber": 0 }, { "id": "rudakovy", "firstName": "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0438 \u041B\u044E\u0434\u043C\u0438\u043B\u0430", "gender": "family", "lastName": " ", "tableNumber": 0 }, { "id": "andrey-lazutkin", "firstName": "\u0410\u043D\u0434\u0440\u0435\u0439", "lastName": "\u041B\u0430\u0437\u0443\u0442\u043A\u0438\u043D", "gender": "male", "tableNumber": 0 }, { "id": "sergay-zavarzin", "firstName": "\u0421\u0435\u0440\u0433\u0435\u0439", "lastName": "\u0417\u0430\u0432\u0430\u0440\u0437\u0438\u043D", "gender": "male", "tableNumber": 0 }, { "id": "kotiki", "firstName": "\u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0438\u044F \u0438 \u0415\u0433\u043E\u0440", "gender": "helicopter", "lastName": " ", "tableNumber": 1 }, { "id": "hlebobulochni", "firstName": "\u0414\u0435\u043D\u0438\u0441", "lastName": "\u0411\u0443\u0431\u043B\u0438\u043A\u043E\u0432", "gender": "male", "tableNumber": 0 }, { "id": "araslanovy", "firstName": "\u0414\u0435\u043D\u0438\u0441 \u0438 \u0414\u0430\u0440\u044C\u044F", "lastName": " ", "gender": "helicopter", "tableNumber": 0 }, { "id": "slaffka", "firstName": "\u0421\u043B\u0430\u0432\u0430", "lastName": "\u0410\u043D\u0438\u0441\u0438\u043C\u043E\u0432", "gender": "male", "tableNumber": 0 }, { "id": "belorus", "firstName": "\u0414\u0435\u043D\u0438\u0441", "lastName": "\u0411\u0443\u0431\u043B\u0438\u043A\u043E\u0432", "gender": "male", "tableNumber": 0 }, { "id": "araslanovy", "firstName": "\u041C\u0438\u0445\u0430\u0438\u043B", "lastName": "\u0417\u0434\u0440\u043E\u043A", "gender": "male", "tableNumber": 0 }, { "id": "belovy", "firstName": "\u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0438\u044F \u0438 \u042D\u0434\u0443\u0430\u0440\u0434", "gender": "helicopter", "lastName": "", "tableNumber": 0 }, { "id": "shirokovy", "firstName": "\u0421\u0435\u043C\u044C\u044F \u0428\u0438\u0440\u043E\u043A\u043E\u0432\u044B\u0445", "gender": "female", "lastName": " ", "tableNumber": 0 }];
const guestsData = {
  guests
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const getGenderEnding = () => {
      var _a;
      const gender = (_a = guest.value) == null ? void 0 : _a.gender;
      if (gender === "male") return "\u043E\u0439";
      if (gender === "female") return "\u0430\u044F";
      if (gender === "helicopter") return "\u0438\u0435";
      return "";
    };
    const route = useRoute();
    const guestId = route.params.id;
    const wedding2 = assetsData.wedding;
    const venue = computed(() => wedding2.venue);
    const countdown = ref(0);
    const formattedCountdown = computed(() => {
      const days = Math.floor(countdown.value / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(countdown.value % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(countdown.value % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(countdown.value % (1e3 * 60) / 1e3);
      return { days, hours, minutes, seconds };
    });
    const getDateEnding = () => {
      const days = formattedCountdown.value.days;
      let daysLastDigit = Number(days.toString()[days.toString().length - 1]);
      if (isNaN(daysLastDigit)) return "\u0434\u043D\u0435\u0439";
      if (daysLastDigit === 1) return "\u0434\u0435\u043D\u044C";
      if (daysLastDigit > 1 && daysLastDigit < 5) return "\u0434\u043D\u044F";
      return "\u0434\u043D\u0435\u0439";
    };
    const guest = computed(() => {
      return guestsData.guests.find((g) => g.id === guestId) || null;
    });
    const guestName = computed(() => {
      if (!guest.value) return "";
      return `${guest.value.firstName} ${guest.value.lastName}`;
    });
    const pageTitle = computed(() => {
      if (!guest.value) return "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E";
      return `\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F ${guestName.value}`;
    });
    useSeoMeta({
      title: () => pageTitle.value,
      ogTitle: () => pageTitle.value,
      description: () => `\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 ${wedding2.brideName} \u0438 ${wedding2.groomName} \u2014 05.09.2026`,
      ogDescription: () => `\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 ${wedding2.brideName} \u0438 ${wedding2.groomName} \u2014 05.09.2026`,
      ogImage: () => "/preview.png",
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    const error = computed(() => {
      if (!guest.value) {
        return "\u0413\u043E\u0441\u0442\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443.";
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "invitation-page" }, _attrs))} data-v-47693f81><section class="hero" data-v-47693f81><div class="hero-image" data-v-47693f81></div><div class="hero-content backdrop-blur-sm" data-v-47693f81><p class="pre-title" data-v-47693f81>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443</p><div class="hero-names-section" data-v-47693f81><h1 class="names" data-v-47693f81>\u0422\u0430\u043D\u044F</h1><span class="amp names" data-v-47693f81>&amp;</span><h1 class="names" data-v-47693f81>\u0418\u043B\u044C\u044F</h1></div><p class="date" data-v-47693f81>${ssrInterpolate(unref(wedding2).date)}</p><p class="time" data-v-47693f81>${ssrInterpolate(unref(wedding2).time)}</p></div><div class="hero-decor" data-v-47693f81></div></section>`);
      if (unref(error)) {
        _push(`<div class="error" data-v-47693f81><div class="error-card" data-v-47693f81><p data-v-47693f81>${ssrInterpolate(unref(error))}</p><video${ssrRenderAttr("src", _imports_0)} autoplay loop muted data-v-47693f81></video></div></div>`);
      } else {
        _push(`<main class="content" data-v-47693f81>`);
        if (unref(guest)) {
          _push(`<section class="greeting" data-v-47693f81><p class="greeting-text" data-v-47693f81> \u0414\u043E\u0440\u043E\u0433${ssrInterpolate(getGenderEnding())} <span class="guest-name" data-v-47693f81>${ssrInterpolate(unref(guest).firstName)}</span>! </p><p class="role" data-v-47693f81>\u041D\u0430\u043C \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0447\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0432 \u044D\u0442\u043E\u0442 \u0432\u0430\u0436\u043D\u044B\u0439 \u0434\u043B\u044F \u043D\u0430\u0441 \u0434\u0435\u043D\u044C, \u0412\u044B \u0431\u044B\u043B\u0438 \u0441 \u043D\u0430\u043C\u0438! \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0430\u0441 \u043D\u0430 \u043D\u0430\u0448\u0443 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 </p></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="divider" data-v-47693f81><span class="divider-icon" data-v-47693f81><img${ssrRenderAttr("src", _imports_1)} alt="\u0421\u0435\u0440\u0434\u0435\u0447\u043A\u043E" data-v-47693f81></span></div><section class="section venue-section" data-v-47693f81><h2 class="section-title" data-v-47693f81>\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F</h2><div class="venue-card" data-v-47693f81><div class="venue-image" data-v-47693f81></div><div class="venue-info" data-v-47693f81><p class="venue-name" data-v-47693f81>${ssrInterpolate(unref(venue).name)}</p><p class="venue-address" data-v-47693f81>${ssrInterpolate(unref(venue).address)}</p><a${ssrRenderAttr("href", unref(venue).mapUrl)} target="_blank" class="map-link" data-v-47693f81> \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 \u{1F4CD} </a></div></div></section><section class="section timeline-section" data-v-47693f81><h2 class="section-title" data-v-47693f81>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043D\u044F</h2><div class="timeline" data-v-47693f81><div class="timeline-item" data-v-47693f81><span class="timeline-time" data-v-47693f81>16:30</span><span class="timeline-text" data-v-47693f81>\u0441\u0431\u043E\u0440 \u0433\u043E\u0441\u0442\u0435\u0439</span></div><div class="timeline-item" data-v-47693f81><span class="timeline-time" data-v-47693f81>17:00</span><span class="timeline-text" data-v-47693f81>\u043D\u0430\u0447\u0430\u043B\u043E \u0442\u043E\u0440\u0436\u0435\u0441\u0442\u0432\u0430</span></div></div></section><section class="section dress-code-section" data-v-47693f81><h2 class="section-title" data-v-47693f81>\u0414\u0440\u0435\u0441\u0441-\u043A\u043E\u0434</h2><p class="dress-code-main" data-v-47693f81>\u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u044B\u0439</p><p class="dress-code-hint" data-v-47693f81>\u041C\u044B \u0437\u043D\u0430\u0435\u043C - \u0432\u044B \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u043C \u043D\u0430\u0440\u044F\u0434\u0435. \u0421\u0438\u044F\u0439\u0442\u0435!</p></section><section class="section gifts-section" data-v-47693f81><h2 class="section-title" data-v-47693f81>\u041F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F</h2><p class="gifts-text" data-v-47693f81> \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u0431\u0443\u0434\u0435\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u044B \u0437\u0430 \u0432\u043A\u043B\u0430\u0434 \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043D\u0430\u0448\u0435\u0439 \u043C\u043E\u043B\u043E\u0434\u043E\u0439 \u0441\u0435\u043C\u044C\u0438 \u{1F49D} </p></section>`);
        if ((_a = unref(guest)) == null ? void 0 : _a.tableNumber) {
          _push(`<section class="section table-section" data-v-47693f81><h2 class="section-title" data-v-47693f81>\u0412\u0430\u0448 \u0441\u0442\u043E\u043B</h2><div class="table-number" data-v-47693f81>${ssrInterpolate(unref(guest).tableNumber)}</div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="section gifts-section" data-v-47693f81><p class="gifts-text" data-v-47693f81> \u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0438\u043B\u0438 \u0441\u044E\u0440\u043F\u0440\u0438\u0437, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0448\u0435\u0433\u043E \u0432\u0435\u0434\u0443\u0449\u0435\u0433\u043E - \u041E\u043B\u0435\u0433\u0430 <a href="tel:+79308334624" data-v-47693f81>8 (930) 833 46 24</a>. \u041E\u043D \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u043C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0443\u043C\u043A\u0443 \u0438 \u0432\u043D\u0435\u0441\u0442\u0438 \u0435\u0435 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 </p></section><section class="section countdown-section" data-v-47693f81><p class="countdown-header" data-v-47693f81>\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:</p><p class="countdown" data-v-47693f81>${ssrInterpolate(unref(formattedCountdown).days)} ${ssrInterpolate(getDateEnding())}</p><p class="countdown-congratulate" data-v-47693f81>\u0421 \u043D\u0435\u0442\u0435\u0440\u043F\u0435\u043D\u0438\u0435\u043C \u0436\u0434\u0451\u043C \u0432\u0441\u0442\u0440\u0435\u0447\u0438!</p><p class="countdown-post" data-v-47693f81>\u2014\u0421 \u043B\u044E\u0431\u043E\u0432\u044C\u044E, \u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0438 \u0418\u043B\u044C\u044F </p></section></main>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/i/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47693f81"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BVY6czlP.mjs.map

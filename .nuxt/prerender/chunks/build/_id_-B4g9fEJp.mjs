import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { d as useRoute } from './server.mjs';
import { u as useSeoMeta } from './v3-B9444n81.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/h3/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/destr/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/klona/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/scule/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/ipx/dist/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue-router/vue-router.node.mjs';
import '../_/renderer.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/@nuxt/nitro-server/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unhead/dist/server.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/devalue/index.js';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/unhead/dist/utils.mjs';
import 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/@unhead/vue/node_modules/vue/index.mjs';

const _imports_0 = publicAssetsURL("/chipi-chapa.mp4");
const guests = [{ "id": "ivan-petrov", "firstName": "\u0418\u0432\u0430\u043D", "lastName": "\u041F\u0435\u0442\u0440\u043E\u0432", "role": "\u041A\u0440\u0443\u0442\u043E\u0439 \u043C\u0443\u0436\u0438\u043A", "tableNumber": 1 }, { "id": "anna-sidorova", "firstName": "\u0410\u043D\u043D\u0430", "lastName": "\u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0430", "role": "\u041A\u0440\u0443\u0442\u0430\u044F \u0436\u0435\u043D\u0449\u0438\u043D\u0430", "tableNumber": 2 }, { "id": "dmitry-kozlov", "firstName": "\u0414\u043C\u0438\u0442\u0440\u0438\u0439", "lastName": "\u041A\u043E\u0437\u043B\u043E\u0432", "role": "\u041A\u043E\u0437\u043B\u0438\u043D\u0430", "tableNumber": 1 }, { "id": "olga-volkova", "firstName": "\u041E\u043B\u044C\u0433\u0430", "lastName": "\u0412\u043E\u043B\u043A\u043E\u0432\u0430", "role": "\u0412\u043E\u043B\u0447\u0438\u0446\u0430", "tableNumber": 2 }, { "id": "sergey-smirnov", "firstName": "\u0421\u0435\u0440\u0433\u0435\u0439", "lastName": "\u0421\u043C\u0438\u0440\u043D\u043E\u0432", "fullName": "\u0421\u0435\u0440\u0433\u0435\u0439 \u0421\u043C\u0438\u0440\u043D\u043E\u0432", "role": "\u0421\u0435\u0440\u0451\u0433\u0430)", "tableNumber": 3 }];
const guestsData = {
  guests
};
const wedding = { "brideName": "\u0422\u0430\u043D\u044F", "groomName": "\u0418\u043B\u044C\u044F", "date": "2025-06-15", "time": "14:00", "venue": { "name": "\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u043A\u043B\u0443\u0431 \xAB\u0417\u043E\u043B\u043E\u0442\u043E\u0435 \u043F\u043E\u043B\u0435\xBB", "address": "\u0443\u043B. \u041B\u0443\u0433\u043E\u0432\u0430\u044F, 25, \u043F\u043E\u0441. \u0417\u0430\u0440\u0435\u0447\u044C\u0435", "mapUrl": "https://yandex.ru/maps" } };
const assetsData = {
  wedding
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const guestId = route.params.id;
    const wedding2 = assetsData.wedding;
    const venue = computed(() => wedding2.venue);
    const guest = computed(() => {
      return guestsData.guests.find((g) => g.id === guestId) || null;
    });
    const formattedDate = computed(() => {
      const date = new Date(wedding2.date);
      return date.toLocaleDateString("ru-RU", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    });
    const formattedTime = computed(() => {
      const [hours, minutes] = wedding2.time.split(":");
      const hour = parseInt(hours, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
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
      description: () => `\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 ${wedding2.brideName} \u0438 ${wedding2.groomName} \u2014 ${formattedDate.value} \u0433\u043E\u0434\u0430`,
      ogDescription: () => `\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 ${wedding2.brideName} \u0438 ${wedding2.groomName} \u2014 ${formattedDate.value} \u0433\u043E\u0434\u0430`,
      ogImage: () => "/header-bg.jpg",
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
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "invitation-page" }, _attrs))} data-v-e53ccb80><section class="hero" data-v-e53ccb80><div class="hero-image" data-v-e53ccb80></div><div class="hero-content backdrop-blur-sm" data-v-e53ccb80><p class="pre-title" data-v-e53ccb80>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443</p><h1 class="names" data-v-e53ccb80>${ssrInterpolate(unref(wedding2).brideName)} <span class="amp" data-v-e53ccb80>&amp;</span> ${ssrInterpolate(unref(wedding2).groomName)}</h1><p class="date" data-v-e53ccb80>${ssrInterpolate(unref(formattedDate))}</p><p class="time" data-v-e53ccb80>${ssrInterpolate(unref(formattedTime))}</p></div><div class="hero-decor" data-v-e53ccb80></div></section>`);
      if (unref(error)) {
        _push(`<div class="error" data-v-e53ccb80><div class="error-card" data-v-e53ccb80><p data-v-e53ccb80>${ssrInterpolate(unref(error))}</p><video${ssrRenderAttr("src", _imports_0)} autoplay loop muted data-v-e53ccb80></video></div></div>`);
      } else {
        _push(`<main class="content" data-v-e53ccb80>`);
        if (unref(guest)) {
          _push(`<section class="greeting" data-v-e53ccb80><p class="greeting-text" data-v-e53ccb80> \u0414\u043E\u0440\u043E\u0433${ssrInterpolate(unref(guest).firstName.endsWith("\u0430") ? "\u0430\u044F" : "\u043E\u0439")} <span class="guest-name" data-v-e53ccb80>${ssrInterpolate(unref(guest).firstName)}</span>! </p>`);
          if ((_a = unref(guest)) == null ? void 0 : _a.role) {
            _push(`<p class="role" data-v-e53ccb80>${ssrInterpolate((_b = unref(guest)) == null ? void 0 : _b.role)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="divider" data-v-e53ccb80><span class="divider-icon" data-v-e53ccb80>\u{1F495}</span></div><section class="section venue-section" data-v-e53ccb80><h2 class="section-title" data-v-e53ccb80>\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F</h2><div class="venue-card" data-v-e53ccb80><div class="venue-image" data-v-e53ccb80></div><div class="venue-info" data-v-e53ccb80><p class="venue-name" data-v-e53ccb80>${ssrInterpolate(unref(venue).name)}</p><p class="venue-address" data-v-e53ccb80>${ssrInterpolate(unref(venue).address)}</p><a${ssrRenderAttr("href", unref(venue).mapUrl)} target="_blank" class="map-link" data-v-e53ccb80> \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 \u{1F4CD} </a></div></div></section><section class="section timeline-section" data-v-e53ccb80><h2 class="section-title" data-v-e53ccb80>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043D\u044F</h2><div class="timeline" data-v-e53ccb80><div class="timeline-item" data-v-e53ccb80><span class="timeline-time" data-v-e53ccb80>14:00</span><span class="timeline-text" data-v-e53ccb80>\u0421\u0431\u043E\u0440 \u0433\u043E\u0441\u0442\u0435\u0439</span></div><div class="timeline-item" data-v-e53ccb80><span class="timeline-time" data-v-e53ccb80>14:30</span><span class="timeline-text" data-v-e53ccb80>\u0426\u0435\u0440\u0435\u043C\u043E\u043D\u0438\u044F \u0431\u0440\u0430\u043A\u043E\u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F</span></div><div class="timeline-item" data-v-e53ccb80><span class="timeline-time" data-v-e53ccb80>16:00</span><span class="timeline-text" data-v-e53ccb80>\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439 \u0443\u0436\u0438\u043D</span></div><div class="timeline-item" data-v-e53ccb80><span class="timeline-time" data-v-e53ccb80>18:00</span><span class="timeline-text" data-v-e53ccb80>\u0422\u043E\u0441\u0442\u044B \u0438 \u043F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F</span></div><div class="timeline-item" data-v-e53ccb80><span class="timeline-time" data-v-e53ccb80>20:00</span><span class="timeline-text" data-v-e53ccb80>\u0422\u0430\u043D\u0446\u044B</span></div></div></section><section class="section dress-code-section" data-v-e53ccb80><h2 class="section-title" data-v-e53ccb80>\u0414\u0440\u0435\u0441\u0441-\u043A\u043E\u0434</h2><p class="dress-code-main" data-v-e53ccb80>\u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u044B\u0439 / Formal</p><p class="dress-code-hint" data-v-e53ccb80>\u041F\u0440\u043E\u0441\u0438\u043C \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044C \u0431\u0435\u043B\u043E\u0433\u043E \u0438 \u0447\u0451\u0440\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u043E\u0432</p><div class="dress-icons" data-v-e53ccb80><span data-v-e53ccb80>\u{1F457}</span><span data-v-e53ccb80>\u{1F935}</span><span data-v-e53ccb80>\u{1F454}</span></div></section><section class="section gifts-section" data-v-e53ccb80><h2 class="section-title" data-v-e53ccb80>\u041F\u043E\u0434\u0430\u0440\u043A\u0438</h2><p class="gifts-text" data-v-e53ccb80> \u041C\u044B \u0431\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u043B\u044E\u0431\u043E\u043C\u0443 \u043F\u043E\u0434\u0430\u0440\u043A\u0443, \u043D\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0440\u0430\u0434\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u043C \u0432\u043A\u043B\u0430\u0434\u043E\u043C \u0432 \u043D\u0430\u0448\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435, \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u044B \u{1F49D} </p></section>`);
        if ((_c = unref(guest)) == null ? void 0 : _c.tableNumber) {
          _push(`<section class="section table-section" data-v-e53ccb80><h2 class="section-title" data-v-e53ccb80>\u0412\u0430\u0448 \u0441\u0442\u043E\u043B</h2><div class="table-number" data-v-e53ccb80>${ssrInterpolate(unref(guest).tableNumber)}</div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e53ccb80"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-B4g9fEJp.mjs.map

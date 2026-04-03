import { defineComponent, mergeProps, useSSRContext } from 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///home/nucen/dev/personal/uranium239.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-d511a1d2><section class="hero" data-v-d511a1d2><div class="hero-image" data-v-d511a1d2></div><div class="hero-content backdrop-blur-sm" data-v-d511a1d2><p class="pre-title" data-v-d511a1d2>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443</p><h1 class="names" data-v-d511a1d2>\u0422\u0430\u043D\u044F <span class="amp" data-v-d511a1d2>&amp;</span> \u0418\u043B\u044C\u044F</h1><p class="date" data-v-d511a1d2>15 \u0438\u044E\u043D\u044F 2025</p><p class="time" data-v-d511a1d2>14:00</p></div><div class="hero-decor" data-v-d511a1d2></div></section><main class="content" data-v-d511a1d2><div class="divider" data-v-d511a1d2><span class="divider-icon" data-v-d511a1d2>\u{1F495}</span></div><section class="section" data-v-d511a1d2><p class="info-text" data-v-d511a1d2> \u042D\u0442\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438. </p></section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d511a1d2"]]);

export { index as default };
//# sourceMappingURL=index-DZ99BU11.mjs.map

import {
  Fragment,
  Teleport,
  Transition,
  __export,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  isVNode,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  toHandlerKey,
  toRefs,
  unref,
  useSlots,
  vModelCheckbox,
  vModelRadio,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-LLRLJNBQ.js";

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/index3.js
var index3_exports = {};
__export(index3_exports, {
  FAlert: () => i5,
  FAside: () => f,
  FAvatar: () => f2,
  FBackTop: () => f3,
  FBadge: () => i10,
  FBreadcrumb: () => i11,
  FBreadcrumbItem: () => f4,
  FButton: () => i14,
  FButtonGroup: () => f5,
  FCalendar: () => f7,
  FCard: () => i17,
  FCheckbox: () => i18,
  FCheckboxGroup: () => f8,
  FCloseBtn: () => i4,
  FDatePicker: () => e26,
  FDialog: () => f10,
  FDivider: () => f11,
  FDrawer: () => i19,
  FDropdown: () => f30,
  FDropdownItem: () => f32,
  FEmpty: () => f12,
  FExpandCard: () => a6,
  FFooter: () => i21,
  FHeader: () => f13,
  FImage: () => i20,
  FImagePreview: () => i29,
  FInput: () => f27,
  FInputNumber: () => f33,
  FLayout: () => i30,
  FLink: () => f14,
  FList: () => f15,
  FListItem: () => f16,
  FMain: () => f17,
  FMessage: () => n11,
  FNotification: () => m11,
  FOption: () => p8,
  FPageHeader: () => a9,
  FPagination: () => a12,
  FPopup: () => f9,
  FProgress: () => i32,
  FRadio: () => f18,
  FRadioGroup: () => p4,
  FRate: () => i33,
  FRipple: () => i34,
  FSelect: () => f31,
  FSkeleton: () => f20,
  FSpace: () => f21,
  FStickyCard: () => f22,
  FSvgIcon: () => i2,
  FSwap: () => f26,
  FSwitch: () => f23,
  FTable: () => i38,
  FTabs: () => i42,
  FTabsPane: () => f35,
  FTag: () => i35,
  FText: () => i15,
  FTextarea: () => e23,
  FTimePicker: () => e28,
  FToolbar: () => i22,
  FToolbarItem: () => i23,
  FTooltip: () => p5,
  FTree: () => f24,
  FTrigger: () => f29,
  FUpLoad: () => f28,
  FWatermark: () => f25,
  useLoadingBar: () => p3
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/alert/src/index3.js
var l = {
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["primary", "success", "danger", "warning", "default"].includes(e30)
  },
  fontSize: {
    type: [String, Number],
    default: () => "15px"
  },
  titleSize: {
    type: [String, Number],
    default: () => "17px"
  },
  bold: {
    type: Boolean,
    default: () => false
  },
  center: {
    type: Boolean,
    default: () => false
  },
  close: {
    type: Boolean,
    default: () => false
  },
  simple: {
    type: Boolean,
    default: () => false
  },
  title: {
    type: String,
    default: () => null
  },
  round: {
    type: Boolean,
    default: () => false
  },
  background: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  titleColor: {
    type: String,
    default: () => null
  },
  fixed: {
    type: Boolean,
    default: () => false
  },
  overflow: {
    type: String,
    default: () => null,
    validator: (e30) => ["hidden", ""].includes(e30)
  },
  closeIcon: {
    type: Object,
    default: () => null
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/close-btn/src/index3.js
var e = {
  size: {
    type: [String, Number],
    default: () => null
  },
  round: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  color: {
    type: String,
    default: () => null
  },
  icon: {
    type: Object,
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/svg-icon/src/index3.js
var l2 = {
  icon: {
    type: Object,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  size: {
    type: [String, Number],
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/utils/index.js
var r = (t36, e30 = 2) => Number(t36.toFixed(e30));
var n = (t36, e30 = 200) => {
  let o4;
  return () => {
    o4 && clearTimeout(o4), o4 = setTimeout(() => {
      t36();
    }, e30);
  };
};
var c = (t36) => typeof t36 == "number" && Object.prototype.toString.call(t36) === "[object Number]";
var b = (t36) => typeof t36 == "boolean" && Object.prototype.toString.call(t36) === "[object Boolean]";
var p = (t36) => typeof t36 == "string" && Object.prototype.toString.call(t36) === "[object String]";
var u = (t36) => typeof t36 == "object" && Object.prototype.toString.call(t36) === "[object Object]";
var i = (t36) => typeof t36 == "object" && Object.prototype.toString.call(t36) === "[object Array]";
var l3 = (t36) => t36 > 9 ? t36.toString() : `0${t36}`;
var s = (t36, e30 = "px") => t36 ? typeof t36 == "string" ? t36 : t36 + e30 : "";
var j = (t36) => t36 ? typeof t36 == "number" ? t36 : Number.parseFloat(t36) || 0 : 0;

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/error/index.js
var c2 = true;
var e2 = (o4, n17) => {
  c2 && console.warn(`[${o4}]: ${n17}`);
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/run-callback/index.js
var r2 = (n17, o4) => {
  n17 && n17(o4);
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/svg-icon/src/index2.js
var _ = defineComponent({
  name: "FSvgIcon"
});
var B = defineComponent({
  ..._,
  props: l2,
  setup(c27) {
    const o4 = c27, l35 = (e30) => {
      r2(o4.onClick, e30);
    }, i44 = computed(() => {
      const { size: e30, color: n17 } = o4;
      return {
        fontSize: s(e30),
        color: n17
      };
    });
    return (e30, n17) => (openBlock(), createElementBlock("i", {
      class: "f-svg-icon",
      "text-indent": "middle",
      style: normalizeStyle(unref(i44)),
      onClick: l35
    }, [
      e30.icon ? (openBlock(), createBlock(resolveDynamicComponent(e30.icon), { key: 0 })) : renderSlot(e30.$slots, "default", { key: 1 })
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/install/index.js
var n2 = (t36) => (t36.install = (l35) => {
  const { name: e30 } = t36;
  l35.component(e30, t36);
}, t36);
var r3 = (t36, l35) => (t36.install = (e30) => {
  e30.config.globalProperties[l35] = t36;
}, t36);
var s2 = (t36, l35) => (t36.install = (e30) => {
  e30.directive(l35, t36);
}, t36);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/svg-icon/index.js
var i2 = n2(B);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_virtual/index.js
var s3 = (t36, e30) => {
  const o4 = t36.__vccOpts || t36;
  for (const [r25, c27] of e30)
    o4[r25] = c27;
  return o4;
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-cross/index.js
var r4 = {};
var c3 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s4 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
}, null, -1);
var i3 = [
  s4
];
function l4(_26, d8) {
  return openBlock(), createElementBlock("svg", c3, i3);
}
var a = s3(r4, [["render", l4]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/close-btn/src/index2.js
var y = defineComponent({
  name: "FCloseBtn"
});
var V = defineComponent({
  ...y,
  props: e,
  setup(c27) {
    const e30 = c27, i44 = (o4) => {
      e30.disabled || r2(e30.onClick, o4);
    }, a17 = computed(
      () => {
        const { disabled: o4, round: n17 } = e30;
        return [
          "f-close-btn",
          {
            "f-close-btn__round": n17,
            "f-close-btn__disabled": o4
          }
        ];
      }
    ), d8 = computed(() => ({
      "--f-close-btn-color": e30.color
    }));
    return (o4, n17) => (openBlock(), createElementBlock("div", {
      role: "button",
      class: normalizeClass(unref(a17)),
      style: normalizeStyle(unref(d8)),
      onClick: i44
    }, [
      createVNode(unref(i2), {
        size: o4.size,
        icon: o4.icon
      }, {
        default: withCtx(() => [
          renderSlot(o4.$slots, "default", {}, () => [
            createVNode(unref(a))
          ])
        ]),
        _: 3
      }, 8, ["size", "icon"])
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/close-btn/index.js
var i4 = n2(V);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/alert/src/index2.js
var A = {
  key: 0,
  class: "f-alert__title"
};
var D = {
  key: 1,
  class: "f-alert__sub-title"
};
var M = defineComponent({
  name: "FAlert"
});
var O = defineComponent({
  ...M,
  props: l,
  setup(b10) {
    const r25 = b10, _26 = ref(true), y5 = computed(
      () => {
        const { type: e30, bold: s27, simple: a17, center: i44, round: f37, fixed: z10 } = r25;
        return [
          "f-alert",
          {
            [`f-alert__${e30}`]: e30,
            "f-alert__bold": s27,
            "f-alert__simple": a17,
            "f-alert__center": i44,
            "f-alert__round": f37,
            "f-alert__fixed": z10
          }
        ];
      }
    ), h15 = computed(
      () => {
        const { overflow: e30 } = r25;
        return [
          "f-alert__content",
          {
            [`f-alert__content-${e30}`]: e30
          }
        ];
      }
    ), v3 = computed(() => {
      const { fontSize: e30, color: s27, background: a17, titleSize: i44, titleColor: f37 } = r25;
      return {
        "--f-alert-color": s27,
        "--f-alert-title-color": f37,
        "--f-alert-background": a17,
        "--f-alert-font-size": s(e30),
        "--f-alert-title-size": s(i44)
      };
    }), $10 = (e30) => {
      _26.value = false, r2(r25.onClose, e30);
    };
    return (e30, s27) => (openBlock(), createBlock(Transition, { name: "f-alert" }, {
      default: withCtx(() => [
        _26.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          role: "alert",
          class: normalizeClass(unref(y5)),
          style: normalizeStyle(unref(v3))
        }, [
          e30.$slots.beforeIcon || e30.beforeIcon ? (openBlock(), createBlock(unref(i2), {
            key: 0,
            icon: e30.beforeIcon
          }, {
            default: withCtx(() => [
              renderSlot(e30.$slots, "beforeIcon")
            ]),
            _: 3
          }, 8, ["icon"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(h15))
          }, [
            e30.title ? (openBlock(), createElementBlock("div", A, [
              renderSlot(e30.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(e30.title), 1)
              ])
            ])) : createCommentVNode("", true),
            e30.$slots.default ? (openBlock(), createElementBlock("div", D, [
              renderSlot(e30.$slots, "default")
            ])) : createCommentVNode("", true)
          ], 2),
          e30.close ? (openBlock(), createBlock(unref(i4), {
            key: 1,
            "no-hover": "",
            color: "#fff",
            icon: e30.closeIcon,
            onClick: withModifiers($10, ["stop"])
          }, {
            default: withCtx(() => [
              renderSlot(e30.$slots, "closeIcon")
            ]),
            _: 3
          }, 8, ["icon", "onClick"])) : createCommentVNode("", true)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/alert/index.js
var i5 = n2(O);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/aside/src/index3.js
var t = {
  width: {
    type: [String, Number],
    default: () => 200
  },
  padding: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/aside/src/index2.js
var u2 = defineComponent({
  name: "FAside"
});
var k = defineComponent({
  ...u2,
  props: t,
  setup(r25) {
    const n17 = r25, i44 = computed(() => {
      const { width: e30, padding: t36 } = n17;
      return {
        "--f-aside-width": s(e30),
        "--f-aside-padding": s(t36)
      };
    });
    return (e30, t36) => (openBlock(), createElementBlock("aside", {
      class: "f-aside",
      style: normalizeStyle(unref(i44))
    }, [
      renderSlot(e30.$slots, "default")
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/aside/index.js
var f = n2(k);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/avatar/src/index3.js
var e3 = {
  src: {
    type: String,
    default: () => null
  },
  errSrc: {
    type: String,
    default: () => null
  },
  icon: {
    type: Object,
    default: () => null
  },
  alt: {
    type: String,
    default: () => null
  },
  round: {
    type: Boolean,
    default: () => false
  },
  lazy: {
    type: Boolean,
    default: () => false
  },
  fit: {
    type: String,
    default: () => null,
    validator: (t36) => ["fill", "contain", "cover", "none", "scale-down", ""].includes(t36)
  },
  size: {
    type: [String, Number],
    default: () => "middle",
    validator: (t36) => typeof t36 == "string" ? ["large", "middle", "small", "mini"].includes(t36) : typeof t36 == "number" ? t36 >= 1 : false
  },
  background: {
    type: String,
    default: () => null
  },
  fontSize: {
    type: [String, Number],
    default: () => "15px"
  },
  fontColor: {
    type: String,
    default: () => "#333"
  },
  text: {
    type: String,
    default: () => null
  },
  rootMargin: {
    type: [String, Number],
    default: () => "100px"
  },
  onLoad: {
    type: Function,
    default: () => null
  },
  onError: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/message/src/index3.js
var e4 = {
  id: {
    type: String,
    default: () => null
  },
  message: {
    type: [String, Object],
    default: () => null,
    required: true
  },
  type: {
    type: String,
    default: () => "default",
    validator: (t36) => ["default", "primary", "success", "danger", "warning"].includes(t36)
  },
  close: {
    type: Boolean,
    default: () => false
  },
  duration: {
    type: Number,
    default: () => 3e3
  },
  round: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: Object,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  offset: {
    type: Number,
    default: () => 20
  },
  placement: {
    type: String,
    default: () => "top",
    validator: (t36) => [
      "top",
      "top-left",
      "top-right",
      "bottom",
      "bottom-left",
      "bottom-right"
    ].includes(t36)
  },
  zIndex: {
    type: Number,
    default: () => null
  },
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading-bar/src/index3.js
var t2 = {
  type: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading-bar/src/index2.js
var m = defineComponent({
  name: "FLoadingBar"
});
var d = defineComponent({
  ...m,
  props: t2,
  setup(n17) {
    const t36 = n17, r25 = computed(
      () => {
        const { type: o4 } = t36;
        return ["f-loading-bar", { [`f-loading-bar__${o4}`]: o4 }];
      }
    );
    return (o4, _26) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(r25))
    }, null, 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/message/src/index2.js
var U = {
  key: 2,
  class: "f-message__text"
};
var W = defineComponent({
  name: "FMessage"
});
var ae = defineComponent({
  ...W,
  props: e4,
  emits: {
    destroy: () => true
  },
  setup(F8, { expose: L8, emit: N9 }) {
    const s27 = F8, y5 = ref(), _26 = ref(0), i44 = ref(false), k8 = computed(
      () => s27.placement.includes("top")
    ), V8 = computed(
      () => b2.getSiblingOffset(s27.placement, s27.id, !k8.value)
    ), c27 = computed(
      () => s27.offset + V8.value
    ), w8 = computed(
      () => _26.value + c27.value
    );
    onMounted(() => {
      nextTick(() => {
        _26.value = y5.value.getBoundingClientRect().height;
      });
    });
    const D6 = computed(
      () => {
        const { type: e30, round: o4, placement: l35 } = s27;
        return [
          "f-message",
          {
            [`f-message__${e30}`]: e30,
            [`f-message__${l35}`]: l35,
            "f-message__round": o4
          }
        ];
      }
    ), E6 = computed(() => {
      const { color: e30, background: o4, zIndex: l35 } = s27, d8 = {
        color: e30,
        background: o4,
        zIndex: l35
      };
      return s27.placement.includes("bottom") ? d8.bottom = c27.value + "px" : d8.top = c27.value + "px", d8;
    }), u11 = ref(), B14 = () => {
      !u11.value || clearTimeout(u11.value);
    }, f37 = () => {
      B14(), i44.value = false;
    }, I7 = () => {
      b2.removeInstance(s27.placement, s27.id);
    }, b10 = () => {
      !s27.duration || (u11.value = setTimeout(() => {
        f37();
      }, s27.duration));
    };
    return onMounted(() => {
      b10(), i44.value = true;
    }), L8({
      visible: i44,
      bottom: w8,
      close: f37
    }), (e30, o4) => (openBlock(), createBlock(Transition, {
      mode: "out-in",
      name: "f-message-fade" + (unref(k8) ? "-top" : "-bottom"),
      onBeforeLeave: I7,
      onAfterLeave: o4[0] || (o4[0] = (l35) => N9("destroy"))
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "messageRef",
          ref: y5,
          class: normalizeClass(unref(D6)),
          style: normalizeStyle(unref(E6)),
          onMouseleave: b10,
          onMouseenter: B14
        }, [
          isVNode(e30.icon) ? (openBlock(), createBlock(unref(i2), {
            key: 0,
            size: 24,
            class: "f-message__icon"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(e30.icon)))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          isVNode(e30.message) ? (openBlock(), createBlock(resolveDynamicComponent(e30.message), { key: 1 })) : (openBlock(), createElementBlock("div", U, toDisplayString(e30.message), 1)),
          s27.close ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "f-message__close",
            onClick: f37
          }, [
            unref(p)(e30.closeBtn) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(e30.closeBtn), 1)
            ], 64)) : (openBlock(), createBlock(unref(i4), {
              key: 1,
              size: 16
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(e30.closeBtn)))
              ]),
              _: 1
            }))
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, i44.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/notification/src/index3.js
var e5 = {
  id: {
    type: String,
    default: () => null
  },
  title: {
    type: [String, Object],
    default: () => null
  },
  message: {
    type: [String, Object],
    default: () => null,
    required: true
  },
  type: {
    type: String,
    default: () => "default",
    validator: (t36) => ["default", "primary", "success", "danger", "warning"].includes(t36)
  },
  close: {
    type: Boolean,
    default: () => false
  },
  duration: {
    type: Number,
    default: () => 3e3
  },
  round: {
    type: Boolean,
    default: () => false
  },
  showIcon: {
    type: Boolean,
    default: () => true
  },
  icon: {
    type: Object,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  offset: {
    type: Number,
    default: () => 20
  },
  placement: {
    type: String,
    default: () => "top-right",
    validator: (t36) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(t36)
  },
  zIndex: {
    type: Number,
    default: () => 1e3
  },
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-circle-cross/index.js
var c4 = {};
var n3 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s5 = createBaseVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5"
}, [
  createBaseVNode("path", { d: "m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5" }),
  createBaseVNode("circle", {
    cx: "8",
    cy: "8",
    r: "6.25"
  })
], -1);
var i6 = [
  s5
];
function l5(_26, d8) {
  return openBlock(), createElementBlock("svg", n3, i6);
}
var a2 = s3(c4, [["render", l5]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-lightbulb/index.js
var r5 = {};
var c5 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s6 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6.75 14.25h2.5M8 1.75c-2.75 0-4.25 2-4.25 4s2 2.5 2 4.5v1h4.5v-1c0-2 2-2.5 2-4.5s-1.5-4-4.25-4z"
}, null, -1);
var i7 = [
  s6
];
function _2(l35, d8) {
  return openBlock(), createElementBlock("svg", c5, i7);
}
var u3 = s3(r5, [["render", _2]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-smile-line/index.js
var n4 = {};
var r6 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var l6 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653l-.655 2.947l2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"
}, null, -1);
var s7 = [
  l6
];
function _3(i44, a17) {
  return openBlock(), createElementBlock("svg", r6, s7);
}
var m2 = s3(n4, [["render", _3]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-thumb-up/index.js
var r7 = {};
var c6 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s8 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M5.25 5.75c1.5 0 3-4 4.5-4v4h4.5s-.5 7.5-3.5 7.5h-5.5zm0 0h-3.5v7.5h3.5"
}, null, -1);
var i8 = [
  s8
];
function h2(_26, d8) {
  return openBlock(), createElementBlock("svg", c6, i8);
}
var u4 = s3(r7, [["render", h2]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-warning/index.js
var r8 = {};
var c7 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
};
var l7 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zm-1-11h2v9h-2z"
}, null, -1);
var _4 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M29 30H3a1 1 0 0 1-.887-1.461l13-25a1 1 0 0 1 1.774 0l13 25A1 1 0 0 1 29 30ZM4.65 28h22.7l.001-.003L16.002 6.17h-.004L4.648 27.997Z"
}, null, -1);
var s9 = [
  l7,
  _4
];
function h3(i44, a17) {
  return openBlock(), createElementBlock("svg", c7, s9);
}
var m3 = s3(r8, [["render", h3]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/notification/src/index2.js
var ie = {
  key: 0,
  class: "f-notification__icon"
};
var se = { class: "f-notification__info" };
var ce = { class: "f-notification__title" };
var ae2 = {
  key: 1,
  class: "f-notification__title-text"
};
var re = {
  key: 1,
  class: "f-notification__text"
};
var le = defineComponent({
  name: "FMessage"
});
var Ie = defineComponent({
  ...le,
  props: e5,
  emits: {
    destroy: () => true
  },
  setup(S13, { expose: L8, emit: w8 }) {
    const e30 = S13, z10 = {
      default: m2,
      primary: u3,
      success: u4,
      danger: a2,
      warning: m3
    }, l35 = computed(
      () => e30.icon ? e30.icon : e30.type ? z10[e30.type] : null
    ), C11 = ref(), b10 = ref(0), f37 = ref(false), N9 = computed(
      () => e30.placement.includes("top")
    ), D6 = computed(
      () => e30.placement.includes("right")
    ), R8 = computed(
      () => b2.getSiblingOffset(e30.placement, e30.id, !N9.value)
    ), d8 = computed(
      () => e30.offset + R8.value
    ), E6 = computed(
      () => b10.value + d8.value
    );
    onMounted(() => {
      nextTick(() => {
        b10.value = C11.value.getBoundingClientRect().height;
      });
    });
    const $10 = computed(
      () => {
        const { type: t36, round: s27, close: m14, placement: c27 } = e30;
        return [
          "f-notification",
          {
            [`f-notification__${t36}`]: t36,
            [`f-notification__${c27}`]: c27,
            "f-notification__round": s27,
            "f-notification__hasClose": m14
          }
        ];
      }
    ), O9 = computed(() => {
      const { color: t36, background: s27, zIndex: m14 } = e30, c27 = {
        color: t36,
        background: s27,
        zIndex: m14
      };
      return e30.placement.includes("bottom") ? c27.bottom = d8.value + "px" : c27.top = d8.value + "px", c27;
    }), p9 = ref(), I7 = () => {
      !p9.value || clearTimeout(p9.value);
    }, _26 = () => {
      I7(), f37.value = false;
    }, x3 = () => {
      b2.removeInstance(e30.placement, e30.id);
    }, V8 = () => {
      !e30.duration || (p9.value = setTimeout(() => {
        _26();
      }, e30.duration));
    };
    return onMounted(() => {
      V8(), f37.value = true;
    }), L8({
      visible: f37,
      bottom: E6,
      close: _26
    }), (t36, s27) => (openBlock(), createBlock(Transition, {
      mode: "out-in",
      name: "f-notification-fade" + (unref(D6) ? "-right" : "-left"),
      onBeforeLeave: x3,
      onAfterLeave: s27[0] || (s27[0] = (m14) => w8("destroy"))
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "notificationRef",
          ref: C11,
          class: normalizeClass(unref($10)),
          style: normalizeStyle(unref(O9)),
          onMouseleave: V8,
          onMouseenter: I7
        }, [
          t36.showIcon && unref(l35) ? (openBlock(), createElementBlock("div", ie, [
            createVNode(unref(i2), {
              icon: unref(l35),
              size: 28
            }, {
              default: withCtx(() => [
                isVNode(unref(l35)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(l35)), { key: 0 })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["icon"])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", se, [
            createBaseVNode("div", ce, [
              isVNode(t36.title) ? (openBlock(), createBlock(resolveDynamicComponent(t36.title), { key: 0 })) : (openBlock(), createElementBlock("h3", ae2, toDisplayString(t36.title), 1))
            ]),
            isVNode(t36.message) ? (openBlock(), createBlock(resolveDynamicComponent(t36.message), { key: 0 })) : (openBlock(), createElementBlock("div", re, toDisplayString(t36.message), 1))
          ]),
          e30.close ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "f-notification__close",
            onClick: _26
          }, [
            unref(p)(t36.closeBtn) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(t36.closeBtn), 1)
            ], 64)) : (openBlock(), createBlock(unref(i4), {
              key: 1,
              size: 16
            }))
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, f37.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-message-mange/index.js
var a3 = () => {
  const t36 = reactive({}), i44 = (e30, n17) => t36[e30] ? t36[e30].findIndex(
    (r25) => r25.id === n17
  ) : -1;
  return {
    instances: t36,
    getSiblingOffset: (e30, n17, r25) => {
      const s27 = i44(e30, n17);
      if (s27 === -1)
        return 0;
      const o4 = t36[e30][r25 ? s27 + 1 : s27 - 1] || null;
      return o4 ? (o4.vm.exposeProxy || o4.vm.exposed).bottom : 0;
    },
    removeInstance: (e30, n17) => {
      const r25 = i44(e30, n17);
      t36[e30].splice(r25, 1);
    },
    createInstance: (e30, n17) => (t36[n17] ? t36[n17].push(e30) : t36[n17] = [e30], e30)
  };
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-message/index.js
var b2 = a3();
var T = (o4) => {
  let a17 = 1;
  const p9 = {
    message: { placement: "top" },
    notification: { placement: "top-right" }
  }, l35 = {
    message: ae,
    notification: Ie
  }, t36 = (e30) => {
    const s27 = document.createElement("div"), c27 = `message-${a17}`;
    typeof e30 == "string" && (e30 = {
      message: e30
    });
    const n17 = {
      id: c27,
      ...p9[o4],
      ...e30
    };
    n17.onDestroy = () => {
      r2(n17.onClose), render(null, s27);
    };
    const r25 = createVNode(l35[o4], n17);
    render(r25, s27), document.body.appendChild(s27.firstElementChild);
    const m14 = r25.component;
    return a17++, b2.createInstance(
      {
        id: c27,
        vm: m14,
        close: () => {
          m14.exposed.close();
        },
        bottom: 0,
        visible: 0
      },
      n17.placement
    );
  };
  return [
    "default",
    "primary",
    "success",
    "danger",
    "warning"
  ].forEach((e30) => {
    t36[e30] = (s27) => t36({ message: s27, type: e30 });
  }), { instance: t36 };
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-filter-props/index.js
var c8 = (e30, t36) => {
  const r25 = reactive({});
  for (const o4 of t36)
    o4 && (r25[o4] = e30[o4]);
  return r25;
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/load-image/index.js
var c9 = Object.defineProperty;
var l8 = (o4, s27, r25) => s27 in o4 ? c9(o4, s27, { enumerable: true, configurable: true, writable: true, value: r25 }) : o4[s27] = r25;
var t3 = (o4, s27, r25) => (l8(o4, typeof s27 != "symbol" ? s27 + "" : s27, r25), r25);
var i9 = class {
  constructor(s27, r25, e30) {
    t3(this, "node");
    t3(this, "props");
    t3(this, "callback");
    t3(this, "loadCreateImg", (s28) => {
      const r26 = new Image();
      s28 ? r26.src = s28 : r26.src = this.props.src, r26.addEventListener("error", (e31) => {
        this.onerror(e31);
      }), r26.addEventListener("load", (e31) => {
        this.onload(e31, r26.src);
      });
    });
    t3(this, "onerror", (s28) => {
      if (this.props.errSrc) {
        this.loadCreateImg(this.props.errSrc), this.props.errSrc = "";
        return;
      }
      r2(this.props.onError, s28), r2(this.callback, false);
    });
    t3(this, "onload", (s28, r26) => {
      this.node.src = r26, r2(this.props.onLoad, s28), r2(this.callback, true);
    });
    this.node = s27, this.props = r25, this.callback = e30;
  }
};
var h4 = class extends i9 {
  constructor(r25, e30, n17) {
    super(r25, e30, n17);
    t3(this, "observer", () => {
      const r26 = new IntersectionObserver(
        (e31) => {
          e31[0].isIntersecting && (this.loadCreateImg(), r26.unobserve(this.node));
        },
        {
          rootMargin: p(this.props.rootMargin) ? this.props.rootMargin : this.props.rootMargin + "px"
        }
      );
      return r26;
    });
    t3(this, "lazyCreateImg", () => {
      this.observer().observe(this.node);
    });
  }
};
var b3 = (o4, s27, r25) => s27.lazy ? new h4(o4, s27, r25).lazyCreateImg() : new i9(o4, s27, r25).loadCreateImg();

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-load-image/index.js
var g = (o4) => {
  const r25 = ref(true), e30 = ref(o4.lazy);
  return {
    isSuccess: r25,
    isShowNode: e30,
    loadAction: (s27) => {
      const a17 = (t36) => {
        r25.value = t36, e30.value = t36;
      }, n17 = c8(o4, ["src", "errSrc", "rootMargin", "lazy", "onLoad", "onError"]);
      b3(s27.value, n17, a17);
    }
  };
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/avatar/src/index2.js
var V2 = {
  key: 1,
  class: "f-avatar__text"
};
var j2 = ["alt"];
var q = { class: "f-avatar__error-text" };
var G = defineComponent({
  name: "FAvatar"
});
var W2 = defineComponent({
  ...G,
  props: e3,
  setup(v3) {
    const r25 = v3, z10 = useSlots(), { isSuccess: k8, isShowNode: y5, loadAction: S13 } = g(r25), l35 = ref(
      null
    ), g8 = computed(
      () => {
        const { round: o4, size: t36, fit: s27 } = r25;
        return [
          "f-avatar__img",
          {
            "f-avatar__round": o4,
            [`f-avatar__${t36}`]: p(t36),
            [`f-avatar__${s27}`]: s27
          }
        ];
      }
    ), h15 = computed(
      () => {
        const { size: o4, round: t36 } = r25;
        return [
          "f-avatar",
          {
            "f-avatar__round": t36,
            [`f-avatar__${o4}`]: p(o4)
          }
        ];
      }
    ), c27 = computed(() => {
      const { background: o4, size: t36, fontColor: s27, fontSize: C11 } = r25;
      return {
        "--f-avatar-size": c(t36) ? t36 + "px" : null,
        "--f-avatar-background-color": o4,
        "--f-avatar-font-color": s27,
        "--f-avatar-font-size": s(C11)
      };
    });
    return onMounted(() => {
      !z10.icon && !r25.icon && !r25.text && S13(l35);
    }), (o4, t36) => unref(k8) ? (openBlock(), createElementBlock("div", {
      key: 0,
      role: "img",
      class: normalizeClass(unref(h15)),
      style: normalizeStyle(unref(c27))
    }, [
      o4.$slots.icon || o4.icon ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        size: o4.fontSize,
        color: o4.fontColor,
        icon: o4.icon
      }, {
        default: withCtx(() => [
          renderSlot(o4.$slots, "icon")
        ]),
        _: 3
      }, 8, ["size", "color", "icon"])) : o4.text ? (openBlock(), createElementBlock("span", V2, toDisplayString(o4.text), 1)) : withDirectives((openBlock(), createElementBlock("img", {
        key: 2,
        ref_key: "avatarEl",
        ref: l35,
        src: "",
        class: normalizeClass(unref(g8)),
        alt: o4.alt
      }, null, 10, j2)), [
        [vShow, unref(y5)]
      ])
    ], 6)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: "f-avatar__error",
      style: normalizeStyle(unref(c27))
    }, [
      renderSlot(o4.$slots, "error", {}, () => [
        createBaseVNode("span", q, toDisplayString(o4.alt || "加载失败"), 1)
      ])
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/avatar/index.js
var f2 = n2(W2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/back-top/src/index3.js
var e6 = {
  round: {
    type: Boolean,
    default: () => false
  },
  behavior: {
    type: String,
    default: () => "smooth",
    validator: (t36) => ["smooth", "auto"].includes(t36)
  },
  visibleHeight: {
    type: Number,
    default: () => 200,
    validator: (t36) => t36 >= 0
  },
  right: {
    type: [String, Number],
    default: () => 40
  },
  bottom: {
    type: [String, Number],
    default: () => 40
  },
  zIndex: {
    type: Number,
    default: () => 900,
    validator: (t36) => t36 >= 0
  },
  top: {
    type: Number,
    default: () => 0,
    validator: (t36) => t36 >= 0
  },
  listenEl: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/back-top/src/index2.js
var B2 = ["onClick"];
var L = defineComponent({
  name: "FBackTop"
});
var H = defineComponent({
  ...L,
  props: e6,
  setup(a17) {
    const t36 = a17, r25 = ref(false), l35 = (o4) => n(() => {
      const e30 = (o4 || document.documentElement).scrollTop;
      r25.value = e30 > t36.visibleHeight;
    }, 200), d8 = () => {
      const { top: o4, behavior: e30, listenEl: n17 } = t36;
      if (n17) {
        document.querySelector(
          n17
        ).scrollTo({
          top: o4,
          behavior: e30
        });
        return;
      }
      window.scrollTo({
        top: o4,
        behavior: e30
      });
    };
    onMounted(() => {
      if (t36.listenEl) {
        const o4 = document.querySelector(
          t36.listenEl
        );
        o4.addEventListener(
          "scroll",
          l35(o4)
        );
      }
      document.addEventListener("scroll", l35(null));
    });
    const u11 = computed(() => {
      const { right: o4, bottom: e30, zIndex: n17, background: c27, color: p9 } = t36;
      return {
        "--f-back-top-right": s(o4),
        "--f-back-top-bottom": s(e30),
        "--f-back-top-z-index": n17,
        "--f-back-top-background": c27,
        "--f-back-top-color": p9
      };
    });
    return (o4, e30) => (openBlock(), createBlock(Transition, { name: "f-back-top" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["f-back-top", { "f-back-top__round": o4.round }]),
          style: normalizeStyle(unref(u11)),
          onClick: withModifiers(d8, ["stop"])
        }, [
          renderSlot(o4.$slots, "default")
        ], 14, B2), [
          [vShow, r25.value]
        ])
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/back-top/index.js
var f3 = n2(H);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/badge/src/index3.js
var t4 = {
  value: {
    type: [String, Number],
    default: () => null
  },
  max: {
    type: Number,
    default: () => 99
  },
  dot: {
    type: Boolean,
    default: () => false
  },
  show: {
    type: Boolean,
    default: () => false
  },
  type: {
    type: String,
    default: () => "danger",
    validator: (e30) => ["primary", "success", "danger", "warning"].includes(
      e30
    )
  },
  color: {
    type: String,
    default: () => null
  },
  textColor: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/badge/src/index2.js
var S = defineComponent({
  name: "FBadge"
});
var x = defineComponent({
  ...S,
  props: t4,
  setup(d8) {
    const n17 = d8, i44 = computed(
      () => {
        const { type: t36, dot: e30 } = n17;
        return [
          "f-badge__content",
          {
            [`f-badge__${t36}`]: t36,
            "f-badge__dot": e30
          }
        ];
      }
    ), a17 = computed(() => {
      const { dot: t36, max: e30, value: o4 } = n17;
      return t36 ? "" : c(e30) && c(o4) ? e30 > o4 ? `${o4}` : `${e30}+` : `${o4}`;
    }), f37 = computed(() => {
      const { color: t36, textColor: e30 } = n17;
      return {
        "--f-badge-background": t36,
        "--f-badge-text-color": e30
      };
    });
    return (t36, e30) => (openBlock(), createElementBlock("div", {
      class: "f-badge",
      style: normalizeStyle(unref(f37))
    }, [
      renderSlot(t36.$slots, "default"),
      withDirectives(createBaseVNode("sup", {
        class: normalizeClass(unref(i44))
      }, toDisplayString(unref(a17)), 3), [
        [vShow, !t36.show && (unref(a17) || t36.dot)]
      ])
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/badge/index.js
var i10 = n2(x);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb/src/index3.js
var t5 = {
  separator: {
    type: Object,
    default: () => null
  },
  itemColor: {
    type: String,
    default: () => null
  },
  iconColor: {
    type: String,
    default: () => null
  },
  fontSize: {
    type: [String, Number],
    default: () => null
  }
};
var e7 = Symbol(
  "breadcrumb-props-key"
);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb/src/index2.js
var d2 = defineComponent({
  name: "FBreadcrumb"
});
var b4 = defineComponent({
  ...d2,
  props: t5,
  setup(r25) {
    return provide(e7, r25), (e30, _26) => e30.$slots.default ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "f-breadcrumb",
      style: normalizeStyle({ fontSize: unref(s)(e30.fontSize) })
    }, [
      renderSlot(e30.$slots, "default")
    ], 4)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb/index.js
var i11 = n2(b4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb-item/src/index3.js
var t6 = {
  color: {
    type: String,
    default: () => null
  },
  iconColor: {
    type: String,
    default: () => null
  },
  separator: {
    type: Object,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-chevron-right/index.js
var r9 = {};
var c10 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s10 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M5.75 12.25L10.25 8l-4.5-4.25"
}, null, -1);
var i12 = [
  s10
];
function _5(l35, d8) {
  return openBlock(), createElementBlock("svg", c10, i12);
}
var a4 = s3(r9, [["render", _5]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb-item/src/index2.js
var B3 = { class: "f-breadcrumb-item__text" };
var I = defineComponent({
  name: "FBreadcrumbItem"
});
var x2 = defineComponent({
  ...I,
  props: t6,
  setup(c27) {
    const e30 = c27, o4 = inject(e7, void 0), m14 = computed(
      () => o4 && o4.separator ? o4.separator : e30.separator || a4
    ), s27 = computed(() => ({
      "--f-breadcrumb-item-text-color": o4 && o4.itemColor || e30.color,
      "--f-breadcrumb-item-icon-color": o4 && o4.iconColor || e30.iconColor
    }));
    return (i44, h15) => (openBlock(), createElementBlock("div", {
      class: "f-breadcrumb-item",
      style: normalizeStyle(unref(s27))
    }, [
      createBaseVNode("span", B3, [
        renderSlot(i44.$slots, "default")
      ]),
      createVNode(unref(i2), {
        icon: unref(m14),
        size: 16
      }, null, 8, ["icon"])
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/breadcrumb-item/index.js
var f4 = n2(x2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button/src/index3.js
var t7 = {
  bold: {
    type: Boolean,
    default: () => false
  },
  circle: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  fontSize: {
    type: [String, Number],
    default: () => "14px"
  },
  fontColor: {
    type: String,
    default: () => null
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  block: {
    type: Boolean,
    default: () => false
  },
  href: {
    type: String,
    default: () => null
  },
  target: {
    type: String,
    default: () => "_self",
    validator: (e30) => ["_blank", "_self", "_parent", "_top"].includes(e30)
  },
  loading: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  loadingIcon: {
    type: Object,
    default: () => null
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["default", "primary", "success", "danger", "warning"].includes(e30)
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  name: {
    type: String,
    default: () => "f-button"
  },
  shadow: {
    type: String,
    default: () => null
  },
  text: {
    type: Boolean,
    default: () => false
  },
  nativeType: {
    type: String,
    default: () => "button",
    validator: (e30) => ["button", "submit", "reset"].includes(e30)
  },
  simple: {
    type: Boolean,
    default: () => false
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  },
  ripples: {
    type: Boolean,
    default: () => false
  },
  ripplesColor: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button-group/src/index3.js
var l9 = {
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  vertical: {
    type: Boolean,
    default: () => false
  }
};
var t8 = Symbol("button-group-props-key");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-loading-a/index.js
var c11 = {};
var n5 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var l10 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0l-2.12-2.12a1 1 0 0 1 1.414-1.415l2.12 2.121a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"
}, null, -1);
var r10 = [
  l10
];
function _6(s27, i44) {
  return openBlock(), createElementBlock("svg", n5, r10);
}
var m4 = s3(c11, [["render", _6]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/ripples/index.js
var n6 = Object.defineProperty;
var p2 = (s27, t36, e30) => t36 in s27 ? n6(s27, t36, { enumerable: true, configurable: true, writable: true, value: e30 }) : s27[t36] = e30;
var i13 = (s27, t36, e30) => (p2(s27, typeof t36 != "symbol" ? t36 + "" : t36, e30), e30);
var l11 = class {
  constructor(t36, e30, o4) {
    i13(this, "evt");
    i13(this, "node");
    i13(this, "option");
    i13(this, "clickRipples", () => {
      const { layerX: t37, layerY: e31 } = this.evt, o5 = this.renderElement(t37, e31);
      this.node.appendChild(o5), this.removeElement(o5);
    });
    i13(this, "computedRipplesColor", () => {
      if (this.option.ripplesColor)
        return this.option.ripplesColor;
      const t37 = {
        default: "#f0f0f0",
        primary: "#2d5af1",
        success: "#52b35e",
        danger: "#ff0200",
        warning: "#fcc202"
      };
      if (this.option.component === "f-button") {
        const { simple: e31, text: o5 } = this.option;
        return e31 || o5 ? t37[this.option.type] : "";
      }
      return t37[this.option.type];
    });
    i13(this, "renderElement", (t37, e31) => {
      const o5 = document.createElement(
        "span"
      );
      return o5.className = this.option.className, o5.style.background = this.computedRipplesColor(), o5.style.left = `${t37}px`, this.option.component === "f-button" && (o5.style.top = `${e31}px`), o5;
    });
    i13(this, "removeElement", (t37) => {
      setTimeout(() => {
        t37.remove();
      }, this.option.duration || 400);
    });
    this.evt = t36, this.node = e30, this.option = o4;
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/change-color/index.js
var l12 = Object.defineProperty;
var g2 = (e30, t36, o4) => t36 in e30 ? l12(e30, t36, { enumerable: true, configurable: true, writable: true, value: o4 }) : e30[t36] = o4;
var n7 = (e30, t36, o4) => (g2(e30, typeof t36 != "symbol" ? t36 + "" : t36, o4), o4);
var c12 = class {
  constructor(t36) {
    n7(this, "color");
    n7(this, "hexToRgb", () => {
      if (!/^\#?[0-9A-Fa-f]{6}$/.test(this.color))
        return console.warn("输入错误的 hex 值色号");
      const r25 = this.color.replace("#", "").match(/../g);
      for (let h15 = 0; h15 < r25.length; h15++)
        r25[h15] = parseInt(r25[h15], 16).toString();
      return r25;
    });
    n7(this, "rgbToHex", (...t37) => {
      const o4 = [...t37];
      for (let r25 = 0; r25 < o4.length; r25++)
        o4[r25].length === 1 && (o4[r25] = "0" + o4[r25]);
      return "#" + o4.join("");
    });
    n7(this, "getDarkColor", (t37) => {
      const o4 = this.hexToRgb();
      for (let r25 = 0; r25 < o4.length; r25++)
        o4[r25] = Math.floor(Number(o4[r25]) * (1 - t37)).toString(16);
      return this.rgbToHex(...o4);
    });
    n7(this, "getLightColor", (t37) => {
      const o4 = this.hexToRgb();
      for (let r25 = 0; r25 < o4.length; r25++)
        o4[r25] = Math.floor(
          (255 - Number(o4[r25])) * t37 + Number(o4[r25])
        ).toString(16);
      return this.rgbToHex(...o4);
    });
    this.color = t36;
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button/src/index2.js
var U2 = ["href", "target"];
var V3 = ["disabled", "autofocus", "name", "type"];
var j3 = defineComponent({
  name: "FButton"
});
var X = defineComponent({
  ...j3,
  props: t7,
  setup(N9) {
    const s27 = N9, g8 = ref(
      null
    ), k8 = inject(t8, void 0), _26 = computed(
      () => {
        const {
          type: o4,
          round: n17,
          simple: l35,
          block: e30,
          disabled: r25,
          loading: a17,
          bold: f37,
          size: u11,
          text: C11,
          circle: P4,
          color: c27
        } = s27;
        return [
          "f-button",
          {
            [`f-button__${k8 || u11}`]: k8 || u11,
            [`f-button__${o4}`]: o4 && !c27,
            "f-button__disabled": r25 || a17,
            "f-button__simple": l35 && !c27,
            "f-button__circle": P4,
            "f-button__round": n17,
            "f-button__block": e30,
            "f-button__bold": f37,
            "f-button__color": c27,
            "f-button__text": C11 && !c27
          }
        ];
      }
    ), h15 = (o4) => {
      const { disabled: n17, loading: l35, ripples: e30 } = s27;
      if (n17 || l35) {
        o4.preventDefault();
        return;
      }
      if (e30) {
        const { ripplesColor: r25, simple: a17, text: f37, type: u11 } = s27;
        new l11(
          o4,
          g8.value,
          {
            duration: 700,
            component: "f-button",
            className: "f-button__ripples",
            ripplesColor: r25,
            simple: a17,
            text: f37,
            type: u11
          }
        ).clickRipples();
      }
      r2(s27.onClick, o4);
    }, y5 = computed(() => {
      const { fontSize: o4, fontColor: n17, shadow: l35, color: e30 } = s27;
      if (e30) {
        const r25 = new c12(e30), a17 = r25.getLightColor(0.4), f37 = r25.getDarkColor(0.2);
        return {
          "--f-button-font-size": s(o4),
          "--f-button-font-color": n17,
          "--f-button-box-shadow": l35,
          "--f-button-default-color": e30,
          "--f-button-hover-color": a17,
          "--f-button-active-color": f37
        };
      }
      return {
        "--f-button-font-size": s(o4),
        "--f-button-font-color": n17,
        "--f-button-box-shadow": l35
      };
    });
    return (o4, n17) => o4.href ? (openBlock(), createElementBlock("a", {
      key: 0,
      ref_key: "FButton",
      ref: g8,
      role: "button",
      tabindex: "0",
      class: normalizeClass(unref(_26)),
      href: o4.href,
      target: o4.target,
      style: normalizeStyle(unref(y5)),
      onClick: h15
    }, [
      o4.loading || o4.beforeIcon ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        class: normalizeClass({ "f-button__loading-animation": o4.loading }),
        icon: o4.loading ? o4.loadingIcon || unref(m4) : o4.beforeIcon,
        size: 16
      }, null, 8, ["class", "icon"])) : createCommentVNode("", true),
      renderSlot(o4.$slots, "default"),
      o4.afterIcon ? (openBlock(), createBlock(unref(i2), {
        key: 1,
        icon: o4.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : createCommentVNode("", true)
    ], 14, U2)) : (openBlock(), createElementBlock("button", {
      key: 1,
      ref_key: "FButton",
      ref: g8,
      role: "button",
      tabindex: "0",
      class: normalizeClass(unref(_26)),
      disabled: o4.disabled || o4.loading,
      autofocus: o4.autofocus,
      name: o4.name,
      type: o4.nativeType,
      style: normalizeStyle(unref(y5)),
      onClick: h15
    }, [
      o4.loading || o4.beforeIcon ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        class: normalizeClass({ "f-button__loading-animation": o4.loading }),
        icon: o4.loading ? o4.loadingIcon || unref(m4) : o4.beforeIcon,
        size: 16
      }, null, 8, ["class", "icon"])) : createCommentVNode("", true),
      renderSlot(o4.$slots, "default"),
      o4.afterIcon ? (openBlock(), createBlock(unref(i2), {
        key: 1,
        icon: o4.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : createCommentVNode("", true)
    ], 14, V3));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button/index.js
var i14 = n2(X);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button-group/src/index2.js
var d3 = defineComponent({
  name: "FButtonGroup"
});
var z = defineComponent({
  ...d3,
  props: l9,
  setup(n17) {
    const e30 = n17;
    provide(t8, e30.size);
    const s27 = computed(
      () => {
        const { vertical: o4, size: t36 } = e30;
        return [
          "f-button-group",
          `f-button-group__${o4 ? "vertical" : "horizontal"}`,
          {
            [`f-button-group__${t36}`]: t36
          }
        ];
      }
    );
    return (o4, t36) => (openBlock(), createElementBlock("div", {
      role: "group",
      class: normalizeClass(unref(s27))
    }, [
      renderSlot(o4.$slots, "default")
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/button-group/index.js
var f5 = n2(z);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/calendar/src/index3.js
var e8 = {
  date: {
    type: Date,
    default: () => new Date(),
    required: true
  },
  lunar: {
    type: Boolean,
    default: () => false
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  border: {
    type: Boolean,
    default: () => false
  },
  borderColor: {
    type: String,
    default: () => "#eee"
  },
  dayCellHeight: {
    type: [String, Number],
    default: () => "85px"
  },
  weekCellHeight: {
    type: [String, Number],
    default: () => "50px"
  },
  memorandum: {
    type: Object,
    default: () => null
  },
  onChangeDate: {
    type: Function,
    default: () => null
  },
  onChangeMonth: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/text/src/index3.js
var l13 = {
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["default", "primary", "success", "danger", "warning"].includes(e30)
  },
  size: {
    type: [String, Number],
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  block: {
    type: Boolean,
    default: () => false
  },
  spacing: {
    type: [String, Number],
    default: () => null
  },
  lineHeight: {
    type: [String, Number],
    default: () => null
  },
  indent: {
    type: [String, Number],
    default: () => null
  },
  bold: {
    type: Boolean,
    default: () => false
  },
  decoration: {
    type: String,
    default: () => null,
    validator: (e30) => ["overline", "line-through", "underline"].includes(e30)
  },
  padding: {
    type: [String, Number],
    default: () => null
  },
  width: {
    type: [String, Number],
    default: () => null
  },
  ellipsis: {
    type: Boolean,
    default: () => false
  },
  center: {
    type: Boolean,
    default: () => false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/text/src/index2.js
var b5 = defineComponent({
  name: "FText"
});
var w = defineComponent({
  ...b5,
  props: l13,
  setup(l35) {
    const t36 = l35, c27 = computed(
      () => {
        const { type: o4, block: n17, bold: a17, ellipsis: p9, center: d8 } = t36;
        return [
          "f-text",
          {
            [`f-text__${o4}`]: o4,
            "f-text__block": n17,
            "f-text__bold": a17,
            "f-text__center": d8,
            "f-text__ellipsis": p9
          }
        ];
      }
    ), f37 = computed(() => ({
      "--f-text-color": t36.color,
      "--f-text-background": t36.background,
      "--f-text-text-decoration": t36.decoration,
      "--f-text-width": s(t36.width),
      "--f-text-font-size": s(t36.size),
      "--f-text-padding": s(t36.padding),
      "--f-text-letter-spacing": s(t36.spacing),
      "--f-text-line-height": s(t36.lineHeight),
      "--f-text-text-indent": s(t36.indent)
    }));
    return (o4, n17) => (openBlock(), createElementBlock("p", {
      class: normalizeClass(unref(c27)),
      style: normalizeStyle(unref(f37))
    }, [
      renderSlot(o4.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/text/index.js
var i15 = n2(w);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-chevron-left/index.js
var r11 = {};
var c13 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s11 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M10.25 3.75L5.75 8l4.5 4.25"
}, null, -1);
var i16 = [
  s11
];
function _7(l35, d8) {
  return openBlock(), createElementBlock("svg", c13, i16);
}
var m5 = s3(r11, [["render", _7]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/calendar-data/index.js
var b6 = ["日", "一", "二", "三", "四", "五", "六"];
var f6 = [
  19416,
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  25958,
  54432,
  59984,
  92821,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  23232,
  43872,
  38613,
  37600,
  51552,
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  37600,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  41680,
  53584,
  62034,
  54560
];
var c14 = [
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸"
];
var e9 = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥"
];
var u5 = [
  "鼠",
  "牛",
  "虎",
  "兔",
  "龙",
  "蛇",
  "马",
  "羊",
  "猴",
  "鸡",
  "狗",
  "猪"
];
var d4 = {
  "1-1": { title: "元旦节" },
  "2-14": { title: "情人节" },
  "5-1": { title: "劳动节" },
  "5-4": { title: "青年节" },
  "6-1": { title: "儿童节" },
  "9-10": { title: "教师节" },
  "10-1": { title: "国庆节" },
  "12-25": { title: "圣诞节" },
  "3-8": { title: "妇女节" },
  "3-12": { title: "植树节" },
  "4-1": { title: "愚人节" },
  "5-12": { title: "护士节" },
  "7-1": { title: "建党节" },
  "8-1": { title: "建军节" },
  "12-24": { title: "平安夜" }
};
var t9 = {
  "12-30": { title: "除夕" },
  "1-1": { title: "春节" },
  "1-15": { title: "元宵节" },
  "2-2": { title: "龙抬头" },
  "5-5": { title: "端午节" },
  "7-7": { title: "七夕节" },
  "7-15": { title: "中元节" },
  "8-15": { title: "中秋节" },
  "9-9": { title: "重阳节" },
  "10-1": { title: "寒衣节" },
  "10-15": { title: "下元节" },
  "12-8": { title: "腊八节" },
  "12-23": { title: "北方小年" },
  "12-24": { title: "南方小年" }
};
var E = [
  "小寒",
  "大寒",
  "立春",
  "雨水",
  "惊蛰",
  "春分",
  "清明",
  "谷雨",
  "立夏",
  "小满",
  "芒种",
  "夏至",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至"
];
var a5 = [
  "日",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十"
];
var A2 = [
  "初",
  "十",
  "廿",
  "卅"
];
var C = [
  "正",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "冬",
  "腊"
];
var B4 = [
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "9778397bd19801ec9210c965cc920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd197c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bcf97c3598082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd19801ec9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bd07f1487f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b97bd197c36c9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b70c9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "977837f0e37f149b0723b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0723b06bd",
  "7f07e7f0e37f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e37f14998083b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14898082b0723b02d5",
  "7f07e7f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66aa89801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e26665b66a449801e9808297c35",
  "665f67f0e37f1489801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722"
];

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/calendar/index.js
var o = (t36, n17) => n17 === -1 ? 31 : n17 !== 1 ? [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n17] : t36 % 4 == 0 && t36 % 100 != 0 || t36 % 400 == 0 ? 29 : 28;

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/calendar-lunar/index.js
var B5 = Object.defineProperty;
var O2 = (c27, t36, e30) => t36 in c27 ? B5(c27, t36, { enumerable: true, configurable: true, writable: true, value: e30 }) : c27[t36] = e30;
var u6 = (c27, t36, e30) => (O2(c27, typeof t36 != "symbol" ? t36 + "" : t36, e30), e30);
var j4 = class {
  constructor() {
    u6(this, "getLunarYearDays", (t36) => {
      let e30, i44 = 348;
      for (e30 = 32768; e30 > 8; e30 >>= 1)
        i44 += f6[t36 - 1900] & e30 ? 1 : 0;
      return i44 + this.leapDays(t36);
    });
    u6(this, "leapMonth", (t36) => f6[t36 - 1900] & 15);
    u6(this, "leapDays", (t36) => this.leapMonth(t36) ? f6[t36 - 1900] & 65536 ? 30 : 29 : 0);
    u6(this, "monthDays", (t36, e30) => e30 > 12 || e30 < 1 ? -1 : f6[t36 - 1900] & 65536 >> e30 ? 30 : 29);
    u6(this, "toGanZhiYear", (t36) => {
      let e30 = (t36 - 3) % 10, i44 = (t36 - 3) % 12;
      return e30 === 0 && (e30 = 10), i44 === 0 && (i44 = 12), c14[e30 - 1] + e9[i44 - 1];
    });
    u6(this, "toConstellation", (t36, e30) => {
      const i44 = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯", a17 = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return i44.substr(t36 * 2 - (e30 < a17[t36 - 1] ? 2 : 0), 2) + "座";
    });
    u6(this, "toGanZhi", (t36) => c14[t36 % 10] + e9[t36 % 12]);
    u6(this, "getTerm", (t36, e30) => {
      if (t36 < 1900 || t36 > 2100 || e30 < 1 || e30 > 24)
        return -1;
      const i44 = B4[t36 - 1900], a17 = [];
      for (let n17 = 0; n17 < i44.length; n17 += 5) {
        const r25 = parseInt("0x" + i44.substr(n17, 5)).toString();
        a17.push(r25[0], r25.substr(1, 2), r25[3], r25.substr(4, 2));
      }
      return parseInt(a17[e30 - 1]);
    });
    u6(this, "toChinaMonth", (t36) => {
      if (t36 > 12 || t36 < 1)
        return -1;
      let e30 = C[t36 - 1];
      return e30 += "月", e30;
    });
    u6(this, "toChinaDay", (t36) => {
      let e30;
      switch (t36) {
        case 10:
          e30 = "初十";
          break;
        case 20:
          e30 = "二十";
          break;
        case 30:
          e30 = "三十";
          break;
        default:
          e30 = A2[Math.floor(t36 / 10)], e30 += a5[t36 % 10];
      }
      return e30;
    });
    u6(this, "getAnimal", (t36) => u5[(t36 - 4) % 12]);
    u6(this, "getLunarDetail", (t36, e30, i44) => {
      let a17 = parseInt(t36.toString()), n17 = parseInt(e30.toString()), r25 = parseInt(i44.toString());
      if (a17 < 1900 || a17 > 2100 || a17 === 1900 && n17 === 1 && r25 < 31)
        return -1;
      let o4;
      a17 ? o4 = new Date(a17, parseInt(n17.toString()) - 1, r25) : o4 = new Date();
      let s27, g8 = 0, D6 = 0;
      a17 = o4.getFullYear(), n17 = o4.getMonth() + 1, r25 = o4.getDate();
      let l35 = (Date.UTC(o4.getFullYear(), o4.getMonth(), o4.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (s27 = 1900; s27 < 2101 && l35 > 0; s27++)
        D6 = this.getLunarYearDays(s27), l35 -= D6;
      l35 < 0 && (l35 += D6, s27--);
      let _26 = o4.getDay();
      _26 === 0 && (_26 = 7);
      const f37 = s27;
      g8 = this.leapMonth(s27);
      let h15 = false;
      for (s27 = 1; s27 < 13 && l35 > 0; s27++)
        g8 > 0 && s27 === g8 + 1 && h15 === false ? (--s27, h15 = true, D6 = this.leapDays(f37)) : D6 = this.monthDays(f37, s27), h15 === true && s27 === g8 + 1 && (h15 = false), l35 -= D6;
      l35 === 0 && g8 > 0 && s27 === g8 + 1 && (h15 ? h15 = false : (h15 = true, --s27)), l35 < 0 && (l35 += D6, --s27);
      const C11 = s27, A9 = l35 + 1, S13 = n17 - 1, Y3 = this.toGanZhiYear(f37), I7 = this.getTerm(a17, n17 * 2 - 1), G7 = this.getTerm(a17, n17 * 2);
      let L8 = this.toGanZhi((a17 - 1900) * 12 + n17 + 11);
      r25 >= I7 && (L8 = this.toGanZhi((a17 - 1900) * 12 + n17 + 12));
      let p9 = null;
      I7 === r25 && (p9 = E[n17 * 2 - 2]), G7 === r25 && (p9 = E[n17 * 2 - 1]);
      const b10 = Date.UTC(a17, S13, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, d8 = this.toGanZhi(b10 + r25 - 1), z10 = this.toConstellation(n17, r25), U8 = a17 + "-" + n17 + "-" + r25, Z = f37 + "-" + C11 + "-" + A9, N9 = n17 + "-" + r25;
      let y5 = C11 + "-" + A9;
      return C11 === 12 && A9 === 29 && this.monthDays(f37, C11) === 29 && (y5 = "12-30"), {
        date: U8,
        lunarDate: Z,
        festival: d4[N9] ? d4[N9].title : "",
        lunarFestival: t9[y5] ? t9[y5].title : "",
        lYear: f37,
        lMonth: C11,
        lDay: A9,
        animal: this.getAnimal(f37),
        IMonthCn: (h15 ? "闰" : "") + this.toChinaMonth(C11),
        IDayCn: this.toChinaDay(A9),
        cYear: a17,
        cMonth: n17,
        cDay: r25,
        gzYear: Y3,
        gzMonth: L8,
        gzDay: d8,
        isLeap: h15,
        nWeek: _26,
        Term: p9,
        constellation: z10
      };
    });
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-calculi-time/index.js
var N = (l35, e30) => {
  const o4 = ref(
    new Date(`${l35.value}/${e30.value + 1}/1`).getDay()
  ), v3 = new j4();
  watch(
    () => e30.value,
    (u11) => {
      o4.value = new Date(`${l35.value}/${u11 + 1}/1`).getDay();
    }
  );
  const i44 = computed(
    () => {
      let u11 = o(l35.value, e30.value - 1);
      const s27 = [];
      for (let a17 = 0; a17 < o4.value; a17++) {
        const t36 = v3.getLunarDetail(l35.value, e30.value, u11);
        console.log(t36), t36 !== -1 ? s27.push(t36) : s27.push({
          cDay: u11,
          cMonth: e30.value
        }), u11--;
      }
      return s27.reverse();
    }
  ), D6 = computed(
    () => {
      const u11 = o(l35.value, e30.value) + o4.value, s27 = u11 % 7 === 0 ? 0 : 7 - u11 % 7;
      if (!s27)
        return [];
      const a17 = [];
      for (let t36 = 0; t36 < s27; t36++) {
        const r25 = v3.getLunarDetail(l35.value, e30.value + 2, t36 + 1);
        r25 !== -1 ? a17.push(r25) : a17.push({
          cDay: t36 + 1,
          cMonth: e30.value + 2
        });
      }
      return a17;
    }
  ), f37 = computed(() => {
    const u11 = o(l35.value, e30.value), s27 = [];
    for (let a17 = 0; a17 < u11; a17++) {
      const t36 = v3.getLunarDetail(l35.value, e30.value + 1, a17 + 1);
      console.log(t36), t36 !== -1 ? s27.push(t36) : s27.push({
        cDay: a17 + 1,
        cMonth: e30.value + 1
      });
    }
    return s27;
  }), p9 = () => {
    if (e30.value > 0) {
      e30.value--;
      return;
    }
    l35.value--, e30.value = 11;
  }, L8 = () => {
    if (e30.value < 11) {
      e30.value++;
      return;
    }
    l35.value++, e30.value = 0;
  };
  return {
    AllMonthDays: computed(
      () => [
        ...i44.value,
        ...f37.value,
        ...D6.value
      ]
    ),
    changeLastMonth: p9,
    changeNextMonth: L8
  };
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/calendar/src/index2.js
var G2 = {
  key: 0,
  class: "f-calendar__header"
};
var J = { class: "f-calendar__option" };
var Q = { class: "f-calendar__now-time" };
var U3 = { class: "f-calendar__week" };
var X2 = { class: "f-calendar__day" };
var ee = ["onClick"];
var te = { class: "f-calendar__solar" };
var ae3 = {
  key: 0,
  class: "f-calendar__lunar"
};
var ne = {
  key: 1,
  class: "f-calendar__memorandum"
};
var oe = defineComponent({
  name: "FCalendar"
});
var Ce = defineComponent({
  ...oe,
  props: e8,
  setup(L8) {
    const n17 = L8, i44 = ref(n17.date.getFullYear()), r25 = ref(n17.date.getMonth()), d8 = ref(n17.date.getDate()), { AllMonthDays: N9, changeLastMonth: g8, changeNextMonth: y5 } = N(
      i44,
      r25
    ), T5 = (e30, a17) => a17 === d8.value && e30 === r25.value + 1 ? "f-calendar__day-today" : e30 !== r25.value + 1 ? "f-calendar__not-month" : "", f37 = (e30) => {
      ({
        last: () => g8(),
        next: () => y5(),
        now: () => {
          r25.value = n17.date.getMonth(), i44.value = n17.date.getFullYear(), d8.value = n17.date.getDate();
        }
      })[e30]();
    }, x3 = computed(() => `${i44.value} / ${l3(r25.value + 1)} / ${l3(
      d8.value
    )}`), z10 = (e30, a17) => {
      d8.value = a17, e30 < r25.value + 1 ? g8() : e30 > r25.value + 1 && y5(), r2(n17.onChangeDate, {
        year: i44.value,
        month: e30 || r25.value,
        date: a17
      });
    }, A9 = computed(() => {
      const { borderColor: e30, dayCellHeight: a17, weekCellHeight: t36 } = n17;
      return {
        "--f-calendar-border-color": e30,
        "--f-calendar-day-height": s(a17),
        "--f-calendar-week-height": s(t36)
      };
    }), I7 = (e30) => n17.memorandum ? Object.keys(n17.memorandum).includes(e30) : false;
    return watch(
      () => r25.value,
      (e30) => {
        r2(n17.onChangeMonth, {
          year: i44.value,
          month: e30 + 1,
          date: d8.value
        });
      }
    ), (e30, a17) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["f-calendar", { "f-calendar__border": e30.border }]),
      style: normalizeStyle(unref(A9))
    }, [
      e30.showHeader ? (openBlock(), createElementBlock("header", G2, [
        createVNode(unref(i2), {
          icon: unref(m5),
          onClick: a17[0] || (a17[0] = withModifiers((t36) => f37("last"), ["stop"]))
        }, null, 8, ["icon"]),
        createBaseVNode("div", J, [
          createBaseVNode("span", Q, toDisplayString(unref(x3)), 1),
          createBaseVNode("span", {
            class: "f-calendar__now-date",
            onClick: a17[1] || (a17[1] = withModifiers((t36) => f37("now"), ["stop"]))
          }, " 今天 ")
        ]),
        createVNode(unref(i2), {
          icon: unref(a4),
          onClick: a17[2] || (a17[2] = withModifiers((t36) => f37("next"), ["stop"]))
        }, null, 8, ["icon"])
      ])) : createCommentVNode("", true),
      createBaseVNode("ul", U3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b6), (t36, _26) => (openBlock(), createElementBlock("li", {
          key: _26,
          class: "f-calendar__week-li"
        }, toDisplayString(t36), 1))), 128))
      ]),
      createBaseVNode("ul", X2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(N9), (t36, _26) => (openBlock(), createElementBlock("li", {
          key: _26,
          class: normalizeClass([
            "f-calendar__day-li",
            T5(t36.cMonth, t36.cDay)
          ]),
          onClick: withModifiers((p9) => z10(t36.cMonth, t36.cDay), ["stop"])
        }, [
          createBaseVNode("span", te, toDisplayString(t36.cDay), 1),
          e30.lunar ? (openBlock(), createElementBlock("span", ae3, toDisplayString(t36.festival || t36.IDayCn), 1)) : createCommentVNode("", true),
          I7(t36.date) ? (openBlock(), createElementBlock("div", ne, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e30.memorandum[t36.date], (p9, B14) => (openBlock(), createBlock(unref(i15), {
              key: B14,
              type: p9.type || "default",
              size: 14,
              center: "",
              class: "f-calendar__memorandum-item"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(p9.content), 1)
              ]),
              _: 2
            }, 1032, ["type"]))), 128))
          ])) : createCommentVNode("", true)
        ], 10, ee))), 128))
      ])
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/calendar/index.js
var f7 = n2(Ce);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/card/src/index3.js
var t10 = {
  title: {
    type: String,
    default: () => null
  },
  round: {
    type: Boolean,
    default: () => false
  },
  padding: {
    type: [String, Number],
    default: () => 20
  },
  shadow: {
    type: String,
    default: () => "never",
    validator: (e30) => ["never", "hover", "always"].includes(e30)
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/card/src/index2.js
var g3 = {
  key: 0,
  class: "f-card__header"
};
var $ = defineComponent({
  name: "FCard"
});
var S2 = defineComponent({
  ...$,
  props: t10,
  setup(n17) {
    const l35 = n17, c27 = computed(
      () => {
        const { round: e30, shadow: o4 } = l35;
        return [
          "f-card",
          {
            "f-card__round": e30,
            [`f-card__shadow-${o4}`]: o4
          }
        ];
      }
    );
    return (e30, o4) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(c27))
    }, [
      e30.$slots.header || e30.title ? (openBlock(), createElementBlock("div", g3, [
        renderSlot(e30.$slots, "header", {}, () => [
          createTextVNode(toDisplayString(e30.title), 1)
        ])
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "f-card__body",
        style: normalizeStyle({ padding: unref(s)(e30.padding) })
      }, [
        renderSlot(e30.$slots, "default")
      ], 4)
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/card/index.js
var i17 = n2(S2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox/src/index3.js
var e10 = {
  modelValue: {
    type: [Boolean, Array],
    default: () => false
  },
  label: {
    type: String,
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  border: {
    type: Boolean,
    default: () => false
  },
  showLabel: {
    type: Boolean,
    default: () => true
  },
  indeterminate: {
    type: Boolean,
    default: () => false
  },
  onChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox-group/src/index3.js
var l14 = {
  modelValue: {
    type: [String, Number, Array],
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  vertical: {
    type: Boolean,
    default: () => false
  },
  label: {
    type: String,
    default: () => null
  },
  border: {
    type: Boolean,
    default: () => false
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  columnGap: {
    type: [String, Number],
    default: () => null
  },
  rowGap: {
    type: [String, Number],
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  }
};
var t11 = Symbol("f-checkbox-group-props-key");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox/src/index2.js
var O3 = ["value", "disabled"];
var R = {
  key: 0,
  class: "f-checkbox__box"
};
var S3 = { class: "f-checkbox__text" };
var j5 = defineComponent({
  name: "FCheckbox"
});
var $2 = defineComponent({
  ...j5,
  props: e10,
  emits: {
    "update:modelValue": (r25) => typeof r25 != "object"
  },
  setup(r25, { emit: m14 }) {
    const l35 = r25, o4 = inject(t11, void 0), a17 = computed({
      get() {
        return o4 && o4.modelValue || l35.modelValue;
      },
      set(e30) {
        if (o4 && !o4.disabled) {
          o4.changeEvent(e30);
          return;
        }
        l35.disabled || (r2(l35.onChange, e30), m14("update:modelValue", e30));
      }
    }), f37 = computed(() => {
      const e30 = a17.value;
      return i(e30) ? e30.includes(l35.label) : typeof e30 == "boolean" ? e30 : e30 === l35.label;
    }), p9 = computed(
      () => [
        "f-checkbox",
        {
          "f-checkbox__selected": f37.value,
          "f-checkbox__indeterminate": l35.indeterminate,
          "f-checkbox__bordered": o4 && o4.border,
          "f-checkbox__disabled": l35.disabled || o4 && o4.disabled
        }
      ]
    );
    return (e30, c27) => (openBlock(), createElementBlock("label", {
      role: "checkbox",
      "aria-checked": "false",
      tabindex: "0",
      "aria-labelledby": "chk1-label",
      class: normalizeClass(unref(p9))
    }, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": c27[0] || (c27[0] = (_26) => isRef(a17) ? a17.value = _26 : null),
        type: "checkbox",
        class: "f-checkbox__input",
        hidden: "",
        value: e30.label,
        disabled: e30.disabled || !!unref(o4) && unref(o4).disabled
      }, null, 8, O3), [
        [vModelCheckbox, unref(a17)]
      ]),
      unref(o4) && unref(o4).border ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", R)),
      createBaseVNode("span", S3, [
        renderSlot(e30.$slots, "default"),
        !e30.$slots.default && e30.showLabel ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(e30.label), 1)
        ], 64)) : createCommentVNode("", true)
      ])
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox/index.js
var i18 = n2($2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox-group/src/index2.js
var z2 = defineComponent({
  name: "FCheckboxGroup"
});
var w2 = defineComponent({
  ...z2,
  props: l14,
  emits: {
    "update:modelValue": (t36) => i(t36)
  },
  setup(t36, { emit: l35 }) {
    const e30 = t36, u11 = (o4) => {
      l35("update:modelValue", o4), r2(e30.onChange, o4);
    }, m14 = reactive({
      ...toRefs(e30),
      changeEvent: u11
    });
    provide(t11, m14);
    const i44 = computed(() => {
      const { columnGap: o4, rowGap: r25 } = e30;
      return {
        columnGap: s(o4),
        rowGap: s(r25)
      };
    }), _26 = computed(
      () => {
        const { border: o4, vertical: r25, size: c27 } = e30;
        return [
          "f-checkbox-group",
          {
            "f-checkbox-group__border": o4,
            "f-checkbox-group__vertical": r25,
            [`f-checkbox-group__${c27}`]: c27 && o4
          }
        ];
      }
    );
    return (o4, r25) => (openBlock(), createElementBlock("div", {
      role: "group",
      class: normalizeClass(unref(_26)),
      style: normalizeStyle(unref(i44))
    }, [
      renderSlot(o4.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/checkbox-group/index.js
var f8 = n2(w2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dialog/src/index3.js
var l15 = {
  visible: {
    type: Boolean,
    default: () => false,
    required: true
  },
  title: {
    type: String,
    default: () => null
  },
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: [String, Number],
    default: () => null
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  showMask: {
    type: Boolean,
    default: () => true
  },
  maskClose: {
    type: Boolean,
    default: () => true
  },
  maskBlur: {
    type: Boolean,
    default: () => false
  },
  showCloseIcon: {
    type: Boolean,
    default: () => true
  },
  closeIcon: {
    type: Object,
    default: () => null
  },
  zIndex: {
    type: Number,
    default: () => 1999,
    validator: (e30) => e30 >= 0
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onOpenEnd: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  },
  onCloseEnd: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/popup/src/index3.js
var t12 = {
  visible: {
    type: Boolean,
    default: () => false,
    required: true
  },
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  showMask: {
    type: Boolean,
    default: () => true
  },
  maskClose: {
    type: Boolean,
    default: () => true
  },
  maskBlur: {
    type: Boolean,
    default: () => false
  },
  zIndex: {
    type: Number,
    default: () => 1999,
    validator: (e30) => e30 >= 0
  },
  maskBackground: {
    type: String,
    default: () => null
  },
  maskOpacity: {
    type: Number,
    default: () => null,
    validator: (e30) => e30 >= 0 && e30 <= 1
  },
  direction: {
    type: String,
    default: () => "center",
    validator: (e30) => ["left", "right", "top", "bottom", "center"].includes(
      e30
    )
  },
  popupSize: {
    type: [String, Number],
    default: () => null
  },
  padding: {
    type: [String, Number],
    default: () => null
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  },
  onOpenEnd: {
    type: Function,
    default: () => null
  },
  onCloseEnd: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/popup/src/index2.js
var $3 = ["onClick"];
var A3 = defineComponent({
  name: "FPopup"
});
var q2 = defineComponent({
  ...A3,
  props: t12,
  emits: {
    "update:visible": (t36) => b(t36)
  },
  setup(t36, { emit: _26 }) {
    const o4 = t36, C11 = () => {
      !o4.maskClose || _26("update:visible", false);
    }, v3 = (e30) => {
      r2(o4.onOpen, e30);
    }, b10 = (e30) => {
      r2(o4.onOpenEnd, e30);
    }, y5 = (e30) => {
      r2(o4.onClose, e30);
    }, w8 = (e30) => {
      r2(o4.onCloseEnd, e30);
    }, B14 = computed(() => {
      const { direction: e30, popupSize: i44, padding: l35 } = o4;
      return e30 === "top" || e30 === "bottom" ? {
        height: s(i44),
        padding: s(l35)
      } : {
        width: s(i44),
        padding: s(l35)
      };
    });
    return (e30, i44) => (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !e30.appendToBody
    }, [
      createVNode(Transition, {
        name: "f-popup__transition",
        onBeforeEnter: v3,
        onAfterEnter: b10,
        onBeforeLeave: y5,
        onAfterLeave: w8
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: "f-popup",
            style: normalizeStyle({ zIndex: e30.zIndex })
          }, [
            e30.showMask ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["f-popup__mask", { "f-popup__blur": e30.maskBlur }]),
              style: normalizeStyle({ background: e30.maskBackground, opacity: e30.maskOpacity })
            }, null, 6)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass([
                "f-popup__container",
                {
                  [`f-popup__container-${e30.direction}`]: e30.direction
                }
              ]),
              onClick: withModifiers(C11, ["self"])
            }, [
              createVNode(Transition, { name: "f-popup__wrapper-transition" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", {
                    class: normalizeClass([
                      "f-popup__wrapper",
                      {
                        [`f-popup__wrapper-${e30.direction}`]: e30.direction
                      }
                    ]),
                    style: normalizeStyle(unref(B14))
                  }, [
                    renderSlot(e30.$slots, "default")
                  ], 6), [
                    [vShow, e30.visible]
                  ])
                ]),
                _: 3
              })
            ], 10, $3)
          ], 4), [
            [vShow, e30.visible]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/popup/index.js
var f9 = n2(q2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dialog/src/index2.js
var E2 = { class: "f-dialog__header" };
var I2 = { class: "f-dialog__header-title" };
var D2 = {
  key: 0,
  class: "f-dialog__body"
};
var F = {
  key: 1,
  class: "f-dialog__footer"
};
var S4 = defineComponent({
  name: "FDialog"
});
var U4 = defineComponent({
  ...S4,
  props: l15,
  emits: {
    "update:visible": (n17) => b(n17)
  },
  setup(n17, { emit: k8 }) {
    const d8 = n17, o4 = ref(d8.visible), r25 = () => {
      k8("update:visible", false);
    };
    return watch(
      () => o4.value,
      (e30) => {
        e30 || r25();
      }
    ), watch(
      () => d8.visible,
      (e30) => {
        o4.value = e30;
      }
    ), (e30, p9) => (openBlock(), createBlock(unref(f9), {
      visible: o4.value,
      "onUpdate:visible": p9[0] || (p9[0] = (b10) => o4.value = b10),
      "append-to-body": e30.appendToBody,
      "show-mask": e30.showMask,
      "mask-close": e30.maskClose,
      "z-index": e30.zIndex,
      "mask-blur": e30.maskBlur,
      "on-open": e30.onOpen,
      "on-open-end": e30.onOpenEnd,
      "on-close": e30.onClose,
      "on-close-end": e30.onCloseEnd
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          class: normalizeClass(["f-dialog", { "f-dialog__fullscreen": e30.fullscreen }]),
          style: normalizeStyle({ width: unref(s)(e30.width) })
        }, [
          createBaseVNode("header", E2, [
            renderSlot(e30.$slots, "header", {}, () => [
              createBaseVNode("span", I2, toDisplayString(e30.title), 1),
              e30.showCloseIcon ? (openBlock(), createBlock(unref(i4), {
                key: 0,
                icon: e30.closeIcon,
                onClick: r25
              }, {
                default: withCtx(() => [
                  renderSlot(e30.$slots, "closeIcon")
                ]),
                _: 3
              }, 8, ["icon"])) : createCommentVNode("", true)
            ])
          ]),
          e30.$slots.default ? (openBlock(), createElementBlock("section", D2, [
            renderSlot(e30.$slots, "default")
          ])) : createCommentVNode("", true),
          e30.$slots.footer ? (openBlock(), createElementBlock("footer", F, [
            renderSlot(e30.$slots, "footer")
          ])) : createCommentVNode("", true)
        ], 6)
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "on-open", "on-open-end", "on-close", "on-close-end"]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dialog/index.js
var f10 = n2(U4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/divider/src/index3.js
var e11 = {
  position: {
    type: String,
    default: () => "center",
    validator: (t36) => ["left", "center", "right"].includes(t36)
  },
  vertical: {
    type: Boolean,
    default: () => false
  },
  color: {
    type: String,
    default: () => null
  },
  fontColor: {
    type: String,
    default: () => null
  },
  margin: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  type: {
    type: String,
    default: () => "solid",
    validator: (t36) => ["dashed", "dotted", "double", "solid"].includes(t36)
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/divider/src/index2.js
var y2 = defineComponent({
  name: "FDivider"
});
var $4 = defineComponent({
  ...y2,
  props: e11,
  setup(c27) {
    const o4 = c27, p9 = computed(() => !o4.vertical && Boolean(useSlots().default)), f37 = computed(() => {
      const { color: e30, margin: r25 } = o4;
      return r25 ? {
        margin: `${r25} 0`,
        borderColor: e30
      } : { borderColor: e30 };
    });
    return (e30, r25) => (openBlock(), createElementBlock("div", {
      role: "separator",
      class: normalizeClass([
        "f-divider",
        { "f-divider__vertical": e30.vertical, [`f-divider__${e30.type}`]: e30.type }
      ]),
      style: normalizeStyle(unref(f37))
    }, [
      unref(p9) ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["f-divider__text", `f-divider__text-${e30.position}`]),
        style: normalizeStyle({
          background: e30.background,
          color: e30.fontColor
        })
      }, [
        renderSlot(e30.$slots, "default")
      ], 6)) : createCommentVNode("", true)
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/divider/index.js
var f11 = n2($4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/drawer/src/index3.js
var t13 = {
  visible: {
    type: Boolean,
    default: () => false
  },
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  direction: {
    type: String,
    default: () => "right",
    validator: (e30) => ["left", "top", "right", "bottom"].includes(e30)
  },
  size: {
    type: [String, Number],
    default: () => "30%"
  },
  title: {
    type: String,
    default: () => null
  },
  showMask: {
    type: Boolean,
    default: () => true
  },
  maskClose: {
    type: Boolean,
    default: () => true
  },
  maskBlur: {
    type: Boolean,
    default: () => false
  },
  showCloseIcon: {
    type: Boolean,
    default: () => true
  },
  closeIcon: {
    type: Object,
    default: () => null
  },
  zIndex: {
    type: Number,
    default: () => 1999,
    validator: (e30) => e30 >= 0
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onOpenEnd: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  },
  onCloseEnd: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/drawer/src/index2.js
var _8 = { class: "f-drawer" };
var $5 = { class: "f-drawer__header" };
var E3 = { class: "f-drawer__header-title" };
var I3 = {
  key: 0,
  class: "f-drawer__body"
};
var D3 = {
  key: 1,
  class: "f-drawer__footer"
};
var F2 = defineComponent({
  name: "FDrawer"
});
var M2 = defineComponent({
  ...F2,
  props: t13,
  emits: {
    "update:visible": (r25) => b(r25)
  },
  setup(r25, { emit: h15 }) {
    const t36 = r25, o4 = ref(t36.visible), a17 = () => {
      h15("update:visible", false);
    };
    return watch(
      () => o4.value,
      (e30) => {
        e30 || a17();
      }
    ), watch(
      () => t36.visible,
      (e30) => {
        o4.value = e30;
      }
    ), (e30, d8) => (openBlock(), createBlock(unref(f9), {
      visible: o4.value,
      "onUpdate:visible": d8[0] || (d8[0] = (b10) => o4.value = b10),
      "append-to-body": e30.appendToBody,
      "show-mask": e30.showMask,
      "mask-close": e30.maskClose,
      "z-index": e30.zIndex,
      "mask-blur": e30.maskBlur,
      direction: e30.direction,
      "popup-size": e30.size,
      "on-open": e30.onOpen,
      "on-open-end": e30.onOpenEnd,
      "on-close": e30.onClose,
      "on-close-end": e30.onCloseEnd
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _8, [
          createBaseVNode("header", $5, [
            renderSlot(e30.$slots, "header", {}, () => [
              createBaseVNode("span", E3, toDisplayString(e30.title), 1),
              e30.showCloseIcon ? (openBlock(), createBlock(unref(i4), {
                key: 0,
                icon: e30.closeIcon,
                onClick: a17
              }, {
                default: withCtx(() => [
                  renderSlot(e30.$slots, "closeIcon")
                ]),
                _: 3
              }, 8, ["icon"])) : createCommentVNode("", true)
            ])
          ]),
          e30.$slots.default ? (openBlock(), createElementBlock("section", I3, [
            renderSlot(e30.$slots, "default")
          ])) : createCommentVNode("", true),
          e30.$slots.footer ? (openBlock(), createElementBlock("footer", D3, [
            renderSlot(e30.$slots, "footer")
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "direction", "popup-size", "on-open", "on-open-end", "on-close", "on-close-end"]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/drawer/index.js
var i19 = n2(M2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/empty/src/index3.js
var t14 = {
  content: {
    type: String,
    default: () => "暂无数据"
  },
  contentSize: {
    type: [String, Number],
    default: () => null
  },
  contentColor: {
    type: String,
    default: () => null
  },
  imageSrc: {
    type: String,
    default: () => null
  },
  imageSize: {
    type: [String, Number],
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => 30
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-full-sharp/index.js
var c15 = {};
var n8 = {
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
};
var l16 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M128 128h256v38H128zm-16 64h288v38H112z"
}, null, -1);
var _9 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"
}, null, -1);
var h5 = [
  l16,
  _9
];
function s12(i44, d8) {
  return openBlock(), createElementBlock("svg", n8, h5);
}
var m6 = s3(c15, [["render", s12]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image/src/index3.js
var t15 = {
  src: {
    type: String,
    default: () => null
  },
  alt: {
    type: String,
    default: () => null
  },
  draggable: {
    type: Boolean,
    default: () => true
  },
  lazy: {
    type: Boolean,
    default: () => false
  },
  rootMargin: {
    type: [String, Number],
    default: () => "100px"
  },
  width: {
    type: [String, Number],
    default: () => null
  },
  height: {
    type: [String, Number],
    default: () => null
  },
  block: {
    type: Boolean,
    default: () => false
  },
  fit: {
    type: String,
    default: () => null,
    validator: (e30) => ["fill", "contain", "cover", "none", "scale-down", ""].includes(e30)
  },
  noSelect: {
    type: Boolean,
    default: () => false
  },
  referrerPolicy: {
    type: String,
    default: () => null
  },
  round: {
    type: [String, Number],
    default: () => 0
  },
  errSrc: {
    type: String,
    default: () => null
  },
  title: {
    type: String,
    default: () => null
  },
  onLoad: {
    type: Function,
    default: () => null
  },
  onError: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image/src/index2.js
var L2 = ["draggable", "referrer-policy", "alt", "title"];
var A4 = {
  key: 1,
  class: "f-image__error"
};
var B6 = { class: "f-image__error-text" };
var F3 = defineComponent({
  name: "FImage"
});
var q3 = defineComponent({
  ...F3,
  props: t15,
  setup(p9) {
    const o4 = p9, { isSuccess: u11, isShowNode: _26, loadAction: h15 } = g(o4), s27 = ref(
      null
    );
    onMounted(() => {
      h15(s27);
    });
    const y5 = computed(
      () => {
        const { fit: e30, noSelect: t36 } = o4;
        return [
          "f-image__img",
          {
            [`f-image__${e30}`]: e30,
            "f-image__select": t36
          }
        ];
      }
    ), a17 = computed(() => {
      const { width: e30, height: t36, round: k8 } = o4;
      return {
        "--f-image-width": s(e30),
        "--f-image-height": s(t36),
        "--f-image-border-radius": s(k8)
      };
    });
    return (e30, t36) => unref(u11) ? (openBlock(), createElementBlock("div", {
      key: 0,
      role: "img",
      class: normalizeClass(["f-image", { "f-image__block": e30.block }]),
      style: normalizeStyle(unref(a17))
    }, [
      withDirectives(createBaseVNode("img", {
        ref_key: "imageEl",
        ref: s27,
        src: "",
        class: normalizeClass(unref(y5)),
        style: normalizeStyle(unref(a17)),
        draggable: e30.draggable,
        "referrer-policy": e30.referrerPolicy,
        alt: e30.alt,
        title: e30.title
      }, null, 14, L2), [
        [vShow, unref(_26)]
      ])
    ], 6)) : (openBlock(), createElementBlock("div", A4, [
      renderSlot(e30.$slots, "error", {}, () => [
        createBaseVNode("span", B6, toDisplayString(e30.alt || "加载失败"), 1)
      ])
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image/index.js
var i20 = n2(q3);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/empty/src/index2.js
var F4 = { class: "f-empty__wrapper" };
var v = {
  key: 0,
  class: "f-empty__footer"
};
var C2 = defineComponent({
  name: "FEmpty"
});
var V4 = defineComponent({
  ...C2,
  props: t14,
  setup(c27) {
    const p9 = c27, f37 = computed(() => {
      const { contentColor: e30, contentSize: n17 } = p9;
      return {
        color: e30,
        fontSize: s(n17)
      };
    });
    return (e30, n17) => (openBlock(), createElementBlock("div", {
      class: "f-empty",
      style: normalizeStyle({ background: e30.background })
    }, [
      createBaseVNode("div", F4, [
        e30.$slots.default ? renderSlot(e30.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          e30.imageSrc ? (openBlock(), createBlock(unref(i20), {
            key: 0,
            src: e30.imageSrc,
            width: e30.imageSize
          }, null, 8, ["src", "width"])) : (openBlock(), createBlock(unref(i2), {
            key: 1,
            icon: unref(m6),
            size: e30.iconSize
          }, null, 8, ["icon", "size"]))
        ], 64))
      ]),
      createBaseVNode("span", {
        class: "f-empty__content",
        style: normalizeStyle(unref(f37))
      }, toDisplayString(e30.content), 5),
      e30.$slots.footer ? (openBlock(), createElementBlock("div", v, [
        renderSlot(e30.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/empty/index.js
var f12 = n2(V4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/expand-card/src/index3.js
var e12 = {
  imageList: {
    type: Array,
    default: () => []
  },
  round: {
    type: Boolean,
    default: () => false
  },
  expandIndex: {
    type: Number,
    default: () => 0
  },
  color: {
    type: String,
    default: () => "#fff"
  },
  width: {
    type: [String, Number],
    default: () => null
  },
  height: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/expand-card/src/index2.js
var I4 = ["onClick"];
var S5 = defineComponent({
  name: "FExpandCard"
});
var D4 = defineComponent({
  ...S5,
  props: e12,
  setup(m14) {
    const r25 = m14, i44 = ref(r25.expandIndex), _26 = (e30) => {
      i44.value = e30;
    }, f37 = (e30) => {
      if (e30 === i44.value)
        return "f-expand-card__active";
    }, x3 = computed(
      () => {
        const { round: e30 } = r25;
        return ["f-expand-card__item", { "f-expand-card__round": e30 }];
      }
    ), h15 = computed(() => {
      const { imageList: e30 } = r25;
      return e30.map(
        (t36) => p(t36) ? { url: t36 } : t36
      );
    }), g8 = computed(() => {
      const { width: e30, height: t36 } = r25;
      return {
        width: s(e30),
        height: s(t36)
      };
    });
    return (e30, t36) => (openBlock(), createElementBlock("div", {
      class: "f-expand-card",
      style: normalizeStyle(unref(g8))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(h15), (a17, s27) => (openBlock(), createElementBlock("div", {
        key: s27,
        class: normalizeClass([f37(s27), ...unref(x3)]),
        style: normalizeStyle({ backgroundImage: `url(${a17.url})` }),
        onClick: (B14) => _26(s27)
      }, [
        a17.text ? (openBlock(), createElementBlock("h3", {
          key: 0,
          class: "f-expand-card__title",
          style: normalizeStyle({ color: e30.color })
        }, toDisplayString(a17.text), 5)) : createCommentVNode("", true)
      ], 14, I4))), 128))
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/expand-card/index.js
var a6 = n2(D4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/footer/src/index3.js
var t16 = {
  height: {
    type: [String, Number],
    default: () => 60
  },
  padding: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/footer/src/index2.js
var u7 = defineComponent({
  name: "FFooter"
});
var k2 = defineComponent({
  ...u7,
  props: t16,
  setup(n17) {
    const s27 = n17, f37 = computed(() => {
      const { height: e30, padding: o4 } = s27;
      return {
        "--f-footer-height": s(e30),
        "--f-footer-padding": s(o4)
      };
    });
    return (e30, o4) => (openBlock(), createElementBlock("footer", {
      class: "f-footer",
      style: normalizeStyle(unref(f37))
    }, [
      renderSlot(e30.$slots, "default")
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/footer/index.js
var i21 = n2(k2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/header/src/index3.js
var t17 = {
  height: {
    type: [String, Number],
    default: () => 60
  },
  padding: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/header/src/index2.js
var h6 = defineComponent({
  name: "FHeader"
});
var k3 = defineComponent({
  ...h6,
  props: t17,
  setup(n17) {
    const a17 = n17, s27 = computed(() => {
      const { height: e30, padding: t36 } = a17;
      return {
        "--f-header-height": s(e30),
        "--f-header-padding": s(t36)
      };
    });
    return (e30, t36) => (openBlock(), createElementBlock("header", {
      class: "f-header",
      style: normalizeStyle(unref(s27))
    }, [
      renderSlot(e30.$slots, "default")
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/header/index.js
var f13 = n2(k3);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image-preview/src/index3.js
var t18 = {
  visible: {
    type: Boolean,
    default: () => false
  },
  imgList: {
    type: Array,
    default: () => []
  },
  modalClose: {
    type: Boolean,
    default: () => true
  },
  isCloseBtn: {
    type: Boolean,
    default: () => true
  },
  showIndex: {
    type: Number,
    default: () => 0,
    validator: (e30) => e30 >= 0
  },
  zIndex: {
    type: Number,
    default: () => 999,
    validator: (e30) => e30 >= 0
  },
  isOption: {
    type: Boolean,
    default: () => true
  },
  round: {
    type: String,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar/src/index3.js
var e13 = {
  round: {
    type: Boolean,
    default: () => false
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (l35) => ["large", "middle", "small", "mini"].includes(l35)
  },
  background: {
    type: String,
    default: () => null
  },
  textColor: {
    type: String,
    default: () => null
  },
  fixed: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: String,
    default: () => null
  },
  height: {
    type: String,
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar/src/index2.js
var z3 = defineComponent({
  name: "FToolbar"
});
var P = defineComponent({
  ...z3,
  props: e13,
  setup(a17) {
    const n17 = a17, i44 = useSlots(), d8 = computed(
      () => {
        const { size: o4, round: e30, fixed: t36 } = n17;
        return [
          "f-toolbar",
          {
            [`f-toolbar__${o4}`]: o4,
            "f-toolbar__round": e30,
            "f-toolbar__fixed": t36
          }
        ];
      }
    ), f37 = computed(() => {
      const { textColor: o4, background: e30, width: t36, height: r25 } = n17;
      return {
        color: o4,
        background: e30,
        width: t36,
        height: r25
      };
    }), m14 = (o4) => {
      if (!i44.default)
        return;
      const t36 = o4.composedPath().find(
        (u11) => u11.className === "f-toolbar-item"
      ), r25 = t36 ? t36.dataset.index : "";
      r2(n17.onClick, { evt: o4, index: r25 });
    };
    return (o4, e30) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(d8)),
      style: normalizeStyle(unref(f37)),
      onClick: m14
    }, [
      renderSlot(o4.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar/index.js
var i22 = n2(P);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar-item/src/index3.js
var t19 = {
  color: {
    type: String,
    default: () => null
  },
  icon: {
    type: Object,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => 16
  },
  index: {
    type: [String, Number],
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar-item/src/index2.js
var k4 = ["data-index"];
var C3 = defineComponent({
  name: "FToolbarItem"
});
var B7 = defineComponent({
  ...C3,
  props: t19,
  setup(r25) {
    const t36 = r25, l35 = (o4) => {
      r2(t36.onClick, o4);
    };
    return (o4, z10) => (openBlock(), createElementBlock("span", {
      class: "f-toolbar-item",
      "data-index": o4.index,
      style: normalizeStyle({ color: o4.color }),
      onClick: l35
    }, [
      o4.icon ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        size: o4.iconSize,
        icon: o4.icon
      }, null, 8, ["size", "icon"])) : createCommentVNode("", true),
      renderSlot(o4.$slots, "default")
    ], 12, k4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/toolbar-item/index.js
var i23 = n2(B7);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-layout-rows/index.js
var r12 = {};
var c16 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s13 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M1.75 2.75h12.5v10.5H1.75zM2 8h12"
}, null, -1);
var i24 = [
  s13
];
function _10(d8, l35) {
  return openBlock(), createElementBlock("svg", c16, i24);
}
var m7 = s3(r12, [["render", _10]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-rotate-anti-clockwise/index.js
var r13 = {};
var c17 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s14 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M4.75 5.25h-3m0 3.5c0 2.5 2.798 5.5 6.25 5.5a6.25 6.25 0 1 0 0-12.5c-3.75 0-6.25 3.5-6.25 3.5v-3.5"
}, null, -1);
var i25 = [
  s14
];
function _11(l35, d8) {
  return openBlock(), createElementBlock("svg", c17, i25);
}
var m8 = s3(r13, [["render", _11]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-rotate-clockwise/index.js
var r14 = {};
var c18 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s15 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M11.25 5.25h3m0 3.5c0 2.5-2.798 5.5-6.25 5.5a6.25 6.25 0 1 1 0-12.5c3.75 0 6.25 3.5 6.25 3.5v-3.5"
}, null, -1);
var i26 = [
  s15
];
function _12(l35, d8) {
  return openBlock(), createElementBlock("svg", c18, i26);
}
var m9 = s3(r14, [["render", _12]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-zoom-in/index.js
var n9 = {};
var c19 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s16 = createBaseVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5"
}, [
  createBaseVNode("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "4.75"
  }),
  createBaseVNode("path", { d: "M9.25 7.5h-3.5M7.5 5.75v3.5m3.75 2l3 3" })
], -1);
var i27 = [
  s16
];
function _13(d8, l35) {
  return openBlock(), createElementBlock("svg", c19, i27);
}
var a7 = s3(n9, [["render", _13]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-zoom-out/index.js
var c20 = {};
var n10 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s17 = createBaseVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5"
}, [
  createBaseVNode("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "4.75"
  }),
  createBaseVNode("path", { d: "M9.25 7.5h-3.5m5.5 3.75l3 3" })
], -1);
var i28 = [
  s17
];
function _14(d8, l35) {
  return openBlock(), createElementBlock("svg", n10, i28);
}
var a8 = s3(c20, [["render", _14]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-operation-img/index.js
var C4 = () => {
  const e30 = ref(1), o4 = ref(0), t36 = () => {
    r(e30.value, 1) >= 0.2 && (e30.value -= 0.2);
  }, r25 = () => {
    e30.value <= 10 && (e30.value += 0.2);
  };
  return {
    scale: e30,
    rotate: o4,
    smaller: t36,
    bigger: r25,
    scrollZoom: (l35) => {
      l35.preventDefault(), l35.deltaY > 1 ? t36() : r25();
    },
    recovery: () => {
      e30.value = 1, o4.value = 0;
    },
    rotateClockwise: () => {
      o4.value += 90;
    },
    rotateCounterClock: () => {
      o4.value -= 90;
    }
  };
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image-preview/src/index2.js
var K = ["src"];
var Q2 = defineComponent({
  name: "FImagePreview"
});
var be = defineComponent({
  ...Q2,
  props: t18,
  emits: {
    "update:visible": (c27) => b(c27)
  },
  setup(c27, { emit: x3 }) {
    const n17 = c27, {
      scale: F8,
      rotate: V8,
      smaller: h15,
      bigger: L8,
      scrollZoom: p9,
      recovery: f37,
      rotateClockwise: _26,
      rotateCounterClock: y5
    } = C4(), m14 = ref(n17.visible), t36 = ref(
      n17.showIndex > n17.imgList.length - 1 ? 0 : n17.showIndex
    ), v3 = () => {
      x3("update:visible", false), r2(n17.onClose);
    };
    watch(
      () => m14.value,
      (o4) => {
        o4 || v3();
      }
    ), watch(
      () => n17.visible,
      (o4) => {
        m14.value = o4;
      }
    );
    const B14 = () => {
      n17.imgList.forEach((i44) => {
        const l35 = new Image();
        l35.src = i44;
      });
    }, d8 = (o4) => {
      f37();
      const i44 = {
        next: () => {
          if (t36.value < n17.imgList.length - 1) {
            t36.value++;
            return;
          }
          t36.value = 0;
        },
        prev: () => {
          if (t36.value > 0) {
            t36.value--;
            return;
          }
          t36.value = n17.imgList.length - 1;
        }
      };
      i44[o4] && i44[o4]();
    }, R8 = (o4) => {
      if (!o4.index)
        return;
      const i44 = {
        1: () => h15(),
        2: () => L8(),
        3: () => f37(),
        4: () => _26(),
        5: () => y5()
      };
      i44[o4.index] && i44[o4.index]();
    };
    return (o4, i44) => (openBlock(), createElementBlock("div", {
      class: "f-image-preview",
      onMousewheel: i44[3] || (i44[3] = (...l35) => unref(p9) && unref(p9)(...l35))
    }, [
      createVNode(unref(f9), {
        visible: m14.value,
        "onUpdate:visible": i44[2] || (i44[2] = (l35) => m14.value = l35),
        open: B14
      }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            class: "f-image-preview__exhibition",
            draggable: "false",
            src: o4.imgList[t36.value],
            style: normalizeStyle({
              transform: `scale(${unref(F8)}) rotate(${unref(V8)}deg)`,
              borderRadius: o4.round
            })
          }, null, 12, K),
          o4.imgList.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(unref(i14), {
              class: "f-image-preview__next",
              circle: "",
              "before-icon": unref(a4),
              onClick: i44[0] || (i44[0] = (l35) => d8("next"))
            }, null, 8, ["before-icon"]),
            createVNode(unref(i14), {
              class: "f-image-preview__prev",
              circle: "",
              "before-icon": unref(m5),
              onClick: i44[1] || (i44[1] = (l35) => d8("prev"))
            }, null, 8, ["before-icon"])
          ], 64)) : createCommentVNode("", true),
          createVNode(unref(i14), {
            class: "f-image-preview__close",
            circle: "",
            "before-icon": unref(a),
            "on-click": v3
          }, null, 8, ["before-icon"]),
          o4.isOption ? (openBlock(), createBlock(unref(i22), {
            key: 1,
            class: "f-image-preview__option",
            round: "",
            "on-click": R8
          }, {
            default: withCtx(() => [
              createVNode(unref(i23), {
                icon: unref(a8),
                index: 1
              }, null, 8, ["icon"]),
              createVNode(unref(i23), {
                icon: unref(a7),
                index: 2
              }, null, 8, ["icon"]),
              createVNode(unref(i23), {
                icon: unref(m7),
                index: 3
              }, null, 8, ["icon"]),
              createVNode(unref(i23), {
                icon: unref(m9),
                index: 4
              }, null, 8, ["icon"]),
              createVNode(unref(i23), {
                icon: unref(m8),
                index: 5
              }, null, 8, ["icon"])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["visible"])
    ], 32));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/image-preview/index.js
var i29 = n2(be);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/layout/src/index3.js
var r15 = {
  direction: {
    type: String,
    default: () => "",
    validator: (t36) => ["horizontal", "vertical", ""].includes(t36)
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/layout/src/index2.js
var v2 = defineComponent({
  name: "FLayout"
});
var h7 = defineComponent({
  ...v2,
  props: r15,
  setup(a17) {
    const t36 = a17, e30 = useSlots(), l35 = computed(() => t36.direction === "vertical" ? true : t36.direction === "horizontal" ? false : e30 && e30.default ? e30.default().some((r25) => {
      const n17 = r25.type.name;
      return n17 === "FHeader" || n17 === "FFooter";
    }) : false);
    return (o4, r25) => (openBlock(), createElementBlock("section", {
      class: normalizeClass([
        "f-layout",
        {
          "f-layout__vertical": unref(l35)
        }
      ])
    }, [
      renderSlot(o4.$slots, "default")
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/layout/index.js
var i30 = n2(h7);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/link/src/index3.js
var t20 = {
  type: {
    type: String,
    default: () => "primary",
    validator: (e30) => ["default", "primary", "success", "danger", "warning"].includes(e30)
  },
  href: {
    type: String,
    default: () => null
  },
  size: {
    type: [String, Number],
    default: () => null
  },
  state: {
    type: String,
    default: () => null,
    validator: (e30) => ["line", "bag", ""].includes(e30)
  },
  prohibit: {
    type: Boolean,
    default: () => false
  },
  target: {
    type: String,
    default: () => null,
    validator: (e30) => ["_self", "_blank", "_parent", "_top", ""].includes(e30)
  },
  color: {
    type: String,
    default: () => null
  },
  noCopy: {
    type: Boolean,
    default: () => false
  },
  noLink: {
    type: Boolean,
    default: () => false
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/link/src/index2.js
var g4 = ["href", "target"];
var L3 = defineComponent({
  name: "FLink"
});
var E4 = defineComponent({
  ...L3,
  props: t20,
  setup(m14) {
    const o4 = m14, k8 = (e30) => {
      if (o4.prohibit || o4.noLink) {
        e30.preventDefault();
        return;
      }
      r2(o4.onClick, e30);
    }, u11 = computed(
      () => {
        const { type: e30, state: n17, prohibit: h15, noCopy: z10 } = o4;
        return [
          "f-link",
          {
            [`f-link__${n17}`]: n17,
            [`f-link__${e30}`]: e30,
            "f-link__prohibit": h15,
            "f-link__no-copy": z10
          }
        ];
      }
    ), d8 = computed(() => {
      const { size: e30, color: n17 } = o4;
      return {
        color: n17,
        fontSize: s(e30)
      };
    });
    return (e30, n17) => (openBlock(), createElementBlock("a", {
      role: "link",
      class: normalizeClass(unref(u11)),
      style: normalizeStyle(unref(d8)),
      href: e30.href,
      target: e30.target,
      onClick: k8
    }, [
      e30.$slots.beforeIcon || e30.beforeIcon ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        icon: e30.beforeIcon,
        size: e30.size || 16
      }, {
        default: withCtx(() => [
          renderSlot(e30.$slots, "beforeIcon")
        ]),
        _: 3
      }, 8, ["icon", "size"])) : createCommentVNode("", true),
      renderSlot(e30.$slots, "default"),
      e30.$slots.afterIcon || e30.afterIcon ? (openBlock(), createBlock(unref(i2), {
        key: 1,
        icon: e30.afterIcon,
        size: e30.size
      }, {
        default: withCtx(() => [
          renderSlot(e30.$slots, "afterIcon")
        ]),
        _: 3
      }, 8, ["icon", "size"])) : createCommentVNode("", true)
    ], 14, g4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/link/index.js
var f14 = n2(E4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list/src/index3.js
var l17 = {
  zebra: {
    type: Boolean,
    default: () => false
  },
  center: {
    type: Boolean,
    default: () => false
  },
  textColor: {
    type: String,
    default: () => null
  },
  borderColor: {
    type: String,
    default: () => null
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small"].includes(e30)
  },
  maxHeight: {
    type: [String, Number],
    default: () => null
  }
};
var t21 = Symbol("list-props-key");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list/src/index2.js
var g5 = {
  key: 0,
  class: "f-list__header"
};
var k5 = {
  key: 1,
  class: "f-list__footer"
};
var L4 = defineComponent({
  name: "FList"
});
var B8 = defineComponent({
  ...L4,
  props: l17,
  setup(f37) {
    const o4 = f37;
    provide(t21, o4);
    const m14 = computed(
      () => {
        const { maxHeight: e30, zebra: t36, center: p9, size: n17 } = o4;
        return [
          "f-list",
          {
            [`f-list__${n17}`]: n17,
            "f-list__scroll": e30,
            "f-list__zebra": t36,
            "f-list__center": p9
          }
        ];
      }
    ), d8 = computed(() => {
      const { maxHeight: e30, borderColor: t36 } = o4;
      return {
        borderColor: t36,
        maxHeight: s(e30)
      };
    });
    return (e30, t36) => (openBlock(), createElementBlock("ul", {
      role: "list",
      class: normalizeClass(unref(m14)),
      style: normalizeStyle(unref(d8))
    }, [
      e30.$slots.header ? (openBlock(), createElementBlock("header", g5, [
        renderSlot(e30.$slots, "header")
      ])) : createCommentVNode("", true),
      renderSlot(e30.$slots, "default"),
      e30.$slots.footer ? (openBlock(), createElementBlock("footer", k5, [
        renderSlot(e30.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list/index.js
var f15 = n2(B8);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list-item/src/index3.js
var t22 = {
  background: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list-item/src/index2.js
var S6 = { class: "f-list-item__li" };
var k6 = defineComponent({
  name: "FListItem"
});
var N2 = defineComponent({
  ...k6,
  props: t22,
  setup(s27) {
    const l35 = s27, e30 = inject(t21, void 0), n17 = computed(() => {
      const { background: t36, color: o4 } = l35;
      if (!e30)
        return { background: t36, color: o4 };
      const { textColor: c27, borderColor: i44 } = e30;
      return {
        background: t36,
        color: c27,
        borderColor: i44
      };
    });
    return (t36, o4) => (openBlock(), createElementBlock("div", {
      role: "listitem",
      class: "f-list-item",
      style: normalizeStyle(unref(n17))
    }, [
      createBaseVNode("li", S6, [
        renderSlot(t36.$slots, "default")
      ])
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/list-item/index.js
var f16 = n2(N2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-loading-bar/index.js
var m10 = () => ({
  start: () => {
    const o4 = h(d);
    render(o4, document.body);
  },
  finish: () => {
    const o4 = h(d, { type: "finish" });
    render(o4, document.body);
  },
  error: () => {
    const o4 = h(d, { type: "error" });
    render(o4, document.body);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading-bar/index.js
var p3 = r3(m10, "FLoadingBar");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/main/src/index3.js
var t23 = {
  padding: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/main/src/index2.js
var h8 = defineComponent({
  props: t23,
  setup(o4) {
    const t36 = o4, n17 = computed(() => {
      const { padding: e30 } = t36;
      return {
        "--f-main-padding": s(e30)
      };
    });
    return (e30, d8) => (openBlock(), createElementBlock("main", {
      role: "main",
      class: "f-main",
      style: normalizeStyle(unref(n17))
    }, [
      renderSlot(e30.$slots, "default")
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/main/index.js
var f17 = n2(h8);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/message/index.js
var { instance: o2 } = T("message");
var n11 = r3(o2, "FMessage");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/notification/index.js
var { instance: t24 } = T("notification");
var m11 = r3(t24, "FMessage");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/page-header/src/index3.js
var t25 = {
  icon: {
    type: Object,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => "16px"
  },
  backText: {
    type: String,
    default: () => "返回"
  },
  title: {
    type: String,
    default: () => null
  },
  titleBold: {
    type: Boolean,
    default: () => false
  },
  titleColor: {
    type: String,
    default: () => null
  },
  titleCenter: {
    type: Boolean,
    default: () => false
  },
  subtitle: {
    type: String,
    default: () => null
  },
  onBack: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-arrow-left/index.js
var n12 = {};
var c21 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s18 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "m7.25 3.75l-4.5 4.5l4.5 4.5m6-4.5H2.75"
}, null, -1);
var i31 = [
  s18
];
function l18(_26, d8) {
  return openBlock(), createElementBlock("svg", c21, i31);
}
var h9 = s3(n12, [["render", l18]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/page-header/src/index2.js
var B9 = { class: "f-page-header" };
var S7 = { class: "f-page-header__text" };
var V5 = {
  key: 0,
  class: "f-page-header__main-subtitle"
};
var N3 = defineComponent({
  name: "FPageHeader"
});
var A5 = defineComponent({
  ...N3,
  props: t25,
  setup(m14) {
    const c27 = m14, p9 = (e30) => {
      r2(c27.onBack, e30);
    };
    return (e30, $10) => (openBlock(), createElementBlock("header", B9, [
      createBaseVNode("div", {
        class: "f-page-header__left",
        onClick: p9
      }, [
        createVNode(unref(i2), {
          size: unref(s)(e30.iconSize)
        }, {
          default: withCtx(() => [
            renderSlot(e30.$slots, "icon", {}, () => [
              (openBlock(), createBlock(resolveDynamicComponent(e30.icon || unref(h9))))
            ])
          ]),
          _: 3
        }, 8, ["size"]),
        createBaseVNode("div", S7, toDisplayString(e30.backText), 1)
      ]),
      createBaseVNode("div", {
        class: normalizeClass([
          "f-page-header__main",
          { "f-page-header__main-center": e30.titleCenter }
        ])
      }, [
        createBaseVNode("div", {
          style: normalizeStyle({ color: e30.titleColor }),
          class: normalizeClass([
            "f-page-header__main-title",
            { "f-page-header__main-title-bold": e30.titleBold }
          ])
        }, [
          renderSlot(e30.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(e30.title), 1)
          ])
        ], 6),
        e30.subtitle || e30.$slots.subtitle ? (openBlock(), createElementBlock("div", V5, [
          renderSlot(e30.$slots, "subtitle", {}, () => [
            createTextVNode(toDisplayString(e30.subtitle), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 2)
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/page-header/index.js
var a9 = n2(A5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/progress/src/index3.js
var t26 = {
  percentage: {
    type: Number,
    default: () => 10,
    validator: (e30) => e30 >= 0 && e30 <= 100
  },
  type: {
    type: String,
    default: () => "primary",
    validator: (e30) => ["primary", "success", "danger", "warning"].includes(
      e30
    )
  },
  square: {
    type: Boolean,
    default: () => false
  },
  linear: {
    type: Boolean,
    default: () => false
  },
  showText: {
    type: Boolean,
    default: () => true
  },
  textColor: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  background: {
    type: String,
    default: () => null
  },
  width: {
    type: [String, Number],
    default: () => null
  },
  height: {
    type: [String, Number],
    default: () => "6px"
  },
  stripe: {
    type: Boolean,
    default: () => false
  },
  textInside: {
    type: Boolean,
    default: () => false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/progress/src/index2.js
var C5 = ["aria-value"];
var R2 = {
  key: 0,
  class: "f-progress__text"
};
var z4 = defineComponent({
  name: "FProgress"
});
var F5 = defineComponent({
  ...z4,
  props: t26,
  setup(y5) {
    const o4 = y5, t36 = ref(false), p9 = ref(
      null
    ), v3 = computed(
      () => {
        const { background: e30, height: r25, square: a17 } = o4;
        return {
          height: s(r25),
          background: e30,
          borderRadius: a17 ? "0px" : "100px"
        };
      }
    ), k8 = computed(
      () => {
        const { percentage: e30, color: r25, square: a17 } = o4;
        return {
          width: `${e30}%`,
          background: r25,
          borderRadius: a17 ? "0px" : "100px"
        };
      }
    ), w8 = () => t36.value = p9.value.clientHeight >= 18 && o4.textInside;
    return onMounted(() => {
      w8();
    }), (e30, r25) => (openBlock(), createElementBlock("div", {
      role: "progressbar",
      class: normalizeClass(["f-progress", { "f-progress__liner": e30.linear }]),
      style: normalizeStyle({ width: unref(s)(e30.width) }),
      "aria-value": e30.percentage,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }, [
      createBaseVNode("div", {
        class: "f-progress__bar",
        style: normalizeStyle(unref(v3))
      }, [
        createBaseVNode("div", {
          ref_key: "fillRef",
          ref: p9,
          class: normalizeClass([
            "f-progress__fill",
            {
              [`f-progress__fill-${e30.type}`]: e30.type,
              "f-progress__stripe": e30.stripe
            }
          ]),
          style: normalizeStyle(unref(k8))
        }, [
          t36.value && e30.showText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "f-progress__percentage",
            style: normalizeStyle({ color: e30.textColor })
          }, toDisplayString(e30.percentage) + "% ", 5)) : createCommentVNode("", true)
        ], 6)
      ], 4),
      !t36.value && e30.showText ? (openBlock(), createElementBlock("div", R2, toDisplayString(e30.percentage) + "% ", 1)) : createCommentVNode("", true)
    ], 14, C5));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/progress/index.js
var i32 = n2(F5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio/src/index3.js
var e14 = {
  disabled: {
    type: Boolean,
    default: () => false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null
  },
  name: {
    type: String,
    default: () => "f-radio"
  },
  label: {
    type: [String, Number, Boolean],
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio-group/src/index3.js
var l19 = {
  disabled: {
    type: Boolean,
    default: () => false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null
  },
  vertical: {
    type: Boolean,
    default: () => false
  },
  columnGap: {
    type: [String, Number],
    default: () => null
  },
  rowGap: {
    type: [String, Number],
    default: () => null
  },
  border: {
    type: Boolean,
    default: () => false
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  onChange: {
    type: Function,
    default: () => null
  }
};
var t27 = Symbol(
  "radio-group-props-key"
);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio/src/index2.js
var O4 = ["value", "disabled", "name"];
var T2 = {
  key: 0,
  class: "f-radio__circle"
};
var I5 = { class: "f-radio__text" };
var U5 = defineComponent({
  name: "FRadio"
});
var G3 = defineComponent({
  ...U5,
  props: e14,
  emits: {
    "update:modelValue": (o4) => p(o4) || c(o4) || b(o4)
  },
  setup(o4, { emit: p9 }) {
    const l35 = o4, a17 = inject(t27, void 0), t36 = computed({
      get() {
        return a17 && a17.modelValue || l35.modelValue;
      },
      set(e30) {
        if (a17 && !a17.disabled) {
          a17.changeEvent(e30);
          return;
        }
        l35.disabled || (p9("update:modelValue", e30), r2(l35.onChange, e30));
      }
    }), _26 = computed(
      () => {
        const { disabled: e30 } = l35;
        return [
          "f-radio",
          {
            "f-radio__checked": t36.value === l35.label,
            "f-radio__margin": !a17,
            "f-radio__disabled": e30 || a17 && a17.disabled
          }
        ];
      }
    );
    return (e30, r25) => {
      var i44;
      return openBlock(), createElementBlock("label", {
        role: "radio",
        "aria-checked": "false",
        tabindex: "0",
        "aria-labelledby": "q25_radio1-label",
        "data-value": "True",
        class: normalizeClass(unref(_26))
      }, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": r25[0] || (r25[0] = (f37) => isRef(t36) ? t36.value = f37 : null),
          hidden: "",
          type: "radio",
          value: e30.label,
          disabled: e30.disabled,
          name: e30.name
        }, null, 8, O4), [
          [vModelRadio, unref(t36)]
        ]),
        (i44 = unref(a17)) != null && i44.border ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", T2)),
        createBaseVNode("span", I5, [
          renderSlot(e30.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e30.label), 1)
          ])
        ])
      ], 2);
    };
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio/index.js
var f18 = n2(G3);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio-group/src/index2.js
var B10 = defineComponent({
  name: "FRadioGroup"
});
var $6 = defineComponent({
  ...B10,
  props: l19,
  emits: {
    "update:modelValue": (r25) => p(r25) || c(r25) || b(r25)
  },
  setup(r25, { emit: c27 }) {
    const t36 = r25, l35 = (o4) => {
      c27("update:modelValue", o4), r2(t36.onChange, o4);
    }, u11 = reactive({
      ...toRefs(t36),
      changeEvent: l35
    });
    provide(t27, u11);
    const d8 = computed(
      () => {
        const { vertical: o4, border: e30, size: n17 } = t36;
        return [
          "f-radio-group",
          {
            "f-radio-group__vertical": o4,
            "f-radio-group__border": e30,
            [`f-radio-group__${n17}`]: n17 && e30
          }
        ];
      }
    ), m14 = computed(() => {
      const { columnGap: o4, rowGap: e30 } = t36;
      return {
        columnGap: s(o4),
        rowGap: s(e30)
      };
    });
    return (o4, e30) => (openBlock(), createElementBlock("div", {
      role: "radiogroup",
      class: normalizeClass(unref(d8)),
      style: normalizeStyle(unref(m14))
    }, [
      renderSlot(o4.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/radio-group/index.js
var p4 = n2($6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/rate/src/index3.js
var t28 = {
  modelValue: {
    type: Number,
    default: () => 0,
    validator: (e30) => e30 >= 0
  },
  max: {
    type: Number,
    default: () => 5,
    validator: (e30) => e30 > 0
  },
  effectColor: {
    type: String,
    default: () => "#fcc202"
  },
  invalidColor: {
    type: String,
    default: () => "#eef"
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: Object,
    default: () => null
  },
  size: {
    type: [String, Number],
    default: () => "25px"
  },
  textShow: {
    type: Boolean,
    default: () => false
  },
  textColor: {
    type: String,
    default: () => null
  },
  textArr: {
    type: Array,
    default: () => ["极差", "失望", "一般", "不错", "很棒"]
  },
  textSize: {
    type: [String, Number],
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-star-b/index.js
var l20 = {};
var q4 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var r16 = createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 18.275l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Z"
}, null, -1);
var n13 = [
  r16
];
function _15(s27, i44) {
  return openBlock(), createElementBlock("svg", q4, n13);
}
var f19 = s3(l20, [["render", _15]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/rate/src/index2.js
var $7 = {
  class: "f-rate",
  role: "slider"
};
var b7 = { class: "f-rate__list" };
var A6 = ["onMouseover", "onClick"];
var D5 = defineComponent({
  name: "FRate"
});
var O5 = defineComponent({
  ...D5,
  props: t28,
  emits: {
    "update:modelValue": (n17) => n17
  },
  setup(n17, { emit: i44 }) {
    const o4 = n17, t36 = ref(o4.modelValue), c27 = (e30) => {
      o4.readonly || (t36.value = e30);
    }, m14 = () => {
      o4.readonly || (t36.value = o4.modelValue);
    }, d8 = (e30) => {
      o4.readonly || (t36.value = e30, i44("update:modelValue", e30), r2(o4.onChange, e30));
    };
    watch(
      () => o4.modelValue,
      () => {
        t36.value = o4.modelValue;
      }
    );
    const f37 = computed(() => o4.textArr[unref(t36) - 1]);
    return (e30, L8) => (openBlock(), createElementBlock("div", $7, [
      createBaseVNode("div", b7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e30.max, (P4, l35) => (openBlock(), createElementBlock("div", {
          key: l35,
          class: normalizeClass(["f-rate__star", { "f-rate__star-readonly": e30.readonly }]),
          onMouseout: m14,
          onMouseover: (p9) => c27(l35 + 1),
          onClick: (p9) => d8(l35 + 1)
        }, [
          createVNode(unref(i2), {
            size: e30.size,
            icon: e30.icon || unref(f19),
            color: t36.value > l35 ? e30.effectColor : e30.invalidColor
          }, null, 8, ["size", "icon", "color"])
        ], 42, A6))), 128))
      ]),
      e30.textShow ? (openBlock(), createBlock(unref(i15), {
        key: 0,
        size: e30.textSize,
        color: e30.textColor
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(f37)), 1)
        ]),
        _: 1
      }, 8, ["size", "color"])) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/rate/index.js
var i33 = n2(O5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/ripple/src/index3.js
var t29 = {
  ripplesColor: {
    type: String,
    default: () => null
  },
  duration: {
    type: Number,
    default: () => 400,
    validator: (e30) => e30 > 0
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["default", "primary", "success", "danger", "warning"].includes(e30)
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  startOpacity: {
    type: Number,
    default: () => 0.5
  },
  endOpacity: {
    type: Number,
    default: () => 0
  },
  noSelect: {
    type: Boolean,
    default: () => true
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/ripple/src/index2.js
var z5 = defineComponent({
  name: "Ripple"
});
var w3 = defineComponent({
  ...z5,
  props: t29,
  setup(n17) {
    const p9 = n17, l35 = ref(
      null
    ), i44 = computed(() => {
      const { startOpacity: e30, endOpacity: t36 } = p9;
      return {
        "--f-ripple-start-opacity": e30,
        "--f-ripple-end-opacity": t36
      };
    }), a17 = computed(
      () => {
        const { noSelect: e30 } = p9;
        return ["f-ripple", { "f-ripple__select": e30 }];
      }
    ), c27 = (e30) => {
      const { type: t36, ripplesColor: f37, duration: u11, disabled: m14 } = toRefs(p9);
      if (m14.value)
        return;
      new l11(
        e30,
        l35.value,
        {
          duration: u11.value,
          component: "f-ripple",
          className: "f-ripple__animation",
          type: t36.value,
          ripplesColor: f37.value
        }
      ).clickRipples();
    };
    return (e30, t36) => (openBlock(), createElementBlock("div", {
      ref_key: "FRipple",
      ref: l35,
      class: normalizeClass(unref(a17)),
      style: normalizeStyle(unref(i44)),
      onClick: c27
    }, [
      renderSlot(e30.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/ripple/index.js
var i34 = n2(w3);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/skeleton/src/index3.js
var l21 = {
  round: {
    type: Boolean,
    default: () => false
  },
  animated: {
    type: Boolean,
    default: () => false
  },
  rows: {
    type: Number,
    default: () => 1
  },
  loading: {
    type: Boolean,
    default: () => false
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/skeleton/src/index2.js
var S8 = defineComponent({
  name: "FSkeleton"
});
var B11 = defineComponent({
  ...S8,
  props: l21,
  setup(c27) {
    const n17 = c27, d8 = computed(
      () => {
        const { round: e30, animated: o4, size: t36 } = n17;
        return [
          "f-skeleton",
          {
            "f-skeleton__round": e30,
            "f-skeleton__animated": o4,
            [`f-skeleton__${t36}`]: t36
          }
        ];
      }
    ), f37 = computed(() => useSlots().default ? n17.loading === true : true);
    return (e30, o4) => unref(f37) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e30.rows, (t36) => (openBlock(), createElementBlock("div", {
      key: t36,
      class: normalizeClass(unref(d8))
    }, null, 2))), 128)) : renderSlot(e30.$slots, "default", { key: 1 });
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/skeleton/index.js
var f20 = n2(B11);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/space/src/index3.js
var l22 = {
  vertical: {
    type: Boolean,
    default: () => false
  },
  wrap: {
    type: Boolean,
    default: () => true
  },
  spacing: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  rowGap: {
    type: String,
    default: () => null
  },
  columnGap: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/space/src/index2.js
var k7 = defineComponent({
  name: "FSpace"
});
var C6 = defineComponent({
  ...k7,
  props: l22,
  setup(n17) {
    const s27 = n17, p9 = computed(
      () => {
        const { wrap: e30, vertical: t36, spacing: o4 } = s27;
        return [
          "f-space",
          {
            [`f-space__${o4}`]: o4,
            "f-space__wrap": e30,
            "f-space__vertical": t36
          }
        ];
      }
    ), l35 = computed(() => {
      const { rowGap: e30, columnGap: t36 } = s27;
      return { rowGap: e30, columnGap: t36 };
    });
    return (e30, t36) => e30.$slots.default ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(unref(p9)),
      style: normalizeStyle(unref(l35))
    }, [
      renderSlot(e30.$slots, "default")
    ], 6)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/space/index.js
var f21 = n2(C6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/sticky-card/src/index3.js
var e15 = {
  open: {
    type: Boolean,
    default: () => false
  },
  background: {
    type: String,
    default: () => null
  },
  openText: {
    type: String,
    default: () => "关闭"
  },
  closeText: {
    type: String,
    default: () => "开启"
  },
  openHeight: {
    type: [String, Number],
    default: () => "800px"
  },
  borderColor: {
    type: String,
    default: () => "#e5e5e5"
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/sticky-card/src/index2.js
var $8 = {
  key: 0,
  class: "f-sticky-card__source"
};
var z6 = { class: "f-sticky-card__option-text" };
var H2 = defineComponent({
  name: "FStickyCard"
});
var V6 = defineComponent({
  ...H2,
  props: e15,
  setup(y5) {
    const s27 = y5, o4 = ref(s27.open), t36 = ref(null), h15 = () => {
      if (o4.value)
        t36.value.style.height = "0", o4.value = false, r2(s27.onClose, o4.value);
      else {
        t36.value.style.height = "auto";
        const e30 = t36.value.offsetHeight;
        t36.value.style.height = "0", t36.value.offsetHeight, t36.value.style.transition = "0.33s", t36.value.style.height = e30 + "px", o4.value = true, r2(s27.onOpen, o4.value);
      }
    }, m14 = computed(() => {
      const { openText: e30, closeText: n17 } = s27;
      return `${unref(o4) ? e30 : n17}`;
    }), _26 = computed(() => {
      const { background: e30, openHeight: n17, borderColor: k8 } = s27;
      return {
        "--sticky-card-content-background": e30,
        "--sticky-card-border-color": k8,
        "--sticky-card-max-height": s(n17)
      };
    });
    return (e30, n17) => (openBlock(), createElementBlock("div", {
      class: "f-sticky-card",
      style: normalizeStyle(unref(_26))
    }, [
      e30.$slots.source ? (openBlock(), createElementBlock("div", $8, [
        renderSlot(e30.$slots, "source")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        ref_key: "content",
        ref: t36,
        class: "f-sticky-card__box"
      }, [
        renderSlot(e30.$slots, "default")
      ], 512),
      createBaseVNode("div", {
        class: normalizeClass([
          "f-sticky-card__option",
          { "f-sticky-card__option-open": o4.value }
        ]),
        onClick: h15
      }, [
        createBaseVNode("span", z6, toDisplayString(unref(m14)), 1)
      ], 2)
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/sticky-card/index.js
var f22 = n2(V6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/switch/src/index3.js
var l23 = {
  modelValue: {
    type: Boolean,
    default: () => false,
    required: true
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: Object,
    default: () => null
  },
  closeColor: {
    type: String,
    default: () => null
  },
  openColor: {
    type: String,
    default: () => null
  },
  openText: {
    type: String,
    default: () => null
  },
  closeText: {
    type: String,
    default: () => null
  },
  square: {
    type: Boolean,
    default: () => false
  },
  onChange: {
    type: Function,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/switch/src/index2.js
var z7 = defineComponent({
  name: "FSwitch"
});
var B12 = defineComponent({
  ...z7,
  props: l23,
  emits: {
    "update:modelValue": (i44) => String(i44)
  },
  setup(i44, { emit: h15 }) {
    const o4 = i44, _26 = () => {
      o4.disabled || (h15("update:modelValue", !o4.modelValue), r2(o4.onChange, !o4.modelValue));
    }, w8 = computed(
      () => {
        const { modelValue: e30, closeColor: l35, openColor: r25, size: S13 } = o4;
        return {
          right: e30 ? "0px" : {
            large: "30px",
            middle: "25px",
            small: "20px",
            mini: "15px"
          }[S13],
          borderColor: e30 ? r25 : l35
        };
      }
    ), C11 = computed(
      () => {
        const { size: e30, modelValue: l35, square: r25 } = o4;
        return [
          "f-switch__input",
          {
            [`f-switch__${e30}`]: e30,
            "f-switch__close": !l35,
            "f-switch__square": r25
          }
        ];
      }
    );
    return (e30, l35) => (openBlock(), createElementBlock("div", {
      role: "switch",
      class: normalizeClass(["f-switch", { "f-switch__disabled": e30.disabled }])
    }, [
      e30.closeText ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([
          "f-switch__right-text",
          { "f-switch__text-active": !e30.modelValue }
        ])
      }, toDisplayString(e30.closeText), 3)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(unref(C11)),
        style: normalizeStyle({ background: e30.modelValue ? e30.openColor : e30.closeColor }),
        onClick: _26
      }, [
        createBaseVNode("span", {
          class: "f-switch__roll",
          style: normalizeStyle(unref(w8))
        }, [
          e30.icon ? (openBlock(), createBlock(unref(i2), {
            key: 0,
            icon: e30.icon,
            size: e30.iconSize
          }, null, 8, ["icon", "size"])) : createCommentVNode("", true)
        ], 4)
      ], 6),
      e30.openText ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["f-switch__left-text", { "f-switch__text-active": e30.modelValue }])
      }, toDisplayString(e30.openText), 3)) : createCommentVNode("", true)
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/switch/index.js
var f23 = n2(B12);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tag/src/index3.js
var l24 = {
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["default", "primary", "success", "danger", "warning"].includes(e30)
  },
  close: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  background: {
    type: String,
    default: () => null
  },
  color: {
    type: String,
    default: () => null
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  simple: {
    type: Boolean,
    default: () => false
  },
  block: {
    type: Boolean,
    default: () => false
  },
  line: {
    type: Boolean,
    default: () => false
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tag/src/index2.js
var T3 = defineComponent({
  name: "FTag"
});
var V7 = defineComponent({
  ...T3,
  props: l24,
  setup(p9) {
    const s27 = p9, f37 = ref(true), d8 = computed(
      () => {
        const { simple: e30, type: l35, size: c27, block: k8, round: g8, line: C11 } = s27;
        return [
          "f-tag",
          {
            [`f-tag__${l35}`]: l35,
            [`f-tag__${c27}`]: c27,
            "f-tag__simple": e30,
            "f-tag__block": k8,
            "f-tag__round": g8,
            "f-tag__line": C11
          }
        ];
      }
    ), _26 = (e30) => {
      f37.value = false, r2(s27.onClose, e30);
    };
    return (e30, l35) => (openBlock(), createBlock(Transition, { name: "f-tag" }, {
      default: withCtx(() => [
        f37.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(d8)),
          style: normalizeStyle({ background: e30.background, color: e30.color })
        }, [
          e30.beforeIcon ? (openBlock(), createBlock(unref(i2), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(e30.beforeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          renderSlot(e30.$slots, "default"),
          e30.afterIcon ? (openBlock(), createBlock(unref(i2), { key: 1 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(e30.afterIcon)))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e30.close ? (openBlock(), createBlock(unref(i4), {
            key: 2,
            "no-hover": "",
            size: 14,
            onClick: withModifiers(_26, ["stop"])
          }, null, 8, ["onClick"])) : createCommentVNode("", true)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tag/index.js
var i35 = n2(V7);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tooltip/src/index3.js
var e16 = {
  content: {
    type: String,
    default: () => null
  },
  position: {
    type: String,
    default: () => "bottom",
    validator: (t36) => ["top", "bottom", "right", "left"].includes(t36)
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  state: {
    type: String,
    default: () => "hover",
    validator: (t36) => ["hover", "active", "always"].includes(t36)
  },
  noArrow: {
    type: Boolean,
    default: () => false
  },
  bold: {
    type: Boolean,
    default: () => false
  },
  bright: {
    type: Boolean,
    default: () => false
  },
  background: {
    type: String,
    default: () => null
  },
  fontColor: {
    type: String,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tooltip/src/index2.js
var y3 = ["f-content"];
var C7 = defineComponent({
  name: "FTooltip"
});
var z8 = defineComponent({
  ...C7,
  props: e16,
  setup(s27) {
    const e30 = s27, i44 = computed(
      () => {
        const { position: o4, state: t36, disabled: c27, bold: f37, noArrow: a17, bright: _26 } = e30;
        return [
          "f-tooltip",
          {
            [`f-tooltip__${o4}`]: o4,
            [`f-tooltip__${t36}`]: t36,
            "f-tooltip__disabled ": c27,
            "f-tooltip__bold": f37,
            "f-tooltip__no-arrow": a17,
            "f-tooltip__bright": _26
          }
        ];
      }
    ), p9 = computed(() => {
      const { background: o4, fontColor: t36 } = e30;
      return {
        "--f-tooltip-background": o4,
        "--f-tooltip-font-color": t36
      };
    });
    return (o4, t36) => o4.$slots.default ? (openBlock(), createElementBlock("div", {
      key: 0,
      "f-content": o4.content,
      class: normalizeClass(unref(i44)),
      style: normalizeStyle(unref(p9))
    }, [
      renderSlot(o4.$slots, "default")
    ], 14, y3)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tooltip/index.js
var p5 = n2(z8);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tree/src/index3.js
var t30 = {
  data: {
    type: Array,
    default: () => []
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/tree/index.js
var h10 = (s27) => {
  const n17 = [];
  return s27.forEach((r25) => {
    const e30 = {
      label: r25.label,
      level: r25.level,
      index: r25.index,
      show: r25.show
    };
    n17.push(e30), r25.children && n17.push(...h10(r25.children));
  }), n17;
};
var d5 = (s27) => {
  if (!Array.isArray(s27))
    return [];
  const n17 = (r25, e30 = 0) => (e30++, r25.map((l35, c27) => {
    l35.level = e30, l35.index = c27, l35.show = false;
    const o4 = l35.children;
    return o4 && o4.length && n17(o4, e30), l35;
  }));
  return n17(s27);
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tree/src/index2.js
var C8 = { class: "f-tree" };
var F6 = ["onClick"];
var L5 = defineComponent({
  name: "FTree"
});
var S9 = defineComponent({
  ...L5,
  props: t30,
  setup(s27) {
    const c27 = s27, d8 = computed(
      () => h10(d5(c27.data))
    ), p9 = (r25, n17) => {
      console.log(r25, n17);
    };
    return (r25, n17) => (openBlock(), createElementBlock("div", C8, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(d8), (e30, l35) => (openBlock(), createElementBlock("div", {
        key: l35,
        class: "f-tree__data",
        onClick: (b10) => p9(e30, l35)
      }, [
        createBaseVNode("div", {
          class: "f-tree__label",
          style: normalizeStyle({ paddingLeft: 25 * (e30.level - 1) + "px" })
        }, toDisplayString(e30.label), 5)
      ], 8, F6))), 128))
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tree/index.js
var f24 = n2(S9);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/watermark/src/index3.js
var e17 = {
  content: {
    type: String,
    default: () => null
  },
  width: {
    type: Number,
    default: () => 280
  },
  height: {
    type: Number,
    default: () => 200
  },
  fontSize: {
    type: [String, Number],
    default: () => "30px"
  },
  fontColor: {
    type: String,
    default: () => "#333"
  },
  image: {
    type: String,
    default: () => null
  },
  block: {
    type: Boolean,
    default: () => false
  },
  zIndex: {
    type: Number,
    default: () => 100
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/create-watermark/index.js
var l25 = (t36) => {
  const i44 = document.createElement("canvas"), n17 = window.devicePixelRatio || 1;
  i44.width = t36.width * n17, i44.height = t36.height * n17, i44.style.width = t36.width + "px", i44.style.height = t36.height + "px";
  const e30 = i44.getContext(
    "2d"
  );
  return e30 && (e30.rotate(-8 * Math.PI / 100), e30.font = `${s(t36.fontSize)} serif`, e30.fillStyle = t36.fontColor, e30.textAlign = "left", e30.textBaseline = "middle", e30.fillText(t36.content, t36.width / 20, t36.height)), i44.toDataURL("image/png");
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/watermark/src/index2.js
var b8 = defineComponent({
  name: "FWatermark"
});
var y4 = defineComponent({
  ...b8,
  props: e17,
  setup(m14) {
    const r25 = m14, o4 = ref(
      null
    ), l35 = computed(
      () => {
        const e30 = c8(r25, ["content", "width", "height", "fontSize", "fontColor"]);
        return {
          backgroundImage: `url(${l25(e30)})`
        };
      }
    ), s27 = computed(
      () => {
        const { image: e30, width: t36, height: i44 } = r25;
        return {
          backgroundImage: `url(${e30})`,
          backgroundSize: `${t36}px ${i44}px`
        };
      }
    );
    return onMounted(() => {
      o4.value = r25.image ? s27.value : l35.value;
    }), (e30, t36) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["f-watermark", { "f-watermark__block": e30.block }]),
      style: normalizeStyle([o4.value, { zIndex: e30.zIndex }])
    }, [
      renderSlot(e30.$slots, "default")
    ], 6));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/watermark/index.js
var f25 = n2(y4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input/src/index3.js
var l26 = {
  modelValue: {
    type: [String, Number],
    default: () => null
  },
  type: {
    type: String,
    default: () => "text",
    validator: (e30) => ["text", "password", "number"].includes(e30)
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  max: {
    type: Number,
    default: () => null
  },
  min: {
    type: Number,
    default: () => null
  },
  maxLength: {
    type: Number,
    default: () => null,
    validator: (e30) => e30 >= 0
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  name: {
    type: String,
    default: () => "f-input"
  },
  placeholder: {
    type: String,
    default: () => null
  },
  clear: {
    type: Boolean,
    default: () => false
  },
  search: {
    type: Boolean,
    default: () => false
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  showPassword: {
    type: Boolean,
    default: () => false
  },
  enterSearch: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: Object,
    default: () => null
  },
  onSearch: {
    type: Function,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onBlur: {
    type: Function,
    default: () => null
  },
  onFocus: {
    type: Function,
    default: () => null
  },
  onInput: {
    type: Function,
    default: () => null
  },
  onEnter: {
    type: Function,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/swap/src/index3.js
var t31 = {
  modelValue: {
    type: Boolean,
    default: () => false,
    require: true
  },
  size: {
    type: [String, Number],
    default: () => 40
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e30) => ["sound", "swap", "default"].includes(e30)
  },
  iconOn: {
    type: Object,
    default: () => null
  },
  iconOff: {
    type: Object,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/swap/src/index2.js
var w4 = defineComponent({
  name: "FSwap"
});
var S10 = defineComponent({
  ...w4,
  props: t31,
  emits: {
    "update:modelValue": (n17) => String(n17)
  },
  setup(n17, { emit: r25 }) {
    const o4 = n17, s27 = () => {
      r25("update:modelValue", !o4.modelValue), r2(o4.onChange, !o4.modelValue);
    }, p9 = computed(
      () => {
        const { modelValue: e30, type: a17 } = o4;
        return [
          "f-swap",
          e30 ? `f-swap__${a17}-on` : `f-swap__${a17}-off`
        ];
      }
    );
    return (e30, a17) => (openBlock(), createElementBlock("div", {
      role: "switch",
      class: normalizeClass(unref(p9)),
      onClick: s27
    }, [
      createVNode(unref(i2), {
        icon: e30.modelValue ? e30.iconOn : e30.iconOff,
        size: e30.size
      }, null, 8, ["icon", "size"])
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/swap/index.js
var f26 = n2(S10);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-eye-off-outline/index.js
var n14 = {};
var r17 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var _16 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
}, null, -1);
var l27 = [
  _16
];
function s19(i44, a17) {
  return openBlock(), createElementBlock("svg", r17, l27);
}
var h11 = s3(n14, [["render", s19]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-eye-outline/index.js
var n15 = {};
var r18 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var _17 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
}, null, -1);
var a10 = [
  _17
];
function s20(i44, l35) {
  return openBlock(), createElementBlock("svg", r18, a10);
}
var h12 = s3(n15, [["render", s20]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_hooks/use-update-input/index.js
var g6 = (e30, t36) => ({
  onInput: (n17) => {
    t36(
      "update:modelValue",
      e30.type === "number" ? Number(n17.target.value) : n17.target.value
    ), r2(e30.onInput, n17.target.value);
  },
  onChange: (n17) => {
    r2(e30.onChange, n17.target.value);
  },
  onClear: () => {
    e30.disabled || t36("update:modelValue", e30.type === "number" ? 0 : "");
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input/src/index2.js
var H3 = ["type", "max", "min", "maxlength", "value", "disabled", "readonly", "autofocus", "name", "placeholder", "onKeyup"];
var J2 = createTextVNode("搜索");
var M3 = defineComponent({
  name: "FInput"
});
var ue = defineComponent({
  ...M3,
  props: l26,
  emits: {
    "update:modelValue": (u11) => p(u11) || c(u11)
  },
  setup(u11, { emit: V8 }) {
    const l35 = u11, p9 = ref(l35.type), s27 = ref(false), { onInput: k8, onClear: I7, onChange: F8 } = g6(
      c8(l35, [
        "onChange",
        "onInput",
        "disabled",
        "type"
      ]),
      V8
    ), g8 = (e30) => {
      k8(e30);
    }, z10 = (e30) => {
      F8(e30);
    }, d8 = (e30) => {
      r2(l35.onSearch, { evt: e30, value: l35.modelValue });
    }, b10 = (e30) => {
      const { search: n17, enterSearch: a17, onEnter: S13 } = toRefs(l35);
      n17.value && a17.value && d8(e30), r2(S13.value, e30);
    }, B14 = () => {
      if (s27.value) {
        p9.value = "text", s27.value = true;
        return;
      }
      p9.value = "password", s27.value = false;
    };
    return (e30, n17) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["f-input", { [`f-input__${e30.size}`]: e30.size }])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["f-input__wrapper", { "f-input__disabled": e30.disabled }])
      }, [
        e30.icon ? (openBlock(), createBlock(unref(i2), {
          key: 0,
          class: "f-input__icon",
          icon: e30.icon,
          size: 13
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        createBaseVNode("input", {
          class: "f-input__input",
          type: p9.value,
          max: e30.max,
          min: e30.min,
          maxlength: e30.maxLength,
          value: e30.modelValue,
          disabled: e30.disabled,
          readonly: e30.readonly,
          autofocus: e30.autofocus,
          name: e30.name,
          placeholder: e30.placeholder,
          onInput: g8,
          onChange: z10,
          onKeyup: withKeys(b10, ["enter"]),
          onBlur: n17[0] || (n17[0] = (...a17) => e30.onBlur && e30.onBlur(...a17)),
          onFocus: n17[1] || (n17[1] = (...a17) => e30.onFocus && e30.onFocus(...a17))
        }, null, 40, H3),
        e30.clear ? (openBlock(), createBlock(unref(i2), {
          key: 1,
          class: "f-input__clear-btn",
          icon: unref(a),
          size: 14,
          onClick: unref(I7)
        }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true),
        e30.afterIcon ? (openBlock(), createBlock(unref(i2), {
          key: 2,
          icon: e30.afterIcon,
          size: 14
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        e30.showPassword ? (openBlock(), createBlock(unref(f26), {
          key: 3,
          modelValue: s27.value,
          "onUpdate:modelValue": n17[2] || (n17[2] = (a17) => s27.value = a17),
          class: "f-input__show-password",
          type: "swap",
          "icon-on": unref(h12),
          "icon-off": unref(h11),
          size: 14,
          "on-change": B14
        }, null, 8, ["modelValue", "icon-on", "icon-off"])) : createCommentVNode("", true),
        renderSlot(e30.$slots, "after")
      ], 2),
      e30.search ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "f-input__search",
        onClick: d8
      }, [
        renderSlot(e30.$slots, "searchBtn", {}, () => [
          createVNode(unref(i14), {
            type: "primary",
            size: e30.size
          }, {
            default: withCtx(() => [
              J2
            ]),
            _: 1
          }, 8, ["size"])
        ])
      ])) : createCommentVNode("", true)
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input/index.js
var f27 = n2(ue);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/up-load/src/index3.js
var e18 = {
  files: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: () => null
  },
  name: {
    type: String,
    default: () => null
  },
  drag: {
    type: Boolean,
    default: () => false
  },
  isRemove: {
    type: Boolean,
    default: () => true
  },
  showList: {
    type: Boolean,
    default: () => true
  },
  multiple: {
    type: Boolean,
    default: () => false
  },
  maxSize: {
    type: Number,
    default: () => null
  },
  maxLength: {
    type: Number,
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  onLoad: {
    type: Function,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-notes/index.js
var r19 = {};
var c22 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s21 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M2.75 1.75h10.5v12.5H2.75zm3 6h4.5m-4.5 3h2.5m-2.5-6h4.5"
}, null, -1);
var i36 = [
  s21
];
function _18(h15, d8) {
  return openBlock(), createElementBlock("svg", c22, i36);
}
var a11 = s3(r19, [["render", _18]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-plus/index.js
var r20 = {};
var c23 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s22 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M12.75 7.75h-10m5-5v10"
}, null, -1);
var i37 = [
  s22
];
function _19(l35, d8) {
  return openBlock(), createElementBlock("svg", c23, i37);
}
var u8 = s3(r20, [["render", _19]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/up-load/src/index2.js
var A7 = { class: "f-up-load" };
var G4 = ["onDrop", "onDragover"];
var H4 = createTextVNode("选择文件");
var J3 = ["name", "disabled", "accept", "multiple"];
var K2 = {
  key: 0,
  class: "f-up-load__file-list"
};
var O6 = { class: "f-up-load__file-name" };
var Q3 = defineComponent({
  name: "FUpLoad"
});
var ae4 = defineComponent({
  ...Q3,
  props: e18,
  emits: {
    "update:files": (u11) => u11
  },
  setup(u11, { emit: V8 }) {
    const s27 = u11, f37 = ref(false), i44 = ref(null), m14 = ref(
      null
    ), _26 = () => {
      m14.value.click();
    }, h15 = (e30) => {
      i44.value = e30, V8("update:files", e30), r2(s27.onLoad);
    }, v3 = (e30) => {
      const { maxSize: o4, maxLength: r25 } = s27;
      let t36 = [...e30];
      return o4 && (t36 = t36.filter((g8) => g8.size < o4)), r25 && (t36 = t36.splice(0, r25)), t36;
    }, B14 = (e30) => {
      const o4 = e30.target.files;
      o4 && h15(v3(o4));
    }, N9 = (e30) => {
      i44.value.splice(e30, 1);
    }, b10 = (e30) => {
      e30.preventDefault(), f37.value = true;
    }, w8 = (e30) => {
      f37.value = false;
      const o4 = e30.dataTransfer.files;
      o4 && h15(v3(o4));
    };
    return (() => {
      !s27.onChange || watch(
        () => s27.files,
        () => {
          s27.onChange();
        },
        { deep: true }
      );
    })(), (e30, o4) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", A7, [
        e30.drag ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "f-up-load__drag",
          onClick: _26,
          onDrop: withModifiers(w8, ["prevent"]),
          onDragover: withModifiers(b10, ["prevent"])
        }, [
          renderSlot(e30.$slots, "default", {}, () => [
            createVNode(unref(i2), { icon: unref(u8) }, null, 8, ["icon"])
          ])
        ], 40, G4)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "f-up-load__content",
          onClick: _26
        }, [
          renderSlot(e30.$slots, "default", {}, () => [
            createVNode(unref(i14), null, {
              default: withCtx(() => [
                H4
              ]),
              _: 1
            })
          ])
        ])),
        createBaseVNode("input", {
          ref_key: "FUpLoadInput",
          ref: m14,
          type: "file",
          hidden: "",
          name: e30.name,
          disabled: e30.disabled,
          accept: e30.accept,
          multiple: e30.multiple,
          onChange: B14
        }, null, 40, J3)
      ]),
      e30.showList && i44.value && i44.value.length ? (openBlock(), createElementBlock("ul", K2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i44.value, (r25, t36) => (openBlock(), createElementBlock("li", {
          key: t36,
          class: "f-up-load__file-list-item"
        }, [
          createBaseVNode("span", O6, [
            createVNode(unref(i2), { icon: unref(a11) }, null, 8, ["icon"]),
            createTextVNode(" " + toDisplayString(r25.name), 1)
          ]),
          e30.isRemove ? (openBlock(), createBlock(unref(i4), {
            key: 0,
            size: 14,
            onClick: (g8) => N9(t36)
          }, null, 8, ["onClick"])) : createCommentVNode("", true)
        ]))), 128))
      ])) : createCommentVNode("", true)
    ], 64));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/up-load/index.js
var f28 = n2(ae4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/pagination/src/index3.js
var e19 = {
  current: {
    type: Number,
    default: () => 1,
    require: true
  },
  total: {
    type: Number,
    default: () => 0,
    require: true
  },
  pageSize: {
    type: Number,
    default: () => 10
  },
  pageSizes: {
    type: Array,
    default: () => null
  },
  background: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  prevIcon: {
    type: Object,
    default: () => null
  },
  nextIcon: {
    type: Object,
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  change: {
    type: Function,
    default: () => null
  },
  jumpSearch: {
    type: Boolean,
    default: () => false
  },
  prevClick: {
    type: Function,
    default: () => null
  },
  nextClick: {
    type: Function,
    default: () => null
  },
  pageSizeChange: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/select/src/index3.js
var e20 = {
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null,
    required: true
  },
  width: {
    type: [Number, String],
    default: () => null
  },
  name: {
    type: String,
    default: () => "f-select"
  },
  placeholder: {
    type: String,
    default: () => null
  },
  clear: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
};
var l28 = Symbol("f-select-props-key");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown/src/index3.js
var l29 = {
  spacing: {
    type: [String, Number],
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  trigger: {
    type: String,
    default: () => "hover",
    validator: (e30) => ["hover", "click"].includes(e30)
  },
  arrow: {
    type: Boolean,
    default: () => false
  },
  enterDuration: {
    type: Number,
    default: () => null
  },
  leaveDuration: {
    type: Number,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/trigger/src/index3.js
var l30 = {
  spacing: {
    type: [String, Number],
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  trigger: {
    type: String,
    default: () => "hover",
    validator: (e30) => ["hover", "click"].includes(e30)
  },
  arrow: {
    type: Boolean,
    default: () => false
  },
  enterDuration: {
    type: Number,
    default: () => null
  },
  leaveDuration: {
    type: Number,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onOpen: {
    type: Function,
    default: () => null
  },
  onClose: {
    type: Function,
    default: () => null
  }
};
var t32 = Symbol("trigger-close-key");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/trigger/src/index2.js
var K3 = {
  class: normalizeClass(["f-trigger__content"])
};
var M4 = defineComponent({
  name: "FTrigger"
});
var F7 = defineComponent({
  ...M4,
  props: l30,
  setup(m14) {
    const r25 = m14, e30 = ref(false), p9 = () => {
      e30.value = true, r2(r25.onOpen, e30.value), r2(r25.onChange, e30.value);
    }, c27 = () => {
      e30.value = false, r2(r25.onClose, e30.value), r2(r25.onChange, e30.value);
    }, _26 = computed(
      () => r25.trigger === "hover" ? "mouseover" : "click"
    ), h15 = computed(
      () => r25.trigger === "hover" ? "mouseleave" : ""
    ), C11 = computed(() => {
      const { spacing: t36, enterDuration: o4, leaveDuration: n17 } = r25;
      return {
        "--f-trigger-spacing-size": s(t36),
        "--f-trigger-enter-duration": o4 && o4 + "s",
        "--f-trigger-leave-duration": n17 && n17 + "s"
      };
    });
    return onMounted(() => {
      document.addEventListener(
        "click",
        (t36) => {
          t36.composedPath().some((n17) => n17.className === "f-trigger") || c27();
        },
        false
      );
    }), provide(
      t32,
      reactive({
        handelClose: () => {
          e30.value = false;
        }
      })
    ), (t36, o4) => (openBlock(), createElementBlock("div", {
      class: "f-trigger",
      style: normalizeStyle(unref(C11)),
      [toHandlerKey(unref(h15))]: withModifiers(c27, ["stop"])
    }, [
      createBaseVNode("div", {
        class: "f-trigger__trigger",
        [toHandlerKey(unref(_26))]: withModifiers(p9, ["stop"])
      }, [
        renderSlot(t36.$slots, "default")
      ], 16),
      createVNode(Transition, { name: "f-trigger" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(["f-trigger__content-box", { "f-trigger__arrow": t36.arrow }])
          }, [
            createBaseVNode("div", K3, [
              renderSlot(t36.$slots, "content")
            ])
          ], 2), [
            [vShow, e30.value]
          ])
        ]),
        _: 3
      })
    ], 16));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/trigger/index.js
var f29 = n2(F7);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown/src/index2.js
var p6 = { class: "f-dropdown" };
var g7 = defineComponent({
  name: "FDropdown"
});
var w5 = defineComponent({
  ...g7,
  props: l29,
  setup(u11) {
    return (e30, f37) => (openBlock(), createElementBlock("div", p6, [
      createVNode(unref(f29), {
        trigger: e30.trigger,
        disabled: e30.disabled,
        spacing: e30.spacing,
        arrow: e30.arrow,
        "enter-duration": e30.enterDuration,
        "leave-duration": e30.leaveDuration,
        "on-change": e30.onChange,
        "on-open": e30.onOpen,
        "on-close": e30.onClose
      }, {
        content: withCtx(() => [
          renderSlot(e30.$slots, "content")
        ]),
        default: withCtx(() => [
          renderSlot(e30.$slots, "default")
        ]),
        _: 3
      }, 8, ["trigger", "disabled", "spacing", "arrow", "enter-duration", "leave-duration", "on-change", "on-open", "on-close"])
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown/index.js
var f30 = n2(w5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_utils/get-children/index.js
var p7 = (e30, n17) => {
  let r25 = [];
  return i(e30) && e30.length && e30.forEach((t36) => {
    const o4 = u(t36.type) && t36.type.name;
    if (o4 === n17 && r25.push(t36), o4 !== n17 && t36.children && i(t36.children)) {
      const i44 = p7(
        t36.children,
        n17
      );
      r25 = r25.concat(i44);
    }
  }), r25;
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/select/src/index2.js
var N4 = defineComponent({
  name: "FSelect"
});
var q5 = defineComponent({
  ...N4,
  props: e20,
  emits: {
    "update:modelValue": (a17) => !!a17
  },
  setup(a17, { emit: V8 }) {
    const t36 = a17, u11 = useSlots(), i44 = computed(() => u11.default ? p7(u11.default(), "FOption") : []), o4 = computed({
      get() {
        if (!i44.value.length)
          return "";
        const e30 = i44.value.filter(
          (c27) => {
            const r25 = c27.props;
            return r25 ? r25.value ? r25.value === t36.modelValue : r25.label === t36.modelValue : c27.children.default()[0].children === t36.modelValue;
          }
        );
        if (!e30.length)
          return "";
        const l35 = e30[0], s27 = l35.children && l35.children.default()[0].children, b10 = l35.props && l35.props.label, p9 = l35.props && l35.props.value;
        return s27 || b10 || p9 && p9.toString() || "";
      },
      set(e30) {
        return e30;
      }
    });
    provide(l28, reactive({ setValue: (e30, l35) => {
      o4.value = e30, V8("update:modelValue", l35);
    } }));
    const v3 = computed(() => {
      const { width: e30 } = t36;
      return {
        "--f-select-width": s(e30)
      };
    });
    return (e30, l35) => (openBlock(), createElementBlock("div", {
      class: "f-select",
      style: normalizeStyle(unref(v3))
    }, [
      createVNode(unref(f30), {
        trigger: "click",
        disabled: e30.disabled
      }, {
        content: withCtx(() => [
          renderSlot(e30.$slots, "default")
        ]),
        default: withCtx(() => [
          createVNode(unref(f27), {
            modelValue: unref(o4),
            "onUpdate:modelValue": l35[0] || (l35[0] = (s27) => isRef(o4) ? o4.value = s27 : null),
            readonly: "",
            name: e30.name,
            disabled: e30.disabled,
            placeholder: e30.placeholder,
            clear: e30.clear
          }, null, 8, ["modelValue", "name", "disabled", "placeholder", "clear"])
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/select/index.js
var f31 = n2(q5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/option/src/index3.js
var e21 = {
  value: {
    type: [String, Number],
    default: () => null
  },
  label: {
    type: [String, Number],
    default: () => null
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/option/src/index2.js
var _20 = defineComponent({
  name: "FOption"
});
var h13 = defineComponent({
  ..._20,
  props: e21,
  setup(i44) {
    const o4 = i44, t36 = useSlots(), a17 = inject(l28, void 0), u11 = () => {
      if (!a17 || o4.disabled)
        return;
      const { value: e30, label: l35 } = toRefs(o4), s27 = t36.default && t36.default()[0].children;
      a17.setValue(
        s27 || l35.value || e30.value,
        e30.value || l35.value || s27
      );
    };
    return (e30, l35) => e30.$slots.default || e30.label || e30.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["f-option", { "f-option__disabled": e30.disabled }]),
      onClick: u11
    }, [
      e30.$slots.default ? renderSlot(e30.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(toDisplayString(e30.label || e30.value), 1)
      ], 64))
    ], 2)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/option/index.js
var p8 = n2(h13);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/pagination/src/index2.js
var M5 = { class: "f-pagination" };
var O7 = ["onClick"];
var R3 = defineComponent({
  name: "FPagination"
});
var Y = defineComponent({
  ...R3,
  props: e19,
  emits: {
    "update:current": (i44) => typeof i44 == "number",
    "update:pageSize": (i44) => typeof i44 == "number"
  },
  setup(i44, { emit: d8 }) {
    const n17 = i44, l35 = ref("1"), _26 = ref(10), c27 = computed(() => {
      const e30 = Math.floor(n17.total / n17.pageSize);
      return n17.total % n17.pageSize === 0 ? e30 : e30 + 1;
    }), F8 = computed(
      () => {
        const { background: e30, round: o4, disabled: a17 } = n17;
        return [
          "f-pagination__prev",
          {
            "f-pagination__btn-background": e30,
            "f-pagination__btn-circle": o4,
            "f-pagination__disabled": a17
          }
        ];
      }
    ), y5 = computed(
      () => {
        const { background: e30, round: o4 } = n17;
        return [
          "f-pagination__pages",
          { "f-pagination__state": e30 || o4 }
        ];
      }
    ), I7 = computed(
      () => {
        const { background: e30, round: o4, disabled: a17 } = n17;
        return [
          "f-pagination__next",
          {
            "f-pagination__btn-background": e30,
            "f-pagination__btn-circle": o4,
            "f-pagination__disabled": a17
          }
        ];
      }
    ), g8 = computed(
      () => [...Array(c27.value).keys()].map((e30) => e30 + 1)
    ), L8 = () => {
      if (n17.disabled)
        return;
      const e30 = n17.current === 1 ? 1 : n17.current - 1;
      d8("update:current", e30), n17.prevClick && n17.prevClick(e30, n17.pageSize);
    }, N9 = () => {
      if (n17.disabled)
        return;
      const e30 = n17.current === c27.value ? c27.value : n17.current + 1;
      d8("update:current", e30), n17.nextClick && n17.nextClick(e30, n17.pageSize);
    }, j7 = (e30) => {
      n17.disabled || (d8("update:current", e30), n17.change && n17.change(e30, n17.pageSize));
    }, v3 = () => {
      n17.disabled || (Number(l35.value) > g8.value.length && (l35.value = String(g8.value.length)), d8("update:current", Number(l35.value)));
    };
    return (e30, o4) => (openBlock(), createElementBlock("div", M5, [
      e30.pageSizes && e30.pageSizes.length ? (openBlock(), createBlock(unref(f31), {
        key: 0,
        modelValue: _26.value,
        "onUpdate:modelValue": o4[0] || (o4[0] = (a17) => _26.value = a17),
        width: 60,
        disabled: e30.disabled
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e30.pageSizes, (a17) => (openBlock(), createBlock(unref(p8), {
            key: a17,
            value: a17,
            label: a17 + "/页"
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])) : createCommentVNode("", true),
      createBaseVNode("button", {
        class: normalizeClass(unref(F8)),
        onClick: L8
      }, [
        createVNode(unref(i2), {
          size: 15,
          icon: e30.prevIcon || unref(m5)
        }, null, 8, ["icon"])
      ], 2),
      n17.total > 0 ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(unref(y5))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(g8), (a17) => (openBlock(), createElementBlock("div", {
          key: a17,
          class: normalizeClass([
            "f-pagination__pages-li",
            {
              "f-pagination__pages-li-choose": e30.current === a17,
              "f-pagination__pages-li-background-choose": e30.current === a17 && (e30.background || e30.round),
              "f-pagination__background": e30.background,
              "f-pagination__circle": e30.round,
              "f-pagination__disabled f-pagination__pages-li-disabled": e30.disabled
            }
          ]),
          onClick: ($10) => j7(a17)
        }, [
          createBaseVNode("span", null, toDisplayString(a17), 1)
        ], 10, O7))), 128))
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("button", {
        class: normalizeClass(unref(I7)),
        onClick: N9
      }, [
        createVNode(unref(i2), {
          size: 15,
          icon: e30.nextIcon || unref(a4)
        }, null, 8, ["icon"])
      ], 2),
      e30.jumpSearch ? (openBlock(), createBlock(unref(f27), {
        key: 2,
        modelValue: l35.value,
        "onUpdate:modelValue": o4[1] || (o4[1] = (a17) => l35.value = a17),
        placeholder: "输入跳转的页数",
        class: "f-pagination__jump",
        disabled: e30.disabled,
        "on-blur": v3,
        "on-enter": v3
      }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/pagination/index.js
var a12 = n2(Y);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/table/src/index3.js
var l31 = {
  data: {
    type: Array,
    default: () => null
  },
  columns: {
    type: Array,
    default: () => null
  },
  align: {
    type: String,
    default: () => "left",
    validator: (e30) => ["left", "center", "right"].includes(e30)
  },
  border: {
    type: Boolean,
    default: () => false
  },
  num: {
    type: Boolean,
    default: () => false
  },
  zebra: {
    type: Boolean,
    default: () => false
  },
  zebraColor: {
    type: String,
    default: () => null
  },
  height: {
    type: [String, Number],
    default: () => null
  },
  optional: {
    type: Boolean,
    default: () => false
  },
  bgColor: {
    type: String,
    default: () => null
  },
  headBgColor: {
    type: String,
    default: () => null
  },
  showHead: {
    type: Boolean,
    default: () => true
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/table/src/components/table-colgroup/index3.js
var l32 = {
  columns: {
    type: Array,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/table/src/components/table-colgroup/index2.js
var a13 = ["width"];
var _21 = defineComponent({
  name: "FTableColgroup"
});
var C9 = defineComponent({
  ..._21,
  props: l32,
  setup(r25) {
    const n17 = r25;
    return (d8, f37) => (openBlock(), createElementBlock("colgroup", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(n17.columns, (l35, p9) => (openBlock(), createElementBlock("col", {
        key: p9,
        width: unref(s)(l35.width)
      }, null, 8, a13))), 128))
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/table/src/index2.js
var $9 = {
  key: 0,
  class: "f-table__header"
};
var P2 = { class: "f-table__table" };
var U6 = ["align"];
var j6 = { key: 0 };
var q6 = { key: 1 };
var A8 = { class: "f-table__table" };
var G5 = ["align"];
var I6 = { key: 0 };
var J4 = { key: 1 };
var K4 = ["align"];
var M6 = { key: 0 };
var O8 = { key: 1 };
var Q4 = { key: 1 };
var R4 = defineComponent({
  name: "FTable"
});
var ee2 = defineComponent({
  ...R4,
  props: l31,
  setup(p9) {
    const k8 = p9, f37 = ref([]), C11 = computed(() => {
      const { zebraColor: e30, height: i44, bgColor: m14, headBgColor: n17 } = k8;
      return {
        "--f-table-zebra-color": e30,
        "--f-table-bg-color": m14,
        "--f-table-head-bg-color": n17,
        "--f-table-height": s(i44)
      };
    }), z10 = (e30) => e30(h);
    return (e30, i44) => {
      const m14 = resolveComponent("f-checkbox");
      return openBlock(), createElementBlock("div", {
        class: "f-table",
        style: normalizeStyle(unref(C11))
      }, [
        createBaseVNode("div", {
          class: normalizeClass([
            "f-table__container",
            {
              "f-table__border": e30.border,
              "f-table__zebra": e30.zebra
            }
          ])
        }, [
          e30.columns || e30.data ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            e30.height && e30.showHead ? (openBlock(), createElementBlock("header", $9, [
              createBaseVNode("table", P2, [
                createVNode(unref(C9), { columns: e30.columns }, null, 8, ["columns"]),
                createBaseVNode("thead", { align: e30.align }, [
                  createBaseVNode("tr", null, [
                    e30.num ? (openBlock(), createElementBlock("th", j6, "序号")) : createCommentVNode("", true),
                    e30.optional ? (openBlock(), createElementBlock("th", q6, "选择")) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(e30.columns, (n17, a17) => (openBlock(), createElementBlock("th", { key: a17 }, toDisplayString(n17.title), 1))), 128))
                  ])
                ], 8, U6)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("main", {
              class: normalizeClass([
                "f-table__body",
                { "f-table__body-margin": e30.height && e30.showHead }
              ])
            }, [
              createBaseVNode("table", A8, [
                createVNode(unref(C9), { columns: e30.columns }, null, 8, ["columns"]),
                !e30.height && e30.showHead ? (openBlock(), createElementBlock("thead", {
                  key: 0,
                  align: e30.align
                }, [
                  createBaseVNode("tr", null, [
                    e30.num ? (openBlock(), createElementBlock("th", I6, "序号")) : createCommentVNode("", true),
                    e30.optional ? (openBlock(), createElementBlock("th", J4, "选择")) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(e30.columns, (n17, a17) => (openBlock(), createElementBlock("th", { key: a17 }, toDisplayString(n17.title), 1))), 128))
                  ])
                ], 8, G5)) : createCommentVNode("", true),
                e30.data.length ? (openBlock(), createElementBlock("tbody", {
                  key: 1,
                  align: e30.align
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(e30.data, (n17, a17) => (openBlock(), createElementBlock("tr", { key: a17 }, [
                    e30.optional ? (openBlock(), createElementBlock("td", M6, [
                      createVNode(m14, {
                        modelValue: f37.value,
                        "onUpdate:modelValue": i44[0] || (i44[0] = (u11) => f37.value = u11),
                        "show-label": false,
                        label: (a17 + 1).toString()
                      }, null, 8, ["modelValue", "label"])
                    ])) : createCommentVNode("", true),
                    e30.num ? (openBlock(), createElementBlock("td", O8, toDisplayString(a17 + 1), 1)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(e30.columns, (u11, V8) => (openBlock(), createElementBlock("td", { key: V8 }, [
                      u11.render ? (openBlock(), createBlock(resolveDynamicComponent(z10(u11.render)), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(n17[u11.key]), 1)
                      ], 64))
                    ]))), 128))
                  ]))), 128))
                ], 8, K4)) : createCommentVNode("", true)
              ])
            ], 2)
          ], 64)) : (openBlock(), createElementBlock("table", Q4, [
            renderSlot(e30.$slots, "default")
          ]))
        ], 2)
      ], 4);
    };
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/table/index.js
var i38 = n2(ee2);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown-item/src/index3.js
var e22 = {
  disabled: {
    type: Boolean,
    default: () => false
  },
  onClick: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown-item/src/index2.js
var _22 = defineComponent({
  name: "FDropdownItem"
});
var w6 = defineComponent({
  ..._22,
  props: e22,
  setup(t36) {
    const e30 = t36, l35 = inject(
      t32
    ), s27 = (o4) => {
      e30.disabled || (r2(l35.handelClose), r2(e30.onClick, o4));
    };
    return (o4, C11) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        "f-dropdown-item",
        {
          "f-dropdown-item__disabled": o4.disabled
        }
      ]),
      onClick: s27
    }, [
      renderSlot(o4.$slots, "default")
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/dropdown-item/index.js
var f32 = n2(w6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/textarea/src/index3.js
var t33 = {
  modelValue: {
    type: String,
    default: () => null
  },
  rows: {
    type: [String, Number],
    default: () => 3
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  maxLength: {
    type: Number,
    default: () => null,
    validator: (e30) => e30 >= 0
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  name: {
    type: String,
    default: () => "f-textarea"
  },
  placeholder: {
    type: String,
    default: () => null
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  onInput: {
    type: Function,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onBlur: {
    type: Function,
    default: () => null
  },
  onFocus: {
    type: Function,
    default: () => null
  },
  resize: {
    type: String,
    default: () => "none",
    validator: (e30) => ["none", "both", "horizontal", "vertical"].includes(e30)
  },
  clear: {
    type: Boolean,
    default: () => false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/textarea/src/index2.js
var w7 = ["rows", "value", "disabled", "readonly", "autofocus", "placeholder", "name"];
var N5 = defineComponent({
  name: "FTextarea"
});
var H5 = defineComponent({
  ...N5,
  props: t33,
  emits: {
    "update:modelValue": (o4) => p(o4) || c(o4)
  },
  setup(o4, { emit: s27 }) {
    const u11 = o4, { onInput: i44, onClear: m14, onChange: d8 } = g6(
      c8(u11, [
        "onChange",
        "onInput",
        "disabled"
      ]),
      s27
    ), p9 = (e30) => {
      i44(e30);
    }, f37 = (e30) => {
      d8(e30);
    };
    return (e30, r25) => (openBlock(), createElementBlock("div", {
      class: "f-textarea",
      style: normalizeStyle({ resize: e30.resize })
    }, [
      createBaseVNode("textarea", {
        class: normalizeClass(["f-textarea__textarea", { "f-textarea__disabled": e30.disabled }]),
        rows: e30.rows,
        value: e30.modelValue,
        disabled: e30.disabled,
        readonly: e30.readonly,
        autofocus: e30.autofocus,
        placeholder: e30.placeholder,
        name: e30.name,
        onInput: p9,
        onBlur: r25[0] || (r25[0] = (...n17) => e30.onBlur && e30.onBlur(...n17)),
        onFocus: r25[1] || (r25[1] = (...n17) => e30.onFocus && e30.onFocus(...n17)),
        onChange: f37
      }, null, 42, w7),
      e30.clear ? (openBlock(), createBlock(unref(i2), {
        key: 0,
        class: "f-textarea__clear-btn",
        icon: unref(a),
        size: 14,
        onClick: unref(m14)
      }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
    ], 4));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/textarea/index.js
var e23 = n2(H5);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input-number/src/index3.js
var l33 = {
  modelValue: {
    type: Number,
    default: () => 1
  },
  model: {
    type: String,
    default: () => "default",
    validator: (e30) => ["default", "button", "switch"].includes(e30)
  },
  precision: {
    type: Number,
    default: () => 0
  },
  step: {
    type: Number,
    default: () => 1
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  max: {
    type: Number,
    default: () => null
  },
  min: {
    type: Number,
    default: () => null
  },
  maxLength: {
    type: Number,
    default: () => null,
    validator: (e30) => e30 >= 0
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  name: {
    type: String,
    default: () => "f-input-number"
  },
  placeholder: {
    type: String,
    default: () => null
  },
  clear: {
    type: Boolean,
    default: () => false
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onBlur: {
    type: Function,
    default: () => null
  },
  onFocus: {
    type: Function,
    default: () => null
  },
  onInput: {
    type: Function,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-chevron-up/index.js
var r21 = {};
var c24 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s23 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M12.25 10.25L8 5.75l-4.25 4.5"
}, null, -1);
var i39 = [
  s23
];
function _23(l35, d8) {
  return openBlock(), createElementBlock("svg", c24, i39);
}
var a14 = s3(r21, [["render", _23]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-chevron-down/index.js
var r22 = {};
var c25 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
};
var s24 = createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M3.75 5.75L8 10.25l4.25-4.5"
}, null, -1);
var i40 = [
  s24
];
function _24(l35, d8) {
  return openBlock(), createElementBlock("svg", c25, i40);
}
var a15 = s3(r22, [["render", _24]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input-number/src/index2.js
var M7 = { class: "f-input-number" };
var R5 = { class: "f-input-number__wrapper" };
var U7 = {
  key: 0,
  class: "f-input-number__switch"
};
var L6 = defineComponent({
  name: "FInputNumber"
});
var T4 = defineComponent({
  ...L6,
  props: l33,
  emits: {
    "update:modelValue": (m14) => c(m14)
  },
  setup(m14, { emit: y5 }) {
    const t36 = m14, r25 = computed({
      get: () => {
        const { modelValue: e30, precision: o4 } = t36;
        return c(e30) ? Number(e30.toFixed(c(o4) ? o4 : 0)) : 0;
      },
      set: (e30) => {
        y5("update:modelValue", e30);
      }
    }), f37 = computed(() => {
      const { step: e30, min: o4 } = t36;
      return !o4 && !c(o4) ? false : r25.value - Math.abs(e30) < o4;
    }), c27 = computed(() => {
      const { step: e30, max: o4 } = t36;
      return !o4 && !c(o4) ? false : r25.value + Math.abs(e30) > o4;
    }), a17 = (e30) => {
      const { disabled: o4, readonly: l35, step: v3 } = t36;
      if (o4 || l35)
        return;
      ({
        minus: () => {
          r25.value -= v3;
        },
        plus: () => {
          r25.value += v3;
        }
      })[e30](), r2(t36.onChange, r25.value);
    };
    return (e30, o4) => (openBlock(), createElementBlock("div", M7, [
      e30.model === "button" ? (openBlock(), createBlock(unref(i14), {
        key: 0,
        class: "f-input-number__minus",
        type: "primary",
        disabled: e30.disabled || unref(f37),
        "before-icon": unref(m5),
        onClick: o4[0] || (o4[0] = (l35) => a17("minus"))
      }, null, 8, ["disabled", "before-icon"])) : createCommentVNode("", true),
      createBaseVNode("div", R5, [
        createVNode(unref(f27), {
          modelValue: unref(r25),
          "onUpdate:modelValue": o4[3] || (o4[3] = (l35) => isRef(r25) ? r25.value = l35 : null),
          type: "number",
          max: e30.max,
          min: e30.min,
          disabled: e30.disabled,
          readonly: e30.readonly,
          autofocus: e30.autofocus,
          name: e30.name,
          clear: e30.clear,
          placeholder: e30.placeholder,
          "on-blur": e30.onBlur,
          "on-focus": e30.onFocus,
          "on-input": e30.onInput,
          "on-change": e30.onChange
        }, {
          after: withCtx(() => [
            e30.model === "switch" ? (openBlock(), createElementBlock("div", U7, [
              createVNode(unref(i14), {
                disabled: e30.disabled || unref(c27),
                "before-icon": unref(a14),
                onClick: o4[1] || (o4[1] = (l35) => a17("plus"))
              }, null, 8, ["disabled", "before-icon"]),
              createVNode(unref(i14), {
                disabled: e30.disabled || unref(f37),
                "before-icon": unref(a15),
                onClick: o4[2] || (o4[2] = (l35) => a17("minus"))
              }, null, 8, ["disabled", "before-icon"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "max", "min", "disabled", "readonly", "autofocus", "name", "clear", "placeholder", "on-blur", "on-focus", "on-input", "on-change"])
      ]),
      e30.model === "button" ? (openBlock(), createBlock(unref(i14), {
        key: 1,
        class: "f-input-number__plus",
        type: "primary",
        disabled: e30.disabled || unref(c27),
        "before-icon": unref(a4),
        onClick: o4[4] || (o4[4] = (l35) => a17("plus"))
      }, null, 8, ["disabled", "before-icon"])) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/input-number/index.js
var f33 = n2(T4);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/src/index3.js
var t34 = {
  position: {
    type: String,
    default: "top"
  },
  modelValue: [String, Number],
  type: {
    type: String,
    default: "line"
  },
  justifyContent: {
    type: String,
    default: "flex-start"
  },
  editStatus: {
    type: Boolean,
    default: false
  },
  beforeEnter: {
    type: Function
  },
  trigger: {
    type: String,
    default: "click"
  }
};
var e24 = Symbol("f-tabs");

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/src/components/tabs-nav/index3.js
var t35 = {
  navs: {
    type: Array
  },
  type: {
    type: String
  },
  position: {
    type: String
  },
  currentName: {
    type: [String, Number]
  },
  beforeEnter: {
    type: Function
  },
  justifyContent: {
    type: String
  },
  editStatus: {
    type: Boolean
  },
  trigger: {
    type: String
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/src/components/tabs-nav/index2.js
var oe2 = {
  key: 0,
  class: "f-tabs-nav__prefix"
};
var se2 = { key: 0 };
var ae5 = { key: 1 };
var ie2 = {
  key: 1,
  class: "f-tabs-nav__suffix"
};
var re2 = defineComponent({
  name: "FTabsNav"
});
var me = defineComponent({
  ...re2,
  props: t35,
  emits: ["set-current-name", "edit"],
  setup(B14, { emit: _26 }) {
    const t36 = B14, k8 = computed(
      () => t36.navs ? Math.max(
        t36.navs.findIndex((e30) => e30.name === t36.currentName),
        0
      ) : 0
    ), f37 = getCurrentInstance(), H7 = async (e30) => {
      let n17 = true;
      t36.beforeEnter && (n17 = await t36.beforeEnter(e30)), !(typeof n17 == "boolean" && !n17) && _26("set-current-name", e30);
    }, S13 = (e30, n17, o4) => {
      _26("edit", e30, n17, o4);
    }, p9 = ref({}), R8 = async () => {
      if (await nextTick(), !t36.navs)
        return;
      const e30 = { a: "height", b: "offsetHeight", c: "paddingBottom" };
      switch (t36.position === "left" || t36.position === "right" ? (e30.a = "width", e30.b = "offsetWidth") : (e30.a = "height", e30.b = "offsetHeight"), t36.position) {
        case "top":
          e30.c = "paddingBottom";
          break;
        case "bottom":
          e30.c = "paddingTop";
          break;
        case "left":
          e30.c = "paddingRight";
          break;
        case "right":
          e30.c = "paddingLeft";
          break;
      }
      if (!f37 || !f37.subTree.el)
        return;
      const n17 = f37.subTree.el, o4 = f37.subTree.el.querySelectorAll(
        ".f-tabs-nav--item:not(.f-tabs-nav--item__active)"
      ), s27 = Array.from(o4).reduce((u11, T5) => (u11 = T5[e30.b] > u11[e30.b] ? T5 : u11, u11), o4[0]), i44 = j(
        window.getComputedStyle(s27)[e30.c]
      ), z10 = window.getComputedStyle(n17).getPropertyValue("--cardActiveDiffHeight"), M9 = j(s27[e30.b]) - i44 + j(z10);
      p9.value = {
        [e30.a]: Math.max(n17[e30.b], M9) + "px"
      };
    }, x3 = ref({}), w8 = async () => {
      if (await nextTick(), !f37 || !f37.subTree.el)
        return;
      const { position: e30 } = t36, n17 = {}, o4 = f37.subTree.el.querySelectorAll(
        ".f-tabs-nav--item"
      );
      if (!o4.length)
        return;
      const s27 = o4[k8.value], i44 = window.getComputedStyle(s27);
      e30 === "top" || e30 === "bottom" ? (n17.width = s27.clientWidth - j(i44.paddingLeft) - j(i44.paddingRight) + "px", n17.left = `${s27.offsetLeft + j(i44.paddingLeft)}px`, n17.bottom = "0px") : (n17.height = s27.clientHeight - j(i44.paddingTop) - j(i44.paddingBottom) + "px", n17.top = `${s27.offsetTop + j(i44.paddingTop)}px`, e30 === "left" ? n17.right = "0px" : n17.left = "0px"), x3.value = n17;
    }, b10 = ref(false), h15 = ref(false), E6 = (e30) => {
      if (!e30)
        return;
      const { scrollLeft: n17, scrollWidth: o4, offsetWidth: s27 } = e30;
      b10.value = n17 > 0, h15.value = n17 + s27 < o4 - 1;
    }, F8 = (e30) => {
      e30.currentTarget.scrollLeft += e30.deltaY + e30.deltaX, E6(e30.currentTarget);
    };
    watch([k8], () => {
      t36.type === "line" && w8();
    }), watch(
      [
        () => t36.position,
        () => t36.type,
        () => t36.justifyContent
      ],
      () => {
        if (p9.value = {}, t36.type === "card" && (R8(), t36.position === "left" || t36.position === "right")) {
          b10.value = false, h15.value = false;
          return;
        }
        t36.type === "line" && (w8(), (t36.position === "top" || t36.position === "bottom") && (p9.value = {
          justifyContent: t36.justifyContent
        }));
      },
      {
        immediate: true
      }
    );
    const D6 = computed(() => {
      const { type: e30, position: n17 } = t36;
      return [
        `f-tabs-nav__type_${e30}`,
        `f-tabs-nav__type_${e30}_${n17}`
      ];
    }), P4 = computed(() => ({
      "f-tabs-nav__scroll_before": b10.value,
      "f-tabs-nav__scroll_after": h15.value
    })), j7 = computed(() => t36.trigger === "hover" ? "mouseenter" : "click"), C11 = useSlots();
    return (e30, n17) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["f-tabs-nav", unref(D6)])
    }, [
      unref(C11).prefix ? (openBlock(), createElementBlock("div", oe2, [
        renderSlot(e30.$slots, "prefix")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["f-tabs-nav__main", unref(P4)])
      }, [
        createBaseVNode("div", {
          class: "f-tabs-nav__scroll",
          onWheelPassive: F8
        }, [
          createBaseVNode("div", {
            class: "f-tabs-nav__wrapper",
            style: normalizeStyle(p9.value)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t36.navs, (o4, s27) => (openBlock(), createElementBlock("div", {
              key: o4.name,
              class: normalizeClass(["f-tabs-nav--item", [
                {
                  "f-tabs-nav--item__active": o4.name === t36.currentName
                }
              ]]),
              [toHandlerKey(unref(j7))]: (i44) => H7(o4.name)
            }, [
              unref(p)(o4.label) ? (openBlock(), createElementBlock("span", se2, toDisplayString(o4.label), 1)) : (openBlock(), createElementBlock("div", ae5, [
                (openBlock(), createBlock(resolveDynamicComponent(o4.label)))
              ])),
              e30.type === "card" && e30.editStatus ? (openBlock(), createBlock(unref(i2), {
                key: 2,
                class: "f-tabs-nav--item__card_close",
                icon: unref(a),
                onClick: withModifiers((i44) => S13("remove", o4.name, s27), ["stop"])
              }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
            ], 16))), 128)),
            e30.type === "card" && e30.editStatus ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "f-tabs-nav--item",
              onClick: n17[0] || (n17[0] = (o4) => S13("add"))
            }, [
              createVNode(unref(i2), {
                icon: unref(u8),
                color: "#666"
              }, null, 8, ["icon"])
            ])) : createCommentVNode("", true),
            t36.type === "line" ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "f-tabs-nav--line__active",
              style: normalizeStyle(x3.value)
            }, null, 4)) : createCommentVNode("", true)
          ], 4)
        ], 32)
      ], 2),
      unref(C11).suffix ? (openBlock(), createElementBlock("div", ie2, [
        renderSlot(e30.$slots, "suffix")
      ])) : createCommentVNode("", true)
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/src/utils/index.js
var f34 = Array.isArray;
var u9 = (r25) => typeof r25 == "object" && r25 !== null;
var s25 = (r25) => {
  const n17 = Array.isArray(r25) ? r25 : [r25], t36 = [];
  return n17.forEach((e30) => {
    f34(e30) ? t36.push(...s25(e30)) : isVNode(e30) && f34(e30.children) ? t36.push(...s25(e30.children)) : isVNode(e30) && e30.component && t36.push(e30);
  }), t36;
};
function i41(r25, n17) {
  return r25.subTree ? s25(r25.subTree.children).filter(
    (e30) => u9(e30.type) && e30.type.name === n17
  ) : [];
}

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/src/index2.js
var W3 = { class: "f-tabs-content" };
var q7 = defineComponent({
  name: "FTabs"
});
var R6 = defineComponent({
  ...q7,
  props: t34,
  emits: ["update:modelValue", "edit"],
  setup(y5, { expose: E6, emit: l35 }) {
    const a17 = y5, m14 = getCurrentInstance(), o4 = ref(0), h15 = (e30) => {
      o4.value = e30, l35("update:modelValue", e30);
    }, V8 = (e30, t36, r25) => {
      l35("edit", e30, t36, r25);
    }, p9 = ref([]), T5 = () => {
      nextTick(() => {
        !m14 || (p9.value = i41(m14, "FTabsPane").map(
          (e30) => e30.component
        ));
      });
    }, s27 = computed(() => p9.value.map((e30, t36) => ({
      name: e30.props.name || (e30.props.name = t36),
      label: e30.slots.label || e30.props.label
    })));
    watch(
      () => a17.modelValue,
      (e30) => {
        o4.value = e30, c2 && s27.value.length && s27.value.every((t36) => t36.name !== e30) && e2("FTabs", `未找到名为 ${e30} 的标签`);
      },
      {
        immediate: true
      }
    ), onMounted(async () => {
      await nextTick(), o4.value = a17.modelValue || s27.value[0].name;
    });
    const f37 = computed(() => {
      const { position: e30, type: t36 } = a17;
      let r25 = e30;
      return t36 === "segment" && (e30 === "right" || e30 === "left") && (r25 = "top", e2("FTabs", "segment 风格只支持 top、bottom 两种方向")), r25;
    }), $10 = computed(() => [`f-tabs__position_${f37.value}`]);
    E6({
      currentName: o4
    }), provide(e24, {
      currentName: o4,
      updatePaneList: T5
    });
    const c27 = useSlots();
    return (e30, t36) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["f-tabs", unref($10)])
    }, [
      unref(s27).length ? (openBlock(), createBlock(unref(me), {
        key: 0,
        navs: unref(s27),
        type: e30.type,
        "current-name": o4.value,
        position: unref(f37),
        "edit-status": e30.editStatus,
        "justify-content": e30.justifyContent,
        "before-enter": e30.beforeEnter,
        trigger: e30.trigger,
        onSetCurrentName: h15,
        onEdit: V8
      }, createSlots({ _: 2 }, [
        unref(c27).prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(e30.$slots, "prefix")
          ])
        } : void 0,
        unref(c27).suffix ? {
          name: "suffix",
          fn: withCtx(() => [
            renderSlot(e30.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["navs", "type", "current-name", "position", "edit-status", "justify-content", "before-enter", "trigger"])) : createCommentVNode("", true),
      createBaseVNode("div", W3, [
        renderSlot(e30.$slots, "default")
      ])
    ], 2));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs/index.js
var i42 = n2(R6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs-pane/src/index3.js
var e25 = {
  name: {
    type: [String, Number]
  },
  label: {
    type: String,
    default: ""
  },
  lazy: {
    type: Boolean,
    default: false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs-pane/src/index2.js
var N6 = {
  key: 0,
  class: "f-tabs-pane"
};
var E5 = defineComponent({
  name: "FTabsPane"
});
var B13 = defineComponent({
  ...E5,
  props: e25,
  setup(a17) {
    const t36 = a17, e30 = inject(e24, void 0), s27 = computed(() => e30 ? e30.currentName.value === t36.name ? true : !t36.lazy : false), c27 = computed(
      () => e30 && e30.currentName.value === t36.name
    );
    return e30 && e30.updatePaneList(), onBeforeUnmount(() => {
      e30 && e30.updatePaneList();
    }), (u11, b10) => unref(s27) ? withDirectives((openBlock(), createElementBlock("div", N6, [
      renderSlot(u11.$slots, "default")
    ], 512)), [
      [vShow, unref(c27)]
    ]) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/tabs-pane/index.js
var f35 = n2(B13);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/date-picker/src/index3.js
var l34 = {
  date: {
    type: String,
    default: () => null
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  clear: {
    type: Boolean,
    default: () => false
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e30) => ["large", "middle", "small", "mini"].includes(e30)
  },
  format: {
    type: String,
    default: () => "YYYY/MM/DD"
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/date-picker/src/index2.js
var Y2 = { class: "f-date-picker" };
var z9 = { class: "f-date-picker__content" };
var C10 = defineComponent({
  name: "FDatePicker"
});
var N7 = defineComponent({
  ...C10,
  props: l34,
  emits: {
    "update:date": (n17) => n17
  },
  setup(n17, { emit: k8 }) {
    const r25 = n17, d8 = new Date(), o4 = computed({
      get: () => r25.date,
      set: (e30) => {
        k8("update:date", e30);
      }
    }), D6 = ({
      year: e30,
      month: t36,
      date: a17
    }) => {
      if (r25.format) {
        const c27 = { YYYY: e30, MM: t36, DD: a17 };
        let s27 = r25.format;
        for (const p9 in c27)
          s27 = s27.replace(p9, c27[p9]);
        o4.value = s27;
        return;
      }
      o4.value = `${e30}/${t36}/${a17}`;
    };
    return (e30, t36) => (openBlock(), createElementBlock("div", Y2, [
      createVNode(unref(f30), { disabled: e30.readonly }, {
        content: withCtx(() => [
          createBaseVNode("div", z9, [
            createVNode(unref(f7), {
              date: unref(d8),
              "onUpdate:date": t36[1] || (t36[1] = (a17) => isRef(d8) ? d8.value = a17 : null),
              "day-cell-height": 40,
              "week-cell-height": 40,
              "on-change-date": D6
            }, null, 8, ["date"])
          ])
        ]),
        default: withCtx(() => [
          createVNode(unref(f27), {
            modelValue: unref(o4),
            "onUpdate:modelValue": t36[0] || (t36[0] = (a17) => isRef(o4) ? o4.value = a17 : null),
            clear: e30.clear,
            size: e30.size,
            readonly: e30.readonly
          }, null, 8, ["modelValue", "clear", "size", "readonly"])
        ]),
        _: 1
      }, 8, ["disabled"])
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/date-picker/index.js
var e26 = n2(N7);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/time-picker/src/index3.js
var e27 = {
  time: {
    type: String,
    default: () => null
  },
  readonly: {
    type: Boolean,
    default: () => false
  },
  clear: {
    type: Boolean,
    default: () => false
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/_svg/f-icon-clock-time/index.js
var n16 = {};
var r23 = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
};
var s26 = createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"
}, null, -1);
var _25 = [
  s26
];
function i43(l35, h15) {
  return openBlock(), createElementBlock("svg", r23, _25);
}
var f36 = s3(n16, [["render", i43]]);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/time-picker/src/index2.js
var L7 = { class: "f-time-picker" };
var M8 = { class: "f-time-picker__content" };
var N8 = { class: "f-time-picker__hour" };
var P3 = ["onClick"];
var S11 = { class: "f-time-picker__minute" };
var H6 = ["onClick"];
var R7 = defineComponent({
  name: "FTimePicker"
});
var G6 = defineComponent({
  ...R7,
  props: e27,
  emits: {
    "update:time": (l35) => p(l35)
  },
  setup(l35, { emit: C11 }) {
    const g8 = l35, d8 = new Date(), r25 = reactive({
      hover: l3(d8.getHours()),
      minute: l3(d8.getMinutes())
    }), s27 = computed({
      get: () => g8.time,
      set: (t36) => {
        C11("update:time", t36);
      }
    });
    watch(
      () => r25,
      () => {
        s27.value = `${r25.hover}:${r25.minute}`;
      },
      { deep: true }
    );
    const p9 = (t36, c27) => {
      r25[c27] = l3(t36);
    };
    return (t36, c27) => (openBlock(), createElementBlock("div", L7, [
      createVNode(unref(f30), { disabled: t36.readonly }, {
        content: withCtx(() => [
          createBaseVNode("div", M8, [
            createBaseVNode("div", N8, [
              (openBlock(), createElementBlock(Fragment, null, renderList(24, (e30) => createBaseVNode("div", {
                key: e30,
                class: "f-time-picker__hour-item",
                onClick: withModifiers((w8) => p9(e30, "hover"), ["stop"])
              }, toDisplayString(unref(l3)(e30 - 1)), 9, P3)), 64))
            ]),
            createBaseVNode("div", S11, [
              (openBlock(), createElementBlock(Fragment, null, renderList(60, (e30) => createBaseVNode("div", {
                key: e30,
                class: "f-time-picker__minute-item",
                onClick: withModifiers((w8) => p9(e30, "minute"), ["stop"])
              }, toDisplayString(unref(l3)(e30)), 9, H6)), 64))
            ])
          ])
        ]),
        default: withCtx(() => [
          createVNode(unref(f27), {
            modelValue: unref(s27),
            "onUpdate:modelValue": c27[0] || (c27[0] = (e30) => isRef(s27) ? s27.value = e30 : null),
            type: "date",
            readonly: t36.readonly,
            clear: t36.clear,
            "after-icon": unref(f36)
          }, null, 8, ["modelValue", "readonly", "clear", "after-icon"])
        ]),
        _: 1
      }, 8, ["disabled"])
    ]));
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/time-picker/index.js
var e28 = n2(G6);

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/index4.js
var o3 = "0.9.0-alpha.5";

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading/src/index4.js
var e29 = {
  visible: {
    type: Boolean,
    default: () => false
  },
  text: {
    type: String
  },
  fontColor: {
    type: String
  },
  fullscreen: {
    type: Boolean
  },
  background: {
    type: String
  },
  icon: {
    type: Object,
    default: () => null
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading/src/index3.js
var S12 = {
  key: 0,
  class: "f-loading__title"
};
var h14 = defineComponent({
  name: "FLoading"
});
var b9 = defineComponent({
  ...h14,
  props: e29,
  setup(f37) {
    const t36 = f37, m14 = computed(() => {
      const { background: o4, fontColor: n17 } = t36;
      return {
        background: o4,
        color: n17
      };
    }), d8 = computed(
      () => {
        const { fullscreen: o4 = false } = t36;
        return [
          "f-loading",
          {
            "f-loading__fullscreen": o4
          }
        ];
      }
    );
    return (o4, n17) => o4.visible ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(unref(d8)),
      style: normalizeStyle(unref(m14))
    }, [
      createVNode(unref(i2), {
        size: 20,
        class: "f-loading__animation",
        icon: o4.icon
      }, {
        default: withCtx(() => [
          renderSlot(o4.$slots, "icon", {}, () => [
            createVNode(unref(m4))
          ])
        ]),
        _: 3
      }, 8, ["icon"]),
      o4.text ? (openBlock(), createElementBlock("span", S12, toDisplayString(o4.text), 1)) : createCommentVNode("", true)
    ], 6)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading/src/index.js
var c26 = (o4, t36) => {
  const e30 = (n17) => t36.value[n17], i44 = (n17) => e30(n17) || o4.getAttribute(`f-loading-${n17}`) || "";
  return {
    visible: !!t36.value,
    text: i44("text"),
    fontColor: i44("fontColor"),
    fullscreen: t36.modifiers.fullscreen,
    background: i44("background")
  };
};
var a16 = (o4, t36) => {
  o4.originalPosition !== "absolute" && o4.originalPosition !== "fixed" && (o4.style.position = "relative");
  const e30 = c26(o4, t36), i44 = createApp(b9, e30), n17 = i44.mount(
    document.createElement("div")
  );
  o4.vm = n17, o4.loadingInstance = i44, o4.appendChild(n17.$el);
};
var u10 = (o4) => {
  !o4.loadingInstance || (o4.style.position = o4.originalPosition, o4.removeChild(o4.vm.$el), o4.loadingInstance.unmount(), o4.loadingInstance = null);
};
var m12 = {
  mounted(o4, t36) {
    const e30 = getComputedStyle(o4).position || "static";
    o4.originalPosition = e30, t36.value && a16(o4, t36);
  },
  updated(o4, t36) {
    t36.value !== t36.oldValue && (t36.value ? a16(o4, t36) : u10(o4));
  }
};

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/loading/index.js
var r24 = s2(m12, "loading");
var d6 = n2({
  directive: r24
});

// node_modules/.pnpm/fighting-design@0.9.0-alpha.5/node_modules/fighting-design/es/index2.js
var m13 = (o4) => (Object.entries(index3_exports).forEach(([i44, t36]) => {
  o4.component(i44, t36);
}), o4.config.globalProperties.FMessage = n11, o4.config.globalProperties.FNotification = m11, o4.directive("loading", d6.directive), o4);
var d7 = {
  version: o3,
  install: m13
};
export {
  i5 as FAlert,
  f as FAside,
  f2 as FAvatar,
  f3 as FBackTop,
  i10 as FBadge,
  i11 as FBreadcrumb,
  f4 as FBreadcrumbItem,
  i14 as FButton,
  f5 as FButtonGroup,
  f7 as FCalendar,
  i17 as FCard,
  i18 as FCheckbox,
  f8 as FCheckboxGroup,
  i4 as FCloseBtn,
  e26 as FDatePicker,
  f10 as FDialog,
  f11 as FDivider,
  i19 as FDrawer,
  f30 as FDropdown,
  f32 as FDropdownItem,
  f12 as FEmpty,
  a6 as FExpandCard,
  i21 as FFooter,
  f13 as FHeader,
  i20 as FImage,
  i29 as FImagePreview,
  f27 as FInput,
  f33 as FInputNumber,
  i30 as FLayout,
  f14 as FLink,
  f15 as FList,
  f16 as FListItem,
  f17 as FMain,
  n11 as FMessage,
  m11 as FNotification,
  p8 as FOption,
  a9 as FPageHeader,
  a12 as FPagination,
  f9 as FPopup,
  i32 as FProgress,
  f18 as FRadio,
  p4 as FRadioGroup,
  i33 as FRate,
  i34 as FRipple,
  f31 as FSelect,
  f20 as FSkeleton,
  f21 as FSpace,
  f22 as FStickyCard,
  i2 as FSvgIcon,
  f26 as FSwap,
  f23 as FSwitch,
  i38 as FTable,
  i42 as FTabs,
  f35 as FTabsPane,
  i35 as FTag,
  i15 as FText,
  e23 as FTextarea,
  e28 as FTimePicker,
  i22 as FToolbar,
  i23 as FToolbarItem,
  p5 as FTooltip,
  f24 as FTree,
  f29 as FTrigger,
  f28 as FUpLoad,
  f25 as FWatermark,
  d7 as default,
  p3 as useLoadingBar
};
//# sourceMappingURL=fighting-design.js.map

import {
  createPopper2 as createPopper
} from "./chunk-MTK2UXHI.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-TTRK7RJQ.js";
import {
  AnimationBuilder,
  animate,
  animation,
  group,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-IIDSOG53.js";
import {
  IconDirective
} from "./chunk-CNVUND3J.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-2ULZOTVJ.js";
import {
  A11yModule,
  BreakpointObserver,
  CdkTrapFocus,
  FocusKeyManager,
  FocusMonitor
} from "./chunk-6LEBVM4G.js";
import {
  coerceBooleanProperty,
  coerceNumberProperty
} from "./chunk-K6YW2B3A.js";
import "./chunk-4OO2PO3O.js";
import "./chunk-Y3G33AUN.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgClass,
  NgOptimizedImage,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-QH5W3VI2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-6L4HWLVT.js";
import {
  fromEvent,
  merge
} from "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  filter,
  finalize,
  takeWhile,
  tap,
  withLatestFrom,
  zipWith
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-SIIEUOVM.js";

// node_modules/@coreui/angular/fesm2022/coreui-angular.mjs
var _c0 = ["*"];
var _c1 = ["*", "*"];
function AccordionItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function AccordionItemComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleItem());
    });
    ɵɵtemplate(1, AccordionItemComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const defaultAccordionHeaderContentTemplate_r3 = ɵɵreference(8);
    ɵɵproperty("collapsed", !ctx_r1.visible);
    ɵɵattribute("aria-controls", ctx_r1.contentId);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templates["accordionHeader"] || defaultAccordionHeaderContentTemplate_r3)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function AccordionItemComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function AccordionItemComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccordionItemComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, AccordionItemComponent_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const defaultAccordionBodyContentTemplate_r4 = ɵɵreference(12);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templates["accordionBody"] || defaultAccordionBodyContentTemplate_r4)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function AccordionItemComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AlertComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AlertComponent_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const defaultAlertButtonCloseTemplate_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.alertButtonCloseTemplate) || defaultAlertButtonCloseTemplate_r2);
  }
}
function AlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AlertComponent_Conditional_0_Conditional_0_Template, 1, 1, "ng-container");
    ɵɵprojection(1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.dismissible ? 0 : -1);
  }
}
function AlertComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function AlertComponent_ng_template_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.visible = false);
    });
    ɵɵelementEnd();
  }
}
var AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_2_DepsFn = () => [NgOptimizedImage];
function AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("alt", ctx_r0.alt());
    ɵɵproperty("ngSrc", (tmp_4_0 = ctx_r0.src()) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
  }
}
function AvatarComponent_ProjectionFallback_0_Conditional_0_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2);
    ɵɵelement(1, "rect", 3);
    ɵɵelementEnd();
  }
}
function AvatarComponent_ProjectionFallback_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_0_Template, 1, 2)(1, AvatarComponent_ProjectionFallback_0_Conditional_0_DeferPlaceholder_1_Template, 2, 0);
    ɵɵdefer(2, 0, AvatarComponent_ProjectionFallback_0_Conditional_0_Defer_2_DepsFn, null, 1);
    ɵɵdeferOnIdle();
    ɵɵdeferPrefetchOnIdle();
  }
}
function AvatarComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AvatarComponent_ProjectionFallback_0_Conditional_0_Template, 4, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.src() ? 0 : -1);
  }
}
function AvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.statusClass());
  }
}
var _c2 = () => ({});
function BreadcrumbItemComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵtemplate(1, BreadcrumbItemComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r0 = ɵɵnextContext();
    const defaultBreadcrumbItemContentTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("routerLink", ctx_r0.url)("cHtmlAttr", (tmp_3_0 = ctx_r0.attributes) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ɵɵpureFunction0(11, _c2))("target", ctx_r0.attributes == null ? null : ctx_r0.attributes["target"])("queryParams", (tmp_5_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.queryParams) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : null)("fragment", ctx_r0.linkProps == null ? null : ctx_r0.linkProps.fragment)("queryParamsHandling", (tmp_7_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.queryParamsHandling) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("preserveFragment", (tmp_8_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.preserveFragment) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : false)("skipLocationChange", (tmp_9_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.skipLocationChange) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false)("replaceUrl", (tmp_10_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.replaceUrl) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : false)("state", (tmp_11_0 = ctx_r0.linkProps == null ? null : ctx_r0.linkProps.state) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ɵɵpureFunction0(12, _c2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", defaultBreadcrumbItemContentTemplate_r2);
  }
}
function BreadcrumbItemComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, BreadcrumbItemComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext();
    const defaultBreadcrumbItemContentTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("cHtmlAttr", (tmp_2_0 = ctx_r0.attributes) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ɵɵpureFunction0(2, _c2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", defaultBreadcrumbItemContentTemplate_r2);
  }
}
function BreadcrumbItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function BreadcrumbRouterComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-breadcrumb-item", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const breadcrumb_r2 = ctx_r0.$implicit;
    const ɵ$index_3_r3 = ctx_r0.$index;
    const ɵ$count_3_r4 = ctx_r0.$count;
    ɵɵproperty("active", ɵ$index_3_r3 === ɵ$count_3_r4 - 1)("url", breadcrumb_r2 == null ? null : breadcrumb_r2.url)("attributes", breadcrumb_r2 == null ? null : breadcrumb_r2.attributes)("linkProps", breadcrumb_r2 == null ? null : breadcrumb_r2.linkProps);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", breadcrumb_r2 == null ? null : breadcrumb_r2.label, " ");
  }
}
function BreadcrumbRouterComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadcrumbRouterComponent_For_2_Conditional_0_Template, 2, 5, "c-breadcrumb-item", 1);
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const ɵ$index_3_r3 = ctx.$index;
    const ɵ$count_3_r4 = ctx.$count;
    ɵɵconditional((breadcrumb_r2 == null ? null : breadcrumb_r2.label) && ((breadcrumb_r2 == null ? null : breadcrumb_r2.url == null ? null : breadcrumb_r2.url.slice(-1)) === "/" || ɵ$index_3_r3 === ɵ$count_3_r4 - 1) ? 0 : -1);
  }
}
var _c3 = ["content"];
function CarouselControlComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 0);
    ɵɵprojection(2);
    ɵɵelementEnd();
  }
}
function CarouselControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
    ɵɵelementStart(1, "span", 1);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.carouselControlIconClass);
    ɵɵattribute("aria-label", ctx_r0.direction)("aria-hidden", true);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.caption);
  }
}
var _c4 = (a0) => ({
  active: a0
});
function CarouselIndicatorsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function CarouselIndicatorsComponent_For_2_Template_button_click_0_listener() {
      const ɵ$index_3_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(ɵ$index_3_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_3_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ɵɵpureFunction1(4, _c4, ctx_r2.active === ɵ$index_3_r2));
    ɵɵattribute("data-coreui-target", ɵ$index_3_r2)("aria-current", ctx_r2.active === ɵ$index_3_r2);
  }
}
function CarouselItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function HeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.headerClasses);
  }
}
function HeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function NavbarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.containerClass);
  }
}
function NavbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c5 = ["modalContentRef"];
var _c6 = "[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}";
var _c7 = ["popoverTemplate"];
var _c8 = (a0) => ({
  "popover-arrow": a0
});
function ProgressComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ProgressComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ProgressComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const defaultContent_r1 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultContent_r1);
  }
}
function ProgressComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ProgressComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-progress-bar", 1);
    ɵɵtemplate(1, ProgressComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const defaultContent_r1 = ɵɵreference(4);
    ɵɵproperty("animated", ctx_r1.pbd == null ? null : ctx_r1.pbd.animated)("variant", ctx_r1.pbd == null ? null : ctx_r1.pbd.variant)("color", ctx_r1.pbd == null ? null : ctx_r1.pbd.color);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", defaultContent_r1);
  }
}
function ProgressComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ProgressComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-progress-bar", 2);
    ɵɵtemplate(1, ProgressComponent_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const defaultContent_r1 = ɵɵreference(4);
    ɵɵproperty("width", ctx_r1.pbd == null ? null : ctx_r1.pbd.percent())("animated", ctx_r1.pbd == null ? null : ctx_r1.pbd.animated)("variant", ctx_r1.pbd == null ? null : ctx_r1.pbd.variant)("color", ctx_r1.pbd == null ? null : ctx_r1.pbd.color);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", defaultContent_r1);
  }
}
function ProgressComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SidebarBrandComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("cHtmlAttr", ctx_r0.brandFull)("ngClass", "sidebar-brand-full");
  }
}
function SidebarBrandComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("cHtmlAttr", ctx_r0.brandNarrow)("ngClass", "sidebar-brand-narrow");
  }
}
function SidebarBrandComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵtemplate(1, SidebarBrandComponent_Conditional_0_Conditional_1_Template, 1, 2, "img", 1)(2, SidebarBrandComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r0.routerLink);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.brandFull ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.brandNarrow ? 2 : -1);
  }
}
function SidebarBrandComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SidebarNavLinkContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate((tmp_1_0 = ctx_r0.item == null ? null : ctx_r0.item.name) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "");
  }
}
var _c9 = (a0) => ({
  $implicit: a0
});
var _c10 = () => ({
  exact: false
});
function SidebarNavLinkComponent_Case_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.badge == null ? null : ctx_r0.item.badge.text);
  }
}
function SidebarNavLinkComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_0_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelement(3, "c-sidebar-nav-link-content", 5);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_0_Conditional_4_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext();
    const iconTemplate_r2 = ɵɵreference(4);
    ɵɵproperty("cHtmlAttr", (tmp_2_0 = ctx_r0.item.attributes) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ɵɵpureFunction0(8, _c2))("ngClass", ɵɵpipeBind1(1, 6, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c9, ctx_r0.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r0.item);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.badge == null ? null : ctx_r0.item.badge.text);
  }
}
function SidebarNavLinkComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 7);
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵlistener("click", function SidebarNavLinkComponent_Case_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.linkClicked());
    });
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelement(3, "c-sidebar-nav-link-content", 5);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_1_Conditional_4_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext();
    const iconTemplate_r2 = ɵɵreference(4);
    ɵɵproperty("cHtmlAttr", (tmp_2_0 = ctx_r0.item.attributes) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ɵɵpureFunction0(9, _c2))("href", ctx_r0.href, ɵɵsanitizeUrl)("ngClass", ɵɵpipeBind1(1, 7, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c9, ctx_r0.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r0.item);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_Case_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavLinkComponent_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.badge == null ? null : ctx_r0.item.badge.text);
  }
}
function SidebarNavLinkComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵpipe(1, "cSidebarNavLink");
    ɵɵlistener("click", function SidebarNavLinkComponent_Case_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.linkClicked());
    });
    ɵɵtemplate(2, SidebarNavLinkComponent_Case_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelement(3, "c-sidebar-nav-link-content", 5);
    ɵɵtemplate(4, SidebarNavLinkComponent_Case_2_Conditional_4_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r0 = ɵɵnextContext();
    const iconTemplate_r2 = ɵɵreference(4);
    ɵɵproperty("cHtmlAttr", (tmp_2_0 = ctx_r0.item.attributes) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ɵɵpureFunction0(18, _c2))("fragment", ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.fragment)("ngClass", ɵɵpipeBind1(1, 16, ctx_r0.item))("preserveFragment", (tmp_5_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.preserveFragment) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("queryParamsHandling", ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.queryParamsHandling)("queryParams", (tmp_7_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.queryParams) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("replaceUrl", (tmp_8_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.replaceUrl) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : false)("routerLinkActiveOptions", (tmp_9_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.routerLinkActiveOptions) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : ɵɵpureFunction0(19, _c10))("routerLink", ctx_r0.item.url)("skipLocationChange", (tmp_11_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.skipLocationChange) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : false)("state", (tmp_12_0 = ctx_r0.item.linkProps == null ? null : ctx_r0.item.linkProps.state) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : ɵɵpureFunction0(20, _c2))("target", ctx_r0.item.attributes == null ? null : ctx_r0.item.attributes["target"]);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", iconTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(21, _c9, ctx_r0.item));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r0.item);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.badge ? 4 : -1);
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelement(1, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngClass", (tmp_4_0 = item_r5.icon) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("cIcon", item_r5.iconComponent == null ? null : item_r5.iconComponent.content)("customClasses", ɵɵpipeBind1(1, 3, item_r5))("name", item_r5.iconComponent == null ? null : item_r5.iconComponent.name);
  }
}
function SidebarNavLinkComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r5));
  }
}
function SidebarNavLinkComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavLinkComponent_ng_template_3_Conditional_0_Template, 2, 1, "span", 9)(1, SidebarNavLinkComponent_ng_template_3_Conditional_1_Template, 2, 5, ":svg:svg", 10)(2, SidebarNavLinkComponent_ng_template_3_Conditional_2_Template, 2, 3, "span", 6);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    ɵɵconditional((item_r5 == null ? null : item_r5.icon) ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional((item_r5 == null ? null : item_r5.iconComponent) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!(item_r5 == null ? null : item_r5.icon) && !(item_r5 == null ? null : item_r5.iconComponent) ? 2 : -1);
  }
}
function SidebarNavLabelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.getLabelIconClass());
  }
}
function SidebarNavLabelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.badge.text);
  }
}
function SidebarNavGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavGroupComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵpipe(1, "cSidebarNavBadge");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 2, ctx_r1.item));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.item.badge.text);
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngClass", (tmp_4_0 = item_r3.icon) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 6);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("cIcon", item_r3.iconComponent == null ? null : item_r3.iconComponent.content)("customClasses", ɵɵpipeBind1(1, 3, item_r3))("name", item_r3.iconComponent == null ? null : item_r3.iconComponent.name);
  }
}
function SidebarNavGroupComponent_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
    ɵɵpipe(1, "cSidebarNavIcon");
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpipeBind1(1, 1, item_r3));
  }
}
function SidebarNavGroupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavGroupComponent_ng_template_6_Conditional_0_Template, 2, 1, "span", 5)(1, SidebarNavGroupComponent_ng_template_6_Conditional_1_Template, 2, 5, ":svg:svg", 6)(2, SidebarNavGroupComponent_ng_template_6_Conditional_2_Template, 2, 3, "span", 3);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵconditional((item_r3 == null ? null : item_r3.icon) ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional((item_r3 == null ? null : item_r3.iconComponent) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!(item_r3 == null ? null : item_r3.icon) && !(item_r3 == null ? null : item_r3.iconComponent) ? 2 : -1);
  }
}
var _c11 = () => ({
  exact: true
});
function SidebarNavComponent_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-group", 1, 0);
    ɵɵpipe(2, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("dropdownMode", ctx_r1.dropdownMode)("item", item_r1)("ngClass", ɵɵpipeBind1(2, 5, item_r1))("routerLinkActiveOptions", ɵɵpureFunction0(7, _c11))("compact", ctx_r1.compact);
  }
}
function SidebarNavComponent_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-divider", 2);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("cHtmlAttr", (tmp_11_0 = item_r1.attributes) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ɵɵpureFunction0(5, _c2))("item", item_r1)("ngClass", ɵɵpipeBind1(1, 3, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-title", 2);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("cHtmlAttr", (tmp_11_0 = item_r1.attributes) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ɵɵpureFunction0(5, _c2))("item", item_r1)("ngClass", ɵɵpipeBind1(1, 3, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "c-sidebar-nav-label", 3);
    ɵɵpipe(1, "cSidebarNavItemClass");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("item", item_r1)("ngClass", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function SidebarNavComponent_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SidebarNavComponent_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "c-sidebar-nav-link", 4);
    ɵɵpipe(1, "cSidebarNavItemClass");
    ɵɵlistener("linkClick", function SidebarNavComponent_For_1_Case_5_Template_c_sidebar_nav_link_linkClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hideMobile());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("item", item_r1)("ngClass", ɵɵpipeBind1(1, 2, item_r1));
  }
}
function SidebarNavComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SidebarNavComponent_For_1_Case_0_Template, 3, 8, "c-sidebar-nav-group", 1)(1, SidebarNavComponent_For_1_Case_1_Template, 2, 6, "c-sidebar-nav-divider", 2)(2, SidebarNavComponent_For_1_Case_2_Template, 2, 6, "c-sidebar-nav-title", 2)(3, SidebarNavComponent_For_1_Case_3_Template, 2, 4, "c-sidebar-nav-label", 3)(4, SidebarNavComponent_For_1_Case_4_Template, 1, 0, "ng-container")(5, SidebarNavComponent_For_1_Case_5_Template, 2, 4, "c-sidebar-nav-link", 3);
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_10_0 = ctx_r1.helper.itemType(item_r1)) === "group" ? 0 : tmp_10_0 === "divider" ? 1 : tmp_10_0 === "title" ? 2 : tmp_10_0 === "label" ? 3 : tmp_10_0 === "empty" ? 4 : 5);
  }
}
var _c12 = () => ({
  outline: 0
});
function ToastHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction0(3, _c12));
    ɵɵproperty("cToastClose", ctx_r0.toast);
  }
}
function ToasterComponent_ng_template_0_Template(rf, ctx) {
}
var _c13 = ["tooltipTemplate"];
var _c14 = [[["", 8, "chart-wrapper"]], "*"];
var _c15 = [".chart-wrapper", "*"];
function WidgetStatAComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, WidgetStatAComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultWidgetValueTemplate_r2 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetValueTemplate) || defaultWidgetValueTemplate_r2);
  }
}
function WidgetStatAComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, WidgetStatAComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultWidgetTitleTemplate_r3 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetTitleTemplate) || defaultWidgetTitleTemplate_r3);
  }
}
function WidgetStatAComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatAComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.title, "\n");
  }
}
function WidgetStatAComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.value, "\n");
  }
}
function WidgetStatAComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function WidgetStatAComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function WidgetStatBComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value());
  }
}
function WidgetStatBComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title());
  }
}
function WidgetStatBComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.inverse() ? "text-white text-opacity-75" : "text-body-secondary");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.text(), " ");
  }
}
function WidgetStatCComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, WidgetStatCComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultWidgetIconTemplate_r2 = ɵɵreference(6);
    ɵɵproperty("ngClass", ctx_r0.iconClasses);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetIconTemplate) || defaultWidgetIconTemplate_r2);
  }
}
function WidgetStatCComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.valueClasses);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value, " ");
  }
}
function WidgetStatCComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.titleClasses);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
  }
}
function WidgetStatCComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatCComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WidgetStatCComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultWidgetProgressTemplate_r3 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetProgressTemplate) || defaultWidgetProgressTemplate_r3);
  }
}
function WidgetStatCComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.icon, "\n");
  }
}
function WidgetStatCComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function WidgetStatDComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
}
function WidgetStatDComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WidgetStatDComponent_For_4_Conditional_0_Template, 1, 0, "div", 2);
    ɵɵelementStart(1, "c-col")(2, "div", 3);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_6_r2 = ctx.$index;
    ɵɵconditional(ɵ$index_6_r2 % 2 !== 0 ? 0 : -1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r1.value);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r1.title);
  }
}
function WidgetStatEComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.titleClasses);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function WidgetStatEComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function WidgetStatFComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function WidgetStatFComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "c-card-footer");
    ɵɵtemplate(1, WidgetStatFComponent_Conditional_9_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultFooterIconTemplate_r2 = ɵɵreference(13);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r0.templates == null ? null : ctx_r0.templates.widgetFooterTemplate) || defaultFooterIconTemplate_r2);
  }
}
function WidgetStatFComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.icon);
  }
}
function WidgetStatFComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.footer);
  }
}
var BreakpointInfix;
(function(BreakpointInfix2) {
  BreakpointInfix2["xs"] = "xs";
  BreakpointInfix2["sm"] = "sm";
  BreakpointInfix2["md"] = "md";
  BreakpointInfix2["lg"] = "lg";
  BreakpointInfix2["xl"] = "xl";
  BreakpointInfix2["xxl"] = "xxl";
})(BreakpointInfix || (BreakpointInfix = {}));
var _ElementRefDirective = class _ElementRefDirective {
  constructor() {
    this.elementRef = inject(ElementRef);
  }
};
_ElementRefDirective.ɵfac = function ElementRefDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ElementRefDirective)();
};
_ElementRefDirective.ɵdir = ɵɵdefineDirective({
  type: _ElementRefDirective,
  selectors: [["", "cElementRef", ""]],
  exportAs: ["cElementRef"],
  standalone: true
});
var ElementRefDirective = _ElementRefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementRefDirective, [{
    type: Directive,
    args: [{
      selector: "[cElementRef]",
      exportAs: "cElementRef",
      standalone: true
    }]
  }], null, null);
})();
var _HtmlAttributesDirective = class _HtmlAttributesDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  ngOnInit() {
    const attribs = this.cHtmlAttr;
    for (const attr in attribs) {
      if (attr === "style" && typeof attribs[attr] === "object") {
        this.setStyle(attribs[attr]);
      } else if (attr === "class") {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }
  setStyle(styles) {
    for (const style2 in styles) {
      if (style2) {
        this.renderer.setStyle(this.el.nativeElement, style2, styles[style2]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(this.el.nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? this.renderer.setAttribute(this.el.nativeElement, key, value) : this.renderer.removeAttribute(this.el.nativeElement, key);
  }
};
_HtmlAttributesDirective.ɵfac = function HtmlAttributesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HtmlAttributesDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HtmlAttributesDirective.ɵdir = ɵɵdefineDirective({
  type: _HtmlAttributesDirective,
  selectors: [["", "cHtmlAttr", ""]],
  inputs: {
    cHtmlAttr: "cHtmlAttr"
  },
  exportAs: ["cHtmlAttr"],
  standalone: true
});
var HtmlAttributesDirective = _HtmlAttributesDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    cHtmlAttr: [{
      type: Input
    }]
  });
})();
var _TemplateIdDirective = class _TemplateIdDirective {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
};
_TemplateIdDirective.ɵfac = function TemplateIdDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TemplateIdDirective)();
};
_TemplateIdDirective.ɵdir = ɵɵdefineDirective({
  type: _TemplateIdDirective,
  selectors: [["", "cTemplateId", ""]],
  inputs: {
    id: [0, "cTemplateId", "id"]
  },
  standalone: true
});
var TemplateIdDirective = _TemplateIdDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateIdDirective, [{
    type: Directive,
    args: [{
      selector: "[cTemplateId]",
      standalone: true
    }]
  }], null, {
    id: [{
      type: Input,
      args: ["cTemplateId"]
    }]
  });
})();
var _hostElement, _renderer;
var _ThemeDirective = class _ThemeDirective {
  constructor() {
    __privateAdd(this, _hostElement, inject(ElementRef));
    __privateAdd(this, _renderer, inject(Renderer2));
  }
  /**
   * Add dark theme attribute.
   * @type 'dark' | 'light' | undefined
   */
  set colorScheme(scheme) {
    !!scheme ? this.setTheme(scheme) : this.unsetTheme();
  }
  /**
   * Add dark theme attribute.
   * @type boolean
   */
  set dark(darkTheme) {
    darkTheme ? this.setTheme("dark") : this.unsetTheme();
  }
  setTheme(theme) {
    if (theme) {
      __privateGet(this, _renderer).setAttribute(__privateGet(this, _hostElement).nativeElement, "data-coreui-theme", theme);
    }
  }
  unsetTheme() {
    __privateGet(this, _renderer).removeAttribute(__privateGet(this, _hostElement).nativeElement, "data-coreui-theme");
  }
};
_hostElement = new WeakMap();
_renderer = new WeakMap();
_ThemeDirective.ɵfac = function ThemeDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeDirective)();
};
_ThemeDirective.ɵdir = ɵɵdefineDirective({
  type: _ThemeDirective,
  selectors: [["", "cTheme", ""]],
  inputs: {
    colorScheme: "colorScheme",
    dark: [2, "dark", "dark", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ThemeDirective = _ThemeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeDirective, [{
    type: Directive,
    args: [{
      selector: "[cTheme]",
      standalone: true
    }]
  }], null, {
    colorScheme: [{
      type: Input
    }],
    dark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _SharedModule = class _SharedModule {
  static forRoot() {
    return {
      ngModule: _SharedModule
    };
  }
};
_SharedModule.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedModule)();
};
_SharedModule.ɵmod = ɵɵdefineNgModule({
  type: _SharedModule,
  imports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
  exports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective]
});
_SharedModule.ɵinj = ɵɵdefineInjector({});
var SharedModule = _SharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
      exports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective]
    }]
  }], null, null);
})();
var _AccordionButtonDirective = class _AccordionButtonDirective {
  constructor() {
    this.type = "button";
  }
  get hostClasses() {
    return {
      "accordion-button": true,
      collapsed: this.collapsed
    };
  }
  get ariaExpanded() {
    return !this.collapsed;
  }
};
_AccordionButtonDirective.ɵfac = function AccordionButtonDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionButtonDirective)();
};
_AccordionButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _AccordionButtonDirective,
  selectors: [["", "cAccordionButton", ""]],
  hostAttrs: [1, "accordion-button"],
  hostVars: 4,
  hostBindings: function AccordionButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-expanded", ctx.ariaExpanded);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    collapsed: "collapsed",
    type: "type"
  },
  standalone: true
});
var AccordionButtonDirective = _AccordionButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cAccordionButton]",
      standalone: true,
      host: {
        class: "accordion-button"
      }
    }]
  }], null, {
    collapsed: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }]
  });
})();
var _AccordionService = class _AccordionService {
  constructor() {
    this.items = [];
    this.alwaysOpen = false;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  toggleItem(item) {
    item.visible = !item.visible;
    this.closeOtherItems(item);
  }
  closeOtherItems(openItem) {
    if (!this.alwaysOpen) {
      this.items.forEach((item) => {
        if (item !== openItem) {
          item.visible = false;
        }
      });
    }
  }
};
_AccordionService.ɵfac = function AccordionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionService)();
};
_AccordionService.ɵprov = ɵɵdefineInjectable({
  token: _AccordionService,
  factory: _AccordionService.ɵfac
});
var AccordionService = _AccordionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionService, [{
    type: Injectable
  }], null, null);
})();
var _accordionService;
var _AccordionComponent = class _AccordionComponent {
  constructor() {
    __privateAdd(this, _accordionService);
    __privateSet(this, _accordionService, inject(AccordionService));
    this.flush = false;
  }
  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  set alwaysOpen(value) {
    __privateGet(this, _accordionService).alwaysOpen = value;
  }
  get alwaysOpen() {
    return __privateGet(this, _accordionService).alwaysOpen;
  }
  get hostClasses() {
    return {
      accordion: true,
      "accordion-flush": this.flush
    };
  }
};
_accordionService = new WeakMap();
_AccordionComponent.ɵfac = function AccordionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionComponent)();
};
_AccordionComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionComponent,
  selectors: [["c-accordion"]],
  hostAttrs: [1, "accordion"],
  hostVars: 2,
  hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    flush: [2, "flush", "flush", booleanAttribute],
    alwaysOpen: [2, "alwaysOpen", "alwaysOpen", booleanAttribute]
  },
  exportAs: ["cAccordionItem"],
  standalone: true,
  features: [ɵɵProvidersFeature([AccordionService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var AccordionComponent = _AccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion",
      template: "<ng-content />",
      exportAs: "cAccordionItem",
      providers: [AccordionService],
      standalone: true,
      host: {
        class: "accordion"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    flush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    alwaysOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var expandAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseAnimation = animation([style({
  height: "*",
  minHeight: "*"
}), animate("{{ time }} {{ easing }}", style({
  height: 0,
  minHeight: 0
}))]);
var expandHorizontalAnimation = animation([animate("{{ time }} {{ easing }}")]);
var collapseHorizontalAnimation = animation([
  // style({ opacity: '*' }),
  animate(
    "{{ time }} {{ easing }}"
    // style({ opacity: 0 })
  )
]);
var _CollapseDirective = class _CollapseDirective {
  /**
   * Toggle the visibility of collapsible element.
   * @type boolean
   * @default false
   */
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  constructor(hostElement, renderer, animationBuilder) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.animationBuilder = animationBuilder;
    this.animate = true;
    this.horizontal = false;
    this._visible = false;
    this.navbar = false;
    this.duration = "350ms";
    this.transition = "ease";
    this.collapseChange = new EventEmitter();
    this.collapsing = false;
    this.host = this.hostElement.nativeElement;
    this.renderer.setStyle(this.host, "display", "none");
  }
  get hostClasses() {
    return {
      "navbar-collapse": this.navbar,
      "collapse-horizontal": this.horizontal
    };
  }
  ngAfterViewInit() {
    if (this.visible) {
      this.toggle();
    }
  }
  ngOnDestroy() {
    this.destroyPlayer();
  }
  ngOnChanges(changes) {
    if (changes["visible"]) {
      if (!changes["visible"].firstChange || !changes["visible"].currentValue) {
        this.toggle(changes["visible"].currentValue);
      }
    }
  }
  ngDoCheck() {
    if (this._visible !== this.visible) {
      this.toggle();
    }
  }
  toggle(visible = this.visible) {
    this.createPlayer(visible);
    this.player?.play();
  }
  destroyPlayer() {
    this.player?.destroy();
  }
  createPlayer(visible = this.visible) {
    if (this.player?.hasStarted()) {
      this.destroyPlayer();
    }
    if (visible) {
      this.renderer.removeStyle(this.host, "display");
    }
    const duration = this.animate ? this.duration : "0ms";
    const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;
    const dimension = this.horizontal ? "width" : "height";
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    const animationFactory = this.animationBuilder.build(useAnimation(visible ? expand : collapse, {
      params: {
        time: duration,
        easing: this.transition
      }
    }));
    this.player = animationFactory.create(this.host);
    this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);
    !visible && this.host.offsetHeight;
    this.player.onStart(() => {
      this.setMaxSize();
      this.renderer.removeClass(this.host, "collapse");
      this.renderer.addClass(this.host, "collapsing");
      this.renderer.removeClass(this.host, "show");
      this.collapsing = true;
      if (visible) {
        this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
      } else {
        this.renderer.setStyle(this.host, dimension, "");
      }
      this.collapseChange.emit(visible ? "opening" : "collapsing");
    });
    this.player.onDone(() => {
      this.visible = visible;
      this.collapsing = false;
      this.renderer.removeClass(this.host, "collapsing");
      this.renderer.addClass(this.host, "collapse");
      if (visible) {
        this.renderer.addClass(this.host, "show");
        this.renderer.setStyle(this.host, dimension, "");
      } else {
        this.renderer.removeClass(this.host, "show");
      }
      this.collapseChange.emit(visible ? "open" : "collapsed");
    });
  }
  setMaxSize() {
    if (this.horizontal) {
      this.scrollWidth = this.host.scrollWidth;
      this.scrollWidth > 0 && this.renderer.setStyle(this.host, "maxWidth", `${this.scrollWidth}px`);
    }
  }
};
_CollapseDirective.ɵfac = function CollapseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollapseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AnimationBuilder));
};
_CollapseDirective.ɵdir = ɵɵdefineDirective({
  type: _CollapseDirective,
  selectors: [["", "cCollapse", ""]],
  hostVars: 2,
  hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    animate: [2, "animate", "animate", booleanAttribute],
    horizontal: [2, "horizontal", "horizontal", booleanAttribute],
    visible: [2, "visible", "visible", booleanAttribute],
    navbar: [2, "navbar", "navbar", booleanAttribute],
    duration: "duration",
    transition: "transition"
  },
  outputs: {
    collapseChange: "collapseChange"
  },
  exportAs: ["cCollapse"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CollapseDirective = _CollapseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseDirective, [{
    type: Directive,
    args: [{
      selector: "[cCollapse]",
      exportAs: "cCollapse",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: AnimationBuilder
  }], {
    animate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    horizontal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    navbar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    duration: [{
      type: Input
    }],
    transition: [{
      type: Input
    }],
    collapseChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CollapseModule = class _CollapseModule {
  static forRoot() {
    return {
      ngModule: _CollapseModule,
      providers: []
    };
  }
};
_CollapseModule.ɵfac = function CollapseModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollapseModule)();
};
_CollapseModule.ɵmod = ɵɵdefineNgModule({
  type: _CollapseModule,
  imports: [CollapseDirective],
  exports: [CollapseDirective]
});
_CollapseModule.ɵinj = ɵɵdefineInjector({});
var CollapseModule = _CollapseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseModule, [{
    type: NgModule,
    args: [{
      exports: [CollapseDirective],
      imports: [CollapseDirective]
    }]
  }], null, null);
})();
var nextId$2 = 0;
var _AccordionItemComponent = class _AccordionItemComponent {
  constructor(accordionService) {
    this.accordionService = accordionService;
    this.visible = false;
    this.contentId = `accordion-item-${nextId$2++}`;
    this.itemContext = {
      $implicit: this.visible
    };
    this.templates = {};
  }
  set open(value) {
    console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
    this.visible = value || this.visible;
  }
  get open() {
    return this.visible;
  }
  ngOnInit() {
    this.accordionService.addItem(this);
  }
  ngOnDestroy() {
    this.accordionService.removeItem(this);
  }
  toggleItem() {
    this.accordionService.toggleItem(this);
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_AccordionItemComponent.ɵfac = function AccordionItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionItemComponent)(ɵɵdirectiveInject(AccordionService));
};
_AccordionItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionItemComponent,
  selectors: [["c-accordion-item"]],
  contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostAttrs: [1, "accordion-item"],
  inputs: {
    visible: [2, "visible", "visible", booleanAttribute],
    open: "open"
  },
  exportAs: ["cAccordionItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 7,
  consts: [["defaultAccordionHeaderTemplate", ""], ["defaultAccordionHeaderContentTemplate", ""], ["defaultAccordionBodyTemplate", ""], ["defaultAccordionBodyContentTemplate", ""], [1, "accordion-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cCollapse", "", 1, "accordion-collapse", 3, "visible", "id"], ["cAccordionButton", "", 3, "click", "collapsed"], [1, "accordion-body"]],
  template: function AccordionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "div", 4);
      ɵɵtemplate(2, AccordionItemComponent_ng_container_2_Template, 1, 0, "ng-container", 5);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 6);
      ɵɵtemplate(4, AccordionItemComponent_ng_container_4_Template, 1, 0, "ng-container", 5);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
      ɵɵtemplate(5, AccordionItemComponent_ng_template_5_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, AccordionItemComponent_ng_template_7_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(9, AccordionItemComponent_ng_template_9_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(11, AccordionItemComponent_ng_template_11_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultAccordionHeaderTemplate_r5 = ɵɵreference(6);
      const defaultAccordionBodyTemplate_r6 = ɵɵreference(10);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.templates["accordionHeaderTemplate"] || defaultAccordionHeaderTemplate_r5)("ngTemplateOutletContext", ctx.itemContext);
      ɵɵadvance();
      ɵɵproperty("visible", ctx.visible)("id", ctx.contentId);
      ɵɵattribute("aria-expanded", ctx.visible);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.templates["accordionBodyTemplate"] || defaultAccordionBodyTemplate_r6)("ngTemplateOutletContext", ctx.itemContext);
    }
  },
  dependencies: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"]
});
var AccordionItemComponent = _AccordionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionItemComponent, [{
    type: Component,
    args: [{
      selector: "c-accordion-item",
      exportAs: "cAccordionItem",
      standalone: true,
      imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective],
      host: {
        class: "accordion-item"
      },
      template: `<ng-container>
  <div class="accordion-header">
    <ng-container *ngTemplateOutlet="templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext" />
  </div>
  <div class="accordion-collapse" cCollapse [visible]="visible" [attr.aria-expanded]="visible" [id]="contentId">
    <ng-container *ngTemplateOutlet="templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext" />
  </div>
</ng-container>

<ng-template #defaultAccordionHeaderTemplate>
  <button cAccordionButton [collapsed]="!visible" [attr.aria-controls]="contentId" (click)="toggleItem()">
    <ng-container
      *ngTemplateOutlet="templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext">
    </ng-container>
  </button>
</ng-template>

<ng-template #defaultAccordionHeaderContentTemplate>
  <ng-content />
</ng-template>

<ng-template #defaultAccordionBodyTemplate>
  <div class="accordion-body">
    <ng-container
      *ngTemplateOutlet="templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext">
    </ng-container>
  </div>
</ng-template>

<ng-template #defaultAccordionBodyContentTemplate>
  <ng-content />
</ng-template>
`,
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], () => [{
    type: AccordionService
  }], {
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    open: [{
      type: Input
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }]
  });
})();
var _AccordionModule = class _AccordionModule {
};
_AccordionModule.ɵfac = function AccordionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionModule)();
};
_AccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _AccordionModule,
  imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent]
});
_AccordionModule.ɵinj = ɵɵdefineInjector({
  providers: [AccordionService]
});
var AccordionModule = _AccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [AccordionButtonDirective, AccordionComponent, AccordionItemComponent],
      exports: [AccordionComponent, AccordionButtonDirective, AccordionItemComponent],
      providers: [AccordionService]
    }]
  }], null, null);
})();
var _AlertHeadingDirective = class _AlertHeadingDirective {
};
_AlertHeadingDirective.ɵfac = function AlertHeadingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertHeadingDirective)();
};
_AlertHeadingDirective.ɵdir = ɵɵdefineDirective({
  type: _AlertHeadingDirective,
  selectors: [["", "cAlertHeading", ""]],
  hostAttrs: [1, "alert-heading"],
  standalone: true
});
var AlertHeadingDirective = _AlertHeadingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertHeadingDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertHeading]",
      standalone: true,
      host: {
        class: "alert-heading"
      }
    }]
  }], null, null);
})();
var _AlertLinkDirective = class _AlertLinkDirective {
};
_AlertLinkDirective.ɵfac = function AlertLinkDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertLinkDirective)();
};
_AlertLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _AlertLinkDirective,
  selectors: [["", "cAlertLink", ""]],
  hostAttrs: [1, "alert-link"],
  standalone: true
});
var AlertLinkDirective = _AlertLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlertLink]",
      standalone: true,
      host: {
        class: "alert-link"
      }
    }]
  }], null, null);
})();
var _ButtonDirective = class _ButtonDirective {
  constructor() {
    this.active = false;
    this.color = "primary";
    this.disabled = false;
    this.size = "";
    this.type = "button";
  }
  get hostClasses() {
    return {
      btn: true,
      [`btn-${this.color}`]: !!this.color && !this.variant,
      [`btn-${this.variant}`]: !!this.variant && !this.color,
      [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
      [`btn-${this.size}`]: !!this.size,
      [`${this.shape}`]: !!this.shape,
      disabled: this.disabled,
      active: this.active
    };
  }
  get ariaDisabled() {
    return this.disabled || null;
  }
  get isActive() {
    return this.active || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get tabIndex() {
    return this.disabled ? "-1" : null;
  }
};
_ButtonDirective.ɵfac = function ButtonDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonDirective)();
};
_ButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _ButtonDirective,
  selectors: [["", "cButton", ""]],
  hostAttrs: [1, "btn"],
  hostVars: 7,
  hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-disabled", ctx.ariaDisabled)("aria-pressed", ctx.isActive)("disabled", ctx.attrDisabled)("tabindex", ctx.tabIndex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [2, "active", "active", booleanAttribute],
    color: "color",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    shape: "shape",
    size: "size",
    type: "type",
    variant: "variant"
  },
  exportAs: ["cButton"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ButtonDirective = _ButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[cButton]",
      exportAs: "cButton",
      standalone: true,
      host: {
        class: "btn"
      }
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    variant: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isActive: [{
      type: HostBinding,
      args: ["attr.aria-pressed"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var _ButtonCloseDirective = class _ButtonCloseDirective extends ButtonDirective {
  constructor() {
    super(...arguments);
    this.white = false;
  }
  get hostClasses() {
    return {
      btn: true,
      "btn-close": true,
      "btn-close-white": this.white,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      active: this.active
    };
  }
};
_ButtonCloseDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵButtonCloseDirective_BaseFactory;
  return function ButtonCloseDirective_Factory(__ngFactoryType__) {
    return (ɵButtonCloseDirective_BaseFactory || (ɵButtonCloseDirective_BaseFactory = ɵɵgetInheritedFactory(_ButtonCloseDirective)))(__ngFactoryType__ || _ButtonCloseDirective);
  };
})();
_ButtonCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _ButtonCloseDirective,
  selectors: [["", "cButtonClose", ""]],
  hostAttrs: [1, "btn", "btn-close"],
  hostVars: 2,
  hostBindings: function ButtonCloseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    white: [2, "white", "white", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["dark", "dark"]
  }]), ɵɵInheritDefinitionFeature]
});
var ButtonCloseDirective = _ButtonCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cButtonClose]",
      standalone: true,
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        class: "btn btn-close"
      }
    }]
  }], null, {
    white: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonModule = class _ButtonModule {
};
_ButtonModule.ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonModule)();
};
_ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _ButtonModule,
  imports: [ButtonDirective, ButtonCloseDirective],
  exports: [ButtonDirective, ButtonCloseDirective]
});
_ButtonModule.ɵinj = ɵɵdefineInjector({});
var ButtonModule = _ButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonDirective, ButtonCloseDirective],
      exports: [ButtonDirective, ButtonCloseDirective]
    }]
  }], null, null);
})();
var _visible;
var _AlertComponent = class _AlertComponent {
  constructor() {
    __privateAdd(this, _visible);
    this.color = "primary";
    this.role = "alert";
    this.visibleChange = new EventEmitter();
    this.templates = {};
    this.dismissible = false;
    this.fade = false;
    __privateSet(this, _visible, true);
  }
  /**
   * Toggle the visibility of alert component.
   * @type boolean
   */
  set visible(value) {
    if (__privateGet(this, _visible) !== value) {
      __privateSet(this, _visible, value);
      this.visibleChange.emit(value);
    }
  }
  get visible() {
    return __privateGet(this, _visible);
  }
  get animationDisabled() {
    return !this.fade;
  }
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  get hostClasses() {
    return {
      alert: true,
      "alert-dismissible": this.dismissible,
      fade: this.fade,
      show: !this.hide,
      [`alert-${this.color}`]: !!this.color && this.variant !== "solid",
      [`bg-${this.color}`]: !!this.color && this.variant === "solid",
      "text-white": !!this.color && this.variant === "solid"
    };
  }
  onAnimationStart($event) {
    this.onAnimationEvent($event);
  }
  onAnimationDone($event) {
    this.onAnimationEvent($event);
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
  onAnimationEvent(event) {
    this.hide = event.phaseName === "start" && event.toState === "show";
    if (event.phaseName === "done") {
      this.hide = event.toState === "hide" || event.toState === "void";
      if (event.toState === "show") {
        this.hide = false;
      }
    }
  }
};
_visible = new WeakMap();
_AlertComponent.ɵfac = function AlertComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertComponent)();
};
_AlertComponent.ɵcmp = ɵɵdefineComponent({
  type: _AlertComponent,
  selectors: [["c-alert"]],
  contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 5,
  hostBindings: function AlertComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@fadeInOut.start", function AlertComponent_animation_fadeInOut_start_HostBindingHandler($event) {
        return ctx.onAnimationStart($event);
      })("@fadeInOut.done", function AlertComponent_animation_fadeInOut_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.animationDisabled)("@fadeInOut", ctx.animateType);
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    role: "role",
    variant: "variant",
    dismissible: [2, "dismissible", "dismissible", booleanAttribute],
    fade: [2, "fade", "fade", booleanAttribute],
    visible: [2, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cAlert"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [["defaultAlertButtonCloseTemplate", ""], [4, "ngTemplateOutlet"], ["aria-label", "Close", "cButtonClose", "", 3, "click"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AlertComponent_Conditional_0_Template, 2, 1)(1, AlertComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.visible || !ctx.hide ? 0 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, ButtonCloseDirective],
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
  data: {
    animation: [trigger("fadeInOut", [state("show", style({
      opacity: 1,
      height: "*",
      padding: "*",
      border: "*",
      margin: "*"
    })), state("hide", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), state("void", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])]
  }
});
var AlertComponent = _AlertComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "c-alert",
      exportAs: "cAlert",
      standalone: true,
      imports: [NgTemplateOutlet, ButtonCloseDirective],
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate(".3s ease-out")]), transition("hide => show", [animate(".3s ease-in")]), transition("show => void", [animate(".3s ease-out")]), transition("void => show", [animate(".3s ease-in")])])],
      template: '@if (visible || !hide) {\n  @if (dismissible) {\n    <ng-container *ngTemplateOutlet="templates?.alertButtonCloseTemplate || defaultAlertButtonCloseTemplate" />\n  }\n  <ng-content />\n}\n<ng-template #defaultAlertButtonCloseTemplate>\n  <button (click)="visible=false" aria-label="Close" cButtonClose></button>\n</ng-template>\n',
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    variant: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    dismissible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fade: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    animationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    animateType: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    onAnimationStart: [{
      type: HostListener,
      args: ["@fadeInOut.start", ["$event"]]
    }],
    onAnimationDone: [{
      type: HostListener,
      args: ["@fadeInOut.done", ["$event"]]
    }]
  });
})();
var _AlertModule = class _AlertModule {
};
_AlertModule.ɵfac = function AlertModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertModule)();
};
_AlertModule.ɵmod = ɵɵdefineNgModule({
  type: _AlertModule,
  imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
  exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
});
_AlertModule.ɵinj = ɵɵdefineInjector({});
var AlertModule = _AlertModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertModule, [{
    type: NgModule,
    args: [{
      imports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective],
      exports: [AlertComponent, AlertHeadingDirective, AlertLinkDirective]
    }]
  }], null, null);
})();
var _AlignDirective = class _AlignDirective {
  get hostClasses() {
    return {
      [`align-${this.align}`]: !!this.align
    };
  }
};
_AlignDirective.ɵfac = function AlignDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlignDirective)();
};
_AlignDirective.ɵdir = ɵɵdefineDirective({
  type: _AlignDirective,
  selectors: [["", "cAlign", ""]],
  hostVars: 2,
  hostBindings: function AlignDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: [0, "cAlign", "align"]
  },
  standalone: true
});
var AlignDirective = _AlignDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignDirective, [{
    type: Directive,
    args: [{
      selector: "[cAlign]",
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["cAlign"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BgColorDirective = class _BgColorDirective {
  constructor() {
    this.color = "";
  }
  get hostClasses() {
    return {
      [`bg-${this.color}`]: !!this.color,
      "bg-gradient": this.gradient
    };
  }
};
_BgColorDirective.ɵfac = function BgColorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BgColorDirective)();
};
_BgColorDirective.ɵdir = ɵɵdefineDirective({
  type: _BgColorDirective,
  selectors: [["", "cBgColor", ""]],
  hostVars: 2,
  hostBindings: function BgColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [0, "cBgColor", "color"],
    gradient: "gradient"
  },
  standalone: true
});
var BgColorDirective = _BgColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cBgColor]",
      standalone: true
    }]
  }], null, {
    color: [{
      type: Input,
      args: ["cBgColor"]
    }],
    gradient: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BorderDirective = class _BorderDirective {
  constructor() {
    this.border = true;
  }
  get hostClasses() {
    if (typeof this.border === "boolean") {
      return {
        border: true
      };
    }
    if (typeof this.border === "number" || typeof this.border === "string") {
      return {
        border: true,
        [`border-${this.border}`]: true
      };
    }
    if (typeof this.border === "object") {
      const borderObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        color: void 0
      }, this.border);
      const keys = Object.keys(borderObj).filter((key) => borderObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = borderObj[key];
        if (typeof val === "boolean") {
          classes[`border-${key}`] = true;
        } else if (typeof val === "number" || typeof val === "string") {
          classes[`border-${key}-${val}`] = true;
        } else if (typeof val === "object") {
          if ("color" in val) {
            classes[`border-${key}-${val.color}`] = true;
          }
          if ("width" in val) {
            classes[`border-${key}-${val.width}`] = true;
          }
        }
      });
      return Object.entries(classes).length === 0 ? {
        border: false
      } : classes;
    }
  }
};
_BorderDirective.ɵfac = function BorderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BorderDirective)();
};
_BorderDirective.ɵdir = ɵɵdefineDirective({
  type: _BorderDirective,
  selectors: [["", "cBorder", ""]],
  hostVars: 2,
  hostBindings: function BorderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    border: [0, "cBorder", "border"]
  },
  standalone: true
});
var BorderDirective = _BorderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BorderDirective, [{
    type: Directive,
    args: [{
      selector: "[cBorder]",
      standalone: true
    }]
  }], null, {
    border: [{
      type: Input,
      args: ["cBorder"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _RoundedDirective = class _RoundedDirective {
  constructor() {
    this.rounded = true;
  }
  get hostClasses() {
    if (typeof this.rounded === "boolean") {
      return {
        rounded: true
      };
    }
    if (typeof this.rounded === "number" || typeof this.rounded === "string") {
      return {
        [`rounded-${this.rounded}`]: true
      };
    }
    if (typeof this.rounded === "object") {
      const roundedObj = __spreadValues({
        top: void 0,
        end: void 0,
        bottom: void 0,
        start: void 0,
        circle: void 0,
        pill: void 0,
        size: void 0
      }, this.rounded);
      const keys = Object.keys(roundedObj).filter((key) => roundedObj[key] !== void 0);
      const classes = {};
      keys.forEach((key) => {
        const val = roundedObj[key];
        if (typeof val === "boolean") {
          classes[`rounded-${key}`] = val;
        } else {
          classes[`rounded-${val}`] = true;
        }
      });
      return Object.entries(classes).length === 0 ? {
        rounded: false
      } : classes;
    }
  }
};
_RoundedDirective.ɵfac = function RoundedDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoundedDirective)();
};
_RoundedDirective.ɵdir = ɵɵdefineDirective({
  type: _RoundedDirective,
  selectors: [["", "cRounded", ""]],
  hostVars: 2,
  hostBindings: function RoundedDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    rounded: [0, "cRounded", "rounded"]
  },
  standalone: true
});
var RoundedDirective = _RoundedDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoundedDirective, [{
    type: Directive,
    args: [{
      selector: "[cRounded]",
      standalone: true
    }]
  }], null, {
    rounded: [{
      type: Input,
      args: ["cRounded"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef, _document, _elementRef, _scrolled, _scrollEffect, _observable, _shadowClass;
var _ShadowOnScrollDirective = class _ShadowOnScrollDirective {
  constructor() {
    __privateAdd(this, _destroyRef, inject(DestroyRef));
    __privateAdd(this, _document, inject(DOCUMENT));
    __privateAdd(this, _elementRef, inject(ElementRef));
    __privateAdd(this, _scrolled, signal(false));
    __privateAdd(this, _scrollEffect, effect(() => {
      __privateGet(this, _elementRef).nativeElement.classList.toggle(__privateGet(this, _shadowClass), __privateGet(this, _scrolled).call(this));
    }));
    __privateAdd(this, _observable);
    __privateAdd(this, _shadowClass, "shadow-sm");
    __privateGet(this, _destroyRef).onDestroy(() => {
      __privateGet(this, _scrollEffect)?.destroy();
    });
  }
  set cShadowOnScroll(value) {
    __privateGet(this, _scrolled).set(false);
    if (value) {
      __privateSet(this, _shadowClass, value === true ? "shadow" : `shadow-${value}`);
      __privateSet(this, _observable, fromEvent(__privateGet(this, _document), "scroll").pipe(takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe((scrolled) => {
        __privateGet(this, _scrolled).set(__privateGet(this, _document).documentElement.scrollTop > 0);
      }));
    } else {
      __privateGet(this, _observable)?.unsubscribe();
    }
  }
};
_destroyRef = new WeakMap();
_document = new WeakMap();
_elementRef = new WeakMap();
_scrolled = new WeakMap();
_scrollEffect = new WeakMap();
_observable = new WeakMap();
_shadowClass = new WeakMap();
_ShadowOnScrollDirective.ɵfac = function ShadowOnScrollDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShadowOnScrollDirective)();
};
_ShadowOnScrollDirective.ɵdir = ɵɵdefineDirective({
  type: _ShadowOnScrollDirective,
  selectors: [["", "cShadowOnScroll", ""]],
  inputs: {
    cShadowOnScroll: "cShadowOnScroll"
  },
  standalone: true
});
var ShadowOnScrollDirective = _ShadowOnScrollDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShadowOnScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[cShadowOnScroll]",
      standalone: true
    }]
  }], () => [], {
    cShadowOnScroll: [{
      type: Input
    }]
  });
})();
var _TextColorDirective = class _TextColorDirective {
  constructor() {
    this.color = input("", {
      alias: "cTextColor"
    });
  }
  get hostClasses() {
    const color = this.color();
    return {
      [`text-${color}`]: !!color
    };
  }
};
_TextColorDirective.ɵfac = function TextColorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextColorDirective)();
};
_TextColorDirective.ɵdir = ɵɵdefineDirective({
  type: _TextColorDirective,
  selectors: [["", "cTextColor", ""]],
  hostVars: 2,
  hostBindings: function TextColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [1, "cTextColor", "color"]
  },
  standalone: true
});
var TextColorDirective = _TextColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTextColor]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TextBgColorDirective = class _TextBgColorDirective {
  constructor() {
    this.textBgColor = input("", {
      alias: "cTextBgColor"
    });
  }
  get hostClasses() {
    const color = this.textBgColor();
    return {
      [`text-bg-${color}`]: !!color
    };
  }
};
_TextBgColorDirective.ɵfac = function TextBgColorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextBgColorDirective)();
};
_TextBgColorDirective.ɵdir = ɵɵdefineDirective({
  type: _TextBgColorDirective,
  selectors: [["", "cTextBgColor", ""]],
  hostVars: 2,
  hostBindings: function TextBgColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    textBgColor: [1, "cTextBgColor", "textBgColor"]
  },
  standalone: true
});
var TextBgColorDirective = _TextBgColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBgColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTextBgColor]",
      standalone: true
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var UTILITY_DIRECTIVES = [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective];
var _UtilitiesModule = class _UtilitiesModule {
};
_UtilitiesModule.ɵfac = function UtilitiesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilitiesModule)();
};
_UtilitiesModule.ɵmod = ɵɵdefineNgModule({
  type: _UtilitiesModule,
  imports: [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective],
  exports: [AlignDirective, BgColorDirective, BorderDirective, RoundedDirective, ShadowOnScrollDirective, TextColorDirective, TextBgColorDirective]
});
_UtilitiesModule.ɵinj = ɵɵdefineInjector({});
var UtilitiesModule = _UtilitiesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilitiesModule, [{
    type: NgModule,
    args: [{
      imports: [...UTILITY_DIRECTIVES],
      exports: [...UTILITY_DIRECTIVES]
    }]
  }], null, null);
})();
var _AvatarComponent = class _AvatarComponent {
  constructor() {
    this.color = input();
    this.shape = input();
    this.size = input("md");
    this.alt = input("");
    this.src = input();
    this.status = input();
    this.textColor = input();
    this.statusClass = computed(() => {
      return {
        "avatar-status": true,
        [`bg-${this.status()}`]: !!this.status()
      };
    });
  }
  get hostClasses() {
    return {
      avatar: true,
      [`avatar-${this.size()}`]: !!this.size(),
      [`bg-${this.color()}`]: !!this.color(),
      [`${this.shape()}`]: !!this.shape()
    };
  }
};
_AvatarComponent.ɵfac = function AvatarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarComponent)();
};
_AvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _AvatarComponent,
  selectors: [["c-avatar"]],
  hostAttrs: [1, "avatar"],
  hostVars: 2,
  hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [1, "color"],
    shape: [1, "shape"],
    size: [1, "size"],
    alt: [1, "alt"],
    src: [1, "src"],
    status: [1, "status"],
    textColor: [1, "textColor"]
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: TextColorDirective,
    inputs: ["cTextColor", "textColor"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[3, "ngClass"], ["fill", "", 1, "avatar-img", 3, "ngSrc", "alt"], ["aria-label", "Avatar placeholder", "focusable", "false", "preserveAspectRatio", "xMidYMid slice", "role", "img", "xmlns", "http://www.w3.org/2000/svg", 1, "avatar-img", 2, "position", "absolute", "width", "100%", "height", "100%", "inset", "0"], ["fill", "#868e96", "height", "100%", "width", "100%"]],
  template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0, 0, null, AvatarComponent_ProjectionFallback_0_Template, 1, 1);
      ɵɵtemplate(2, AvatarComponent_Conditional_2_Template, 1, 1, "span", 0);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(!!ctx.status() ? 2 : -1);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var AvatarComponent = _AvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "c-avatar",
      standalone: true,
      imports: [NgClass, NgOptimizedImage],
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }],
      host: {
        class: "avatar"
      },
      template: `<ng-content>
  @if (src()) {
    @defer (prefetch on idle) {
      <img [ngSrc]="src() ?? ''" fill="" class="avatar-img" alt="{{alt()}}" />
    } @placeholder () {
      <svg aria-label="Avatar placeholder"
           focusable="false"
           preserveAspectRatio="xMidYMid slice"
           role="img"
           xmlns="http://www.w3.org/2000/svg"
           class="avatar-img"
           style="position: absolute; width: 100%; height: 100%; inset: 0;">
        <rect fill="#868e96" height="100%" width="100%"></rect>
      </svg>
    }
  }
</ng-content>
@if (!!status()) {
  <span [ngClass]="statusClass()"></span>
}

`
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _AvatarModule = class _AvatarModule {
};
_AvatarModule.ɵfac = function AvatarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarModule)();
};
_AvatarModule.ɵmod = ɵɵdefineNgModule({
  type: _AvatarModule,
  imports: [AvatarComponent],
  exports: [AvatarComponent]
});
_AvatarModule.ɵinj = ɵɵdefineInjector({});
var AvatarModule = _AvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarComponent],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();
var _BadgeComponent = class _BadgeComponent {
  constructor() {
    this.color = input();
    this.position = input();
    this.shape = input();
    this.size = input();
    this.textColor = input();
    this.textBgColor = input();
  }
  get hostClasses() {
    const position = this.position();
    const positionClasses = {
      "position-absolute": !!position,
      "translate-middle": !!position,
      "top-0": position?.includes("top"),
      "top-100": position?.includes("bottom"),
      "start-100": position?.includes("end"),
      "start-0": position?.includes("start")
    };
    return Object.assign({
      badge: true,
      [`bg-${this.color()}`]: !!this.color(),
      [`badge-${this.size()}`]: !!this.size(),
      [`${this.shape()}`]: !!this.shape()
    }, !!position ? positionClasses : {});
  }
};
_BadgeComponent.ɵfac = function BadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BadgeComponent)();
};
_BadgeComponent.ɵcmp = ɵɵdefineComponent({
  type: _BadgeComponent,
  selectors: [["c-badge"]],
  hostAttrs: [1, "badge"],
  hostVars: 2,
  hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [1, "color"],
    position: [1, "position"],
    shape: [1, "shape"],
    size: [1, "size"],
    textColor: [1, "textColor"],
    textBgColor: [1, "textBgColor"]
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: TextColorDirective,
    inputs: ["cTextColor", "textColor"]
  }, {
    directive: TextBgColorDirective,
    inputs: ["cTextBgColor", "textBgColor"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var BadgeComponent = _BadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "c-badge",
      template: "<ng-content />",
      standalone: true,
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }, {
        directive: TextBgColorDirective,
        inputs: ["cTextBgColor: textBgColor"]
      }],
      host: {
        class: "badge"
      }
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BadgeModule = class _BadgeModule {
};
_BadgeModule.ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BadgeModule)();
};
_BadgeModule.ɵmod = ɵɵdefineNgModule({
  type: _BadgeModule,
  imports: [BadgeComponent],
  exports: [BadgeComponent]
});
_BadgeModule.ɵinj = ɵɵdefineInjector({});
var BadgeModule = _BadgeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [BadgeComponent],
      exports: [BadgeComponent]
    }]
  }], null, null);
})();
var _backdropClick, _document2, _rendererFactory, _renderer2, _unListen, _BackdropService_instances, scrollbarWidth_get, isRTL_get, _scrollBarVisible;
var _BackdropService = class _BackdropService {
  constructor() {
    __privateAdd(this, _BackdropService_instances);
    __privateAdd(this, _backdropClick);
    __privateAdd(this, _document2);
    __privateAdd(this, _rendererFactory);
    __privateAdd(this, _renderer2);
    __privateAdd(this, _unListen);
    __privateAdd(this, _scrollBarVisible);
    __privateSet(this, _backdropClick, new Subject());
    this.backdropClick$ = __privateGet(this, _backdropClick).asObservable();
    __privateSet(this, _document2, inject(DOCUMENT));
    __privateSet(this, _rendererFactory, inject(RendererFactory2));
    __privateSet(this, _renderer2, __privateGet(this, _rendererFactory).createRenderer(null, null));
    this.scrollbarWidth = __privateGet(this, _BackdropService_instances, scrollbarWidth_get);
    __privateSet(this, _scrollBarVisible, true);
  }
  setBackdrop(type = "modal") {
    const backdropElement = __privateGet(this, _renderer2).createElement("div");
    __privateGet(this, _renderer2).addClass(backdropElement, `${type}-backdrop`);
    __privateGet(this, _renderer2).addClass(backdropElement, "fade");
    __privateGet(this, _renderer2).appendChild(__privateGet(this, _document2).body, backdropElement);
    __privateSet(this, _unListen, __privateGet(this, _renderer2).listen(backdropElement, "click", (e) => {
      this.onClickHandler();
    }));
    this.scrollbarWidth = __privateGet(this, _BackdropService_instances, scrollbarWidth_get);
    setTimeout(() => {
      __privateGet(this, _renderer2).addClass(backdropElement, "show");
    });
    this.activeBackdrop = backdropElement;
    return backdropElement;
  }
  clearBackdrop(backdropElement) {
    if (backdropElement) {
      __privateGet(this, _unListen).call(this);
      __privateGet(this, _renderer2).removeClass(backdropElement, "show");
      setTimeout(() => {
        __privateGet(this, _renderer2).removeChild(__privateGet(this, _document2).body, backdropElement);
        if (this.activeBackdrop === backdropElement) {
          this.resetScrollbar();
        }
        backdropElement = void 0;
      }, 300);
    }
    return void 0;
  }
  hideScrollbar() {
    if (__privateGet(this, _scrollBarVisible)) {
      __privateGet(this, _renderer2).setStyle(__privateGet(this, _document2).body, "overflow", "hidden");
      __privateGet(this, _renderer2).setStyle(__privateGet(this, _document2).body, `padding-${__privateGet(this, _BackdropService_instances, isRTL_get) ? "left" : "right"}`, this.scrollbarWidth);
      __privateSet(this, _scrollBarVisible, false);
    }
  }
  resetScrollbar() {
    __privateGet(this, _renderer2).removeStyle(__privateGet(this, _document2).body, "overflow");
    __privateGet(this, _renderer2).removeStyle(__privateGet(this, _document2).body, `padding-${__privateGet(this, _BackdropService_instances, isRTL_get) ? "left" : "right"}`);
    __privateSet(this, _scrollBarVisible, true);
  }
  onClickHandler() {
    __privateGet(this, _backdropClick).next(true);
  }
};
_backdropClick = new WeakMap();
_document2 = new WeakMap();
_rendererFactory = new WeakMap();
_renderer2 = new WeakMap();
_unListen = new WeakMap();
_BackdropService_instances = new WeakSet();
scrollbarWidth_get = function() {
  const documentWidth = __privateGet(this, _document2).documentElement.clientWidth;
  const scrollbarWidth = Math.abs((__privateGet(this, _document2).defaultView?.innerWidth ?? documentWidth) - documentWidth);
  return `${scrollbarWidth}px`;
};
isRTL_get = function() {
  return __privateGet(this, _document2).documentElement.dir === "rtl" || __privateGet(this, _document2).body.dir === "rtl";
};
_scrollBarVisible = new WeakMap();
_BackdropService.ɵfac = function BackdropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BackdropService)();
};
_BackdropService.ɵprov = ɵɵdefineInjectable({
  token: _BackdropService,
  factory: _BackdropService.ɵfac,
  providedIn: "root"
});
var BackdropService = _BackdropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BreadcrumbItemComponent = class _BreadcrumbItemComponent {
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get hostClasses() {
    return {
      "breadcrumb-item": true,
      active: this.active
    };
  }
};
_BreadcrumbItemComponent.ɵfac = function BreadcrumbItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbItemComponent)();
};
_BreadcrumbItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbItemComponent,
  selectors: [["c-breadcrumb-item"]],
  hostVars: 3,
  hostBindings: function BreadcrumbItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [2, "active", "active", booleanAttribute],
    url: "url",
    attributes: "attributes",
    linkProps: "linkProps"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [["defaultBreadcrumbItemContentTemplate", ""], [3, "routerLink", "cHtmlAttr", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "cHtmlAttr"], [4, "ngTemplateOutlet"]],
  template: function BreadcrumbItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, BreadcrumbItemComponent_Conditional_0_Template, 2, 13, "a", 1)(1, BreadcrumbItemComponent_Conditional_1_Template, 2, 3, "span", 2)(2, BreadcrumbItemComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(!ctx.active ? 0 : 1);
    }
  },
  dependencies: [RouterModule, RouterLink, NgTemplateOutlet, HtmlAttributesDirective],
  styles: ["[_nghost-%COMP%]{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}"]
});
var BreadcrumbItemComponent = _BreadcrumbItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-item",
      standalone: true,
      imports: [RouterModule, NgTemplateOutlet, HtmlAttributesDirective],
      template: `@if (!active) {
  <a [routerLink]="url"
     [cHtmlAttr]="attributes ?? {}"
     [target]="attributes?.['target']"
     [queryParams]="linkProps?.queryParams ?? null"
     [fragment]="linkProps?.fragment"
     [queryParamsHandling]="linkProps?.queryParamsHandling ?? null"
     [preserveFragment]="linkProps?.preserveFragment ?? false"
     [skipLocationChange]="linkProps?.skipLocationChange ?? false"
     [replaceUrl]="linkProps?.replaceUrl ?? false"
     [state]="linkProps?.state ?? {}"
  >
    <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </a>
} @else {
  <span [cHtmlAttr]="attributes ?? {}">
      <ng-container *ngTemplateOutlet="defaultBreadcrumbItemContentTemplate" />
  </span>
}

<ng-template #defaultBreadcrumbItemContentTemplate>
  <ng-content />
</ng-template>
`,
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    url: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    linkProps: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.ariaLabel = "breadcrumb";
    this.role = "navigation";
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbComponent)();
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["c-breadcrumb"]],
  hostAttrs: [1, "breadcrumb"],
  hostVars: 2,
  hostBindings: function BreadcrumbComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-label", ctx.ariaLabel)("role", ctx.role);
    }
  },
  inputs: {
    ariaLabel: "ariaLabel",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "breadcrumb"
      }
    }]
  }], null, {
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }]
  });
})();
var _breadcrumbsBehaviorSubject;
var _BreadcrumbRouterService = class _BreadcrumbRouterService {
  constructor(router, route) {
    __privateAdd(this, _breadcrumbsBehaviorSubject);
    this.router = router;
    this.route = route;
    this.outlet = "primary";
    __privateSet(this, _breadcrumbsBehaviorSubject, new BehaviorSubject(new Array()));
    this.breadcrumbs$ = __privateGet(this, _breadcrumbsBehaviorSubject).asObservable();
    this.router.events.pipe(takeUntilDestroyed(), filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const breadcrumbs = [];
      let currentRoute = this.route.root;
      let url = "";
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((childRoute) => {
          if (childRoute.outlet === this.outlet) {
            const routeSnapshot = childRoute.snapshot;
            url += "/" + routeSnapshot.url.map((segment) => segment.path).join("/");
            breadcrumbs.push({
              label: routeSnapshot.data["title"] ?? routeSnapshot.title ?? "",
              url,
              queryParams: routeSnapshot.queryParams
            });
            currentRoute = childRoute;
          }
        });
      } while (currentRoute);
      __privateGet(this, _breadcrumbsBehaviorSubject).next(Object.assign([], breadcrumbs));
      return breadcrumbs;
    });
  }
};
_breadcrumbsBehaviorSubject = new WeakMap();
_BreadcrumbRouterService.ɵfac = function BreadcrumbRouterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbRouterService)(ɵɵinject(Router), ɵɵinject(ActivatedRoute));
};
_BreadcrumbRouterService.ɵprov = ɵɵdefineInjectable({
  token: _BreadcrumbRouterService,
  factory: _BreadcrumbRouterService.ɵfac,
  providedIn: "root"
});
var BreadcrumbRouterService = _BreadcrumbRouterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }], null);
})();
var _BreadcrumbRouterComponent = class _BreadcrumbRouterComponent {
  constructor(service) {
    this.service = service;
  }
  ngOnInit() {
    this.breadcrumbs = this.service.breadcrumbs$;
  }
  ngOnChanges(changes) {
    if (changes["items"]) {
      this.setup();
    }
  }
  setup() {
    if (this.items && this.items.length > 0) {
      this.breadcrumbs = new Observable((observer) => {
        if (this.items) {
          observer.next(this.items);
        }
      });
    }
  }
  ngOnDestroy() {
    this.breadcrumbs = void 0;
  }
};
_BreadcrumbRouterComponent.ɵfac = function BreadcrumbRouterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbRouterComponent)(ɵɵdirectiveInject(BreadcrumbRouterService));
};
_BreadcrumbRouterComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbRouterComponent,
  selectors: [["c-breadcrumb-router"], ["", "cBreadcrumbRouter", ""]],
  inputs: {
    items: "items"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 2,
  consts: [[1, "m-0"], [3, "active", "url", "attributes", "linkProps"]],
  template: function BreadcrumbRouterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "c-breadcrumb", 0);
      ɵɵrepeaterCreate(1, BreadcrumbRouterComponent_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵpipe(3, "async");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx.breadcrumbs));
    }
  },
  dependencies: [BreadcrumbComponent, BreadcrumbItemComponent, AsyncPipe],
  encapsulation: 2
});
var BreadcrumbRouterComponent = _BreadcrumbRouterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouterComponent, [{
    type: Component,
    args: [{
      selector: "c-breadcrumb-router, [cBreadcrumbRouter]",
      standalone: true,
      imports: [BreadcrumbComponent, BreadcrumbItemComponent, AsyncPipe],
      template: `<c-breadcrumb class="m-0">
  @for (breadcrumb of breadcrumbs | async; track breadcrumb; let last = $last) {
    @if (breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)) {
      <c-breadcrumb-item
        [active]="last"
        [url]="breadcrumb?.url"
        [attributes]="breadcrumb?.attributes"
        [linkProps]="breadcrumb?.linkProps"
      >
        {{ breadcrumb?.label }}
      </c-breadcrumb-item>
    }
  }
</c-breadcrumb>
`
    }]
  }], () => [{
    type: BreadcrumbRouterService
  }], {
    items: [{
      type: Input
    }]
  });
})();
var _BreadcrumbModule = class _BreadcrumbModule {
};
_BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbModule)();
};
_BreadcrumbModule.ɵmod = ɵɵdefineNgModule({
  type: _BreadcrumbModule,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
  exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent]
});
_BreadcrumbModule.ɵinj = ɵɵdefineInjector({
  providers: [BreadcrumbRouterService],
  imports: [BreadcrumbItemComponent, BreadcrumbRouterComponent]
});
var BreadcrumbModule = _BreadcrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      exports: [BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent],
      providers: [BreadcrumbRouterService]
    }]
  }], null, null);
})();
var _ButtonGroupComponent = class _ButtonGroupComponent {
  constructor() {
    this.role = "group";
  }
  get hostClasses() {
    return {
      "btn-group": !this.vertical,
      "btn-group-vertical": this.vertical,
      [`btn-group-${this.size}`]: !!this.size
    };
  }
};
_ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonGroupComponent)();
};
_ButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonGroupComponent,
  selectors: [["c-button-group"]],
  hostVars: 3,
  hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    size: "size",
    vertical: "vertical",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ButtonGroupComponent = _ButtonGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-button-group",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    size: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ButtonToolbarComponent = class _ButtonToolbarComponent {
  constructor() {
    this.role = "toolbar";
  }
};
_ButtonToolbarComponent.ɵfac = function ButtonToolbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonToolbarComponent)();
};
_ButtonToolbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonToolbarComponent,
  selectors: [["c-button-toolbar"]],
  hostAttrs: [1, "btn-toolbar"],
  hostVars: 1,
  hostBindings: function ButtonToolbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ButtonToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ButtonToolbarComponent = _ButtonToolbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonToolbarComponent, [{
    type: Component,
    args: [{
      selector: "c-button-toolbar",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "btn-toolbar"
      }
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }]
  });
})();
var _ButtonGroupModule = class _ButtonGroupModule {
};
_ButtonGroupModule.ɵfac = function ButtonGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonGroupModule)();
};
_ButtonGroupModule.ɵmod = ɵɵdefineNgModule({
  type: _ButtonGroupModule,
  imports: [ButtonGroupComponent, ButtonToolbarComponent],
  exports: [ButtonGroupComponent, ButtonToolbarComponent]
});
_ButtonGroupModule.ɵinj = ɵɵdefineInjector({});
var ButtonGroupModule = _ButtonGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonGroupComponent, ButtonToolbarComponent],
      exports: [ButtonGroupComponent, ButtonToolbarComponent]
    }]
  }], null, null);
})();
var _CalloutComponent = class _CalloutComponent {
  get hostClasses() {
    return {
      callout: true,
      [`callout-${this.color}`]: !!this.color
    };
  }
};
_CalloutComponent.ɵfac = function CalloutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalloutComponent)();
};
_CalloutComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalloutComponent,
  selectors: [["c-callout"], ["", "cCallout", ""]],
  hostAttrs: [1, "callout"],
  hostVars: 2,
  hostBindings: function CalloutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CalloutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CalloutComponent = _CalloutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutComponent, [{
    type: Component,
    args: [{
      selector: "c-callout, [cCallout]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "callout"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CalloutModule = class _CalloutModule {
};
_CalloutModule.ɵfac = function CalloutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalloutModule)();
};
_CalloutModule.ɵmod = ɵɵdefineNgModule({
  type: _CalloutModule,
  imports: [CalloutComponent],
  exports: [CalloutComponent]
});
_CalloutModule.ɵinj = ɵɵdefineInjector({});
var CalloutModule = _CalloutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalloutModule, [{
    type: NgModule,
    args: [{
      exports: [CalloutComponent],
      imports: [CalloutComponent]
    }]
  }], null, null);
})();
var _CardComponent = class _CardComponent {
  constructor() {
    this.color = input();
    this.textColor = input();
    this.textBgColor = input();
  }
  get hostClasses() {
    return {
      card: true,
      [`bg-${this.color()}`]: !!this.color()
    };
  }
};
_CardComponent.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardComponent)();
};
_CardComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardComponent,
  selectors: [["c-card"], ["", "c-card", ""]],
  hostAttrs: [1, "card"],
  hostVars: 2,
  hostBindings: function CardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [1, "color"],
    textColor: [1, "textColor"],
    textBgColor: [1, "textBgColor"]
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: TextColorDirective,
    inputs: ["cTextColor", "textColor"]
  }, {
    directive: TextBgColorDirective,
    inputs: ["cTextBgColor", "textBgColor"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "c-card, [c-card]",
      template: "<ng-content />",
      standalone: true,
      hostDirectives: [{
        directive: TextColorDirective,
        inputs: ["cTextColor: textColor"]
      }, {
        directive: TextBgColorDirective,
        inputs: ["cTextBgColor: textBgColor"]
      }],
      host: {
        class: "card"
      }
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardBodyComponent = class _CardBodyComponent {
};
_CardBodyComponent.ɵfac = function CardBodyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardBodyComponent)();
};
_CardBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardBodyComponent,
  selectors: [["c-card-body"], ["", "c-card-body", ""]],
  hostAttrs: [1, "card-body"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardBodyComponent = _CardBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-card-body, [c-card-body]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "card-body"
      }
    }]
  }], null, null);
})();
var _CardFooterComponent = class _CardFooterComponent {
};
_CardFooterComponent.ɵfac = function CardFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardFooterComponent)();
};
_CardFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardFooterComponent,
  selectors: [["c-card-footer"], ["", "c-card-footer", ""]],
  hostAttrs: [1, "card-footer"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardFooterComponent = _CardFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-card-footer, [c-card-footer]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "card-footer"
      }
    }]
  }], null, null);
})();
var _CardGroupComponent = class _CardGroupComponent {
};
_CardGroupComponent.ɵfac = function CardGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardGroupComponent)();
};
_CardGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardGroupComponent,
  selectors: [["c-card-group"], ["", "c-card-group", ""]],
  hostAttrs: [1, "card-group"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardGroupComponent = _CardGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-card-group, [c-card-group]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "card-group"
      }
    }]
  }], null, null);
})();
var _CardHeaderComponent = class _CardHeaderComponent {
};
_CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardHeaderComponent)();
};
_CardHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderComponent,
  selectors: [["c-card-header"], ["", "c-card-header", ""]],
  hostAttrs: [1, "card-header"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardHeaderComponent = _CardHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header, [c-card-header]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "card-header"
      }
    }]
  }], null, null);
})();
var _CardHeaderActionsComponent = class _CardHeaderActionsComponent {
  constructor() {
    this.cardHeaderActions = true;
  }
};
_CardHeaderActionsComponent.ɵfac = function CardHeaderActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardHeaderActionsComponent)();
};
_CardHeaderActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderActionsComponent,
  selectors: [["c-card-header-actions"], ["", "c-card-header-actions", ""]],
  hostVars: 2,
  hostBindings: function CardHeaderActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("card-header-actions", ctx.cardHeaderActions);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardHeaderActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardHeaderActionsComponent = _CardHeaderActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderActionsComponent, [{
    type: Component,
    args: [{
      selector: "c-card-header-actions, [c-card-header-actions]",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    cardHeaderActions: [{
      type: HostBinding,
      args: ["class.card-header-actions"]
    }]
  });
})();
var _CardImgDirective = class _CardImgDirective {
  get hostClasses() {
    const suffix = !!this.orientation ? `-${this.orientation}` : "";
    return {
      [`card-img${suffix}`]: true
    };
  }
};
_CardImgDirective.ɵfac = function CardImgDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardImgDirective)();
};
_CardImgDirective.ɵdir = ɵɵdefineDirective({
  type: _CardImgDirective,
  selectors: [["", "cCardImg", ""]],
  hostVars: 2,
  hostBindings: function CardImgDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    orientation: [0, "cCardImg", "orientation"]
  },
  standalone: true
});
var CardImgDirective = _CardImgDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardImg]",
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input,
      args: ["cCardImg"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CardImgOverlayComponent = class _CardImgOverlayComponent {
};
_CardImgOverlayComponent.ɵfac = function CardImgOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardImgOverlayComponent)();
};
_CardImgOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardImgOverlayComponent,
  selectors: [["c-card-img-overlay"]],
  hostAttrs: [1, "card-img-overlay"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardImgOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CardImgOverlayComponent = _CardImgOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgOverlayComponent, [{
    type: Component,
    args: [{
      selector: "c-card-img-overlay",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "card-img-overlay"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _CardLinkDirective = class _CardLinkDirective {
};
_CardLinkDirective.ɵfac = function CardLinkDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardLinkDirective)();
};
_CardLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _CardLinkDirective,
  selectors: [["", "cCardLink", ""]],
  hostAttrs: [1, "card-link"],
  standalone: true
});
var CardLinkDirective = _CardLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardLink]",
      standalone: true,
      host: {
        class: "card-link"
      }
    }]
  }], null, null);
})();
var _CardSubtitleDirective = class _CardSubtitleDirective {
};
_CardSubtitleDirective.ɵfac = function CardSubtitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardSubtitleDirective)();
};
_CardSubtitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardSubtitleDirective,
  selectors: [["", "cCardSubtitle", ""]],
  hostAttrs: [1, "card-subtitle"],
  standalone: true
});
var CardSubtitleDirective = _CardSubtitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardSubtitle]",
      standalone: true,
      host: {
        class: "card-subtitle"
      }
    }]
  }], null, null);
})();
var _CardTextDirective = class _CardTextDirective {
};
_CardTextDirective.ɵfac = function CardTextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardTextDirective)();
};
_CardTextDirective.ɵdir = ɵɵdefineDirective({
  type: _CardTextDirective,
  selectors: [["", "cCardText", ""]],
  hostAttrs: [1, "card-text"],
  standalone: true
});
var CardTextDirective = _CardTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardText]",
      standalone: true,
      host: {
        class: "card-text"
      }
    }]
  }], null, null);
})();
var _CardTitleDirective = class _CardTitleDirective {
};
_CardTitleDirective.ɵfac = function CardTitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardTitleDirective)();
};
_CardTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _CardTitleDirective,
  selectors: [["", "cCardTitle", ""]],
  hostAttrs: [1, "card-title"],
  standalone: true
});
var CardTitleDirective = _CardTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cCardTitle]",
      standalone: true,
      host: {
        class: "card-title"
      }
    }]
  }], null, null);
})();
var _CardModule = class _CardModule {
};
_CardModule.ɵfac = function CardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardModule)();
};
_CardModule.ɵmod = ɵɵdefineNgModule({
  type: _CardModule,
  imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
  exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
});
_CardModule.ɵinj = ɵɵdefineInjector({});
var CardModule = _CardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective],
      exports: [CardComponent, CardBodyComponent, CardFooterComponent, CardGroupComponent, CardHeaderComponent, CardHeaderActionsComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardSubtitleDirective, CardTextDirective, CardTitleDirective]
    }]
  }], null, null);
})();
var _intersecting;
var _IntersectionService = class _IntersectionService {
  constructor() {
    __privateAdd(this, _intersecting);
    this.platformId = inject(PLATFORM_ID);
    __privateSet(this, _intersecting, new BehaviorSubject({
      isIntersecting: false
    }));
    this.intersecting$ = __privateGet(this, _intersecting).asObservable();
    this.defaultObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };
    this.hostElementRefs = /* @__PURE__ */ new Map();
  }
  createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
    if (isPlatformServer(this.platformId)) {
      __privateGet(this, _intersecting).next({
        isIntersecting: true,
        hostElement
      });
      return;
    }
    const options = __spreadValues(__spreadValues({}, this.defaultObserverOptions), observerOptions);
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        __privateGet(this, _intersecting).next({
          isIntersecting: entry.isIntersecting,
          hostElement
        });
      });
    };
    this.hostElementRefs.set(hostElement, new IntersectionObserver(handleIntersect, options));
    this.hostElementRefs.get(hostElement)?.observe(hostElement.nativeElement);
  }
  unobserve(elementRef) {
    this.hostElementRefs.get(elementRef)?.unobserve(elementRef.nativeElement);
    this.hostElementRefs.set(elementRef, null);
    this.hostElementRefs.delete(elementRef);
  }
  ngOnDestroy() {
    this.hostElementRefs.forEach((observer, elementRef) => {
      observer?.unobserve(elementRef.nativeElement);
    });
  }
};
_intersecting = new WeakMap();
_IntersectionService.ɵfac = function IntersectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IntersectionService)();
};
_IntersectionService.ɵprov = ɵɵdefineInjectable({
  token: _IntersectionService,
  factory: _IntersectionService.ɵfac,
  providedIn: "root"
});
var IntersectionService = _IntersectionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ListenersService = class _ListenersService {
  constructor() {
    this.renderer = inject(Renderer2);
    this.listeners = /* @__PURE__ */ new Map();
  }
  setListeners({
    hostElement,
    trigger: trigger2,
    callbackOn,
    callbackOff,
    callbackToggle
  }) {
    const host = hostElement.nativeElement;
    const triggers = Array.isArray(trigger2) ? trigger2 : trigger2?.split(" ") ?? [];
    if (triggers?.includes("click")) {
      typeof callbackToggle === "function" && this.listeners.set("click", this.renderer.listen(host, "click", callbackToggle));
    }
    if (triggers?.includes("focus")) {
      typeof callbackOn === "function" && this.listeners.set("focus", this.renderer.listen(host, "focus", callbackOn));
    }
    if (triggers?.includes("focusin")) {
      typeof callbackOff === "function" && this.listeners.set("focusout", this.renderer.listen(host, "focusout", callbackOff));
      typeof callbackOn === "function" && this.listeners.set("focusin", this.renderer.listen(host, "focusin", callbackOn));
    }
    if (triggers?.includes("click") || triggers?.includes("focus")) {
      typeof callbackOff === "function" && this.listeners.set("blur", this.renderer.listen(host, "blur", callbackOff));
    }
    if (triggers?.includes("hover")) {
      typeof callbackOn === "function" && this.listeners.set("mouseenter", this.renderer.listen(host, "mouseenter", callbackOn));
      typeof callbackOff === "function" && this.listeners.set("mouseleave", this.renderer.listen(host, "mouseleave", callbackOff));
    }
  }
  clearListeners() {
    this.listeners.forEach((unListen, key) => {
      unListen();
    });
    this.listeners.forEach((unListen, key) => {
      this.listeners.set(key, null);
    });
    this.listeners.clear();
  }
};
_ListenersService.ɵfac = function ListenersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListenersService)();
};
_ListenersService.ɵprov = ɵɵdefineInjectable({
  token: _ListenersService,
  factory: _ListenersService.ɵfac
});
var ListenersService = _ListenersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListenersService, [{
    type: Injectable
  }], null, null);
})();
var _ClassToggleService = class _ClassToggleService {
  constructor(document2, rendererFactory) {
    this.document = document2;
    this.rendererFactory = rendererFactory;
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  toggle(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.contains(className) ? this.renderer.removeClass(element, className) : this.renderer.addClass(element, className);
    }
  }
};
_ClassToggleService.ɵfac = function ClassToggleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClassToggleService)(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2));
};
_ClassToggleService.ɵprov = ɵɵdefineInjectable({
  token: _ClassToggleService,
  factory: _ClassToggleService.ɵfac,
  providedIn: "root"
});
var ClassToggleService = _ClassToggleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassToggleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: RendererFactory2
  }], null);
})();
var _storage;
var _InMemoryStorageService = class _InMemoryStorageService {
  constructor() {
    __privateAdd(this, _storage, /* @__PURE__ */ new Map());
  }
  setItem(key, data) {
    __privateGet(this, _storage).set(key, JSON.stringify(data));
  }
  getItem(key) {
    return __privateGet(this, _storage).has(key) ? JSON.parse(__privateGet(this, _storage).get(key) ?? "null") : void 0;
  }
  removeItem(key) {
    __privateGet(this, _storage).delete(key);
  }
  clear() {
    __privateGet(this, _storage).clear();
  }
  get length() {
    return __privateGet(this, _storage).size;
  }
  key(index) {
    return Array.from(__privateGet(this, _storage).keys())[index];
  }
};
_storage = new WeakMap();
_InMemoryStorageService.ɵfac = function InMemoryStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InMemoryStorageService)();
};
_InMemoryStorageService.ɵprov = ɵɵdefineInjectable({
  token: _InMemoryStorageService,
  factory: _InMemoryStorageService.ɵfac,
  providedIn: "root"
});
var InMemoryStorageService = _InMemoryStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _localStorage, _data$;
var _LocalStorageService = class _LocalStorageService {
  constructor() {
    __privateAdd(this, _localStorage);
    __privateAdd(this, _data$);
    this.platformId = inject(PLATFORM_ID);
    this.document = inject(DOCUMENT);
    __privateSet(this, _data$, new BehaviorSubject(null));
    this.data$ = __privateGet(this, _data$).asObservable();
    __privateSet(this, _localStorage, isPlatformBrowser(this.platformId) && this.document.defaultView ? this.document.defaultView?.localStorage : new InMemoryStorageService());
  }
  setItem(key, data) {
    __privateGet(this, _localStorage).setItem(key, JSON.stringify(data));
    __privateGet(this, _data$).next({
      key,
      data
    });
  }
  getItem(key) {
    const data = JSON.parse(__privateGet(this, _localStorage).getItem(key) || "null");
    __privateGet(this, _data$).next({
      key,
      data
    });
    return data;
  }
  removeItem(key) {
    __privateGet(this, _localStorage).removeItem(key);
    __privateGet(this, _data$).next({
      key,
      data: null
    });
  }
  clear() {
    __privateGet(this, _localStorage).clear();
    __privateGet(this, _data$).next(null);
  }
};
_localStorage = new WeakMap();
_data$ = new WeakMap();
_LocalStorageService.ɵfac = function LocalStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LocalStorageService)();
};
_LocalStorageService.ɵprov = ɵɵdefineInjectable({
  token: _LocalStorageService,
  factory: _LocalStorageService.ɵfac,
  providedIn: "root"
});
var LocalStorageService = _LocalStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _destroyRef2, _document3, _localStorage2, _ColorModeService_instances, setTheme_fn;
var _ColorModeService = class _ColorModeService {
  constructor() {
    __privateAdd(this, _ColorModeService_instances);
    __privateAdd(this, _destroyRef2);
    __privateAdd(this, _document3);
    __privateAdd(this, _localStorage2);
    __privateSet(this, _destroyRef2, inject(DestroyRef));
    __privateSet(this, _document3, inject(DOCUMENT));
    __privateSet(this, _localStorage2, inject(LocalStorageService));
    this.eventName = signal("ColorSchemeChange");
    this.localStorageItemName = signal(void 0);
    this.localStorageItemName$ = toObservable(this.localStorageItemName);
    this.colorMode = signal(void 0);
    this.colorModeEffect = effect(() => {
      const colorMode = this.colorMode();
      if (colorMode) {
        const localStorageItemName = this.localStorageItemName();
        localStorageItemName && this.setStoredTheme(localStorageItemName, colorMode);
        __privateMethod(this, _ColorModeService_instances, setTheme_fn).call(this, colorMode);
      }
    });
    afterNextRender({
      read: () => {
        this.localStorageItemName$.pipe(tap((params) => {
          this.colorMode.set(this.getDefaultScheme(params));
        }), takeUntilDestroyed(__privateGet(this, _destroyRef2))).subscribe();
      }
    });
  }
  getStoredTheme(localStorageItemName) {
    return __privateGet(this, _localStorage2).getItem(localStorageItemName);
  }
  setStoredTheme(localStorageItemName, colorMode) {
    return __privateGet(this, _localStorage2).setItem(localStorageItemName, colorMode);
  }
  removeStoredTheme(localStorageItemName) {
    __privateGet(this, _localStorage2).removeItem(localStorageItemName);
  }
  getDefaultScheme(localStorageItemName) {
    if (__privateGet(this, _document3).defaultView === void 0) {
      return this.getDatasetTheme();
    }
    const storedTheme = localStorageItemName && this.getStoredTheme(localStorageItemName);
    return storedTheme ?? this.getDatasetTheme();
  }
  getPrefersColorScheme() {
    return __privateGet(this, _document3).defaultView?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : __privateGet(this, _document3).defaultView?.matchMedia("(prefers-color-scheme: light)").matches ? "light" : void 0;
  }
  getDatasetTheme() {
    return __privateGet(this, _document3).documentElement.dataset["coreuiTheme"];
  }
};
_destroyRef2 = new WeakMap();
_document3 = new WeakMap();
_localStorage2 = new WeakMap();
_ColorModeService_instances = new WeakSet();
setTheme_fn = function(colorMode) {
  __privateGet(this, _document3).documentElement.dataset["coreuiTheme"] = colorMode === "auto" ? this.getPrefersColorScheme() : colorMode;
  const event = new Event(this.eventName());
  __privateGet(this, _document3).documentElement.dispatchEvent(event);
};
_ColorModeService.ɵfac = function ColorModeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ColorModeService)();
};
_ColorModeService.ɵprov = ɵɵdefineInjectable({
  token: _ColorModeService,
  factory: _ColorModeService.ɵfac,
  providedIn: "root"
});
var ColorModeService = _ColorModeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorModeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CarouselService = class _CarouselService {
  constructor() {
    this.carouselIndex = new BehaviorSubject({});
    this.carouselIndex$ = this.carouselIndex.asObservable();
  }
  setIndex(index) {
    this.carouselIndex.next(index);
  }
};
_CarouselService.ɵfac = function CarouselService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselService)();
};
_CarouselService.ɵprov = ɵɵdefineInjectable({
  token: _CarouselService,
  factory: _CarouselService.ɵfac
});
var CarouselService = _CarouselService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], null, null);
})();
var _CarouselState = class _CarouselState {
  constructor(carouselService) {
    this.carouselService = carouselService;
    this._state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: "next",
      transition: "slide"
    };
  }
  get state() {
    return this._state;
  }
  set state(state2) {
    const prevState = __spreadValues({}, this._state);
    const nextState = __spreadValues(__spreadValues({}, this._state), state2);
    this._state = nextState;
    if (prevState.activeItemIndex !== nextState.activeItemIndex) {
      const activeItemIndex = this.state.activeItemIndex || 0;
      const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval || -1;
      this.carouselService.setIndex({
        active: nextState.activeItemIndex,
        interval: itemInterval,
        lastItemIndex: (nextState.items?.length ?? 0) - 1
      });
    }
  }
  setItems(newItems) {
    if (newItems.length) {
      const itemsArray = newItems.toArray();
      itemsArray.forEach((item, i) => {
        item.index = i;
      });
      this.state = {
        items: itemsArray
      };
    } else {
      this.reset();
    }
  }
  setNextIndex(nextIndex) {
    this.carouselService.setIndex(nextIndex);
  }
  direction(direction = "next") {
    this.state = {
      direction
    };
    const {
      activeItemIndex = -1,
      items
    } = this.state;
    const itemsCount = items?.length ?? 0;
    if (itemsCount > 0) {
      return direction === "next" ? activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1 : activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1;
    } else {
      return 0;
    }
  }
  reset() {
    this.state = {
      activeItemIndex: -1,
      animate: true,
      items: [],
      direction: "next",
      transition: "slide"
    };
  }
};
_CarouselState.ɵfac = function CarouselState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselState)(ɵɵinject(CarouselService));
};
_CarouselState.ɵprov = ɵɵdefineInjectable({
  token: _CarouselState,
  factory: _CarouselState.ɵfac
});
var CarouselState = _CarouselState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselState, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var _CarouselConfig = class _CarouselConfig {
  constructor() {
    this.activeIndex = 0;
    this.animate = true;
    this.dark = false;
    this.direction = "next";
    this.interval = 3e3;
  }
};
_CarouselConfig.ɵfac = function CarouselConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselConfig)();
};
_CarouselConfig.ɵprov = ɵɵdefineInjectable({
  token: _CarouselConfig,
  factory: _CarouselConfig.ɵfac
});
var CarouselConfig = _CarouselConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselConfig, [{
    type: Injectable
  }], null, null);
})();
var _destroyRef3;
var _CarouselComponent = class _CarouselComponent {
  constructor(config, hostElement, carouselService, carouselState, intersectionService, listenersService) {
    __privateAdd(this, _destroyRef3);
    this.config = config;
    this.hostElement = hostElement;
    this.carouselService = carouselService;
    this.carouselState = carouselState;
    this.intersectionService = intersectionService;
    this.listenersService = listenersService;
    this.activeIndex = 0;
    this.animate = true;
    this.direction = "next";
    this.interval = 0;
    this.pause = "hover";
    this.touch = true;
    this.transition = "slide";
    this.wrap = true;
    this.itemChange = new EventEmitter();
    this.activeItemInterval = 0;
    __privateSet(this, _destroyRef3, inject(DestroyRef));
    this._visible = true;
    Object.assign(this, config);
  }
  get hostClasses() {
    return {
      carousel: true,
      slide: true,
      "carousel-fade": this.transition === "crossfade"
    };
  }
  ngOnInit() {
    this.carouselStateSubscribe();
  }
  ngOnDestroy() {
    this.resetTimer();
    this.clearListeners();
    this.swipeSubscribe(false);
  }
  ngAfterContentInit() {
    this.intersectionServiceSubscribe();
    this.carouselState.state = {
      activeItemIndex: this.activeIndex,
      animate: this.animate
    };
    this.setListeners();
    this.swipeSubscribe();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.pause || [],
      callbackOff: () => {
        this.setTimer();
      },
      callbackOn: () => {
        this.resetTimer();
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  setTimer() {
    const interval = this.activeItemInterval || 0;
    this.resetTimer();
    if (interval > 0) {
      this.timerId = setTimeout(() => {
        const nextIndex = this.carouselState.direction(this.direction);
        this.carouselState.state = {
          activeItemIndex: nextIndex
        };
      }, interval);
    }
  }
  resetTimer() {
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  carouselStateSubscribe() {
    this.carouselService.carouselIndex$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe((nextItem) => {
      if ("active" in nextItem) {
        this.itemChange.emit(nextItem.active);
      }
      this.activeItemInterval = typeof nextItem.interval === "number" && nextItem.interval > -1 ? nextItem.interval : this.interval;
      const isLastItem = nextItem.active === nextItem.lastItemIndex && this.direction === "next" || nextItem.active === 0 && this.direction === "prev";
      !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
    });
  }
  intersectionServiceSubscribe() {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.hostElement), finalize(() => {
      this.intersectionService.unobserve(this.hostElement);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe((next) => {
      this.visible = next.isIntersecting;
      next.isIntersecting ? this.setTimer() : this.resetTimer();
    });
  }
  swipeSubscribe(subscribe = true) {
    if (this.touch && subscribe) {
      const carouselElement = this.hostElement.nativeElement;
      const touchStart$ = fromEvent(carouselElement, "touchstart");
      const touchEnd$ = fromEvent(carouselElement, "touchend");
      const touchMove$ = fromEvent(carouselElement, "touchmove");
      this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))), takeUntilDestroyed(__privateGet(this, _destroyRef3))).subscribe(([touchstart, [touchend, touchmove]]) => {
        touchstart.stopPropagation();
        touchmove.stopPropagation();
        const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
        if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
          const nextIndex = this.carouselState.direction(distanceX > 0 ? "next" : "prev");
          this.carouselState.state = {
            activeItemIndex: nextIndex
          };
        }
      });
    } else {
      this.swipeSubscription?.unsubscribe();
    }
  }
};
_destroyRef3 = new WeakMap();
_CarouselComponent.ɵfac = function CarouselComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselComponent)(ɵɵdirectiveInject(CarouselConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(CarouselState), ɵɵdirectiveInject(IntersectionService), ɵɵdirectiveInject(ListenersService));
};
_CarouselComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselComponent,
  selectors: [["c-carousel"]],
  hostAttrs: [1, "carousel", "slide"],
  hostVars: 2,
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    activeIndex: "activeIndex",
    animate: "animate",
    direction: "direction",
    interval: "interval",
    pause: "pause",
    touch: "touch",
    transition: "transition",
    wrap: "wrap"
  },
  outputs: {
    itemChange: "itemChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([CarouselService, CarouselState, CarouselConfig, ListenersService]), ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["dark", "dark"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselComponent = _CarouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel",
      template: "<ng-content />",
      providers: [CarouselService, CarouselState, CarouselConfig, ListenersService],
      standalone: true,
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        class: "carousel slide"
      },
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselConfig,
    decorators: [{
      type: Inject,
      args: [CarouselConfig]
    }]
  }, {
    type: ElementRef
  }, {
    type: CarouselService
  }, {
    type: CarouselState
  }, {
    type: IntersectionService
  }, {
    type: ListenersService
  }], {
    activeIndex: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    pause: [{
      type: Input
    }],
    touch: [{
      type: Input
    }],
    transition: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    itemChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CarouselCaptionComponent = class _CarouselCaptionComponent {
  constructor() {
    this.carouselCaptionClass = true;
  }
};
_CarouselCaptionComponent.ɵfac = function CarouselCaptionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselCaptionComponent)();
};
_CarouselCaptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselCaptionComponent,
  selectors: [["c-carousel-caption"]],
  hostVars: 2,
  hostBindings: function CarouselCaptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("carousel-caption", ctx.carouselCaptionClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CarouselCaptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselCaptionComponent = _CarouselCaptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselCaptionComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-caption",
      template: "<ng-content />",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    carouselCaptionClass: [{
      type: HostBinding,
      args: ["class.carousel-caption"]
    }]
  });
})();
var _CarouselControlComponent = class _CarouselControlComponent {
  constructor(changeDetectorRef, carouselState) {
    this.changeDetectorRef = changeDetectorRef;
    this.carouselState = carouselState;
    this.direction = "next";
    this.hasContent = true;
  }
  /**
   * Carousel control caption. [docs]
   * @type string
   */
  set caption(value) {
    this._caption = value;
  }
  get caption() {
    return !!this._caption ? this._caption : this.direction === "prev" ? "Previous" : "Next";
  }
  get hostRole() {
    return "button";
  }
  get hostClasses() {
    return `carousel-control-${this.direction}`;
  }
  get carouselControlIconClass() {
    return `carousel-control-${this.direction}-icon`;
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      this.play();
    }
    if ($event.key === "ArrowLeft") {
      this.play("prev");
    }
    if ($event.key === "ArrowRight") {
      this.play("next");
    }
  }
  onClick($event) {
    this.play();
  }
  ngAfterViewInit() {
    this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
    this.changeDetectorRef.detectChanges();
  }
  play(direction = this.direction) {
    const nextIndex = this.carouselState.direction(direction);
    this.carouselState.state = {
      activeItemIndex: nextIndex
    };
  }
};
_CarouselControlComponent.ɵfac = function CarouselControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselControlComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CarouselState));
};
_CarouselControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselControlComponent,
  selectors: [["c-carousel-control"]],
  viewQuery: function CarouselControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function CarouselControlComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keyup", function CarouselControlComponent_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      })("click", function CarouselControlComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.hostRole);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    caption: "caption",
    direction: "direction"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["content", ""], [1, "visually-hidden"]],
  template: function CarouselControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CarouselControlComponent_Conditional_0_Template, 3, 0, "div")(1, CarouselControlComponent_Conditional_1_Template, 3, 5);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.hasContent ? 0 : 1);
    }
  },
  encapsulation: 2
});
var CarouselControlComponent = _CarouselControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselControlComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-control",
      standalone: true,
      template: '@if (hasContent) {\n  <div #content>\n    <ng-content />\n  </div>\n} @else {\n  <span [class]="carouselControlIconClass" [attr.aria-label]="direction" [attr.aria-hidden]="true"></span>\n  <span class="visually-hidden">{{ caption }}</span>\n}\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: CarouselState
  }], {
    caption: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _CarouselIndicatorsComponent = class _CarouselIndicatorsComponent {
  constructor(carouselService, carouselState) {
    this.carouselService = carouselService;
    this.carouselState = carouselState;
    this.items = [];
    this.active = 0;
  }
  ngOnInit() {
    this.carouselStateSubscribe();
  }
  ngOnDestroy() {
    this.carouselStateSubscribe(false);
  }
  onClick(index) {
    if (index !== this.active) {
      const direction = index < this.active ? "prev" : "next";
      this.carouselState.state = {
        direction,
        activeItemIndex: index
      };
    }
  }
  carouselStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        this.items = this.carouselState?.state?.items?.map((item) => item.index) ?? [];
        if ("active" in nextIndex) {
          this.active = nextIndex.active ?? 0;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
};
_CarouselIndicatorsComponent.ɵfac = function CarouselIndicatorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselIndicatorsComponent)(ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(CarouselState));
};
_CarouselIndicatorsComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselIndicatorsComponent,
  selectors: [["c-carousel-indicators"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [[1, "carousel-indicators"], ["type", "button", 3, "class"], ["type", "button", 3, "click"]],
  template: function CarouselIndicatorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, CarouselIndicatorsComponent_For_2_Template, 1, 6, "button", 1, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ctx.items);
    }
  },
  encapsulation: 2
});
var CarouselIndicatorsComponent = _CarouselIndicatorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselIndicatorsComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-indicators",
      standalone: true,
      template: '<div class="carousel-indicators">\n  @for (item of items; track item; let i = $index) {\n    <button\n      [attr.data-coreui-target]="i"\n      type="button"\n      (click)="onClick(i)"\n      [class]="{ active: active === i }"\n      [attr.aria-current]="active === i">\n    </button>\n  }\n</div>\n'
    }]
  }], () => [{
    type: CarouselService
  }, {
    type: CarouselState
  }], null);
})();
function toLeft(fromState, toState) {
  return toState.left === true;
}
function toRight(fromState, toState) {
  return toState.left === false;
}
var slideAnimation = trigger("slideAnimation", [state("*", style({
  transform: "translateX(0)",
  display: "block",
  opacity: 1
})), transition(toLeft, group([query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(-100%)"
}))], {
  optional: true
}), query(":enter", [style({
  transform: "translateX(100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})])), transition(toRight, group([query(":enter", [style({
  transform: "translateX(-100%)"
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.6s ease-in-out", style({
  transform: "translateX(100%)"
}))], {
  optional: true
})]))]);
var fadeAnimation = trigger("fadeAnimation", [state("*", style({
  zIndex: 1,
  opacity: 1
})), transition(toLeft, group([query(":leave", [animate("0.6s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
}), query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
})])), transition(toRight, group([query(":enter", [style({
  zIndex: 1,
  opacity: 1
}), animate("0.6s ease-in-out", style("*"))], {
  optional: true
}), query(":leave", [animate("0.6s ease-in-out", style({
  zIndex: 0,
  opacity: 0
}))], {
  optional: true
})]))]);
var _CarouselItemComponent = class _CarouselItemComponent {
  /**
   * @ignore
   */
  set active(value) {
    this._active = value;
    this.changeDetectorRef.markForCheck();
  }
  get active() {
    return this._active;
  }
  get hostClasses() {
    return {
      "carousel-item": true,
      active: this.active
    };
  }
  constructor(carouselService, changeDetectorRef) {
    this.carouselService = carouselService;
    this.changeDetectorRef = changeDetectorRef;
    this._active = false;
    this.interval = -1;
  }
  ngOnDestroy() {
    this.carouselStateSubscribe(false);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.carouselStateSubscribe();
    });
  }
  carouselStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
        if ("active" in nextIndex) {
          this.active = nextIndex.active === this.index;
        }
      });
    } else {
      this.carouselIndexSubscription?.unsubscribe();
    }
  }
};
_CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselItemComponent)(ɵɵdirectiveInject(CarouselService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_CarouselItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselItemComponent,
  selectors: [["c-carousel-item"]],
  hostAttrs: [1, "carousel-item"],
  hostVars: 2,
  hostBindings: function CarouselItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [2, "active", "active", booleanAttribute],
    interval: "interval"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  template: function CarouselItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CarouselItemComponent_Conditional_0_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.active ? 0 : -1);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var CarouselItemComponent = _CarouselItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselItemComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-item",
      standalone: true,
      host: {
        class: "carousel-item"
      },
      template: "@if (active) {\n  <ng-content />\n}\n",
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselService
  }, {
    type: ChangeDetectorRef
  }], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    interval: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CarouselInnerComponent = class _CarouselInnerComponent {
  constructor(carouselState) {
    this.carouselState = carouselState;
    this.carouselInnerClass = true;
    this.slide = {
      left: true
    };
    this.transition = "slide";
  }
  ngAfterContentInit() {
    this.setItems();
  }
  ngAfterContentChecked() {
    this.setItems();
    const state2 = this.carouselState?.state;
    const nextIndex = state2?.activeItemIndex;
    const nextDirection = state2?.direction;
    if (this.activeIndex !== nextIndex) {
      this.animate = state2?.animate;
      this.slide = {
        left: nextDirection === "next"
      };
      this.activeIndex = state2?.activeItemIndex;
      this.transition = state2?.transition ?? "slide";
    }
  }
  setItems() {
    if (this.prevContentItems !== this.contentItems) {
      this.prevContentItems = this.contentItems;
      this.carouselState.setItems(this.contentItems);
    }
  }
};
_CarouselInnerComponent.ɵfac = function CarouselInnerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselInnerComponent)(ɵɵdirectiveInject(CarouselState));
};
_CarouselInnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselInnerComponent,
  selectors: [["c-carousel-inner"]],
  contentQueries: function CarouselInnerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CarouselItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
    }
  },
  hostVars: 2,
  hostBindings: function CarouselInnerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("carousel-inner", ctx.carouselInnerClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  template: function CarouselInnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@slideAnimation", ctx.slide)("@.disabled", !ctx.animate);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"],
  data: {
    animation: [slideAnimation, fadeAnimation]
  }
});
var CarouselInnerComponent = _CarouselInnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselInnerComponent, [{
    type: Component,
    args: [{
      selector: "c-carousel-inner",
      animations: [slideAnimation, fadeAnimation],
      standalone: true,
      template: '<div [@slideAnimation]="slide" [@.disabled]="!animate">\n  <ng-content />\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]="slide" [@.disabled]="!animate" >-->\n<!--  <ng-content />-->\n<!--</div>-->\n',
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: CarouselState
  }], {
    carouselInnerClass: [{
      type: HostBinding,
      args: ["class.carousel-inner"]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [CarouselItemComponent]
    }]
  });
})();
var _CarouselModule = class _CarouselModule {
  static forRoot() {
    return {
      ngModule: _CarouselModule,
      providers: []
    };
  }
};
_CarouselModule.ɵfac = function CarouselModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselModule)();
};
_CarouselModule.ɵmod = ɵɵdefineNgModule({
  type: _CarouselModule,
  imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
});
_CarouselModule.ɵinj = ɵɵdefineInjector({
  providers: [CarouselService, CarouselState, CarouselConfig]
});
var CarouselModule = _CarouselModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent],
      providers: [CarouselService, CarouselState, CarouselConfig],
      exports: [CarouselComponent, CarouselCaptionComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent]
    }]
  }], null, null);
})();
var _DropdownDividerDirective = class _DropdownDividerDirective {
};
_DropdownDividerDirective.ɵfac = function DropdownDividerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownDividerDirective)();
};
_DropdownDividerDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownDividerDirective,
  selectors: [["", "cDropdownDivider", ""]],
  hostAttrs: [1, "dropdown-divider"],
  standalone: true
});
var DropdownDividerDirective = _DropdownDividerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownDivider]",
      standalone: true,
      host: {
        class: "dropdown-divider"
      }
    }]
  }], null, null);
})();
var _DropdownHeaderDirective = class _DropdownHeaderDirective {
};
_DropdownHeaderDirective.ɵfac = function DropdownHeaderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownHeaderDirective)();
};
_DropdownHeaderDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownHeaderDirective,
  selectors: [["", "cDropdownHeader", ""]],
  hostAttrs: [1, "dropdown-header"],
  standalone: true
});
var DropdownHeaderDirective = _DropdownHeaderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownHeaderDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownHeader]",
      standalone: true,
      host: {
        class: "dropdown-header"
      }
    }]
  }], null, null);
})();
var _DropdownService = class _DropdownService {
  constructor() {
    this.dropdownState = new BehaviorSubject({});
    this.dropdownState$ = this.dropdownState.asObservable();
  }
  toggle(state2) {
    this.dropdownState.next(state2);
  }
};
_DropdownService.ɵfac = function DropdownService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownService)();
};
_DropdownService.ɵprov = ɵɵdefineInjectable({
  token: _DropdownService,
  factory: _DropdownService.ɵfac
});
var DropdownService = _DropdownService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownService, [{
    type: Injectable
  }], null, null);
})();
var _destroyRef4, _dropdownService, _focusKeyManager;
var _DropdownMenuDirective = class _DropdownMenuDirective {
  constructor() {
    __privateAdd(this, _destroyRef4);
    __privateAdd(this, _dropdownService);
    __privateAdd(this, _focusKeyManager);
    __privateSet(this, _destroyRef4, inject(DestroyRef));
    this.elementRef = inject(ElementRef);
    __privateSet(this, _dropdownService, inject(DropdownService));
    this.visible = false;
  }
  get hostClasses() {
    return {
      "dropdown-menu": true,
      [`dropdown-menu-${this.alignment}`]: !!this.alignment,
      show: this.visible
    };
  }
  get hostStyles() {
    return {
      visibility: this.visible ? null : "",
      display: this.visible ? null : ""
    };
  }
  onKeyDown($event) {
    if (!this.visible) {
      return;
    }
    if (["Space", "ArrowDown"].includes($event.code)) {
      $event.preventDefault();
    }
    __privateGet(this, _focusKeyManager).onKeydown($event);
  }
  onKeyUp($event) {
    if (!this.visible) {
      return;
    }
    if (["Tab"].includes($event.key)) {
      if (__privateGet(this, _focusKeyManager).activeItem) {
        $event.shiftKey ? __privateGet(this, _focusKeyManager).setPreviousItemActive() : __privateGet(this, _focusKeyManager).setNextItemActive();
      } else {
        __privateGet(this, _focusKeyManager).setFirstItemActive();
      }
    }
  }
  ngAfterContentInit() {
    this.focusKeyManagerInit();
    this.dropdownItemsContent.changes.pipe(tap((change) => {
      this.focusKeyManagerInit();
    }), takeUntilDestroyed(__privateGet(this, _destroyRef4))).subscribe();
  }
  ngOnInit() {
    __privateGet(this, _dropdownService).dropdownState$.pipe(tap((state2) => {
      if ("visible" in state2) {
        this.visible = state2.visible === "toggle" ? !this.visible : state2.visible;
        if (!this.visible) {
          __privateGet(this, _focusKeyManager)?.setActiveItem(-1);
        }
      }
    }), takeUntilDestroyed(__privateGet(this, _destroyRef4))).subscribe();
  }
  focusKeyManagerInit() {
    __privateSet(this, _focusKeyManager, new FocusKeyManager(this.dropdownItemsContent).withHomeAndEnd().withPageUpDown().withWrap().skipPredicate((dropdownItem) => dropdownItem.disabled === true));
  }
};
_destroyRef4 = new WeakMap();
_dropdownService = new WeakMap();
_focusKeyManager = new WeakMap();
_DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownMenuDirective)();
};
_DropdownMenuDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownMenuDirective,
  selectors: [["", "cDropdownMenu", ""]],
  contentQueries: function DropdownMenuDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DropdownItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownItemsContent = _t);
    }
  },
  hostAttrs: [1, "dropdown-menu"],
  hostVars: 4,
  hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DropdownMenuDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keyup", function DropdownMenuDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleMap(ctx.hostStyles);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    visible: "visible"
  },
  exportAs: ["cDropdownMenu"],
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["dark", "dark"]
  }])]
});
var DropdownMenuDirective = _DropdownMenuDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownMenu]",
      exportAs: "cDropdownMenu",
      standalone: true,
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        class: "dropdown-menu"
      }
    }]
  }], null, {
    alignment: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyles: [{
      type: HostBinding,
      args: ["style"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    dropdownItemsContent: [{
      type: ContentChildren,
      args: [forwardRef(() => DropdownItemDirective), {
        descendants: true
      }]
    }]
  });
})();
var DropdownToken = class {
};
var _destroyRef5, _dropdownService2, _ariaExpanded;
var _DropdownToggleDirective = class _DropdownToggleDirective {
  constructor() {
    // injections
    __privateAdd(this, _destroyRef5);
    __privateAdd(this, _dropdownService2);
    __privateAdd(this, _ariaExpanded);
    __privateSet(this, _destroyRef5, inject(DestroyRef));
    this.elementRef = inject(ElementRef);
    __privateSet(this, _dropdownService2, inject(DropdownService));
    this.dropdown = inject(DropdownToken, {
      optional: true
    });
    this.disabled = false;
    this.caret = true;
    this.split = false;
    __privateSet(this, _ariaExpanded, signal(false));
  }
  get hostClasses() {
    return {
      "dropdown-toggle": this.caret,
      "dropdown-toggle-split": this.split,
      disabled: this.disabled
    };
  }
  get ariaExpanded() {
    return __privateGet(this, _ariaExpanded).call(this);
  }
  onClick($event) {
    $event.preventDefault();
    !this.disabled && __privateGet(this, _dropdownService2).toggle({
      visible: "toggle",
      dropdown: this.dropdown
    });
  }
  ngAfterViewInit() {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      __privateSet(this, _dropdownService2, this.dropdownComponent?.dropdownService);
    }
    if (this.dropdown) {
      const dropdown = this.dropdown;
      dropdown?.visibleChange?.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef5))).subscribe((visible) => {
        __privateGet(this, _ariaExpanded).set(visible);
      });
    }
  }
};
_destroyRef5 = new WeakMap();
_dropdownService2 = new WeakMap();
_ariaExpanded = new WeakMap();
_DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownToggleDirective)();
};
_DropdownToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownToggleDirective,
  selectors: [["", "cDropdownToggle", ""]],
  hostVars: 3,
  hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.ariaExpanded);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    dropdownComponent: "dropdownComponent",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    caret: "caret",
    split: [2, "split", "split", booleanAttribute]
  },
  exportAs: ["cDropdownToggle"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: DropdownToken,
    useExisting: forwardRef(() => DropdownComponent)
  }]), ɵɵInputTransformsFeature]
});
var DropdownToggleDirective = _DropdownToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownToggle]",
      providers: [{
        provide: DropdownToken,
        useExisting: forwardRef(() => DropdownComponent)
      }],
      exportAs: "cDropdownToggle",
      standalone: true
    }]
  }], null, {
    dropdownComponent: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    caret: [{
      type: Input
    }],
    split: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _DropdownComponent = class _DropdownComponent {
  constructor(document2, elementRef, renderer, ngZone, changeDetectorRef, dropdownService) {
    this.document = document2;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.dropdownService = dropdownService;
    this.autoClose = true;
    this.placement = "bottom-start";
    this.popper = true;
    this._popperOptions = {
      placement: this.placement,
      modifiers: [],
      strategy: "absolute"
    };
    this.variant = "dropdown";
    this._visible = false;
    this.visibleChange = new EventEmitter();
    this.dropdownContext = {
      $implicit: this.visible
    };
    this.activeTrap = false;
    this.listeners = [];
    this.dropdownStateSubscribe();
  }
  /**
   * Optional popper Options object, placement prop takes precedence over
   * @type Partial<Options>
   */
  set popperOptions(value) {
    this._popperOptions = __spreadValues(__spreadValues({}, this._popperOptions), value);
  }
  get popperOptions() {
    let placement = this.placement;
    switch (this.direction) {
      case "dropup": {
        placement = "top-start";
        break;
      }
      case "dropend": {
        placement = "right-start";
        break;
      }
      case "dropstart": {
        placement = "left-start";
        break;
      }
      case "center": {
        placement = "bottom";
        break;
      }
      case "dropup-center": {
        placement = "top";
        break;
      }
    }
    if (this.alignment === "end") {
      placement = "bottom-end";
    }
    this._popperOptions = __spreadProps(__spreadValues({}, this._popperOptions), {
      placement
    });
    return this._popperOptions;
  }
  /**
   * Toggle the visibility of dropdown menu component.
   * @type boolean
   * @default false
   */
  set visible(value) {
    const _value2 = value;
    if (_value2 !== this._visible) {
      this.activeTrap = _value2;
      this._visible = _value2;
      _value2 ? this.createPopperInstance() : this.destroyPopperInstance();
      this.visibleChange.emit(_value2);
    }
  }
  get visible() {
    return this._visible;
  }
  get hostClasses() {
    return {
      dropdown: (this.variant === "dropdown" || this.variant === "nav-item") && !this.direction,
      [`${this.direction}`]: !!this.direction,
      [`${this.variant}`]: !!this.variant,
      dropup: this.direction === "dropup" || this.direction === "dropup-center",
      show: this.visible
    };
  }
  // todo: find better solution
  get hostStyle() {
    return this.variant === "input-group" ? {
      display: "contents"
    } : {};
  }
  onHostClick($event) {
    this.clickedTarget = $event.target;
  }
  dropdownStateSubscribe(subscribe = true) {
    if (subscribe) {
      this.dropdownStateSubscription = this.dropdownService.dropdownState$.pipe(filter((state2) => {
        return this === state2.dropdown;
      })).subscribe((state2) => {
        if ("visible" in state2) {
          state2?.visible === "toggle" ? this.toggleDropdown() : this.visible = state2.visible;
        }
      });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }
  toggleDropdown() {
    this.visible = !this.visible;
  }
  onClick(event) {
    if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest("[cDropdownToggle]"))) {
      this.toggleDropdown();
    }
  }
  ngAfterContentInit() {
    if (this.variant === "nav-item") {
      this.renderer.addClass(this._toggler.elementRef.nativeElement, "nav-link");
    }
  }
  ngOnInit() {
    this.setVisibleState(this.visible);
  }
  ngOnChanges(changes) {
    if (changes["visible"] && !changes["visible"].firstChange) {
      this.setVisibleState(changes["visible"].currentValue);
    }
  }
  ngOnDestroy() {
    this.clearListeners();
    this.dropdownStateSubscribe(false);
    this.destroyPopperInstance();
  }
  setVisibleState(value) {
    this.dropdownService.toggle({
      visible: value,
      dropdown: this
    });
  }
  // todo: turn off popper in navbar-nav
  createPopperInstance() {
    if (this._toggler && this._menu) {
      this.ngZone.runOutsideAngular(() => {
        this._menu.elementRef.nativeElement.style.visibility = "hidden";
        this._menu.elementRef.nativeElement.style.display = "block";
        if (this.popper) {
          this.popperInstance = createPopper(this._toggler.elementRef.nativeElement, this._menu.elementRef.nativeElement, __spreadValues({}, this.popperOptions));
        }
        this.ngZone.run(() => {
          this.setListeners();
          this.changeDetectorRef.markForCheck();
          this.changeDetectorRef.detectChanges();
        });
      });
    }
  }
  destroyPopperInstance() {
    this.clearListeners();
    this.popperInstance?.destroy();
    this.popperInstance = void 0;
    this.changeDetectorRef.markForCheck();
  }
  setListeners() {
    this.listeners.push(this.renderer.listen(this.document, "click", (event) => {
      const target = event.target;
      if (this._menuElementRef?.nativeElement.contains(event.target)) {
        this.clickedTarget = target;
      }
      if (this._toggler?.elementRef.nativeElement.contains(event.target)) {
        return;
      }
      if (this.autoClose === true) {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget === target && this.autoClose === "inside") {
        this.setVisibleState(false);
        return;
      }
      if (this.clickedTarget !== target && this.autoClose === "outside") {
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.renderer.listen(this.elementRef.nativeElement, "keyup", (event) => {
      if (event.key === "Escape" && this.autoClose !== false) {
        event.stopPropagation();
        this.setVisibleState(false);
        return;
      }
    }));
    this.listeners.push(this.renderer.listen(this.document, "keyup", (event) => {
      if (event.key === "Tab" && this.autoClose !== false && !this.elementRef.nativeElement.contains(event.target)) {
        this.setVisibleState(false);
        return;
      }
    }));
  }
  clearListeners() {
    this.listeners.forEach((unListen) => {
      unListen();
    });
    this.listeners.fill(void 0);
    this.listeners = [];
  }
};
_DropdownComponent.ɵfac = function DropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DropdownService));
};
_DropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: _DropdownComponent,
  selectors: [["c-dropdown"]],
  contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DropdownToggleDirective, 5);
      ɵɵcontentQuery(dirIndex, DropdownMenuDirective, 5);
      ɵɵcontentQuery(dirIndex, DropdownMenuDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._toggler = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menuElementRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function DropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownComponent_click_HostBindingHandler($event) {
        return ctx.onHostClick($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleMap(ctx.hostStyle);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    autoClose: "autoClose",
    direction: "direction",
    placement: "placement",
    popper: [2, "popper", "popper", booleanAttribute],
    popperOptions: "popperOptions",
    variant: "variant",
    visible: [2, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cDropdown"],
  standalone: true,
  features: [ɵɵProvidersFeature([DropdownService]), ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["dark", "dark"]
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [".dropdown[_nghost-%COMP%]:not(.btn-group), .dropdown   [_nghost-%COMP%]:not(.btn-group), .dropup[_nghost-%COMP%]:not(.btn-group), .dropup   [_nghost-%COMP%]:not(.btn-group){display:block}.dropstart[_nghost-%COMP%]:not(.btn-group), .dropstart   [_nghost-%COMP%]:not(.btn-group), .dropend[_nghost-%COMP%]:not(.btn-group), .dropend   [_nghost-%COMP%]:not(.btn-group){display:inline-flex}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :first-child, html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :first-child, .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :first-child{border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :first-child, html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :first-child, .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :first-child{border-top-left-radius:0;border-bottom-left-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}html:not([dir=rtl]).input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu), html:not([dir=rtl])   .input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu), .input-group   html:not([dir=rtl])   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]{direction:rtl}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :first-child{border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:first-child  :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :first-child{border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl]   .input-group   [_nghost-%COMP%]:last-child  :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}"]
});
var DropdownComponent = _DropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{
      selector: "c-dropdown",
      template: "<ng-content />",
      exportAs: "cDropdown",
      providers: [DropdownService],
      standalone: true,
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DropdownService
  }], {
    alignment: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    popperOptions: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    _toggler: [{
      type: ContentChild,
      args: [DropdownToggleDirective]
    }],
    _menu: [{
      type: ContentChild,
      args: [DropdownMenuDirective]
    }],
    _menuElementRef: [{
      type: ContentChild,
      args: [DropdownMenuDirective, {
        read: ElementRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _elementRef2;
var _DropdownItemDirective = class _DropdownItemDirective {
  constructor(dropdownService, dropdown) {
    __privateAdd(this, _elementRef2);
    this.dropdownService = dropdownService;
    this.dropdown = dropdown;
    this.autoClose = true;
    __privateSet(this, _elementRef2, inject(ElementRef));
    this._tabIndex = null;
  }
  focus(origin) {
    __privateGet(this, _elementRef2)?.nativeElement?.focus();
  }
  getLabel() {
    return __privateGet(this, _elementRef2)?.nativeElement?.textContent.trim();
  }
  get ariaCurrent() {
    return this.active ? "true" : null;
  }
  get hostClasses() {
    return {
      "dropdown-item": true,
      active: this.active,
      disabled: this.disabled
    };
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get tabIndex() {
    return this.disabled ? "-1" : this._tabIndex;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  onClick($event) {
    if (this.autoClose) {
      this.dropdownService.toggle({
        visible: "toggle",
        dropdown: this.dropdown
      });
    }
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      if (this.autoClose) {
        this.dropdownService.toggle({
          visible: false,
          dropdown: this.dropdown
        });
      }
    }
  }
};
_elementRef2 = new WeakMap();
_DropdownItemDirective.ɵfac = function DropdownItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownItemDirective)(ɵɵdirectiveInject(DropdownService), ɵɵdirectiveInject(DropdownComponent, 8));
};
_DropdownItemDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownItemDirective,
  selectors: [["", "cDropdownItem", ""]],
  hostAttrs: [1, "dropdown-item"],
  hostVars: 5,
  hostBindings: function DropdownItemDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownItemDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keyup", function DropdownItemDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent)("tabindex", ctx.tabIndex)("aria-disabled", ctx.isDisabled);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    autoClose: "autoClose",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["cDropdownItem"],
  standalone: true
});
var DropdownItemDirective = _DropdownItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItem]",
      exportAs: "cDropdownItem",
      standalone: true,
      host: {
        class: "dropdown-item"
      }
    }]
  }], () => [{
    type: DropdownService
  }, {
    type: DropdownComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    active: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }, {
      type: Input
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var _DropdownItemPlainDirective = class _DropdownItemPlainDirective {
};
_DropdownItemPlainDirective.ɵfac = function DropdownItemPlainDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownItemPlainDirective)();
};
_DropdownItemPlainDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownItemPlainDirective,
  selectors: [["", "cDropdownItemPlain", ""]],
  hostAttrs: [1, "dropdown-item-text"],
  standalone: true
});
var DropdownItemPlainDirective = _DropdownItemPlainDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemPlainDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownItemPlain]",
      standalone: true,
      host: {
        class: "dropdown-item-text"
      }
    }]
  }], null, null);
})();
var _DropdownCloseDirective = class _DropdownCloseDirective {
  constructor(dropdownService, dropdown) {
    this.dropdownService = dropdownService;
    this.dropdown = dropdown;
    this._tabIndex = null;
  }
  ngAfterViewInit() {
    if (this.dropdownComponent) {
      this.dropdown = this.dropdownComponent;
      this.dropdownService = this.dropdownComponent?.dropdownService;
    }
  }
  get hostClasses() {
    return {
      disabled: this.disabled
    };
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get tabIndex() {
    return this.disabled ? "-1" : this._tabIndex;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  onClick($event) {
    !this.disabled && this.dropdownService.toggle({
      visible: false,
      dropdown: this.dropdown
    });
  }
  onKeyUp($event) {
    if ($event.key === "Enter") {
      !this.disabled && this.dropdownService.toggle({
        visible: false,
        dropdown: this.dropdown
      });
    }
  }
};
_DropdownCloseDirective.ɵfac = function DropdownCloseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownCloseDirective)(ɵɵdirectiveInject(DropdownService), ɵɵdirectiveInject(DropdownComponent, 8));
};
_DropdownCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _DropdownCloseDirective,
  selectors: [["", "cDropdownClose", ""]],
  hostVars: 4,
  hostBindings: function DropdownCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DropdownCloseDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keyup", function DropdownCloseDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.isDisabled);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    disabled: "disabled",
    dropdownComponent: "dropdownComponent",
    tabIndex: "tabIndex"
  },
  exportAs: ["cDropdownClose"],
  standalone: true
});
var DropdownCloseDirective = _DropdownCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cDropdownClose]",
      exportAs: "cDropdownClose",
      standalone: true
    }]
  }], () => [{
    type: DropdownService
  }, {
    type: DropdownComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input
    }],
    dropdownComponent: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }, {
      type: Input
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var _DropdownModule = class _DropdownModule {
};
_DropdownModule.ɵfac = function DropdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownModule)();
};
_DropdownModule.ɵmod = ɵɵdefineNgModule({
  type: _DropdownModule,
  imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
  exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective]
});
_DropdownModule.ɵinj = ɵɵdefineInjector({
  providers: [DropdownService]
});
var DropdownModule = _DropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      exports: [DropdownComponent, DropdownCloseDirective, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownToggleDirective],
      providers: [DropdownService]
    }]
  }], null, null);
})();
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.role = "contentinfo";
  }
  get getClasses() {
    return {
      footer: true,
      [`footer-${this.position}`]: !!this.position
    };
  }
};
_FooterComponent.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _FooterComponent,
  selectors: [["c-footer"], ["", "cFooter", ""]],
  hostAttrs: [1, "footer"],
  hostVars: 3,
  hostBindings: function FooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    position: "position",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "c-footer, [cFooter]",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "footer"
      }
    }]
  }], null, {
    position: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FooterModule = class _FooterModule {
};
_FooterModule.ɵfac = function FooterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterModule)();
};
_FooterModule.ɵmod = ɵɵdefineNgModule({
  type: _FooterModule,
  imports: [FooterComponent],
  exports: [FooterComponent]
});
_FooterModule.ɵinj = ɵɵdefineInjector({});
var FooterModule = _FooterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterModule, [{
    type: NgModule,
    args: [{
      imports: [FooterComponent],
      exports: [FooterComponent]
    }]
  }], null, null);
})();
var _FormDirective = class _FormDirective {
  constructor() {
    this.validated = false;
  }
  get hostClasses() {
    return {
      "was-validated": this.validated
    };
  }
};
_FormDirective.ɵfac = function FormDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDirective)();
};
_FormDirective.ɵdir = ɵɵdefineDirective({
  type: _FormDirective,
  selectors: [["form", "cForm", ""]],
  hostVars: 2,
  hostBindings: function FormDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    validated: [2, "validated", "validated", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormDirective = _FormDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDirective, [{
    type: Directive,
    args: [{
      selector: "form[cForm]",
      standalone: true
    }]
  }], null, {
    validated: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormFeedbackComponent = class _FormFeedbackComponent {
  constructor() {
    this.tooltip = false;
  }
  get hostClasses() {
    return {
      "valid-feedback": this.valid === true && !this.tooltip,
      "valid-tooltip": this.valid === true && this.tooltip,
      "invalid-feedback": this.valid !== true && !this.tooltip,
      "invalid-tooltip": this.valid !== true && this.tooltip
    };
  }
};
_FormFeedbackComponent.ɵfac = function FormFeedbackComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormFeedbackComponent)();
};
_FormFeedbackComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormFeedbackComponent,
  selectors: [["c-form-feedback"]],
  hostVars: 2,
  hostBindings: function FormFeedbackComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    tooltip: [2, "tooltip", "tooltip", booleanAttribute],
    valid: "valid"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FormFeedbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FormFeedbackComponent = _FormFeedbackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFeedbackComponent, [{
    type: Component,
    args: [{
      selector: "c-form-feedback",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    tooltip: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _InputGroupComponent = class _InputGroupComponent {
  constructor() {
    this.sizing = "";
  }
  get hostClasses() {
    return {
      "input-group": true,
      [`input-group-${this.sizing}`]: !!this.sizing
    };
  }
};
_InputGroupComponent.ɵfac = function InputGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupComponent)();
};
_InputGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _InputGroupComponent,
  selectors: [["c-input-group"]],
  hostAttrs: [1, "input-group"],
  hostVars: 2,
  hostBindings: function InputGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function InputGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var InputGroupComponent = _InputGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-input-group",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "input-group"
      }
    }]
  }], null, {
    sizing: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormSelectDirective = class _FormSelectDirective {
  constructor() {
    this.sizing = "";
  }
  get hostClasses() {
    return {
      "form-select": true,
      [`form-select-${this.sizing}`]: !!this.sizing,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
};
_FormSelectDirective.ɵfac = function FormSelectDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormSelectDirective)();
};
_FormSelectDirective.ɵdir = ɵɵdefineDirective({
  type: _FormSelectDirective,
  selectors: [["select", "cSelect", ""]],
  hostAttrs: [1, "form-select"],
  hostVars: 2,
  hostBindings: function FormSelectDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing",
    valid: "valid"
  },
  standalone: true
});
var FormSelectDirective = _FormSelectDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSelectDirective, [{
    type: Directive,
    args: [{
      selector: "select[cSelect]",
      standalone: true,
      host: {
        class: "form-select"
      }
    }]
  }], null, {
    sizing: [{
      type: Input
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormLabelDirective = class _FormLabelDirective {
  constructor() {
    this.col = "";
    this.sizing = "";
  }
  get hostClasses() {
    return {
      "form-label": true,
      "col-form-label": this.col === "col",
      [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === "col"
    };
  }
};
_FormLabelDirective.ɵfac = function FormLabelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormLabelDirective)();
};
_FormLabelDirective.ɵdir = ɵɵdefineDirective({
  type: _FormLabelDirective,
  selectors: [["", "cLabel", ""]],
  hostAttrs: [1, "form-label"],
  hostVars: 2,
  hostBindings: function FormLabelDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    col: [0, "cLabel", "col"],
    sizing: "sizing"
  },
  standalone: true
});
var FormLabelDirective = _FormLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[cLabel]",
      standalone: true,
      host: {
        class: "form-label"
      }
    }]
  }], null, {
    col: [{
      type: Input,
      args: ["cLabel"]
    }],
    sizing: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormCheckLabelDirective = class _FormCheckLabelDirective {
};
_FormCheckLabelDirective.ɵfac = function FormCheckLabelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCheckLabelDirective)();
};
_FormCheckLabelDirective.ɵdir = ɵɵdefineDirective({
  type: _FormCheckLabelDirective,
  selectors: [["label", "cFormCheckLabel", ""]],
  hostAttrs: [1, "form-check-label"],
  standalone: true
});
var FormCheckLabelDirective = _FormCheckLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckLabelDirective, [{
    type: Directive,
    args: [{
      selector: "label[cFormCheckLabel]",
      standalone: true,
      host: {
        class: "form-check-label"
      }
    }]
  }], null, null);
})();
var _formCheckClass;
var _FormCheckComponent = class _FormCheckComponent {
  constructor() {
    __privateAdd(this, _formCheckClass);
    this.inline = false;
    this.reverse = false;
    this.sizing = "";
    this.switch = false;
    __privateSet(this, _formCheckClass, true);
  }
  get hostClasses() {
    return {
      "form-check": this.formCheckClass,
      "form-switch": this.switch,
      [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
      "form-check-inline": this.inline,
      "form-check-reverse": this.reverse
    };
  }
  get formCheckClass() {
    return __privateGet(this, _formCheckClass);
  }
  ngAfterContentInit() {
    __privateSet(this, _formCheckClass, !!this.formCheckLabel);
  }
};
_formCheckClass = new WeakMap();
_FormCheckComponent.ɵfac = function FormCheckComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCheckComponent)();
};
_FormCheckComponent.ɵcmp = ɵɵdefineComponent({
  type: _FormCheckComponent,
  selectors: [["c-form-check"]],
  contentQueries: function FormCheckComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, FormCheckLabelDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formCheckLabel = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function FormCheckComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    inline: [2, "inline", "inline", booleanAttribute],
    reverse: [2, "reverse", "reverse", booleanAttribute],
    sizing: "sizing",
    switch: [2, "switch", "switch", booleanAttribute]
  },
  exportAs: ["cFormCheck"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FormCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FormCheckComponent = _FormCheckComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckComponent, [{
    type: Component,
    args: [{
      selector: "c-form-check",
      template: "<ng-content />",
      exportAs: "cFormCheck",
      standalone: true
    }]
  }], null, {
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sizing: [{
      type: Input
    }],
    switch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    formCheckLabel: [{
      type: ContentChild,
      args: [FormCheckLabelDirective]
    }]
  });
})();
var _FormCheckInputDirective = class _FormCheckInputDirective {
  /**
   * Set component indeterminate state.
   * @type boolean
   * @default false
   */
  set indeterminate(value) {
    const indeterminate = value;
    if (this._indeterminate !== indeterminate) {
      this._indeterminate = indeterminate;
      const htmlInputElement = this.hostElement.nativeElement;
      if (indeterminate) {
        this.renderer.setProperty(htmlInputElement, "checked", false);
      }
      this.renderer.setProperty(htmlInputElement, "indeterminate", indeterminate);
    }
  }
  get indeterminate() {
    return this._indeterminate;
  }
  get hostClasses() {
    return {
      "form-check-input": true,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
  set checked(value) {
    const checked = value;
    const htmlInputElement = this.hostElement?.nativeElement;
    if (htmlInputElement) {
      this.renderer.setProperty(htmlInputElement, "checked", checked);
    }
  }
  get checked() {
    return this.hostElement?.nativeElement?.checked;
  }
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.type = "checkbox";
    this._indeterminate = false;
  }
};
_FormCheckInputDirective.ɵfac = function FormCheckInputDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCheckInputDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_FormCheckInputDirective.ɵdir = ɵɵdefineDirective({
  type: _FormCheckInputDirective,
  selectors: [["input", "cFormCheckInput", ""]],
  hostAttrs: [1, "form-check-input"],
  hostVars: 3,
  hostBindings: function FormCheckInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    type: "type",
    indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute],
    valid: "valid",
    checked: [2, "checked", "checked", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormCheckInputDirective = _FormCheckInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormCheckInput]",
      standalone: true,
      host: {
        class: "form-check-input"
      }
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valid: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _FormControlDirective = class _FormControlDirective {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.sizing = "";
    this.type = "text";
    this.plaintext = false;
  }
  get hostClasses() {
    const isRangeType = this.type === "range";
    return {
      "form-control": !isRangeType && !this.plaintext,
      "form-control-plaintext": !isRangeType && this.plaintext,
      "form-control-color": this.type === "color",
      "form-range": isRangeType,
      [`form-control-${this.sizing}`]: !!this.sizing && !isRangeType,
      "is-valid": this.valid === true,
      "is-invalid": this.valid === false
    };
  }
  get hostTag() {
    return this.hostElement.nativeElement.tagName;
  }
  ngOnInit() {
    const hostTag = this.hostTag.toLowerCase();
    if (hostTag !== "input" && hostTag !== "textarea") {
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<textarea>' - not with '<${hostTag}>'`);
    }
  }
};
_FormControlDirective.ɵfac = function FormControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlDirective)(ɵɵdirectiveInject(ElementRef));
};
_FormControlDirective.ɵdir = ɵɵdefineDirective({
  type: _FormControlDirective,
  selectors: [["input", "cFormControl", ""], ["textarea", "cFormControl", ""]],
  hostVars: 3,
  hostBindings: function FormControlDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    sizing: "sizing",
    valid: "valid",
    type: "type",
    plaintext: [2, "plaintext", "plaintext", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "input[cFormControl], textarea[cFormControl]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    sizing: [{
      type: Input
    }],
    valid: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    plaintext: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _FormTextDirective = class _FormTextDirective {
};
_FormTextDirective.ɵfac = function FormTextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormTextDirective)();
};
_FormTextDirective.ɵdir = ɵɵdefineDirective({
  type: _FormTextDirective,
  selectors: [["", "cFormText", ""]],
  hostAttrs: [1, "form-text"],
  standalone: true
});
var FormTextDirective = _FormTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormText]",
      standalone: true,
      host: {
        class: "form-text"
      }
    }]
  }], null, null);
})();
var _FormFloatingDirective = class _FormFloatingDirective {
  constructor() {
    this.floating = true;
  }
  get hostClasses() {
    return {
      "form-floating": this.floating
    };
  }
};
_FormFloatingDirective.ɵfac = function FormFloatingDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormFloatingDirective)();
};
_FormFloatingDirective.ɵdir = ɵɵdefineDirective({
  type: _FormFloatingDirective,
  selectors: [["", "cFormFloating", ""]],
  hostVars: 2,
  hostBindings: function FormFloatingDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    floating: [2, "cFormFloating", "floating", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var FormFloatingDirective = _FormFloatingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFloatingDirective, [{
    type: Directive,
    args: [{
      selector: "[cFormFloating]",
      standalone: true
    }]
  }], null, {
    floating: [{
      type: Input,
      args: [{
        alias: "cFormFloating",
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _InputGroupTextDirective = class _InputGroupTextDirective {
};
_InputGroupTextDirective.ɵfac = function InputGroupTextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupTextDirective)();
};
_InputGroupTextDirective.ɵdir = ɵɵdefineDirective({
  type: _InputGroupTextDirective,
  selectors: [["", "cInputGroupText", ""]],
  hostAttrs: [1, "input-group-text"],
  standalone: true
});
var InputGroupTextDirective = _InputGroupTextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupTextDirective, [{
    type: Directive,
    args: [{
      selector: "[cInputGroupText]",
      standalone: true,
      host: {
        class: "input-group-text"
      }
    }]
  }], null, null);
})();
var _FormModule = class _FormModule {
};
_FormModule.ɵfac = function FormModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormModule)();
};
_FormModule.ɵmod = ɵɵdefineNgModule({
  type: _FormModule,
  imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
  exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
});
_FormModule.ɵinj = ɵɵdefineInjector({});
var FormModule = _FormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      imports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective],
      exports: [FormDirective, FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormControlDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormSelectDirective, FormTextDirective, InputGroupComponent, InputGroupTextDirective]
    }]
  }], null, null);
})();
var _ContainerComponent = class _ContainerComponent {
  constructor() {
    this.breakpoint = "";
    this.fluid = false;
  }
  get hostClasses() {
    return {
      container: !this.fluid && !this.breakpoint,
      "container-fluid": !!this.fluid,
      [`container-${this.breakpoint}`]: !!this.breakpoint
    };
  }
};
_ContainerComponent.ɵfac = function ContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContainerComponent)();
};
_ContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ContainerComponent,
  selectors: [["c-container"], ["", "cContainer", ""]],
  hostVars: 2,
  hostBindings: function ContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    breakpoint: "breakpoint",
    fluid: [2, "fluid", "fluid", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ContainerComponent = _ContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{
      selector: "c-container, [cContainer]",
      template: "<ng-content />",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    breakpoint: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ColDirective = class _ColDirective {
  constructor() {
    this._xs = false;
    this._sm = false;
    this._md = false;
    this._lg = false;
    this._xl = false;
    this._xxl = false;
  }
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @type { 'auto' | number |  boolean }
   */
  set cCol(value) {
    this.xs = this.xs || this.coerceInput(value);
  }
  set xs(value) {
    this._xs = this.coerceInput(value);
  }
  get xs() {
    return this._xs;
  }
  /**
   * The number of columns/offset/order on small devices (<768px).
   * @type { 'auto' | number |  boolean }
   */
  set sm(value) {
    this._sm = this.coerceInput(value);
  }
  get sm() {
    return this._sm;
  }
  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @type { 'auto' | number |  boolean }
   */
  set md(value) {
    this._md = this.coerceInput(value);
  }
  get md() {
    return this._md;
  }
  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @type { 'auto' | number |  boolean }
   */
  set lg(value) {
    this._lg = this.coerceInput(value);
  }
  get lg() {
    return this._lg;
  }
  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @type { 'auto' | number |  boolean }
   */
  set xl(value) {
    this._xl = this.coerceInput(value);
  }
  get xl() {
    return this._xl;
  }
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @type { 'auto' | number |  boolean }
   */
  set xxl(value) {
    this._xxl = this.coerceInput(value);
  }
  get xxl() {
    return this._xxl;
  }
  get hostClasses() {
    const classes = {
      col: true
    };
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = this[breakpoint];
      const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
      classes[`col${infix}`] = value === true;
      classes[`col${infix}-${value}`] = typeof value === "number" || typeof value === "string";
    });
    if (typeof this.offset === "object") {
      const offset = __spreadValues({}, this.offset);
      Object.entries(offset).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
      });
    } else {
      classes[`offset-${this.offset}`] = typeof this.offset === "number" && this.offset > 0 && this.offset <= 11;
    }
    if (typeof this.order === "object") {
      const order = __spreadValues({}, this.order);
      Object.entries(order).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`order${infix}-${value}`] = value;
      });
    } else {
      classes[`order-${this.order}`] = !!this.order;
    }
    classes.col = !Object.entries(classes).filter((i) => i[0].startsWith("col-") && i[1]).length || this.xs === true;
    return classes;
  }
  coerceInput(value) {
    if (value === "auto") {
      return value;
    }
    if (value === "" || value === void 0 || value === null) {
      return coerceBooleanProperty(value);
    }
    if (typeof value === "boolean") {
      return value;
    }
    return coerceNumberProperty(value);
  }
};
_ColDirective.ɵfac = function ColDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ColDirective)();
};
_ColDirective.ɵdir = ɵɵdefineDirective({
  type: _ColDirective,
  selectors: [["", "cCol", ""]],
  hostVars: 2,
  hostBindings: function ColDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    cCol: "cCol",
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl",
    offset: "offset",
    order: "order"
  },
  standalone: true
});
var ColDirective = _ColDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColDirective, [{
    type: Directive,
    args: [{
      selector: "[cCol]",
      standalone: true
    }]
  }], null, {
    cCol: [{
      type: Input
    }],
    xs: [{
      type: Input
    }],
    sm: [{
      type: Input
    }],
    md: [{
      type: Input
    }],
    lg: [{
      type: Input
    }],
    xl: [{
      type: Input
    }],
    xxl: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ColComponent = class _ColComponent extends ColDirective {
};
_ColComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵColComponent_BaseFactory;
  return function ColComponent_Factory(__ngFactoryType__) {
    return (ɵColComponent_BaseFactory || (ɵColComponent_BaseFactory = ɵɵgetInheritedFactory(_ColComponent)))(__ngFactoryType__ || _ColComponent);
  };
})();
_ColComponent.ɵcmp = ɵɵdefineComponent({
  type: _ColComponent,
  selectors: [["c-col"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ColComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ColComponent = _ColComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColComponent, [{
    type: Component,
    args: [{
      selector: "c-col",
      template: "<ng-content />",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _RowDirective = class _RowDirective {
  get hostClasses() {
    const cols = this.xs;
    const classes = {
      row: true,
      [`row-cols-${cols}`]: !!cols
    };
    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = this[breakpoint];
      if (typeof value === "number" || typeof value === "string") {
        const infix = breakpoint === "xs" ? "" : `-${breakpoint}`;
        classes[`row-cols${infix}-${value}`] = !!value;
      }
    });
    return classes;
  }
};
_RowDirective.ɵfac = function RowDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RowDirective)();
};
_RowDirective.ɵdir = ɵɵdefineDirective({
  type: _RowDirective,
  selectors: [["", "cRow", ""]],
  hostAttrs: [1, "row"],
  hostVars: 2,
  hostBindings: function RowDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl"
  },
  standalone: true
});
var RowDirective = _RowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowDirective, [{
    type: Directive,
    args: [{
      selector: "[cRow]",
      standalone: true,
      host: {
        class: "row"
      }
    }]
  }], null, {
    xs: [{
      type: Input
    }],
    sm: [{
      type: Input
    }],
    md: [{
      type: Input
    }],
    lg: [{
      type: Input
    }],
    xl: [{
      type: Input
    }],
    xxl: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _RowComponent = class _RowComponent extends RowDirective {
};
_RowComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵRowComponent_BaseFactory;
  return function RowComponent_Factory(__ngFactoryType__) {
    return (ɵRowComponent_BaseFactory || (ɵRowComponent_BaseFactory = ɵɵgetInheritedFactory(_RowComponent)))(__ngFactoryType__ || _RowComponent);
  };
})();
_RowComponent.ɵcmp = ɵɵdefineComponent({
  type: _RowComponent,
  selectors: [["c-row"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function RowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var RowComponent = _RowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowComponent, [{
    type: Component,
    args: [{
      selector: "c-row",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, null);
})();
var _GutterDirective = class _GutterDirective {
  constructor() {
    this.gutter = {};
  }
  get hostClasses() {
    let gutterClass;
    if (typeof this.gutter === "number") {
      gutterClass = _GutterDirective.getGutterClasses({
        g: this.gutter
      });
      return gutterClass;
    }
    {
      const {
        g,
        gx,
        gy
      } = __spreadValues({}, this.gutter);
      gutterClass = _GutterDirective.getGutterClasses({
        g,
        gx,
        gy
      });
    }
    Object.keys(BreakpointInfix).forEach((key) => {
      const gutter = this.gutter[key] ? __spreadValues({}, this.gutter[key]) : void 0;
      if (gutter) {
        const classes = _GutterDirective.getGutterClasses(gutter, key);
        gutterClass = __spreadValues(__spreadValues({}, gutterClass), classes);
      }
    });
    return gutterClass;
  }
  static getGutterClasses(gutter, breakpoint) {
    const {
      g,
      gx,
      gy
    } = __spreadValues({}, gutter);
    const infix = breakpoint ? `-${breakpoint}` : "";
    return {
      [`g${infix}-${g}`]: typeof g === "number",
      [`gx${infix}-${gx}`]: typeof gx === "number",
      [`gy${infix}-${gy}`]: typeof gy === "number"
    };
  }
};
_GutterDirective.ɵfac = function GutterDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GutterDirective)();
};
_GutterDirective.ɵdir = ɵɵdefineDirective({
  type: _GutterDirective,
  selectors: [["", "gutter", ""]],
  hostVars: 2,
  hostBindings: function GutterDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    gutter: "gutter"
  },
  standalone: true
});
var GutterDirective = _GutterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GutterDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[gutter]",
      standalone: true
    }]
  }], null, {
    gutter: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _GridModule = class _GridModule {
};
_GridModule.ɵfac = function GridModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GridModule)();
};
_GridModule.ɵmod = ɵɵdefineNgModule({
  type: _GridModule,
  imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
  exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
});
_GridModule.ɵinj = ɵɵdefineInjector({});
var GridModule = _GridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective],
      exports: [ColComponent, ColDirective, ContainerComponent, GutterDirective, RowComponent, RowDirective]
    }]
  }], null, null);
})();
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    this.role = "banner";
  }
  get getClasses() {
    return !!this.container ? this.containerClasses : this.headerClasses;
  }
  get headerClasses() {
    return {
      header: true,
      [`header-${this.position}`]: !!this.position
    };
  }
  get containerClasses() {
    return {
      container: this.container === true,
      [`container-${this.container}`]: typeof this.container === "string"
    };
  }
};
_HeaderComponent.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)();
};
_HeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderComponent,
  selectors: [["c-header"], ["", "c-header", ""]],
  hostVars: 3,
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    container: "container",
    position: "position",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "ngClass"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, HeaderComponent_Conditional_0_Template, 2, 1, "div", 0)(1, HeaderComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(!!ctx.container ? 0 : 1);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-header, [c-header]",
      standalone: true,
      imports: [NgClass],
      template: '@if (!!container) {\n  <div [ngClass]="headerClasses">\n    <ng-content />\n  </div>\n} @else {\n  <ng-content />\n}\n'
    }]
  }], null, {
    container: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _HeaderBrandComponent = class _HeaderBrandComponent {
  constructor() {
    this.role = "button";
    this.headerBrandClass = true;
  }
};
_HeaderBrandComponent.ɵfac = function HeaderBrandComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderBrandComponent)();
};
_HeaderBrandComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderBrandComponent,
  selectors: [["c-header-brand"]],
  hostVars: 3,
  hostBindings: function HeaderBrandComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("header-brand", ctx.headerBrandClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function HeaderBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var HeaderBrandComponent = _HeaderBrandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-header-brand",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    headerBrandClass: [{
      type: HostBinding,
      args: ["class.header-brand"]
    }]
  });
})();
var _HeaderDividerComponent = class _HeaderDividerComponent {
  constructor() {
    this.headerDividerClass = true;
  }
};
_HeaderDividerComponent.ɵfac = function HeaderDividerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderDividerComponent)();
};
_HeaderDividerComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderDividerComponent,
  selectors: [["c-header-divider"], ["", "cHeaderDivider", ""]],
  hostVars: 2,
  hostBindings: function HeaderDividerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("header-divider", ctx.headerDividerClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function HeaderDividerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var HeaderDividerComponent = _HeaderDividerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-header-divider, [cHeaderDivider]",
      template: ``,
      standalone: true
    }]
  }], null, {
    headerDividerClass: [{
      type: HostBinding,
      args: ["class.header-divider"]
    }]
  });
})();
var _HeaderNavComponent = class _HeaderNavComponent {
  constructor() {
    this.role = "navigation";
    this.headerNavClass = true;
  }
};
_HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderNavComponent)();
};
_HeaderNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderNavComponent,
  selectors: [["c-header-nav"]],
  hostVars: 3,
  hostBindings: function HeaderNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("header-nav", ctx.headerNavClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function HeaderNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  }
});
var HeaderNavComponent = _HeaderNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderNavComponent, [{
    type: Component,
    args: [{
      selector: "c-header-nav",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    headerNavClass: [{
      type: HostBinding,
      args: ["class.header-nav"]
    }]
  });
})();
var _HeaderTextComponent = class _HeaderTextComponent {
  constructor() {
    this.headerTextClass = true;
  }
};
_HeaderTextComponent.ɵfac = function HeaderTextComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderTextComponent)();
};
_HeaderTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _HeaderTextComponent,
  selectors: [["c-header-text"], ["", "cHeaderText", ""]],
  hostVars: 2,
  hostBindings: function HeaderTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("header-text", ctx.headerTextClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function HeaderTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var HeaderTextComponent = _HeaderTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTextComponent, [{
    type: Component,
    args: [{
      selector: "c-header-text, [cHeaderText]",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    headerTextClass: [{
      type: HostBinding,
      args: ["class.header-text"]
    }]
  });
})();
var _HeaderTogglerDirective = class _HeaderTogglerDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.headerToggler = true;
    this.type = "button";
    this.ariaLabel = "Toggle navigation";
  }
  addDefaultIcon() {
    const span = this.renderer.createElement("span");
    this.renderer.addClass(span, "header-toggler-icon");
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }
  ngAfterContentInit() {
    this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
};
_HeaderTogglerDirective.ɵfac = function HeaderTogglerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderTogglerDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HeaderTogglerDirective.ɵdir = ɵɵdefineDirective({
  type: _HeaderTogglerDirective,
  selectors: [["", "cHeaderToggler", ""]],
  hostVars: 4,
  hostBindings: function HeaderTogglerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel);
      ɵɵclassProp("header-toggler", ctx.headerToggler);
    }
  },
  inputs: {
    type: "type",
    ariaLabel: "ariaLabel"
  },
  standalone: true
});
var HeaderTogglerDirective = _HeaderTogglerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cHeaderToggler]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    headerToggler: [{
      type: HostBinding,
      args: ["class.header-toggler"]
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }]
  });
})();
var _HeaderModule = class _HeaderModule {
};
_HeaderModule.ɵfac = function HeaderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderModule)();
};
_HeaderModule.ɵmod = ɵɵdefineNgModule({
  type: _HeaderModule,
  imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
  exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
});
_HeaderModule.ɵinj = ɵɵdefineInjector({});
var HeaderModule = _HeaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderModule, [{
    type: NgModule,
    args: [{
      imports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective],
      exports: [HeaderComponent, HeaderBrandComponent, HeaderDividerComponent, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective]
    }]
  }], null, null);
})();
var _ImgDirective = class _ImgDirective {
  constructor() {
    this.align = "";
    this.fluid = false;
    this.rounded = false;
    this.thumbnail = false;
    this.placeholderColor = "transparent";
  }
  get getStyles() {
    return {
      backgroundColor: this.placeholderColor
    };
  }
  get hostClasses() {
    const align = this.align;
    return {
      [`float-${align}`]: align === "start" || align === "end",
      "d-block": align === "center",
      "mx-auto": align === "center",
      "img-fluid": this.fluid,
      "rounded": this.rounded,
      "img-thumbnail": this.thumbnail
    };
  }
};
_ImgDirective.ɵfac = function ImgDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ImgDirective)();
};
_ImgDirective.ɵdir = ɵɵdefineDirective({
  type: _ImgDirective,
  selectors: [["", "cImg", ""]],
  hostVars: 4,
  hostBindings: function ImgDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.getStyles);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: "align",
    fluid: [2, "fluid", "fluid", booleanAttribute],
    rounded: [2, "rounded", "rounded", booleanAttribute],
    thumbnail: [2, "thumbnail", "thumbnail", booleanAttribute],
    placeholderColor: "placeholderColor"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ImgDirective = _ImgDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgDirective, [{
    type: Directive,
    args: [{
      selector: "[cImg]",
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbnail: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholderColor: [{
      type: Input
    }],
    getStyles: [{
      type: HostBinding,
      args: ["style"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ImgModule = class _ImgModule {
};
_ImgModule.ɵfac = function ImgModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ImgModule)();
};
_ImgModule.ɵmod = ɵɵdefineNgModule({
  type: _ImgModule,
  imports: [ImgDirective],
  exports: [ImgDirective]
});
_ImgModule.ɵinj = ɵɵdefineInjector({});
var ImgModule = _ImgModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgModule, [{
    type: NgModule,
    args: [{
      imports: [ImgDirective],
      exports: [ImgDirective]
    }]
  }], null, null);
})();
var _ListGroupDirective = class _ListGroupDirective {
  constructor() {
    this.flush = false;
  }
  get hostClasses() {
    return {
      "list-group": true,
      "list-group-horizontal": this.horizontal === true || this.horizontal === "",
      [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== "boolean",
      "list-group-flush": this.flush
    };
  }
};
_ListGroupDirective.ɵfac = function ListGroupDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListGroupDirective)();
};
_ListGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _ListGroupDirective,
  selectors: [["", "cListGroup", ""]],
  hostAttrs: [1, "list-group"],
  hostVars: 2,
  hostBindings: function ListGroupDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    flush: [2, "flush", "flush", booleanAttribute],
    horizontal: "horizontal"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ListGroupDirective = _ListGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroup]",
      standalone: true,
      host: {
        class: "list-group"
      }
    }]
  }], null, {
    flush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    horizontal: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ListGroupItemDirective = class _ListGroupItemDirective {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.disabled = false;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  get ariaCurrent() {
    return !!this.active;
  }
  get hostClasses() {
    const host = this.hostElement.nativeElement;
    return {
      "list-group-item": true,
      "list-group-item-action": host.nodeName === "A" || host.nodeName === "BUTTON",
      active: !!this.active,
      disabled: this.isDisabled,
      [`list-group-item-${this.color}`]: !!this.color
    };
  }
};
_ListGroupItemDirective.ɵfac = function ListGroupItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListGroupItemDirective)(ɵɵdirectiveInject(ElementRef));
};
_ListGroupItemDirective.ɵdir = ɵɵdefineDirective({
  type: _ListGroupItemDirective,
  selectors: [["", "cListGroupItem", ""], ["c-list-group-item"]],
  hostVars: 6,
  hostBindings: function ListGroupItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.getTabindex)("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    color: "color",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["cListGroupItem"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ListGroupItemDirective = _ListGroupItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cListGroupItem], c-list-group-item",
      exportAs: "cListGroupItem",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    active: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ListGroupModule = class _ListGroupModule {
};
_ListGroupModule.ɵfac = function ListGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListGroupModule)();
};
_ListGroupModule.ɵmod = ɵɵdefineNgModule({
  type: _ListGroupModule,
  imports: [ListGroupDirective, ListGroupItemDirective],
  exports: [ListGroupDirective, ListGroupItemDirective]
});
_ListGroupModule.ɵinj = ɵɵdefineInjector({});
var ListGroupModule = _ListGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupModule, [{
    type: NgModule,
    args: [{
      exports: [ListGroupDirective, ListGroupItemDirective],
      imports: [ListGroupDirective, ListGroupItemDirective]
    }]
  }], null, null);
})();
var _NavLinkDirective = class _NavLinkDirective {
  constructor() {
    this.cNavLink = true;
    this.disabled = false;
  }
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  get getCursorStyle() {
    return this.disabled ? null : "pointer";
  }
  get hostClasses() {
    return {
      "nav-link": this.cNavLink,
      disabled: this.disabled,
      active: this.active
    };
  }
};
_NavLinkDirective.ɵfac = function NavLinkDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavLinkDirective)();
};
_NavLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _NavLinkDirective,
  selectors: [["", "cNavLink", ""]],
  hostVars: 8,
  hostBindings: function NavLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent)("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("tabindex", ctx.getTabindex);
      ɵɵclassMap(ctx.hostClasses);
      ɵɵstyleProp("cursor", ctx.getCursorStyle);
    }
  },
  inputs: {
    cNavLink: [2, "cNavLink", "cNavLink", booleanAttribute],
    active: "active",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var NavLinkDirective = _NavLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavLink]",
      standalone: true
    }]
  }], null, {
    cNavLink: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    active: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    getCursorStyle: [{
      type: HostBinding,
      args: ["style.cursor"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavItemComponent = class _NavItemComponent {
};
_NavItemComponent.ɵfac = function NavItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavItemComponent)();
};
_NavItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavItemComponent,
  selectors: [["c-nav-item"]],
  hostAttrs: [1, "nav-item"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}"]
});
var NavItemComponent = _NavItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemComponent, [{
    type: Component,
    args: [{
      selector: "c-nav-item",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "nav-item"
      },
      styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"]
    }]
  }], null, null);
})();
var _NavComponent = class _NavComponent {
  get hostClasses() {
    return {
      nav: true,
      [`nav-${this.layout}`]: !!this.layout,
      [`nav-${this.variant}`]: !!this.variant
    };
  }
};
_NavComponent.ɵfac = function NavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavComponent)();
};
_NavComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavComponent,
  selectors: [["c-nav"]],
  hostAttrs: [1, "nav"],
  hostVars: 2,
  hostBindings: function NavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    layout: "layout",
    variant: "variant"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus{outline:0}.nav-underline-border[_nghost-%COMP%]{column-gap:0}"]
});
var NavComponent = _NavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavComponent, [{
    type: Component,
    args: [{
      selector: "c-nav",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "nav"
      },
      styles: [":host .nav-link:focus{outline:0}:host.nav-underline-border{column-gap:0}\n"]
    }]
  }], null, {
    layout: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavModule = class _NavModule {
};
_NavModule.ɵfac = function NavModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavModule)();
};
_NavModule.ɵmod = ɵɵdefineNgModule({
  type: _NavModule,
  imports: [NavComponent, NavItemComponent, NavLinkDirective],
  exports: [NavComponent, NavItemComponent, NavLinkDirective]
});
_NavModule.ɵinj = ɵɵdefineInjector({});
var NavModule = _NavModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavModule, [{
    type: NgModule,
    args: [{
      imports: [NavComponent, NavItemComponent, NavLinkDirective],
      exports: [NavComponent, NavItemComponent, NavLinkDirective]
    }]
  }], null, null);
})();
var _NavbarComponent = class _NavbarComponent {
  constructor(hostElement, breakpointObserver) {
    this.hostElement = hostElement;
    this.breakpointObserver = breakpointObserver;
    this.role = "navigation";
  }
  get hostClasses() {
    const expandClassSuffix = this.expand === true ? "" : `-${this.expand}`;
    return {
      navbar: true,
      [`navbar-expand${expandClassSuffix}`]: !!this.expand,
      [`bg-${this.color}`]: !!this.color,
      [`${this.placement}`]: !!this.placement
    };
  }
  get containerClass() {
    return `container${this.container !== true ? "-" + this.container : ""}`;
  }
  get breakpoint() {
    if (typeof this.expand === "string") {
      return getComputedStyle(this.hostElement.nativeElement)?.getPropertyValue(`--cui-breakpoint-${this.expand}`) ?? false;
    }
    return false;
  }
  ngAfterContentInit() {
    if (this.breakpoint) {
      const onBreakpoint = `(min-width: ${this.breakpoint})`;
      this.breakpointObserver.observe([onBreakpoint]).subscribe((result) => {
        if (this.collapse) {
          const animate2 = this.collapse.animate;
          this.collapse.toggle(false);
          this.collapse.animate = false;
          setTimeout(() => {
            this.collapse.toggle(result.matches);
            setTimeout(() => {
              this.collapse.animate = animate2;
            });
          });
        }
      });
    }
  }
};
_NavbarComponent.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(BreakpointObserver));
};
_NavbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarComponent,
  selectors: [["c-navbar"]],
  contentQueries: function NavbarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CollapseDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapse = _t.first);
    }
  },
  hostAttrs: [1, "navbar"],
  hostVars: 3,
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    container: "container",
    expand: "expand",
    placement: "placement",
    role: "role"
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["colorScheme", "colorScheme"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 1,
  consts: [["withContainerTemplate", ""], ["noContainerTemplate", ""], [4, "ngTemplateOutlet"], [3, "ngClass"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, NavbarComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, NavbarComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NavbarComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const withContainerTemplate_r2 = ɵɵreference(2);
      const noContainerTemplate_r3 = ɵɵreference(4);
      ɵɵproperty("ngTemplateOutlet", ctx.container ? withContainerTemplate_r2 : noContainerTemplate_r3);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar",
      standalone: true,
      imports: [NgClass, NgTemplateOutlet],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["colorScheme"]
      }],
      host: {
        class: "navbar"
      },
      template: '<ng-container *ngTemplateOutlet="container ? withContainerTemplate : noContainerTemplate" />\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]="containerClass">\n    <ng-content />\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: BreakpointObserver
  }], {
    color: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    expand: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    collapse: [{
      type: ContentChild,
      args: [CollapseDirective]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavbarBrandDirective = class _NavbarBrandDirective {
  constructor() {
    this.navbarBrand = true;
    this.role = "button";
  }
};
_NavbarBrandDirective.ɵfac = function NavbarBrandDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarBrandDirective)();
};
_NavbarBrandDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarBrandDirective,
  selectors: [["", "cNavbarBrand", ""]],
  hostVars: 3,
  hostBindings: function NavbarBrandDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("navbar-brand", ctx.navbarBrand);
    }
  },
  standalone: true
});
var NavbarBrandDirective = _NavbarBrandDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarBrandDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarBrand]",
      standalone: true
    }]
  }], null, {
    navbarBrand: [{
      type: HostBinding,
      args: ["class.navbar-brand"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var _NavbarNavComponent = class _NavbarNavComponent {
  constructor() {
    this.scroll = false;
  }
  get hostClasses() {
    return {
      "navbar-nav": true,
      "navbar-nav-scroll": this.scroll
    };
  }
};
_NavbarNavComponent.ɵfac = function NavbarNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarNavComponent)();
};
_NavbarNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarNavComponent,
  selectors: [["c-navbar-nav"]],
  hostAttrs: [1, "navbar-nav"],
  hostVars: 2,
  hostBindings: function NavbarNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    scroll: [2, "scroll", "scroll", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NavbarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NavbarNavComponent = _NavbarNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-nav",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "navbar-nav"
      }
    }]
  }], null, {
    scroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _NavbarTextComponent = class _NavbarTextComponent {
  constructor() {
    this.navbarTextClass = true;
  }
};
_NavbarTextComponent.ɵfac = function NavbarTextComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarTextComponent)();
};
_NavbarTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarTextComponent,
  selectors: [["c-navbar-text"]],
  hostVars: 2,
  hostBindings: function NavbarTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("navbar-text", ctx.navbarTextClass);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NavbarTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NavbarTextComponent = _NavbarTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTextComponent, [{
    type: Component,
    args: [{
      selector: "c-navbar-text",
      template: "<ng-content />",
      standalone: true
    }]
  }], null, {
    navbarTextClass: [{
      type: HostBinding,
      args: ["class.navbar-text"]
    }]
  });
})();
var _NavbarTogglerDirective = class _NavbarTogglerDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.navbarToggler = true;
    this.type = "button";
    this.ariaLabel = "Toggle navigation";
  }
  handleClick() {
    this.collapseRef?.toggle(!this.collapseRef?.visible);
  }
  addDefaultIcon() {
    const span = this.renderer.createElement("span");
    this.renderer.addClass(span, "navbar-toggler-icon");
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }
  ngAfterContentInit() {
    this.hasContent = this.hostElement.nativeElement.childNodes.length;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
};
_NavbarTogglerDirective.ɵfac = function NavbarTogglerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarTogglerDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NavbarTogglerDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarTogglerDirective,
  selectors: [["", "cNavbarToggler", ""]],
  hostVars: 4,
  hostBindings: function NavbarTogglerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NavbarTogglerDirective_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.type)("aria-label", ctx.ariaLabel);
      ɵɵclassProp("navbar-toggler", ctx.navbarToggler);
    }
  },
  inputs: {
    collapseRef: [0, "cNavbarToggler", "collapseRef"],
    type: "type",
    ariaLabel: "ariaLabel"
  },
  standalone: true
});
var NavbarTogglerDirective = _NavbarTogglerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cNavbarToggler]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    collapseRef: [{
      type: Input,
      args: ["cNavbarToggler"]
    }],
    navbarToggler: [{
      type: HostBinding,
      args: ["class.navbar-toggler"]
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }, {
      type: Input
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }, {
      type: Input
    }],
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _NavbarModule = class _NavbarModule {
};
_NavbarModule.ɵfac = function NavbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarModule)();
};
_NavbarModule.ɵmod = ɵɵdefineNgModule({
  type: _NavbarModule,
  imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
  exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
});
_NavbarModule.ɵinj = ɵɵdefineInjector({});
var NavbarModule = _NavbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarModule, [{
    type: NgModule,
    args: [{
      exports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective],
      imports: [NavbarBrandDirective, NavbarComponent, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective]
    }]
  }], null, null);
})();
var _ModalBodyComponent = class _ModalBodyComponent {
};
_ModalBodyComponent.ɵfac = function ModalBodyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalBodyComponent)();
};
_ModalBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalBodyComponent,
  selectors: [["c-modal-body"]],
  hostAttrs: [1, "modal-body"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ModalBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ModalBodyComponent = _ModalBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-body",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "modal-body"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _ModalContentComponent = class _ModalContentComponent {
};
_ModalContentComponent.ɵfac = function ModalContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalContentComponent)();
};
_ModalContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalContentComponent,
  selectors: [["c-modal-content"]],
  hostAttrs: [1, "modal-content"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ModalContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalContentComponent = _ModalContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalContentComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-content",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "modal-content"
      }
    }]
  }], null, null);
})();
var _ModalDialogComponent = class _ModalDialogComponent {
  get hostClasses() {
    return {
      "modal-dialog": true,
      "modal-dialog-centered": this.alignment === "center",
      "modal-fullscreen": this.fullscreen === true,
      [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
      "modal-dialog-scrollable": this.scrollable,
      [`modal-${this.size}`]: this.size
    };
  }
};
_ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalDialogComponent)();
};
_ModalDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalDialogComponent,
  selectors: [["c-modal-dialog"]],
  hostAttrs: [1, "modal-dialog"],
  hostVars: 2,
  hostBindings: function ModalDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    fullscreen: "fullscreen",
    scrollable: "scrollable",
    size: "size"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ModalDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}.modal-dialog-centered[_nghost-%COMP%]{display:flex}"]
});
var ModalDialogComponent = _ModalDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalDialogComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-dialog",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "modal-dialog"
      },
      styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"]
    }]
  }], null, {
    alignment: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ModalService = class _ModalService {
  constructor() {
    this.modalState = new Subject();
    this.modalState$ = this.modalState.asObservable();
  }
  toggle(action) {
    this.modalState.next(action);
  }
};
_ModalService.ɵfac = function ModalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalService)();
};
_ModalService.ɵprov = ɵɵdefineInjectable({
  token: _ModalService,
  factory: _ModalService.ɵfac,
  providedIn: "root"
});
var ModalService = _ModalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ModalToggleDirective = class _ModalToggleDirective {
  constructor(modalService) {
    this.modalService = modalService;
  }
  dismiss($event) {
    $event.preventDefault();
    this.modalService.toggle({
      show: "toggle",
      id: this.id
    });
  }
};
_ModalToggleDirective.ɵfac = function ModalToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalToggleDirective)(ɵɵdirectiveInject(ModalService));
};
_ModalToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _ModalToggleDirective,
  selectors: [["", "cModalToggle", ""]],
  hostBindings: function ModalToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ModalToggleDirective_click_HostBindingHandler($event) {
        return ctx.dismiss($event);
      });
    }
  },
  inputs: {
    id: [0, "cModalToggle", "id"]
  },
  standalone: true
});
var ModalToggleDirective = _ModalToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalToggle]",
      standalone: true
    }]
  }], () => [{
    type: ModalService
  }], {
    id: [{
      type: Input,
      args: ["cModalToggle"]
    }],
    dismiss: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ModalFooterComponent = class _ModalFooterComponent {
};
_ModalFooterComponent.ɵfac = function ModalFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalFooterComponent)();
};
_ModalFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalFooterComponent,
  selectors: [["c-modal-footer"]],
  hostAttrs: [1, "modal-footer"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ModalFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalFooterComponent = _ModalFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-footer",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "modal-footer"
      }
    }]
  }], null, null);
})();
var _ModalHeaderComponent = class _ModalHeaderComponent {
};
_ModalHeaderComponent.ɵfac = function ModalHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalHeaderComponent)();
};
_ModalHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalHeaderComponent,
  selectors: [["c-modal-header"]],
  hostAttrs: [1, "modal-header"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ModalHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var ModalHeaderComponent = _ModalHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-modal-header",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "modal-header"
      }
    }]
  }], null, null);
})();
var _ModalTitleDirective = class _ModalTitleDirective {
};
_ModalTitleDirective.ɵfac = function ModalTitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalTitleDirective)();
};
_ModalTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _ModalTitleDirective,
  selectors: [["", "cModalTitle", ""]],
  hostAttrs: [1, "modal-title"],
  standalone: true
});
var ModalTitleDirective = _ModalTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cModalTitle]",
      standalone: true,
      host: {
        class: "modal-title"
      }
    }]
  }], null, null);
})();
var _destroyRef6, _focusMonitor, _ariaModal, _visible2, _activeElement, _visibleEffect, _activeBackdrop, _afterViewInit;
var _ModalComponent = class _ModalComponent {
  constructor(document2, renderer, hostElement, modalService, backdropService) {
    __privateAdd(this, _destroyRef6);
    __privateAdd(this, _focusMonitor);
    __privateAdd(this, _ariaModal);
    __privateAdd(this, _visible2);
    __privateAdd(this, _activeElement);
    __privateAdd(this, _visibleEffect);
    __privateAdd(this, _activeBackdrop);
    __privateAdd(this, _afterViewInit);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.modalService = modalService;
    this.backdropService = backdropService;
    __privateSet(this, _destroyRef6, inject(DestroyRef));
    __privateSet(this, _focusMonitor, inject(FocusMonitor));
    this.alignment = "top";
    this.backdrop = true;
    this.keyboard = true;
    this.transition = true;
    this.role = "dialog";
    __privateSet(this, _ariaModal, null);
    this.scrollable = false;
    __privateSet(this, _visible2, signal(false));
    __privateSet(this, _activeElement, null);
    __privateSet(this, _visibleEffect, effect(() => {
      if (__privateGet(this, _visible2).call(this) && __privateGet(this, _afterViewInit).call(this)) {
        __privateSet(this, _activeElement, this.document.activeElement);
        setTimeout(() => {
          const focusable = this.modalContentRef.nativeElement.querySelectorAll('[tabindex]:not([tabindex="-1"]), button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
          if (focusable.length) {
            __privateGet(this, _focusMonitor).focusVia(focusable[0], "keyboard");
          }
        });
      } else {
        if (this.document.contains(__privateGet(this, _activeElement))) {
          setTimeout(() => {
            __privateGet(this, _activeElement)?.focus();
            __privateSet(this, _activeElement, null);
          });
        }
      }
    }));
    this.visibleChange = new EventEmitter();
    this._show = true;
    this.mouseDownTarget = null;
    __privateSet(this, _afterViewInit, signal(false));
  }
  /**
   * Set aria-modal html attr for modal. [docs]
   * @type boolean
   * @default null
   */
  set ariaModal(value) {
    __privateSet(this, _ariaModal, value);
  }
  get ariaModal() {
    return this.visible || __privateGet(this, _ariaModal) ? true : null;
  }
  /**
   * Toggle the visibility of modal component.
   * @type boolean
   */
  set visible(value) {
    if (__privateGet(this, _visible2).call(this) !== value) {
      __privateGet(this, _visible2).set(value);
      this.setBackdrop(this.backdrop !== false && value);
      this.setBodyStyles(value);
      this.visibleChange.emit(value);
    }
  }
  get visible() {
    return __privateGet(this, _visible2).call(this);
  }
  // private inBoundingClientRect!: boolean;
  get hostClasses() {
    return {
      modal: true,
      fade: this.transition,
      show: this.show
    };
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get tabIndex() {
    return "-1";
  }
  get animateTrigger() {
    return this.visible ? "visible" : "hidden";
  }
  get show() {
    return this.visible && this._show;
  }
  set show(value) {
    this._show = value;
  }
  animateStart(event) {
    if (event.toState === "visible") {
      this.backdropService.hideScrollbar();
      this.renderer.setStyle(this.hostElement.nativeElement, "display", "block");
    } else {
      if (!this.transition) {
        this.renderer.setStyle(this.hostElement.nativeElement, "display", "none");
      }
    }
  }
  animateDone(event) {
    setTimeout(() => {
      if (event.toState === "hidden") {
        this.renderer.setStyle(this.hostElement.nativeElement, "display", "none");
      }
    });
    this.show = this.visible;
  }
  onKeyDownHandler(event) {
    if (event.key === "Escape" && this.keyboard && this.visible) {
      if (this.backdrop === "static") {
        this.setStaticBackdrop();
      } else {
        this.modalService.toggle({
          show: false,
          modal: this
        });
      }
    }
  }
  onMouseDownHandler($event) {
    this.mouseDownTarget = $event.target;
  }
  onClickHandler($event) {
    if (this.mouseDownTarget !== $event.target) {
      this.mouseDownTarget = null;
      return;
    }
    const targetElement = $event.target;
    if (targetElement === this.hostElement.nativeElement) {
      if (this.backdrop === "static") {
        this.setStaticBackdrop();
        return;
      }
      this.modalService.toggle({
        show: false,
        modal: this
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
  }
  ngAfterViewInit() {
    __privateGet(this, _afterViewInit).set(true);
  }
  ngOnDestroy() {
    this.modalService.toggle({
      show: false,
      modal: this
    });
    __privateGet(this, _afterViewInit).set(false);
  }
  stateToggleSubscribe() {
    this.modalService.modalState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef6))).subscribe((action) => {
      if (this === action.modal || this.id === action.id) {
        if ("show" in action) {
          this.visible = action?.show === "toggle" ? !this.visible : action.show;
        }
      } else {
        if (this.visible) {
          this.visible = false;
        }
      }
    });
  }
  setBackdrop(setBackdrop) {
    __privateSet(this, _activeBackdrop, setBackdrop ? this.backdropService.setBackdrop("modal") : this.backdropService.clearBackdrop(__privateGet(this, _activeBackdrop)));
  }
  setBodyStyles(open) {
    if (open) {
      if (this.backdrop === true) {
        this.renderer.addClass(this.document.body, "modal-open");
      }
    } else {
      this.renderer.removeClass(this.document.body, "modal-open");
    }
  }
  setStaticBackdrop() {
    if (this.transition) {
      this.renderer.addClass(this.hostElement.nativeElement, "modal-static");
      this.renderer.setStyle(this.hostElement.nativeElement, "overflow-y", "hidden");
      setTimeout(() => {
        this.renderer.removeClass(this.hostElement.nativeElement, "modal-static");
        this.renderer.removeStyle(this.hostElement.nativeElement, "overflow-y");
      }, 300);
    }
  }
};
_destroyRef6 = new WeakMap();
_focusMonitor = new WeakMap();
_ariaModal = new WeakMap();
_visible2 = new WeakMap();
_activeElement = new WeakMap();
_visibleEffect = new WeakMap();
_activeBackdrop = new WeakMap();
_afterViewInit = new WeakMap();
_ModalComponent.ɵfac = function ModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ModalService), ɵɵdirectiveInject(BackdropService));
};
_ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalComponent,
  selectors: [["c-modal"]],
  viewQuery: function ModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ModalContentComponent, 5, ElementRef);
      ɵɵviewQuery(_c5, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContentRef = _t.first);
    }
  },
  hostAttrs: [1, "modal"],
  hostVars: 7,
  hostBindings: function ModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@showHide.start", function ModalComponent_animation_showHide_start_HostBindingHandler($event) {
        return ctx.animateStart($event);
      })("@showHide.done", function ModalComponent_animation_showHide_done_HostBindingHandler($event) {
        return ctx.animateDone($event);
      });
      ɵɵlistener("keyup", function ModalComponent_keyup_HostBindingHandler($event) {
        return ctx.onKeyDownHandler($event);
      }, false, ɵɵresolveDocument)("mousedown", function ModalComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDownHandler($event);
      })("click", function ModalComponent_click_HostBindingHandler($event) {
        return ctx.onClickHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@showHide", ctx.animateTrigger);
      ɵɵattribute("role", ctx.role)("aria-modal", ctx.ariaModal)("aria-hidden", ctx.ariaHidden)("tabindex", ctx.tabIndex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    alignment: "alignment",
    backdrop: "backdrop",
    fullscreen: "fullscreen",
    keyboard: [2, "keyboard", "keyboard", booleanAttribute],
    id: "id",
    size: "size",
    transition: [2, "transition", "transition", booleanAttribute],
    role: "role",
    ariaModal: "ariaModal",
    scrollable: [2, "scrollable", "scrollable", booleanAttribute],
    visible: [2, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cModal"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 6,
  consts: [["modalContentRef", ""], [3, "alignment", "fullscreen", "scrollable", "size"], [2, "display", "contents", 3, "cdkTrapFocus", "cdkTrapFocusAutoCapture"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-modal-dialog", 1)(1, "c-modal-content")(2, "div", 2, 0);
      ɵɵprojection(4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("alignment", ctx.alignment)("fullscreen", ctx.fullscreen)("scrollable", ctx.scrollable)("size", ctx.size);
      ɵɵadvance(2);
      ɵɵproperty("cdkTrapFocus", ctx.visible)("cdkTrapFocusAutoCapture", ctx.visible);
    }
  },
  dependencies: [ModalDialogComponent, ModalContentComponent, A11yModule, CdkTrapFocus],
  encapsulation: 2,
  data: {
    animation: [trigger("showHide", [state("visible", style({
      // display: 'block'
    })), state("hidden", style({
      // display: 'none'
    })), transition("visible <=> *", [animate("150ms")])])]
  }
});
var ModalComponent = _ModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "c-modal",
      animations: [trigger("showHide", [state("visible", style({
        // display: 'block'
      })), state("hidden", style({
        // display: 'none'
      })), transition("visible <=> *", [animate("150ms")])])],
      exportAs: "cModal",
      standalone: true,
      imports: [ModalDialogComponent, ModalContentComponent, A11yModule],
      host: {
        class: "modal"
      },
      template: '<c-modal-dialog\n  [alignment]="alignment"\n  [fullscreen]="fullscreen"\n  [scrollable]="scrollable"\n  [size]="size">\n  <c-modal-content>\n    <div [cdkTrapFocus]="visible" [cdkTrapFocusAutoCapture]="visible" style="display: contents;" #modalContentRef>\n      <ng-content />\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n'
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ModalService
  }, {
    type: BackdropService
  }], {
    alignment: [{
      type: Input
    }],
    backdrop: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    keyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    transition: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaModal: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-modal"]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    modalContent: [{
      type: ViewChild,
      args: [ModalContentComponent, {
        read: ElementRef
      }]
    }],
    modalContentRef: [{
      type: ViewChild,
      args: ["modalContentRef", {
        read: ElementRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    animateTrigger: [{
      type: HostBinding,
      args: ["@showHide"]
    }],
    animateStart: [{
      type: HostListener,
      args: ["@showHide.start", ["$event"]]
    }],
    animateDone: [{
      type: HostListener,
      args: ["@showHide.done", ["$event"]]
    }],
    onKeyDownHandler: [{
      type: HostListener,
      args: ["document:keyup", ["$event"]]
    }],
    onMouseDownHandler: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onClickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ModalModule = class _ModalModule {
};
_ModalModule.ɵfac = function ModalModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalModule)();
};
_ModalModule.ɵmod = ɵɵdefineNgModule({
  type: _ModalModule,
  imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
  exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective]
});
_ModalModule.ɵinj = ɵɵdefineInjector({
  providers: [ModalService],
  imports: [ModalComponent]
});
var ModalModule = _ModalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalModule, [{
    type: NgModule,
    args: [{
      exports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      imports: [ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective],
      providers: [ModalService]
    }]
  }], null, null);
})();
var _OffcanvasService = class _OffcanvasService {
  constructor() {
    this.offcanvasState = new Subject();
    this.offcanvasState$ = this.offcanvasState.asObservable();
  }
  toggle(action) {
    this.offcanvasState.next(action);
  }
};
_OffcanvasService.ɵfac = function OffcanvasService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasService)();
};
_OffcanvasService.ɵprov = ɵɵdefineInjectable({
  token: _OffcanvasService,
  factory: _OffcanvasService.ɵfac,
  providedIn: "root"
});
var OffcanvasService = _OffcanvasService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId$1 = 0;
var _destroyRef7, _activeBackdrop2, _backdropClickSubscription, _layoutChangeSubscription, _show, _visible3;
var _OffcanvasComponent = class _OffcanvasComponent {
  constructor(document2, platformId, renderer, hostElement, offcanvasService, backdropService, breakpointObserver) {
    __privateAdd(this, _destroyRef7);
    __privateAdd(this, _activeBackdrop2);
    __privateAdd(this, _backdropClickSubscription);
    __privateAdd(this, _layoutChangeSubscription);
    __privateAdd(this, _show);
    __privateAdd(this, _visible3);
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.offcanvasService = offcanvasService;
    this.backdropService = backdropService;
    this.breakpointObserver = breakpointObserver;
    __privateSet(this, _destroyRef7, inject(DestroyRef));
    this.backdrop = true;
    this.keyboard = true;
    this.placement = "start";
    this.responsive = true;
    this.id = `offcanvas-${this.placement}-${nextId$1++}`;
    this.role = "dialog";
    this.ariaModal = true;
    __privateSet(this, _show, false);
    this.scroll = false;
    __privateSet(this, _visible3, false);
    this.visibleChange = new EventEmitter();
  }
  /**
   * Toggle the visibility of offcanvas component.
   * @type boolean
   * @default false
   */
  set visible(value) {
    __privateSet(this, _visible3, value);
    if (__privateGet(this, _visible3)) {
      this.setBackdrop(this.backdrop);
      this.setFocus();
    } else {
      this.setBackdrop(false);
    }
    this.layoutChangeSubscribe(__privateGet(this, _visible3));
    this.visibleChange.emit(value);
  }
  get visible() {
    return __privateGet(this, _visible3);
  }
  get hostClasses() {
    return {
      offcanvas: typeof this.responsive === "boolean",
      [`offcanvas-${this.responsive}`]: typeof this.responsive !== "boolean",
      [`offcanvas-${this.placement}`]: !!this.placement,
      show: this.show
    };
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get tabIndex() {
    return "-1";
  }
  get animateTrigger() {
    return this.visible ? "visible" : "hidden";
  }
  get show() {
    return this.visible && __privateGet(this, _show);
  }
  set show(value) {
    __privateSet(this, _show, value);
  }
  get responsiveBreakpoint() {
    if (typeof this.responsive !== "string") {
      return false;
    }
    const element = this.document.documentElement;
    const responsiveBreakpoint = this.responsive;
    const breakpointValue = getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${responsiveBreakpoint.trim()}`) ?? false;
    return breakpointValue ? `${parseFloat(breakpointValue.trim()) - 0.02}px` : false;
  }
  animateStart(event) {
    if (event.toState === "visible") {
      if (!this.scroll) {
        this.backdropService.hideScrollbar();
      }
      this.renderer.addClass(this.hostElement.nativeElement, "showing");
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, "hiding");
    }
  }
  animateDone(event) {
    setTimeout(() => {
      if (event.toState === "visible") {
        this.renderer.removeClass(this.hostElement.nativeElement, "showing");
      }
      if (event.toState === "hidden") {
        this.renderer.removeClass(this.hostElement.nativeElement, "hiding");
        this.renderer.removeStyle(this.document.body, "overflow");
        this.renderer.removeStyle(this.document.body, "paddingRight");
      }
    });
    this.show = this.visible;
  }
  onKeyDownHandler(event) {
    if (event.key === "Escape" && this.keyboard && this.visible && this.backdrop !== "static") {
      this.offcanvasService.toggle({
        show: false,
        id: this.id
      });
    }
  }
  ngOnInit() {
    this.stateToggleSubscribe();
    setTimeout(() => {
      this.renderer.setStyle(this.hostElement.nativeElement, "display", "flex");
    });
  }
  ngOnDestroy() {
    this.offcanvasService.toggle({
      show: false,
      id: this.id
    });
  }
  setFocus() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.hostElement.nativeElement.focus());
    }
  }
  stateToggleSubscribe() {
    this.offcanvasService.offcanvasState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef7))).subscribe((action) => {
      if (this === action.offcanvas || this.id === action.id) {
        if ("show" in action) {
          this.visible = action?.show === "toggle" ? !this.visible : action.show;
        }
      }
    });
  }
  backdropClickSubscribe(subscribe = true) {
    if (subscribe) {
      __privateSet(this, _backdropClickSubscription, this.backdropService.backdropClick$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef7))).subscribe((clicked) => {
        this.offcanvasService.toggle({
          show: !clicked,
          id: this.id
        });
      }));
    } else {
      __privateGet(this, _backdropClickSubscription)?.unsubscribe();
    }
  }
  setBackdrop(setBackdrop) {
    __privateSet(this, _activeBackdrop2, !!setBackdrop ? this.backdropService.setBackdrop("offcanvas") : this.backdropService.clearBackdrop(__privateGet(this, _activeBackdrop2)));
    setBackdrop === true ? this.backdropClickSubscribe() : this.backdropClickSubscribe(false);
  }
  layoutChangeSubscribe(subscribe = true) {
    if (subscribe) {
      if (!this.responsiveBreakpoint) {
        return;
      }
      const responsiveBreakpoint = `(max-width: ${this.responsiveBreakpoint})`;
      const layoutChanges = this.breakpointObserver.observe([responsiveBreakpoint]);
      __privateSet(this, _layoutChangeSubscription, layoutChanges.pipe(filter((breakpointState) => !breakpointState.matches), takeUntilDestroyed(__privateGet(this, _destroyRef7))).subscribe((breakpointState) => {
        this.visible = breakpointState.matches;
      }));
    } else {
      __privateGet(this, _layoutChangeSubscription)?.unsubscribe();
    }
  }
};
_destroyRef7 = new WeakMap();
_activeBackdrop2 = new WeakMap();
_backdropClickSubscription = new WeakMap();
_layoutChangeSubscription = new WeakMap();
_show = new WeakMap();
_visible3 = new WeakMap();
_OffcanvasComponent.ɵfac = function OffcanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OffcanvasService), ɵɵdirectiveInject(BackdropService), ɵɵdirectiveInject(BreakpointObserver));
};
_OffcanvasComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasComponent,
  selectors: [["c-offcanvas"]],
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 7,
  hostBindings: function OffcanvasComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@showHide.start", function OffcanvasComponent_animation_showHide_start_HostBindingHandler($event) {
        return ctx.animateStart($event);
      })("@showHide.done", function OffcanvasComponent_animation_showHide_done_HostBindingHandler($event) {
        return ctx.animateDone($event);
      });
      ɵɵlistener("keydown", function OffcanvasComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDownHandler($event);
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@showHide", ctx.animateTrigger);
      ɵɵattribute("role", ctx.role)("aria-modal", ctx.ariaModal)("aria-hidden", ctx.ariaHidden)("tabindex", ctx.tabIndex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    backdrop: "backdrop",
    keyboard: [2, "keyboard", "keyboard", booleanAttribute],
    placement: "placement",
    responsive: "responsive",
    id: "id",
    role: "role",
    ariaModal: [2, "ariaModal", "ariaModal", booleanAttribute],
    scroll: [2, "scroll", "scroll", booleanAttribute],
    visible: [2, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cOffcanvas"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([{
    directive: ThemeDirective,
    inputs: ["dark", "dark"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [["cdkTrapFocus", "", "cdkTrapFocusAutoCapture", ""]],
  template: function OffcanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  dependencies: [A11yModule, CdkTrapFocus],
  styles: ["[_nghost-%COMP%]{display:none}"],
  data: {
    animation: [trigger("showHide", [state("visible", style({
      // visibility: 'visible'
    })), state("hidden", style({
      // visibility: 'hidden'
    })), transition("visible <=> *", [animate("300ms")])])]
  }
});
var OffcanvasComponent = _OffcanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas",
      animations: [trigger("showHide", [state("visible", style({
        // visibility: 'visible'
      })), state("hidden", style({
        // visibility: 'hidden'
      })), transition("visible <=> *", [animate("300ms")])])],
      exportAs: "cOffcanvas",
      standalone: true,
      imports: [A11yModule],
      hostDirectives: [{
        directive: ThemeDirective,
        inputs: ["dark"]
      }],
      host: {
        ngSkipHydration: "true"
      },
      template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content />\n</div>\n\n",
      styles: [":host{display:none}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: OffcanvasService
  }, {
    type: BackdropService
  }, {
    type: BreakpointObserver
  }], {
    backdrop: [{
      type: Input
    }],
    keyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placement: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaModal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["attr.aria-modal"]
    }],
    scroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    animateTrigger: [{
      type: HostBinding,
      args: ["@showHide"]
    }],
    animateStart: [{
      type: HostListener,
      args: ["@showHide.start", ["$event"]]
    }],
    animateDone: [{
      type: HostListener,
      args: ["@showHide.done", ["$event"]]
    }],
    onKeyDownHandler: [{
      type: HostListener,
      args: ["document:keydown", ["$event"]]
    }]
  });
})();
var _OffcanvasBodyComponent = class _OffcanvasBodyComponent {
};
_OffcanvasBodyComponent.ɵfac = function OffcanvasBodyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasBodyComponent)();
};
_OffcanvasBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasBodyComponent,
  selectors: [["c-offcanvas-body"]],
  hostAttrs: [1, "offcanvas-body"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function OffcanvasBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var OffcanvasBodyComponent = _OffcanvasBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-body",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "offcanvas-body"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _OffcanvasHeaderComponent = class _OffcanvasHeaderComponent {
};
_OffcanvasHeaderComponent.ɵfac = function OffcanvasHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasHeaderComponent)();
};
_OffcanvasHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _OffcanvasHeaderComponent,
  selectors: [["c-offcanvas-header"]],
  hostAttrs: [1, "offcanvas-header"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function OffcanvasHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var OffcanvasHeaderComponent = _OffcanvasHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-offcanvas-header",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "offcanvas-header"
      }
    }]
  }], null, null);
})();
var _OffcanvasTitleDirective = class _OffcanvasTitleDirective {
};
_OffcanvasTitleDirective.ɵfac = function OffcanvasTitleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasTitleDirective)();
};
_OffcanvasTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _OffcanvasTitleDirective,
  selectors: [["", "cOffcanvasTitle", ""]],
  hostAttrs: [1, "offcanvas-title"],
  standalone: true
});
var OffcanvasTitleDirective = _OffcanvasTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasTitle]",
      standalone: true,
      host: {
        class: "offcanvas-title"
      }
    }]
  }], null, null);
})();
var _OffcanvasToggleDirective = class _OffcanvasToggleDirective {
  constructor(offcanvasService) {
    this.offcanvasService = offcanvasService;
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.offcanvasService.toggle({
      show: "toggle",
      id: this.id
    });
  }
};
_OffcanvasToggleDirective.ɵfac = function OffcanvasToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasToggleDirective)(ɵɵdirectiveInject(OffcanvasService));
};
_OffcanvasToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _OffcanvasToggleDirective,
  selectors: [["", "cOffcanvasToggle", ""]],
  hostBindings: function OffcanvasToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function OffcanvasToggleDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    id: [0, "cOffcanvasToggle", "id"]
  },
  standalone: true
});
var OffcanvasToggleDirective = _OffcanvasToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cOffcanvasToggle]",
      standalone: true
    }]
  }], () => [{
    type: OffcanvasService
  }], {
    id: [{
      type: Input,
      args: ["cOffcanvasToggle"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _OffcanvasModule = class _OffcanvasModule {
};
_OffcanvasModule.ɵfac = function OffcanvasModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OffcanvasModule)();
};
_OffcanvasModule.ɵmod = ɵɵdefineNgModule({
  type: _OffcanvasModule,
  imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
  exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective]
});
_OffcanvasModule.ɵinj = ɵɵdefineInjector({
  providers: [OffcanvasService, BackdropService],
  imports: [OffcanvasComponent]
});
var OffcanvasModule = _OffcanvasModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffcanvasModule, [{
    type: NgModule,
    args: [{
      exports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      imports: [OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, OffcanvasToggleDirective],
      providers: [OffcanvasService, BackdropService]
    }]
  }], null, null);
})();
var _PageLinkDirective = class _PageLinkDirective {
};
_PageLinkDirective.ɵfac = function PageLinkDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageLinkDirective)();
};
_PageLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _PageLinkDirective,
  selectors: [["", "cPageLink", ""]],
  hostAttrs: [1, "page-link"],
  standalone: true
});
var PageLinkDirective = _PageLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageLinkDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageLink]",
      standalone: true,
      host: {
        class: "page-link"
      }
    }]
  }], null, null);
})();
var _PageItemDirective = class _PageItemDirective {
  get ariaCurrent() {
    return this.active ? "page" : null;
  }
  get hostClasses() {
    return {
      "page-item": true,
      disabled: this.disabled,
      active: this.active
    };
  }
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngAfterContentInit() {
    this.setAttributes();
  }
  ngOnChanges(changes) {
    if (changes["disabled"]) {
      this.setAttributes();
    }
  }
  setAttributes() {
    if (!this.pageLinkElementRef) {
      return;
    }
    const pageLinkElement = this.pageLinkElementRef.nativeElement;
    if (this.disabled) {
      this.renderer.setAttribute(pageLinkElement, "aria-disabled", "true");
      this.renderer.setAttribute(pageLinkElement, "tabindex", "-1");
    } else {
      this.renderer.removeAttribute(pageLinkElement, "aria-disabled");
      this.renderer.removeAttribute(pageLinkElement, "tabindex");
    }
  }
};
_PageItemDirective.ɵfac = function PageItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageItemDirective)(ɵɵdirectiveInject(Renderer2));
};
_PageItemDirective.ɵdir = ɵɵdefineDirective({
  type: _PageItemDirective,
  selectors: [["", "cPageItem", ""]],
  contentQueries: function PageItemDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PageLinkDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageLinkElementRef = _t.first);
    }
  },
  hostAttrs: [1, "page-item"],
  hostVars: 3,
  hostBindings: function PageItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-current", ctx.ariaCurrent);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: "active",
    disabled: "disabled"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var PageItemDirective = _PageItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemDirective, [{
    type: Directive,
    args: [{
      selector: "[cPageItem]",
      standalone: true,
      host: {
        class: "page-item"
      }
    }]
  }], () => [{
    type: Renderer2
  }], {
    active: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ariaCurrent: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    pageLinkElementRef: [{
      type: ContentChild,
      args: [PageLinkDirective, {
        read: ElementRef
      }]
    }]
  });
})();
var _PageItemComponent = class _PageItemComponent extends PageItemDirective {
};
_PageItemComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPageItemComponent_BaseFactory;
  return function PageItemComponent_Factory(__ngFactoryType__) {
    return (ɵPageItemComponent_BaseFactory || (ɵPageItemComponent_BaseFactory = ɵɵgetInheritedFactory(_PageItemComponent)))(__ngFactoryType__ || _PageItemComponent);
  };
})();
_PageItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageItemComponent,
  selectors: [["c-page-item"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function PageItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [_c6]
});
var PageItemComponent = _PageItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageItemComponent, [{
    type: Component,
    args: [{
      selector: "c-page-item",
      template: "<ng-content />",
      standalone: true,
      styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"]
    }]
  }], null, null);
})();
var _PaginationComponent = class _PaginationComponent {
  constructor() {
    this.align = "";
    this.role = "navigation";
  }
  get paginationClass() {
    return {
      pagination: true,
      [`pagination-${this.size}`]: !!this.size,
      [`justify-content-${this.align}`]: !!this.align
    };
  }
};
_PaginationComponent.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginationComponent)();
};
_PaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _PaginationComponent,
  selectors: [["c-pagination"]],
  hostVars: 1,
  hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
    }
  },
  inputs: {
    align: "align",
    size: "size",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[3, "ngClass"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ul", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.paginationClass);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var PaginationComponent = _PaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "c-pagination",
      standalone: true,
      imports: [NgClass],
      template: '<ul [ngClass]="paginationClass">\n  <ng-content />\n</ul>\n'
    }]
  }], null, {
    align: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }]
  });
})();
var _PaginationModule = class _PaginationModule {
};
_PaginationModule.ɵfac = function PaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginationModule)();
};
_PaginationModule.ɵmod = ɵɵdefineNgModule({
  type: _PaginationModule,
  imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
  exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
});
_PaginationModule.ɵinj = ɵɵdefineInjector({});
var PaginationModule = _PaginationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      exports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent],
      imports: [PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent]
    }]
  }], null, null);
})();
var _PlaceholderDirective = class _PlaceholderDirective {
  constructor() {
    this.visible = false;
  }
  get ariaHidden() {
    return this.visible ? null : true;
  }
  get hostClasses() {
    return {
      "placeholder": this.visible,
      [`placeholder-${this.size}`]: !!this.size
    };
  }
};
_PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceholderDirective)();
};
_PlaceholderDirective.ɵdir = ɵɵdefineDirective({
  type: _PlaceholderDirective,
  selectors: [["", "cPlaceholder", ""]],
  hostVars: 3,
  hostBindings: function PlaceholderDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.ariaHidden);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    visible: [2, "cPlaceholder", "visible", booleanAttribute],
    size: [0, "cPlaceholderSize", "size"]
  },
  exportAs: ["cPlaceholder"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var PlaceholderDirective = _PlaceholderDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholder]",
      exportAs: "cPlaceholder",
      standalone: true
    }]
  }], null, {
    visible: [{
      type: Input,
      args: [{
        alias: "cPlaceholder",
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input,
      args: ["cPlaceholderSize"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _animate;
var _PlaceholderAnimationDirective = class _PlaceholderAnimationDirective {
  constructor() {
    __privateAdd(this, _animate, false);
  }
  get hostClasses() {
    return {
      [`placeholder-${this.animation}`]: __privateGet(this, _animate) && !!this.animation
    };
  }
  ngAfterContentInit() {
    __privateSet(this, _animate, this.placeholder?.visible);
  }
};
_animate = new WeakMap();
_PlaceholderAnimationDirective.ɵfac = function PlaceholderAnimationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceholderAnimationDirective)();
};
_PlaceholderAnimationDirective.ɵdir = ɵɵdefineDirective({
  type: _PlaceholderAnimationDirective,
  selectors: [["", "cPlaceholderAnimation", ""]],
  contentQueries: function PlaceholderAnimationDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PlaceholderDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.placeholder = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PlaceholderAnimationDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    animation: [0, "cPlaceholderAnimation", "animation"]
  },
  standalone: true
});
var PlaceholderAnimationDirective = _PlaceholderAnimationDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[cPlaceholderAnimation]",
      standalone: true
    }]
  }], null, {
    animation: [{
      type: Input,
      args: ["cPlaceholderAnimation"]
    }],
    placeholder: [{
      type: ContentChild,
      args: [PlaceholderDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _PlaceholderModule = class _PlaceholderModule {
};
_PlaceholderModule.ɵfac = function PlaceholderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceholderModule)();
};
_PlaceholderModule.ɵmod = ɵɵdefineNgModule({
  type: _PlaceholderModule,
  imports: [PlaceholderDirective, PlaceholderAnimationDirective],
  exports: [PlaceholderDirective, PlaceholderAnimationDirective]
});
_PlaceholderModule.ɵinj = ɵɵdefineInjector({});
var PlaceholderModule = _PlaceholderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderModule, [{
    type: NgModule,
    args: [{
      imports: [PlaceholderDirective, PlaceholderAnimationDirective],
      exports: [PlaceholderDirective, PlaceholderAnimationDirective]
    }]
  }], null, null);
})();
var _PopoverComponent = class _PopoverComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.content = "";
    this.visible = false;
    this.role = "tooltip";
  }
  get hostClasses() {
    return {
      popover: true,
      fade: true,
      show: this.visible,
      "bs-popover-auto": true
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateView(this.content);
    });
  }
  ngOnChanges(changes) {
    if (changes["content"]) {
      setTimeout(() => {
        this.updateView(this.content);
      });
    }
  }
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const popoverBody = this.renderer.createElement("div");
      this.renderer.addClass(popoverBody, "popover-body");
      this.renderer.appendChild(popoverBody, this.textNode);
      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, popoverBody);
    }
  }
};
_PopoverComponent.ɵfac = function PopoverComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverComponent)(ɵɵdirectiveInject(Renderer2));
};
_PopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: _PopoverComponent,
  selectors: [["c-popover"]],
  viewQuery: function PopoverComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  hostAttrs: [1, "popover", "fade", "bs-popover-auto"],
  hostVars: 4,
  hostBindings: function PopoverComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: "content",
    visible: "visible",
    id: "id",
    role: "role"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 3,
  consts: [["popoverTemplate", ""], ["data-popper-arrow", "", 3, "ngClass"]],
  template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelement(1, "div", 1);
      ɵɵelementContainer(2, null, 0);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c8, !!ctx.content));
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var PopoverComponent = _PopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "c-popover",
      standalone: true,
      imports: [NgClass],
      host: {
        class: "popover fade bs-popover-auto"
      },
      template: `<ng-container>
  <div [ngClass]="{'popover-arrow': !!content}" data-popper-arrow></div>
  <ng-container #popoverTemplate />
</ng-container>
`
    }]
  }], () => [{
    type: Renderer2
  }], {
    content: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.id"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["popoverTemplate", {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef8;
var _PopoverDirective = class _PopoverDirective {
  constructor(document2, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef, intersectionService) {
    __privateAdd(this, _destroyRef8);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.viewContainerRef = viewContainerRef;
    this.listenersService = listenersService;
    this.changeDetectorRef = changeDetectorRef;
    this.intersectionService = intersectionService;
    this.content = "";
    this.placement = "top";
    this.trigger = "hover";
    this._visible = false;
    this._popperOptions = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 9]
        }
      }]
    };
    __privateSet(this, _destroyRef8, inject(DestroyRef));
  }
  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  set popperOptions(value) {
    this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
      placement: this.placement
    }), value);
  }
  get popperOptions() {
    return __spreadValues({
      placement: this.placement
    }, this._popperOptions);
  }
  /**
   * Toggle the visibility of popover component.
   */
  set visible(value) {
    this._visible = value;
  }
  get visible() {
    return this._visible;
  }
  get ariaDescribedBy() {
    return this.popoverId ? this.popoverId : null;
  }
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnChanges(changes) {
    if (changes["visible"]) {
      changes["visible"].currentValue ? this.addPopoverElement() : this.removePopoverElement();
    }
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyPopoverElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.trigger,
      callbackToggle: () => {
        this.visible = !this.visible;
        this.visible ? this.addPopoverElement() : this.removePopoverElement();
      },
      callbackOff: () => {
        this.visible = false;
        this.removePopoverElement();
      },
      callbackOn: () => {
        this.visible = true;
        this.addPopoverElement();
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.intersectionService.createIntersectionObserver(this.hostElement);
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.hostElement), debounceTime(100), finalize(() => {
      this.intersectionService.unobserve(this.hostElement);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef8))).subscribe((next) => {
      this.visible = next.isIntersecting ? this.visible : false;
      !this.visible && this.removePopoverElement();
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.document.getElementById(uid));
    return uid;
  }
  createPopoverElement() {
    if (!this.popoverRef) {
      this.popoverRef = this.viewContainerRef.createComponent(PopoverComponent);
    }
  }
  destroyPopoverElement() {
    this.popover?.remove();
    this.popoverRef?.destroy();
    this.popoverRef = void 0;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }
  addPopoverElement() {
    if (!this.popoverRef) {
      this.createPopoverElement();
    }
    this.popoverRef.instance.content = this.content;
    this.popover = this.popoverRef.location.nativeElement;
    this.renderer.addClass(this.popover, "d-none");
    this.renderer.addClass(this.popover, "fade");
    this.popperInstance?.destroy();
    setTimeout(() => {
      this.popperInstance = createPopper(this.hostElement.nativeElement, this.popover, __spreadValues({}, this.popperOptions));
      this.viewContainerRef.insert(this.popoverRef.hostView);
      this.renderer.appendChild(this.document.body, this.popover);
      if (!this.visible) {
        this.removePopoverElement();
        return;
      }
      setTimeout(() => {
        this.popoverId = this.getUID("popover");
        this.popoverRef.instance.id = this.popoverId;
        if (!this.visible) {
          this.removePopoverElement();
          return;
        }
        this.renderer.removeClass(this.popover, "d-none");
        this.popoverRef.instance.visible = this.visible;
        this.popperInstance.forceUpdate();
        this.changeDetectorRef.markForCheck();
      }, 100);
    });
  }
  removePopoverElement() {
    this.popoverId = "";
    if (!this.popoverRef) {
      return;
    }
    this.popoverRef.instance.visible = false;
    this.popoverRef.instance.id = void 0;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
};
_destroyRef8 = new WeakMap();
_PopoverDirective.ɵfac = function PopoverDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ListenersService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntersectionService));
};
_PopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _PopoverDirective,
  selectors: [["", "cPopover", ""]],
  hostVars: 1,
  hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-describedby", ctx.ariaDescribedBy);
    }
  },
  inputs: {
    content: [0, "cPopover", "content"],
    popperOptions: [0, "cPopoverOptions", "popperOptions"],
    placement: [0, "cPopoverPlacement", "placement"],
    trigger: [0, "cPopoverTrigger", "trigger"],
    visible: [0, "cPopoverVisible", "visible"]
  },
  exportAs: ["cPopover"],
  standalone: true,
  features: [ɵɵProvidersFeature([ListenersService]), ɵɵNgOnChangesFeature]
});
var PopoverDirective = _PopoverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[cPopover]",
      exportAs: "cPopover",
      providers: [ListenersService],
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ListenersService
  }, {
    type: ChangeDetectorRef
  }, {
    type: IntersectionService
  }], {
    content: [{
      type: Input,
      args: ["cPopover"]
    }],
    popperOptions: [{
      type: Input,
      args: ["cPopoverOptions"]
    }],
    placement: [{
      type: Input,
      args: ["cPopoverPlacement"]
    }],
    trigger: [{
      type: Input,
      args: ["cPopoverTrigger"]
    }],
    visible: [{
      type: Input,
      args: ["cPopoverVisible"]
    }],
    ariaDescribedBy: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }]
  });
})();
var _PopoverModule = class _PopoverModule {
};
_PopoverModule.ɵfac = function PopoverModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverModule)();
};
_PopoverModule.ɵmod = ɵɵdefineNgModule({
  type: _PopoverModule,
  imports: [PopoverDirective, PopoverComponent],
  exports: [PopoverDirective, PopoverComponent]
});
_PopoverModule.ɵinj = ɵɵdefineInjector({});
var PopoverModule = _PopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      exports: [PopoverDirective, PopoverComponent],
      imports: [PopoverDirective, PopoverComponent]
    }]
  }], null, null);
})();
var _renderer3, _hostElement2, _max, _min, _value, _width, _valuesEffect;
var _ProgressBarDirective = class _ProgressBarDirective {
  constructor() {
    __privateAdd(this, _renderer3);
    __privateAdd(this, _hostElement2);
    __privateAdd(this, _max);
    __privateAdd(this, _min);
    __privateAdd(this, _value);
    __privateAdd(this, _width);
    __privateAdd(this, _valuesEffect);
    __privateSet(this, _renderer3, inject(Renderer2));
    __privateSet(this, _hostElement2, inject(ElementRef));
    __privateSet(this, _max, signal(100));
    __privateSet(this, _min, 0);
    __privateSet(this, _value, signal(void 0));
    __privateSet(this, _width, signal(void 0));
    this.percent = computed(() => {
      return +(((__privateGet(this, _value).call(this) ?? __privateGet(this, _width).call(this) ?? 0) - __privateGet(this, _min)) / (__privateGet(this, _max).call(this) - __privateGet(this, _min)) * 100).toFixed(this.precision);
    });
    __privateSet(this, _valuesEffect, effect(() => {
      const host = __privateGet(this, _hostElement2).nativeElement;
      if (__privateGet(this, _value).call(this) === void 0 || __privateGet(this, _width).call(this)) {
        for (const name of ["aria-valuenow", "aria-valuemax", "aria-valuemin", "role"]) {
          __privateGet(this, _renderer3).removeAttribute(host, name);
        }
      } else {
        __privateGet(this, _renderer3).setAttribute(host, "aria-valuenow", String(__privateGet(this, _value).call(this)));
        __privateGet(this, _renderer3).setAttribute(host, "aria-valuemin", String(__privateGet(this, _min)));
        __privateGet(this, _renderer3).setAttribute(host, "aria-valuemax", String(__privateGet(this, _max).call(this)));
        __privateGet(this, _renderer3).setAttribute(host, "role", this.role);
      }
      const tagName = host.tagName;
      if (this.percent() && (this.stacked && tagName === "C-PROGRESS" || !this.stacked && tagName !== "C-PROGRESS")) {
        __privateGet(this, _renderer3).setStyle(host, "width", `${this.percent()}%`);
      } else {
        __privateGet(this, _renderer3).removeStyle(host, "width");
      }
    }));
    this.precision = 0;
    this.stacked = false;
    this.role = "progressbar";
  }
  /**
   * The percent value the ProgressBar.
   * @type number
   * @default 0
   */
  set value(value) {
    __privateGet(this, _value).set(value);
  }
  get value() {
    return __privateGet(this, _value).call(this);
  }
  set width(value) {
    __privateGet(this, _width).set(value);
  }
  /**
   * The max value of the ProgressBar.
   * @type number
   * @default 100
   */
  set max(max) {
    __privateGet(this, _max).set(isNaN(max) || max <= 0 ? 100 : max);
  }
};
_renderer3 = new WeakMap();
_hostElement2 = new WeakMap();
_max = new WeakMap();
_min = new WeakMap();
_value = new WeakMap();
_width = new WeakMap();
_valuesEffect = new WeakMap();
_ProgressBarDirective.ɵfac = function ProgressBarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgressBarDirective)();
};
_ProgressBarDirective.ɵdir = ɵɵdefineDirective({
  type: _ProgressBarDirective,
  selectors: [["", "cProgressBar", ""]],
  inputs: {
    animated: [2, "animated", "animated", booleanAttribute],
    color: "color",
    precision: [2, "precision", "precision", numberAttribute],
    value: [2, "value", "value", numberAttribute],
    width: [2, "width", "width", numberAttribute],
    variant: "variant",
    max: [2, "max", "max", numberAttribute],
    stacked: [2, "stacked", "stacked", booleanAttribute],
    role: "role"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var ProgressBarDirective = _ProgressBarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarDirective, [{
    type: Directive,
    args: [{
      selector: "[cProgressBar]",
      standalone: true
    }]
  }], null, {
    animated: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    precision: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    width: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stacked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }]
  });
})();
var _progressBarDirective;
var _ProgressBarComponent = class _ProgressBarComponent {
  constructor() {
    __privateAdd(this, _progressBarDirective, inject(ProgressBarDirective, {
      optional: true
    }));
  }
  get hostClasses() {
    const animated = __privateGet(this, _progressBarDirective)?.animated;
    const color = __privateGet(this, _progressBarDirective)?.color;
    const variant = __privateGet(this, _progressBarDirective)?.variant;
    return {
      "progress-bar": true,
      "progress-bar-animated": !!animated,
      [`progress-bar-${variant}`]: !!variant,
      [`bg-${color}`]: !!color
    };
  }
};
_progressBarDirective = new WeakMap();
_ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgressBarComponent)();
};
_ProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressBarComponent,
  selectors: [["c-progress-bar"]],
  hostAttrs: [1, "progress-bar"],
  hostVars: 2,
  hostBindings: function ProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: ProgressBarDirective,
    inputs: ["animated", "animated", "color", "color", "max", "max", "role", "role", "stacked", "stacked", "value", "value", "variant", "variant", "width", "width"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var ProgressBarComponent = _ProgressBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      selector: "c-progress-bar",
      template: "<ng-content />",
      standalone: true,
      hostDirectives: [{
        directive: ProgressBarDirective,
        inputs: ["animated", "color", "max", "role", "stacked", "value", "variant", "width"]
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "progress-bar"
      }
    }]
  }], null, {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ProgressStackedComponent = class _ProgressStackedComponent {
  constructor() {
    this.stacked = true;
  }
};
_ProgressStackedComponent.ɵfac = function ProgressStackedComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgressStackedComponent)();
};
_ProgressStackedComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressStackedComponent,
  selectors: [["c-progress-stacked"]],
  hostVars: 2,
  hostBindings: function ProgressStackedComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("progress-stacked", ctx.stacked);
    }
  },
  inputs: {
    stacked: "stacked"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ProgressStackedComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex}"],
  changeDetection: 0
});
var ProgressStackedComponent = _ProgressStackedComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressStackedComponent, [{
    type: Component,
    args: [{
      selector: "c-progress-stacked",
      standalone: true,
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{display:flex}\n"]
    }]
  }], null, {
    stacked: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.progress-stacked"]
    }]
  });
})();
var _stacked, _elementRef3;
var _ProgressComponent = class _ProgressComponent {
  constructor() {
    __privateAdd(this, _stacked);
    __privateAdd(this, _elementRef3);
    this.pbd = inject(ProgressBarDirective, {
      optional: true
    });
    __privateSet(this, _stacked, inject(ProgressStackedComponent, {
      optional: true
    })?.stacked);
    __privateSet(this, _elementRef3, inject(ElementRef));
    this.height = 0;
    this.thin = false;
    this.white = false;
    if (this.pbd) {
      this.pbd.stacked = __privateGet(this, _stacked);
    }
  }
  get hostClasses() {
    return {
      progress: true,
      "progress-thin": this.thin,
      "progress-white": this.white
    };
  }
  get hostStyle() {
    return !!this.height ? `${this.height}px` : __privateGet(this, _elementRef3)?.nativeElement?.style?.height ?? void 0;
  }
};
_stacked = new WeakMap();
_elementRef3 = new WeakMap();
_ProgressComponent.ɵfac = function ProgressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgressComponent)();
};
_ProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressComponent,
  selectors: [["c-progress"]],
  contentQueries: function ProgressComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ProgressBarComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentProgressBars = _t);
    }
  },
  hostAttrs: [1, "progress"],
  hostVars: 4,
  hostBindings: function ProgressComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
      ɵɵstyleProp("height", ctx.hostStyle);
    }
  },
  inputs: {
    height: [2, "height", "height", numberAttribute],
    thin: [2, "thin", "thin", booleanAttribute],
    white: [2, "white", "white", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([{
    directive: ProgressBarDirective,
    inputs: ["animated", "animated", "color", "color", "max", "max", "role", "role", "value", "value", "variant", "variant"]
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 1,
  consts: [["defaultContent", ""], ["stacked", "", 3, "animated", "variant", "color"], [3, "width", "animated", "variant", "color"], [4, "ngTemplateOutlet"]],
  template: function ProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ProgressComponent_Conditional_0_Template, 1, 1, "ng-container")(1, ProgressComponent_Conditional_1_Template, 2, 4, "c-progress-bar", 1)(2, ProgressComponent_Conditional_2_Template, 2, 5, "c-progress-bar", 2)(3, ProgressComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.contentProgressBars.length ? 0 : (ctx.pbd == null ? null : ctx.pbd.stacked) ? 1 : 2);
    }
  },
  dependencies: [ProgressBarComponent, NgTemplateOutlet],
  styles: [".progress-stacked.progress[_nghost-%COMP%], .progress-stacked   .progress[_nghost-%COMP%]{transition:var(--cui-progress-bar-transition)}"],
  changeDetection: 0
});
var ProgressComponent = _ProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressComponent, [{
    type: Component,
    args: [{
      selector: "c-progress",
      imports: [ProgressBarComponent, NgTemplateOutlet],
      standalone: true,
      hostDirectives: [{
        directive: ProgressBarDirective,
        inputs: ["animated", "color", "max", "role", "value", "variant"]
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "progress"
      },
      template: '@if (contentProgressBars.length) {\n  <ng-container *ngTemplateOutlet="defaultContent" />\n} @else if (pbd?.stacked) {\n  <c-progress-bar [animated]="pbd?.animated" [variant]="pbd?.variant" [color]="pbd?.color" stacked>\n    <ng-container *ngTemplateOutlet="defaultContent" />\n  </c-progress-bar>\n} @else {\n  <c-progress-bar [width]="pbd?.percent()" [animated]="pbd?.animated" [variant]="pbd?.variant" [color]="pbd?.color">\n    <ng-container *ngTemplateOutlet="defaultContent" />\n  </c-progress-bar>\n}\n\n<ng-template #defaultContent>\n  <ng-content />\n</ng-template>\n\n',
      styles: [":host-context(.progress-stacked).progress{transition:var(--cui-progress-bar-transition)}\n"]
    }]
  }], () => [], {
    contentProgressBars: [{
      type: ContentChildren,
      args: [ProgressBarComponent]
    }],
    height: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    white: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style.height"]
    }]
  });
})();
var _ProgressModule = class _ProgressModule {
};
_ProgressModule.ɵfac = function ProgressModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgressModule)();
};
_ProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _ProgressModule,
  imports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent],
  exports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent]
});
_ProgressModule.ɵinj = ɵɵdefineInjector({});
var ProgressModule = _ProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressModule, [{
    type: NgModule,
    args: [{
      exports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent],
      imports: [ProgressComponent, ProgressBarComponent, ProgressBarDirective, ProgressStackedComponent]
    }]
  }], null, null);
})();
var _SidebarService = class _SidebarService {
  constructor() {
    this.sidebarState = new BehaviorSubject({});
    this.sidebarState$ = this.sidebarState.asObservable();
  }
  toggle(action) {
    this.sidebarState.next(action);
  }
};
_SidebarService.ɵfac = function SidebarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarService)();
};
_SidebarService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarService,
  factory: _SidebarService.ɵfac,
  providedIn: "root"
});
var SidebarService = _SidebarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _SidebarBackdropService = class _SidebarBackdropService {
  constructor(document2, sidebarService) {
    this.document = document2;
    this.sidebarService = sidebarService;
    this.clickListener = () => {
    };
  }
  setBackdrop(sidebar) {
    const backdrop = this.document.getElementsByClassName("sidebar-backdrop");
    if (backdrop.length === 0) {
      this.backdrop = this.renderer.createElement("div");
      this.renderer.addClass(this.backdrop, "sidebar-backdrop");
      this.renderer.appendChild(this.document.body, this.backdrop);
      this.clickListener = this.renderer.listen(this.backdrop, "click", (e) => {
        this.sidebarService.toggle({
          toggle: "visible",
          sidebar
        });
      });
    }
    if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
      this.renderer.addClass(this.backdrop, "fade");
      this.renderer.addClass(this.backdrop, "show");
    } else {
      this.renderer.removeClass(this.backdrop, "show");
      this.renderer.removeClass(this.backdrop, "fade");
    }
  }
  clearBackdrop() {
    if (this.backdrop) {
      this.clickListener();
      this.renderer.removeChild(this.document.body, this.backdrop);
      this.backdrop = void 0;
    }
  }
};
_SidebarBackdropService.ɵfac = function SidebarBackdropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarBackdropService)(ɵɵinject(DOCUMENT), ɵɵinject(SidebarService));
};
_SidebarBackdropService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarBackdropService,
  factory: _SidebarBackdropService.ɵfac,
  providedIn: "root"
});
var SidebarBackdropService = _SidebarBackdropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBackdropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: SidebarService
  }], null);
})();
var _visible4, _onMobile, _layoutChangeSubscription2, _stateToggleSubscription, _stateInitial;
var _SidebarComponent = class _SidebarComponent {
  constructor(document2, renderer, breakpointObserver, sidebarService, backdropService) {
    __privateAdd(this, _visible4);
    __privateAdd(this, _onMobile);
    __privateAdd(this, _layoutChangeSubscription2);
    __privateAdd(this, _stateToggleSubscription);
    __privateAdd(this, _stateInitial);
    this.document = document2;
    this.renderer = renderer;
    this.breakpointObserver = breakpointObserver;
    this.sidebarService = sidebarService;
    this.backdropService = backdropService;
    __privateSet(this, _visible4, false);
    __privateSet(this, _onMobile, false);
    this.state = {
      sidebar: this
    };
    __privateSet(this, _stateInitial, {
      narrow: false,
      visible: false,
      unfoldable: false
    });
    this.narrow = false;
    this.overlaid = false;
    this.position = "fixed";
    this.unfoldable = false;
    this.visibleChange = new EventEmitter();
    this.backdropService.renderer = renderer;
  }
  /**
   * Toggle the visibility of sidebar component. [docs]
   * @type boolean
   * @default false
   */
  set visible(value) {
    const visible = value;
    if (__privateGet(this, _visible4) !== visible) {
      __privateSet(this, _visible4, visible);
      this.visibleChange.emit(__privateGet(this, _visible4));
    }
  }
  get visible() {
    return __privateGet(this, _visible4);
  }
  set sidebarState(value) {
    const newState = value;
    if ("toggle" in newState) {
      if (newState.toggle === "visible") {
        newState.visible = !this.state.visible;
        this.visible = newState.visible;
      } else if (newState.toggle === "unfoldable") {
        newState.unfoldable = !this.state.unfoldable;
        this.unfoldable = newState.unfoldable;
      }
    } else {
      this.visible = (newState.visible ?? this.visible) && !this.overlaid;
    }
    this.state = __spreadValues(__spreadValues({}, this.state), newState);
    this.state.mobile && this.state.visible ? this.backdropService.setBackdrop(this) : this.backdropService.clearBackdrop();
  }
  get sidebarState() {
    return this.state;
  }
  get getMobileBreakpoint() {
    const element = this.document.documentElement;
    const mobileBreakpoint = this.document.defaultView?.getComputedStyle(element)?.getPropertyValue("--cui-mobile-breakpoint") ?? "md";
    const breakpointValue = this.document.defaultView?.getComputedStyle(element)?.getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) ?? "768px";
    return `${parseFloat(breakpointValue.trim()) - 0.02}px`;
  }
  get getClasses() {
    const {
      mobile,
      visible
    } = this.sidebarState;
    return {
      sidebar: true,
      "sidebar-fixed": this.position === "fixed" && !mobile,
      "sidebar-narrow": this.narrow && !this.unfoldable,
      "sidebar-narrow-unfoldable": this.unfoldable,
      "sidebar-overlaid": this.overlaid,
      [`sidebar-${this.placement}`]: !!this.placement,
      [`sidebar-${this.colorScheme}`]: !!this.colorScheme,
      [`sidebar-${this.size}`]: !!this.size,
      show: visible,
      // show: visible && this.#onMobile, //todo: check
      hide: !visible
    };
  }
  ngOnInit() {
    this.setInitialState();
    this.layoutChangeSubscribe();
    this.stateToggleSubscribe();
  }
  ngOnDestroy() {
    this.stateToggleSubscribe(false);
    this.layoutChangeSubscribe(false);
  }
  ngOnChanges(changes) {
    const oldStateMap = new Map(Object.entries(this.state));
    const newStateMap = /* @__PURE__ */ new Map();
    newStateMap.set("sidebar", this);
    const propList = ["visible", "unfoldable", "narrow"];
    for (const propName in changes) {
      if (propList.includes(propName)) {
        if (changes[propName] && !changes[propName].firstChange) {
          const value = booleanAttribute(changes[propName].currentValue);
          if (oldStateMap.get(propName) !== value) {
            newStateMap.set(propName, value);
          }
        }
      }
    }
    if (newStateMap.size > 1) {
      const state2 = Object.fromEntries(newStateMap.entries());
      this.sidebarService.toggle(state2);
    }
  }
  setInitialState() {
    __privateSet(this, _stateInitial, {
      narrow: this.narrow,
      visible: this.visible,
      unfoldable: this.unfoldable
    });
    this.sidebarService.toggle(__spreadProps(__spreadValues({}, __privateGet(this, _stateInitial)), {
      sidebar: this
    }));
  }
  stateToggleSubscribe(subscribe = true) {
    if (subscribe) {
      __privateSet(this, _stateToggleSubscription, this.sidebarService.sidebarState$.subscribe((state2) => {
        if (this === state2.sidebar || this.id === state2.id) {
          this.sidebarState = state2;
        }
      }));
    } else {
      __privateGet(this, _stateToggleSubscription)?.unsubscribe();
    }
  }
  layoutChangeSubscribe(subscribe = true) {
    const onMobile = `(max-width: ${this.getMobileBreakpoint})`;
    if (subscribe) {
      const layoutChanges = this.breakpointObserver.observe([onMobile]);
      __privateSet(this, _layoutChangeSubscription2, layoutChanges.subscribe((result) => {
        const isOnMobile = result.breakpoints[onMobile];
        const isUnfoldable = isOnMobile ? false : this.unfoldable;
        if (__privateGet(this, _onMobile) !== isOnMobile) {
          __privateSet(this, _onMobile, isOnMobile);
          this.sidebarService.toggle({
            mobile: isOnMobile,
            unfoldable: isUnfoldable,
            visible: isOnMobile ? !isOnMobile : __privateGet(this, _stateInitial).visible,
            sidebar: this
          });
        }
      }));
    } else {
      __privateGet(this, _layoutChangeSubscription2)?.unsubscribe();
    }
  }
};
_visible4 = new WeakMap();
_onMobile = new WeakMap();
_layoutChangeSubscription2 = new WeakMap();
_stateToggleSubscription = new WeakMap();
_stateInitial = new WeakMap();
_SidebarComponent.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(SidebarService), ɵɵdirectiveInject(SidebarBackdropService));
};
_SidebarComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarComponent,
  selectors: [["c-sidebar"]],
  hostAttrs: [1, "sidebar"],
  hostVars: 2,
  hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.getClasses);
    }
  },
  inputs: {
    colorScheme: "colorScheme",
    id: "id",
    narrow: [2, "narrow", "narrow", booleanAttribute],
    overlaid: [2, "overlaid", "overlaid", booleanAttribute],
    placement: "placement",
    position: "position",
    size: "size",
    unfoldable: [2, "unfoldable", "unfoldable", booleanAttribute],
    visible: [2, "visible", "visible", booleanAttribute]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cSidebar"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar",
      exportAs: "cSidebar",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "sidebar"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: BreakpointObserver
  }, {
    type: SidebarService
  }, {
    type: SidebarBackdropService
  }], {
    colorScheme: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    narrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    overlaid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placement: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    unfoldable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    getClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SidebarBrandComponent = class _SidebarBrandComponent {
  constructor() {
    this.sidebarBrandClass = true;
    this.brandImg = false;
  }
  ngOnInit() {
    this.brandImg = Boolean(this.brandFull || this.brandNarrow);
  }
};
_SidebarBrandComponent.ɵfac = function SidebarBrandComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarBrandComponent)();
};
_SidebarBrandComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarBrandComponent,
  selectors: [["c-sidebar-brand"]],
  hostVars: 2,
  hostBindings: function SidebarBrandComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("sidebar-brand", ctx.sidebarBrandClass);
    }
  },
  inputs: {
    brandFull: "brandFull",
    brandNarrow: "brandNarrow",
    routerLink: "routerLink"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[3, "routerLink"], [3, "cHtmlAttr", "ngClass"]],
  template: function SidebarBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SidebarBrandComponent_Conditional_0_Template, 3, 3, "a", 0)(1, SidebarBrandComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.brandImg ? 0 : 1);
    }
  },
  dependencies: [RouterLink, HtmlAttributesDirective, NgClass],
  encapsulation: 2
});
var SidebarBrandComponent = _SidebarBrandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarBrandComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-brand",
      standalone: true,
      imports: [RouterLink, HtmlAttributesDirective, NgClass],
      template: `@if (brandImg) {
  <a [routerLink]="routerLink">
    @if (brandFull) {
      <img [cHtmlAttr]="brandFull" [ngClass]="'sidebar-brand-full'">
    }
    @if (brandNarrow) {
      <img [cHtmlAttr]="brandNarrow" [ngClass]="'sidebar-brand-narrow'">
    }
  </a>
} @else {
  <ng-content />
}
`
    }]
  }], null, {
    brandFull: [{
      type: Input
    }],
    brandNarrow: [{
      type: Input
    }],
    routerLink: [{
      type: Input
    }],
    sidebarBrandClass: [{
      type: HostBinding,
      args: ["class.sidebar-brand"]
    }]
  });
})();
var _SidebarToggleDirective = class _SidebarToggleDirective {
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.toggle = "visible";
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.sidebarService.toggle({
      toggle: this.toggle,
      id: this.id
    });
  }
};
_SidebarToggleDirective.ɵfac = function SidebarToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarToggleDirective)(ɵɵdirectiveInject(SidebarService));
};
_SidebarToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _SidebarToggleDirective,
  selectors: [["", "cSidebarToggle", ""]],
  hostBindings: function SidebarToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SidebarToggleDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    id: [0, "cSidebarToggle", "id"],
    toggle: "toggle"
  },
  exportAs: ["cSidebarToggle"],
  standalone: true
});
var SidebarToggleDirective = _SidebarToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[cSidebarToggle]",
      exportAs: "cSidebarToggle",
      standalone: true
    }]
  }], () => [{
    type: SidebarService
  }], {
    id: [{
      type: Input,
      args: ["cSidebarToggle"]
    }],
    toggle: [{
      type: Input
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _SidebarTogglerDirective = class _SidebarTogglerDirective {
  constructor() {
    this.role = "button";
    this.sidebarTogglerClass = true;
  }
  get getStyles() {
    return {
      appearance: "button",
      "align-items": "flex-start",
      cursor: "pointer"
    };
  }
};
_SidebarTogglerDirective.ɵfac = function SidebarTogglerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarTogglerDirective)();
};
_SidebarTogglerDirective.ɵdir = ɵɵdefineDirective({
  type: _SidebarTogglerDirective,
  selectors: [["", "cSidebarToggler", ""]],
  hostVars: 5,
  hostBindings: function SidebarTogglerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵstyleMap(ctx.getStyles);
      ɵɵclassProp("sidebar-toggler", ctx.sidebarTogglerClass);
    }
  },
  inputs: {
    role: "role"
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: SidebarToggleDirective,
    inputs: ["cSidebarToggle", "cSidebarToggler", "toggle", "toggle"]
  }])]
});
var SidebarTogglerDirective = _SidebarTogglerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarTogglerDirective, [{
    type: Directive,
    args: [{
      selector: "[cSidebarToggler]",
      standalone: true,
      hostDirectives: [{
        directive: SidebarToggleDirective,
        inputs: ["cSidebarToggle: cSidebarToggler", "toggle"]
      }]
    }]
  }], null, {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    sidebarTogglerClass: [{
      type: HostBinding,
      args: ["class.sidebar-toggler"]
    }],
    getStyles: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var _SidebarHeaderComponent = class _SidebarHeaderComponent {
};
_SidebarHeaderComponent.ɵfac = function SidebarHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarHeaderComponent)();
};
_SidebarHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarHeaderComponent,
  selectors: [["c-sidebar-header"]],
  hostAttrs: [1, "sidebar-header"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SidebarHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarHeaderComponent = _SidebarHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-header",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "sidebar-header"
      }
    }]
  }], null, null);
})();
var _SidebarFooterComponent = class _SidebarFooterComponent {
};
_SidebarFooterComponent.ɵfac = function SidebarFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarFooterComponent)();
};
_SidebarFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarFooterComponent,
  selectors: [["c-sidebar-footer"]],
  hostAttrs: [1, "sidebar-footer"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SidebarFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var SidebarFooterComponent = _SidebarFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarFooterComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-footer",
      template: "<ng-content />",
      standalone: true,
      host: {
        class: "sidebar-footer"
      }
    }]
  }], null, null);
})();
var _SidebarNavService = class _SidebarNavService {
};
_SidebarNavService.ɵfac = function SidebarNavService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavService)();
};
_SidebarNavService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavService,
  factory: _SidebarNavService.ɵfac
});
var SidebarNavService = _SidebarNavService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavService, [{
    type: Injectable
  }], null, null);
})();
var _SidebarNavHelper = class _SidebarNavHelper {
  constructor() {
    this.hasBadge = (item) => Boolean(item.badge);
    this.hasIcon = (item) => Boolean(item.icon) || item.icon === "";
    this.hasIconComponent = (item) => Boolean(item.iconComponent);
  }
  itemType(item) {
    if (item.divider) {
      return "divider";
    } else if (item.title) {
      return "title";
    } else if (item.children && item.children.length > 0) {
      return "group";
    } else if (item.label) {
      return "label";
    } else if (!Object.keys(item).length) {
      return "empty";
    } else {
      return "link";
    }
  }
  isActive(router, item) {
    return router.isActive(item.url, false);
  }
  getIconClass(item) {
    const classes = {
      "nav-icon": true
    };
    const icon = item.icon;
    classes[icon] = this.hasIcon(item);
    return classes;
  }
};
_SidebarNavHelper.ɵfac = function SidebarNavHelper_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavHelper)();
};
_SidebarNavHelper.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavHelper,
  factory: _SidebarNavHelper.ɵfac
});
var SidebarNavHelper = _SidebarNavHelper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavHelper, [{
    type: Injectable
  }], null, null);
})();
var _SidebarNavGroupService = class _SidebarNavGroupService {
  constructor() {
    this.sidebarNavGroupState = new BehaviorSubject({});
    this.sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();
  }
  toggle(action) {
    this.sidebarNavGroupState.next(action);
  }
};
_SidebarNavGroupService.ɵfac = function SidebarNavGroupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavGroupService)();
};
_SidebarNavGroupService.ɵprov = ɵɵdefineInjectable({
  token: _SidebarNavGroupService,
  factory: _SidebarNavGroupService.ɵfac
});
var SidebarNavGroupService = _SidebarNavGroupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupService, [{
    type: Injectable
  }], null, null);
})();
var _SidebarNavIconPipe = class _SidebarNavIconPipe {
  transform(item, args) {
    const icon = item.icon;
    return {
      "nav-icon": true,
      [`${icon}`]: !!icon
    };
  }
};
_SidebarNavIconPipe.ɵfac = function SidebarNavIconPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavIconPipe)();
};
_SidebarNavIconPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavIcon",
  type: _SidebarNavIconPipe,
  pure: true,
  standalone: true
});
var SidebarNavIconPipe = _SidebarNavIconPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavIconPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavIcon",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavBadgePipe = class _SidebarNavBadgePipe {
  transform(item, args) {
    const badge = item.badge;
    return {
      badge: true,
      "ms-auto": true,
      "badge-sm": !badge.size,
      [`badge-${badge.size}`]: !!badge.size,
      [`bg-${badge.color}`]: !!badge.color,
      [`${badge.class}`]: !!badge.class
    };
  }
};
_SidebarNavBadgePipe.ɵfac = function SidebarNavBadgePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavBadgePipe)();
};
_SidebarNavBadgePipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavBadge",
  type: _SidebarNavBadgePipe,
  pure: true,
  standalone: true
});
var SidebarNavBadgePipe = _SidebarNavBadgePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavBadgePipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavBadge",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavLinkPipe = class _SidebarNavLinkPipe {
  transform(item) {
    const disabled = item?.attributes?.disabled;
    return {
      "nav-link": true,
      disabled,
      "btn-link": disabled,
      [`nav-link-${item.variant}`]: !!item.variant
    };
  }
};
_SidebarNavLinkPipe.ɵfac = function SidebarNavLinkPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavLinkPipe)();
};
_SidebarNavLinkPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavLink",
  type: _SidebarNavLinkPipe,
  pure: true,
  standalone: true
});
var SidebarNavLinkPipe = _SidebarNavLinkPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavLink",
      standalone: true
    }]
  }], null, null);
})();
var _SidebarNavLinkContentComponent = class _SidebarNavLinkContentComponent {
  constructor(helper) {
    this.helper = helper;
  }
};
_SidebarNavLinkContentComponent.ɵfac = function SidebarNavLinkContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavLinkContentComponent)(ɵɵdirectiveInject(SidebarNavHelper));
};
_SidebarNavLinkContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLinkContentComponent,
  selectors: [["c-sidebar-nav-link-content"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper]), ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  template: function SidebarNavLinkContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SidebarNavLinkContentComponent_Conditional_0_Template, 2, 1, "ng-container");
    }
    if (rf & 2) {
      ɵɵconditional(true ? 0 : -1);
    }
  },
  encapsulation: 2
});
var SidebarNavLinkContentComponent = _SidebarNavLinkContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkContentComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link-content",
      template: `
    @if (true) {
      <ng-container>{{ item?.name ?? '' }}</ng-container>
    }
  `,
      providers: [SidebarNavHelper],
      standalone: true
    }]
  }], () => [{
    type: SidebarNavHelper
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavLinkComponent = class _SidebarNavLinkComponent {
  set item(item) {
    this._item = JSON.parse(JSON.stringify(item));
  }
  get item() {
    return this._item;
  }
  constructor(router) {
    this.router = router;
    this._item = {};
    this.linkClick = new EventEmitter();
    this.navigationEndObservable = router.events.pipe(filter((event) => {
      return event instanceof NavigationEnd;
    }));
  }
  ngOnInit() {
    this.url = typeof this.item.url === "string" ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? "" : this.item.href || this.url;
    this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      const itemUrlArray = this.href.split(/[?#(;]/)[0].split("/");
      const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split("/");
      this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
    });
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  getLinkType() {
    return this.isDisabled() ? "disabled" : this.isExternalLink() ? "external" : "link";
  }
  isDisabled() {
    return this.item?.attributes?.["disabled"];
  }
  isExternalLink() {
    const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
    return !!this.item.href || linkPath.substring(0, 4) === "http";
  }
  linkClicked() {
    this.linkClick.emit();
  }
};
_SidebarNavLinkComponent.ɵfac = function SidebarNavLinkComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavLinkComponent)(ɵɵdirectiveInject(Router));
};
_SidebarNavLinkComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLinkComponent,
  selectors: [["c-sidebar-nav-link"]],
  inputs: {
    item: "item"
  },
  outputs: {
    linkClick: "linkClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper]), ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["iconTemplate", ""], [3, "cHtmlAttr", "ngClass"], [3, "cHtmlAttr", "href", "ngClass"], ["routerLinkActive", "active", 3, "cHtmlAttr", "fragment", "ngClass", "preserveFragment", "queryParamsHandling", "queryParams", "replaceUrl", "routerLinkActiveOptions", "routerLink", "skipLocationChange", "state", "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "item"], [3, "ngClass"], [3, "click", "cHtmlAttr", "href", "ngClass"], ["routerLinkActive", "active", 3, "click", "cHtmlAttr", "fragment", "ngClass", "preserveFragment", "queryParamsHandling", "queryParams", "replaceUrl", "routerLinkActiveOptions", "routerLink", "skipLocationChange", "state", "target"], [1, "nav-icon"], [3, "cIcon", "customClasses", "name"]],
  template: function SidebarNavLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SidebarNavLinkComponent_Case_0_Template, 5, 11, "a", 1)(1, SidebarNavLinkComponent_Case_1_Template, 5, 12, "a", 2)(2, SidebarNavLinkComponent_Case_2_Template, 5, 23, "a", 3)(3, SidebarNavLinkComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      let tmp_1_0;
      ɵɵconditional((tmp_1_0 = ctx.linkType) === "disabled" ? 0 : tmp_1_0 === "external" ? 1 : 2);
    }
  },
  dependencies: [RouterModule, RouterLink, RouterLinkActive, HtmlAttributesDirective, IconDirective, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe, NgTemplateOutlet, NgClass],
  encapsulation: 2
});
var SidebarNavLinkComponent = _SidebarNavLinkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLinkComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-link",
      providers: [SidebarNavHelper],
      standalone: true,
      imports: [RouterModule, HtmlAttributesDirective, IconDirective, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe, NgTemplateOutlet, NgClass],
      template: `@switch (linkType) {
  @case ('disabled') {
    <a [cHtmlAttr]="item.attributes ?? {}" [ngClass]="item | cSidebarNavLink">
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
  @case ('external') {
    <a (click)="linkClicked()" [cHtmlAttr]="item.attributes ?? {}" [href]="href" [ngClass]="item | cSidebarNavLink">
      <ng-container *ngTemplateOutlet="iconTemplate; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
  @default {
    <a (click)="linkClicked()"
       [cHtmlAttr]="item.attributes ?? {}"
       [fragment]="item.linkProps?.fragment"
       [ngClass]="item | cSidebarNavLink"
       [preserveFragment]="item.linkProps?.preserveFragment ?? false"
       [queryParamsHandling]="item.linkProps?.queryParamsHandling"
       [queryParams]="item.linkProps?.queryParams ?? null"
       [replaceUrl]="item.linkProps?.replaceUrl ?? false"
       [routerLinkActiveOptions]="item.linkProps?.routerLinkActiveOptions ?? { exact: false }"
       [routerLink]="item.url"
       [skipLocationChange]="item.linkProps?.skipLocationChange ?? false"
       [state]="item.linkProps?.state ?? {}"
       [target]="item.attributes?.['target']"
       routerLinkActive="active"
    >
      <!--    [class.active]="linkActive"-->
      <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: item}" />
      <c-sidebar-nav-link-content [item]="item" />
      @if (item.badge) {
        <span [ngClass]="item | cSidebarNavBadge">{{ item.badge?.text }}</span>
      }
    </a>
  }
}
<ng-template #iconTemplate let-item>
  <!--  <i *ngIf="item?.icon" [ngClass]="item | cSidebarNavIcon"></i>-->
  @if (item?.icon) {
    <span class="nav-icon">
      <span [ngClass]="item.icon ?? ''"></span>
    </span>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [customClasses]="item | cSidebarNavIcon"
      [name]="item.iconComponent?.name"
    ></svg>
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [ngClass]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`
    }]
  }], () => [{
    type: Router
  }], {
    item: [{
      type: Input
    }],
    linkClick: [{
      type: Output
    }]
  });
})();
var _SidebarNavLabelComponent = class _SidebarNavLabelComponent {
  constructor(helper) {
    this.helper = helper;
    this.classes = {
      "c-nav-label": true,
      "c-active": true
    };
    this.iconClasses = {};
  }
  ngOnInit() {
    this.iconClasses = this.helper.getIconClass(this.item);
  }
  getItemClass() {
    const itemClass = this.item.class;
    this.classes[itemClass] = !!itemClass;
    return this.classes;
  }
  getLabelIconClass() {
    const variant = `text-${this.item.label.variant}`;
    this.iconClasses[variant] = !!this.item.label.variant;
    const labelClass = this.item.label.class;
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
};
_SidebarNavLabelComponent.ɵfac = function SidebarNavLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavLabelComponent)(ɵɵdirectiveInject(SidebarNavHelper));
};
_SidebarNavLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavLabelComponent,
  selectors: [["c-sidebar-nav-label"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 6,
  consts: [[3, "cHtmlAttr", "ngClass", "href"], [3, "ngClass"]],
  template: function SidebarNavLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "a", 0);
      ɵɵtemplate(1, SidebarNavLabelComponent_Conditional_1_Template, 1, 1, "i", 1);
      ɵɵelementContainerStart(2);
      ɵɵtext(3);
      ɵɵelementContainerEnd();
      ɵɵtemplate(4, SidebarNavLabelComponent_Conditional_4_Template, 3, 4, "span", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵpropertyInterpolate("href", ctx.item.url, ɵɵsanitizeUrl);
      ɵɵproperty("cHtmlAttr", ctx.item.attributes)("ngClass", ctx.getItemClass());
      ɵɵadvance();
      ɵɵconditional(ctx.helper.hasIcon(ctx.item) ? 1 : -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.item.name);
      ɵɵadvance();
      ɵɵconditional(ctx.helper.hasBadge(ctx.item) ? 4 : -1);
    }
  },
  dependencies: [HtmlAttributesDirective, SidebarNavBadgePipe, NgClass],
  encapsulation: 2
});
var SidebarNavLabelComponent = _SidebarNavLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavLabelComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-label",
      standalone: true,
      imports: [HtmlAttributesDirective, SidebarNavBadgePipe, NgClass],
      template: '<a [cHtmlAttr]="item.attributes"\n   [ngClass]="getItemClass()"\n   href="{{item.url}}">\n  @if (helper.hasIcon(item)) {\n    <i [ngClass]="getLabelIconClass()"></i>\n  }\n  <ng-container>{{ item.name }}</ng-container>\n  @if (helper.hasBadge(item)) {\n    <span [ngClass]="item | cSidebarNavBadge">{{ item.badge.text }}</span>\n  }\n</a>\n'
    }]
  }], () => [{
    type: SidebarNavHelper
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavTitleComponent = class _SidebarNavTitleComponent {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    const name = this.renderer.createText(this.item.name);
    if (this.item.class) {
      const classes = this.item.class;
      this.renderer.addClass(nativeElement, classes);
    }
    if (this.item.wrapper) {
      const wrapper = this.renderer.createElement(this.item.wrapper.element);
      this.addAttribs(this.item.wrapper.attributes, wrapper);
      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(nativeElement, wrapper);
    } else {
      this.renderer.appendChild(nativeElement, name);
    }
  }
  addAttribs(attribs, element) {
    if (attribs) {
      for (const attr in attribs) {
        if (attr === "style" && typeof attribs[attr] === "object") {
          this.setStyle(attribs[attr], element);
        } else if (attr === "class") {
          this.addClass(attribs[attr], element);
        } else {
          this.setAttrib(attr, attribs[attr], element);
        }
      }
    }
  }
  setStyle(styles, el) {
    for (const style2 in styles) {
      if (style2) {
        this.renderer.setStyle(el, style2, styles[style2]);
      }
    }
  }
  addClass(classes, el) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(el, element);
    });
  }
  setAttrib(key, value, el) {
    this.renderer.setAttribute(el, key, value);
  }
};
_SidebarNavTitleComponent.ɵfac = function SidebarNavTitleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavTitleComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_SidebarNavTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavTitleComponent,
  selectors: [["c-sidebar-nav-title"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SidebarNavTitleComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var SidebarNavTitleComponent = _SidebarNavTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavTitleComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-title",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavDividerComponent = class _SidebarNavDividerComponent {
};
_SidebarNavDividerComponent.ɵfac = function SidebarNavDividerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavDividerComponent)();
};
_SidebarNavDividerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavDividerComponent,
  selectors: [["c-sidebar-nav-divider"]],
  inputs: {
    item: "item"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SidebarNavDividerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var SidebarNavDividerComponent = _SidebarNavDividerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavDividerComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-divider",
      template: ``,
      standalone: true
    }]
  }], null, {
    item: [{
      type: Input
    }]
  });
})();
var _SidebarNavItemClassPipe = class _SidebarNavItemClassPipe {
  constructor(helper) {
    this.helper = helper;
  }
  // transform(item: any, ...args: any[]): any {
  transform(item, args) {
    const itemType = this.helper.itemType(item);
    let itemClass;
    if (["divider", "title"].includes(itemType)) {
      itemClass = `nav-${itemType}`;
    } else if (itemType === "group") {
      itemClass = "";
    } else {
      itemClass = "nav-item";
    }
    return item.class ? `${itemClass} ${item.class}` : itemClass;
  }
};
_SidebarNavItemClassPipe.ɵfac = function SidebarNavItemClassPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavItemClassPipe)(ɵɵdirectiveInject(SidebarNavHelper, 16));
};
_SidebarNavItemClassPipe.ɵpipe = ɵɵdefinePipe({
  name: "cSidebarNavItemClass",
  type: _SidebarNavItemClassPipe,
  pure: true,
  standalone: true
});
var SidebarNavItemClassPipe = _SidebarNavItemClassPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavItemClassPipe, [{
    type: Pipe,
    args: [{
      name: "cSidebarNavItemClass",
      standalone: true
    }]
  }], () => [{
    type: SidebarNavHelper
  }], null);
})();
var _SidebarNavGroupComponent = class _SidebarNavGroupComponent {
  constructor(router, renderer, hostElement, helper, sidebarNavGroupService) {
    this.router = router;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.helper = helper;
    this.sidebarNavGroupService = sidebarNavGroupService;
    this.dropdownMode = "path";
    this.navItems = [];
    this.display = {
      display: "block"
    };
    this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }
  get hostClasses() {
    return {
      "nav-group": true,
      show: this.open
    };
  }
  ngOnInit() {
    this.navItems = [...this.item.children];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      if (this.dropdownMode !== "none") {
        const samePath = this.samePath(event.url);
        this.openGroup(samePath);
      }
    });
    if (this.samePath(this.router.routerState.snapshot.url)) {
      this.openGroup(true);
    }
    this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe((next) => {
      if (this.dropdownMode === "close" && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
          return;
        }
        if (this.samePath(this.router.routerState.snapshot.url)) {
          this.openGroup(true);
          return;
        }
        this.openGroup(false);
      }
    });
  }
  samePath(url) {
    const itemArray = this.item.url?.split("/");
    const urlArray = url.split("/");
    return itemArray?.every((value, index) => {
      return value === urlArray[index];
    });
  }
  openGroup(open) {
    this.open = open;
  }
  toggleGroup($event) {
    $event.preventDefault();
    this.openGroup(!this.open);
    if (this.open) {
      this.sidebarNavGroupService.toggle({
        open: this.open,
        sidebarNavGroup: this
      });
    }
  }
  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }
  onAnimationStart($event) {
    this.display = {
      display: "block"
    };
    if ($event.toState === "open") {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, "height", `${host["scrollHeight"]}px`);
    }
  }
  onAnimationDone($event) {
    if ($event.toState === "open") {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, "height", "auto");
    }
    if ($event.toState === "closed") {
      setTimeout(() => {
        this.display = null;
      });
    }
  }
};
_SidebarNavGroupComponent.ɵfac = function SidebarNavGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavGroupComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SidebarNavHelper), ɵɵdirectiveInject(SidebarNavGroupService));
};
_SidebarNavGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavGroupComponent,
  selectors: [["c-sidebar-nav-group"]],
  viewQuery: function SidebarNavGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(SidebarNavComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidebarNav = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function SidebarNavGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    item: "item",
    dropdownMode: "dropdownMode",
    show: "show",
    compact: [2, "compact", "compact", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([SidebarNavHelper, SidebarNavGroupService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 13,
  consts: [["iconTemplate", ""], ["href", "", 1, "nav-link", "nav-group-toggle", 3, "click", "cHtmlAttr"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [3, "compact", "dropdownMode", "groupItems", "navItems", "ngStyle"], [1, "nav-icon"], [3, "cIcon", "customClasses", "name"]],
  template: function SidebarNavGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "a", 1);
      ɵɵlistener("click", function SidebarNavGroupComponent_Template_a_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleGroup($event));
      });
      ɵɵtemplate(1, SidebarNavGroupComponent_ng_container_1_Template, 1, 0, "ng-container", 2);
      ɵɵelementContainerStart(2);
      ɵɵtext(3);
      ɵɵelementContainerEnd();
      ɵɵtemplate(4, SidebarNavGroupComponent_Conditional_4_Template, 3, 4, "span", 3);
      ɵɵelementEnd();
      ɵɵelementStart(5, "c-sidebar-nav", 4);
      ɵɵlistener("@openClose.done", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_done_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onAnimationDone($event));
      })("@openClose.start", function SidebarNavGroupComponent_Template_c_sidebar_nav_animation_openClose_start_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onAnimationStart($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(6, SidebarNavGroupComponent_ng_template_6_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const iconTemplate_r4 = ɵɵreference(7);
      ɵɵproperty("cHtmlAttr", ctx.item.attributes);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", iconTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c9, ctx.item));
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.item.name);
      ɵɵadvance();
      ɵɵconditional(ctx.helper.hasBadge(ctx.item) ? 4 : -1);
      ɵɵadvance();
      ɵɵproperty("@openClose", ctx.open ? "open" : "closed")("compact", ctx.compact)("dropdownMode", ctx.dropdownMode)("groupItems", true)("navItems", ctx.navItems)("ngStyle", ctx.display);
    }
  },
  dependencies: () => [HtmlAttributesDirective, IconDirective, NgTemplateOutlet, NgClass, SidebarNavIconPipe, SidebarNavBadgePipe, SidebarNavComponent, NgStyle],
  styles: [".nav-group-toggle[_ngcontent-%COMP%]{cursor:pointer}.nav-group-items[_ngcontent-%COMP%]{display:block}"],
  data: {
    animation: [trigger("openClose", [state("open", style({
      height: "*"
    })), state("closed", style({
      height: "0px"
    })), transition("open <=> closed", [animate(".15s ease")])])]
  }
});
var SidebarNavGroupComponent = _SidebarNavGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavGroupComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav-group",
      providers: [SidebarNavHelper, SidebarNavGroupService],
      standalone: true,
      imports: [HtmlAttributesDirective, IconDirective, NgTemplateOutlet, NgClass, SidebarNavIconPipe, SidebarNavBadgePipe, forwardRef(() => SidebarNavComponent), NgStyle],
      animations: [trigger("openClose", [state("open", style({
        height: "*"
      })), state("closed", style({
        height: "0px"
      })), transition("open <=> closed", [animate(".15s ease")])])],
      template: `<a (click)="toggleGroup($event)"
   [cHtmlAttr]="item.attributes"
   class="nav-link nav-group-toggle"
   href>
  <ng-container *ngTemplateOutlet="iconTemplate ; context: {$implicit: item}" />
  <ng-container>{{ item.name }}</ng-container>
  @if (helper.hasBadge(item)) {
    <span [ngClass]="item | cSidebarNavBadge">{{ item.badge.text }}</span>
  }
</a>
<c-sidebar-nav
  (@openClose.done)="onAnimationDone($event)"
  (@openClose.start)="onAnimationStart($event)"
  [@openClose]="open ? 'open' : 'closed'"
  [compact]="compact"
  [dropdownMode]="dropdownMode"
  [groupItems]="true"
  [navItems]="navItems"
  [ngStyle]="display"
/>

<ng-template #iconTemplate let-item>
  <!--  <i *ngIf="item?.icon" [ngClass]="item | cSidebarNavIcon"></i>-->
  @if (item?.icon) {
    <span class="nav-icon">
    <span [ngClass]="item.icon ?? ''"></span>
  </span>
  }
  @if (item?.iconComponent) {
    <svg
      [cIcon]="item.iconComponent?.content"
      [customClasses]="item | cSidebarNavIcon"
      [name]="item.iconComponent?.name"
    />
  }
  @if (!item?.icon && !item?.iconComponent) {
    <span [ngClass]="item | cSidebarNavIcon"></span>
  }
</ng-template>
`,
      styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: SidebarNavHelper
  }, {
    type: SidebarNavGroupService
  }], {
    item: [{
      type: Input
    }],
    dropdownMode: [{
      type: Input
    }],
    show: [{
      type: Input
    }],
    compact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    sidebarNav: [{
      type: ViewChild,
      args: [forwardRef(() => SidebarNavComponent), {
        read: ElementRef
      }]
    }]
  });
})();
var _SidebarNavComponent = class _SidebarNavComponent {
  constructor(sidebar, helper, router, renderer, hostElement, sidebarService) {
    this.sidebar = sidebar;
    this.helper = helper;
    this.router = router;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.sidebarService = sidebarService;
    this.navItems = [];
    this.dropdownMode = "path";
    this.role = "navigation";
    this.navItemsArray = [];
  }
  get hostClasses() {
    return {
      "sidebar-nav": !this.groupItems,
      "nav-group-items": this.groupItems,
      compact: this.groupItems && this.compact
    };
  }
  ngOnChanges(changes) {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }
  hideMobile() {
    if (this.sidebar && this.sidebar.sidebarState.mobile) {
      this.sidebarService.toggle({
        toggle: "visible",
        sidebar: this.sidebar
      });
    }
  }
};
_SidebarNavComponent.ɵfac = function SidebarNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarNavComponent)(ɵɵdirectiveInject(SidebarComponent, 8), ɵɵdirectiveInject(SidebarNavHelper), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SidebarService));
};
_SidebarNavComponent.ɵcmp = ɵɵdefineComponent({
  type: _SidebarNavComponent,
  selectors: [["c-sidebar-nav"]],
  hostVars: 3,
  hostBindings: function SidebarNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    navItems: "navItems",
    dropdownMode: "dropdownMode",
    groupItems: [2, "groupItems", "groupItems", booleanAttribute],
    compact: [2, "compact", "compact", booleanAttribute],
    role: "role"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["rla", "routerLinkActive"], ["routerLinkActive", "show", 3, "dropdownMode", "item", "ngClass", "routerLinkActiveOptions", "compact"], [3, "cHtmlAttr", "item", "ngClass"], [3, "item", "ngClass"], [3, "linkClick", "item", "ngClass"]],
  template: function SidebarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵrepeaterCreate(0, SidebarNavComponent_For_1_Template, 6, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.navItemsArray);
    }
  },
  dependencies: [NgClass, HtmlAttributesDirective, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavItemClassPipe, RouterModule, RouterLinkActive],
  encapsulation: 2
});
var SidebarNavComponent = _SidebarNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavComponent, [{
    type: Component,
    args: [{
      selector: "c-sidebar-nav",
      standalone: true,
      imports: [NgClass, HtmlAttributesDirective, SidebarNavLinkComponent, SidebarNavLabelComponent, SidebarNavTitleComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavItemClassPipe, RouterModule],
      template: `@for (item of navItemsArray; track item) {
  @switch (helper.itemType(item)) {
    @case ('group') {
      <c-sidebar-nav-group
        #rla="routerLinkActive"
        [dropdownMode]="dropdownMode"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="show"
        [compact]="compact"
      />
    }
    @case ('divider') {
      <c-sidebar-nav-divider
        [cHtmlAttr]="item.attributes ?? {}"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('title') {
      <c-sidebar-nav-title
        [cHtmlAttr]="item.attributes ?? {}"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('label') {
      <c-sidebar-nav-label
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
    @case ('empty') {
      <ng-container />
    }
    @default {
      <c-sidebar-nav-link
        (linkClick)="hideMobile()"
        [item]="item"
        [ngClass]="item | cSidebarNavItemClass"
      />
    }
  }
}
<ng-content />
`
    }]
  }], () => [{
    type: SidebarComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: SidebarNavHelper
  }, {
    type: Router
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: SidebarService
  }], {
    navItems: [{
      type: Input
    }],
    dropdownMode: [{
      type: Input
    }],
    groupItems: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }]
  });
})();
var _SidebarModule = class _SidebarModule {
};
_SidebarModule.ɵfac = function SidebarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarModule)();
};
_SidebarModule.ɵmod = ɵɵdefineNgModule({
  type: _SidebarModule,
  imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerDirective],
  exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerDirective, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent]
});
_SidebarModule.ɵinj = ɵɵdefineInjector({
  providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService],
  imports: [SidebarNavComponent, SidebarNavGroupComponent, SidebarNavLinkComponent]
});
var SidebarModule = _SidebarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [SidebarComponent, SidebarBrandComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarNavBadgePipe, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent, SidebarToggleDirective, SidebarTogglerDirective],
      exports: [SidebarComponent, SidebarToggleDirective, SidebarTogglerDirective, SidebarBrandComponent, SidebarNavComponent, SidebarHeaderComponent, SidebarFooterComponent],
      providers: [SidebarService, SidebarNavHelper, SidebarNavGroupService]
    }]
  }], null, null);
})();
var _SpinnerComponent = class _SpinnerComponent {
  constructor() {
    this.label = "Loading...";
    this.variant = "border";
    this.role = "status";
  }
  get hostClasses() {
    return {
      [`spinner-${this.variant}`]: true,
      [`text-${this.color}`]: !!this.color,
      [`spinner-${this.variant}-${this.size}`]: !!this.size
    };
  }
};
_SpinnerComponent.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpinnerComponent)();
};
_SpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _SpinnerComponent,
  selectors: [["c-spinner"]],
  hostVars: 3,
  hostBindings: function SpinnerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    label: "label",
    size: "size",
    variant: "variant",
    role: "role"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "visually-hidden"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.label);
    }
  },
  encapsulation: 2
});
var SpinnerComponent = _SpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      selector: "c-spinner",
      standalone: true,
      template: '<span class="visually-hidden">{{label}}</span>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _SpinnerModule = class _SpinnerModule {
};
_SpinnerModule.ɵfac = function SpinnerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpinnerModule)();
};
_SpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: _SpinnerModule,
  imports: [SpinnerComponent],
  exports: [SpinnerComponent]
});
_SpinnerModule.ɵinj = ɵɵdefineInjector({});
var SpinnerModule = _SpinnerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerModule, [{
    type: NgModule,
    args: [{
      exports: [SpinnerComponent],
      imports: [SpinnerComponent]
    }]
  }], null, null);
})();
var _TableColorDirective = class _TableColorDirective {
  get hostClasses() {
    return {
      [`table-${this.color}`]: !!this.color
    };
  }
};
_TableColorDirective.ɵfac = function TableColorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableColorDirective)();
};
_TableColorDirective.ɵdir = ɵɵdefineDirective({
  type: _TableColorDirective,
  selectors: [["", "cTableColor", ""]],
  hostVars: 2,
  hostBindings: function TableColorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: [0, "cTableColor", "color"]
  },
  standalone: true
});
var TableColorDirective = _TableColorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableColorDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableColor]",
      standalone: true
    }]
  }], null, {
    color: [{
      type: Input,
      args: ["cTableColor"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableActiveDirective = class _TableActiveDirective {
  constructor() {
    this.active = false;
  }
  get hostClasses() {
    return {
      "table-active": this.active
    };
  }
};
_TableActiveDirective.ɵfac = function TableActiveDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableActiveDirective)();
};
_TableActiveDirective.ɵdir = ɵɵdefineDirective({
  type: _TableActiveDirective,
  selectors: [["", "cTableActive", ""]],
  hostVars: 2,
  hostBindings: function TableActiveDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    active: [2, "cTableActive", "active", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var TableActiveDirective = _TableActiveDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableActiveDirective, [{
    type: Directive,
    args: [{
      selector: "[cTableActive]",
      standalone: true
    }]
  }], null, {
    active: [{
      type: Input,
      args: [{
        alias: "cTableActive",
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableDirective = class _TableDirective {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.bordered = false;
    this.borderless = false;
    this.hover = false;
    this.small = false;
    this.striped = false;
    this.stripedColumns = false;
  }
  get hostClasses() {
    return {
      table: true,
      [`align-${this.align}`]: !!this.align,
      [`caption-${this.caption}`]: !!this.caption,
      [`border-${this.borderColor}`]: !!this.borderColor,
      "table-bordered": this.bordered,
      "table-borderless": this.borderless,
      [`table-${this.color}`]: !!this.color,
      "table-hover": this.hover,
      "table-sm": this.small,
      "table-striped": this.striped,
      "table-striped-columns": this.stripedColumns
    };
  }
  ngOnInit() {
    this.setResponsiveWrapper();
  }
  // todo
  setResponsiveWrapper() {
    if (!!this.responsive) {
      const nativeElement = this.hostElement.nativeElement;
      const wrapper = this.renderer.createElement("div");
      const className = this.responsive === true ? "table-responsive" : `table-responsive-${this.responsive}`;
      this.renderer.addClass(wrapper, className);
      const parentNode = this.renderer.parentNode(nativeElement);
      this.renderer.appendChild(parentNode, wrapper);
      this.renderer.insertBefore(parentNode, wrapper, nativeElement);
      this.renderer.appendChild(wrapper, nativeElement);
    }
  }
};
_TableDirective.ɵfac = function TableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_TableDirective.ɵdir = ɵɵdefineDirective({
  type: _TableDirective,
  selectors: [["table", "cTable", ""]],
  hostAttrs: [1, "table"],
  hostVars: 2,
  hostBindings: function TableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    align: "align",
    borderColor: "borderColor",
    bordered: [2, "bordered", "bordered", booleanAttribute],
    borderless: [2, "borderless", "borderless", booleanAttribute],
    caption: "caption",
    color: "color",
    hover: [2, "hover", "hover", booleanAttribute],
    responsive: "responsive",
    small: [2, "small", "small", booleanAttribute],
    striped: [2, "striped", "striped", booleanAttribute],
    stripedColumns: [2, "stripedColumns", "stripedColumns", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var TableDirective = _TableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDirective, [{
    type: Directive,
    args: [{
      selector: "table[cTable]",
      standalone: true,
      host: {
        class: "table"
      }
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    align: [{
      type: Input
    }],
    borderColor: [{
      type: Input
    }],
    bordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    borderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    caption: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    hover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    small: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    striped: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stripedColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _TableModule = class _TableModule {
};
_TableModule.ɵfac = function TableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableModule)();
};
_TableModule.ɵmod = ɵɵdefineNgModule({
  type: _TableModule,
  imports: [TableDirective, TableColorDirective, TableActiveDirective],
  exports: [TableDirective, TableColorDirective, TableActiveDirective]
});
_TableModule.ɵinj = ɵɵdefineInjector({});
var TableModule = _TableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      exports: [TableDirective, TableColorDirective, TableActiveDirective],
      imports: [TableDirective, TableColorDirective, TableActiveDirective]
    }]
  }], null, null);
})();
var _TabService = class _TabService {
  constructor() {
    this.activeTabPaneIdx = new Subject();
    this.activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();
  }
  setActiveTabIdx(tabContentState) {
    this.activeTabPaneIdx.next(tabContentState);
  }
};
_TabService.ɵfac = function TabService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabService)();
};
_TabService.ɵprov = ɵɵdefineInjectable({
  token: _TabService,
  factory: _TabService.ɵfac,
  providedIn: "root"
});
var TabService = _TabService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TabPaneComponent = class _TabPaneComponent {
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._active = false;
    this.role = "tabpanel";
    this.subscribeTabService();
  }
  set active(value) {
    const newValue = booleanAttribute(value);
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.markForCheck();
    }
  }
  get active() {
    return this._active;
  }
  get hostClasses() {
    return {
      "tab-pane": true,
      fade: true,
      show: this.active,
      active: this.active
    };
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContent) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
};
_TabPaneComponent.ɵfac = function TabPaneComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabPaneComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabPaneComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabPaneComponent,
  selectors: [["c-tab-pane"]],
  hostAttrs: [1, "tab-pane"],
  hostVars: 3,
  hostBindings: function TabPaneComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    role: "role"
  },
  exportAs: ["cTabPane"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabPaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var TabPaneComponent = _TabPaneComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPaneComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-pane",
      template: "<ng-content />",
      exportAs: "cTabPane",
      standalone: true,
      host: {
        class: "tab-pane"
      },
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var _TabContentComponent = class _TabContentComponent {
  /**
   * Set active tabPane index
   * @type number
   */
  set activeTabPaneIdx(value) {
    const newValue = value;
    if (this._activeTabPaneIdx != newValue) {
      this._activeTabPaneIdx = newValue;
      this.activeTabPaneIdxChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    }
  }
  get activeTabPaneIdx() {
    return this._activeTabPaneIdx;
  }
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._activeTabPaneIdx = -1;
    this.activeTabPaneIdxChange = new EventEmitter();
  }
  ngAfterContentInit() {
    this.subscribeTabService();
  }
  ngAfterContentChecked() {
    this.panes?.forEach((tabPane, index) => {
      tabPane.tabContent = this;
      tabPane.tabPaneIdx = index;
    });
    this.refreshTabPaneActive(this.activeTabPaneIdx);
    this.tabService.setActiveTabIdx({
      tabContent: this,
      activeIdx: this.activeTabPaneIdx
    });
  }
  ngOnChanges(changes) {
    if (changes["activeTabPaneIdx"]?.currentValue) {
      this.tabService.setActiveTabIdx({
        tabContent: this,
        activeIdx: changes["activeTabPaneIdx"].currentValue
      });
    }
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (this === tabContentState.tabContent) {
          this.activeTabPaneIdx = tabContentState.activeIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
  refreshTabPaneActive(idx) {
    this.panes?.forEach((tabPane, index) => {
      tabPane.active = idx === index;
    });
  }
};
_TabContentComponent.ɵfac = function TabContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabContentComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabContentComponent,
  selectors: [["c-tab-content"]],
  contentQueries: function TabContentComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabPaneComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panes = _t);
    }
  },
  hostAttrs: [1, "tab-content"],
  inputs: {
    activeTabPaneIdx: [2, "activeTabPaneIdx", "activeTabPaneIdx", numberAttribute]
  },
  outputs: {
    activeTabPaneIdxChange: "activeTabPaneIdxChange"
  },
  exportAs: ["cTabContent"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
var TabContentComponent = _TabContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentComponent, [{
    type: Component,
    args: [{
      selector: "c-tab-content",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "cTabContent",
      standalone: true,
      host: {
        class: "tab-content"
      },
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    activeTabPaneIdx: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    activeTabPaneIdxChange: [{
      type: Output
    }],
    panes: [{
      type: ContentChildren,
      args: [TabPaneComponent]
    }]
  });
})();
var _TabContentRefDirective = class _TabContentRefDirective {
  constructor(changeDetectorRef, tabService) {
    this.changeDetectorRef = changeDetectorRef;
    this.tabService = tabService;
    this._active = false;
    this._disabled = false;
    this.tabPaneIdx = -1;
    this.role = "tab";
    this.subscribeTabService();
  }
  /**
   * Set active state of tab content
   * @type boolean
   * @default false
   */
  set active(value) {
    const newValue = value;
    if (this._active !== newValue) {
      this._active = newValue;
      this.changeDetectorRef.detectChanges();
    }
  }
  get active() {
    return this._active;
  }
  /**
   * Set disabled state of tab content
   * @type boolean
   */
  set disabled(value) {
    this._disabled = value;
  }
  get disabled() {
    return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
  }
  get hostClasses() {
    return {
      active: this.active,
      disabled: this.disabled
    };
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get attrDisabled() {
    return this.disabled ? "" : null;
  }
  get ariaSelected() {
    return this.active;
  }
  get getTabindex() {
    return this.disabled ? "-1" : null;
  }
  ngOnChanges(changes) {
    if (changes["active"]?.currentValue) {
      this.setActiveTabPane();
    }
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.setActiveTabPane();
  }
  setActiveTabPane() {
    setTimeout(() => {
      if (this.tabPaneIdx < this.tabContentRef.panes.length) {
        this.active = true;
        this.tabService.setActiveTabIdx({
          tabContent: this.tabContentRef,
          activeIdx: this.tabPaneIdx
        });
      } else {
        this.active = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscribeTabService(false);
  }
  subscribeTabService(subscribe = true) {
    if (subscribe) {
      this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
        if (tabContentState.tabContent === this.tabContentRef) {
          this.active = tabContentState.activeIdx === this.tabPaneIdx;
        }
      });
    } else {
      this.tabServiceSubscription?.unsubscribe();
    }
  }
};
_TabContentRefDirective.ɵfac = function TabContentRefDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabContentRefDirective)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TabService));
};
_TabContentRefDirective.ɵdir = ɵɵdefineDirective({
  type: _TabContentRefDirective,
  selectors: [["", "cTabContent", ""]],
  hostVars: 7,
  hostBindings: function TabContentRefDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TabContentRefDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("disabled", ctx.attrDisabled)("aria-selected", ctx.ariaSelected)("role", ctx.role)("tabindex", ctx.getTabindex);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    tabContentRef: [0, "cTabContent", "tabContentRef"],
    active: [2, "active", "active", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabPaneIdx: [2, "tabPaneIdx", "tabPaneIdx", numberAttribute],
    role: "role"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var TabContentRefDirective = _TabContentRefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentRefDirective, [{
    type: Directive,
    args: [{
      selector: "[cTabContent]",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TabService
  }], {
    tabContentRef: [{
      type: Input,
      args: ["cTabContent"]
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabPaneIdx: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    attrDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    ariaSelected: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    getTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _TabsModule = class _TabsModule {
};
_TabsModule.ɵfac = function TabsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsModule)();
};
_TabsModule.ɵmod = ɵɵdefineNgModule({
  type: _TabsModule,
  imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
  exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective]
});
_TabsModule.ɵinj = ɵɵdefineInjector({
  providers: [TabService]
});
var TabsModule = _TabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [TabContentComponent, TabContentRefDirective, TabPaneComponent],
      exports: [TabContentComponent, TabPaneComponent, TabContentRefDirective],
      providers: [TabService]
    }]
  }], null, null);
})();
var _TabsService = class _TabsService {
  constructor() {
    this.activeItem = signal(void 0);
    this.activeItemKey = signal(void 0);
    this.id = signal(void 0);
  }
};
_TabsService.ɵfac = function TabsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsService)();
};
_TabsService.ɵprov = ɵɵdefineInjectable({
  token: _TabsService,
  factory: _TabsService.ɵfac
});
var TabsService = _TabsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsService, [{
    type: Injectable
  }], null, null);
})();
var nextId = 0;
var _TabsComponent = class _TabsComponent {
  constructor() {
    this.tabsService = inject(TabsService);
    this.activeItemKey = model();
    this.tabsId = `tabs-${nextId++}`;
    this.id = input(this.tabsId);
    this.activeItemEffect = effect(() => {
      this.tabsService.id.set(this.id());
      this.tabsService.activeItemKey.set(this.activeItemKey());
    }, {
      allowSignalWrites: true
    });
    this.tabsServiceEffect = effect(() => {
      this.activeItemKey.set(this.tabsService.activeItemKey());
    }, {
      allowSignalWrites: true
    });
  }
};
_TabsComponent.ɵfac = function TabsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsComponent)();
};
_TabsComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabsComponent,
  selectors: [["c-tabs"]],
  hostAttrs: [1, "tabs"],
  hostVars: 1,
  hostBindings: function TabsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id());
    }
  },
  inputs: {
    activeItemKey: [1, "activeItemKey"],
    id: [1, "id"]
  },
  outputs: {
    activeItemKey: "activeItemKeyChange"
  },
  exportAs: ["cTabs"],
  standalone: true,
  features: [ɵɵProvidersFeature([TabsService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var TabsComponent = _TabsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabs",
      selector: "c-tabs",
      standalone: true,
      imports: [],
      template: "<ng-content />",
      providers: [TabsService],
      host: {
        "[id]": "id()",
        class: "tabs"
      },
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var _destroyRef9, _elementRef4, _tabsService, _disabled;
var _TabDirective = class _TabDirective {
  constructor() {
    __privateAdd(this, _destroyRef9);
    __privateAdd(this, _elementRef4);
    __privateAdd(this, _tabsService);
    __privateAdd(this, _disabled);
    __privateSet(this, _destroyRef9, inject(DestroyRef));
    __privateSet(this, _elementRef4, inject(ElementRef));
    __privateSet(this, _tabsService, inject(TabsService));
    __privateSet(this, _disabled, signal(false));
    this.attrDisabled = computed(() => __privateGet(this, _disabled).call(this) || null);
    this.itemKey = input.required();
    this.id = input();
    this.ariaControls = input(void 0, {
      alias: "aria-controls"
    });
    this.isActive = computed(() => !__privateGet(this, _disabled).call(this) && __privateGet(this, _tabsService).activeItemKey() === this.itemKey());
    this.hostClasses = computed(() => ({
      "nav-link": true,
      active: this.isActive(),
      disabled: __privateGet(this, _disabled).call(this)
    }));
    this.propId = computed(() => this.id() ?? `${__privateGet(this, _tabsService).id()}-tab-${this.itemKey()}`);
    this.attrAriaControls = computed(() => this.ariaControls() ?? `${__privateGet(this, _tabsService).id()}-panel-${this.itemKey()}`);
    this.disabledEffect = effect(() => {
      if (!__privateGet(this, _disabled).call(this)) {
        const click$ = fromEvent(__privateGet(this, _elementRef4).nativeElement, "click");
        const focusIn$ = fromEvent(__privateGet(this, _elementRef4).nativeElement, "focusin");
        merge(focusIn$, click$).pipe(filter(($event) => !__privateGet(this, _disabled).call(this)), tap(($event) => {
          __privateGet(this, _tabsService).activeItemKey.set(untracked(this.itemKey));
        }), takeWhile(() => !__privateGet(this, _disabled).call(this)), takeUntilDestroyed(__privateGet(this, _destroyRef9))).subscribe();
      }
    }, {
      allowSignalWrites: true
    });
  }
  /**
   * Disabled attribute
   * @type boolean
   * @default false
   */
  set disabled(value) {
    __privateGet(this, _disabled).set(value);
  }
  get disabled() {
    return __privateGet(this, _disabled).call(this);
  }
  focus(origin) {
    __privateGet(this, _elementRef4).nativeElement.focus();
  }
};
_destroyRef9 = new WeakMap();
_elementRef4 = new WeakMap();
_tabsService = new WeakMap();
_disabled = new WeakMap();
_TabDirective.ɵfac = function TabDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabDirective)();
};
_TabDirective.ɵdir = ɵɵdefineDirective({
  type: _TabDirective,
  selectors: [["button", "cTab", ""]],
  hostAttrs: ["type", "button", "role", "tab"],
  hostVars: 7,
  hostBindings: function TabDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.propId())("tabindex", ctx.isActive() ? 0 : -1);
      ɵɵattribute("aria-selected", ctx.isActive())("aria-controls", ctx.attrAriaControls())("disabled", ctx.attrDisabled() || null);
      ɵɵclassMap(ctx.hostClasses());
    }
  },
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    itemKey: [1, "itemKey"],
    id: [1, "id"],
    ariaControls: [1, "aria-controls", "ariaControls"]
  },
  exportAs: ["cTab"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var TabDirective = _TabDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabDirective, [{
    type: Directive,
    args: [{
      exportAs: "cTab",
      selector: "button[cTab]",
      standalone: true,
      host: {
        "[class]": "hostClasses()",
        type: "button",
        role: "tab",
        "[attr.aria-selected]": "isActive()",
        "[attr.aria-controls]": "attrAriaControls()",
        "[attr.disabled]": "attrDisabled() || null",
        "[id]": "propId()",
        "[tabindex]": "isActive() ? 0 : -1"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _destroyRef10, _focusKeyManager2;
var _TabsListComponent = class _TabsListComponent {
  constructor() {
    __privateAdd(this, _destroyRef10);
    __privateAdd(this, _focusKeyManager2);
    __privateSet(this, _destroyRef10, inject(DestroyRef));
    this.tabsService = inject(TabsService);
    this.layout = input();
    this.variant = input();
    this.role = input("tablist");
    this.hostClasses = computed(() => ({
      nav: true,
      [`nav-${this.layout()}`]: this.layout(),
      [`nav-${this.variant()}`]: this.variant()
    }));
    this.tabs = contentChildren(TabDirective);
    this.tabsEffect = effect(() => {
      if (this.tabs().length === 0) {
        return;
      }
      __privateSet(this, _focusKeyManager2, new FocusKeyManager(this.tabs()).skipPredicate((tab) => tab.disabled === true).withHorizontalOrientation("ltr").withHomeAndEnd().withWrap());
      __privateGet(this, _focusKeyManager2).change.pipe(tap((value) => {
        this.tabsService.activeItemKey.set(__privateGet(this, _focusKeyManager2).activeItem?.itemKey());
        this.tabsService.activeItem.set(__privateGet(this, _focusKeyManager2).activeItem);
      }), takeUntilDestroyed(__privateGet(this, _destroyRef10))).subscribe();
      const activeItem = this.tabs().find((tab) => untracked(tab.isActive)) ?? this.tabs().find((tab) => !tab.disabled);
      const activeItemIndex = this.tabs().findIndex((tab) => tab === activeItem);
      __privateGet(this, _focusKeyManager2)?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
      this.tabsService.activeItemKey.set(__privateGet(this, _focusKeyManager2).activeItem?.itemKey());
      this.tabsService.activeItem.set(__privateGet(this, _focusKeyManager2).activeItem);
    }, {
      allowSignalWrites: true
    });
    this.tabsServiceEffect = effect(() => {
      const activeItemIndex = this.tabs().findIndex((tab) => untracked(tab.isActive) && untracked(tab.itemKey) === this.tabsService.activeItemKey());
      __privateGet(this, _focusKeyManager2)?.updateActiveItem(activeItemIndex < 0 ? 0 : activeItemIndex);
    });
  }
  onKeydown($event) {
    if (["ArrowLeft", "ArrowRight"].includes($event.key)) {
      __privateGet(this, _focusKeyManager2).onKeydown($event);
      return;
    }
    if (["Tab"].includes($event.key)) {
      __privateGet(this, _focusKeyManager2)?.tabOut.next();
    }
    return;
  }
};
_destroyRef10 = new WeakMap();
_focusKeyManager2 = new WeakMap();
_TabsListComponent.ɵfac = function TabsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsListComponent)();
};
_TabsListComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabsListComponent,
  selectors: [["c-tabs-list"]],
  contentQueries: function TabsListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuerySignal(dirIndex, ctx.tabs, TabDirective, 4);
    }
    if (rf & 2) {
      ɵɵqueryAdvance();
    }
  },
  hostVars: 3,
  hostBindings: function TabsListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function TabsListComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role());
      ɵɵclassMap(ctx.hostClasses());
    }
  },
  inputs: {
    layout: [1, "layout"],
    variant: [1, "variant"],
    role: [1, "role"]
  },
  exportAs: ["cTabsList"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var TabsListComponent = _TabsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsListComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabsList",
      selector: "c-tabs-list",
      standalone: true,
      imports: [TabDirective],
      template: "<ng-content />",
      host: {
        "[attr.role]": "role()",
        "[class]": "hostClasses()"
      }
    }]
  }], null, {
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _TabsContentComponent = class _TabsContentComponent {
};
_TabsContentComponent.ɵfac = function TabsContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsContentComponent)();
};
_TabsContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabsContentComponent,
  selectors: [["c-tabs-content"]],
  hostAttrs: [1, "tab-content"],
  exportAs: ["cTabsContent"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabsContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var TabsContentComponent = _TabsContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsContentComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabsContent",
      selector: "c-tabs-content",
      standalone: true,
      template: "<ng-content />",
      host: {
        class: "tab-content"
      }
    }]
  }], null, null);
})();
var _TabPanelComponent = class _TabPanelComponent {
  constructor() {
    this.tabsService = inject(TabsService);
    this.ariaLabelledBy = input(void 0, {
      alias: "aria-labelledby"
    });
    this.id = input();
    this.itemKey = input.required();
    this.tabindex = input(0, {
      transform: numberAttribute
    });
    this.transition = input(true);
    this.visibleChange = output();
    this.show = signal(false);
    this.visible = computed(() => {
      const visible = this.tabsService.activeItemKey() === this.itemKey() && !this.tabsService.activeItem()?.disabled;
      this.visibleChange.emit({
        itemKey: this.itemKey(),
        visible
      });
      return visible;
    });
    this.propId = computed(() => this.id() ?? `${this.tabsService.id()}-panel-${this.itemKey()}`);
    this.attrAriaLabelledBy = computed(() => this.ariaLabelledBy() ?? `${this.tabsService.id()}-tab-${this.itemKey()}`);
    this.hostClasses = computed(() => ({
      "tab-pane": true,
      active: this.show(),
      fade: this.transition(),
      show: this.show(),
      invisible: this.tabsService.activeItem()?.disabled
    }));
  }
  get animationDisabled() {
    return !this.transition();
  }
  get animateType() {
    return this.visible() ? "show" : "hide";
  }
  onAnimationDone($event) {
    this.show.set(this.visible());
  }
};
_TabPanelComponent.ɵfac = function TabPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabPanelComponent)();
};
_TabPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabPanelComponent,
  selectors: [["c-tab-panel"]],
  hostAttrs: ["role", "tabpanel"],
  hostVars: 7,
  hostBindings: function TabPanelComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@fadeInOut.done", function TabPanelComponent_animation_fadeInOut_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("tabindex", ctx.visible() ? ctx.tabindex() : -1)("id", ctx.propId());
      ɵɵsyntheticHostProperty("@.disabled", ctx.animationDisabled)("@fadeInOut", ctx.animateType);
      ɵɵattribute("aria-labelledby", ctx.attrAriaLabelledBy());
      ɵɵclassMap(ctx.hostClasses());
    }
  },
  inputs: {
    ariaLabelledBy: [1, "aria-labelledby", "ariaLabelledBy"],
    id: [1, "id"],
    itemKey: [1, "itemKey"],
    tabindex: [1, "tabindex"],
    transition: [1, "transition"]
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["cTabPanel"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TabPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  data: {
    animation: [trigger("fadeInOut", [state("show", style({
      opacity: 1
    })), state("hide", style({
      opacity: 0
    })), state("void", style({
      opacity: 0
    })), transition("* => *", [animate("150ms linear")])])]
  }
});
var TabPanelComponent = _TabPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanelComponent, [{
    type: Component,
    args: [{
      exportAs: "cTabPanel",
      selector: "c-tab-panel",
      standalone: true,
      template: "<ng-content />",
      host: {
        "[class]": "hostClasses()",
        "[tabindex]": "visible() ? tabindex(): -1",
        "[attr.aria-labelledby]": "attrAriaLabelledBy()",
        "[id]": "propId()",
        role: "tabpanel"
      },
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1
      })), state("hide", style({
        opacity: 0
      })), state("void", style({
        opacity: 0
      })), transition("* => *", [animate("150ms linear")])])]
    }]
  }], null, {
    animationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    animateType: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    onAnimationDone: [{
      type: HostListener,
      args: ["@fadeInOut.done", ["$event"]]
    }]
  });
})();
var _Tabs2Module = class _Tabs2Module {
};
_Tabs2Module.ɵfac = function Tabs2Module_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tabs2Module)();
};
_Tabs2Module.ɵmod = ɵɵdefineNgModule({
  type: _Tabs2Module,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
  exports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
});
_Tabs2Module.ɵinj = ɵɵdefineInjector({
  providers: [TabsService]
});
var Tabs2Module = _Tabs2Module;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs2Module, [{
    type: NgModule,
    args: [{
      imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
      exports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
      providers: [TabsService]
    }]
  }], null, null);
})();
var _ToasterService = class _ToasterService {
  constructor() {
    this.toasterState = new BehaviorSubject({});
    this.toasterState$ = this.toasterState.asObservable();
  }
  setState(state2) {
    this.toasterState.next(__spreadValues({}, state2));
  }
};
_ToasterService.ɵfac = function ToasterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToasterService)();
};
_ToasterService.ɵprov = ɵɵdefineInjectable({
  token: _ToasterService,
  factory: _ToasterService.ɵfac,
  providedIn: "root"
});
var ToasterService = _ToasterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ToastComponent = class _ToastComponent {
  constructor(hostElement, renderer, toasterService, changeDetectorRef) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.toasterService = toasterService;
    this.changeDetectorRef = changeDetectorRef;
    this.autohide = true;
    this.color = "";
    this.delay = 5e3;
    this.fade = true;
    this._visible = false;
    this.visibleChange = new EventEmitter();
    this.timer = new EventEmitter();
  }
  /**
   * Toggle the visibility of component.
   * @type boolean
   */
  set visible(value) {
    const newValue = value;
    if (this._visible !== newValue) {
      this._visible = newValue;
      newValue ? this.setTimer() : this.clearTimer();
      this.visibleChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
    }
  }
  get visible() {
    return this._visible;
  }
  get clock() {
    return this._clock;
  }
  set clock(value) {
    this._clock = value;
    this.timer.emit(this._clock);
    this.changeDetectorRef.markForCheck();
  }
  get animationDisabled() {
    return !this.fade;
  }
  get animateType() {
    return this.visible ? "show" : "hide";
  }
  onMouseOver() {
    this.clearTimer();
  }
  onMouseOut() {
    this.setTimer();
  }
  get hostClasses() {
    return {
      toast: true,
      show: true,
      [`bg-${this.color}`]: !!this.color,
      "border-0": !!this.color
    };
  }
  ngOnInit() {
    if (this.visible) {
      this.toasterService.setState({
        toast: this,
        show: this.visible,
        placement: this.placement
      });
      this.clearTimer();
      this.setTimer();
    }
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  setTimer() {
    this.clearTimer();
    if (this.autohide && this.visible) {
      this.timerId = this.delay > 0 ? setTimeout(() => this.onClose(), this.delay) : void 0;
      this.setClock();
    }
  }
  clearTimer() {
    this.clearClock();
    clearTimeout(this.timerId);
    this.timerId = void 0;
  }
  onClose() {
    this.clearTimer();
    this.toasterService.setState({
      toast: this,
      show: false,
      placement: this.placement
    });
  }
  setClock() {
    this.clearClock();
    this.clock = 0;
    this.clockId = setInterval(() => {
      this.clock += 1;
      this.changeDetectorRef.markForCheck();
    }, 1e3);
    this.clockTimerId = setTimeout(() => {
      this.clearClock();
    }, this.delay);
  }
  clearClock() {
    clearTimeout(this.clockTimerId);
    clearInterval(this.clockId);
    this.clockId = void 0;
  }
};
_ToastComponent.ɵfac = function ToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_ToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastComponent,
  selectors: [["c-toast"]],
  hostAttrs: [1, "toast", "show"],
  hostVars: 4,
  hostBindings: function ToastComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseover", function ToastComponent_mouseover_HostBindingHandler() {
        return ctx.onMouseOver();
      })("mouseout", function ToastComponent_mouseout_HostBindingHandler() {
        return ctx.onMouseOut();
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.animationDisabled)("@fadeInOut", ctx.animateType);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    autohide: "autohide",
    color: "color",
    delay: [2, "delay", "delay", numberAttribute],
    fade: "fade",
    visible: [2, "visible", "visible", booleanAttribute],
    index: [2, "index", "index", numberAttribute]
  },
  outputs: {
    visibleChange: "visibleChange",
    timer: "timer"
  },
  exportAs: ["cToast"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;overflow:hidden}"],
  data: {
    animation: [trigger("fadeInOut", [state("show", style({
      opacity: 1,
      height: "*",
      padding: "*",
      border: "*",
      margin: "*"
    })), state("hide", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), state("void", style({
      opacity: 0,
      height: 0,
      padding: 0,
      border: 0,
      margin: 0
    })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-out"
      }
    }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-in"
      }
    }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-out"
      }
    }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
      params: {
        time: "300ms",
        easing: "ease-in"
      }
    })])]
  }
});
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "c-toast",
      template: "<ng-content />",
      exportAs: "cToast",
      standalone: true,
      animations: [trigger("fadeInOut", [state("show", style({
        opacity: 1,
        height: "*",
        padding: "*",
        border: "*",
        margin: "*"
      })), state("hide", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), state("void", style({
        opacity: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      })), transition("show => hide", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("hide => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      }), transition("show => void", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-out"
        }
      }), transition("void => show", [animate("{{ time }} {{ easing }}")], {
        params: {
          time: "300ms",
          easing: "ease-in"
        }
      })])],
      host: {
        class: "toast show"
      },
      styles: [":host{display:block;overflow:hidden}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ToasterService
  }, {
    type: ChangeDetectorRef
  }], {
    autohide: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    delay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    fade: [{
      type: Input
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    timer: [{
      type: Output
    }],
    animationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    animateType: [{
      type: HostBinding,
      args: ["@fadeInOut"]
    }],
    onMouseOver: [{
      type: HostListener,
      args: ["mouseover"]
    }],
    onMouseOut: [{
      type: HostListener,
      args: ["mouseout"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ToastBodyComponent = class _ToastBodyComponent {
  constructor(toast) {
    this.toast = toast;
    this.toastBodyClass = true;
  }
};
_ToastBodyComponent.ɵfac = function ToastBodyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastBodyComponent)(ɵɵdirectiveInject(ToastComponent, 8));
};
_ToastBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastBodyComponent,
  selectors: [["c-toast-body"]],
  hostVars: 2,
  hostBindings: function ToastBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("toast-body", ctx.toastBodyClass);
    }
  },
  exportAs: ["cToastBody"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ToastBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
var ToastBodyComponent = _ToastBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastBodyComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-body",
      template: "<ng-content />",
      exportAs: "cToastBody",
      standalone: true,
      styles: [":host{display:block}\n"]
    }]
  }], () => [{
    type: ToastComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    toastBodyClass: [{
      type: HostBinding,
      args: ["class.toast-body"]
    }]
  });
})();
var _ToastCloseDirective = class _ToastCloseDirective {
  constructor(toasterService) {
    this.toasterService = toasterService;
  }
  toggleOpen($event) {
    $event.preventDefault();
    this.toasterService.setState({
      show: false,
      toast: this.toast
    });
  }
};
_ToastCloseDirective.ɵfac = function ToastCloseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastCloseDirective)(ɵɵdirectiveInject(ToasterService));
};
_ToastCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _ToastCloseDirective,
  selectors: [["", "cToastClose", ""]],
  hostBindings: function ToastCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ToastCloseDirective_click_HostBindingHandler($event) {
        return ctx.toggleOpen($event);
      });
    }
  },
  inputs: {
    toast: [0, "cToastClose", "toast"]
  },
  exportAs: ["cToastClose"],
  standalone: true
});
var ToastCloseDirective = _ToastCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[cToastClose]",
      exportAs: "cToastClose",
      standalone: true
    }]
  }], () => [{
    type: ToasterService
  }], {
    toast: [{
      type: Input,
      args: ["cToastClose"]
    }],
    toggleOpen: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ToastHeaderComponent = class _ToastHeaderComponent {
  constructor(toast) {
    this.toast = toast;
    this.closeButton = true;
    this.toastHeaderClass = true;
  }
};
_ToastHeaderComponent.ɵfac = function ToastHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastHeaderComponent)(ɵɵdirectiveInject(ToastComponent, 8));
};
_ToastHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastHeaderComponent,
  selectors: [["c-toast-header"]],
  hostVars: 2,
  hostBindings: function ToastHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("toast-header", ctx.toastHeaderClass);
    }
  },
  inputs: {
    closeButton: "closeButton"
  },
  exportAs: ["cToastHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [["aria-label", "close", "cButtonClose", "", 1, "ms-auto", 3, "cToastClose", "style"], ["aria-label", "close", "cButtonClose", "", 1, "ms-auto", 3, "cToastClose"]],
  template: function ToastHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0);
      ɵɵprojection(1);
      ɵɵtemplate(2, ToastHeaderComponent_Conditional_2_Template, 1, 4, "button", 0);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(ctx.closeButton ? 2 : -1);
    }
  },
  dependencies: [ToastCloseDirective, ButtonCloseDirective],
  encapsulation: 2
});
var ToastHeaderComponent = _ToastHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastHeaderComponent, [{
    type: Component,
    args: [{
      selector: "c-toast-header",
      exportAs: "cToastHeader",
      standalone: true,
      imports: [ToastCloseDirective, ButtonCloseDirective],
      template: '<ng-container>\n  <ng-content />\n  @if (closeButton) {\n    <button [cToastClose]="toast" [style]="{outline: 0}" aria-label="close" cButtonClose class="ms-auto"></button>\n  }\n</ng-container>\n'
    }]
  }], () => [{
    type: ToastComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    closeButton: [{
      type: Input
    }],
    toastHeaderClass: [{
      type: HostBinding,
      args: ["class.toast-header"]
    }]
  });
})();
var _ToasterHostDirective = class _ToasterHostDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
_ToasterHostDirective.ɵfac = function ToasterHostDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToasterHostDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
_ToasterHostDirective.ɵdir = ɵɵdefineDirective({
  type: _ToasterHostDirective,
  selectors: [["", "cToasterHost", ""]],
  exportAs: ["cToasterHost"],
  standalone: true
});
var ToasterHostDirective = _ToasterHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cToasterHost]",
      exportAs: "cToasterHost",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var ToasterPlacement;
(function(ToasterPlacement2) {
  ToasterPlacement2["Static"] = "static";
  ToasterPlacement2["TopStart"] = "top-start";
  ToasterPlacement2["TopCenter"] = "top-center";
  ToasterPlacement2["TopEnd"] = "top-end";
  ToasterPlacement2["MiddleStart"] = "middle-start";
  ToasterPlacement2["MiddleCenter"] = "middle-center";
  ToasterPlacement2["MiddleEnd"] = "middle-end";
  ToasterPlacement2["BottomStart"] = "bottom-start";
  ToasterPlacement2["BottomCenter"] = "bottom-center";
  ToasterPlacement2["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
var _destroyRef11;
var _ToasterComponent = class _ToasterComponent {
  constructor(hostElement, renderer, toasterService) {
    __privateAdd(this, _destroyRef11);
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.toasterService = toasterService;
    __privateSet(this, _destroyRef11, inject(DestroyRef));
    this.placements = Object.values(ToasterPlacement);
    this.toastsDynamic = [];
    this.placement = ToasterPlacement.TopEnd;
    this.position = "absolute";
  }
  get hostClasses() {
    return {
      toaster: true,
      "toast-container": true,
      [`position-${this.position}`]: !!this.position,
      "top-0": this.placement.includes("top"),
      "top-50": this.placement.includes("middle"),
      "bottom-0": this.placement.includes("bottom"),
      "start-0": this.placement.includes("start"),
      "start-50": this.placement.includes("center"),
      "end-0": this.placement.includes("end"),
      "translate-middle-x": this.placement.includes("center") && !this.placement.includes("middle"),
      "translate-middle-y": this.placement.includes("middle") && !this.placement.includes("center"),
      "translate-middle": this.placement.includes("middle") && this.placement.includes("center")
    };
  }
  ngOnInit() {
    this.stateToasterSubscribe();
  }
  ngAfterContentChecked() {
    this.toasts = this.contentToasts;
  }
  addToast(toast, props, options) {
    const componentRef = this.toasterHost.viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.instance[key] = value;
    }
    componentRef.instance["placement"] = this.placement;
    componentRef.instance["dynamic"] = true;
    componentRef.instance["index"] = index;
    componentRef.instance["visible"] = true;
    componentRef.instance["visibleChange"].emit(true);
    componentRef.changeDetectorRef?.detectChanges();
    return componentRef;
  }
  removeToast(state2) {
    this.toastsDynamic?.forEach((item) => {
      if (state2.toast?.dynamic && item.instance === state2.toast) {
        item.instance.visible = false;
        item.instance["visibleChange"].emit(false);
        item.destroy();
      }
    });
    this.toasts?.forEach((item) => {
      if (state2.toast && item.element.nativeElement === state2.toast.hostElement.nativeElement) {
        if (!state2.toast.dynamic) {
          state2.toast.visible = false;
        }
      }
    });
  }
  stateToasterSubscribe() {
    this.toasterService.toasterState$.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef11))).subscribe((state2) => {
      if (state2.show === false) {
        this.removeToast(state2);
      }
      if (state2.show === true && state2.toast?.dynamic === void 0) {
      }
    });
  }
};
_destroyRef11 = new WeakMap();
_ToasterComponent.ɵfac = function ToasterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToasterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ToasterService));
};
_ToasterComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToasterComponent,
  selectors: [["c-toaster"]],
  contentQueries: function ToasterComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ToastComponent, 4, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentToasts = _t);
    }
  },
  viewQuery: function ToasterComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ToasterHostDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toasterHost = _t.first);
    }
  },
  hostAttrs: [1, "toaster", "toast-container"],
  hostVars: 2,
  hostBindings: function ToasterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    placement: "placement",
    position: "position"
  },
  exportAs: ["cToaster"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [["cToasterHost", ""]],
  template: function ToasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ToasterComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      ɵɵprojection(1, 0, ["cToasterHost", ""]);
    }
  },
  dependencies: [ToasterHostDirective],
  encapsulation: 2
});
var ToasterComponent = _ToasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterComponent, [{
    type: Component,
    args: [{
      selector: "c-toaster",
      exportAs: "cToaster",
      standalone: true,
      imports: [ToasterHostDirective],
      host: {
        class: "toaster toast-container"
      },
      template: "<ng-template cToasterHost />\n<ng-content cToasterHost />\n"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ToasterService
  }], {
    placement: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    toasterHost: [{
      type: ViewChild,
      args: [ToasterHostDirective, {
        static: true
      }]
    }],
    contentToasts: [{
      type: ContentChildren,
      args: [ToastComponent, {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ToastModule = class _ToastModule {
};
_ToastModule.ɵfac = function ToastModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastModule)();
};
_ToastModule.ɵmod = ɵɵdefineNgModule({
  type: _ToastModule,
  imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
  exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
});
_ToastModule.ɵinj = ɵɵdefineInjector({
  providers: [ToasterService]
});
var ToastModule = _ToastModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective],
      providers: [ToasterService],
      exports: [ToastBodyComponent, ToastComponent, ToastCloseDirective, ToastHeaderComponent, ToasterComponent, ToasterHostDirective]
    }]
  }], null, null);
})();
var _TooltipComponent = class _TooltipComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.content = "";
    this.visible = false;
    this.role = "tooltip";
  }
  get hostClasses() {
    return {
      tooltip: true,
      fade: true,
      show: this.visible,
      "bs-tooltip-auto": true
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateView(this.content);
    });
  }
  ngOnChanges(changes) {
    if (changes["content"]) {
      setTimeout(() => {
        this.updateView(this.content);
      });
    }
  }
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.viewContainerRef?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
  updateView(content) {
    this.clear();
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
};
_TooltipComponent.ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TooltipComponent)(ɵɵdirectiveInject(Renderer2));
};
_TooltipComponent.ɵcmp = ɵɵdefineComponent({
  type: _TooltipComponent,
  selectors: [["c-tooltip"]],
  viewQuery: function TooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c13, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  hostAttrs: [1, "tooltip", "fade", "bs-tooltip-auto"],
  hostVars: 4,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: "content",
    visible: "visible",
    id: "id",
    role: "role"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 0,
  consts: [["tooltipTemplate", ""], ["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelement(1, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵelementContainer(3, null, 0);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
  },
  encapsulation: 2
});
var TooltipComponent = _TooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "c-tooltip",
      standalone: true,
      host: {
        class: "tooltip fade bs-tooltip-auto"
      },
      template: '<ng-container>\n  <div class="tooltip-arrow" data-popper-arrow></div>\n  <div class="tooltip-inner">\n    <ng-container #tooltipTemplate />\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: Renderer2
  }], {
    content: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.id"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["tooltipTemplate", {
        read: ViewContainerRef
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _destroyRef12;
var _TooltipDirective = class _TooltipDirective {
  constructor(document2, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef, intersectionService) {
    __privateAdd(this, _destroyRef12);
    this.document = document2;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.viewContainerRef = viewContainerRef;
    this.listenersService = listenersService;
    this.changeDetectorRef = changeDetectorRef;
    this.intersectionService = intersectionService;
    this.content = input(void 0, {
      alias: "cTooltip"
    });
    this.contentEffect = effect(() => {
      if (this.content()) {
        this.destroyTooltipElement();
      }
    });
    this.popperOptions = input({}, {
      alias: "cTooltipOptions"
    });
    this.popperOptionsEffect = effect(() => {
      this._popperOptions = __spreadValues(__spreadProps(__spreadValues({}, this._popperOptions), {
        placement: this.placement()
      }), this.popperOptions());
    });
    this.popperOptionsComputed = computed(() => {
      return __spreadValues({
        placement: this.placement()
      }, this._popperOptions);
    });
    this.placement = input("top", {
      alias: "cTooltipPlacement"
    });
    this.reference = input(void 0, {
      alias: "cTooltipRef"
    });
    this.referenceRef = computed(() => this.reference()?.elementRef ?? this.hostElement);
    this.trigger = input("hover", {
      alias: "cTooltipTrigger"
    });
    this.visible = model(false, {
      alias: "cTooltipVisible"
    });
    this.visibleEffect = effect(() => {
      this.visible() ? this.addTooltipElement() : this.removeTooltipElement();
    });
    this._popperOptions = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 5]
        }
      }]
    };
    __privateSet(this, _destroyRef12, inject(DestroyRef));
  }
  get ariaDescribedBy() {
    return this.tooltipId ? this.tooltipId : null;
  }
  ngAfterViewInit() {
    this.intersectionServiceSubscribe();
  }
  ngOnDestroy() {
    this.clearListeners();
    this.destroyTooltipElement();
  }
  ngOnInit() {
    this.setListeners();
  }
  setListeners() {
    const config = {
      hostElement: this.hostElement,
      trigger: this.trigger(),
      callbackToggle: () => {
        this.visible.set(!this.visible());
      },
      callbackOff: () => {
        this.visible.set(false);
      },
      callbackOn: () => {
        this.visible.set(true);
      }
    };
    this.listenersService.setListeners(config);
  }
  clearListeners() {
    this.listenersService.clearListeners();
  }
  intersectionServiceSubscribe() {
    this.intersectionService.createIntersectionObserver(this.referenceRef());
    this.intersectionService.intersecting$.pipe(filter((next) => next.hostElement === this.referenceRef()), debounceTime(100), finalize(() => {
      this.intersectionService.unobserve(this.referenceRef());
    }), takeUntilDestroyed(__privateGet(this, _destroyRef12))).subscribe((next) => {
      this.visible.set(next.isIntersecting ? this.visible() : false);
    });
  }
  getUID(prefix) {
    let uid = prefix ?? "random-id";
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1e6).toString(10)}`;
    } while (this.document.getElementById(uid));
    return uid;
  }
  createTooltipElement() {
    if (!this.tooltipRef) {
      this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
    }
  }
  destroyTooltipElement() {
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    this.tooltipRef = void 0;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }
  addTooltipElement() {
    if (!this.content()) {
      this.destroyTooltipElement();
      return;
    }
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }
    this.tooltipId = this.getUID("tooltip");
    this.tooltipRef.instance.id = this.tooltipId;
    this.tooltipRef.instance.content = this.content() ?? "";
    this.tooltip = this.tooltipRef.location.nativeElement;
    this.renderer.addClass(this.tooltip, "d-none");
    this.renderer.addClass(this.tooltip, "fade");
    this.popperInstance?.destroy();
    this.viewContainerRef.insert(this.tooltipRef.hostView);
    this.renderer.appendChild(this.document.body, this.tooltip);
    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, __spreadValues({}, this.popperOptionsComputed()));
    if (!this.visible()) {
      this.removeTooltipElement();
      return;
    }
    this.renderer.removeClass(this.tooltip, "d-none");
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.tooltipRef && (this.tooltipRef.instance.visible = this.visible());
      this.popperInstance?.forceUpdate();
      this.changeDetectorRef?.markForCheck();
    }, 100);
  }
  removeTooltipElement() {
    this.tooltipId = "";
    if (!this.tooltipRef) {
      return;
    }
    this.tooltipRef.instance.visible = false;
    this.tooltipRef.instance.id = void 0;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
};
_destroyRef12 = new WeakMap();
_TooltipDirective.ɵfac = function TooltipDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TooltipDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ListenersService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntersectionService));
};
_TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: _TooltipDirective,
  selectors: [["", "cTooltip", ""]],
  hostVars: 1,
  hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-describedby", ctx.ariaDescribedBy);
    }
  },
  inputs: {
    content: [1, "cTooltip", "content"],
    popperOptions: [1, "cTooltipOptions", "popperOptions"],
    placement: [1, "cTooltipPlacement", "placement"],
    reference: [1, "cTooltipRef", "reference"],
    trigger: [1, "cTooltipTrigger", "trigger"],
    visible: [1, "cTooltipVisible", "visible"]
  },
  outputs: {
    visible: "cTooltipVisibleChange"
  },
  exportAs: ["cTooltip"],
  standalone: true,
  features: [ɵɵProvidersFeature([ListenersService, IntersectionService])]
});
var TooltipDirective = _TooltipDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[cTooltip]",
      exportAs: "cTooltip",
      providers: [ListenersService, IntersectionService],
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: ListenersService
  }, {
    type: ChangeDetectorRef
  }, {
    type: IntersectionService
  }], {
    ariaDescribedBy: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }]
  });
})();
var _TooltipModule = class _TooltipModule {
};
_TooltipModule.ɵfac = function TooltipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TooltipModule)();
};
_TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: _TooltipModule,
  imports: [TooltipComponent, TooltipDirective],
  exports: [TooltipComponent, TooltipDirective]
});
_TooltipModule.ɵinj = ɵɵdefineInjector({});
var TooltipModule = _TooltipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      exports: [TooltipComponent, TooltipDirective],
      imports: [TooltipComponent, TooltipDirective]
    }]
  }], null, null);
})();
var _WidgetStatAComponent = class _WidgetStatAComponent {
  constructor() {
    this.templates = {};
  }
  get hostClasses() {
    return {
      card: true,
      [`bg-${this.color}`]: !!this.color,
      "text-white": !!this.color
    };
  }
  get bodyClasses() {
    return {
      "pb-0": true,
      "d-flex": true,
      "justify-content-between": true,
      "align-items-start": true
    };
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatAComponent.ɵfac = function WidgetStatAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatAComponent)();
};
_WidgetStatAComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatAComponent,
  selectors: [["c-widget-stat-a"]],
  contentQueries: function WidgetStatAComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostAttrs: [1, "card"],
  hostVars: 2,
  hostBindings: function WidgetStatAComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatA"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c15,
  decls: 15,
  vars: 5,
  consts: [["defaultWidgetTitleTemplate", ""], ["defaultWidgetValueTemplate", ""], ["defaultWidgetChartTemplate", ""], ["defaultWidgetActionTemplate", ""], [3, "ngClass"], [1, "fs-4", "fw-semibold"], [4, "ngTemplateOutlet"]],
  template: function WidgetStatAComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c14);
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "c-card-body", 4)(2, "div");
      ɵɵtemplate(3, WidgetStatAComponent_Conditional_3_Template, 2, 1, "div", 5)(4, WidgetStatAComponent_Conditional_4_Template, 2, 1, "div");
      ɵɵelementEnd();
      ɵɵtemplate(5, WidgetStatAComponent_ng_container_5_Template, 1, 0, "ng-container", 6);
      ɵɵelementEnd();
      ɵɵtemplate(6, WidgetStatAComponent_ng_container_6_Template, 1, 0, "ng-container", 6);
      ɵɵelementContainerEnd();
      ɵɵtemplate(7, WidgetStatAComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(9, WidgetStatAComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, WidgetStatAComponent_ng_template_11_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(13, WidgetStatAComponent_ng_template_13_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultWidgetChartTemplate_r4 = ɵɵreference(12);
      const defaultWidgetActionTemplate_r5 = ɵɵreference(14);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.bodyClasses);
      ɵɵadvance(2);
      ɵɵconditional(!!ctx.value || (ctx.templates == null ? null : ctx.templates.widgetValueTemplate) ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(!!ctx.title || (ctx.templates == null ? null : ctx.templates.widgetTitleTemplate) ? 4 : -1);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetActionTemplate) || defaultWidgetActionTemplate_r5);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetChartTemplate) || defaultWidgetChartTemplate_r4);
    }
  },
  dependencies: [CardBodyComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatAComponent = _WidgetStatAComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatAComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-a",
      exportAs: "cWidgetStatA",
      imports: [CardBodyComponent, NgClass, NgTemplateOutlet],
      standalone: true,
      host: {
        class: "card"
      },
      template: '<ng-container>\n  <c-card-body [ngClass]="bodyClasses">\n    <div>\n      @if (!!value || templates?.widgetValueTemplate) {\n        <div class="fs-4 fw-semibold">\n          <ng-container *ngTemplateOutlet="templates?.widgetValueTemplate || defaultWidgetValueTemplate" />\n        </div>\n      }\n      @if (!!title || templates?.widgetTitleTemplate) {\n        <div>\n          <ng-container *ngTemplateOutlet="templates?.widgetTitleTemplate || defaultWidgetTitleTemplate" />\n        </div>\n      }\n    </div>\n    <ng-container *ngTemplateOutlet="templates?.widgetActionTemplate || defaultWidgetActionTemplate" />\n  </c-card-body>\n  <ng-container *ngTemplateOutlet="templates?.widgetChartTemplate || defaultWidgetChartTemplate" />\n</ng-container>\n\n<ng-template #defaultWidgetTitleTemplate>\n  {{ title }}\n</ng-template>\n\n<ng-template #defaultWidgetValueTemplate>\n  {{ value }}\n</ng-template>\n\n<ng-template #defaultWidgetChartTemplate>\n  <ng-content select=".chart-wrapper" />\n</ng-template>\n\n<ng-template #defaultWidgetActionTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatBComponent = class _WidgetStatBComponent extends CardComponent {
  constructor() {
    super();
    this.title = input();
    this.text = input();
    this.value = input();
    this.inverse = input(false, {
      transform: booleanAttribute
    });
  }
  get hostClasses() {
    return {
      card: true,
      [`bg-${this.color()}`]: !!this.color(),
      [`text-${this.textColor()}`]: !!this.textColor(),
      "text-white": this.inverse()
    };
  }
};
_WidgetStatBComponent.ɵfac = function WidgetStatBComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatBComponent)();
};
_WidgetStatBComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatBComponent,
  selectors: [["c-widget-stat-b"]],
  hostAttrs: [1, "card"],
  hostVars: 2,
  hostBindings: function WidgetStatBComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    title: [1, "title"],
    text: [1, "text"],
    value: [1, "value"],
    inverse: [1, "inverse"]
  },
  exportAs: ["cWidgetStatB"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [[1, "fs-4", "fw-semibold"], [3, "ngClass"]],
  template: function WidgetStatBComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body");
      ɵɵtemplate(1, WidgetStatBComponent_Conditional_1_Template, 2, 1, "div", 0)(2, WidgetStatBComponent_Conditional_2_Template, 2, 1, "div");
      ɵɵprojection(3);
      ɵɵtemplate(4, WidgetStatBComponent_Conditional_4_Template, 2, 2, "small", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(!!ctx.value() ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(!!ctx.title() ? 2 : -1);
      ɵɵadvance(2);
      ɵɵconditional(ctx.text() ? 4 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass],
  encapsulation: 2
});
var WidgetStatBComponent = _WidgetStatBComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatBComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-b",
      exportAs: "cWidgetStatB",
      standalone: true,
      imports: [CardBodyComponent, NgClass],
      host: {
        class: "card"
      },
      template: `<c-card-body>
  @if (!!value()) {
    <div class="fs-4 fw-semibold">{{ value() }}</div>
  }
  @if (!!title()) {
    <div>{{ title() }}</div>
  }
  <ng-content />
  @if (text()) {
    <small [ngClass]="inverse() ? 'text-white text-opacity-75' : 'text-body-secondary'">
      {{ text() }}
    </small>
  }
</c-card-body>
`
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatCComponent = class _WidgetStatCComponent extends CardComponent {
  constructor() {
    super();
    this.inverse = false;
    this.templates = {};
  }
  get hostExtendedClass() {
    return {
      "text-white": this.inverse
    };
  }
  get titleClasses() {
    return {
      "text-body-secondary": !this.inverse,
      "text-white": this.inverse,
      "text-opacity-75": this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  get valueClasses() {
    return __spreadProps(__spreadValues({
      "fs-4": !this.textColor,
      "fw-semibold": true
    }, this.titleClasses), {
      "text-opacity-75": false
    });
  }
  get iconClasses() {
    return __spreadValues({
      "mb-4": !this.textColor,
      "text-end": true
    }, this.titleClasses);
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatCComponent.ɵfac = function WidgetStatCComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatCComponent)();
};
_WidgetStatCComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatCComponent,
  selectors: [["c-widget-stat-c"]],
  contentQueries: function WidgetStatCComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostVars: 2,
  hostBindings: function WidgetStatCComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostExtendedClass);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    value: "value",
    inverse: [2, "inverse", "inverse", booleanAttribute]
  },
  exportAs: ["cWidgetStatC"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 9,
  vars: 4,
  consts: [["defaultWidgetIconTemplate", ""], ["defaultWidgetProgressTemplate", ""], [3, "ngClass"], [4, "ngTemplateOutlet"]],
  template: function WidgetStatCComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body");
      ɵɵtemplate(1, WidgetStatCComponent_Conditional_1_Template, 2, 2, "div", 2)(2, WidgetStatCComponent_Conditional_2_Template, 2, 2, "div", 2)(3, WidgetStatCComponent_Conditional_3_Template, 2, 2, "div", 2)(4, WidgetStatCComponent_Conditional_4_Template, 1, 1, "ng-container");
      ɵɵelementEnd();
      ɵɵtemplate(5, WidgetStatCComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, WidgetStatCComponent_ng_template_7_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.icon || (ctx.templates == null ? null : ctx.templates.widgetIconTemplate) ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(!!ctx.value ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(!!ctx.title ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional((ctx.templates == null ? null : ctx.templates.widgetProgressTemplate) ? 4 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatCComponent = _WidgetStatCComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatCComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-c",
      exportAs: "cWidgetStatC",
      standalone: true,
      imports: [CardBodyComponent, NgClass, NgTemplateOutlet],
      template: '<c-card-body>\n  @if (icon || templates?.widgetIconTemplate) {\n    <div [ngClass]="iconClasses">\n      <ng-container *ngTemplateOutlet="templates?.widgetIconTemplate || defaultWidgetIconTemplate" />\n    </div>\n  }\n  @if (!!value) {\n    <div [ngClass]="valueClasses">\n      {{ value }}\n    </div>\n  }\n  @if (!!title) {\n    <div [ngClass]="titleClasses">\n      {{ title }}\n    </div>\n  }\n  @if (templates?.widgetProgressTemplate) {\n    <ng-container *ngTemplateOutlet="templates?.widgetProgressTemplate || defaultWidgetProgressTemplate" />\n  }\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{ icon }}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content />\n</ng-template>\n'
    }]
  }], () => [], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    inverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostExtendedClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatDComponent = class _WidgetStatDComponent {
  get hostClasses() {
    return {
      card: true
    };
  }
  get headerClasses() {
    return {
      "position-relative": true,
      "d-flex": true,
      "justify-content-center": true,
      "align-items-center": true,
      [`bg-${this.color}`]: this.color
    };
  }
};
_WidgetStatDComponent.ɵfac = function WidgetStatDComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatDComponent)();
};
_WidgetStatDComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatDComponent,
  selectors: [["c-widget-stat-d"]],
  hostAttrs: [1, "card"],
  hostVars: 2,
  hostBindings: function WidgetStatDComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    values: "values"
  },
  exportAs: ["cWidgetStatD"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 1,
  consts: [[3, "ngClass"], ["cRow", "", 1, "text-center"], [1, "vr"], [1, "fs-5", "fw-semibold"], [1, "text-uppercase", "text-body-secondary", "small"]],
  template: function WidgetStatDComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-header", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "c-card-body", 1);
      ɵɵrepeaterCreate(3, WidgetStatDComponent_For_4_Template, 6, 3, "c-col", null, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.headerClasses);
      ɵɵadvance(3);
      ɵɵrepeater(ctx.values);
    }
  },
  dependencies: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass],
  encapsulation: 2
});
var WidgetStatDComponent = _WidgetStatDComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatDComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-d",
      exportAs: "cWidgetStatD",
      standalone: true,
      imports: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass],
      host: {
        class: "card"
      },
      template: '<c-card-header [ngClass]="headerClasses">\n  <ng-content />\n</c-card-header>\n<c-card-body cRow class="text-center">\n  @for (item of values; track item; let i = $index) {\n    @if (i % 2 !== 0) {\n      <div class="vr"></div>\n    }\n    <c-col>\n      <div class="fs-5 fw-semibold">{{ item.value }}</div>\n      <div class="text-uppercase text-body-secondary small">{{ item.title }}</div>\n    </c-col>\n  }\n</c-card-body>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    values: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetStatEComponent = class _WidgetStatEComponent extends CardComponent {
  constructor() {
    super();
  }
  get titleClasses() {
    return {
      "text-body-secondary": !this.textColor,
      "small": true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
};
_WidgetStatEComponent.ɵfac = function WidgetStatEComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatEComponent)();
};
_WidgetStatEComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatEComponent,
  selectors: [["c-widget-stat-e"]],
  inputs: {
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatE"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [[1, "text-center"], [3, "ngClass"], [1, "fs-6", "fw-semibold", "py-3"]],
  template: function WidgetStatEComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "c-card-body", 0);
      ɵɵtemplate(1, WidgetStatEComponent_Conditional_1_Template, 2, 2, "div", 1)(2, WidgetStatEComponent_Conditional_2_Template, 2, 1, "div", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(!!ctx.title ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(!!ctx.value ? 2 : -1);
    }
  },
  dependencies: [CardBodyComponent, NgClass],
  encapsulation: 2
});
var WidgetStatEComponent = _WidgetStatEComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatEComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-e",
      exportAs: "cWidgetStatE",
      standalone: true,
      imports: [CardBodyComponent, NgClass],
      template: '<c-card-body class="text-center">\n  @if (!!title) {\n    <div [ngClass]="titleClasses">{{ title }}</div>\n  }\n  @if (!!value) {\n    <div class="fs-6 fw-semibold py-3">{{ value }}</div>\n  }\n  <ng-content />\n</c-card-body>\n'
    }]
  }], () => [], {
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var _WidgetStatFComponent = class _WidgetStatFComponent {
  constructor() {
    this.padding = false;
    this.templates = {};
  }
  get hostClasses() {
    return {
      card: true
    };
  }
  get cardBodyClasses() {
    return {
      "d-flex": true,
      "align-items-center": true,
      "p-0": !this.padding
    };
  }
  get iconClasses() {
    return {
      "me-3": !this.textColor,
      "text-white": true,
      [`bg-${this.color}`]: !!this.color,
      "p-3": this.padding,
      "p-4": !this.padding
    };
  }
  get titleClasses() {
    return {
      "text-body-secondary": !this.textColor,
      small: true,
      "text-uppercase": true,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  get valueClasses() {
    return {
      "fs-6": !this.textColor,
      "fw-semibold": true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }
  ngAfterContentInit() {
    this.contentTemplates.forEach((child) => {
      this.templates[child.id] = child.templateRef;
    });
  }
};
_WidgetStatFComponent.ɵfac = function WidgetStatFComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetStatFComponent)();
};
_WidgetStatFComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetStatFComponent,
  selectors: [["c-widget-stat-f"]],
  contentQueries: function WidgetStatFComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateIdDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplates = _t);
    }
  },
  hostAttrs: [1, "card"],
  hostVars: 2,
  hostBindings: function WidgetStatFComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    color: "color",
    textColor: "textColor",
    footer: "footer",
    icon: "icon",
    padding: [2, "padding", "padding", booleanAttribute],
    title: "title",
    value: "value"
  },
  exportAs: ["cWidgetStatB"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 14,
  vars: 8,
  consts: [["defaultWidgetIconTemplate", ""], ["defaultFooterIconTemplate", ""], [3, "ngClass"], [4, "ngTemplateOutlet"]],
  template: function WidgetStatFComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "c-card-body", 2)(2, "div", 2);
      ɵɵtemplate(3, WidgetStatFComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div")(5, "div", 2);
      ɵɵtext(6);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div", 2);
      ɵɵtext(8);
      ɵɵelementEnd()()();
      ɵɵtemplate(9, WidgetStatFComponent_Conditional_9_Template, 2, 1, "c-card-footer");
      ɵɵelementContainerEnd();
      ɵɵtemplate(10, WidgetStatFComponent_ng_template_10_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, WidgetStatFComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultWidgetIconTemplate_r3 = ɵɵreference(11);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.cardBodyClasses);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.iconClasses);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", (ctx.templates == null ? null : ctx.templates.widgetIconTemplate) || defaultWidgetIconTemplate_r3);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.valueClasses);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.value);
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.titleClasses);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.title);
      ɵɵadvance();
      ɵɵconditional(ctx.footer || (ctx.templates == null ? null : ctx.templates.widgetFooterTemplate) ? 9 : -1);
    }
  },
  dependencies: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet],
  encapsulation: 2
});
var WidgetStatFComponent = _WidgetStatFComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetStatFComponent, [{
    type: Component,
    args: [{
      selector: "c-widget-stat-f",
      exportAs: "cWidgetStatB",
      standalone: true,
      imports: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet],
      host: {
        class: "card"
      },
      template: '<ng-container>\n  <c-card-body [ngClass]="cardBodyClasses">\n    <div [ngClass]="iconClasses">\n      <ng-container *ngTemplateOutlet="templates?.widgetIconTemplate || defaultWidgetIconTemplate" />\n    </div>\n    <div>\n      <div [ngClass]="valueClasses">{{ value }}</div>\n      <div [ngClass]="titleClasses">{{ title }}</div>\n    </div>\n  </c-card-body>\n  @if (footer || templates?.widgetFooterTemplate) {\n    <c-card-footer>\n      <ng-container *ngTemplateOutlet="templates?.widgetFooterTemplate || defaultFooterIconTemplate" />\n    </c-card-footer>\n  }\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{ icon }}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{ footer }}</span>\n</ng-template>\n'
    }]
  }], null, {
    color: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    padding: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contentTemplates: [{
      type: ContentChildren,
      args: [TemplateIdDirective, {
        descendants: true
      }]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _WidgetModule = class _WidgetModule {
};
_WidgetModule.ɵfac = function WidgetModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetModule)();
};
_WidgetModule.ɵmod = ɵɵdefineNgModule({
  type: _WidgetModule,
  imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
  exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
});
_WidgetModule.ɵinj = ɵɵdefineInjector({});
var WidgetModule = _WidgetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetModule, [{
    type: NgModule,
    args: [{
      imports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent],
      exports: [WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent]
    }]
  }], null, null);
})();
export {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  AccordionModule,
  AlertComponent,
  AlertHeadingDirective,
  AlertLinkDirective,
  AlertModule,
  AlignDirective,
  AvatarComponent,
  AvatarModule,
  BackdropService,
  BadgeComponent,
  BadgeModule,
  BgColorDirective,
  BorderDirective,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbModule,
  BreadcrumbRouterComponent,
  BreadcrumbRouterService,
  BreakpointInfix,
  ButtonCloseDirective,
  ButtonDirective,
  ButtonGroupComponent,
  ButtonGroupModule,
  ButtonModule,
  ButtonToolbarComponent,
  CalloutComponent,
  CalloutModule,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderActionsComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardImgOverlayComponent,
  CardLinkDirective,
  CardModule,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselModule,
  ClassToggleService,
  ColComponent,
  ColDirective,
  CollapseDirective,
  CollapseModule,
  ColorModeService,
  ContainerComponent,
  DropdownCloseDirective,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownItemPlainDirective,
  DropdownMenuDirective,
  DropdownModule,
  DropdownService,
  DropdownToggleDirective,
  ElementRefDirective,
  FooterComponent,
  FooterModule,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  FormModule,
  FormSelectDirective,
  FormTextDirective,
  GridModule,
  GutterDirective,
  HeaderBrandComponent,
  HeaderComponent,
  HeaderDividerComponent,
  HeaderModule,
  HeaderNavComponent,
  HeaderTextComponent,
  HeaderTogglerDirective,
  HtmlAttributesDirective,
  ImgDirective,
  ImgModule,
  InMemoryStorageService,
  InputGroupComponent,
  InputGroupTextDirective,
  IntersectionService,
  ListGroupDirective,
  ListGroupItemDirective,
  ListGroupModule,
  ListenersService,
  LocalStorageService,
  ModalBodyComponent,
  ModalComponent,
  ModalContentComponent,
  ModalDialogComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalModule,
  ModalService,
  ModalTitleDirective,
  ModalToggleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  NavModule,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarModule,
  NavbarNavComponent,
  NavbarTextComponent,
  NavbarTogglerDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasModule,
  OffcanvasService,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective,
  PageItemComponent,
  PageItemDirective,
  PageLinkDirective,
  PaginationComponent,
  PaginationModule,
  PlaceholderAnimationDirective,
  PlaceholderDirective,
  PlaceholderModule,
  PopoverComponent,
  PopoverDirective,
  PopoverModule,
  ProgressBarComponent,
  ProgressBarDirective,
  ProgressComponent,
  ProgressModule,
  ProgressStackedComponent,
  RoundedDirective,
  RowComponent,
  RowDirective,
  ShadowOnScrollDirective,
  SharedModule,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarModule,
  SidebarNavComponent,
  SidebarNavHelper,
  SidebarService,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  SpinnerComponent,
  SpinnerModule,
  TabContentComponent,
  TabContentRefDirective,
  TabDirective,
  TabPaneComponent,
  TabPanelComponent,
  TabService,
  TableActiveDirective,
  TableColorDirective,
  TableDirective,
  TableModule,
  Tabs2Module,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  TabsModule,
  TabsService,
  TemplateIdDirective,
  TextBgColorDirective,
  TextColorDirective,
  ThemeDirective,
  ToastBodyComponent,
  ToastCloseDirective,
  ToastComponent,
  ToastHeaderComponent,
  ToastModule,
  ToasterComponent,
  ToasterHostDirective,
  ToasterPlacement,
  ToasterService,
  TooltipComponent,
  TooltipDirective,
  TooltipModule,
  UtilitiesModule,
  WidgetModule,
  WidgetStatAComponent,
  WidgetStatBComponent,
  WidgetStatCComponent,
  WidgetStatDComponent,
  WidgetStatEComponent,
  WidgetStatFComponent
};
//# sourceMappingURL=@coreui_angular.js.map

library angular2.src.platform.browser_common;

import "package:angular2/core.dart" show Provider;
import "package:angular2/src/facade/lang.dart" show IS_DART;
import "package:angular2/src/core/di.dart" show provide, Injector, OpaqueToken;
import "package:angular2/src/compiler/xhr.dart" show XHR;
import "package:angular2/core.dart"
    show
        PLATFORM_INITIALIZER,
        PLATFORM_DIRECTIVES,
        PLATFORM_PIPES,
        ComponentRef,
        ExceptionHandler,
        Reflector,
        RootRenderer,
        reflector,
        APPLICATION_COMMON_PROVIDERS,
        PLATFORM_COMMON_PROVIDERS;
import "package:angular2/common.dart"
    show COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS;
import "package:angular2/src/core/testability/testability.dart"
    show Testability;
import "package:angular2/src/platform/dom/dom_adapter.dart" show DOM;
import "package:angular2/src/platform/dom/events/dom_events.dart"
    show DomEventsPlugin;
import "package:angular2/src/platform/dom/events/key_events.dart"
    show KeyEventsPlugin;
import "package:angular2/src/platform/dom/dom_tokens.dart" show DOCUMENT;
import "package:angular2/src/platform/dom/dom_renderer.dart"
    show DomRootRenderer, DomRootRenderer_;
import "package:angular2/src/platform/dom/shared_styles_host.dart"
    show DomSharedStylesHost, SharedStylesHost;
import "package:angular2/src/animate/browser_details.dart" show BrowserDetails;
import "package:angular2/src/animate/animation_builder.dart"
    show AnimationBuilder;
import "browser/browser_adapter.dart" show BrowserDomAdapter;
import "package:angular2/src/platform/browser/testability.dart"
    show BrowserGetTestability;
import "package:angular2/src/platform/browser/xhr_cache.dart" show CachedXHR;
import "package:angular2/src/core/profile/wtf_init.dart" show wtfInit;
import "package:angular2/src/platform/dom/events/event_manager.dart"
    show EventManager, EVENT_MANAGER_PLUGINS;
import "package:angular2/src/platform/dom/events/hammer_gestures.dart"
    show HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerGesturesPlugin;
import "package:angular2/platform/common_dom.dart" show ELEMENT_PROBE_PROVIDERS;
export "package:angular2/src/platform/dom/dom_tokens.dart" show DOCUMENT;
export "package:angular2/src/platform/browser/title.dart" show Title;
export "package:angular2/platform/common_dom.dart"
    show
        ELEMENT_PROBE_PROVIDERS,
        ELEMENT_PROBE_PROVIDERS_PROD_MODE,
        inspectNativeElement,
        By;
export "browser/browser_adapter.dart" show BrowserDomAdapter;
export "package:angular2/src/platform/browser/tools/tools.dart"
    show enableDebugTools, disableDebugTools;
export "dom/events/hammer_gestures.dart"
    show HAMMER_GESTURE_CONFIG, HammerGestureConfig;

const BROWSER_PLATFORM_MARKER =
    /*@ts2dart_const*/ const OpaqueToken("BrowserPlatformMarker");
/**
 * A set of providers to initialize the Angular platform in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to [platform].
 */
const List<dynamic> BROWSER_PROVIDERS = const [
  /*@ts2dart_Provider*/ const Provider(BROWSER_PLATFORM_MARKER, useValue: true),
  PLATFORM_COMMON_PROVIDERS,
  /*@ts2dart_Provider*/ const Provider(PLATFORM_INITIALIZER,
      useValue: initDomAdapter, multi: true)
];
ExceptionHandler _exceptionHandler() {
  // !IS_DART is required because we must rethrow exceptions in JS,

  // but must not rethrow exceptions in Dart
  return new ExceptionHandler(DOM, !IS_DART);
}

dynamic _document() {
  return DOM.defaultDoc();
}

/**
 * A set of providers to initialize an Angular application in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to [PlatformRef.application].
 */
const List<dynamic> BROWSER_APP_COMMON_PROVIDERS =
    /*@ts2dart_const*/ const [
  APPLICATION_COMMON_PROVIDERS,
  FORM_PROVIDERS,
  /* @ts2dart_Provider */ const Provider(PLATFORM_PIPES,
      useValue: COMMON_PIPES, multi: true),
  /* @ts2dart_Provider */ const Provider(PLATFORM_DIRECTIVES,
      useValue: COMMON_DIRECTIVES, multi: true),
  /* @ts2dart_Provider */ const Provider(ExceptionHandler,
      useFactory: _exceptionHandler, deps: const []),
  /* @ts2dart_Provider */ const Provider(DOCUMENT,
      useFactory: _document, deps: const []),
  /* @ts2dart_Provider */ const Provider(EVENT_MANAGER_PLUGINS,
      useClass: DomEventsPlugin, multi: true),
  /* @ts2dart_Provider */ const Provider(EVENT_MANAGER_PLUGINS,
      useClass: KeyEventsPlugin, multi: true),
  /* @ts2dart_Provider */ const Provider(EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin, multi: true),
  /* @ts2dart_Provider */ const Provider(HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig),
  /* @ts2dart_Provider */ const Provider(DomRootRenderer,
      useClass: DomRootRenderer_),
  /* @ts2dart_Provider */ const Provider(RootRenderer,
      useExisting: DomRootRenderer),
  /* @ts2dart_Provider */ const Provider(SharedStylesHost,
      useExisting: DomSharedStylesHost),
  DomSharedStylesHost,
  Testability,
  BrowserDetails,
  AnimationBuilder,
  EventManager,
  ELEMENT_PROBE_PROVIDERS
];
const List<dynamic> CACHED_TEMPLATE_PROVIDER =
    /*@ts2dart_const*/ const [const Provider(XHR, useClass: CachedXHR)];
initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
  wtfInit();
  BrowserGetTestability.init();
}

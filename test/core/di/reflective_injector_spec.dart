library angular2.test.core.di.reflective_injector_spec;

import "package:angular2/src/facade/lang.dart"
    show isBlank, stringify, isPresent;
import "package:angular2/src/facade/exceptions.dart"
    show BaseException, WrappedException;
import "package:angular2/testing_internal.dart"
    show describe, ddescribe, it, iit, expect, beforeEach;
import "package:angular2/core.dart"
    show
        provide,
        ReflectiveKey,
        ReflectiveInjector,
        Injector,
        Injectable,
        InjectMetadata,
        SelfMetadata,
        SkipSelfMetadata,
        Optional,
        Inject,
        Provider;
import "package:angular2/src/core/di/reflective_injector.dart"
    show
        ReflectiveInjector_,
        ReflectiveInjectorInlineStrategy,
        ReflectiveInjectorDynamicStrategy,
        ReflectiveProtoInjector;
import "package:angular2/src/core/di/metadata.dart" show DependencyMetadata;
import "package:angular2/src/core/di/reflective_provider.dart"
    show ResolvedReflectiveProvider_;

class CustomDependencyMetadata extends DependencyMetadata {}

class Engine {}

class BrokenEngine {
  BrokenEngine() {
    throw new BaseException("Broken Engine");
  }
}

class DashboardSoftware {}

@Injectable()
class Dashboard {
  Dashboard(DashboardSoftware software) {}
}

class TurboEngine extends Engine {}

@Injectable()
class Car {
  Engine engine;
  Car(Engine engine) {
    this.engine = engine;
  }
}

@Injectable()
class CarWithOptionalEngine {
  var engine;
  CarWithOptionalEngine(@Optional() Engine engine) {
    this.engine = engine;
  }
}

@Injectable()
class CarWithDashboard {
  Engine engine;
  Dashboard dashboard;
  CarWithDashboard(Engine engine, Dashboard dashboard) {
    this.engine = engine;
    this.dashboard = dashboard;
  }
}

@Injectable()
class SportsCar extends Car {
  Engine engine;
  SportsCar(Engine engine) : super(engine) {
    /* super call moved to initializer */;
  }
}

@Injectable()
class CarWithInject {
  Engine engine;
  CarWithInject(@Inject(TurboEngine) Engine engine) {
    this.engine = engine;
  }
}

@Injectable()
class CyclicEngine {
  CyclicEngine(Car car) {}
}

class NoAnnotations {
  NoAnnotations(secretDependency) {}
}

factoryFn(a) {}
main() {
  var dynamicProviders = [
    provide("provider0", useValue: 1),
    provide("provider1", useValue: 1),
    provide("provider2", useValue: 1),
    provide("provider3", useValue: 1),
    provide("provider4", useValue: 1),
    provide("provider5", useValue: 1),
    provide("provider6", useValue: 1),
    provide("provider7", useValue: 1),
    provide("provider8", useValue: 1),
    provide("provider9", useValue: 1),
    provide("provider10", useValue: 1)
  ];
  [
    {
      "strategy": "inline",
      "providers": [],
      "strategyClass": ReflectiveInjectorInlineStrategy
    },
    {
      "strategy": "dynamic",
      "providers": dynamicProviders,
      "strategyClass": ReflectiveInjectorDynamicStrategy
    }
  ].forEach((context) {
    ReflectiveInjector_ createInjector(List<dynamic> providers,
        [ReflectiveInjector parent = null]) {
      var resolvedProviders = ReflectiveInjector
          .resolve((new List.from(providers)..addAll(context["providers"])));
      if (isPresent(parent)) {
        return (parent.createChildFromResolved(resolvedProviders)
            as ReflectiveInjector_);
      } else {
        return (ReflectiveInjector.fromResolvedProviders(resolvedProviders)
            as ReflectiveInjector_);
      }
    }
    describe('''injector ${ context [ "strategy" ]}''', () {
      it("should use the right strategy", () {
        var injector = createInjector([]);
        expect(injector.internalStrategy)
            .toBeAnInstanceOf(context["strategyClass"]);
      });
      it("should instantiate a class without dependencies", () {
        var injector = createInjector([Engine]);
        var engine = injector.get(Engine);
        expect(engine).toBeAnInstanceOf(Engine);
      });
      it("should resolve dependencies based on type information", () {
        var injector = createInjector([Engine, Car]);
        var car = injector.get(Car);
        expect(car).toBeAnInstanceOf(Car);
        expect(car.engine).toBeAnInstanceOf(Engine);
      });
      it("should resolve dependencies based on @Inject annotation", () {
        var injector = createInjector([TurboEngine, Engine, CarWithInject]);
        var car = injector.get(CarWithInject);
        expect(car).toBeAnInstanceOf(CarWithInject);
        expect(car.engine).toBeAnInstanceOf(TurboEngine);
      });
      it("should throw when no type and not @Inject (class case)", () {
        expect(() => createInjector([NoAnnotations])).toThrowError(
            "Cannot resolve all parameters for 'NoAnnotations'(?). " +
                "Make sure that all the parameters are decorated with Inject or have valid type annotations " +
                "and that 'NoAnnotations' is decorated with Injectable.");
      });
      it("should throw when no type and not @Inject (factory case)", () {
        expect(() =>
                createInjector([provide("someToken", useFactory: factoryFn)]))
            .toThrowError("Cannot resolve all parameters for 'factoryFn'(?). " +
                "Make sure that all the parameters are decorated with Inject or have valid type annotations " +
                "and that 'factoryFn' is decorated with Injectable.");
      });
      it("should cache instances", () {
        var injector = createInjector([Engine]);
        var e1 = injector.get(Engine);
        var e2 = injector.get(Engine);
        expect(e1).toBe(e2);
      });
      it("should provide to a value", () {
        var injector =
            createInjector([provide(Engine, useValue: "fake engine")]);
        var engine = injector.get(Engine);
        expect(engine).toEqual("fake engine");
      });
      it("should provide to a factory", () {
        sportsCarFactory(e) {
          return new SportsCar(e);
        }
        var injector = createInjector([
          Engine,
          provide(Car, useFactory: sportsCarFactory, deps: [Engine])
        ]);
        var car = injector.get(Car);
        expect(car).toBeAnInstanceOf(SportsCar);
        expect(car.engine).toBeAnInstanceOf(Engine);
      });
      it("should throw when using a factory with more than 20 dependencies",
          () {
        factoryWithTooManyArgs() {
          return new Car(null);
        }
        var injector = createInjector([
          Engine,
          provide(Car, useFactory: factoryWithTooManyArgs, deps: [
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine,
            Engine
          ])
        ]);
        try {
          injector.get(Car);
          throw "Must throw";
        } catch (e, e_stack) {
          expect(e.message).toContain(
              '''Cannot instantiate \'Car\' because it has more than 20 dependencies''');
        }
      });
      it("should supporting provider to null", () {
        var injector = createInjector([provide(Engine, useValue: null)]);
        var engine = injector.get(Engine);
        expect(engine).toBeNull();
      });
      it("should provide to an alias", () {
        var injector = createInjector([
          Engine,
          provide(SportsCar, useClass: SportsCar),
          provide(Car, useExisting: SportsCar)
        ]);
        var car = injector.get(Car);
        var sportsCar = injector.get(SportsCar);
        expect(car).toBeAnInstanceOf(SportsCar);
        expect(car).toBe(sportsCar);
      });
      it("should support multiProviders", () {
        var injector = createInjector([
          Engine,
          /* @ts2dart_Provider */ const Provider(Car,
              useClass: SportsCar, multi: true),
          /* @ts2dart_Provider */ const Provider(Car,
              useClass: CarWithOptionalEngine, multi: true)
        ]);
        var cars = injector.get(Car);
        expect(cars.length).toEqual(2);
        expect(cars[0]).toBeAnInstanceOf(SportsCar);
        expect(cars[1]).toBeAnInstanceOf(CarWithOptionalEngine);
      });
      it("should support multiProviders that are created using useExisting",
          () {
        var injector = createInjector([
          Engine,
          SportsCar,
          /* @ts2dart_Provider */ const Provider(Car,
              useExisting: SportsCar, multi: true)
        ]);
        var cars = injector.get(Car);
        expect(cars.length).toEqual(1);
        expect(cars[0]).toBe(injector.get(SportsCar));
      });
      it("should throw when the aliased provider does not exist", () {
        var injector = createInjector([provide("car", useExisting: SportsCar)]);
        var e =
            '''No provider for ${ stringify ( SportsCar )}! (car -> ${ stringify ( SportsCar )})''';
        expect(() => injector.get("car")).toThrowError(e);
      });
      it("should handle forwardRef in useExisting", () {
        var injector = createInjector([
          provide("originalEngine", useClass: Engine),
          provide("aliasedEngine", useExisting: ("originalEngine" as dynamic))
        ]);
        expect(injector.get("aliasedEngine")).toBeAnInstanceOf(Engine);
      });
      it("should support overriding factory dependencies", () {
        var injector = createInjector([
          Engine,
          provide(Car, useFactory: (e) => new SportsCar(e), deps: [Engine])
        ]);
        var car = injector.get(Car);
        expect(car).toBeAnInstanceOf(SportsCar);
        expect(car.engine).toBeAnInstanceOf(Engine);
      });
      it("should support optional dependencies", () {
        var injector = createInjector([CarWithOptionalEngine]);
        var car = injector.get(CarWithOptionalEngine);
        expect(car.engine).toEqual(null);
      });
      it("should flatten passed-in providers", () {
        var injector = createInjector([
          [
            [Engine, Car]
          ]
        ]);
        var car = injector.get(Car);
        expect(car).toBeAnInstanceOf(Car);
      });
      it("should use the last provider when there are multiple providers for same token",
          () {
        var injector = createInjector([
          provide(Engine, useClass: Engine),
          provide(Engine, useClass: TurboEngine)
        ]);
        expect(injector.get(Engine)).toBeAnInstanceOf(TurboEngine);
      });
      it("should use non-type tokens", () {
        var injector = createInjector([provide("token", useValue: "value")]);
        expect(injector.get("token")).toEqual("value");
      });
      it("should throw when given invalid providers", () {
        expect(() => createInjector((["blah"] as dynamic))).toThrowError(
            "Invalid provider - only instances of Provider and Type are allowed, got: blah");
      });
      it("should provide itself", () {
        var parent = createInjector([]);
        var child = parent.resolveAndCreateChild([]);
        expect(child.get(Injector)).toBe(child);
      });
      it("should throw when no provider defined", () {
        var injector = createInjector([]);
        expect(() => injector.get("NonExisting"))
            .toThrowError("No provider for NonExisting!");
      });
      it("should show the full path when no provider", () {
        var injector = createInjector([CarWithDashboard, Engine, Dashboard]);
        expect(() => injector.get(CarWithDashboard)).toThrowError(
            '''No provider for DashboardSoftware! (${ stringify ( CarWithDashboard )} -> ${ stringify ( Dashboard )} -> DashboardSoftware)''');
      });
      it("should throw when trying to instantiate a cyclic dependency", () {
        var injector =
            createInjector([Car, provide(Engine, useClass: CyclicEngine)]);
        expect(() => injector.get(Car)).toThrowError(
            '''Cannot instantiate cyclic dependency! (${ stringify ( Car )} -> ${ stringify ( Engine )} -> ${ stringify ( Car )})''');
      });
      it("should show the full path when error happens in a constructor", () {
        var providers = ReflectiveInjector
            .resolve([Car, provide(Engine, useClass: BrokenEngine)]);
        var proto = new ReflectiveProtoInjector([providers[0], providers[1]]);
        var injector = new ReflectiveInjector_(proto);
        try {
          injector.get(Car);
          throw "Must throw";
        } catch (e, e_stack) {
          expect(e.message).toContain(
              '''Error during instantiation of Engine! (${ stringify ( Car )} -> Engine)''');
          expect(e.originalException is BaseException).toBeTruthy();
          expect(e.causeKey.token).toEqual(Engine);
        }
      });
      it("should provide context when throwing an exception ", () {
        var engineProvider = ReflectiveInjector
            .resolve([provide(Engine, useClass: BrokenEngine)])[0];
        var protoParent = new ReflectiveProtoInjector([engineProvider]);
        var carProvider = ReflectiveInjector.resolve([Car])[0];
        var protoChild = new ReflectiveProtoInjector([carProvider]);
        var parent =
            new ReflectiveInjector_(protoParent, null, () => "parentContext");
        var child =
            new ReflectiveInjector_(protoChild, parent, () => "childContext");
        try {
          child.get(Car);
          throw "Must throw";
        } catch (e, e_stack) {
          expect(e.context).toEqual("childContext");
        }
      });
      it("should instantiate an object after a failed attempt", () {
        var isBroken = true;
        var injector = createInjector([
          Car,
          provide(Engine,
              useFactory: (() => isBroken ? new BrokenEngine() : new Engine()))
        ]);
        expect(() => injector.get(Car)).toThrowError(new RegExp("Error"));
        isBroken = false;
        expect(injector.get(Car)).toBeAnInstanceOf(Car);
      });
      it("should support null values", () {
        var injector = createInjector([provide("null", useValue: null)]);
        expect(injector.get("null")).toBe(null);
      });
    });
    describe("child", () {
      it("should load instances from parent injector", () {
        var parent = ReflectiveInjector.resolveAndCreate([Engine]);
        var child = parent.resolveAndCreateChild([]);
        var engineFromParent = parent.get(Engine);
        var engineFromChild = child.get(Engine);
        expect(engineFromChild).toBe(engineFromParent);
      });
      it("should not use the child providers when resolving the dependencies of a parent provider",
          () {
        var parent = ReflectiveInjector.resolveAndCreate([Car, Engine]);
        var child = parent
            .resolveAndCreateChild([provide(Engine, useClass: TurboEngine)]);
        var carFromChild = child.get(Car);
        expect(carFromChild.engine).toBeAnInstanceOf(Engine);
      });
      it("should create new instance in a child injector", () {
        var parent = ReflectiveInjector.resolveAndCreate([Engine]);
        var child = parent
            .resolveAndCreateChild([provide(Engine, useClass: TurboEngine)]);
        var engineFromParent = parent.get(Engine);
        var engineFromChild = child.get(Engine);
        expect(engineFromParent).not.toBe(engineFromChild);
        expect(engineFromChild).toBeAnInstanceOf(TurboEngine);
      });
      it("should give access to parent", () {
        var parent = ReflectiveInjector.resolveAndCreate([]);
        var child = parent.resolveAndCreateChild([]);
        expect(child.parent).toBe(parent);
      });
    });
    describe("resolveAndInstantiate", () {
      it("should instantiate an object in the context of the injector", () {
        var inj = ReflectiveInjector.resolveAndCreate([Engine]);
        var car = inj.resolveAndInstantiate(Car);
        expect(car).toBeAnInstanceOf(Car);
        expect(car.engine).toBe(inj.get(Engine));
      });
      it("should not store the instantiated object in the injector", () {
        var inj = ReflectiveInjector.resolveAndCreate([Engine]);
        inj.resolveAndInstantiate(Car);
        expect(() => inj.get(Car)).toThrowError();
      });
    });
    describe("instantiate", () {
      it("should instantiate an object in the context of the injector", () {
        var inj = ReflectiveInjector.resolveAndCreate([Engine]);
        var car = inj.instantiateResolved(ReflectiveInjector.resolve([Car])[0]);
        expect(car).toBeAnInstanceOf(Car);
        expect(car.engine).toBe(inj.get(Engine));
      });
    });
    describe("depedency resolution", () {
      describe("@Self()", () {
        it("should return a dependency from self", () {
          var inj = ReflectiveInjector.resolveAndCreate([
            Engine,
            provide(Car, useFactory: (e) => new Car(e), deps: [
              [Engine, new SelfMetadata()]
            ])
          ]);
          expect(inj.get(Car)).toBeAnInstanceOf(Car);
        });
        it("should throw when not requested provider on self", () {
          var parent = ReflectiveInjector.resolveAndCreate([Engine]);
          var child = parent.resolveAndCreateChild([
            provide(Car, useFactory: (e) => new Car(e), deps: [
              [Engine, new SelfMetadata()]
            ])
          ]);
          expect(() => child.get(Car)).toThrowError(
              '''No provider for Engine! (${ stringify ( Car )} -> ${ stringify ( Engine )})''');
        });
      });
      describe("default", () {
        it("should not skip self", () {
          var parent = ReflectiveInjector.resolveAndCreate([Engine]);
          var child = parent.resolveAndCreateChild([
            provide(Engine, useClass: TurboEngine),
            provide(Car, useFactory: (e) => new Car(e), deps: [Engine])
          ]);
          expect(child.get(Car).engine).toBeAnInstanceOf(TurboEngine);
        });
      });
    });
    describe("resolve", () {
      it("should resolve and flatten", () {
        var providers = ReflectiveInjector.resolve([
          Engine,
          [BrokenEngine]
        ]);
        providers.forEach((b) {
          if (isBlank(b)) return;
          expect(b is ResolvedReflectiveProvider_).toBe(true);
        });
      });
      it("should support multi providers", () {
        var provider = ReflectiveInjector.resolve([
          /* @ts2dart_Provider */ const Provider(Engine,
              useClass: BrokenEngine, multi: true),
          /* @ts2dart_Provider */ const Provider(Engine,
              useClass: TurboEngine, multi: true)
        ])[0];
        expect(provider.key.token).toBe(Engine);
        expect(provider.multiProvider).toEqual(true);
        expect(provider.resolvedFactories.length).toEqual(2);
      });
      it("should support providers as hash", () {
        var provider = ReflectiveInjector.resolve([
          /* @ts2dart_Provider */ const Provider(Engine,
              useClass: BrokenEngine, multi: true),
          /* @ts2dart_Provider */ const Provider(Engine,
              useClass: TurboEngine, multi: true)
        ])[0];
        expect(provider.key.token).toBe(Engine);
        expect(provider.multiProvider).toEqual(true);
        expect(provider.resolvedFactories.length).toEqual(2);
      });
      it("should support multi providers with only one provider", () {
        var provider = ReflectiveInjector.resolve([
          /* @ts2dart_Provider */ const Provider(Engine,
              useClass: BrokenEngine, multi: true)
        ])[0];
        expect(provider.key.token).toBe(Engine);
        expect(provider.multiProvider).toEqual(true);
        expect(provider.resolvedFactories.length).toEqual(1);
      });
      it("should throw when mixing multi providers with regular providers", () {
        expect(() {
          ReflectiveInjector.resolve([
            /* @ts2dart_Provider */ const Provider(Engine,
                useClass: BrokenEngine, multi: true),
            Engine
          ]);
        }).toThrowErrorWith("Cannot mix multi providers and regular providers");
        expect(() {
          ReflectiveInjector.resolve([
            Engine,
            const Provider(Engine, useClass: BrokenEngine, multi: true)
          ]);
        }).toThrowErrorWith("Cannot mix multi providers and regular providers");
      });
      it("should resolve forward references", () {
        var providers = ReflectiveInjector.resolve([
          Engine,
          [provide(BrokenEngine, useClass: Engine)],
          provide(String, useFactory: () => "OK", deps: [Engine])
        ]);
        var engineProvider = providers[0];
        var brokenEngineProvider = providers[1];
        var stringProvider = providers[2];
        expect(engineProvider.resolvedFactories[0].factory() is Engine)
            .toBe(true);
        expect(brokenEngineProvider.resolvedFactories[0].factory() is Engine)
            .toBe(true);
        expect(stringProvider.resolvedFactories[0].dependencies[0].key)
            .toEqual(ReflectiveKey.get(Engine));
      });
      it("should support overriding factory dependencies with dependency annotations",
          () {
        var providers = ReflectiveInjector.resolve([
          provide("token", useFactory: (e) => "result", deps: [
            [new InjectMetadata("dep"), new CustomDependencyMetadata()]
          ])
        ]);
        var provider = providers[0];
        expect(provider.resolvedFactories[0].dependencies[0].key.token)
            .toEqual("dep");
        expect(provider.resolvedFactories[0].dependencies[0].properties)
            .toEqual([new CustomDependencyMetadata()]);
      });
      it("should allow declaring dependencies with flat arrays", () {
        var resolved = ReflectiveInjector.resolve([
          provide("token",
              useFactory: (e) => e, deps: [new InjectMetadata("dep")])
        ]);
        var nestedResolved = ReflectiveInjector.resolve([
          provide("token", useFactory: (e) => e, deps: [
            [new InjectMetadata("dep")]
          ])
        ]);
        expect(resolved[0].resolvedFactories[0].dependencies[0].key.token)
            .toEqual(nestedResolved[0]
                .resolvedFactories[0]
                .dependencies[0]
                .key
                .token);
      });
    });
    describe("displayName", () {
      it("should work", () {
        expect(((ReflectiveInjector.resolveAndCreate([Engine, BrokenEngine])
                    as ReflectiveInjector_))
                .displayName)
            .toEqual(
                "ReflectiveInjector(providers: [ \"Engine\" ,  \"BrokenEngine\" ])");
      });
    });
  });
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Renderer, forwardRef, Provider, ElementRef, Input, Host, Optional } from 'angular2/core';
import { NG_VALUE_ACCESSOR } from './control_value_accessor';
import { CONST_EXPR, StringWrapper, isPrimitive, isPresent, isBlank, looseIdentical } from 'angular2/src/facade/lang';
import { MapWrapper } from 'angular2/src/facade/collection';
const SELECT_VALUE_ACCESSOR = CONST_EXPR(new Provider(NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => SelectControlValueAccessor), multi: true }));
function _buildValueString(id, value) {
    if (isBlank(id))
        return `${value}`;
    if (!isPrimitive(value))
        value = "Object";
    return StringWrapper.slice(`${id}: ${value}`, 0, 50);
}
function _extractId(valueString) {
    return valueString.split(":")[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 */
export let SelectControlValueAccessor = class {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.value = value;
        var valueString = _buildValueString(this._getOptionId(value), value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    registerOnChange(fn) {
        this.onChange = (valueString) => { fn(this._getOptionValue(valueString)); };
    }
    registerOnTouched(fn) { this.onTouched = fn; }
    /** @internal */
    _registerOption() { return (this._idCounter++).toString(); }
    /** @internal */
    _getOptionId(value) {
        for (let id of MapWrapper.keys(this._optionMap)) {
            if (looseIdentical(this._optionMap.get(id), value))
                return id;
        }
        return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
        let value = this._optionMap.get(_extractId(valueString));
        return isPresent(value) ? value : valueString;
    }
};
SelectControlValueAccessor = __decorate([
    Directive({
        selector: 'select[ngControl],select[ngFormControl],select[ngModel]',
        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
        providers: [SELECT_VALUE_ACCESSOR]
    }), 
    __metadata('design:paramtypes', [Renderer, ElementRef])
], SelectControlValueAccessor);
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select ngControl="city">
 *   <option *ngFor="#c of cities" [value]="c"></option>
 * </select>
 * ```
 */
export let NgSelectOption = class {
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (isPresent(this._select))
            this.id = this._select._registerOption();
    }
    set ngValue(value) {
        if (this._select == null)
            return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
    }
    set value(value) {
        if (this._select == null)
            return;
        this._setElementValue(value);
        this._select.writeValue(this._select.value);
    }
    /** @internal */
    _setElementValue(value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    }
    ngOnDestroy() {
        if (isPresent(this._select)) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
};
__decorate([
    Input('ngValue'), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgSelectOption.prototype, "ngValue", null);
__decorate([
    Input('value'), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], NgSelectOption.prototype, "value", null);
NgSelectOption = __decorate([
    Directive({ selector: 'option' }),
    __param(2, Optional()),
    __param(2, Host()), 
    __metadata('design:paramtypes', [ElementRef, Renderer, SelectControlValueAccessor])
], NgSelectOption);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUdkcm11N0duLnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiXSwibmFtZXMiOlsiX2J1aWxkVmFsdWVTdHJpbmciLCJfZXh0cmFjdElkIiwiU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IiLCJTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciIsIlNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUiLCJTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlIiwiU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQiLCJTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5fcmVnaXN0ZXJPcHRpb24iLCJTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5fZ2V0T3B0aW9uSWQiLCJTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5fZ2V0T3B0aW9uVmFsdWUiLCJOZ1NlbGVjdE9wdGlvbiIsIk5nU2VsZWN0T3B0aW9uLmNvbnN0cnVjdG9yIiwiTmdTZWxlY3RPcHRpb24ubmdWYWx1ZSIsIk5nU2VsZWN0T3B0aW9uLnZhbHVlIiwiTmdTZWxlY3RPcHRpb24uX3NldEVsZW1lbnRWYWx1ZSIsIk5nU2VsZWN0T3B0aW9uLm5nT25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7T0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsS0FBSyxFQUNMLElBQUksRUFFSixRQUFRLEVBQ1QsTUFBTSxlQUFlO09BQ2YsRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSwwQkFBMEI7T0FD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QUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDeENBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzlDQSxDQUFDQTtJQUNIQSxDQUFDQTtBQUNITCxDQUFDQTtBQTFCQztJQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7OztHQUNiLG1DQUFPLFFBS1Y7QUFFRDtJQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7OztHQUNYLGlDQUFLLFFBSVI7QUF0Qkg7SUFBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7SUFLbEIsV0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUFDLFdBQUMsSUFBSSxFQUFFLENBQUE7O21CQThCaEM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIsXG4gIGZvcndhcmRSZWYsXG4gIFByb3ZpZGVyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgSG9zdCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbFxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtcbiAgQ09OU1RfRVhQUixcbiAgU3RyaW5nV3JhcHBlcixcbiAgaXNQcmltaXRpdmUsXG4gIGlzUHJlc2VudCxcbiAgaXNCbGFuayxcbiAgbG9vc2VJZGVudGljYWxcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG5jb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1IgPSBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihcbiAgICBOR19WQUxVRV9BQ0NFU1NPUiwge3VzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKSwgbXVsdGk6IHRydWV9KSk7XG5cbmZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoaXNCbGFuayhpZCkpIHJldHVybiBgJHt2YWx1ZX1gO1xuICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSkgdmFsdWUgPSBcIk9iamVjdFwiO1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5zbGljZShgJHtpZH06ICR7dmFsdWV9YCwgMCwgNTApO1xufVxuXG5mdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVTdHJpbmcuc3BsaXQoXCI6XCIpWzBdO1xufVxuXG4vKipcbiAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdzZWxlY3RbbmdDb250cm9sXSxzZWxlY3RbbmdGb3JtQ29udHJvbF0sc2VsZWN0W25nTW9kZWxdJyxcbiAgaG9zdDogeycoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuICAvKiogQGludGVybmFsICovXG4gIF9vcHRpb25NYXA6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICAvKiogQGludGVybmFsICovXG4gIF9pZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB2YXIgdmFsdWVTdHJpbmcgPSBfYnVpbGRWYWx1ZVN0cmluZyh0aGlzLl9nZXRPcHRpb25JZCh2YWx1ZSksIHZhbHVlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZVN0cmluZyk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9ICh2YWx1ZVN0cmluZzogc3RyaW5nKSA9PiB7IGZuKHRoaXMuX2dldE9wdGlvblZhbHVlKHZhbHVlU3RyaW5nKSk7IH07XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVnaXN0ZXJPcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldE9wdGlvbklkKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGZvciAobGV0IGlkIG9mIE1hcFdyYXBwZXIua2V5cyh0aGlzLl9vcHRpb25NYXApKSB7XG4gICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCksIHZhbHVlKSkgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldE9wdGlvblZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuX29wdGlvbk1hcC5nZXQoX2V4dHJhY3RJZCh2YWx1ZVN0cmluZykpO1xuICAgIHJldHVybiBpc1ByZXNlbnQodmFsdWUpID8gdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogPHNlbGVjdCBuZ0NvbnRyb2w9XCJjaXR5XCI+XG4gKiAgIDxvcHRpb24gKm5nRm9yPVwiI2Mgb2YgY2l0aWVzXCIgW3ZhbHVlXT1cImNcIj48L29wdGlvbj5cbiAqIDwvc2VsZWN0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnb3B0aW9uJ30pXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RPcHRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIF9zZWxlY3Q6IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9zZWxlY3QpKSB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbigpO1xuICB9XG5cbiAgQElucHV0KCduZ1ZhbHVlJylcbiAgc2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLnNldCh0aGlzLmlkLCB2YWx1ZSk7XG4gICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9zZWxlY3QpKSB7XG4gICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19
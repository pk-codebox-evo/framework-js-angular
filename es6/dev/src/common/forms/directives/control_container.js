import { AbstractControlDirective } from './abstract_control_directive';
/**
 * A directive that contains multiple {@link NgControl}s.
 *
 * Only used by the forms module.
 */
export class ControlContainer extends AbstractControlDirective {
    /**
     * Get the form to which this container belongs.
     */
    get formDirective() { return null; }
    /**
     * Get the path to this container.
     */
    get path() { return null; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF9jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUdkcm11N0duLnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiXSwibmFtZXMiOlsiQ29udHJvbENvbnRhaW5lciIsIkNvbnRyb2xDb250YWluZXIuZm9ybURpcmVjdGl2ZSIsIkNvbnRyb2xDb250YWluZXIucGF0aCJdLCJtYXBwaW5ncyI6Ik9BQ08sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QjtBQUVyRTs7OztHQUlHO0FBQ0gsc0NBQXNDLHdCQUF3QjtJQUc1REE7O09BRUdBO0lBQ0hBLElBQUlBLGFBQWFBLEtBQVdDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBRTFDRDs7T0FFR0E7SUFDSEEsSUFBSUEsSUFBSUEsS0FBZUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDdkNGLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgY29udGFpbnMgbXVsdGlwbGUge0BsaW5rIE5nQ29udHJvbH1zLlxuICpcbiAqIE9ubHkgdXNlZCBieSB0aGUgZm9ybXMgbW9kdWxlLlxuICovXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB7XG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSBmb3JtIHRvIHdoaWNoIHRoaXMgY29udGFpbmVyIGJlbG9uZ3MuXG4gICAqL1xuICBnZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtIHsgcmV0dXJuIG51bGw7IH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICAgKi9cbiAgZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gbnVsbDsgfVxufVxuIl19
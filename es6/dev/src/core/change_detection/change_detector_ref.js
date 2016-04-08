import { ChangeDetectionStrategy } from './constants';
export class ChangeDetectorRef {
}
export class ChangeDetectorRef_ extends ChangeDetectorRef {
    constructor(_cd) {
        super();
        this._cd = _cd;
    }
    markForCheck() { this._cd.markPathToRootAsCheckOnce(); }
    detach() { this._cd.mode = ChangeDetectionStrategy.Detached; }
    detectChanges() { this._cd.detectChanges(); }
    checkNoChanges() { this._cd.checkNoChanges(); }
    reattach() {
        this._cd.mode = ChangeDetectionStrategy.CheckAlways;
        this.markForCheck();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdG9yX3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtR2RybXU3R24udG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZi50cyJdLCJuYW1lcyI6WyJDaGFuZ2VEZXRlY3RvclJlZiIsIkNoYW5nZURldGVjdG9yUmVmXyIsIkNoYW5nZURldGVjdG9yUmVmXy5jb25zdHJ1Y3RvciIsIkNoYW5nZURldGVjdG9yUmVmXy5tYXJrRm9yQ2hlY2siLCJDaGFuZ2VEZXRlY3RvclJlZl8uZGV0YWNoIiwiQ2hhbmdlRGV0ZWN0b3JSZWZfLmRldGVjdENoYW5nZXMiLCJDaGFuZ2VEZXRlY3RvclJlZl8uY2hlY2tOb0NoYW5nZXMiLCJDaGFuZ2VEZXRlY3RvclJlZl8ucmVhdHRhY2giXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxhQUFhO0FBRW5EO0FBK0xBQSxDQUFDQTtBQUVELHdDQUF3QyxpQkFBaUI7SUFDdkRDLFlBQW9CQSxHQUFtQkE7UUFBSUMsT0FBT0EsQ0FBQ0E7UUFBL0JBLFFBQUdBLEdBQUhBLEdBQUdBLENBQWdCQTtJQUFhQSxDQUFDQTtJQUVyREQsWUFBWUEsS0FBV0UsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUJBQXlCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM5REYsTUFBTUEsS0FBV0csSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsdUJBQXVCQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNwRUgsYUFBYUEsS0FBV0ksSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkRKLGNBQWNBLEtBQVdLLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3JETCxRQUFRQTtRQUNOTSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxHQUFHQSx1QkFBdUJBLENBQUNBLFdBQVdBLENBQUNBO1FBQ3BEQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7QUFDSE4sQ0FBQ0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3J9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFuZ2VEZXRlY3RvclJlZiB7XG4gIC8qKlxuICAgKiBNYXJrcyBhbGwge0BsaW5rIENoYW5nZURldGVjdGlvblN0cmF0ZWd5I09uUHVzaH0gYW5jZXN0b3JzIGFzIHRvIGJlIGNoZWNrZWQuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gT25QdXNoIGNvbXBvbmVudHMgLS0+XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9HQzUxMmI/cD1wcmV2aWV3KSlcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ2NtcCcsXG4gICAqICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAqICAgdGVtcGxhdGU6IGBOdW1iZXIgb2YgdGlja3M6IHt7bnVtYmVyT2ZUaWNrc319YFxuICAgKiB9KVxuICAgKiBjbGFzcyBDbXAge1xuICAgKiAgIG51bWJlck9mVGlja3MgPSAwO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICogICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICogICAgICAgdGhpcy5udW1iZXJPZlRpY2tzICsrXG4gICAqICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaXMgcmVxdWlyZWQsIG90aGVyd2lzZSB0aGUgdmlldyB3aWxsIG5vdCBiZSB1cGRhdGVkXG4gICAqICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgKiAgICAgfSwgMTAwMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICogICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICogICB0ZW1wbGF0ZTogYFxuICAgKiAgICAgPGNtcD48Y21wPlxuICAgKiAgIGAsXG4gICAqICAgZGlyZWN0aXZlczogW0NtcF1cbiAgICogfSlcbiAgICogY2xhc3MgQXBwIHtcbiAgICogfVxuICAgKlxuICAgKiBib290c3RyYXAoQXBwKTtcbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBtYXJrRm9yQ2hlY2soKTogdm9pZDtcblxuICAvKipcbiAgICogRGV0YWNoZXMgdGhlIGNoYW5nZSBkZXRlY3RvciBmcm9tIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdHJlZS5cbiAgICpcbiAgICogVGhlIGRldGFjaGVkIGNoYW5nZSBkZXRlY3RvciB3aWxsIG5vdCBiZSBjaGVja2VkIHVudGlsIGl0IGlzIHJlYXR0YWNoZWQuXG4gICAqXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZiNkZXRlY3RDaGFuZ2VzfSB0byBpbXBsZW1lbnRcbiAgICogbG9jYWwgY2hhbmdlXG4gICAqIGRldGVjdGlvbiBjaGVja3MuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gZGV0YWNoL3JlYXR0YWNoL2xvY2FsIGRpZ2VzdCAtLT5cbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaXZlIGRlbW8gb25jZSByZWYuZGV0ZWN0Q2hhbmdlcyBpcyBtZXJnZWQgaW50byBtYXN0ZXIgLS0+XG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBkZWZpbmVzIGEgY29tcG9uZW50IHdpdGggYSBsYXJnZSBsaXN0IG9mIHJlYWRvbmx5IGRhdGEuXG4gICAqIEltYWdpbmUgdGhlIGRhdGEgY2hhbmdlcyBjb25zdGFudGx5LCBtYW55IHRpbWVzIHBlciBzZWNvbmQuIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLFxuICAgKiB3ZSB3YW50IHRvIGNoZWNrIGFuZCB1cGRhdGUgdGhlIGxpc3QgZXZlcnkgZml2ZSBzZWNvbmRzLiBXZSBjYW4gZG8gdGhhdCBieSBkZXRhY2hpbmdcbiAgICogdGhlIGNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3RvciBhbmQgZG9pbmcgYSBsb2NhbCBjaGVjayBldmVyeSBmaXZlIHNlY29uZHMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgICogICAvLyBpbiBhIHJlYWwgYXBwbGljYXRpb24gdGhlIHJldHVybmVkIGRhdGEgd2lsbCBiZSBkaWZmZXJlbnQgZXZlcnkgdGltZVxuICAgKiAgIGdldCBkYXRhKCkge1xuICAgKiAgICAgcmV0dXJuIFsxLDIsMyw0LDVdO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ2dpYW50LWxpc3QnLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICA8bGkgKm5nRm9yPVwiI2Qgb2YgZGF0YVByb3ZpZGVyLmRhdGFcIj5EYXRhIHt7ZH19PC9saWc+XG4gICAqICAgYCxcbiAgICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gICAqIH0pXG4gICAqIGNsYXNzIEdpYW50TGlzdCB7XG4gICAqICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGRhdGFQcm92aWRlcjpEYXRhUHJvdmlkZXIpIHtcbiAgICogICAgIHJlZi5kZXRhY2goKTtcbiAgICogICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICogICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgKiAgICAgfSwgNTAwMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICogICBwcm92aWRlcnM6IFtEYXRhUHJvdmlkZXJdLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICA8Z2lhbnQtbGlzdD48Z2lhbnQtbGlzdD5cbiAgICogICBgLFxuICAgKiAgIGRpcmVjdGl2ZXM6IFtHaWFudExpc3RdXG4gICAqIH0pXG4gICAqIGNsYXNzIEFwcCB7XG4gICAqIH1cbiAgICpcbiAgICogYm9vdHN0cmFwKEFwcCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgY2hhbmdlIGRldGVjdG9yIGFuZCBpdHMgY2hpbGRyZW4uXG4gICAqXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZiNkZXRhY2h9IHRvIGltcGxlbWVudCBsb2NhbFxuICAgKiBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAqIGNoZWNrcy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBkZXRhY2gvcmVhdHRhY2gvbG9jYWwgZGlnZXN0IC0tPlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpdmUgZGVtbyBvbmNlIHJlZi5kZXRlY3RDaGFuZ2VzIGlzIG1lcmdlZCBpbnRvIG1hc3RlciAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSBjb21wb25lbnQgd2l0aCBhIGxhcmdlIGxpc3Qgb2YgcmVhZG9ubHkgZGF0YS5cbiAgICogSW1hZ2luZSwgdGhlIGRhdGEgY2hhbmdlcyBjb25zdGFudGx5LCBtYW55IHRpbWVzIHBlciBzZWNvbmQuIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLFxuICAgKiB3ZSB3YW50IHRvIGNoZWNrIGFuZCB1cGRhdGUgdGhlIGxpc3QgZXZlcnkgZml2ZSBzZWNvbmRzLlxuICAgKlxuICAgKiBXZSBjYW4gZG8gdGhhdCBieSBkZXRhY2hpbmcgdGhlIGNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3RvciBhbmQgZG9pbmcgYSBsb2NhbCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAqIGNoZWNrXG4gICAqIGV2ZXJ5IGZpdmUgc2Vjb25kcy5cbiAgICpcbiAgICogU2VlIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZiNkZXRhY2h9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWJzdHJhY3QgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIGNoYW5nZSBkZXRlY3RvciBhbmQgaXRzIGNoaWxkcmVuLCBhbmQgdGhyb3dzIGlmIGFueSBjaGFuZ2VzIGFyZSBkZXRlY3RlZC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIGluIGRldmVsb3BtZW50IG1vZGUgdG8gdmVyaWZ5IHRoYXQgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIGRvZXNuJ3QgaW50cm9kdWNlXG4gICAqIG90aGVyIGNoYW5nZXMuXG4gICAqL1xuICBhYnN0cmFjdCBjaGVja05vQ2hhbmdlcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZWF0dGFjaCB0aGUgY2hhbmdlIGRldGVjdG9yIHRvIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdHJlZS5cbiAgICpcbiAgICogVGhpcyBhbHNvIG1hcmtzIE9uUHVzaCBhbmNlc3RvcnMgYXMgdG8gYmUgY2hlY2tlZC4gVGhpcyByZWF0dGFjaGVkIGNoYW5nZSBkZXRlY3RvciB3aWxsIGJlXG4gICAqIGNoZWNrZWQgZHVyaW5nIHRoZSBuZXh0IGNoYW5nZSBkZXRlY3Rpb24gcnVuLlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gYSBjaGFwdGVyIG9uIGRldGFjaC9yZWF0dGFjaC9sb2NhbCBkaWdlc3QgLS0+XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9hVWhaaGE/cD1wcmV2aWV3KSlcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNyZWF0ZXMgYSBjb21wb25lbnQgZGlzcGxheWluZyBgbGl2ZWAgZGF0YS4gVGhlIGNvbXBvbmVudCB3aWxsIGRldGFjaFxuICAgKiBpdHMgY2hhbmdlIGRldGVjdG9yIGZyb20gdGhlIG1haW4gY2hhbmdlIGRldGVjdG9yIHRyZWUgd2hlbiB0aGUgY29tcG9uZW50J3MgbGl2ZSBwcm9wZXJ0eVxuICAgKiBpcyBzZXQgdG8gZmFsc2UuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgICogICBkYXRhID0gMTtcbiAgICpcbiAgICogICBjb25zdHJ1Y3RvcigpIHtcbiAgICogICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICogICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhICogMjtcbiAgICogICAgIH0sIDUwMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnbGl2ZS1kYXRhJyxcbiAgICogICBpbnB1dHM6IFsnbGl2ZSddLFxuICAgKiAgIHRlbXBsYXRlOiBgRGF0YToge3tkYXRhUHJvdmlkZXIuZGF0YX19YFxuICAgKiB9KVxuICAgKiBjbGFzcyBMaXZlRGF0YSB7XG4gICAqICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGRhdGFQcm92aWRlcjpEYXRhUHJvdmlkZXIpIHt9XG4gICAqXG4gICAqICAgc2V0IGxpdmUodmFsdWUpIHtcbiAgICogICAgIGlmICh2YWx1ZSlcbiAgICogICAgICAgdGhpcy5yZWYucmVhdHRhY2goKTtcbiAgICogICAgIGVsc2VcbiAgICogICAgICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICogICBwcm92aWRlcnM6IFtEYXRhUHJvdmlkZXJdLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICBMaXZlIFVwZGF0ZTogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwibGl2ZVwiPlxuICAgKiAgICAgPGxpdmUtZGF0YSBbbGl2ZV09XCJsaXZlXCI+PGxpdmUtZGF0YT5cbiAgICogICBgLFxuICAgKiAgIGRpcmVjdGl2ZXM6IFtMaXZlRGF0YSwgRk9STV9ESVJFQ1RJVkVTXVxuICAgKiB9KVxuICAgKiBjbGFzcyBBcHAge1xuICAgKiAgIGxpdmUgPSB0cnVlO1xuICAgKiB9XG4gICAqXG4gICAqIGJvb3RzdHJhcChBcHApO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IHJlYXR0YWNoKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VEZXRlY3RvclJlZl8gZXh0ZW5kcyBDaGFuZ2VEZXRlY3RvclJlZiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvcikgeyBzdXBlcigpOyB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQgeyB0aGlzLl9jZC5tYXJrUGF0aFRvUm9vdEFzQ2hlY2tPbmNlKCk7IH1cbiAgZGV0YWNoKCk6IHZvaWQgeyB0aGlzLl9jZC5tb2RlID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGV0YWNoZWQ7IH1cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHsgdGhpcy5fY2QuZGV0ZWN0Q2hhbmdlcygpOyB9XG4gIGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQgeyB0aGlzLl9jZC5jaGVja05vQ2hhbmdlcygpOyB9XG4gIHJlYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NkLm1vZGUgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5DaGVja0Fsd2F5cztcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG59Il19
import { Component, EventEmitter, Output } from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponents{
    @Output() featureSelected = new EventEmitter();
    OnSelect(feature: string){
        this.featureSelected.emit(feature);
    }
}
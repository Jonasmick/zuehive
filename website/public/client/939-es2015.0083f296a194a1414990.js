"use strict";(self.webpackChunkbedesk=self.webpackChunkbedesk||[]).push([[939],{82613:function(e,t,i){i.d(t,{U0:function(){return R},VQ:function(){return k},Fk:function(){return G}});var a=i(37716),r=i(72458),n=i(39490),o=i(3679),s=i(46237),l=i(19238),d=i(38345);const c=["input"],u=function(){return{enterDuration:150}},h=["*"],p=new a.OlP("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let m=0;const b={provide:o.JU,useExisting:(0,a.Gpc)(()=>k),multi:!0};class _{constructor(e,t){this.source=e,this.value=t}}const g=new a.OlP("MatRadioGroup");let f=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+m++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new a.vpe}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,n.Ig)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,n.Ig)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new _(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.sBO))},e.\u0275dir=a.lG2({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),k=(()=>{class e extends f{}return e.\u0275fac=function(){let t;return function(i){return(t||(t=a.n5z(e)))(i||e)}}(),e.\u0275dir=a.lG2({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){if(1&e&&a.Suo(i,R,5),2&e){let e;a.iGM(e=a.CRH())&&(t._radios=e)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[a._Bn([b,{provide:g,useExisting:e}]),a.qOj]}),e})();class v{constructor(e){this._elementRef=e}}const y=(0,r.Kr)((0,r.sb)(v));let x=(()=>{class e extends y{constructor(e,t,i,r,o,s,l,d){super(t),this._changeDetector=i,this._focusMonitor=r,this._radioDispatcher=o,this._animationMode=s,this._providerOverride=l,this._uniqueId="mat-radio-"+ ++m,this.id=this._uniqueId,this.change=new a.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,d&&(this.tabIndex=(0,n.su)(d,0)),this._removeUniqueSelectionListener=o.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=(0,n.Ig)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,n.Ig)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,n.Ig)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new _(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(f),a.Y36(a.SBq),a.Y36(a.sBO),a.Y36(l.tE),a.Y36(d.A8),a.Y36(String),a.Y36(void 0),a.Y36(String))},e.\u0275dir=a.lG2({type:e,viewQuery:function(e,t){if(1&e&&a.Gf(c,5),2&e){let e;a.iGM(e=a.CRH())&&(t._inputElement=e.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[a.qOj]}),e})(),R=(()=>{class e extends x{constructor(e,t,i,a,r,n,o,s){super(e,t,i,a,r,n,o,s)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(g,8),a.Y36(a.SBq),a.Y36(a.sBO),a.Y36(l.tE),a.Y36(d.A8),a.Y36(s.Qb,8),a.Y36(p,8),a.$8M("tabindex"))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&a.NdJ("focus",function(){return t._inputElement.nativeElement.focus()}),2&e&&(a.uIk("tabindex",null)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),a.ekj("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[a.qOj],ngContentSelectors:h,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(a.F$t(),a.TgZ(0,"label",0,1),a.TgZ(2,"span",2),a._UZ(3,"span",3),a._UZ(4,"span",4),a.TgZ(5,"input",5,6),a.NdJ("change",function(e){return t._onInputChange(e)})("click",function(e){return t._onInputClick(e)}),a.qZA(),a.TgZ(7,"span",7),a._UZ(8,"span",8),a.qZA(),a.qZA(),a.TgZ(9,"span",9),a.TgZ(10,"span",10),a._uU(11,"\xa0"),a.qZA(),a.Hsn(12),a.qZA(),a.qZA()),2&e){const e=a.MAs(1);a.uIk("for",t.inputId),a.xp6(5),a.Q6J("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),a.uIk("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),a.xp6(2),a.Q6J("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",a.DdM(18,u)),a.xp6(2),a.ekj("mat-radio-label-before","before"==t.labelPosition)}},directives:[r.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.si,r.BQ],r.BQ]}),e})()},80551:function(e,t,i){i.d(t,{T:function(){return o}});var a=i(13913),r=i(37716),n=i(19244);let o=(()=>{class e{constructor(e){this.i18n=e}getFullPlanName(){if(!this.plan)return;let e=this.plan.parent?this.plan.parent.name:this.plan.name;return e=(0,a.z)(this.i18n.t(e)),e+=" "+this.i18n.t("Plan"),this.plan.parent&&(e+=": "+this.plan.name),e}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(n.Z))},e.\u0275cmp=r.Xpm({type:e,selectors:[["full-plan-name"]],inputs:{plan:"plan"},decls:1,vars:1,template:function(e,t){1&e&&r._uU(0),2&e&&r.Oqu(t.getFullPlanName())},encapsulation:2,changeDetection:0}),e})()},27673:function(e,t,i){i.d(t,{J:function(){return r}});var a=i(37716);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({}),e})()},53410:function(e,t,i){i.d(t,{Y:function(){return o}});var a=i(37716),r=i(34673),n=i(24668);let o=(()=>{class e{constructor(e,t){this.settings=e,this.router=t}canActivate(e,t){return this.handle()}canActivateChild(e,t){return this.handle()}handle(){return!(!this.settings.get("billing.integrated")||!this.settings.get("billing.enable"))||(this.router.navigate(["/"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(r.Z),a.LFG(n.F0))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},24284:function(e,t,i){i.d(t,{o:function(){return n}});var a=i(37716),r=i(90299);let n=(()=>{class e{constructor(e){this.http=e}all(t){return this.http.get(e.BASE_URI,t)}get(t){return this.http.get(`${e.BASE_URI}/${t}`)}create(t){return this.http.post(e.BASE_URI,t)}update(t,i){return this.http.put(`${e.BASE_URI}/${t}`,i)}delete(t){return this.http.delete(`${e.BASE_URI}/${t}`)}sync(){return this.http.post(`${e.BASE_URI}/sync`)}}return e.BASE_URI="billing-plan",e.\u0275fac=function(t){return new(t||e)(a.LFG(r.r))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
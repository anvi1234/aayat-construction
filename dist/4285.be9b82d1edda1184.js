"use strict";(self.webpackChunkayatConstProject=self.webpackChunkayatConstProject||[]).push([[4285],{24285:(L,f,s)=>{s.r(f),s.d(f,{AuthModule:()=>z});var l=s(92518),b=s(18143),x=s(57248),M=s(74385),d=s(93075),v=s(15431),p=s(28121),e=s(5e3),O=s(17577),I=s(15861),P=s(88338),m=s(70191),h=s(69808),A=s(50219),j=s(7471);function E(t,c){if(1&t&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.errorMessage)}}const C=function(t){return{"invalid-textbox":t}},y=function(){return{standalone:!0}};let S=(()=>{class t{constructor(n,r,o,i,a,u,g,F){this.AuthSerivice=n,this.router=r,this.platform=o,this.location=i,this.alertController=a,this.siteService=u,this.expenseSerrvice=g,this.transactionSer=F,this.isError=!1,this.errorMessage="",this.model={email:"",password:""},this.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,this.serverErrorMessages=""}ngOnInit(){this.innerWidth=window.innerWidth}backButtonEvent(){this.platform.backButton.subscribeWithPriority(10,()=>{"/"===this.router.routerState.snapshot.url?this.backButtonAlert():this.location.back()})}backButtonAlert(){var n=this;return(0,I.Z)(function*(){yield(yield n.alertController.create({message:"Do you want to close app?",buttons:[{text:"Cancel",role:"Cancel"},{text:"Close App",handler:()=>{navigator.app.existApp()}}]})).present()})()}onResize(n){this.innerWidth=window.innerWidth}onSubmit(n){this.AuthSerivice.login(this.model).subscribe(r=>{let o=r;this.AuthSerivice.setToken(r.token),localStorage.setItem("userid",o.user._id),localStorage.setItem("employee",o.user.fullName),localStorage.setItem("designation",o.user.designation),this.innerWidth<=785?("1"!=localStorage.getItem("designation")&&(localStorage.setItem("routingSiteName",o.user.siteName),localStorage.setItem("routinglocation",o.user.location),localStorage.setItem("siteKeyId",o.user.uniqueSiteId)),this.router.navigateByUrl("/mobile-view")):"1"!=localStorage.getItem("designation")?(localStorage.setItem("routingSiteName",o.user.siteName),localStorage.setItem("routinglocation",o.user.location),localStorage.setItem("siteKeyId",o.user.uniqueSiteId),this.router.navigateByUrl("/mobile-view")):this.getsite().then(i=>{this.getTransactionByQuery(i),this.router.navigateByUrl("/dashboard")})},r=>{"false"===r.error.isStatus?(this.isError=!0,this.errorMessage=r.error.message):this.isError=!1})}getsite(){return new Promise((n,r)=>{this.siteService.getSite().subscribe(o=>{let i=o,a=i.filter(g=>"Active"===g.status),u=i.filter(g=>"Closed"===g.status);i=[...a,...u],this.expenseSerrvice.totalSiteSubject.next(i),n(o)})})}getTransactionByQuery(n){return new Promise((r,o)=>{let i=[];this.transactionSer.gettotaltransactionByQuery(n).subscribe(a=>{i.push(a.data),this.expenseSerrvice.totalTransSUbject.next(i),r(a)})}).then(r=>new Promise((o,i)=>{let a=[];this.expenseSerrvice.getTotalExpensesByQuery(n).subscribe(u=>{console.log("expenses",u.data),a.push(u.data),this.expenseSerrvice.totalExpenseSubject.next(a),o(u)})}).then(o=>{}))}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(P.$),e.\u0275\u0275directiveInject(p.F0),e.\u0275\u0275directiveInject(m.t4),e.\u0275\u0275directiveInject(h.Ye),e.\u0275\u0275directiveInject(m.Br),e.\u0275\u0275directiveInject(A.O),e.\u0275\u0275directiveInject(v.r),e.\u0275\u0275directiveInject(j.p))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-login"]],hostBindings:function(n,r){1&n&&e.\u0275\u0275listener("resize",function(i){return r.onResize(i)},!1,e.\u0275\u0275resolveWindow)},decls:22,vars:15,consts:[[1,"logo"],["src","assets/image/logo.png"],[1,"card-heading-login"],["id","login"],["autoComplete","on",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],["appAutofill","","type","text","name","email","autocomplete","email","fullWidth","","id","inputFirstName","placeholder","Enter Your Email",3,"ngModel","ngClass","pattern","ngModelOptions","ngModelChange"],["email","ngModel"],["class","red",4,"ngIf"],["appAutofill","","type","password","name","password","autocomplete","current-password","fullWidth","","id","inputLastName","placeholder","Password",3,"ngClass","ngModel","minlength","ngModelOptions","ngModelChange"],["password","ngModel"],[2,"display","flex","justify-content","center","align-items","center"],["type","submit","status","primary","nbButton",""],[1,"red"]],template:function(n,r){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-card"),e.\u0275\u0275elementStart(1,"nb-card-header"),e.\u0275\u0275elementStart(2,"div",0),e.\u0275\u0275element(3,"img",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275elementStart(5,"span"),e.\u0275\u0275text(6," Aayat Construction "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",3),e.\u0275\u0275elementStart(8,"nb-card-body"),e.\u0275\u0275elementStart(9,"form",4,5),e.\u0275\u0275listener("ngSubmit",function(){e.\u0275\u0275restoreView(o);const a=e.\u0275\u0275reference(10);return a.valid&&r.onSubmit(a)}),e.\u0275\u0275elementStart(11,"div",6),e.\u0275\u0275elementStart(12,"ion-input",7,8),e.\u0275\u0275listener("ngModelChange",function(a){return r.model.email=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(14,E,2,1,"div",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",6),e.\u0275\u0275elementStart(16,"ion-input",10,11),e.\u0275\u0275listener("ngModelChange",function(a){return r.model.password=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(18,"br"),e.\u0275\u0275elementStart(19,"div",12),e.\u0275\u0275elementStart(20,"button",13),e.\u0275\u0275text(21,"Login"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275reference(10),i=e.\u0275\u0275reference(13),a=e.\u0275\u0275reference(17);e.\u0275\u0275advance(12),e.\u0275\u0275property("ngModel",r.model.email)("ngClass",e.\u0275\u0275pureFunction1(9,C,o.submitted&&!i.valid))("pattern",r.emailRegex)("ngModelOptions",e.\u0275\u0275pureFunction0(11,y)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.isError),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(12,C,o.submitted&&!a.valid))("ngModel",r.model.password)("minlength",10)("ngModelOptions",e.\u0275\u0275pureFunction0(14,y))}},directives:[l.Asz,l.ndF,l.yKW,d._Y,d.JL,d.F,m.pK,m.j9,d.JJ,d.On,h.mk,d.c5,h.O5,d.wO,l.DPz],styles:["nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0;overflow-y:hidden;overflow-x:hidden}nb-card[_ngcontent-%COMP%]{max-width:400px;overflow-y:hidden;display:flex;justify-content:center;align-items:center;background-color:#00000080;border:none;height:auto;margin:5% auto 0;float:none}ion-input[_ngcontent-%COMP%]{width:100%;padding:10px 5px;margin:8px 0;height:50px;color:#211f1f;background:white;font-weight:600;display:inline-block;border:2px solid #f7f9fc;box-sizing:border-box}.red[_ngcontent-%COMP%]{color:red}nb-card-header[_ngcontent-%COMP%]{background-color:transparent}@media screen and (max-width: 786px){.card-heading-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;color:#fff;position:relative;left:-6px;font-size:15px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:33%;height:31%;text-align:center;position:absolute;left:32%;bottom:68%}.logo[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;width:120px;height:120px}}@media screen and (min-width: 786px){.logo[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;width:120px;height:120px;position:relative;left:81px;margin-bottom:2px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center;position:absolute;left:3%;bottom:10%}.card-heading-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;color:#fff;position:relative;font-size:30px}}"]}),t})();const w=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-auth"]],decls:3,vars:0,template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"ngx-login-column-layout"),e.\u0275\u0275element(1,"app-login"),e.\u0275\u0275element(2,"router-outlet"),e.\u0275\u0275elementEnd())},directives:[O.q,S,p.lC],styles:["[_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),t})(),children:[{path:"",component:S}]}];let B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.Bz.forChild(w)],p.Bz]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({providers:[v.r],imports:[[x.O,l.j5J,l.T2N,b.$,d.u5,l.zyh,l.KdK,l.nKr,l.caZ,l.OA,M.ne,B,l.IIj,m.Pc,l.j7H.forChild()]]}),t})()}}]);
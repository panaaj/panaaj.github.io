(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6sHt":function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),i=o("tyNb"),c=o("nl41"),r=o("N1P7"),a=o("fXoL"),s=o("dNgK"),l=o("A5z7");function d(t,e){if(1&t&&(a.Sb(0,"mat-chip",6),a.wc(1),a.Rb()),2&t){const t=e.$implicit,o=e.index;a.hc("selected",t.selected)("color",t.color),a.Bb(1),a.xc(o+1)}}let b=(()=>{class t{constructor(t){this.toast=t,this.chips=[{color:"primary",selected:!1},{color:"primary",selected:!1},{color:"primary",selected:!1},{color:"primary",selected:!1}],this.period={value:0,total:4},this.minutes=0,this.seconds=0,this.maxtime=20,this.running=!1,this.displaytime="0:00"}ngOnChanges(t){for(let e in t)switch(e){case"seconds":this.seconds=t[e].currentValue?t[e].currentValue:0;break;case"minutes":this.minutes=t[e].currentValue?t[e].currentValue:0;break;case"maxtime":this.maxtime=t[e].currentValue?t[e].currentValue:0;break;case"period":if(t[e].currentValue.total!=this.chips.length){this.chips=[];for(let o=0;o<t[e].currentValue.total;o++)this.chips.push({color:"primary",selected:!1})}}this.update()}update(){this.displaytime=this.minutes+":"+("00"+this.seconds).slice(-2);for(let t=0;t<this.period.total;t++)t<=this.period.value-1?(this.chips[t].selected=!0,this.chips[t].color="primary",t==this.period.value-1&&this.running&&(this.chips[t].color="accent")):this.chips[t].selected=!1}showDetails(){let t="";if(this.running){if(this.minutes<this.maxtime){let e=this.maxtime-this.minutes,o=60-this.seconds;t=0!=o&&60!=o?`${e-1}:${("00"+o).slice(-2)}`:`${e}:00`}else t="0:00 - in Overtime!";this.toast.open(`Time Remaining: ${t} `,"",{duration:3e3})}}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(s.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["game-clock"]],inputs:{period:"period",minutes:"minutes",seconds:"seconds",maxtime:"maxtime",running:"running"},features:[a.zb()],decls:7,vars:5,consts:[["theme-panel","",1,"gameclock"],[1,"gameclock-row"],[3,"multiple"],[3,"selected","color",4,"ngFor","ngForOf"],[3,"click"],[1,"gameclock-timer"],[3,"selected","color"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"mat-chip-list",2),a.vc(3,d,2,3,"mat-chip",3),a.Rb(),a.Sb(4,"div",4),a.ac("click",(function(){return e.showDetails()})),a.Sb(5,"span",5),a.wc(6),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.Bb(2),a.hc("multiple",!0),a.Bb(1),a.hc("ngForOf",e.chips),a.Bb(2),a.Eb("gameclock-timer-overtime",e.running&&0!=e.minutes&&e.minutes>=e.maxtime),a.Bb(1),a.yc("Time: ",e.displaytime,""))},directives:[l.b,n.j,l.a],styles:[".gameclock-row[_ngcontent-%COMP%]{font-size:inherit;color:inherit;display:-webkit-box;display:flex;-moz-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:stretch;min-height:15px;border-radius:0;width:100%}.gameclock-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-box-flex:1;-moz-box-flex:1;width:20%;flex:1 1 auto;vertical-align:middle}.gameclock-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){text-align:right}.gameclock-title[_ngcontent-%COMP%]{white-space:pre;overflow:hidden;text-overflow:clip}.gameclock-timer[_ngcontent-%COMP%]{text-align:right;vertical-align:middle;max-height:50px;min-height:15px;margin-left:10px;padding:0 5px}.gameclock-timer-overtime[_ngcontent-%COMP%]{color:red}"]}),t})();var m=o("eGum"),g=o("bTqV"),h=o("NFeN");function p(t,e){1&t&&(a.Sb(0,"div",9),a.Ob(1,"div",3),a.Sb(2,"div",10),a.wc(3,"G"),a.Rb(),a.Sb(4,"div",10),a.wc(5,"B"),a.Rb(),a.Sb(6,"div",11),a.wc(7,"P"),a.Rb(),a.Ob(8,"div",6),a.Rb())}function u(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",12),a.Sb(1,"div",13),a.Sb(2,"div",14),a.Sb(3,"h1"),a.Sb(4,"span",15),a.wc(5,"Set Score:\xa0\xa0"),a.Rb(),a.Sb(6,"span"),a.wc(7),a.Rb(),a.Rb(),a.Rb(),a.Sb(8,"div",16),a.Sb(9,"div",17),a.Sb(10,"div",18),a.Sb(11,"div"),a.wc(12,"G"),a.Rb(),a.Sb(13,"div"),a.Sb(14,"button",19),a.ac("click",(function(){return a.pc(t),a.cc().incGoal(1)})),a.Ob(15,"i",20),a.Rb(),a.Rb(),a.Sb(16,"div",4),a.wc(17),a.Rb(),a.Sb(18,"div"),a.Sb(19,"button",21),a.ac("click",(function(){return a.pc(t),a.cc().incGoal(-1)})),a.Ob(20,"i",22),a.Rb(),a.Rb(),a.Rb(),a.Sb(21,"div",18),a.Sb(22,"div"),a.wc(23,"B"),a.Rb(),a.Sb(24,"div"),a.Sb(25,"button",19),a.ac("click",(function(){return a.pc(t),a.cc().incBehind(1)})),a.Ob(26,"i",20),a.Rb(),a.Rb(),a.Sb(27,"div",4),a.wc(28),a.Rb(),a.Sb(29,"div"),a.Sb(30,"button",21),a.ac("click",(function(){return a.pc(t),a.cc().incBehind(-1)})),a.Ob(31,"i",22),a.Rb(),a.Rb(),a.Rb(),a.Sb(32,"div",23),a.Sb(33,"button",24),a.ac("click",(function(){return a.pc(t),a.cc().display.adjust=!1})),a.Sb(34,"mat-icon"),a.wc(35,"close"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=a.cc();a.Bb(1),a.Eb("home",t.home),a.Bb(1),a.Eb("home",t.home),a.Bb(5),a.xc(t.teamname),a.Bb(2),a.Eb("home",t.home),a.Bb(8),a.xc(t.goals),a.Bb(11),a.xc(t.behinds)}}let w=(()=>{class t extends m.a{constructor(){super(...arguments),this.display={adjust:!1}}ngOnChanges(t){for(let e in t);}incGoal(t=1){this.game.score.incGoal(this.home,t),this.game.timer.config.running&&(this.display.adjust=!1)}incBehind(t=1){this.game.score.incBehind(this.home,t),this.game.timer.config.running&&(this.display.adjust=!1)}}return t.\u0275fac=function(e){return f(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["team-score-set"]],features:[a.yb,a.zb()],decls:16,vars:10,consts:[["theme-panel","",1,"scorepanel"],["class","scorepanel-row title",4,"ngIf"],[1,"scorepanel-row"],[1,"teamname"],[1,"number"],[1,"number","total"],[1,"set"],["mat-mini-fab","","color","accent","mdTooltip","Set Score",3,"click"],["class","adjust",4,"ngIf"],[1,"scorepanel-row","title"],["theme-title-bg","",1,"number"],["theme-title-bg","",1,"number","total"],[1,"adjust"],[1,"mask"],[1,"title"],[2,"color","silver"],[2,"width","100%","text-align","center","position","relative","height","50%"],[1,"ctrl"],[1,"ctrl-line"],[1,"up",3,"click"],[1,"fi-arrow-up",2,"font-size","20pt"],[1,"down",3,"click"],[1,"fi-arrow-down",2,"font-size","20pt"],[2,"text-align","right"],[3,"click"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.vc(1,p,9,0,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.wc(4),a.Rb(),a.Sb(5,"div",4),a.wc(6),a.Rb(),a.Sb(7,"div",4),a.wc(8),a.Rb(),a.Sb(9,"div",5),a.wc(10),a.Rb(),a.Sb(11,"div",6),a.Sb(12,"button",7),a.ac("click",(function(){return e.display.adjust=!0})),a.Sb(13,"mat-icon"),a.wc(14,"more_horiz"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.vc(15,u,36,9,"div",8),a.Rb()),2&t&&(a.Bb(1),a.hc("ngIf",!e.notitle),a.Bb(2),a.uc("background-color",e.home&&e.app.config.home.backcolor)("color",e.home&&e.app.config.home.color),a.Bb(1),a.yc(" ",e.teamname," "),a.Bb(2),a.xc(e.na?"-":e.goals),a.Bb(2),a.xc(e.na?"-":e.behinds),a.Bb(2),a.xc(e.na?"-":e.points),a.Bb(5),a.hc("ngIf",e.display.adjust))},directives:[n.k,g.b,h.a],styles:[".scorepanel[_ngcontent-%COMP%]{font-weight:400;font-size:24pt;background-color:hsla(0,0%,98%,.3)}.scorepanel-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-moz-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:stretch;min-height:15px;border-radius:0}.scorepanel-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto;text-align:center;vertical-align:middle;min-width:45px;max-width:45px;max-height:50px;min-height:15px;margin:1px}.scorepanel-row[_ngcontent-%COMP%]   .teamname[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;min-width:37%;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.scorepanel-row[_ngcontent-%COMP%]:not(.title)   .teamname[_ngcontent-%COMP%], .scorepanel-row[_ngcontent-%COMP%]   div.number[_ngcontent-%COMP%]{color:#fff;background-color:#000}.scorepanel-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{background-color:hsla(0,0%,98%,.3)}.scorepanel-row[_ngcontent-%COMP%]   .number.total[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.8)}.scorepanel-row.title[_ngcontent-%COMP%]{font-size:inherit;color:#fff}.scorepanel-row.title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-child){background-color:hsla(0,0%,98%,.3)}.scorepanel-row.title[_ngcontent-%COMP%]   .set[_ngcontent-%COMP%]{border:none;background-color:transparent!important}.scorepanel-row[_ngcontent-%COMP%]   .teamname[_ngcontent-%COMP%]{text-align:center}.adjust[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:15000}.adjust[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{position:relative;background-color:rgba(107,105,105,.9);width:100%;height:100%}.adjust[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#000}.adjust[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{padding-left:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.adjust[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]{margin-top:50px;padding:1px 3px 5px;display:-webkit-inline-box;display:inline-flex;border:1px solid #fff;background-color:rgba(33,33,33,.8)}.adjust[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .ctrl-line[_ngcontent-%COMP%]{margin-right:10px;padding:2px;width:70px;text-align:center}.adjust[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .ctrl-line[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin:0 10px;background-color:#000;color:#fff;border:1px solid #fff;width:47px}.adjust[_ngcontent-%COMP%]   button.up[_ngcontent-%COMP%]{background-color:green!important;color:#fff;width:50px}.adjust[_ngcontent-%COMP%]   button.down[_ngcontent-%COMP%]{background-color:red!important;color:#fff;width:50px}@media only screen and (min-device-width:768px) and (max-device-width:1024px),only screen and (min-width:800px){.scorepanel-row[_ngcontent-%COMP%]:not(.title)   .teamname[_ngcontent-%COMP%]{padding-top:5px}.scorepanel-row[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{background-color:hsla(0,0%,98%,.3);min-width:55px;border:1px solid grey!important}.scorepanel-row[_ngcontent-%COMP%]   .number.total[_ngcontent-%COMP%]{min-width:70px;background-color:#000}.scorepanel-row[_ngcontent-%COMP%]:not(.title)   .number[_ngcontent-%COMP%]{font-family:times_sq!important;font-size:36pt!important;color:#0f0!important}.adjust[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{margin-left:50%;width:50%}.adjust[_ngcontent-%COMP%]   .mask.home[_ngcontent-%COMP%]{margin-left:0}}"]}),t})();const f=a.Ub(w);function x(t,e){1&t&&(a.Sb(0,"div"),a.wc(1,"Team:"),a.Rb())}const v=["*"];let O=(()=>{class t{constructor(){this.showteamname=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["goal-list"]],inputs:{showteamname:"showteamname"},ngContentSelectors:v,decls:10,vars:1,consts:[["theme-panel","",1,"goallistwrapper-panel"],["theme-title-bg","",1,"goallistwrapper-row","title"],[4,"ngIf"]],template:function(t,e){1&t&&(a.gc(),a.Sb(0,"div",0),a.Sb(1,"div",1),a.vc(2,x,2,0,"div",2),a.Sb(3,"div"),a.wc(4,"Period:"),a.Rb(),a.Sb(5,"div"),a.wc(6,"Time:"),a.Rb(),a.Sb(7,"div"),a.wc(8,"Scorer:"),a.Rb(),a.Rb(),a.fc(9),a.Rb()),2&t&&(a.Bb(2),a.hc("ngIf",e.showteamname))},directives:[n.k],styles:[".goallistwrapper-panel[_ngcontent-%COMP%]{font-size:18pt;margin-bottom:3px;padding:0!important}.goallistwrapper-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-moz-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:stretch}.goallistwrapper-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-box-flex:1;-moz-box-flex:1;width:20%;flex:1 0 auto;min-width:15%;padding:2px}.goallistwrapper-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-box-flex:2;flex:2 0 auto}.goallistwrapper-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{width:65px}.goallistwrapper-row.title[_ngcontent-%COMP%]{color:inherit;padding-top:7px;padding-left:2px;border-top:1px solid silver;border-bottom:1px solid silver;text-align:center}"]}),t})();function _(t,e){if(1&t&&(a.Sb(0,"div",5),a.wc(1),a.Rb()),2&t){const t=a.cc();a.uc("background-color",t.home&&t.app.config.home.backcolor)("color",t.home&&t.app.config.home.color),a.Bb(1),a.yc(" ",t.teamname," ")}}let C=(()=>{class t{constructor(t,e){this.game=t,this.app=e,this.teamname="",this.timescored="0:00",this.period="",this.scorer="",this.home=!1,this.readonly=!1,this.idx="",this.byid=!1,this.showteamname=!0,this.game=t,this.app=e}keyPressed(t){switch(t.key){case"Escape":case"Enter":t.target.blur()}}updateScorer(t){console.info(`Goal.updateScorer(${t})`),t=""==t?null:parseInt(t);let e=0;if(this.byid){for(let o=0;o<this.game.goals.list.length;o++)if(this.game.goals.list[o].id==this.idx){e=o,this.game.goals.list[o].scorer.number=t;break}}else e=this.idx,this.game.goals.list[this.idx].scorer.number=t;this.game.db.getPlayer(parseInt(t),this.home).then(t=>{t?(this.game.goals.list[e].scorer.firstname=t.firstname,this.game.goals.list[e].scorer.lastname=t.lastname):(this.game.goals.list[e].scorer.firstname="",this.game.goals.list[e].scorer.lastname=""),this.game.goals.updateGoalScorers(),this.game.update()},t=>{this.app.debug(t),this.game.goals.updateGoalScorers(),this.game.update()})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(r.a),a.Nb(c.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["goal"]],inputs:{showteamname:"showteamname",teamname:"teamname",timescored:"timescored",period:"period",scorer:"scorer",home:"home",readonly:"readonly",idx:"idx",byid:"byid"},decls:11,vars:10,consts:[[1,"goallist-row"],["class","team",3,"background-color","color",4,"ngIf"],[1,"scorer"],["placeholder","","pattern","[0-9]*","min","1","max","99","type","number",3,"disabled","value","change","keydown"],["player",""],[1,"team"]],template:function(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",0),a.vc(1,_,2,5,"div",1),a.Sb(2,"div"),a.wc(3),a.Rb(),a.Sb(4,"div"),a.wc(5),a.Rb(),a.Sb(6,"div",2),a.Sb(7,"mat-icon"),a.wc(8,"perm_identity"),a.Rb(),a.Sb(9,"input",3,4),a.ac("change",(function(){a.pc(t);const o=a.nc(10);return e.updateScorer(o.value)}))("keydown",(function(t){return e.keyPressed(t)})),a.Rb(),a.Rb(),a.Rb()}2&t&&(a.Bb(1),a.hc("ngIf",e.showteamname),a.Bb(2),a.zc("",e.period,"/",e.game.settings.periodTotal,""),a.Bb(2),a.xc(e.timescored),a.Bb(1),a.uc("background-color",e.home&&e.app.config.home.backcolor)("color",e.home&&e.app.config.home.color),a.Bb(3),a.ic("value",e.scorer),a.hc("disabled",e.readonly))},directives:[n.k,h.a],styles:[".goallist-panel[_ngcontent-%COMP%]{font-size:18pt;margin-bottom:3px;padding:0!important}.goallist-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-moz-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:stretch;border-bottom:1px solid hsla(0,0%,78.4%,.3)}.goallist-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-box-flex:1;-moz-box-flex:1;width:20%;flex:1 0 auto;min-width:15%;padding:2px}.goallist-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-box-flex:2;-moz-box-flex:2;width:20%;flex:2 0 auto}.goallist-row[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.goallist-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(first-child){text-align:center;min-width:60px}.goallist-row[_ngcontent-%COMP%]   .scorer[_ngcontent-%COMP%]{width:65px}.goallist-row.title[_ngcontent-%COMP%]{color:#ff0;padding-top:7px;padding-left:2px;border-top:1px solid silver;border-bottom:1px solid silver}.goallist-row.title.hide[_ngcontent-%COMP%]{display:none!important}.goallist-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:40px;font-size:inherit;padding:0;background-color:hsla(0,0%,98%,.9);color:#000;border:none;text-align:right}.goallist-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{background-color:inherit;border:none;color:inherit}"]}),t})();function k(t,e){if(1&t&&a.Ob(0,"img",20),2&t){const t=a.cc();a.Cb("src",t.logo,a.qc)}}function P(t,e){1&t&&(a.Sb(0,"mat-icon"),a.wc(1,"filter_1"),a.Rb())}function y(t,e){if(1&t&&a.Ob(0,"goal",21),2&t){const t=e.$implicit;a.hc("teamname",t.team)("period",t.period)("timescored",t.timescored)("scorer",t.scorer.number)("home",t.ishometeam)("idx",t.id)("byid",!0)("showteamname",!1)("readonly",!1)}}function M(t,e){if(1&t&&a.Ob(0,"goal",21),2&t){const t=e.$implicit;a.hc("teamname",t.team)("period",t.period)("timescored",t.timescored)("scorer",t.scorer.number)("home",t.ishometeam)("idx",t.id)("byid",!0)("showteamname",!1)("readonly",!1)}}function S(t,e){if(1&t&&a.Ob(0,"goal",22),2&t){const t=e.$implicit,o=e.index;a.hc("teamname",t.team)("period",t.period)("timescored",t.timescored)("scorer",t.scorer.number)("home",t.ishometeam)("idx",o)("readonly",!1)}}const R=[{path:"",component:(()=>{class t{constructor(t,e,o){this.game=t,this.route=e,this.app=o,this.game=t,this.subscription=t.timer.update$.subscribe(t=>{switch(t.action){case"tick":case"reset":this.timer=t.value,this.periodChips={value:this.game.state.period,total:this.settings.periodTotal};break;case"start":this.running=!0;break;case"stop":this.running=!1}}),this.dbSub=t.db.dbReady$.subscribe(t=>{this.displayLogo()})}ngOnInit(){this.title=this.route.snapshot.data.title,this.teams=this.game.teams,this.score=this.game.score,this.progress=this.game.progress,this.timer=this.game.timer.value,this.running=this.game.timer.config.running,this.settings=this.game.settings,this.goals=this.game.state.goals,this.homegoals=this.game.goals.home,this.awaygoals=this.game.goals.away,this.goalscorers=this.game.goals.scorers,this.periodChips={value:this.game.state.period,total:this.settings.periodTotal},this.displayLogo()}ngOnDestroy(){this.subscription.unsubscribe(),this.dbSub.unsubscribe()}displayLogo(){this.game.db.getLogo().then((function(t){this.logo=t?t.value:null}).bind(this),t=>{this.app.debug(t,"warning")})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(r.a),a.Nb(i.a),a.Nb(c.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-scoreboard-page"]],decls:34,vars:25,consts:[["theme-page","",1,"scoreboard"],["theme-title-bg","",1,"_scoreboard-row"],["style","width:42px;height:42px;background-color: gray;",4,"ngIf"],[2,"display","inline-block"],[4,"ngIf"],[2,"font-size","16pt"],[1,"clock"],[3,"period","minutes","seconds","maxtime","running"],[1,"scoreboard-row"],[1,"item"],[3,"teamname","goals","behinds","points","home","notitle"],[1,"div_goalscorers"],[3,"showteamname"],[3,"teamname","period","timescored","scorer","home","idx","byid","showteamname","readonly",4,"ngFor","ngForOf"],[1,"item","vs"],[2,"line-height","5em"],[3,"teamname","goals","behinds","points","notitle"],[1,"div_goallist"],["theme-title-bg",""],[3,"teamname","period","timescored","scorer","home","idx","readonly",4,"ngFor","ngForOf"],[2,"width","42px","height","42px","background-color","gray"],[3,"teamname","period","timescored","scorer","home","idx","byid","showteamname","readonly"],[3,"teamname","period","timescored","scorer","home","idx","readonly"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div"),a.vc(3,k,1,1,"img",2),a.wc(4," \xa0 "),a.Sb(5,"h1",3),a.Sb(6,"span"),a.vc(7,P,2,0,"mat-icon",4),a.wc(8,"\xa0"),a.Rb(),a.wc(9),a.Rb(),a.wc(10," \xa0\xa0\xa0 "),a.Sb(11,"span",5),a.wc(12),a.Rb(),a.Rb(),a.Sb(13,"div",6),a.Ob(14,"game-clock",7),a.Rb(),a.Rb(),a.Sb(15,"div",8),a.Sb(16,"div",9),a.Ob(17,"team-score-set",10),a.Sb(18,"div",11),a.Sb(19,"goal-list",12),a.vc(20,y,1,9,"goal",13),a.Rb(),a.Rb(),a.Rb(),a.Sb(21,"div",14),a.Sb(22,"div",15),a.wc(23,"V"),a.Rb(),a.Rb(),a.Sb(24,"div",9),a.Ob(25,"team-score-set",16),a.Sb(26,"div",11),a.Sb(27,"goal-list",12),a.vc(28,M,1,9,"goal",13),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(29,"div",17),a.Sb(30,"h1",18),a.wc(31,"Goal List:"),a.Rb(),a.Sb(32,"goal-list"),a.vc(33,S,1,7,"goal",19),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.Bb(3),a.hc("ngIf",e.logo),a.Bb(4),a.hc("ngIf",!e.logo),a.Bb(2),a.xc(e.title),a.Bb(3),a.yc("Grade: ",e.game.settings.grade," "),a.Bb(2),a.hc("period",e.periodChips)("minutes",e.timer.minutes)("seconds",e.timer.seconds)("maxtime",e.settings.periodLength)("running",e.running),a.Bb(3),a.hc("teamname",e.teams.home.name)("goals",e.score.home.goals)("behinds",e.score.home.behinds)("points",e.score.home.value().points)("home",!0)("notitle",!1),a.Bb(2),a.hc("showteamname",!1),a.Bb(1),a.hc("ngForOf",e.homegoals),a.Bb(5),a.hc("teamname",e.teams.away.name)("goals",e.score.away.goals)("behinds",e.score.away.behinds)("points",e.score.away.value().points)("notitle",!1),a.Bb(2),a.hc("showteamname",!1),a.Bb(1),a.hc("ngForOf",e.awaygoals),a.Bb(5),a.hc("ngForOf",e.goals))},directives:[n.k,b,w,O,n.j,h.a,C],styles:[".scoreboard[_ngcontent-%COMP%]{font-family:LeagueGothic}.scoreboard[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]{font-family:times_sq;color:#0f0;background-color:#000;font-size:20pt}.scoreboard-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-moz-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:stretch}.scoreboard-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto}.scoreboard-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2){max-width:60px;min-width:60px;text-align:center;font-weight:700;font-size:20pt;vertical-align:middle;line-height:8em}.scoreboard-row[_ngcontent-%COMP%]   .item.vs[_ngcontent-%COMP%]{display:none}.scoreboard-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:first-child){-webkit-box-flex:1;flex:1 3 auto}.div_goallist[_ngcontent-%COMP%]{display:block}.div_goalscorers[_ngcontent-%COMP%]{display:none}@media only screen and (min-device-width:768px) and (max-device-width:1024px),only screen and (min-width:800px){.scoreboard-row[_ngcontent-%COMP%]{-moz-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.scoreboard-row[_ngcontent-%COMP%]   .item.vs[_ngcontent-%COMP%]{display:block}.div_goallist[_ngcontent-%COMP%]{display:none}.div_goalscorers[_ngcontent-%COMP%]{display:block}}"]}),t})(),data:{title:"Scorecard"}}];let B=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(R)],i.e]}),t})();var z=o("Bb+X");o.d(e,"ScoreboardModule",(function(){return j}));let j=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[n.c,B,z.a]]}),t})()}}]);
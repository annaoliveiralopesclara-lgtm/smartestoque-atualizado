import{c as n,j as a}from"./index-DTh8G7BD.js";/**
 * @license lucide-react v1.78.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};o.node;const p=n(o);/**
 * @license lucide-react v1.78.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};d.node;const _=n(d);function x({label:i,value:l,change:s,icon:e,tone:m="default",hint:t}){const r=typeof s=="number",c=r&&s>=0;return a.jsxs("article",{className:`stat-card stat-card--${m}`,children:[a.jsxs("div",{className:"stat-card__top",children:[a.jsx("span",{className:"stat-card__label",children:i}),e&&a.jsx("span",{className:"stat-card__icon","aria-hidden":"true",children:a.jsx(e,{size:18})})]}),a.jsx("strong",{className:"stat-card__value",children:l}),a.jsxs("div",{className:"stat-card__bottom",children:[t&&a.jsx("span",{className:"stat-card__hint",children:t}),r&&a.jsxs("span",{className:`stat-card__change ${c?"is-up":"is-down"}`,title:"Comparado ao mesmo período do mês anterior",children:[c?a.jsx(_,{size:14}):a.jsx(p,{size:14}),Math.abs(s),"%"]})]})]})}export{x as S};

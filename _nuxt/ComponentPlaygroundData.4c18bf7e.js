import b from"./TabsHeader.ab01fe6d.js";import g from"./ComponentPlaygroundProps.46cd7062.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.665f7d66.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.8bd7eafa.js";import{d as D,as as V,r as k,b as n,c as C,g as P,K as o,Y as m,at as T,f as s,l as B}from"./entry.f67a3bff.js";import"./ProseH4.8e173659.js";import"./ProseCodeInline.ae5a5e2f.js";import"./Badge.1fdde1d4.js";import"./slot.a3a0f86b.js";import"./node.e17d38ee.js";import"./ProseP.91a66d48.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=V(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,c)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":c[0]||(c[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-ef4d9ec9"]]);export{h as default};
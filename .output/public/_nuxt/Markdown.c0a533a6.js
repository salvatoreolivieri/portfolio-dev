import{h as a,k as l,l as t,m as d}from"./entry.39dd9560.js";const u=a({props:{content:{type:String,required:!0},inline:{type:Boolean,required:!1,default:!0},tag:{type:String,required:!1,default:"p"}},setup(e){const{$markdown:n}=l(),i=t(()=>e.inline?n&&n.renderInline(e.content):n&&n.render(e.content)),r=t(()=>e.inline?e.tag:"div");return()=>d(r.value,{class:e.inline?"utils-markdown":"utils-markdown whitespace-pre-line",innerHTML:i.value})}});export{u as _};
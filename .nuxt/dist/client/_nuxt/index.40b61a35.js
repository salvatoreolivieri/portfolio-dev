import{_ as C}from"./SubHero.vue_vue_type_script_setup_true_lang.f68a2390.js";import{h as y,o as e,b as i,t as w,a as k,f as o,r as $,e as r,u as _,q as x,F as u,p as h,c as v,j as d,s as j}from"./entry.39dd9560.js";import{_ as z}from"./Esc.8dcc8d35.js";import{_ as H}from"./Markdown.c0a533a6.js";const T={class:"inline-flex items-center text-sm bg-white rounded-lg focus:z-10 dark:bg-zinc-800 dark:text-zinc-200 ring-1 ring-zinc-900/5 font-bold shadow-lg py-2 px-4 dark:group-hover:stroke-zinc-40 hover:bg-gray-100 hover:text-gray-900"},S=y({__name:"Label",props:{text:String},setup(t){return(n,g)=>(e(),i("span",T,w(t.text),1))}}),B={},L={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},J=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"},null,-1),P=[J];function M(t,n){return e(),i("svg",L,P)}const D=k(B,[["render",M]]),I={},W={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16"},F=o("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"},null,-1),N=[F];function V(t,n){return e(),i("svg",W,N)}const U=k(I,[["render",V]]),A={class:"w-full min-h-[100px] ring-1 ring-zinc-100 rounded-lg max-w-[350px] md:min-h-[175px] relative"},q=["src"],E={key:0,class:"fixed flex justify-center items-center inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100 p-4 overflow-scroll"},G={class:"relative w-full h-full max-w-2xl md:h-auto"},R={class:"relative bg-white rounded-lg shadow dark:bg-zinc-900 ring-1 ring-zinc-900/5 dark:ring-zinc-800"},O={class:"flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"},K={class:"text-xl font-semibold text-gray-900 dark:text-white"},Q={class:"p-6"},X={class:"text-base leading-relaxed text-gray-500 dark:text-gray-400"},Y=o("br",null,null,-1),Z={key:0,class:"flex gap-3 flex-wrap"},ee={class:"flex items-center p-6 space-x-3 border-t border-gray-200 rounded-b dark:border-gray-600"},te=["href"],oe=["href"],ie=y({__name:"Card",props:{name:String,concept:String,image:String,technologies:Array,path:String,github:String},setup(t){const n=$(!1);return(g,a)=>{const p=S,m=z,c=H,l=D,f=U;return e(),i("div",A,[o("img",{onClick:a[0]||(a[0]=s=>n.value=!0),class:"cursor-pointer rounded-lg h-full w-full",src:t.image,alt:""},null,8,q),r(p,{onClick:a[1]||(a[1]=s=>n.value=!0),class:"absolute w-36 justify-center -bottom-4 left-[50%] -translate-x-1/2 cursor-pointer ring-1 ring-zinc-100 text-gray-900 dark:ring-zinc-100",text:"Discover Project"}),_(n)?(e(),i("div",E,[o("div",G,[o("div",R,[o("div",O,[o("h3",K,w(t.name),1),r(m,{onClick:a[2]||(a[2]=s=>n.value=!1)})]),o("div",Q,[o("p",X,[r(c,{inline:"",content:t.concept},null,8,["content"]),x(),Y]),t.technologies?(e(),i("div",Z,[(e(!0),i(u,null,h(t.technologies,(s,b)=>(e(),v(p,{key:`technology${b}`,text:s},null,8,["text"]))),128))])):d("",!0)]),o("div",ee,[t.path?(e(),i("a",{key:0,target:"_blank",href:t.path,class:"text-zinc-700 hover:text-zinc-800 bg-[#f4867e] hover:bg-[#f4867e]/80 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#f4867e]/90 dark:hover:bg-[#f4867e] flex items-center gap-2"},[r(l),x(" Visit")],8,te)):d("",!0),t.github?(e(),i("a",{key:1,target:"_blank",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-bold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 flex items-center gap-2",href:t.github},[r(f),x(" Github ")],8,oe)):d("",!0)])])])])):d("",!0)])}}}),ne=[{text:"Javascript"},{text:"Typescript"},{text:"NodeJs"},{text:"VueJs"},{text:"NuxtJs"},{text:"11ty"},{text:"CSS"},{text:"SCSS"},{text:"Tailwind CSS"},{text:"Bootstrap"},{text:"HTML"},{text:"PHP"},{text:"Laravel"}],ae=[{title:{label:"Cool Project"},projects:[{name:"Italian Philosophy Blog (salvatoreolivieri.net)",concept:`In 2017, I got a question mark tattoo on my right middle finger. It was the first time I thought about creating this blog and helping as many people as possible to ask the right questions and change their lives.

        This blog is the home of my introspective processes and the refuge of confused people, lost in oblivion and without a half.
        
        It was designed not to give any dogmatic answer, but to encourage the reader to ask questions.
        
        It was conceived to give life to a real digital museum: A place full of vintage, creative and counter-intuitive works of art.
        
        I wanted to create a space where art, philosophy and spiritual awareness could coexist and give visitors a sense of belonging.`,image:"/img/salvatore-olivieri-blog.png",technologies:["HTML","CSS","Javascript","Bootstrap","11ty"],path:"https://salvatoreolivieri.net/"},{name:"Arcade Mania",concept:"One of my first frontend project where I have developed six vintage game (available only Desktop). Happy to share it spontaneously to remember where I came from.",image:"/img/arcade-mania.png",technologies:["HTML","CSS","Javascript"],path:"https://arcade-mania.netlify.app/",github:"https://github.com/salvatoreolivieri/arcade-games"}]},{title:{label:"Famous Website Reproduction."},projects:[{name:"Netflix",concept:"Frontend replication of the famous Netflix streaming digital platform.",image:"/img/Netflix.png",technologies:["HTML","CSS","Javascript","Bootstrap","VueJs"],github:"https://github.com/salvatoreolivieri/netflix-replication"},{name:"WhatsApp Web",concept:"Frontend replication of WhatsApp Web Platform (also with dark mode feature).",image:"/img/WhatsappWeb-Dark.png",technologies:["HTML","CSS","Javascript","Bootstrap","VueJs"],github:"https://github.com/salvatoreolivieri/whatsapp-replication"},{name:"Spotify Web",concept:"Frontend replication of Spotify Web.",image:"/img/Spotify.png",technologies:["HTML","CSS","Javascript"],github:"https://github.com/salvatoreolivieri/spotifyweb-replication"},{name:"Discord",concept:"Frontend replication of Discord Website Homepage.",image:"/img/Discord.png",technologies:["HTML","CSS","Javascript"],github:"https://github.com/salvatoreolivieri/discord-replication"},{name:"DC Comics",concept:"Frontend replication of DC Comics Website Homepage.",image:"/img/DC-Comics.png",technologies:["HTML","CSS","Javascript","Bootstrap"],github:"https://github.com/salvatoreolivieri/dc-comics-replication"},{name:"Dropbox",concept:"Frontend replication of Dropbox Website Homepage.",image:"/img/Dropbox.png",technologies:["HTML","CSS","Javascript"],github:"https://github.com/salvatoreolivieri/dropbox-replication"},{name:"Playstation",concept:"Frontend replication of Playstation Website Homepage.",image:"/img/Playstation.png",technologies:["HTML","CSS","Javascript","Bootstrap"],github:"https://github.com/salvatoreolivieri/playstation-replication"}]},{title:{label:"BluePrint Ready To Use"},projects:[{name:"Nuxt Blueprint",concept:"Here you can find a simple Nuxt + TailwindCSS blueprint Project Configuration ready to use for professional project. Feel free to use it to your own creation.",image:"/img/nuxt_tailwind.png",technologies:["NuxtJs","Tailwind CSS"],github:"https://github.com/salvatoreolivieri/nuxt-blueprint"},{name:"11ty Blueprint",concept:"Here you can find a simple 11ty blueprint Project Configuration ready to use for personal project. Feel free to use it to your own creation",image:"/img/11ty.png",technologies:["11ty"],github:"https://github.com/salvatoreolivieri/eleventy-blueprint"}]}],re={class:"container-padded-sm"},se={class:"mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800"},ce={class:"mb-20 md:px-0 gap-10 flex flex-wrap flex-col md:flex-row"},le=o("h3",{class:"mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800"}," Technologies Used Daily ",-1),ge={class:"flex gap-3 flex-wrap mb-10"},pe=y({__name:"Project",setup(t){return(n,g)=>{const a=C,p=ie,m=S;return e(),i("div",re,[r(a,{title:"Stuff created spreading creativity",text:"In this page you can find **all the project I have developed**. Each project is a **peace of me** created with **joy** and **enthusiasm**."}),(e(!0),i(u,null,h(_(ae),({projects:c,title:l},f)=>(e(),i("div",{key:`project${f}`},[o("h3",se,w(l.label),1),o("div",ce,[(e(!0),i(u,null,h(c,(s,b)=>(e(),v(p,j({key:`card${b}`},s),null,16))),128))])]))),128)),le,o("div",ge,[(e(!0),i(u,null,h(_(ne),({text:c},l)=>(e(),v(m,{key:`label${l}`,text:c,class:"text-gray-500"},null,8,["text"]))),128))])])}}}),de={};function ue(t,n){const g=pe;return e(),i("div",null,[r(g)])}const xe=k(de,[["render",ue]]);export{xe as default};

"use strict";(self.webpackChunkdocusaurus_share=self.webpackChunkdocusaurus_share||[]).push([[3052],{9452:(e,t,s)=>{s.d(t,{c:()=>f});var a=s(1504),n=s(5456),r=s(7468),l=s(1432),i=s(867),o=s(4357),c=s(5592),m=s(3376);function d(e){const{pathname:t}=(0,c.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Sc)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(7624);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.c)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.c)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(5168);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Mx,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,l.U)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(r.c,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.c)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},7792:(e,t,s)=>{s.d(t,{c:()=>A});s(1504);var a=s(5456),n=s(3152),r=s(964),l=s(7624);function i(e){let{children:t,className:s}=e;const{frontMatter:a,assets:i,metadata:{description:o}}=(0,n.g)(),{withBaseUrl:c}=(0,r.E)(),m=i.image??a.image,d=a.keywords??[];return(0,l.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,l.jsx)("meta",{itemProp:"description",content:o}),m&&(0,l.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(867);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:r}=(0,n.g)(),{permalink:i,title:m}=s,d=r?"h1":"h2";return(0,l.jsx)(d,{className:(0,a.c)(c.title,t),itemProp:"headline",children:r?m:(0,l.jsx)(o.c,{itemProp:"url",to:i,children:m})})}var d=s(4357),u=s(5944);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.A)();return t=>{const s=Math.ceil(t);return e(s,(0,d.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,l.jsx)(l.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,n.g)(),{date:r,formattedDate:i,readingTime:o}=s;return(0,l.jsxs)("div",{className:(0,a.c)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:r,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{readingTime:o})]})]})}function b(e){return e.href?(0,l.jsx)(o.c,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:n,title:r,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,a.c)("avatar margin-bottom--sm",s),children:[o&&(0,l.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(b,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:n})})}),r&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function _(e){let{className:t}=e;const{metadata:{authors:s},assets:r}=(0,n.g)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,a.c)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,l.jsx)("div",{className:(0,a.c)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,l.jsx)(f,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(j,{}),(0,l.jsx)(_,{})]})}var P=s(5684),k=s(9236);function T(e){let{children:t,className:s}=e;const{isBlogPostPage:r}=(0,n.g)();return(0,l.jsx)("div",{id:r?P.blogPostContainerID:void 0,className:(0,a.c)("markdown",s),itemProp:"articleBody",children:(0,l.jsx)(k.c,{children:t})})}var w=s(7790),I=s(1096);function F(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...s}=e;return(0,l.jsx)(o.c,{"aria-label":(0,d.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,l.jsx)(F,{})})}const y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function C(){const{metadata:e,isBlogPostPage:t}=(0,n.g)(),{tags:s,title:r,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,l.jsxs)("footer",{className:(0,a.c)("row docusaurus-mt-lg",t&&y.blogPostFooterDetailsFull),children:[m&&(0,l.jsx)("div",{className:(0,a.c)("col",{"col--9":c}),children:(0,l.jsx)(I.c,{tags:s})}),t&&i&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(w.c,{editUrl:i})}),c&&(0,l.jsx)("div",{className:(0,a.c)("col text--right",{"col--3":m}),children:(0,l.jsx)(L,{blogPostTitle:r,to:e.permalink})})]}):null}function A(e){let{children:t,className:s}=e;const r=function(){const{isBlogPostPage:e}=(0,n.g)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(i,{className:(0,a.c)(r,s),children:[(0,l.jsx)(N,{}),(0,l.jsx)(T,{children:t}),(0,l.jsx)(C,{})]})}},7790:(e,t,s)=>{s.d(t,{c:()=>m});s(1504);var a=s(4357),n=s(5864),r=s(867),l=s(5456);const i={iconEdit:"iconEdit_Z9Sw"};var o=s(7624);function c(e){let{className:t,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.c)(i.iconEdit,t),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.c,{to:t,className:n.W.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(a.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},308:(e,t,s)=>{s.d(t,{c:()=>l});s(1504);var a=s(5456),n=s(867),r=s(7624);function l(e){const{permalink:t,title:s,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.c,{className:(0,a.c)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:s})]})}},3020:(e,t,s)=>{s.d(t,{c:()=>i});s(1504);var a=s(5456),n=s(867);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(7624);function i(e){let{permalink:t,label:s,count:i}=e;return(0,l.jsxs)(n.c,{href:t,className:(0,a.c)(r.tag,i?r.tagWithCount:r.tagRegular),children:[s,i&&(0,l.jsx)("span",{children:i})]})}},1096:(e,t,s)=>{s.d(t,{c:()=>o});s(1504);var a=s(5456),n=s(4357),r=s(3020);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=s(7624);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.c)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.c,{label:t,permalink:s})},s)}))})]})}},3152:(e,t,s)=>{s.d(t,{E:()=>i,g:()=>o});var a=s(1504),n=s(1100),r=s(7624);const l=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,r.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(l);if(null===e)throw new n.AH("BlogPostProvider");return e}},5944:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(1504),n=s(8264);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.c)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}}}]);
(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[4232,4442],{2623:(e,t,o)=>{"use strict";o.d(t,{A:()=>f});var a=o(1609),l=o(6087),s=o(7723),r=o(851),n=o(5703),c=o(2796),i=o(2150),d=o(1616),u=o(9499),m=o(8537),p=o(3905),g=(o(5183),o(3945));const y=e=>(0,a.createElement)("img",{...e,src:n.PLACEHOLDER_IMG_SRC,alt:e.alt,width:void 0,height:void 0}),h=({image:e,loaded:t,showFullSize:o,fallbackAlt:s,width:r,scale:n,height:c,aspectRatio:i})=>{const{thumbnail:d,src:u,srcset:m,sizes:p,alt:g}=e||{},h={alt:g||s,hidden:!t,src:d,...o&&{src:u,srcSet:m,sizes:p}},f={height:c,width:r,objectFit:n,aspectRatio:i};return(0,a.createElement)(l.Fragment,null,h.src&&(0,a.createElement)("img",{style:f,"data-testid":"product-image",...h}),!e&&(0,a.createElement)(y,{style:f,alt:h.alt}))},f=(0,d.withProductDataContext)((e=>{const{className:t,imageSizing:o=g.e.SINGLE,showProductLink:n=!0,showSaleBadge:d,saleBadgeAlign:f="right",height:b,width:v,scale:k,aspectRatio:w,...S}=e,C=(0,i.p)(e),{parentClassName:N}=(0,c.useInnerBlockLayoutContext)(),{product:_,isLoading:x}=(0,c.useProductDataContext)(),{dispatchStoreEvent:E}=(0,u.y)();if(!_.id)return(0,a.createElement)("div",{className:(0,r.A)(t,"wc-block-components-product-image",{[`${N}__product-image`]:N},C.className),style:C.style},(0,a.createElement)(y,null));const A=!!_.images.length,B=A?_.images[0]:null,L=n?"a":l.Fragment,D=(0,s.sprintf)(/* translators: %s is referring to the product name */ /* translators: %s is referring to the product name */
(0,s.__)("Link to %s","woocommerce"),_.name),$={href:_.permalink,...!A&&{"aria-label":D},onClick:()=>{E("product-view-link",{product:_})}};return delete S.style,(0,a.createElement)("div",{className:(0,r.A)(t,"wc-block-components-product-image",{[`${N}__product-image`]:N},C.className),style:C.style},(0,a.createElement)(L,{...n&&$},!!d&&(0,a.createElement)(p.default,{align:f,...S}),(0,a.createElement)(h,{fallbackAlt:(0,m.decodeEntities)(_.name),image:B,loaded:!x,showFullSize:o!==g.e.THUMBNAIL,width:v,height:b,scale:k,aspectRatio:w})))}))},2934:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var a=o(1616),l=o(2623),s=o(7746);const r=(0,a.withFilteredAttributes)(s.attributes)(l.A)},3905:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Block:()=>d,default:()=>u});var a=o(1609),l=o(7723),s=o(851),r=o(4656),n=o(2796),c=o(2150),i=o(1616);o(6007);const d=e=>{const{className:t,align:o}=e,i=(0,c.p)(e),{parentClassName:d}=(0,n.useInnerBlockLayoutContext)(),{product:u}=(0,n.useProductDataContext)();if(!(u.id&&u.on_sale||e.isDescendentOfSingleProductTemplate))return null;const m="string"==typeof o?`wc-block-components-product-sale-badge--align-${o}`:"";return(0,a.createElement)("div",{className:(0,s.A)("wc-block-components-product-sale-badge",t,m,{[`${d}__product-onsale`]:d},i.className),style:i.style},(0,a.createElement)(r.Label,{label:(0,l.__)("Sale","woocommerce"),screenReaderLabel:(0,l.__)("Product on sale","woocommerce")}))},u=(0,i.withProductDataContext)(d)},9499:(e,t,o)=>{"use strict";o.d(t,{y:()=>r});var a=o(2619),l=o(7143),s=o(6087);const r=()=>({dispatchStoreEvent:(0,s.useCallback)(((e,t={})=>{try{(0,a.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,s.useCallback)(((e,t={})=>{try{(0,a.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,l.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},2150:(e,t,o)=>{"use strict";o.d(t,{p:()=>n});var a=o(851),l=o(3993),s=o(3924),r=o(104);const n=e=>{const t=(e=>{const t=(0,l.isObject)(e)?e:{style:{}};let o=t.style;return(0,l.isString)(o)&&(o=JSON.parse(o)||{}),(0,l.isObject)(o)||(o={}),{...t,style:o}})(e),o=(0,r.BK)(t),n=(0,r.aR)(t),c=(0,r.fo)(t),i=(0,s.x)(t);return{className:(0,a.A)(i.className,o.className,n.className,c.className),style:{...i.style,...o.style,...n.style,...c.style}}}},3924:(e,t,o)=>{"use strict";o.d(t,{x:()=>l});var a=o(3993);const l=e=>{const t=(0,a.isObject)(e.style.typography)?e.style.typography:{},o=(0,a.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},104:(e,t,o)=>{"use strict";o.d(t,{BK:()=>i,aR:()=>d,fo:()=>u});var a=o(851),l=o(1194),s=o(9786),r=o(3993);function n(e={}){const t={};return(0,s.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function c(e,t){return e&&t?`has-${(0,l.c)(t)}-${e}`:""}function i(e){var t,o,l,s,i,d,u;const{backgroundColor:m,textColor:p,gradient:g,style:y}=e,h=c("background-color",m),f=c("color",p),b=function(e){if(e)return`has-${e}-gradient-background`}(g),v=b||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:(0,a.A)(f,b,{[h]:!v&&!!h,"has-text-color":p||(null==y||null===(o=y.color)||void 0===o?void 0:o.text),"has-background":m||(null==y||null===(l=y.color)||void 0===l?void 0:l.background)||g||(null==y||null===(s=y.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,r.isObject)(null==y||null===(i=y.elements)||void 0===i?void 0:i.link)?null==y||null===(d=y.elements)||void 0===d||null===(u=d.link)||void 0===u?void 0:u.color:void 0}),style:n({color:(null==y?void 0:y.color)||{}})}}function d(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:l}=e,s=o?c("border-color",o):"";return(0,a.A)({"has-border-color":!!o||!(null==l||null===(t=l.border)||void 0===t||!t.color),[s]:!!s})}(e),style:n({border:o})}}function u(e){var t;return{className:void 0,style:n({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},5183:()=>{},6007:()=>{},7746:e=>{"use strict";e.exports=JSON.parse('{"name":"woocommerce/product-image","version":"1.0.0","title":"Product Image","description":"Display the main product image.","category":"woocommerce-product-elements","attributes":{"showProductLink":{"type":"boolean","default":true},"showSaleBadge":{"type":"boolean","default":true},"saleBadgeAlign":{"type":"string","default":"right"},"imageSizing":{"type":"string","default":"single"},"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"width":{"type":"string"},"height":{"type":"string"},"scale":{"type":"string","default":"cover"},"aspectRatio":{"type":"string"}},"usesContext":["query","queryId","postId"],"keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}')}}]);
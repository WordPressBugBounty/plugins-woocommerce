"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3994],{32009:(e,t,r)=>{r.d(t,{O3:()=>a,be:()=>n,u8:()=>i});var o=r(65736),s=r(92694);const a=(0,s.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:(0,o.__)("Gross sales","woocommerce"),order:"desc",orderby:"gross_sales",type:"currency",isReverseTrend:!1},{key:"refunds",label:(0,o.__)("Returns","woocommerce"),order:"desc",orderby:"refunds",type:"currency",isReverseTrend:!0},{key:"coupons",label:(0,o.__)("Coupons","woocommerce"),order:"desc",orderby:"coupons",type:"currency",isReverseTrend:!1},{key:"net_revenue",label:(0,o.__)("Net sales","woocommerce"),orderby:"net_revenue",type:"currency",isReverseTrend:!1,labelTooltipText:(0,o.__)("Full refunds are not deducted from tax or net sales totals","woocommerce")},{key:"taxes",label:(0,o.__)("Taxes","woocommerce"),order:"desc",orderby:"taxes",type:"currency",isReverseTrend:!1,labelTooltipText:(0,o.__)("Full refunds are not deducted from tax or net sales totals","woocommerce")},{key:"shipping",label:(0,o.__)("Shipping","woocommerce"),orderby:"shipping",type:"currency",isReverseTrend:!1},{key:"total_sales",label:(0,o.__)("Total sales","woocommerce"),order:"desc",orderby:"total_sales",type:"currency",isReverseTrend:!1}]),n=(0,s.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{filters:{},title:(0,o._x)("Revenue Matches <select/> Filters","A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),l=[];Object.keys(n.filters).length&&(l.push({label:(0,o.__)("All Revenue","woocommerce"),value:"all"}),l.push({label:(0,o.__)("Advanced Filters","woocommerce"),value:"advanced"}));const i=(0,s.applyFilters)("woocommerce_admin_revenue_report_filters",[{label:(0,o.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>l.length>0,filters:l}])},67090:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var o=r(69307),s=r(69596),a=r.n(s),n=r(65736),l=r(32009),i=r(67327),c=r(62671),d=r(17853),u=r(69771),m=r(9818),p=r(94333),_=r(92819),y=r(86020),b=r(81595),g=r(67221),h=r(81921),w=r(35980),v=r(17844),f=r(66777),S=r(91978),R=r(81514);const T=[],x=["orders_count","gross_sales","total_sales","refunds","coupons","taxes","shipping","net_revenue"];class k extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,n.__)("Date","woocommerce"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:(0,n.__)("Orders","woocommerce"),key:"orders_count",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Gross sales","woocommerce"),key:"gross_sales",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Returns","woocommerce"),key:"refunds",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Coupons","woocommerce"),key:"coupons",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Net sales","woocommerce"),key:"net_revenue",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Taxes","woocommerce"),key:"taxes",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Shipping","woocommerce"),key:"shipping",required:!1,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Total sales","woocommerce"),key:"total_sales",required:!1,isSortable:!0,isNumeric:!0}]}getRowsContent(e=[]){const t=(0,S.O3)("dateFormat",h.defaultTableDateFormat),{formatAmount:r,render:o,formatDecimal:s,getCurrencyConfig:a}=this.context;return e.map((e=>{const{coupons:n,gross_sales:l,total_sales:i,net_revenue:c,orders_count:d,refunds:m,shipping:p,taxes:_}=e.subtotals,g=(0,R.jsx)(y.Link,{href:`edit.php?post_type=shop_order&order_date_type=${this.props.dateType}&m=`+(0,u.format)("Ymd",e.date_start),type:"wp-admin",children:(0,b.formatValue)(a(),"number",d)});return[{display:(0,R.jsx)(y.Date,{date:e.date_start,visibleFormat:t}),value:e.date_start},{display:g,value:Number(d)},{display:o(l),value:s(l)},{display:r(m),value:s(m)},{display:r(n),value:s(n)},{display:o(c),value:s(c)},{display:o(_),value:s(_)},{display:o(p),value:s(p)},{display:o(i),value:s(i)}]}))}getSummary(e,t=0){const{orders_count:r=0,gross_sales:o=0,total_sales:s=0,refunds:a=0,coupons:l=0,taxes:i=0,shipping:c=0,net_revenue:d=0}=e,{formatAmount:u,getCurrencyConfig:m}=this.context,p=m();return[{label:(0,n._n)("day","days",t,"woocommerce"),value:(0,b.formatValue)(p,"number",t)},{label:(0,n._n)("order","orders",r,"woocommerce"),value:(0,b.formatValue)(p,"number",r)},{label:(0,n.__)("Gross sales","woocommerce"),value:u(o)},{label:(0,n.__)("Returns","woocommerce"),value:u(a)},{label:(0,n.__)("Coupons","woocommerce"),value:u(l)},{label:(0,n.__)("Net sales","woocommerce"),value:u(d)},{label:(0,n.__)("Taxes","woocommerce"),value:u(i)},{label:(0,n.__)("Shipping","woocommerce"),value:u(c)},{label:(0,n.__)("Total sales","woocommerce"),value:u(s)}]}render(){const{advancedFilters:e,filters:t,tableData:r,query:o}=this.props;return(0,R.jsx)(f.Z,{endpoint:"revenue",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:x,query:o,tableData:r,title:(0,n.__)("Revenue","woocommerce"),columnPrefsKey:"revenue_report_columns",filters:t,advancedFilters:e})}}k.contextType=v.CurrencyContext;const C=(0,_.memoize)(((e,t,r,o,s)=>({tableData:{items:{data:(0,_.get)(o,["data","intervals"],T),totalResults:(0,_.get)(o,["totalResults"],0)},isError:e,isRequesting:t,query:r},dateType:s})),((e,t,r,o,s)=>[e,t,(0,w.stringify)(r),(0,_.get)(o,["totalResults"],0),(0,_.get)(o,["data","intervals"],T).length,s].join(":"))),q=(0,_.memoize)(((e,t,r,o,s)=>({interval:"day",orderby:t,order:e,page:r,per_page:o,after:(0,h.appendTimestamp)(s.primary.after,"start"),before:(0,h.appendTimestamp)(s.primary.before,"end")})),((e,t,r,o,s)=>[e,t,r,o,s.primary.after,s.primary.before].join(":"))),F=(0,p.compose)((0,m.withSelect)(((e,t)=>{const{query:r,filters:o,advancedFilters:s}=t,{woocommerce_default_date_range:a}=e(g.settingsStore).getSetting("wc_admin","wcAdminSettings"),{getOption:n}=e(g.optionsStore),l=n("woocommerce_date_type")||"date_paid",i=(0,h.getCurrentDates)(r,a),{getReportStats:c,getReportStatsError:d,isResolving:u}=e(g.REPORTS_STORE_NAME),m=q(r.order||"desc",r.orderby||"date",r.paged||1,r.per_page||g.QUERY_DEFAULTS.pageSize,i),p=(0,g.getReportTableQuery)({endpoint:"revenue",query:r,select:e,tableQuery:m,filters:o,advancedFilters:s}),_=c("revenue",p),y=Boolean(d("revenue",p)),b=u("getReportStats",["revenue",p]);return C(y,b,m,_,l)})))(k);var N=r(56739),O=r(70522);class j extends o.Component{render(){const{path:e,query:t}=this.props;return(0,R.jsxs)(o.Fragment,{children:[(0,R.jsx)(N.Z,{query:t,path:e,report:"revenue",filters:l.u8,advancedFilters:l.be}),(0,R.jsx)(d.Z,{charts:l.O3,endpoint:"revenue",query:t,selectedChart:(0,i.Z)(t.chart,l.O3),filters:l.u8,advancedFilters:l.be}),(0,R.jsx)(c.Z,{charts:l.O3,endpoint:"revenue",path:e,query:t,selectedChart:(0,i.Z)(t.chart,l.O3),filters:l.u8,advancedFilters:l.be}),(0,R.jsx)(F,{query:t,filters:l.u8,advancedFilters:l.be}),(0,R.jsx)(O.I,{optionName:"woocommerce_revenue_report_date_tour_shown",headingText:(0,n.__)("Revenue is now reported from paid orders ✅","woocommerce")})]})}}j.propTypes={path:a().string.isRequired,query:a().object.isRequired}},70522:(e,t,r)=>{r.d(t,{I:()=>u});var o=r(86020),s=r(65736),a=r(67221),n=r(69307),l=r(9818),i=r(74617),c=r(81514);const d="woocommerce_date_type",u=({optionName:e,headingText:t})=>{const[r,u]=(0,n.useState)(!1),{updateOptions:m}=(0,l.useDispatch)(a.optionsStore),{shouldShowTour:p,isResolving:_}=(0,l.useSelect)((t=>{const{getOption:r,hasFinishedResolution:o}=t(a.optionsStore);return{shouldShowTour:"yes"!==r(e)&&!1===r(d),isResolving:!o("getOption",[e])||!o("getOption",[d])}}),[e]);if(r||!p||_)return null;const y={steps:[{referenceElements:{desktop:".woocommerce-filters-filter > .components-dropdown"},focusElement:{desktop:".woocommerce-filters-filter > .components-dropdown"},meta:{name:"product-feedback-",heading:t,descriptions:{desktop:(0,n.createInterpolateElement)((0,s.__)("We now collect orders in this table based on when the payment went through, rather than when they were placed. You can change this in <link>settings</link>.","woocommerce"),{link:(0,n.createElement)("a",{href:(0,i.getAdminLink)("admin.php?page=wc-admin&path=/analytics/settings"),"aria-label":(0,s.__)("Analytics date settings","woocommerce")})})},primaryButton:{text:(0,s.__)("Got it","woocommerce")}},options:{classNames:{desktop:"woocommerce-revenue-report-date-tour"}}}],closeHandler:()=>{m({[e]:"yes"}),u(!0)}};return(0,c.jsx)(o.TourKit,{config:y})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2UlV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/api/README.md"}});var b={_frontmatter:o},r=i.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(r,l({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"api"},"API"),Object(n.b)("p",null,"React Table uses React Hooks both internally and externally for almost all of its configuration and lifecycle management. Naturally, this is what allows React Table to be headless and lightweight while still having a concise and simple API."),Object(n.b)("p",null,"React Table is essentially a compatible collection of ",Object(n.b)("strong",{parentName:"p"},"custom React hooks"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The primary React Table hook",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useTable"}),Object(n.b)("inlineCode",{parentName:"a"},"useTable"))))),Object(n.b)("li",{parentName:"ul"},"Plugin Hooks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Core Plugin Hooks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useGroupBy"}),Object(n.b)("inlineCode",{parentName:"a"},"useGroupBy"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useFilters"}),Object(n.b)("inlineCode",{parentName:"a"},"useFilters"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useGlobalFilter"}),Object(n.b)("inlineCode",{parentName:"a"},"useGlobalFilter"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useSortBy"}),Object(n.b)("inlineCode",{parentName:"a"},"useSortBy"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useExpanded"}),Object(n.b)("inlineCode",{parentName:"a"},"useExpanded"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/usePagination"}),Object(n.b)("inlineCode",{parentName:"a"},"usePagination"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useTokenPagination"}),Object(n.b)("inlineCode",{parentName:"a"},"useTokenPagination")," (Coming Soon)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useRowSelect"}),Object(n.b)("inlineCode",{parentName:"a"},"useRowSelect"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useRowState"}),Object(n.b)("inlineCode",{parentName:"a"},"useRowState"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useColumnOrder"}),Object(n.b)("inlineCode",{parentName:"a"},"useColumnOrder"))))),Object(n.b)("li",{parentName:"ul"},"Layout Hooks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useBlockLayout"}),Object(n.b)("inlineCode",{parentName:"a"},"useBlockLayout"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useAbsoluteLayout"}),Object(n.b)("inlineCode",{parentName:"a"},"useAbsoluteLayout"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useFlexLayout"}),Object(n.b)("inlineCode",{parentName:"a"},"useFlexLayout"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"./api/useResizeColumns"}),Object(n.b)("inlineCode",{parentName:"a"},"useResizeColumns"))))))),Object(n.b)("li",{parentName:"ul"},"3rd Party Plugin Hooks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Want your custom plugin hook listed here? ",Object(n.b)("a",l({parentName:"li"},{href:"https://github.com/tannerlinsley/react-table/compare"}),"Submit a PR!"))))),Object(n.b)("h3",{id:"hook-usage"},"Hook Usage"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"useTable")," is the ",Object(n.b)("strong",{parentName:"p"},"primary")," hook used to build a React Table. It serves as the starting point for ",Object(n.b)("strong",{parentName:"p"},"every option and every plugin hook")," that React Table supports. The options passed into ",Object(n.b)("inlineCode",{parentName:"p"},"useTable")," are supplied to every plugin hook after it in the order they are supplied, eventually resulting in a final ",Object(n.b)("inlineCode",{parentName:"p"},"instance")," object that you can use to build your table UI and interact with the table's state."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-js"}),"const instance = useTable(\n  {\n    data: [...],\n    columns: [...],\n  },\n  useGroupBy,\n  useFilters,\n  useSortBy,\n  useExpanded,\n  usePagination\n)\n")),Object(n.b)("h3",{id:"the-stages-of-react-table-and-plugins"},"The stages of React Table and plugins"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"useTable")," is called. A table instance is created."),Object(n.b)("li",{parentName:"ol"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"instance.state")," is resolved from either a custom user state or an automatically generated one."),Object(n.b)("li",{parentName:"ol"},"A collection of plugin points is created at ",Object(n.b)("inlineCode",{parentName:"li"},"instance.hooks"),"."),Object(n.b)("li",{parentName:"ol"},"Each plugin is given the opportunity to add hooks to ",Object(n.b)("inlineCode",{parentName:"li"},"instance.hook"),"."),Object(n.b)("li",{parentName:"ol"},"As the ",Object(n.b)("inlineCode",{parentName:"li"},"useTable")," logic proceeds to run, each plugin hook type is used at a specific point in time with each individual hook function being executed the order it was registered."),Object(n.b)("li",{parentName:"ol"},"The final instance object is returned from ",Object(n.b)("inlineCode",{parentName:"li"},"useTable"),", which the developer then uses to construct their table.")),Object(n.b)("p",null,"This multi-stage process is the secret sauce that allows React Table plugin hooks to work together and compose nicely, while not stepping on each others toes."),Object(n.b)("p",null,"To dive deeper into plugins, see Plugins and the Plugin Guide"),Object(n.b)("h3",{id:"plugin-hook-order--consistency"},"Plugin Hook Order & Consistency"),Object(n.b)("p",null,"The order and usage of plugin hooks must follow The Laws of Hooks, just like any other custom hook. They must always be unconditionally called in the same order."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE: In the event that you want to programmatically enable or disable plugin hooks, most of them provide options to disable their functionality, eg. ",Object(n.b)("inlineCode",{parentName:"strong"},"options.disableSortBy")))),Object(n.b)("h3",{id:"option-memoization"},"Option Memoization"),Object(n.b)("p",null,"React Table relies on memoization to determine when state and side effects should update or be calculated. This means that every option you pass to ",Object(n.b)("inlineCode",{parentName:"p"},"useTable")," should be memoized either via ",Object(n.b)("inlineCode",{parentName:"p"},"React.useMemo")," (for objects) or ",Object(n.b)("inlineCode",{parentName:"p"},"React.useCallback")," (for functions)."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/api/README.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-api-readme-md-a782dc93c6e1d37daab0.js.map
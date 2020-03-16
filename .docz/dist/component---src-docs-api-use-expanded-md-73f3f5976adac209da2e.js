(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{gOrv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/api/useExpanded.md"}});var r={_frontmatter:o},b=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,l({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"useexpanded"},Object(n.b)("inlineCode",{parentName:"h1"},"useExpanded")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Plugin Hook"),Object(n.b)("li",{parentName:"ul"},"Optional")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"useExpanded")," is the hook that implements ",Object(n.b)("strong",{parentName:"p"},"row expanding"),". It is most often used with ",Object(n.b)("inlineCode",{parentName:"p"},"useGroupBy")," to expand grouped rows or on its own with nested ",Object(n.b)("inlineCode",{parentName:"p"},"subRows")," in tree-like ",Object(n.b)("inlineCode",{parentName:"p"},"data")," sets, but is not limited to these use-cases. It supports expanding rows both via internal table state and also via a hard-coded key on the raw row model."),Object(n.b)("h3",{id:"table-options"},"Table Options"),Object(n.b)("p",null,"The following options are supported via the main options object passed to ",Object(n.b)("inlineCode",{parentName:"p"},"useTable(options)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"initialState.expanded: Object<rowId: String, expanded: Bool>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Optional"),Object(n.b)("li",{parentName:"ul"},"Must be ",Object(n.b)("strong",{parentName:"li"},"memoized")),Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("inlineCode",{parentName:"li"},"object")," of expanded row IDs with boolean property values."),Object(n.b)("li",{parentName:"ul"},"If a row's id is set to true in this object, that row will have an expanded state. For example, if ",Object(n.b)("inlineCode",{parentName:"li"},"{ '3': true }")," was passed as the ",Object(n.b)("inlineCode",{parentName:"li"},"expanded")," state, by default the ",Object(n.b)("strong",{parentName:"li"},"4th row in the original data array")," would be expanded, since it would have that ID"),Object(n.b)("li",{parentName:"ul"},"For nested expansion, you can ",Object(n.b)("strong",{parentName:"li"},"use nested IDs like ",Object(n.b)("inlineCode",{parentName:"strong"},"1.3"))," to expand sub rows. For example, if ",Object(n.b)("inlineCode",{parentName:"li"},"{ '3': true, '3.5': true }")," was passed as the ",Object(n.b)("inlineCode",{parentName:"li"},"expanded")," state, then the ",Object(n.b)("strong",{parentName:"li"},"the 4th row would be expanded, along with the 6th subRow of the 4th row as well"),"."),Object(n.b)("li",{parentName:"ul"},"This information is stored in state since the table is allowed to manipulate the filter through user interaction."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"getSubRows: Function(row, relativeIndex) => Rows[]"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Optional"),Object(n.b)("li",{parentName:"ul"},"See the ",Object(n.b)("a",l({parentName:"li"},{href:"#table-options"}),"useTable hook")," for more details"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"manualExpandedKey: String"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Optional"),Object(n.b)("li",{parentName:"ul"},"Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"expanded")),Object(n.b)("li",{parentName:"ul"},"This string is used as the key to detect manual expanded state on any given row. For example, if a raw data row like ",Object(n.b)("inlineCode",{parentName:"li"},"{ name: 'Tanner Linsley', friends: [...], expanded: true}")," was detected, it would always be expanded, regardless of state."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"expandSubRows: Bool"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Optional"),Object(n.b)("li",{parentName:"ul"},"Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true")),Object(n.b)("li",{parentName:"ul"},"If set to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", expanded rows are rendered along with normal rows."),Object(n.b)("li",{parentName:"ul"},"If set to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),", expanded rows will only be available through their parent row. This could be useful if you are implementing a custom expanded row view."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"autoResetExpanded: Boolean"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true")),Object(n.b)("li",{parentName:"ul"},"When ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(n.b)("inlineCode",{parentName:"li"},"expanded")," state will automatically reset if any of the following conditions are met:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data")," is changed"))),Object(n.b)("li",{parentName:"ul"},"To disable, set to ",Object(n.b)("inlineCode",{parentName:"li"},"false")),Object(n.b)("li",{parentName:"ul"},"For more information see the FAQ ",Object(n.b)("a",l({parentName:"li"},{href:"../faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes"}),'"How do I stop my table state from automatically resetting when my data changes?"'))))),Object(n.b)("h3",{id:"instance-properties"},"Instance Properties"),Object(n.b)("p",null,"The following properties are available on the table instance returned from ",Object(n.b)("inlineCode",{parentName:"p"},"useTable")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"rows: Array<Row>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"An array of ",Object(n.b)("strong",{parentName:"li"},"expanded")," rows."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"toggleRowExpanded: Function(rowId, isExpanded?)"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A function to toggle whether a row is expanded or not. The ",Object(n.b)("inlineCode",{parentName:"li"},"isExpanded")," boolean is optional, otherwise it will be a true toggle action"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"toggleAllRowsExpanded: Function(isExpanded?)"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A function to toggle whether all of the rows in the table are expanded or not. The ",Object(n.b)("inlineCode",{parentName:"li"},"isExpanded")," boolean is optional, otherwise it will be a true toggle action"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isAllRowsExpanded")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"getToggleAllRowsExpandedProps: Function(userProps) => props"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A prop getter function that returns all necessary props for an element to be clicked and toggle all of the rows expanded or not.")))),Object(n.b)("h3",{id:"row-properties"},"Row Properties"),Object(n.b)("p",null,"The following additional properties are available on every ",Object(n.b)("inlineCode",{parentName:"p"},"row")," object returned by the table instance."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isExpanded: Bool"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", this row is in an expanded state."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"toggleRowExpanded: Function(?isExpanded: Bool) => void"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This function will toggle the expanded state of a row between ",Object(n.b)("inlineCode",{parentName:"li"},"true")," and ",Object(n.b)("inlineCode",{parentName:"li"},"false")," or, if an ",Object(n.b)("inlineCode",{parentName:"li"},"isExpanded")," boolean is passed to the function, it will be set as the new ",Object(n.b)("inlineCode",{parentName:"li"},"isExpanded")," value."),Object(n.b)("li",{parentName:"ul"},"Rows with a hard-coded ",Object(n.b)("inlineCode",{parentName:"li"},"manualExpandedKey")," (defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"expanded"),") set to ",Object(n.b)("inlineCode",{parentName:"li"},"true")," are not affected by this function or the internal expanded state.")))),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://github.com/tannerlinsley/react-table/tree/master/examples/expanding"}),"Source")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/expanding"}),"Open in CodeSandbox"))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/api/useExpanded.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-api-use-expanded-md-73f3f5976adac209da2e.js.map
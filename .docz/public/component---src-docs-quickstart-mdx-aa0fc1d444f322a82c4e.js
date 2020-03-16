(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Zy9n:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("mXGw"),o=n.n(a),r=n("/FXl"),l=n("TjRS"),s=n("ZFoC"),c=n("2ajO");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/quickstart.mdx"}});var p={_frontmatter:b},u=l.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(u,i({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"As explained in the ",Object(r.b)("a",i({parentName:"p"},{href:"./concepts"}),"Concepts")," document, react-table is a headless tool, meaning you'll have to build your own UI. We recognize this can be potentially daunting, so here's a very basic table to start with."),Object(r.b)("h2",{id:"define-row-shape"},"Define Row Shape"),Object(r.b)("p",null,"When thinking about a table, you typically have a number of rows split into a number of columns. While table configurations can get far more complex with nested columns, subrows, etc. for this basic quick start, we need to define some data. Note that this data must be defined using ",Object(r.b)("a",i({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usememo"}),Object(r.b)("inlineCode",{parentName:"a"},"React.useMemo"))," in order to take advantage of the power of memoization."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const data = React.useMemo(\n  () => [\n    {\n      col1: 'Hello',\n      col2: 'World',\n    },\n    {\n      col1: 'react-table',\n      col2: 'rocks',\n    },\n    {\n      col1: 'whatever',\n      col2: 'you want',\n    },\n  ],\n  []\n)\n")),Object(r.b)("h2",{id:"define-columns"},"Define Columns"),Object(r.b)("p",null,"The first step to using react-table is to create a set of column definitions to pass into the ",Object(r.b)("inlineCode",{parentName:"p"},"useTable")," hook. These columns must be defined using ",Object(r.b)("inlineCode",{parentName:"p"},"React.useMemo")," in order to take advantage of the power of memoization."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const columns = React.useMemo(\n  () => [\n    {\n      Header: 'Column 1',\n      accessor: 'col1', // accessor is the \"key\" in the data\n    },\n    {\n      Header: 'Column 2',\n      accessor: 'col2',\n    },\n  ],\n  []\n)\n")),Object(r.b)("h2",{id:"implement-usetable-hook"},"Implement ",Object(r.b)("inlineCode",{parentName:"h2"},"useTable")," hook"),Object(r.b)("p",null,"Now that you have the basic ",Object(r.b)("inlineCode",{parentName:"p"},"columns")," and ",Object(r.b)("inlineCode",{parentName:"p"},"data")," defined, you can pass those into ",Object(r.b)("inlineCode",{parentName:"p"},"useTable")," and retrieve the properties you need."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const {\n  getTableProps,\n  getTableBodyProps,\n  headerGroups,\n  rows,\n  prepareRow,\n} = useTable({ columns, data })\n")),Object(r.b)("p",null,"If you're new to JavaScript (especially ES2015+), this syntax may look a little strange. The lefthand side of the assigment is using ",Object(r.b)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}),"object destructuring")," to extract the properties we need that are returned from the ",Object(r.b)("inlineCode",{parentName:"p"},"useTable")," hook (or function). On the right hand side, at a minimum, ",Object(r.b)("inlineCode",{parentName:"p"},"useTable")," needs to be provided with an object containing the memoized columns and data that we created above."),Object(r.b)("h2",{id:"build-a-basic-ui-structure"},"Build a basic UI structure"),Object(r.b)("p",null,"OK, so that's great, we've implemented the hook, but we still don't have a table to show, right? Let's use the properties returned from ",Object(r.b)("inlineCode",{parentName:"p"},"useTable")," to build a basic table structure."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"return (\n  <table {...getTableProps()}>\n    <thead>\n      {headerGroups.map(headerGroup => (\n        <tr {...headerGroup.getHeaderGroupProps()}>\n          {headerGroup.headers.map(column => (\n            <th {...column.getHeaderProps()}>{column.render('Header')}</th>\n          ))}\n        </tr>\n      ))}\n    </thead>\n    <tbody {...getTableBodyProps()}>\n      {rows.map(row => {\n        prepareRow(row)\n        return (\n          <tr {...row.getRowProps()}>\n            {row.cells.map(cell => {\n              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>\n            })}\n          </tr>\n        )\n      })}\n    </tbody>\n  </table>\n)\n")),Object(r.b)("p",null,'Again, if you\'re relatively new to JavaScript (or ES2015+ syntax), you may wonder, "What is with all the ...s?". This is the ',Object(r.b)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"}),"spread syntax")," that ",Object(r.b)("em",{parentName:"p"},"spreads")," all properties of an object (or array) without having to manually extract them all. So, with the first row, ",Object(r.b)("inlineCode",{parentName:"p"},"<table {...getRowProps()}>")," will return a ",Object(r.b)("inlineCode",{parentName:"p"},"table")," element with all of the properties returned by ",Object(r.b)("inlineCode",{parentName:"p"},"getTableProps()"),"."),Object(r.b)("h2",{id:"final-result"},"Final Result"),Object(r.b)("p",null,"If we put all of this together, we should get a very basic (boring) table. (",Object(r.b)("em",{parentName:"p"},"Styles added just to make it a little more attractive..."),")"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The following example is a live component, so as you make changes in the code, it should update the table at the top.")),Object(r.b)(s.b,{__position:0,__code:"() => {\n  const data = React.useMemo(\n    () => [\n      {\n        col1: 'Hello',\n        col2: 'World',\n      },\n      {\n        col1: 'react-table',\n        col2: 'rocks',\n      },\n      {\n        col1: 'whatever',\n        col2: 'you want',\n      },\n    ],\n    [],\n  )\n  const columns = React.useMemo(\n    () => [\n      {\n        Header: 'Column 1',\n        accessor: 'col1', // accessor is the \"key\" in the data\n      },\n      {\n        Header: 'Column 2',\n        accessor: 'col2',\n      },\n    ],\n    [],\n  )\n  const {\n    getTableProps,\n    getTableBodyProps,\n    headerGroups,\n    rows,\n    prepareRow,\n  } = useTable({ columns, data })\n  return (\n    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>\n      <thead>\n        {headerGroups.map(headerGroup => (\n          <tr {...headerGroup.getHeaderGroupProps()}>\n            {headerGroup.headers.map(column => (\n              <th\n                {...column.getHeaderProps()}\n                style={{\n                  borderBottom: 'solid 3px red',\n                  background: 'aliceblue',\n                  color: 'black',\n                  fontWeight: 'bold',\n                }}\n              >\n                {column.render('Header')}\n              </th>\n            ))}\n          </tr>\n        ))}\n      </thead>\n      <tbody {...getTableBodyProps()}>\n        {rows.map(row => {\n          prepareRow(row)\n          return (\n            <tr {...row.getRowProps()}>\n              {row.cells.map(cell => {\n                return (\n                  <td\n                    {...cell.getCellProps()}\n                    style={{\n                      padding: '10px',\n                      border: 'solid 1px gray',\n                      background: 'papayawhip',\n                    }}\n                  >\n                    {cell.render('Cell')}\n                  </td>\n                )\n              })}\n            </tr>\n          )\n        })}\n      </tbody>\n    </table>\n  )\n}",__scope:{props:n,DefaultLayout:l.a,Playground:s.b,useTable:c.useTable},mdxType:"Playground"},(function(){var e=o.a.useMemo((function(){return[{col1:"Hello",col2:"World"},{col1:"react-table",col2:"rocks"},{col1:"whatever",col2:"you want"}]}),[]),t=o.a.useMemo((function(){return[{Header:"Column 1",accessor:"col1"},{Header:"Column 2",accessor:"col2"}]}),[]),n=Object(c.useTable)({columns:t,data:e}),a=n.getTableProps,l=n.getTableBodyProps,s=n.headerGroups,b=n.rows,p=n.prepareRow;return Object(r.b)("table",i({},a(),{style:{border:"solid 1px blue"}}),Object(r.b)("thead",null,s.map((function(e){return Object(r.b)("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return Object(r.b)("th",i({},e.getHeaderProps(),{style:{borderBottom:"solid 3px red",background:"aliceblue",color:"black",fontWeight:"bold"}}),e.render("Header"))})))}))),Object(r.b)("tbody",l(),b.map((function(e){return p(e),Object(r.b)("tr",e.getRowProps(),e.cells.map((function(e){return Object(r.b)("td",i({},e.getCellProps(),{style:{padding:"10px",border:"solid 1px gray",background:"papayawhip"}}),e.render("Cell"))})))}))))})))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/quickstart.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-quickstart-mdx-aa0fc1d444f322a82c4e.js.map
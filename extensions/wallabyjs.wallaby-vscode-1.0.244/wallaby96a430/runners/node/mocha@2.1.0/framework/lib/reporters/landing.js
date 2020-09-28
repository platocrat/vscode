/*
 * Wallaby.js - v1.0.963
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
function Landing(e){function t(){var e=Array(n).join("-");return"  "+color("runway",e)}Base.call(this,e);var i=this,n=(this.stats,.75*Base.window.width|0),r=e.total,s=process.stdout,o=color("plane","✈"),a=-1,l=0;e.on("start",function(){s.write("\n\n\n  "),cursor.hide()}),e.on("test end",function(e){var i=-1==a?n*++l/r|0:a;"failed"==e.state&&(o=color("plane crash","✈"),a=i),s.write("["+(n+1)+"D[2A"),s.write(t()),s.write("\n  "),s.write(color("runway",Array(i).join("⋅"))),s.write(o),s.write(color("runway",Array(n-i).join("⋅")+"\n")),s.write(t()),s.write("[0m")}),e.on("end",function(){cursor.show(),console.log(),i.epilogue()})}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=Landing,Base.colors.plane=0,Base.colors["plane crash"]=31,Base.colors.runway=90,Landing.prototype.__proto__=Base.prototype;
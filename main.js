console.log("Hello World");
// 单行注释
/**多行注释
 * 多行
 * 多行
 * 多行
 * @abstract 针对某个element做注释
 * @a 针对某个element做注释
 * TODO:可以写接下来要做的事
 *
 * FIXME:这里可以写要修复的bug
 */
{
  console.clear();
  // 一定要带括号 快捷键ccl
  let myName = "Raymond";
  // 变量，之后可以重新赋值

  const myName2 = "aaa";
  // 常量，之后不可以重新赋值

  var myName3 = "Vincent";
  // var 没有作用域，可以在作用域之外使用，会变得很麻烦。是个缺陷，名字叫变量提升。
  // 一般不用var做变量

  console.log(myName);
  console.log(myName2);
  console.log(myName3);
}

console.log(myName3);

{
  console.clear();
  let a = "'Raymond'";
  let b = '"XXX"';
  let c = `AAAAA '' ""`;
  // 反引号里可以写双引号和单引号
  // 反引号里可以直接回车换行，但是如果写了\n也可以换行

  let d = "ghyu ' \\ \n huio ";
  //  反斜杠\ 是转义符，\'会显示单引号，\\会显示斜杠，\n是换行，

  let e = `${a} ${b}`;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}

{
  console.clear();
  let a = 1;
  let b = 2;
  let c = a + b;
  let d = a - b;
  let e = a * b;
  let f = a / b;
  console.log("c:", c);
  // 用逗号隔开打出多个数据
  console.log("d:", d);
  console.log("e:", e);
  console.log("f:", f);

  let g = 1 / 0;
  console.log(g);
  // 得到inifity
}

{
  console.clear();
  let a = 1;
  console.log("a type is", typeof a);

  a = "1";
  // 在javascript里先赋值了数值，再赋值字符串，不会报错，是可以重新赋值的
  // 用typeof查看数据类型
  console.log("a type is", typeof a);
}

{
  console.clear();
  let a = "a";
  let b = "b";
  let c = a + b;
  let d = a - b;
  console.log("c:", c, typeof c);
  // 字符串可以相加，结果就是拼在一起
  console.log(d);
  // 字符串不会相减，结果是NaN,NOT A NUMBER
}

{
  let a = 1; //number
  let b = "1"; //string
  let c = Infinity; //infinity
  let d = NaN; // NaN
  let e = undefined; //没有定义
  let f = null; //空
  // 空和没有定义不一样，置空就是一种定义，没有定义是根本就不知道要定义什么
  let g = true; // true or false, true是1，false是0 (bool类型)
}

{
  if ("") {
    console.log("This is true branch");
  } else {
    console.log("This is false branch");
  }
  //0 false '' NaN null undefined =>false
}

{
  let a = 1;
  let b = 2;

  let Active = true;
  if (Active) {
    let c = a + b;
    console.log("c = a +b");
    console.log("do something");
  } else {
    let c = a + b;
    console.log(c);
  }
}

{
  let a = 3;
  if (a > 10) {
    if (a < 20) {
      console.log(a);
    } else {
      console.error(a);
    }
  } else {
    console.error(a);
  }

  if (a > 10 && a > 20) {
    // &&且
    console.log(a);
  } else {
    console.error(a);
  }

  if (a <= 10 || a >= 20) {
    // ||或
    console.error(a);
  } else {
    console.log(a);
  }
}

// if(!a){

// }

// if(){

// }else if(){

// }else if(){

// }else{

// }

// }

{
  console.clear();
  const a = [];
  console.log(typeof a);

  console.log(Array.isArray(a));

  const b = {};
  console.log(Array.isArray(b));
  console.log(typeof b);
}

{
  console.time("create a");
  const a = [1, 2, 3, true, false, "name", [4, 5, 6]];
  console.timeEnd("create a");
  console.log(a);
  console.table(a);

  console.time("create b");
  const b = {
    name: "XXX",
    age: 18,
    1: 1,

    3: 8,
    2: 4,
    // list:a
  };
  // 内容会自动排序，字母顺序和数字顺序，且数字会放在字母前面

  console.timeEnd("create b");

  console.log(b);
  console.table(b);
}

// 控制台打印的方式
{
  // console.clear();
  console.log();
  console.error("0");
  console.table();
  console.warn("1");

  console.time();
  console.timeEnd();
}

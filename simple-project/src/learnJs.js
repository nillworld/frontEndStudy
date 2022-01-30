let cl0 = "0";

function closure2() {
  let cl2 = "2";

  // console.log(cl0, cl1, cl2);
  // "cl1"은 스코프에 잡혀있지 않음.
}

function closure1() {
  let cl1 = "1";
  console.log(cl0, cl1);
}

function closure1_1() {
  function closure2_1() {
    let cl2_1 = "2_1";
    console.log(cl0, cl1_1, cl2_1);
    // cl0 => window, cl1 => closure-closure1_1(), cl2 => local
  }
  let cl1_1 = "1_1";
  closure2_1();
}

closure1();
closure1_1();

//////////////////////////

function test(first) {
  function test2(secound) {
    return first + secound;
  }
  return test2;
}

let add1 = test(1);
console.log(add1(1)); // 1+1
console.log(add1(2)); // 1+2

let add2 = test(2);
console.log(add2(1)); // 2+1
console.log(add2(2)); // 2+2

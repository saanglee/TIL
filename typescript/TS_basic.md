# 2.1 Implicit Types vs Explicit Types

Type system
: specify type, have to explicit
define what is the type of variavle , or just create variable

let a = "hello" // string
a = "by" // string
a = 1 // string -> number : in JS, np problem | in TS, problem
TS infer type

let b : booleam = "x" // error -> b is subpposed to be a booleam
"Type checker"

let b : booleam = false // no error
let b = false // ok

let c = [1,2,3] // TS infer the type, number array
c.push("1") // in JS possible, in TS problem we don't mix type

let c : number[] = []
c.push("1") // error

let c = [] // type any

// should try to keep the explicit to a minimum
// better TS infer it, we can save time

const player = {
name: "nico"
}
player.name = 1 // error
player.hello() // error

# 2.2 Types of TS part One

```ts
// 복습
let a: number = 1;
let b: string = "i1";
let c: boolean[] = [true];

let a: number = 1;
let a1 = 1;

let b: string = "i1";
let c: boolean[] = [true];
// variable : type
```

optional types

```ts
const player = {
  name: "nico",
};

const playerNico: {
  name: string;
  age?: number; // age is optional
} = {
  name: "nico",
};
```

---> age ? : number | undefined

```ts
if (playerNico.age < 10) {
} // error - Object is possibly 'undefined'.

if (playerNico.age && playerNico.age < 10) {
} // ok
```

### type alias

```ts
type Age = number;
type Player = {
  name: string;
  age?: Age;
};
```

```ts
 const playerSang : {
     name : string,
     age ? :number // 위 타입과 동일 - type alias 지정 가능
 } = {
     name:"sang"

const sang :  Player = {
    name:"sang"
}
}

```

```ts

```

// specify return type of func

function playerMaker(name:string) : Player{
return {
// name:name,
name
}
}
const nico = playerMaker("nico");

```ts

```

// if you try to add age an age to nico,
// change return type of func --> :Player{ ... }
nico.age = 12 // allows to change

// how we can type an object

1. optional types
2. create type alias
3. spacify the types of argument
4. specify the return types of func

```ts

```

```ts

```

//----------------
let a : number = 1;
let a1 = 1;

let b : string = "i1";
let c : boolean[] = [true];

// variable : type

// optional types

const player = {
name:"nico"
}

const playerNico : {
name : string,
age ? :number // age is optional
} = {
name:"nico"
};

// age ? : number | undefined

// if (player2.age < 10) {} // error - Object is possibly 'undefined'.

if (playerNico.age && playerNico.age < 10) {}

// const playerSang : {
// name : string,
// age ? :number // 위 타입과 동일 - type alias 지정 가능
// } = {
// name:"sang"
// }
type Age = number;
type Player = {
name : string,
age ? :Age
}
const sang : Player = {
name:"sang"
}

// specify return type of func

function playerMaker(name:string) : Player{
return {
// name:name,
name
}
}
const nico = playerMaker("nico");

// if you try to add age an age to nico,
// change return type of func --> :Player{ ... }
nico.age = 12 // allows to change

// how we can type an object

1. optional types
2. create type alias
3. spacify the types of argument
4. specify the return types of func

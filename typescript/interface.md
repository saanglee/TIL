# 인터페이스란?

인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미합니다.

타입스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있습니다.

- 객체의 스펙(속성과 속성의 타입)
- 함수의 파라미터
- 함수의 스펙(파라미터, 반환 타입 등)
- 배열과 객체를 접근하는 방식
- 클래스

## 예제

```ts
function logAge(obj: { age: number }) {
  console.log(obj.age);
}

let user = { name: "sang", age: 28 };

logAge(person); // 28
```

위 `logAge()` 함수에서 받는 인자의 형태는 age를 속성으로 갖는 객체입니다.

인터페이스를 적용하면 아래코드와 같습니다.

```ts
interface userAge {
  age: number;
}
// interface를 사용해 logAge()의 인자를 좀 더 명시적으로 확인한다.

// logAge()의 인자는 userAge 라는 타입을 가져야한다.
function logAge(obj: userAge) {
  console.log(obj.age);
}

let user = { name: "sang", age: 28 };
logAge(user); // 28
```

#### 위 코드에서 알 수 있는 것

- 인터페이스 `userAge`를 함수 `logAge`의 인자로 받아 사용할 때, 인터페이스 `userAge`의 속성 개수와 인자로 받는 객체 user의 속성 개수는 일치하지 않아도 된다.
- 즉 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 개수가 더 많아도 상관 없다.
- 또한 인터페이스에 선언된 속성 순서를 지키지 않아도 된다.

## 옵션 속성

인터페이스에 정의 된 속성 중 선택적으로 사용 가능한 속성을 말합니다.
옵션 속성의 모양은 아래와 같습니다.

```ts
interface 인터페이스_이름 {
  속성?: 타입;
}
```

예제

```ts
interface CoffeeMaker {
  shots: number;
  hasMilk?: boolean; // optional
  hasSugar?: boolean; // optional
}

let myLatte = {
  shots: 2,
  hasMilk: true,
};

function makeCoffee(coffee: CoffeeMaker) {
  console.log(`Pulling ${coffee.shots} shots... ☕️`);
}

makeCoffee(myLatte); // Pulling 2 shots... ☕️
```

**정리**

- 함수 makeCoffee() 에서 인터페이스 CoffeeMaker을 인자의 타입으로 선언
- myLatte은 shots와 hasMilk속성만 있고 hasSugar속성은 없지만 makeCoffee의 인자로 사용이 가능하다.
- hasSugar은 옵션 속성이기 때문!

## 읽기 전용 속성 `readonly`

- 인터페이스로 객체를 처음 생성 할 때에만 값을 할당한다.
- 값 할당 이후로는 변경할 수 없다.

```ts
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer = {
  brand: "Belgian Monk", // 처음 값 할당
};

myBeer.brand = "abcde"; // 재할당 Error
```

(Error) Cannot assign to 'brand' because it is a read-only property.

## 읽기 전용 배열

배열을 선언할 때 `ReadonlyArray<T>` 타입을 사용하면 읽기 전용 배열을 생성할 수 있습니다.

- `ReadonlyArray`로 선언하면 선언하는 시점에만 값을 정의할 수 있다.
- 그 이후로는 배열의 내용을 변경할 수 없다.

```ts
let arr: ReadonlyArray<number> = [1, 2, 3];

arr.splice(0, 1); // Error
arr.push(4); // Error
arr[0] = 100; // Error
```

## 객체 선언과 관련된 타입 체킹

타입스크립트는 인터페이스를 이용하여 객체를 선언할 때 좀 더 엄밀한 속성 검사를 진행합니다.

## 함수 타입 정의

인터페이스는 함수의 타입을 정의할 때에도 사용할 수 있습니다.

```ts
interface login {
  (username: string, password: string): boolean;
}
```

➡️ 함수의 인자 username과 password는 string타입으로, 함수의 반환값은 boolean타입으로 정의

```ts
let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인 했습니다");
  return true;
};
```

## 클래스 타입 정의

클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있습니다.

```ts
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = "Baby Guinness";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}
```

## 인터페이스 확장

클래스와 마찬가지로 인터페이스도 인터페이스 간 확장이 가능합니다.

```ts
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
```

인터페이스 Developer가 인터페이스 Person을 상속받아 사용하는 코드입니다.

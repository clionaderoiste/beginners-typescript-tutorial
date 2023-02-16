import { expect, it } from "vitest";

/*
Original solution 
export const addTwoNumbers = (params : {first: number, second: number}) => {
  return params.first + params.second;
};

But you can use Type or Interface to make it more readable
interface NumbersToBeAdded {
  first: number;
  second: number;
}

It doesn't matter if you use Type or Interface, it's just a matter of preference
*/

type NumbersToBeAdded = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params : NumbersToBeAdded) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});

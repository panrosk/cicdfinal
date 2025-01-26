// hello.test.js
import { describe, it, expect } from "vitest";
import { sayHello } from "../../utils";

describe("sayHello", () => {
  it("should return correct greeting", () => {
    expect(sayHello("John")).toBe("Hello, John!");
    expect(sayHello("")).toBe("Hello, !");
  });

  it("should handle different input types", () => {
    expect(sayHello(123)).toBe("Hello, 123!");
    expect(sayHello(null)).toBe("Hello, null!");
    expect(sayHello(undefined)).toBe("Hello, undefined!");
  });
});

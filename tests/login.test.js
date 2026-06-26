import { describe, test, expect } from "vitest"

function validateLogin(email,password){
    return email!==""&&password!==""
}

describe("login",()=>{
    test("acepta datos",()=>{
        expect(validateLogin("a@a.com", "123456")).toBe(true)
    })
    test("rechaza vacio",()=>{
        expect(validateLogin("", "")).toBe(false)
    })
})
"use server"

import { redirect } from "next/navigation"

export async function doSomething() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return "done"
}

export async function doRedirect() {
  redirect("/test")
}

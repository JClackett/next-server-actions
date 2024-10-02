"use client"

import { doRedirect, doSomething } from "./action"

export function Client() {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          const res = await doSomething()
          alert(res)
        }}
      >
        Call action
      </button>
      <button
        type="button"
        onClick={async () => {
          await doRedirect()
        }}
      >
        Call redirect action
      </button>
    </div>
  )
}

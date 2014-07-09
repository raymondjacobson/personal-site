package main

import (
  "io"
  "log"
  "net/http"
)

func index(res http.ResponseWriter, req *http.Request) {
  io.WriteString(res, "Hello, world!")
}

func main() {
  http.HandleFunc("/", index)
  err := http.ListenAndServe(":1298", nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}
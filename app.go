package main

import (
  "io"
  "log"
  "github.com/hoisie/mustache"
  "net/http"
)

// Handlers
func makeRoutes() {
  http.HandleFunc("/", index)
}

// Routing
func reqLogger(req *http.Request) {
  log.Println(req.Method, req.URL)
}
func index(res http.ResponseWriter, req *http.Request) {
  reqLogger(req)
  return_vals := map[string]string{
    "c":"world",
  }
  data := mustache.RenderFile("templates/layout.html", return_vals)
  io.WriteString(res, data)
}

func main() {
  port := ":1298"
  makeRoutes()
  log.Println("Server listening on", port)
  err := http.ListenAndServe(port, nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}
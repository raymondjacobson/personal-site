package main

import (
  "io"
  "log"
  "github.com/hoisie/mustache"
  "net/http"
)

// Handlers
func grabHandles() {
  http.Handle(
    "/assets/",
    http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))),
  )
  http.HandleFunc("/", index)
}

// Routing
func reqLogger(req *http.Request) {
  log.Println(req.Method, req.URL)
}
func index(res http.ResponseWriter, req *http.Request) {
  reqLogger(req)
  return_vals := map[string]string{
    "title":"Raymond Jacobson",
  }
  data := mustache.RenderFile("templates/layout.html", return_vals)
  io.WriteString(res, data)
}

func main() {
  port := ":1298"
  grabHandles()
  log.Println("Server listening on", port)
  err := http.ListenAndServe(port, nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}
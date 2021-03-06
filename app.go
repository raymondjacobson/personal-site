package main

import (
  "io"
  "log"
  "github.com/hoisie/mustache"
  "net/http"
  "os"
)

// Handlers
func grabHandles() {
  // Static assets
  http.Handle(
    "/assets/",
    http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))),
  )
  // Templates so angular can find partials
  http.Handle(
    "/templates/",
    http.StripPrefix("/templates/", http.FileServer(http.Dir("templates"))),
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
  port := ":" + os.Args[1]
  grabHandles()
  log.Println("Server listening on", port)
  err := http.ListenAndServe(port, nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}
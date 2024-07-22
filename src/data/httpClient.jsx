const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTA1NDUzMjVhZjVhMTBkZTdjNWRmNmY1MDg5M2M4ZCIsIm5iZiI6MTcyMTU3OTk1OS4wMjQwNTYsInN1YiI6IjY2OWQzOGNjYTdmNDI5MGQ3NjA1ZmI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVmUKGjJzCULTw2FDD5vTplcrBFnxdSt7b20kdVFFa0`,
    },
  }).then((result) => result.json());
}

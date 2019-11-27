const domain = "https://fake-terraform-api.herokuapp.com";

const responseToJson = response => response.json();
const headers = {
  "X-Terraform": "whatever"
};
const options = {
  headers
};

export function fetchTypes() {
  return fetch(`${domain}/types`, options).then(responseToJson);
}

export function fetchProjects() {
  return fetch(`${domain}/projects`, options).then(responseToJson);
}

export function fetchProject(projectId) {
  return fetch(`${domain}/projects/${projectId}`, options).then(responseToJson);
}

export function fetchLearderBoard() {
  return fetch(`${domain}/leaderboard`, options).then(responseToJson);
}

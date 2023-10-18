let prompts = [
  {
    type: "input",
    name: "pipeline_name",
    message: "Enter the pipeline name:",
    default: "tf-basic"
  },
  {
    type: "input",
    name: "config-json",
    message: "Encode and Enter your config-json:",
    default: "shggjhgjkglhfkjhk"
  },
  {
    type: "input",
    name: "repoURL",
    message: "Enter your git repository ssh URL:",
    default: "repo URL"
  },
  {
    type: "input",
    name: "branch",
    message: "Enter your branch name:",
    default: "main"
  },
  {
    type: "input",
    name: "registryUserName",
    message: "Enter your image registry Name:",
    choices: ["ecr", "acr", "gitpackage", "docker-hub"]
  },
  {
    when: props => props.registryName === "ecr",
    type: "input",
    name: "registryURI",
    message: "Enter your registry URI:"
  },
  {
    when: props => props.registryName === "acr",
    type: "input",
    name: "registryName",
    message: "Enter your registry name:"
  },
  {
    when: props => props.registryName === "gitpackage",
    type: "input",
    name: "registryName",
    message: "Enter your git hub user name:"
  },
  {
    when: props => props.registryName === "docker-hub",
    type: "input",
    name: "registryName",
    message: "Enter your docker hub user name:"
  },
  {
    type: "input",
    name: "imageName",
    message: "Enter Image name:",
    default: "tekton"
  },
  {
    type: "input",
    name: "sshprivatekey",
    message: "Encode and Enter your sshprivatekey:",
    default: "gjhygfkujyhglkioh;loi;ewtgreyh"
  },
  {
    type: "input",
    name: "sshconfig",
    message: "Encode and Enter your ssh_config file:",
    default: "gjhygfkujyhglkioh;loi;ewtgreyh"
  }
];

module.exports = prompts;

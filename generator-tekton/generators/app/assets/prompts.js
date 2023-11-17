let prompts = [
  {
    type: "input",
    name: "namespaceName",
    message: "Enter the namespace name:",
    default: "tf-basic"
  },
  {
    type: "input",
    name: "pipelineName",
    message: "Enter the pipeline name:",
    default: "tf-basic-pipeline"
  },
  {
    type: "input",
    name: "dockerConfig",
    message: "Enter your base64-encoded config-json:",
    default: "shggjhgjkglhfkjhk"
  },
  {
    type: "input",
    name: "repoURL",
    message: "Enter your git repository ssh URL:",
    default: "git@github.com:Nandiniperikala/spring.git"
  },
  {
    type: "input",
    name: "branch",
    message: "Enter your branch name:",
    default: "main"
  },
  {
    type: "input",
    name: "imageRepositoryURL",
    message: "Enter your image repository URL Name:",
    default: "ticacr.azurecr.io/azure-go:latest"
  },
  {
    type: "input",
    name: "deployKey",
    message: "Enter your base64-encoded ssh privateKey:",
    default: "gjhygfkujyhglkioh;loi;ewtgreyh"
  },
  {
    type: "input",
    name: "sshConfig",
    message: "Enter your base64-encoded ssh_config file:",
    default: "gjhygfkujyhglkioh;loi;ewtgreyh"
  },
  {
    type: "list",
    name: "buildStrategy",
    message: "Enter your buildstrategy:",
    choices: ["jib", "kaniko"]
  },

  {
    type: "input",
    name: "cloudProvider",
    message: "Enter your cloudProvider:",
    choices: ["azure", "aws"]
  },
  {
    when: props => props.buildStrategy === "kaniko",
    type: "input",
    name: "PathtoContext",
    message: "Enter your Docker file directory path:",
    default: "go"
  },
  {
    when: props => props.buildStrategy === "kaniko",
    type: "input",
    name: "PathtoDockerfile",
    message: "Enter your Docker file path:",
    default: "go/Dockerfile"
  }
];

module.exports = prompts;

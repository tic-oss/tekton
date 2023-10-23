const fileListjibpipeline = [
  "jib/pipeline/00-namespace.yml",
  "jib/pipeline/01-ssh-credentials.yml",
  "jib/pipeline/02-rbac.yml",
  "jib/pipeline/03-pipeline.yml",
  "jib/pipeline/04-pipelinerun.yml",
  "README.md"
];

const fileListjibtriggers = [
  "jib/triggers/00-namespace.yml",
  "jib/triggers/01-ssh-credentials.yml",
  "jib/triggers/02-rbac.yml",
  "jib/triggers/03-pipeline.yml",
  "jib/triggers/04-event-listener.yml",
  "jib/triggers/05-ingress-event.yml",
  "jib/triggers/06-triggers.yml",
  "README.md"
];

const fileListkanikopipeline = [
  "kaniko/pipeline/00-namespace.yml",
  "kaniko/pipeline/01-ssh-credentials.yml",
  "kaniko/pipeline/02-docker-credentials.yml",
  "kaniko/pipeline/03-rbac.yml",
  "kaniko/pipeline/04-pipeline.yml",
  "kaniko/pipeline/05-pipelinerun.yml",
  "README.md"
];

const fileListkanikotriggers = [
  "kaniko/triggers/00-namespace.yml",
  "kaniko/triggers/01-ssh-credentials.yml",
  "kaniko/triggers/02-docker-credentials.yml",
  "kaniko/triggers/03-rbac.yml",
  "kaniko/triggers/04-pipeline.yml",
  "kaniko/triggers/05-event-listener.yml",
  "kaniko/triggers/06-ingress-event.yml",
  "kaniko/triggers/07-triggers.yml",
  "README.md"
];

module.exports = {
  fileListjibpipeline,
  fileListjibtriggers,
  fileListkanikopipeline,
  fileListkanikotriggers
};

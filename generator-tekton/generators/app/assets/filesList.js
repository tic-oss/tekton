const fileListpipeline = [
  "pipeline/00-namespace.yml",
  "pipeline/01-ssh-credentials.yml",
  "pipeline/02-docker-credentials.yml",
  "pipeline/03-rbac.yml",
  "pipeline/04-pipeline.yml",
  "pipeline/05-pipelinerun.yml",
  "pipeline/README.md"
];

const fileListtriggers = [
  "triggers/00-namespace.yml",
  "triggers/01-ssh-credentials.yml",
  "triggers/02-docker-credentials.yml",
  "triggers/03-rbac.yml",
  "triggers/04-pipeline.yml",
  "triggers/05-pipelinerun.yml",
  "triggers/06-event-listener.yml",
  "triggers/07-ingress-event.yml",
  "triggers/08-triggers.yml",
  "triggers/README.md"
];

module.exports = {
  fileListpipeline,
  fileListtriggers
};

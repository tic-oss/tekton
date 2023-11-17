const Generator = require("yeoman-generator");

// Const prompts = require("./assets/prompts");

module.exports = class extends Generator {
  prompting() {
    // Use the prompts from prompt.js
    return this.prompt(require("./assets/prompts")).then(props => {
      // Store the user's answers in the context
      this.props = props;
    });
  }

  writing() {
    // You can access the user's answers using this.props
    const {
      namespaceName,
      pipelineName,
      dockerConfig,
      repoURL,
      branch,
      imageRepositoryURL,
      deployKey,
      sshConfig,
      buildStrategy,
      cloudProvider,
      PathtoContext,
      PathtoDockerfile
    } = this.props;

    let templateDirectory;

    if (buildStrategy === "jib") {
      if (cloudProvider) {
        templateDirectory = "jib/triggers";
      } else {
        templateDirectory = "jib/pipeline";
      }
    } else if (buildStrategy === "kaniko") {
      if (cloudProvider) {
        templateDirectory = "kaniko/triggers";
      } else {
        templateDirectory = "kaniko/pipeline";
      }
    } else {
      // Handle other build strategies or provide a default
      this.log("Unsupported build strategy. No files generated.");
      return;
    }

    this.fs.copyTpl(
      this.templatePath(templateDirectory),
      this.destinationPath("pipeline-files"),
      {
        // Pass variables that you want to replace in the templates
        namespaceName,
        pipelineName,
        dockerConfig,
        repoURL,
        branch,
        imageRepositoryURL,
        deployKey,
        sshConfig,
        buildStrategy,
        cloudProvider,
        PathtoContext,
        PathtoDockerfile
      }
    );
  }

  install() {
    // Install dependencies or perform other installation tasks if needed
    this.log("files Generation completed ...");
  }
};

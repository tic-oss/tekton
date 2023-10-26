const Generator = require("yeoman-generator");
const path = require("path");
const fs = require("fs");

const {
  fileListjibpipeline,
  fileListjibtriggers,
  fileListkanikopipeline,
  fileListkanikotriggers
} = require("./assets/filesList");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    if (opts.file) {
      const filePath = path.resolve(opts.file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const options = JSON.parse(JSON.stringify(fileContents));
      this.options = options;
    }
  }

  writing() {
    const copyOpts = {
      globOptions: {
        ignore: []
      }
    };

    const options = JSON.parse(this.options);
    options.onRegistry = Boolean(options.Registry !== undefined);
    if (options.buildStrategy === "jib") {
      if (options.domain === undefined || options.domain === "") {
        this._fileHelper(fileListjibtriggers, options, copyOpts);
      } else {
        this._fileHelper(fileListjibpipeline, options, copyOpts);
      }
    }

    if (options.buildStrategy === "kaniko") {
      if (options.domain === undefined || options.domain === "") {
        this._fileHelper(fileListkanikotriggers, options, copyOpts);
      } else {
        this._fileHelper(fileListkanikopipeline, options, copyOpts);
      }
    }
  }

  _fileHelper(fileList, opts, copyOpts) {
    fileList.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`pipeline`),
        opts,
        copyOpts
      );
    });
  }

  install() {
    this.log("files Generation completed ...");
  }
};

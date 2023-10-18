const Generator = require("yeoman-generator");
const path = require("path");
const fs = require("fs");

const { fileListpipeline, fileListtriggers } = require("./assets/filesList");

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
    if (options.pipeline === "true") {
      this._fileHelper(fileListpipeline, options, copyOpts);
    }

    if (options.triggers === "true") {
      this._fileHelper(fileListtriggers, options, copyOpts);
    }
  }

  _fileHelper(fileList, opts, copyOpts) {
    fileList.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`tek/${file}`),
        opts,
        copyOpts
      );
    });
  }

  install() {
    this.log("files Generation completed ...");
  }
};

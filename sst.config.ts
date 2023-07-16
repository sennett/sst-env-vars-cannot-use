import { SSTConfig } from "sst";
import { NextjsSite, Config } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "my-app",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const MY_ENV_VAR = new Config.Parameter(stack, "MY_ENV_VAR", {
        value: "oh look a value",
      });

      const site = new NextjsSite(stack, "site", {
        bind: [MY_ENV_VAR],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;

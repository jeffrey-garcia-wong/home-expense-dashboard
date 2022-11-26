import * as yaml from "js-yaml";
import * as fs from "fs";

import MockData from "./MockData";

const MockDataWriter = (() => {
  return {
    create: () => {
      const data: any[] = MockData.create();
      const output = yaml.dump(data, {});
      try {
        fs.writeFileSync("./public/data-dev.yml", output);
        // file written successfully
      } catch (err) {
        console.error(err);
      }
    },
  };
})();
export default MockDataWriter;

MockDataWriter.create();

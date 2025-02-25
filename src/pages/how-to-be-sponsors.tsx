import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import BasePage from "../components/BasePage/BasePage";

const page = () => (
  <BasePage pageName="How to be a sponsor">Welcome to the How to be a sponsors page!</BasePage>
);

export default page;

export const Head: HeadFC = () => <title>How to be a sponsors</title>;

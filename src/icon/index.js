import React from "react";

import Copy from "./Copy";
import Down from "./Down";
import Environment from "./Environment";
import GitHub from "./GitHub";
import Inbox from "./Inbox";
import More from "./More";
import Rabbit from "./Rabbit";
import Smile from "./Smile";
import Mobile from "./Mobile";
import PC from "./PC";
import Wechat from "./Wechat";
import Zhihu from "./Zhihu";

export default (props) => {
  switch (props.name) {
    case "copy":
      return <Copy {...props} />;
    case "down":
      return <Down {...props} />;
    case "environment":
      return <Environment {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "inbox":
      return <Inbox {...props} />;
    case "more":
      return <More {...props} />;
    case "rabbit":
      return <Rabbit {...props} />;
    case "smile":
      return <Smile {...props} />;
    case "pc":
      return <PC {...props} />;
    case "mobile":
      return <Mobile {...props} />;
    case "wechat":
      return <Wechat {...props} />;
    case "zhihu":
      return <Zhihu {...props} />;
    default:
      return <svg />;
  }
};

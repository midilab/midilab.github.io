import React from "react";
import { DocLinkButtonTemplate, ExternalLinkButtonTemplate } from "../ActionButtons/template";

export const HeroBlockTemplate = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      name: "background",
      label: "Background",
      type: 'image',
    },
    {
      name: "title",
      label: "Title",
      description: "By default this is the site title",
      type: "string",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      description: "By default this is the site tagline",
      type: "string",
    },
    {
      type: "object",
      list: true,
      name: "actions",
      label: "Action Buttons",
      templates: [DocLinkButtonTemplate, ExternalLinkButtonTemplate],
    },
  ],
};

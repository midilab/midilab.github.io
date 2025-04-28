import React from "react";
import { titleFromSlug } from "../../../util";

export const DocLinkButtonTemplate = {
  name: "doc",
  label: "Doc Link",
  ui: {
    itemProps: (item) => {
      return {
        label: item?.title
          ? item?.title
          : item?.document
          ? titleFromSlug(item?.document)
          : '',
      };
    },
  },
  fields: [
    {
      name: "title",
      label: "Label",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Document",
      name: "document",
      type: "reference",
      collections: ["doc"],
      required: true,
    },
    {
      name: "className",
      label: "className",
      type: "string",
    },
  ],
};

export const ExternalLinkButtonTemplate = {
  name: "link",
  label: "External Link",
  ui: {
    itemProps: (item) => {
      return {
        label: item?.title ? item?.title : item.name,
      };
    },
  },
  fields: [
    {
      name: "title",
      label: "Label",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "href",
      label: "URL",
      type: "string",
      required: true,
    },
    {
      name: "className",
      label: "className",
      type: "string",
    },
  ],
};

const ActionButtonsContainerTemplate = {
  name: "ActionButtons",
  label: "Action Buttons",
  fields: [
    {
      type: "object",
      list: true,
      name: "actions",
      label: "Action Buttons",
      templates: [DocLinkButtonTemplate, ExternalLinkButtonTemplate],
    },
  ],
};

export default ActionButtonsContainerTemplate;
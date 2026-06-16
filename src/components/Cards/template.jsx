import { DocLinkButtonTemplate, ExternalLinkButtonTemplate } from "../ActionButtons/template";

const CardBlockTemplate = {
    name: "Card",
    label: "Card",
    ui: {
        defaultItem: {
            variant: "light",
        },
        itemProps: (item) => {
            return { label: item?.title };
        },
    },
    fields: [
        {
            name: "variant",
            label: "Variant",
            type: "string",
            options: ["light", "featured", "cinematic", "pistachioband", "photoframe"],
        },
        {
            name: "photo",
            label: "Photo",
            type: 'image',
        },
        {
            name: "youtubeVid",
            label: "Youtube VID",
            type: "string",
        },
        {
            name: "title",
            label: "Title",
            type: "string",
        },
        {
            name: "content",
            label: "Content",
            type: "string",
        },
        {
            name: "to",
            label: "URL",
            type: "string",
        },
        {
            name: "actionButton",
            label: "Action Button",
            type: "string",
        },
    ],
  };

export const CardSectionBlockTemplate = {
    name: "CardSection",
    label: "Card Section",
    fields: [
      {
        type: "object",
        list: true,
        name: "cards",
        label: "Cards",
        templates: [CardBlockTemplate],
      },
    ],
  };
  
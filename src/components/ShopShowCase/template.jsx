import { DocLinkButtonTemplate, ExternalLinkButtonTemplate } from "../ActionButtons/template";

const ItemBlockTemplate = {
    name: "product",
    label: "Product",
    ui: {
        defaultItem: {
            type: "title",
            title: "Title",
        },
        itemProps: (item) => {
            return { label: item?.title };
        },
    },
    fields: [
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
            isTitle: true,
            required: true,
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

export const ShopShowCaseBlockTemplate = {
    name: "ShopShowCase",
    label: "Shop Show Case",
    fields: [
      {
        type: "object",
        list: true,
        name: "items",
        label: "Items",
        templates: [ItemBlockTemplate],
      },
    ],
  };
  
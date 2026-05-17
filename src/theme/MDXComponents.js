import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import YouTubeEmbed from "../components/YouTube";
import { ShopShowCase } from "../components/ShopShowCase";
import { CardSection } from "../components/Cards";
import ActionButtons from "../components/ActionButtons";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";

export default {
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
  YouTube: YouTubeEmbed,
  CardSection,
  ActionButtons,
  ShopShowCase,
  Hero,
  Features,
};